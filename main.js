let menuIcon= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclik = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
      
/*  ........................................*/ 
let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');


window.onscroll=() => {
    section.forEach(sec => {
        let top=window.scrollY;
        let offset =sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

           
        };
    });
    /*......................*/
    
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /* .....................*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/* ......................................................*/ 
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, heading' , {origin:'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form' , {origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img' , {origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content' , {origin: 'right' });

/*   <!-- scroll reveal js --> */
const typed =  new Typed('.multiple-text' ,{
    strings: ['Traveler', 'collecting stories' , 'YouTuber'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:2000,
    loop:true,
});