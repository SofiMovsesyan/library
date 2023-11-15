export let isLoop = true;

export function callDraw() {

    window.requestAnimationFrame(() => {
        if (isLoop) {
            draw()

        } callDraw()
    })
}

export function loop() {
    isLoop = true;
}

export function noLoop() {
    isLoop = false;
}

export function getRadiansFromDegrees(angle) {
    return angle * Math.PI / 180;
}

export function getRadians(angle) {
    if (window.ANGLE_MODE === window.RADIANS) {
        return angle;
    } else {
        return getRadiansFromDegrees(angle);
    }
}

export function canvasSetup(canvas) {
    window.width = canvas.width;
    window.height = canvas.height;
    window.context.fillStyle = "white";
}