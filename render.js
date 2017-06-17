function renderSegment(context, segment, config) {
    context.strokeStyle = config.strokeStyle;
    context.lineWidth = config.lineWidth;
    context.beginPath();
    context.moveTo(segment.x, segment.y);
    context.lineTo(segment.getEndX(), segment.getEndY());
    context.stroke();
}

function renderArm(context, arm) {
    
    let v = 5;
    let l = arm.length;

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