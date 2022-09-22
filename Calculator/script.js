const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandScreen = document.querySelector('[data-previous-operand]');
const currentOperandScreen = document.querySelector('[data-current-operand]');


class Calculator {
   constructor(previousOperandScreen, currentOperandScreen) {
      this.previousOperandScreen = previousOperandScreen;
      this.currentOperandScreen = currentOperandScreen;
      this.clearValue();
   }

   clearValue() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
   }

   deleteValue() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
   }

   appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
   }

   chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
         this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
   }

   compute() {
      let computation;
      const previous = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(previous) || isNaN(current)) return;
      switch (this.operation) {
         case '+':
            computation = previous + current;
            break;
         case '-':
            computation = previous - current;
            break;
         case '/':
            computation = previous / current;
            break;
         case '*':
            computation = previous * current;
            break;
         default:
            return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
   }

   getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];
      let integerDisplay;
      if (isNaN(integerDigits)) {
         integerDisplay = '';
      } else {
         integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0
         });
      }
      if (decimalDigits != null) {
         return `${integerDisplay}.${decimalDigits}`;
      } else {
         return integerDisplay;
      }
   }

   updateDisplay() {
      this.currentOperandScreen.innerText = this.getDisplayNumber(this.currentOperand);
      if (this.operation != null) {
         this.previousOperandScreen.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
      } else {
         this.previousOperandScreen.innerText = '';
      }
   }

}

const calculator = new Calculator(previousOperandScreen, currentOperandScreen);

numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
   });
});

operationButtons.forEach(button => {
   button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
   });
});

equalsButton.addEventListener('click', button => {
   calculator.compute();
   calculator.updateDisplay();
});

clearButton.addEventListener('click', button => {
   calculator.clearValue();
   calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
   calculator.deleteValue();
   calculator.updateDisplay();
});

