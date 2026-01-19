gsap.from('#page1 #box', {
    opacity: 0,
    duration: 2,
    rotate: 360,
    scale: 0,
    delay:1,
})

gsap.from('#page2 #box', {
    opacity: 0,
    duration: 2,
    rotate: 360,
    scale: 0,
    scrollTrigger:{
        trigger:'#page2 #box',
        scroller:'body',
        markers:true,
        start:'top 60%',
        end:'top 30%',
        scrub:1,
    }
})