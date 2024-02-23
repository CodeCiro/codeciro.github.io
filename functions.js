
// Function to add mouseenter and mouseleave event listeners to skills span elements
function addSkillHoverEffect() {
    const spanElements = document.querySelectorAll('#skills p span');

    spanElements.forEach(span => {
        span.addEventListener('mouseenter', () => {
            const randomRotation = Math.random() * 20 - 10; // Generate random angle between -10 and 10 degrees
            span.style.transform = `rotate(${randomRotation}deg)`;
        });

        span.addEventListener('mouseleave', () => {
            span.style.transform = 'rotate(0deg)';
        });
    });
}

const isDarkMode = () =>{
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

//knowing when user reacher the bottom of the screen
window.onscroll = () =>{
    if((window.innerHeight + window.pageYOffset)>= document.body.offsetHeight){

    }
}

//taking user back to top
const toTop = () => window.scrollTo({top:0, behavior: 'smooth'});

// show and hide button when scrolling.
let timeout;

function toggleButtonVisibility() {
    const topButton = document.querySelector('.top');
    clearTimeout(timeout); 

    topButton.style.display = 'block';

    timeout = setTimeout(function() {
        topButton.style.display = 'block';
    }, 500); 

    topButton.style.display = 'none';
}

document.addEventListener('scroll', toggleButtonVisibility);



