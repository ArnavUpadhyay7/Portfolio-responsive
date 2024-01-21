function scroll(){
    gsap.registerPlugin(ScrollTrigger);
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
scroll()




// skill 1

  var skill1 = document.querySelector("#skill1")
  var img = document.querySelector("#img1")

  skill1.addEventListener("mousemove",function(dets){
      gsap.to(img,{
          x:dets.x
          // y:dets.y
      })
  })

  skill1.addEventListener("mouseenter",function(){
      gsap.to(img,{
          scale:1,
          opacity:1
      })
  })
  skill1.addEventListener("mouseleave",function(){
      gsap.to(img,{
          scale:0,
          opacity:0
      })
  })
  


  
  // skill2

  var skill2 = document.querySelector("#skill2")
  var img2 = document.querySelector("#img2")

  skill2.addEventListener("mousemove",function(dets){
      gsap.to(img2,{
          x:dets.x
          // y:dets.y
      })
  })

  skill2.addEventListener("mouseenter",function(){
      gsap.to(img2,{
          scale:1,
          opacity:1
      })
  })

  skill2.addEventListener("mouseleave",function(){
      gsap.to(img2,{
          scale:0,
          opacity:0
      })
  })



  // skill3

  var skill3 = document.querySelector("#skill3")
  var img3 = document.querySelector("#img3")

  skill3.addEventListener("mousemove",function(dets){
      gsap.to(img3,{
          x:dets.x
          // y:dets.y
      })
  })

  skill3.addEventListener("mouseenter",function(){
      gsap.to(img3,{
          scale:1,
          opacity:1
      })
  })

  skill3.addEventListener("mouseleave",function(){
      gsap.to(img3,{
          scale:0,
          opacity:0
      })
  })



  // skill4

  var skill4 = document.querySelector("#skill4")
  var img4 = document.querySelector("#img4")

  skill4.addEventListener("mousemove",function(dets){
      gsap.to(img4,{
          x:dets.x
          // y:dets.y
      })
  })

  skill4.addEventListener("mouseenter",function(){
      gsap.to(img4,{
          scale:1,
          opacity:1
      })
  })

  skill4.addEventListener("mouseleave",function(){
      gsap.to(img4,{
          scale:0,
          opacity:0
      })
  })



  // skill5

  var skill5 = document.querySelector("#skill5")
  var img5 = document.querySelector("#img5")

  skill5.addEventListener("mousemove",function(dets){
      gsap.to(img5,{
          x:dets.x
          // y:dets.y
      })
  })

  skill5.addEventListener("mouseenter",function(){
      gsap.to(img5,{
          scale:1,
          opacity:1
      })
  })

  skill5.addEventListener("mouseleave",function(){
      gsap.to(img5,{
          scale:0,
          opacity:0
      })
  })



  // skill6

  var skill6 = document.querySelector("#skill6")
  var img6 = document.querySelector("#img6")

  skill6.addEventListener("mousemove",function(dets){
      gsap.to(img6,{
          x:dets.x
          // y:dets.y
      })
  })

  skill6.addEventListener("mouseenter",function(){
      gsap.to(img6,{
          scale:1,
          opacity:1
      })
  })

  skill6.addEventListener("mouseleave",function(){
      gsap.to(img6,{
          scale:0,
          opacity:0
      })
  })



  // skill7

  var skill7 = document.querySelector("#skill7")
  var img7 = document.querySelector("#img7")

  skill7.addEventListener("mousemove",function(dets){
      gsap.to(img7,{
          x:dets.x
          // y:dets.y
      })
  })

  skill7.addEventListener("mouseenter",function(){
      gsap.to(img7,{
          scale:1,
          opacity:1
      })
  })

  skill7.addEventListener("mouseleave",function(){
      gsap.to(img7,{
          scale:0,
          opacity:0
      })
  })


var tl = gsap.timeline()
// tl.from("#loader h1",{
//     x: 200,
//     opacity:0,
//     delay: 0.5,
//     duration: 1,
//     stagger: 0.5
// })
// tl.to("#loader",{
//     y:-100,
//     duration: 0.5,
//     opacity: 0,
//     display: "none"
// })
tl.from("#nav img",{
  y: -100,
  opacity:0,
  duration: 1,
  delay: 0.5
})
tl.from("#nav2 h1,#nav3 button",{
  y: -100,
  opacity:0,
  duration: 0.5,
  stagger: 0.5
})
tl.from("#content h1",{
  y: 200,
  duration: 1,
  opacity: 0,
})
tl.from("#content img",{
  y: 200,
  duration: 1,
  opacity: 0,
})
tl.from("#content p",{
  y: 200,
  duration: 1,
  opacity: 0,
})
gsap.from("#page2 h1",{
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 70%",
    // markers: true,
  }
})
gsap.from("#page2-content",{
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 70%",
  }
})
gsap.to("#page2",{
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 60%",
  }
})
gsap.to("#page3",{
  backgroundColor: "white",
  duration: 1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 60%",
  }
})
let mm = gsap.matchMedia();
mm.add("(min-width: 501px)",() => {
gsap.to("#page3-projects",{
  transform: "translateX(-100%)",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 0",
      end: "top -100%",
      scrub: 3,
      pin: true
  }
})
})
gsap.to("#page4",{
  backgroundColor: "white",
  duration: 1,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 60%",
  }
})
gsap.from("#skill1, #skill2, #skill3, #skill4, #skill5, #skill6, #skill7",{
  duration: 0.5,
  x: -300,
  stagger:0.2,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 50%",
  }
})
gsap.from("#page4-right img",{
  opacity: 0,
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 60%",
  }
})
gsap.to("#page5",{
  backgroundColor: "black",
  duration: 2,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top 60%",
  }
})
gsap.from("#page5 h1,#page5 h2",{
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top 60%",
    scrub: 5
  }
})
mm.add("(min-width:501px)",() => {
  gsap.from("#page5-logo",{
    x: -200,
    duration: 1,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      scrub: 5
    }
  })
})
mm.add("(max-width:500px)",() => {
  gsap.from("#page5-logo",{
    y: -150,
    duration: 1,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      scrub: 5
    }
  })
})

gsap.from("#page5 p",{
  y: 200,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    // scrub: 5
  }
})
