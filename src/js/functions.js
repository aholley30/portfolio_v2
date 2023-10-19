// get random number for position
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// window.onload = () => {
//     const canvas = document.getElementById('canvas');
//     const stop = document.getElementById('stop');
//     const ctx = canvas.getContext("2d");
//     let raf;
//     const ball = {
//         x: 100,
//         y: 100,
//         vx: 5,
//         vy: 2,
//         radius: 2,
//         color: "rgba(217, 222, 240, 0.5)",
//         draw() {
//           ctx.beginPath();
//           ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//           ctx.closePath();
//           ctx.fillStyle = this.color;
//           ctx.fill();
//         },
//       };
      
//       function draw() {
//         ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
//         ball.draw();
//         ball.x += ball.vx;
//         ball.y += ball.vy;
//         // ball.vy *= 0.99;
//         // ball.vy += 0.25;
      
//         if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
//           ball.vy = -ball.vy;
//         }
//         if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
//           ball.vx = -ball.vx;
//         }
      
//         raf = window.requestAnimationFrame(draw);
//       }

//     document.addEventListener("click", () => {
//         console.log("start");
//         window.requestAnimationFrame(draw);
//     });

//     stop.addEventListener("click", (e) => {
//         console.log("stop");
//         e.stopPropagation();
//         window.cancelAnimationFrame(raf);
//     });

// }