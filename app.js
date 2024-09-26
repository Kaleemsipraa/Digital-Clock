const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
let amPm = document.querySelector(".am-pm");

setInterval(() => {
  let date = new Date();

  if (date.getHours() < 10) {
    hrs.innerHTML = ` 0${date.getHours()}`;
  } else {
    hrs.innerHTML = date.getHours();
  }

  if (date.getHours() > 12) {
    hrs.innerHTML = `0${date.getHours() % 12}`;
    amPm.innerHTML = "pm";
  }

  if (date.getMinutes() < 10) {
    min.innerHTML = ` 0${date.getMinutes()}`;
  } else {
    min.innerHTML = date.getMinutes();
  }

  if (date.getSeconds() < 10) {
    sec.innerHTML = ` 0${date.getSeconds()}`;
  } else {
    sec.innerHTML = date.getSeconds();
  }
}, 1000);
