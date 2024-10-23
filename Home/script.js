var typed = new Typed(".auto-input",{
    strings: ["Welcomes YOU",],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
/**
 go thrifting
 */
const body = document.body;
const btn = document.querySelectorAll('.button')[0];

btn.addEventListener('mouseenter', () => {
	body.classList.add('hover');
});

btn.addEventListener('mouseleave', () => {
	body.classList.remove('hover');
});
