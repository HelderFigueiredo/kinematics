class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    publish() {
        this.subscribers.forEach(s => s(this.x, this.y));
    }
}
