let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    let xValue = details.pageX;
    let yValue = details.pageY;
    setTimeout(function(){
        circle.style.top = yValue + 'px';
        circle.style.left = xValue + 'px';
    }, 100)
})

document.addEventListener('mousemove',function(e){
    let bx = document.querySelector('.box');
    if(e.clientX < 600 || e.clientY < 200){
        bx.style.transform = 'rotateY(-90deg) rotateX(-25deg)';
    }else{
        bx.style.transform = 'rotateY(80deg)  rotateX(25deg)';
    }
})


// document.querySelector('body').addEventListener('mousemove', rotatebx)

// function rotatebx(){
//     var box = document.querySelector('.box')
//     box.forEach(function(bx){
//         let x = (bx.getBoundingClientReat().left) + (bx.ClientWidth / 2);
//         let y = (bx.getBoundingClientreat().top) + (bx.ClientHeight / 2);
//         let radian = Math.atan2(event.pageX - x, event.pageY - y);
//         let rot = (radian * (180 / Math.PI) * -1) + 270;
//         bx.style.transform = "rotate("+rot+"deg)"
//     })
// }
// var follwX = 0, followY = 0,x = 0,y = 0,friction = 1/ 30;

// function moveCrcl(){
//     x += (follwX - x) * friction;
//     y += (follwY - y) * friction;
//     translate = 'translate(' + x + 'px, ' + y +'px) scale(1.1)';
//     window.requestAnimationFrame(moveCrcl)
// }

let sidebar = document.querySelector('.sidebar');
let menu = document.querySelector('.menu');
let bar1 = document.querySelector('#bar1');
let bar2 = document.querySelector('#bar2');
let logo = document.querySelector('nav h2');
menu.addEventListener('click',function(){
    if(sidebar.style.display === 'none'){
    sidebar.style.display = 'flex'
    bar1.style.transform = 'rotate(45deg)'
    bar2.style.transform = 'rotate(-45deg)'
    bar1.style.marginBottom = '0px'
    logo.style.color = '#fff'
    }else{
        sidebar.style.display = 'none'
        bar1.style.transform = 'rotate(0deg)'
        bar2.style.transform = 'rotate(0deg)'
        bar1.style.marginBottom = '5px' 
        logo.style.color = '#000'
    }
})
$('.heading h2').textillate({
    in:{
        effect: 'fadeInUp',
        delay:20
    },
    loop : true,
    out:{
        effect: 'fadeOutRight',
        delay:20
    }
})
$('.heading p').textillate({
    in:{
        effect: 'fadeInUp',
    },
    loop : true,
    out:{
        effect: 'fadeOutRight',
    }
})
$('.videosection h2').textillate({
    in:{
        effect: 'fadeInUp',
    },
    loop : true,
    out:{
        effect: 'fadeOutRight',
    }
})
gsap.to('.back .box',{
    scrollTrigger : {
        trigger : '.media',
        start:'top 100%',
        toggleActions: 'play pause resume reverse',
    },
    transform: 'perspective(1000px) rotateX(0deg) rotateZ(90deg) rotateY(180deg)',
    stagger :.5,
    duration : 3
})
// gsap.to('.fader',{
//     scrollTrigger : {
//         trigger : '.gallery',
//         start:'top 100%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     y : -100,
//     stagger :.3,
//     duration : 1
// })
// gsap.to('.gallery .box',{
//     scrollTrigger : {
//         trigger : '.media',
//         start:'top 90%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     y : -80,
//     stagger :.3,
//     duration : 2
// })

gsap.to('.videosection .video',{
    scrollTrigger : {
        trigger : '#desc',
        start:'top 100%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})
gsap.to('.videosection h2',{
    scrollTrigger : {
        trigger : '#desc',
        start:'top 70%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})

gsap.to('.extFade',{
    scrollTrigger : {
        trigger : '#media2',
        start:'top 50%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})

gsap.to('#media2 .container .medias .imgbx',{
    scrollTrigger : {
        trigger : '.EXPLORE',
        start:'top 100%',
        toggleActions: 'play pause resume reverse',
    },
    transform: 'translateX(-700px)',
    stagger :.3,
    duration : 2
})
// gsap.to('.videosSctn .video',{
//     scrollTrigger : {
//         trigger : '#media2',
//         start:'bottom 100%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     X : -100,
//     stagger :.3,
//     duration : 2
// })

// gsap.to('.Extract #linkHead .descrptn p',{
//     scrollTrigger : {
//         trigger : '.Explore',
//         start:'top 100%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     y : -100,
//     stagger :.3,
//     duration : 2
// })
gsap.to('.EXPLORE .linkHead .content p',{
    scrollTrigger : {
        trigger : '.Brands',
        start:'top 100%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})
gsap.to('.EXPLORE .linkHead .content h3',{
    scrollTrigger : {
        trigger : '.Brands',
        start:'top 100%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})

gsap.to('#brnd1 .brand .prdct',{
    scrollTrigger : {
        trigger : '#brnd2',
        start:'top 50%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})
gsap.to('#brnd2 .brand .prdct',{
    scrollTrigger : {
        trigger : '#brnd3',
        start:'top 50%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})
gsap.to('#brnd3 .brand .prdct',{
    scrollTrigger : {
        trigger : '#brnd4',
        start:'top 50%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})
gsap.to('#brnd4 .brand .prdct',{
    scrollTrigger : {
        trigger : '.EXECUTE',
        start:'top 50%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})
// gsap.to('.Execute #linkHead h2',{
//     scrollTrigger : {
//         trigger : '.footer',
//         start:'top 100%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     y : -100,
//     stagger :.3,
//     duration : 2
// })
// gsap.to('.Execute #linkHead .descrptn p',{
//     scrollTrigger : {
//         trigger : '.footer',
//         start:'top 100%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     y : -100,
//     stagger :.3,
//     duration : 2
// })
