document.addEventListener('DOMContentLoaded', () => {

  let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    xMiddle = width / 2,
    yMiddle = height / 2,
    armOne = new Arm(move),
    total = 50,
    length = ((xMiddle)) / total,
    p = new Point(xMiddle, yMiddle);

  for (let i = 0; i < total; i++) {
    armOne.addSegment(new Segment(xMiddle, yMiddle, length, 0));
  }

  p.subscribe(armOne.follow.bind(armOne));

  function pointReferencePosition(x, y) {
    p.x = x;
    p.y = y;
    p.publish();
  }

  document.body.addEventListener('mousemove', (e) => {
    pointReferencePosition(e.clientX, e.clientY);
  });

  update();

  function update() {
    context.clearRect(0, 0, width, height);
    renderArm(context, armOne);
    requestAnimationFrame(update);
  }
});
