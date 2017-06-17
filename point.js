class Point {

  /**
   * @param  {Number} x X position;
   * @param  {Number} y Y position;
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.subscribers = [];
  }

  /**
   * @param  {function} subscriber Callback;
   */
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  publish() {
    this.subscribers.forEach(s => s(this.x, this.y));
  }
}
