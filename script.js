let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    let xValue = details.pageX;
    let yValue = details.pageY;
    setTimeout(function(){
        circle.style.top = yValue + 'px';
        circle.style.left = xValue + 'px';
    }, 100)
})

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
gsap.to('.fader',{
    scrollTrigger : {
        trigger : '.gallery',
        start:'top 100%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})
gsap.to('.gallery .box',{
    scrollTrigger : {
        trigger : '.media',
        start:'top 90%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})

gsap.to('.videosection .video',{
    scrollTrigger : {
        trigger : '#desc',
        start:'top 80%',
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
        start:'top 70%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    y : -100,
    stagger :.3,
    duration : 2
})

gsap.to('#media2 .container .medias .imgbx',{
    scrollTrigger : {
        trigger : '.footer',
        start:'top 100%',
        toggleActions: 'play pause resume reverse',
    },
    opacity :0,
    X : -50,
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
// gsap.to('.Explore #linkHead h2',{
//     scrollTrigger : {
//         trigger : '.Execute',
//         start:'top 100%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     y : -100,
//     stagger :.3,
//     duration : 2
// })
// gsap.to('.Explore #linkHead .descrptn p',{
//     scrollTrigger : {
//         trigger : '.Execute',
//         start:'top 100%',
//         toggleActions: 'play pause resume reverse',
//     },
//     opacity :0,
//     y : -100,
//     stagger :.3,
//     duration : 2
// })

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
