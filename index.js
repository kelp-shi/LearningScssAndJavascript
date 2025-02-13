const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let isDragging = false;
let scale = 1;
let startX, startY;
let initialX = 0;
let initialY = 0;
let rectangles = [{ x: canvas.width / 2 - 50, y: canvas.height / 2 - 50, width: 100, height: 100 }];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(scale, scale);
    rectangles.forEach(rect => {
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    });
    ctx.restore();
}

canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - initialX;
    startY = e.clientY - initialY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        initialX = e.clientX - startX;
        initialY = e.clientY - startY;
        canvas.style.transform = `translate(${initialX}px, ${initialY}px) scale(${scale})`;
    }
});

canvas.addEventListener('mouseup', () => {
    isDragging = false;
});

canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(.125, scale), 4);
    canvas.style.transform = `translate(${initialX}px, ${initialY}px) scale(${scale})`;
});

canvas.addEventListener('click', (e) => {
    const rect = rectangles[0];
    if (e.clientX >= rect.x && e.clientX <= rect.x + rect.width && e.clientY >= rect.y && e.clientY <= rect.y + rect.height) {
        const newRectangles = [
            { x: rect.x + 150, y: rect.y - 50, width: 100, height: 100 },
            { x: rect.x + 150, y: rect.y + 50, width: 100, height: 100 },
            { x: rect.x + 150, y: rect.y + 150, width: 100, height: 100 }
        ];
        rectangles = rectangles.concat(newRectangles);
        drawLines(rect, newRectangles);
        draw();
    }
});

function drawLines(startRect, newRectangles) {
    ctx.strokeStyle = 'black';
    newRectangles.forEach(rect => {
        ctx.beginPath();
        ctx.moveTo(startRect.x + startRect.width / 2, startRect.y + startRect.height / 2);
        ctx.lineTo(rect.x + rect.width / 2, rect.y + rect.height / 2);
        ctx.stroke();
    });
}

draw();
