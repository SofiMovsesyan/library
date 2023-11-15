import { getRadians, getRadiansFromDegrees, canvasSetup } from "./utils.js";

window.createCanvas = function (width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    window.context = canvas.getContext("2d");

    document.body.append(canvas);
    canvasSetup(canvas);
}

window.background = function (r, g, b) {
    window.context.save();
    window.context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    window.context.fillRect(0, 0, window.width, window.height);
    window.context.restore();

}

window.stroke = function (r, g, b, a=1) {
    window.context.strokeStyle = `rgb(${r}, ${g}, ${b}, ${a})`;
}

window.rect = function (startX, startY, w, h) {
    let x = window.RECT_MODE === CORNER ? startX : startX - w / 2;
    let y = window.RECT_MODE === CORNER ? startY : startY - h / 2;

    window.context.fillRect(x, y, w, h);
    window.context.strokeRect(x, y, w, h);

}

window.text = function (string, x, y) {
    window.context.fillText(string, x, y);
    window.context.strokeText(string, x, y);
}

window.textSize = function (size) {
    const [_, currentFont] = window.context.font.split(" ");
    window.context.font = `${size}px ${currentFont}`;
}

//
window.angleMode = function (mode) {
    if (mode === window.RADIANS || mode === window.DEGREES) {
        window.ANGLE_MODE = mode;
    }
}

window.sin = function (angle) {
    const radians = getRadians(angle);
    return Math.sin(radians);
}

window.cos = function (angle) {
    const radians = getRadians(angle);
    return Math.cos(radians);
}

window.atan2 = function (value) {
    return Math.atan2(value);
}

window.min = function (...value) {
    return Math.min(...value);
}

window.max = function (...value) {
    return Math.max(...value);
}

window.floor = function (value) {
    return Math.floor(value);
}

window.random = function (a, b) {
    let min = a;
    let max = b;
    if (b === undefined) {
        min = 0;
        max = a ?? 1;
    }
    return Math.floor(Math.random() * max + min);
}

window.map = function (n, a, b, a1, b1) {
    return (n - a) / (b - a) * (b1 - a1) + a1;
}

window.dist = function (x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
//

window.translate = function (x, y) {
    window.context.translate(x, y);
}

window.radians = function (angle) {
    return getRadiansFromDegrees(angle);
}

window.rotate = function (angle) {
    const radians = getRadians(angle);
    window.context.rotate(radians)
}

window.ellipse = function (startX, startY, dx, dy) {
    const radiusX = dx / 2;
    const radiusY = dy / 2;
    let x = window.ELLIPSE_MODE === CORNER ? startX : startX - radiusX;
    let y = window.ELLIPSE_MODE === CORNER ? startY : startY - radiusY;

    window.context.beginPath();
    window.context.ellipse(x, y, radiusX, radiusY, 0, 0, window.TWO_PI); window.context.closePath();
    window.context.fill();

    window.context.beginPath();
    window.context.ellipse(x, y, radiusX, radiusY, 0, 0, window.TWO_PI); window.context.closePath();
    window.context.stroke();
}

window.loadImage = function(src) {
    const image = new Image();
    image.src = src;
    return image;
}

window.image = function (img, x, y, ...cropper) {
    // let x = window.ELLIPSE_MODE === CORNER ? startX : startX - width;
    // let y = window.ELLIPSE_MODE === CORNER ? startY : startY - height;
    window.context.drawImage(img, x, y, ...cropper);
}

window.noFill = function () {
    window.fill(0,0,0,0)
}
//

window.fill = function (r, g, b, a=1) {
    window.context.fillStyle = `rgb(${r}, ${g}, ${b}, ${a})`;
}

window.noStroke = function() {
    window.stroke(0,0,0,0)
}

window.rectMode = function (mode) {
    if (mode === window.CORNER || mode === window.CENTER) {
        window.RECT_MODE = mode;
    }
}
//
window.ellipseMode = function (mode) {
    if (mode === window.CORNER || mode === window.CENTER) {
        window.ELLIPSE_MODE = mode;
    }
}

window.imgMode = function (mode) {
    if (mode === window.CORNER || mode === window.CENTER) {
        window.IMAGE_MODE = mode;
    }
}

window.push = function() {
    window.context.save();
}

window.pop = function() {
    window.context.restore();
}

//
window.strokeWeight = function(weight) {
    window.context.lineWidth(weight);
}
//