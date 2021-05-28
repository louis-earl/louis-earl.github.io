var drawStar = true
var n = 1000   // number of stars
var w = 0      // current screen width
var h = 0      // current screen height
var x = 0   
var y = 0    
var z = 0
var star_color_ratio = 0
var star_x_save, star_y_save
var star_ratio = 256
var star_speed = 1
var starLength = 8
var star = new Array(n)

// var img

var starfield;
var context

var fps = 20
var timeout

function getScreenSize() {
    var currentWidth = document.documentElement.clientWidth
    var currentHeight = document.documentElement.clientHeight
    return Array(currentWidth, currentHeight)
}

function checkScreenSize() {
    const [newWidth, newHeight] = getScreenSize()
    if (newWidth != w || newHeight != h) {
        resize(newWidth, newHeight)
    }
}

function init() {
    var a = 0
    console.log("x:",x, "y:", y)
    console.log("w:", w, "h:", h)
    console.log(w * 2 - x * 2)
    for (var i = 0; i < n; i++) {
        star[i] = new Array(5)
        star[i][0] = Math.random() * w * 2 - x * 2  // Origin x [0, ~1000]
        star[i][1] = Math.random() * h * 2 - y * 2  // Origin y [0, ~1000]
        star[i][2] = Math.round(Math.random() * z)  // Star current z position [0, ~1000]
        star[i][3] = 0                              // star current x position 
        star[i][4] = 0                              // star current y position 
    }
    starfield.width = w
    starfield.height = h
    context = starfield.getContext('2d')
    context.fillStyle = 'rgb(0,0,0)'
    context.strokeStyle = 'rgb(255,255,255)'

    // img = new Image()
    // img.src = "./images/stars.jpg"

    
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max)
}

function anim() {
    
    checkScreenSize()

    const offsetY = clamp(window.scrollY / 3, 0, 90)
    starLength = clamp(offsetY / 30, 1, 3)
    star_speed = clamp(offsetY / 12, 1, 8) // 1,8

    context.clearRect(0, 0, w, h)

    // var imgW, imgH
    // var ratio = w / h

    // if (ratio > 1) {
    //     imgW = w
    //     imgH = h * ratio
    // }
    // else {
    //     imgH = h
    //     imgW = w / ratio
    // }
    //
    // context.drawImage(img, 0, 0, imgW, imgH)

        for (var i = 0; i < n; i++) {
            drawStar = true
            star_x_save = star[i][3]
            star_y_save = star[i][4]

            // we change origin y each frame if there's an offset 
            // angles the star up 
            star[i][1] += -offsetY >> 4

            // When origin y exceeds the max y size
            // Set origin to min y    
            if (star[i][1] < -y << 1) {
                star[i][1] += h << 1 
                drawStar = false
            }

            // moves star z direction (towards 0, front of screen)
            star[i][2] -= star_speed

            // Star is too far back, move star forward 
            // Error handling 
            if (star[i][2] > z) {
                star[i][2] -= z 
                drawStar = false
                console.log("ERROR HANDLE Z - moved forward??")
            }

            // Move star to back of screen
            if (star[i][2] < 0) {
                star[i][2] += z 
                drawStar = false
            }

            star[i][3] = x + (star[i][0] / star[i][2]) * star_ratio
            star[i][4] = y + (star[i][1] / star[i][2]) * star_ratio

            if (star[i][3] > w + 100 || star[i][3] < -100 || star[i][4] > h + 100 || star[i][4] < -100) {
                drawStar = false
            }

            if (star_x_save == 0 || star_y_save == 0) {
                drawStar = false
            }

            star_x_save = star_x_save - (starLength * (star[i][3] - star_x_save))
            star_y_save = star_y_save - (starLength * (star[i][4] - star_y_save))

            // If star in bounds of canvas
            if (drawStar) {

                context.lineWidth = (1 - star_color_ratio * star[i][2]) * 3
                context.lineCap = "round"
                context.beginPath()

                // old position 
                context.moveTo(star_x_save, star_y_save)

                // new position
                context.lineTo(star[i][3], star[i][4])
                context.stroke()
                context.closePath()
            }
        }
    
    timeout = setTimeout(() => anim(), fps)
}

export function start(canvasRef) {
    starfield = canvasRef
    const [newWidth, newHeight] = getScreenSize()
    resize(newWidth, newHeight)
    anim()
}

function resize(newWidth, newHeight) {
    w = newWidth
    h = newHeight
    x = Math.round(w / 2)
    y = Math.round(h / 2)
    z = (w + h) / 2
    star_color_ratio = 1 / z
    init()
}