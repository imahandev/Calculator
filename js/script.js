const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let lastInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.classList.contains('number')) {
            if (resultDisplayed) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        } else if (button.classList.contains('operator')) {
            if (currentInput === '') return;
            if (['+', '-', '*', '/'].includes(lastInput)) {
                currentInput = currentInput.slice(0, -1) + value;
            } else {
                currentInput += value;
            }
            display.value = currentInput;
            resultDisplayed = false;
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            display.value = '';
        } else if (button.classList.contains('equal')) {
            try {
                const evalResult = eval(currentInput);
                display.value = evalResult;
                currentInput = evalResult.toString();
                resultDisplayed = true;
            } catch (e) {
                display.value = 'خطا';
                currentInput = '';
            }
        }
        lastInput = value;
    });
});
