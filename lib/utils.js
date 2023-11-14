export function callDraw() {
    window.requestAnimationFrame(() => {
        draw()
        callDraw()
    })
}
