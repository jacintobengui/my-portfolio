var mobile_button = document.getElementById('mobile_btn')
var mobile_menu = document.getElementById('mobile_menu')


mobile_button.onclick = () => {
    mobile_menu.classList.toggle('active')
    if(mobile_menu.classList.contains('active')) {
        mobile_button.style.background = `url('../img/icons8-close.svg') no-repeat center center`
    }else{
        mobile_button.style.background = `url('../img/icons8-menu.svg') no-repeat center center`
    }
}

