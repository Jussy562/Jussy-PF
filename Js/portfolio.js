
/*let text = document.getElementsByClassName('abt')
$(window).ready(function() {
    $("text").animate({left:'250px'});
    text {Position: left;}
   });*/


$(document).ready(function(){
    $(".btn").click(function(){
        $(".img").animate({
            width: '500PX',
            height: '300px,'
        }, 1000);
        
    });
});

function show(showdiv){
    $(".section").show();
    $(".section").show().animate({opacity: 1});
};

function hide(hidediv){
        $(".section").hide();
        $(".section").hide().animate({opacity: 1});
};


/*function showHide(showdiv,hidediv){
    $('#'+showdiv).show();
    $('#'+hidediv).hide();
};*/
