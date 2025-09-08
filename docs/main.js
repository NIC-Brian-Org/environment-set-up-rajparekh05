console.log('main.js');

(() => {
    console.log('Calculator script loaded!');

    window.addEventListener("load", () => {
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        const operation = document.getElementById('operation');
        const result = document.getElementById('result');

        const update = () => {
            const a = parseFloat(num1.value);
            const b = parseFloat(num2.value);
            let res = 0;

            switch (operation.value) {
                case 'add':
                    res = a + b;
                    break;
                case 'subtract':
                    res = a - b;
                    break;
                case 'multiply':
                    res = a * b;
                    break;
                case 'divide':
                    res = b !== 0 ? a / b : 'Error (÷0)';
                    break;
            }

            result.innerHTML = res;
        };

        // Listen to changes
        num1.addEventListener("input", update);
        num2.addEventListener("input", update);
        operation.addEventListener("change", update);

        // Initialize result
        update();
    });      
})();
