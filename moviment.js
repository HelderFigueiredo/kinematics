/**
 * @param  {Number} x               X position;
 * @param  {Number} y               Y position;
 * @param  {Number} segmentPosition Segment array position;
 * @param  {Number} segments        Segment list;
 */
function move(x, y, segmentPosition, segments) {

  let segment = segments[segmentPosition];

  segment.setAngle(x, y);
  segment.x = x - Math.cos(segment.angle) * segment.length;
  segment.y = y - Math.sin(segment.angle) * segment.length;

  if (segmentPosition !== 0) {
    move(
      segment.x,
      segment.y,
      segmentPosition - 1,
      segments
    );
  }
}

/**
 * @param  {Number} x            X position;
 * @param  {Number} y            Y position;
 * @param  {Number} segmentIndex Segment array index;
 * @param  {Number} segments        Segment list;
 */
function flex(x, y, segmentIndex, segments) {

  let segment = segments[segmentIndex];

  segment.setAngle(x, y);

  if (segmentIndex !== 0) {
    let parent = segments[segmentIndex - 1];

    flex(
      x - Math.cos(segment.angle) * segment.length,
      y - Math.sin(segment.angle) * segment.length,
      segmentIndex - 1,
      segments
    );
    segment.x = parent.getEndX();
    segment.y = parent.getEndY();
  }
}
