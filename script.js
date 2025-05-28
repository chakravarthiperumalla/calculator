function appendValue(val) {
    const display = document.getElementById("display");
    if (display.innerText === "0" || display.innerText === "Error") {
      display.innerText = val;
    } else {
      display.innerText += val;
    }
  }
  
  function clearDisplay() {
    document.getElementById("display").innerText = "0";
  }
  
  function deleteLast() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1) || "0";
  }
  
  function calculate() {
    const display = document.getElementById("display");
    try {
      display.innerText = eval(display.innerText);
    } catch {
      display.innerText = "Error";
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  