const navSlide = () => {
    const burger = document.querySelector('.burger-icon');
    const nav = document.querySelector('.nav-bar');
    const header = document.querySelector('.header');
    const burgericon = document.getElementById('burger-icon-open');
    const burgerclose = document.getElementById('burger-icon-close');
    
    //this toggles the burger icon and the nav bar on mobile screen
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active'); 
        header.classList.toggle('header-shadow');
        burgericon.classList.toggle('burger-hide');
        burgerclose.classList.toggle('burger-hide');
    });
}

navSlide();