const competition_descriptions = document.getElementsByClassName("competition-description");
const competition_right_blocks = document.querySelectorAll("#right-block")
const competition_left_blocks = document.querySelectorAll("#left-block")

var sayac = 0;
setTimeout(

    function() {
        competition_right_blocks[0].style.animation = "slide-in 0.7s forwards";
        competition_left_blocks[0].style.animation = "slide-in 0.7s forwards";
    }, 
    300 
)

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(scrollTop > 400){ //Second part
        setTimeout(
            function() {
                competition_right_blocks[1].style.animation = "slide-in 0.7s forwards";
                competition_left_blocks[1].style.animation = "slide-in 0.7s forwards";
            }, 
            300 
        )
    }

    if(scrollTop > 600){ // Third part
        setTimeout(
            function() {
                competition_right_blocks[2].style.animation = "slide-in 0.7s forwards";
                competition_left_blocks[2].style.animation = "slide-in 0.7s forwards";
            }, 
            300 
        )
    }

    if(scrollTop > 1300){ // Fourth part
        setTimeout(
            function() {
                competition_right_blocks[3].style.animation = "slide-in 0.7s forwards";
                competition_left_blocks[3].style.animation = "slide-in 0.7s forwards";
            }, 
            300 
        )
    }

    if(scrollTop > 1700){ // Fifth part
        setTimeout(
            function() {
                competition_right_blocks[4].style.animation = "slide-in 0.7s forwards";
                competition_left_blocks[4].style.animation = "slide-in 0.7s forwards";
            }, 
            300 
        )
    }
});
