window.addEventListener("load", () => {
    setup()
    callDraw()
})

window.createCanvas = function (width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    document.body.append(canvas)
}
function callDraw() {
    window.requestAnimationFrame(() => {
        draw()
        callDraw()
    })
}


