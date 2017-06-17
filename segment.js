'use strict';
class Segment {

  /**
   * @param  {Number} x      X position;
   * @param  {Number} y      Y position;
   * @param  {Number} length Amount segments;
   * @param  {Number} angle  segment angle;
   */
  constructor(x, y, length, angle) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = angle;
  }

  /**
   * @param {Number} x X position;
   * @param {Number} y Y position;
   */
  setAngle(x, y) {
    let dx = x - this.x,
      dy = y - this.y;
    this.angle = Math.atan2(dy, dx);
  }

  /**
   * Get end x axis point.
   * @return {Number} X axis point.
   */
  getEndX() {
    return this.x + Math.cos(this.angle) * this.length;
  }

  /**
   * Get end x axis point.
   * @return {Number} X axis point.
   */
  getEndY() {
    return this.y + Math.sin(this.angle) * this.length;
  }
}
