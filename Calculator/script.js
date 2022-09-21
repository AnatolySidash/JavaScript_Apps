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

   }

   appendNumber(number) {
      this.currentOperand = this.currentOperand.toString() + number.toString();
   }

   chooseOperation(operation) {

   }

   compute() {

   }

   updateDisplay() {
      this.currentOperandScreen.innerText = this.currentOperand;
   }

}

const calculator = new Calculator(previousOperandScreen, currentOperandScreen);

numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
   });
});

