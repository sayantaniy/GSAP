gsap.to('#box1', { //initial to final
    x:300, //key value pairs
    duration:1,
    delay:1,
    rotate:360,
    backgroundColor:'red',
    borderRadius:'50%',
    scale:1.5,
    repeat:-1, //repeating inifinite times
    yoyo:true
}
)

gsap.from('#box2', { //final to initial
    x:300, //key value pairs
    duration:2,
    delay:1
}
)

gsap.from('h1',{
    y:100,
    delay:1,
    duration:2,
    opacity:0,
    stagger:0.3
})

