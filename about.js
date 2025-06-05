const successes_containers_left = document.querySelectorAll("#container-id")
const successes_containers_right = document.getElementsByClassName("#container-id-right")

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 700){
        successes_containers_left[0].style.animation = "slide-in 0.3s forwards";
    }

    if (scrollTop > 800){
        successes_containers_right[0].style.animation = "slide-in 0.3s forwards";
    }

    if (scrollTop > 900){
        successes_containers_left[1].style.animation = "slide-in 0.3s forwards";
    }
    
})
