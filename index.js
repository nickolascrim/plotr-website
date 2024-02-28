var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

tl.fromTo(".message-1", { position: "absolute", bottom: 0 }, {
  top: 0,
  position: "relative",
  opacity: 1,
  duration: 0.8
});

tl.to(".message-1", { opacity: 0, position: "absolute", duration: 0.5, delay: 1.5 });
tl.to(".message-2", { top: 0, position: "relative", duration: 1, }, "<");

tl.to(".message-2", { opacity: 0, position: "absolute", duration: 0.5, delay: 1.5 });
tl.to(".message-3", { top: 0, position: "relative", duration: 1, }, "<");

tl.to(".message-3", { opacity: 0, position: "absolute", duration: 0.5, delay: 1.5 });
tl.to(".message-4", { top: 0, position: "relative", duration: 1, }, "<");

tl.to(".message-4", { opacity: 0, position: "absolute", duration: 1, delay: 1.5 });
