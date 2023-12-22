const links = document.querySelectorAll(".header__main-link")
for (let i = 0; i < links.length; i++){
    const element = links[i];
    element.addEventListener('click', function (e){
        e.preventDefault()
        for (let j = 0; j < links.length; j++){
            const el = links[j];
            el.style.color = "white"
        }
        this.style.color = "Green"
    })
}

const menu = document.querySelector(".menu"),
header__main_list = document.querySelector(".header__main-list")
menu.addEventListener("click", function(){
    if (header__main_list.classList.contains('active')) {
          header__main_list.classList.remove("active")
          this.classList.add("active")
    }else{
        header__main_list.classList.add("active")
        this.classList.remove("active")
    }
    
})

