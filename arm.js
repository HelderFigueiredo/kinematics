
class Arm {

  constructor(action) {
  this.segments = [];
  this.action = action;
  }

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

  move(x, y, segmentIndex) {

  let segment = this.segments[segmentIndex];

  segment.setAngle(x, y);
  segment.x = x - Math.cos(segment.angle) * segment.length;
  segment.y = y - Math.sin(segment.angle) * segment.length;

  if (segmentIndex !== 0) {
  let parent = this.segments[segmentIndex - 1];

  this.move(
  segment.x,
  segment.y,
  segmentIndex - 1
  );
  }
  }

  follow(x, y) {
  if (this.action === 'move') {
  this.move(x, y, this.segments.length - 1);
  } else {
  this.flex(x, y, this.segments.length - 1);
  }
  }
}


// var Arm = Arm || {
// 	x: 0,
// 	y: 0,
// 	length: 100,
// 	angle: 0,
// 	parent: null,

// 	create: function(x, y, length, angle) {
// 		var obj = Object.create(this);
// 		obj.init(x, y, length, angle);
// 		return obj;
// 	},

// 	init: function(x, y, length, angle) {
// 		this.x = x;
// 		this.y = y;
// 		this.length = length;
// 		this.angle = angle;
// 	},

// 	getEndX: function() {
// 		return this.x + Math.cos(this.angle) * this.length;
// 	},

// 	getEndY: function() {
// 		return this.y + Math.sin(this.angle) * this.length;
// 	},

// 	render: function(context) {
// 		context.strokeStyle = "#000000";
// 		context.lineWidth = 5;
// 		context.beginPath();
// 		context.moveTo(this.x, this.y);
// 		context.lineTo(this.getEndX(), this.getEndY());
// 		context.stroke();
// 	},

// 	pointAt: function(x, y) {
// 		var dx = x - this.x,
// 			dy = y - this.y;
// 		this.angle = Math.atan2(dy, dx);
// 	},

// 	drag: function(x, y) {
// 		this.pointAt(x, y);
// 		if (this.parent !== null) {
//          this.x = x - Math.cos(this.angle) * this.length;
// 		   	this.y = y - Math.sin(this.angle) * this.length;
//      }
// 		if(this.parent) {
// 			this.parent.drag(this.x, this.y);
//          this.x = this.parent.getEndX();
// 		    this.y = this.parent.getEndY();
// 		}
// 	}

// };
