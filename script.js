const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
  
    // Valid numbers and operators
    if (!isNaN(key) || ['+', '-', '*', '/', '.', 'x', 'X'].includes(key)) {
        if (key === 'x' || key === 'X') {
          appendValue('*');
        } else {
          appendValue(key);
        }      
    } else if (key === 'Enter' || key === '=') {
      event.preventDefault(); // prevents form submission if Enter is pressed
      calculateResult();
    } else if (key === 'Backspace') {
      deleteLast();
    } else if (key.toLowerCase() === 'c') {
      clearDisplay();
    }
  });
  
  function appendExponent() {
    display.value += '**';
  }
  
  function toggleNegative() {
    try {
      if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
      } else {
        display.value = '-' + display.value;
      }
    } catch {
      display.value = 'Error';
    }
  }
  
