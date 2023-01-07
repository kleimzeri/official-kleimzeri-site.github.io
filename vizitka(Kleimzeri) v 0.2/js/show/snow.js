let colors = {
    color1: "rgba(255,255,255,1)",
    color2: "rgba(222,184,142,1)",
    color3: "rgba(232,248,255,1)",
    color4: "rgba(135,143,145,1)"
};
let options = {
    alphaSpeed: 10,
    alphaVariance: 1,
    composition: "source-over",
    count: 350,
    direction: 161,
    float: 0.75,
    glow: 0,
    imageUrl: [
        "img/snow/snow-0.png",
        "img/snow/snow-1.png",
        "img/snow/snow-2.png",
        "img/snow/snow-3.png",
    ],
    maxAlpha: 2,
    maxSize: 22,
    minAlpha: -0.2,
    minSize: 4,
    parallax: 1.75,
    rotation: 0.5,
    shape: "image",
    speed: 3,
    style: "fill",
    twinkle: false,
    xVariance: 5,
    yVariance: 0,
};
window.onload = function() {
    initSparticles();
}
window.initSparticles = function() {
    var $main = document.querySelector('.falling');
    window.mySparticles = new sparticles.Sparticles($main,options);
};