(() => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');

    context.fillRect(10, 10, 10, 10);

    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(300, 100)
    context.lineTo(130, 130)
    context.closePath();
    context.stroke();
})();