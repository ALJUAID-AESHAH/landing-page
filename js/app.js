/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/

const navItems = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
*/



/**
 * Begin Main Functions
 * 
*/

// build the nav
for (const section of sections) {
    const item = document.createElement('li');
    const name = section.getAttribute('data-nav');
    const id = section.getAttribute('id')
    item.innerHTML = `<a class="menu__link ${id}" >${name}</a>`
    navItems.appendChild(item)
}




// Begin Events

// Scroll to anchor ID using scrollTO event
const anchors = document.querySelectorAll('.menu__link')
anchors.forEach((value, key) => {
    value.addEventListener('click', function (event) {
        event.preventDefault();
        const topPos = sections[key].getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
            top: topPos,
            behavior: 'smooth'
        });
    })
})



// Add class 'active' to section when near top of viewport
// highlight navbar item
window.addEventListener('scroll', () => {
    for (const section of sections) {
        const id = section.getAttribute('id')
        let temp = document.getElementsByClassName(id)
        if (section.getBoundingClientRect().top >= -500 && section.getBoundingClientRect().top <= 270) {
            section.classList.add("active")
            temp[0].classList.add("actived")
        } else {
            section.classList.remove("active")
            temp[0].classList.remove("actived")
        }
    }
})
/**
 * End Main Functions
 *
*/




