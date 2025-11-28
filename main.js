let darkBtn = document.querySelector(".dark_btn");
let lightBtn = document.querySelector(".light_btn");

darkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.a.style.color = "white";
  document.li.style.color = "white";
  document.h3.style.color = "white";
  document.h1.style.color = "white";
  document.h2.style.color = "white";
});

lightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.a.style.color = "black";
  document.li.style.color = "black";
    document.h3.style.color = "black";
  document.h1.style.color = "black";
  document.h2.style.color = "black";
});
