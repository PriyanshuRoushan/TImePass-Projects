let display = document.getElementById("Display");

function appendValue(value){
    display.value += value;
}

function clearDisplay() {
    display.value="";
}

function deleteValue(){
    display.value =  display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        // Step 1: Split numbers and operators
        let numbers = expression.split(/[\+\-\*\/]/).map(Number);
        let operators = expression.match(/[\+\-\*\/]/g);

        if (!operators) {
            display.value = numbers[0];
            return;
        }

        // Step 2: Handle * and /
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '*' || operators[i] === '/') {
                let result =
                    operators[i] === '*'
                        ? numbers[i] * numbers[i + 1]
                        : numbers[i] / numbers[i + 1];

                numbers.splice(i, 2, result);
                operators.splice(i, 1);
                i--; // adjust index
            }
        }

        // Step 3: Handle + and -
        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '+') {
                result += numbers[i + 1];
            } else {
                result -= numbers[i + 1];
            }
        }

        display.value = result;

    } catch (error) {
        display.value = "Error!";
    }
}