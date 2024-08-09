let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let calculator = {
    displayValue: '',
    firstOperand: '',
    operator: '',
    secondOperand: '',
    result: '',

    init: function() {
        buttons.forEach(button => {
            button.addEventListener('click', this.handleClick);
        });
    },

    handleClick: function(event) {
        let value = event.target.value;

        if (value === 'C') {
            calculator.clear();
        } else if (value === '=') {
            calculator.calculate();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            calculator.setOperator(value);
        } else {
            calculator.appendValue(value);
        }

        display.value = calculator.displayValue;
    },

    clear: function() {
        this.displayValue = '';
        this.firstOperand = '';
        this.operator = '';
        this.secondOperand = '';
        this.result = '';
    },

    setOperator: function(operator) {
        this.operator = operator;
        this.firstOperand = this.displayValue;
        this.displayValue = '';
    },

    appendValue: function(value) {
        this.displayValue += value;
    },

    calculate: function() {
        this.secondOperand = this.displayValue;
        let result = eval(`${this.firstOperand} ${this.operator} ${this.secondOperand}`);
        this.displayValue = result;
        this.result = result;
    }
};

calculator.init();