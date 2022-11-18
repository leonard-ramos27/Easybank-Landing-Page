const navSlide = () => {
    const burger = document.querySelector('.burger-icon');
    const nav = document.querySelector('.nav-bar');
    const header = document.querySelector('.header');
    const burgericon = document.getElementById('burger-icon-open');
    const burgerclose = document.getElementById('burger-icon-close');
    
    //this toggles the burger icon and the nav bar on mobile screen
    burger.addEventListener('click', ()=>{
        console.log('burger icon is clicked');
        nav.style.transition = "transform 0.2s ease";
        console.log('adding transition');
        nav.classList.toggle('nav-active'); 
        header.classList.toggle('header-shadow');
        burgericon.classList.toggle('burger-hide');
        burgerclose.classList.toggle('burger-hide');
    });
}

navSlide();

window.onresize = () => {
    let viewPortWidth = window.innerWidth;
    if(viewPortWidth > 650){
        document.querySelector('.nav-bar').style.transition = "none";
        console.log('Removing transition');
        document.querySelector('.nav-bar').classList.remove('nav-active');
        document.querySelector('.header').classList.remove('header-shadow');
        document.getElementById('burger-icon-open').classList.remove('burger-hide');
        document.getElementById('burger-icon-close').classList.add('burger-hide');
    }
}