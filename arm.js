
class Arm {

  /**
   * @param  {Function} followAction Function to manipulate the segments;
   */
  constructor(followAction) {
    this.segments = [];
    this.followAction = followAction;
  }

  /**
   * @param {Segment} segment Segment instance;
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
   * @param  {Number} x X position;
   * @param  {Number} y Y position;
   */
  follow(x, y) {
    this.followAction(x, y, this.segments.length - 1, this.segments);
  }
}
