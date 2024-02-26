// // Shery.imageEffect("#back",{style: 5, debug: true, gooey: true}); 
 Shery.imageEffect("#back", {
  style: 5, //Select Style
  debug: false, // Debug Panel
  gooey:true,
  config: {"a":{"value":2,"range":[0,30]},
  "b":{"value":0.97,"range":[-1,1]},
  "zindex":{"value":-9996999,"range":[-9999999,9999999]},
  "aspect":{"value":2.1852704927596696},
  "ignoreShapeAspect":{"value":true},
  "shapePosition":{"value":{"x":0,"y":0}},
  "shapeScale":{"value":{"x":0.5,"y":0.5}},
  "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
  "shapeRadius":{"value":0,"range":[0,2]},
  "currentScroll":{"value":0},
  "scrollLerp":{"value":0.07},
  "gooey":{"value":true},
  "infiniteGooey":{"value":true},
  "growSize":{"value":3.03,"range":[1,15]},
  "durationOut":{"value":1,"range":[0.1,5]},
  "durationIn":{"value":1.5,"range":[0.1,5]},
  "displaceAmount":{"value":0.5},
  "masker":{"value":false},
  "maskVal":{"value":1,"range":[1,5]},
  "scrollType":{"value":0},
  "geoVertex":{"range":[1,64],"value":1},
  "noEffectGooey":{"value":false},
  "onMouse":{"value":1},
  "noise_speed":{"value":0.2,"range":[0,10]},
  "metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},
  "discard_threshold":{"value":0.48,"range":[0,1]},
  "antialias_threshold":{"value":0,"range":[0,0.1]},
  "noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":21.37,"range":[0,100]}},
  preset: "./presets/wigglewobble.json",
});
//{"a":{"value":1,"range":[0,30]},"b":{"value":-0.68,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1852704927596696},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.78,"range":[1,15]},"durationOut":{"value":0.51,"range":[0.1,5]},"durationIn":{"value":2.12,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.15,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":38.17,"range":[0,100]}},
//config:



// var h1s = document.querySelectorAll("h1");
// var index=0;
// document.querySelector("#main").addEventListener("click", function () {
//   gsap.to(h1s[index], {
//     top:" -=150%",
//     ease: Expo.easeInOut,
//     duration:1,
//   });
//   index++;
//   gsap.to(h1s[index],{
//     top:" -=130%",
//     ease: Expo.easeInOut,
//     duration:1,
//   });


// });



// Shery.textAnimate(".elem h1" /* Element to target.*/, {
//   //Parameters are optional.
//   style: 1,
//   y: 10,
//   delay: 0.1,
//   duration: 2,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });