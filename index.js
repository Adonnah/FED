console.log("zumiez");

const button = document.querySelector('nav button');
const nav = document.querySelector('nav');

button.addEventListener('click', function() {
    const expanded = nav.getAttribute('aria-expanded') === 'true' || false;
    nav.setAttribute('aria-expanded', !expanded);
});

const stars = document.querySelectorAll('button');

// Loop through each star and add a click event listener
stars.forEach(star => {
    star.addEventListener('click', function() {
        // Toggle aria-pressed attribute between "true" and "false"
        const isPressed = this.getAttribute('aria-pressed') === 'true';
        this.setAttribute('aria-pressed', isPressed ? 'false' : 'true');

        // Optionally, log the favorite state or send it to the server
        if (this.getAttribute('aria-pressed') === 'true') {
            console.log('Item added to favorites');
        } else {
            console.log('Item removed from favorites');
        }
        Geluid.play();
    });

});

const Geluid = new Audio('sound/audio-smiths.mp3')
// Code van chatGPT
const sortIconButton = document.querySelector('button[aria-label="Toggle Sort Direction"]');

// Track the sort direction state
let isAscending = true;

// Add a click event listener to the sort button
sortIconButton.addEventListener('click', function() {
    // Toggle the aria-pressed attribute and the sort direction
    isAscending = !isAscending;
    this.setAttribute('aria-pressed', isAscending ? 'false' : 'true');

    // Optionally log the new sorting direction or apply logic
    if (isAscending) {
        console.log('Sort Ascending');
    } else {
        console.log('Sort Descending');
    }
});

document.addEventListener('mousemove', function(e) {
    console.log("Mouse moved: ", e.pageX, e.pageY); 
    // Create a new particle element
    const particle = document.createElement('span');
    particle.classList.add('particle');

    // Set the particle's position to the mouse coordinates
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;

    // Append the particle to the body
    document.body.appendChild(particle);

    // Remove the particle after its animation ends (after 0.8s)
    setTimeout(() => {
        particle.remove();
    }, 800); // Matches the duration of the fadeOut animation (0.8s)
});
  
