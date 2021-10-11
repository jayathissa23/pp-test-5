console.log('hello');  
const mobileNav=document.getElementById('mobile-nav');
const overlay=document.getElementById('overlay');
const slideNavSection=document.getElementById('slide-nav-section');

mobileNav.addEventListener('click',()=>{
    if(screen.width>600) return;      

    overlay.style.width= "100%";  
    overlay.style.height= "100%";  
    overlay.style.top = "0";  
    overlay.style.backdropFilter = " blur(6px)"; 
    
    slideNavSection.style.visibility="visible";
    slideNavSection.style.position="fixed";  
});  
overlay.addEventListener('click',()=>{
    if(screen.width>600) return;      


    slideNavSection.style.visibility="hidden";
    slideNavSection.style.position="absoulte";  
    
    overlay.style.backdropFilter = "none"; 
});  

