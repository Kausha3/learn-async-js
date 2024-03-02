const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function animateSequence() {
  try {
    // Animate alice1 and wait for it to finish
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    console.log('Alice1 animation finished');

    // Once alice1's animation is finished, animate alice2
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    console.log('Alice2 animation finished');

    // Once alice2's animation is finished, animate alice3
    await alice3.animate(aliceTumbling, aliceTiming).finished;
    console.log('Alice3 animation finished');
  } catch (err) {
    // If there's an error in any of the animations, log it
    console.error(`Error during animation: ${err.message}`);
  }
}

// Start the animation sequence
animateSequence();
