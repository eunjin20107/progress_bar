let counter = 0;

setInterval(() => {
  const el = document.querySelector(".number");
  const elvalue = Number(el.getAttribute("data-value"));
  if (counter !== elvalue) {
    counter++;
    el.innerHTML = `${counter}%`;
  }
}, 80);
