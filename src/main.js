console.log("hello");

const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards"
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// const firstAnimation = alice1.animate(aliceTumbling, aliceTiming).finished;
// firstAnimation.then((response) => {
//   const secondAnimation = alice2.animate(aliceTumbling, aliceTiming).finished;
//   secondAnimation.then((response) => {
//     const thirdAnimation = alice3.animate(aliceTumbling, aliceTiming).finished;
//     })
// });

async function animationSequence() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming);
  } catch (error) {
    console.error(`Could not run sequence: ${error}`);
    // to test, type "error" in alice1.animate(aliceTumbling, aliceTiming) //
  }
}

animationSequence();
