/**
 * CanvasRenderer
 */

( function( root, factory ) {
  // universal module definition
  /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    root.Zdog.CanvasRenderer = factory();
  }
}( this, function factory() {

var CanvasRenderer = { isCanvas: true };

CanvasRenderer.begin = function( ctx ) {
  ctx.beginPath();
};

CanvasRenderer.move = function( ctx, elem, point ) {
  ctx.moveTo( point.x, point.y );
};

CanvasRenderer.line = function( ctx, elem, point ) {
  ctx.lineTo( point.x, point.y );
};

CanvasRenderer.bezier = function( ctx, elem, cp0, cp1, end ) {
  ctx.bezierCurveTo( cp0.x, cp0.y, cp1.x, cp1.y, end.x, end.y );
};

CanvasRenderer.closePath = function( ctx ) {
  ctx.closePath();
};

CanvasRenderer.setPath = function() {};

CanvasRenderer.stroke = function( ctx, elem, isStroke, color, lineWidth ) {
  if ( !isStroke ) {
    return;
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
};

CanvasRenderer.fill = function( ctx, elem, isFill, color ) {
  if ( !isFill ) {
    return;
  }
  ctx.fillStyle = color;
  ctx.fill();
};

CanvasRenderer.end = function() {};

return CanvasRenderer;

}));
