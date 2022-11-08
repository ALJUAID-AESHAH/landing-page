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

// Start Helper Functions
// Add class 'active' to section when near top of viewport
function addActiveClassName(value) {
    for (const section of sections) {
        section === sections[value] ? section.classList.add('active') : section.classList.remove('active')
    }
}
// End Helper Functions



const anchors = document.querySelectorAll('.menu__link')
// const items=document.querySelectorAll('li')

// Scroll to anchor ID using scrollTO event
anchors.forEach((key, value) => {
    key.addEventListener('click', function (event) {
        event.preventDefault();
        // Set sections as active
        addActiveClassName(value)
        // Scroll to section on link click
        const element = sections[value]
        element.scrollIntoView({ behavior: "smooth" })
        // element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        // const topPos = sections[value].getBoundingClientRect().top + window.pageYOffset
        // console.log(topPos);
        // window.scroll({
        //     top: topPos,
        //     behavior: 'smooth'
        // });
    })

})
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 





