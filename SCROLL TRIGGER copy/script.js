gsap.to('#page2 h1', {
   
    transform: 'translateX(-200%)',
    scrollTrigger: {
        trigger: '#page2',
        scroller: 'body',
        markers: true,
        start: 'top 0%', //when scroll bar reaches the starting pt of pg2
        end: 'top -150%',
        scrub: 2, //repeats the animation between the start and end pt
        pin: true //only after scrolling full word the next pg appears
    }
})