let div1 = document.createElement('div')
div1.className = 'demo'


document.body.appendChild(div1)

var x = false 


var lastX
var lastY

div1.onmousedown = function(e){
    lastY = e.clientY
    lastX = e.clientX
    x = true

}
document.body.onmousemove = function(e) {
    if(x === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top)||0
        var left = parseInt(div1.style.left) ||0
        div1.style.top = top + deltaY + 'px'
        div1.style.left =left + deltaX +'px'
     lastX = e.clientX
     lastY = e.clientY
    }
}

div1.onmouseup = function() {
    x =false 
}