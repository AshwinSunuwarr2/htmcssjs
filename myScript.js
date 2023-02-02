function light(sw){
    var pic;
    if (sw==0){
        pic = "bulb_off.png"
    }
    else{
        pic = "bulb_on.png"
    }
    document.getElementById('myImage').src = pic;
}