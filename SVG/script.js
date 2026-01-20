var string = document.querySelector("#string");
var path = "M 10 100 Q 350 0 690 100"
var finalPath = "M 10 100 Q 350 100 690 100"

string.addEventListener('mousemove', function(dets) {
   path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 690 100`
   console.log(dets);

   gsap.to('svg path', {
    duration: 0.3,
    attr: { d: path },
    ease: "power3.out",
})
})
string.addEventListener('mouseleave', function() {
    gsap.to('svg path', {
        duration: 0.8,
        attr: { d: finalPath },
        ease: "elastic.out(1,0,2",
    })
})
gsap.to

