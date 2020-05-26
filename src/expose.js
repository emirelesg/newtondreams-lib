import p$ from './module';

// window.requestAnimationFrame = (() => {
//   function backupTimeout(callback) {
//     window.setTimeout(callback, 1000 / 60);
//   }
//   return (
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     backupTimeout
//   );
// })();

// window.cancelAnimationFrame = (() =>
//   window.cancelAnimationFrame ||
//   window.webkitCancelRequestAnimationFrame ||
//   window.mozCancelRequestAnimationFrame ||
//   window.oCancelRequestAnimationFrame ||
//   window.msCancelRequestAnimationFrame ||
//   clearTimeout)();

/**
 * The libray is exposed to the window object through this object.
 * Constants can be found by accessing p$.constants.
 * Utils can be accessed through p$.utils.
 * @type {object}
 */
window.p$ = p$;
