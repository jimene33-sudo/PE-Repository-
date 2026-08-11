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

  // There is deliberately no fullscreen detection here any more. Scaling
  // on fullscreen made the page bigger at the moment it gained vertical
  // space and no width, and it fought with the width-keyed steps that
  // used to live in style.css. The page now renders at one scale and
  // this toggle is the only thing that changes it.
})();
