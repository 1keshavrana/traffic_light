const lights = document.querySelectorAll(".traffic-light");

function setLight(light, color) {
  const red = light.querySelector(".red");
  const yellow = light.querySelector(".yellow");
  const green = light.querySelector(".green");

  red.style.background = color === "red" ? "red" : "gray";
  yellow.style.background = color === "yellow" ? "yellow" : "gray";
  green.style.background = color === "green" ? "green" : "gray";
}

function cycleLights() {
  // RED for 10 sec
  lights.forEach(l => setLight(l, "red"));
  console.log("RED");
  setTimeout(() => {
    // YELLOW for 3 sec
    lights.forEach(l => setLight(l, "yellow"));
    console.log("YELLOW");
    setTimeout(() => {
      // GREEN for 10 sec
      lights.forEach(l => setLight(l, "green"));
      console.log("GREEN");
      setTimeout(() => {
        cycleLights(); // restart cycle
      }, 10000);
    }, 3000);
  }, 10000);
}

cycleLights();






// let stat = "green"; // current light: "red" or "green"
// let t = 10; // seconds duration for each state
// let intervalId;

// function setLight(color) {
//     document.querySelector(".red").style.backgroundColor = (color === "red") ? "red" : "gray";
//     document.querySelector(".yellow").style.backgroundColor = (color === "yellow") ? "yellow" : "gray";
//     document.querySelector(".green").style.backgroundColor = (color === "green") ? "green" : "gray";
// }

// function stateRed() {
//     clearInterval(intervalId);
//     setLight("red");
//     console.log("RED for 10 seconds");
//     setTimeout(() => {
//         setLight("yellow");
//         console.log("YELLOW for 3 seconds");
//         setTimeout(() => {
//             stat = "green";
//             stateGreen();
//         }, 3000);
//     }, 10000);
// }

// function stateGreen() {
//     clearInterval(intervalId);
//     setLight("green");
//     console.log("GREEN for 10 seconds");
//     setTimeout(() => {
//         setLight("yellow");
//         console.log("YELLOW for 3 seconds");
//         setTimeout(() => {
//             stat = "red";
//             stateRed();
//         }, 3000);
//     }, 10000);
// }

// // Start simulation
// if (stat === "green") {
//     stateGreen();
// } else {
//     stateRed();
// }
