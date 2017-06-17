
class Arm {

  /**
   * @param  {String} action Values: flex or move.
   */
  constructor(action) {
    this.segments = [];
    this.action = action;
  }

  /**
   * @param {Segment} segment Segment instance.
   */
  addSegment(segment) {

    if (this.segments.length === 0) {
      this.segments.push(segment);
    } else {

      let lastSegment = this.segments[this.segments.length - 1];

      segment.x = lastSegment.getEndX();
      segment.y = lastSegment.getEndY();
      this.segments.push(segment);
    }
  }

  /**
   * @param  {Number} x            X position;
   * @param  {Number} y            Y position;
   * @param  {Number} segmentIndex Segment array index;
   */
  flex(x, y, segmentIndex) {

    let segment = this.segments[segmentIndex];

    segment.setAngle(x, y);

    if (segmentIndex !== 0) {
      let parent = this.segments[segmentIndex - 1];

      this.flex(
        x - Math.cos(segment.angle) * segment.length,
        y - Math.sin(segment.angle) * segment.length,
        segmentIndex - 1
      );
      segment.x = parent.getEndX();
      segment.y = parent.getEndY();
    }
  }

  /**
   * @param  {Number} x            X position;
   * @param  {Number} y            Y position;
   * @param  {Number} segmentIndex Segment array position;
   */
  move(x, y, segmentIndex) {

    let segment = this.segments[segmentIndex];

    segment.setAngle(x, y);
    segment.x = x - Math.cos(segment.angle) * segment.length;
    segment.y = y - Math.sin(segment.angle) * segment.length;

    if (segmentIndex !== 0) {
      this.move(
        segment.x,
        segment.y,
        segmentIndex - 1
      );
    }
  }

  /**
   * @param  {Number} x X position;
   * @param  {Number} y Y position;
   */
  follow(x, y) {
    if (this.action === 'move') {
      this.move(x, y, this.segments.length - 1);
    } else {
      this.flex(x, y, this.segments.length - 1);
    }
  }
}
