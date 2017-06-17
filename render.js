/**
 * Draw using cavas context.
 * @param  {Object} context Canvas context;
 * @param  {Object} segment Segment instance;
 * @param  {Object} config  Shape caracteristics;
 */
function renderSegment(context, segment, config) {
  context.strokeStyle = config.strokeStyle;
  context.lineWidth = config.lineWidth;
  context.beginPath();
  context.moveTo(segment.x, segment.y);
  context.lineTo(segment.getEndX(), segment.getEndY());
  context.stroke();
}

/**
 * Render arm segments.
 * @param  {Object} context Canvas context;
 * @param  {Object} arm     Arm instance;
 */
function renderArm(context, arm) {
  arm.segments.forEach(
    s => renderSegment(
      context,
      s,
      {
        strokeStyle: 'rgb(20, 204, 237)',
        lineWidth: 5
      }
    )
  );
}
