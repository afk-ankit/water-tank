const buttonState = [false, false, false];
const form = document.getElementById("form");

let pump = document.querySelector('select[name="pump"]').value;

const [alert] = document.getElementsByClassName("alert");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let time = document.querySelector('input[name="time"]').value;
  alert.classList.remove("alert-danger");
  alert.classList.add("alert-primary");
  alert.style.display = "block";
  alert.textContent = `Pump for tank ${pump} started for ${time}  seconds`;
  alert.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    alert.textContent = `Pump for tank ${pump} has stopped`;
    alert.classList.remove("alert-primary");
    alert.classList.add("alert-danger");
  }, Number(time) * 1000);
});

const buttons = document.getElementsByClassName("button");
Array.from(buttons).forEach((button, key) => {
  button.addEventListener("click", () => {
    alert.scrollIntoView({ behavior: "smooth" });
    if (buttonState[key]) {
      button.textContent = "PUMP ON";
      button.classList.add("btn-primary");
      button.classList.remove("btn-danger");
      buttonState[key] = false;
      alert.textContent = `Pump for tank ${key + 1} has stopped`;
      alert.classList.remove("alert-primary");
      alert.classList.add("alert-danger");
    } else {
      button.textContent = "PUMP OFF";
      button.classList.remove("btn-primary");
      button.classList.add("btn-danger");
      buttonState[key] = true;
      alert.classList.remove("alert-danger");
      alert.classList.add("alert-primary");
      alert.style.display = "block";
      alert.textContent = `Pump for tank ${key + 1} started`;
    }
  });
});
