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


// bron: chat gpt: https://chatgpt.com/c/2feceae3-6dd6-4cf3-8ba3-0d833a3b333d
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

    // Remove the particle after its animation ends (after 0.9s)
    setTimeout(() => {
        particle.remove();
    }, 900); // Matches the duration of the fadeOut animation (0.9s)
});

const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };
  
  //bron confetti.js: https://confetti.js.org/more.html
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }
  
  document.querySelector('.confetti-button').addEventListener('click', shoot);
     
  function toggleHalloweenMode() {
    document.body.classList.toggle('halloween-mode');
}

// Example of using the function with a button that has a class
document.querySelector('.toggle-halloween-mode').addEventListener('click', toggleHalloweenMode);
