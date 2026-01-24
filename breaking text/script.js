breakTheText = () => {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splitText = h1Text.split(""); //array of letters

  var clutter = ""; //empty string

  splitText.forEach(function (elem,idx) {
    if (idx<(h1Text.length/2)) {
         clutter += `<span class='a'> ${elem} </span>`;
    }
    else {
         clutter += `<span class='b'> ${elem} </span>`;
    }
  });

  h1.innerHTML = clutter; //replacing h1 text with spans
};

breakTheText();

// animation using GSAP

gsap.from("h1 .a", {
    opacity:0,
    duration:0.7,
    y: 50,
    stagger:0.15,
});

gsap.from("h1 .b", {
    opacity:0,
    duration:0.7,
    y: 50,
    stagger:-0.15,
});

