const image = document.getElementById('myImage');
const imge = document.getElementById('bulb')
function changeImage() {
    if (image.src.match("bulbon")) {
        image.src = "pic_bulboff.gif";
    } else {
        image.src = "pic_bulbon.gif";
    }
}

function changeState() {
    if (imge.src.match("bulboff")) {
        imge.src = "pic_bulbon.gif";
    } else{
        imge.src = "pic_bulboff.gif"
    }
}