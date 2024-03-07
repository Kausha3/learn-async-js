async function animateAliceSequence() {
    const aliceTumbling = [
        { transform: 'rotate(0) scale(1)' },
        { transform: 'rotate(360deg) scale(0)' }
    ];

    const aliceTiming = {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'
    };

    const alice1 = document.querySelector("#alice1");
    const alice2 = document.querySelector("#alice2");
    const alice3 = document.querySelector("#alice3");

    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished;
        console.log("Alice1 animation finished");
        await alice2.animate(aliceTumbling, aliceTiming).finished;
        console.log("Alice2 animation finished");
        await alice3.animate(aliceTumbling, aliceTiming).finished;
        console.log("Alice3 animation finished");
    } catch (err) {
        console.error(`Error when animating: ${err.message}`);
    }
}

animateAliceSequence();
