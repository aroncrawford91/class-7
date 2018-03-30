$(document).ready(() => {
    let value =0;
$(document).on('keydown',() => {
    if(event.key === "ArrowUp"){
        if(value > 0){
        value -=30;
        $('.paddleLeft').css('margin-top', `${value}px`);
    }
}
    if(event.key === "ArrowDown"){
        if(value < 449){
        value +=30;
        $('.paddleLeft').css('margin-top', `${value}px`);
    }
}
})

let value2 =0
$(document).on('keypress',() => {
    if(event.key === "w"){
        if(value2 > 0){
        value2 -=30;
        $('.paddleRight').css('margin-top', `${value2}px`);
    }
}
    if(event.key === "s"){
        if(value2 < 449){
        value2 +=30;
        $('.paddleRight').css('margin-top', `${value2}px`);
    }
}
})





})

function somefunctionname() {
    let ballPosition = $('.ball').css('right');
    setInterval(function() {
    $('.ball').css('right', ballPosition + 10px)
}, 500)
    clearInterval
}



