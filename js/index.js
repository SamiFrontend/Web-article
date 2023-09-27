import { gsap } from  '../node_modules/gsap/all.js';
import { ScrollTrigger } from '../node_modules/gsap/ScrollTrigger.js';

// register scroll Plugin 
// gsap.registerPlugin() ;

// calling element same jQuery 
let $ = elm => document.querySelector(elm) ;

$('.home-page').style.overflow = "hidden" ;

const header = gsap.timeline() ;
// all links in nav 
header.from('.logo , .nav-item' , {
    duration : .4 , 
    stagger : .2 , 
    ease: 'power' , 
    x : 200 ,
    scale: 2 ,
    opacity : 0 
}).
// background right side 
from('.bg-right' , {
    duration : 1 , 
    right : -800 ,
} , '-=.7')
.from('.right-side' , {
    duration : .8 , 
    y : 120 , 
    opacity : 0, 
    ease : 'power2' , 
})
