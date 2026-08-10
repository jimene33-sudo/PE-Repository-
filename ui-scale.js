/* Presentation mode.
 *
 * Sets data-present="on" on <html>; style.css does the rest through the
 * --ui-boost variable. Loaded on every page so the setting survives
 * navigating from the repository into a document viewer and back.
 *
 * The attribute is applied as early as this file is parsed, so put the
 * <script> in <head> — applied after first paint the page would visibly
 * jump from 100% to 135% on every navigation.
 *
 * Automatic scaling by screen size is pure CSS and needs nothing here.
 */
(function () {
  var KEY = 'pe-presentation-mode';
  var root = document.documentElement;

  function apply(on) {
    if (on) root.setAttribute('data-present', 'on');
    else root.removeAttribute('data-present');
  }

  // Private browsing and some locked-down profiles throw on storage
  // access rather than returning null. The toggle should still work for
  // the current page in that case, so failure here is not fatal.
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  apply(stored === 'on');

  function toggle() {
    var on = root.getAttribute('data-present') !== 'on';
    apply(on);
    try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) {}
    var btn = document.getElementById('present-toggle');
    if (btn) btn.setAttribute('aria-pressed', String(on));
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('present-toggle');
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(root.getAttribute('data-present') === 'on'));
    btn.addEventListener('click', toggle);
  });

  // Ctrl/Cmd + Shift + P from anywhere, so the mode can be changed
  // mid-presentation without hunting for the button — and from the
  // document-viewer pages, which have no button of their own.
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'P' || e.key === 'p')) {
      e.preventDefault();
      toggle();
    }
  });

  /* Fullscreen detection.
   *
   * Two different things both count as "fullscreen" and only one of them
   * is visible to CSS:
   *
   *   - The Fullscreen API (F11, or requestFullscreen). Sets
   *     document.fullscreenElement and matches :fullscreen.
   *   - macOS native window fullscreen — the green button. Sets neither.
   *     It is a window state, not an element state, so CSS cannot see it.
   *
   * The green button is the common case for presenting off a Mac, so it
   * has to be inferred from geometry. When a window goes native
   * fullscreen it covers the menu bar: its top edge sits at y=0 and its
   * outer height equals the full screen height. Merely maximising leaves
   * the window below the menu bar, so screenY is around 25 and the outer
   * height is short by at least that much. A couple of pixels of
   * tolerance absorbs rounding on scaled displays.
   */
  function isFullscreen() {
    if (document.fullscreenElement) return true;
    if (!window.screen || !window.screen.height) return false;
    return window.outerHeight >= window.screen.height - 2 && window.screenY <= 2;
  }

  function syncFullscreen() {
    var want = isFullscreen();
    var have = root.getAttribute('data-fullscreen') === 'on';
    if (want === have) return;          // resize fires continuously; each
                                        // write would re-run the zoom layout
    if (want) root.setAttribute('data-fullscreen', 'on');
    else root.removeAttribute('data-fullscreen');
  }

  syncFullscreen();
  // resize covers the green button and any window move; fullscreenchange
  // covers F11. Both are cheap — syncFullscreen only touches an attribute
  // when the state actually differs from what is already set.
  window.addEventListener('resize', syncFullscreen);
  document.addEventListener('fullscreenchange', syncFullscreen);
})();
