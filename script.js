const dataInput = document.querySelector("#data-input");
const resultInput = document.querySelector("#result-input");
const select = document.querySelector("#select");

select.addEventListener('change', function(e) {
  dataInput.oninput();
});

dataInput.oninput = function() {
  if (select.value === "Value-1") {
    resultInput.value = (dataInput.value * 20).toFixed(2);
  } else if (select.value === "Value-2") {
    resultInput.value = (dataInput.value * 30).toFixed(2);
  } else if (select.value === "Value-3") {
    resultInput.value = (dataInput.value * 40).toFixed(2);
  } else if (select.value === "Value-4") {
    resultInput.value = (dataInput.value * 50).toFixed(2);
  }
};