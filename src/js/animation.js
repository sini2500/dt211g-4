/* animation demo 1 */

/* animation demo 2 */
const btn2 = document.getElementById("demo2-run");
const container2 = document.getElementById("demo2-container");

btn2.addEventListener("click", () => {

  container2.classList.add("show");

  setTimeout(() => {
    container2.classList.remove("show");
  }, 2000);

});

/* animation demo 3 */