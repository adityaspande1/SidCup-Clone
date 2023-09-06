//making the cursor
var cursr= document.querySelector("#mycursor");
var cb=document.querySelector("#mycursor-blur");


document.addEventListener("mousemove",function(dets){
 cursr.style.left=dets.x+10+"px";
 cursr.style.top=dets.y+10+"px";
 cb.style.left=dets.x-120+"px";
 cb.style.top=dets.y-120+"px";
})

var tl=  gsap.timeline()
tl.from("#main-1 h1,#main-1 h2,#main-1 p",{
    y:200,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
gsap.to("nav",{
    backgroundColor:"black",
    height:"70px",
    y:-10,
   
    scrollTrigger:{
        scroller:"body",
        triggerer:"nav",
        scrub:1
    }
})

// gsap.to("#main-1",{
//     backgroundColor:"balck",
//     opacity:1,
    
//     // duration:0.4,
//     scrollTrigger:{
// trigger:"#main-1",
// scroller:"body"
//     }
// })
gsap.to("#main-2",{
    backgroundColor:"black",
    
    scrollTrigger:{
        trigger:"#main-2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 30%",
        scrub:2
    }}
)
gsap.from("#about-p #img1",{
    y:-100,
    x:-100,
    opacity:0,
    transform:"rotate(45deg)",
    duration:0.5,
    scrollTrigger:{
    trigger:"#img1",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 25%",
    scrub:3
    }
})
gsap.from("#about-p #img2",{
    y:-100,
    x:100,
    opacity:0,
    transform:"rotate(-45deg)",
    duration:0.5,
    scrollTrigger:{
    trigger:"#img2",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 25%",
    scrub:3
    }
})
gsap.from("#about p",{
    y:100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
    trigger:"#about p",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 55%",
    scrub:3
    }
})
gsap.from("#card1",{
    x:-100,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:"#card1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 40%",
        scrub:2
    }
})
gsap.from("#card2",{
    y:100,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:"#card2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 40%",
        scrub:2
    }
})
gsap.from("#card3",{
    x:100,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:"#card3",
        scroller:"body",
        // markers:true,
        start:"top 35%",
        end:"top 30%",
        scrub:2
    }
})