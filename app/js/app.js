// 2
const burger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close-nav');

if(burger){
    console.log('OK')
    burger.addEventListener('click', (event)=>{
        console.log('click')
        navMenu.style.display = 'flex';
        close.style.display = 'block';
    });
    close.addEventListener('click', (event)=>{
        console.log('click')
        navMenu.style.display = 'none';
        close.style.display = 'none';
    });
};

