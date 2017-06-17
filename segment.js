'use strict';
class Segment {
    
    constructor(x, y, length, angle) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle;
    }

    setAngle(x, y) {
        let dx = x - this.x,
            dy = y - this.y;
        this.angle = Math.atan2(dy, dx);
    }

    getEndX() {
        return this.x + Math.cos(this.angle) * this.length;
    }

    getEndY() {
        return this.y + Math.sin(this.angle) * this.length;
    }
}
