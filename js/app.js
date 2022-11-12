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
    item.innerHTML = `<a class="menu__link" href="#${id}">${name}</a>`
    navItems.appendChild(item)
}




// Begin Events

// Scroll to anchor ID using scrollTO event

const anchors = document.querySelectorAll('.menu__link')
anchors.forEach((value, key) => {
    value.addEventListener('click', function (event) {
        event.preventDefault();
        // Scroll to section on link click
        const topPos = sections[key].getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
            top: topPos,
            behavior: 'smooth'
        });
    })

})

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    for (const section of sections) {
        if (section.getBoundingClientRect().top >= -597 && section.getBoundingClientRect().top <= 270) {
            section.classList.add("active")
        } else {
            section.classList.remove("active")
        }
    }
})
/**
 * End Main Functions
 *
*/




