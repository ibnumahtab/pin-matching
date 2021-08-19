// Get Pin
function getPin () {
    const pin = Math.round(Math.random() * 12345);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
};

// Pin Generate
function pinGenerate() {
    const pin = getPin ();
    document.getElementById('pin-input').value = pin;
};

// Number Pad
document.getElementById('numbers-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }
    } else {
        calInput.value += number;
    }
});

// Pin Verification Function
function pinVerify () {
    const pinValue = document.getElementById('pin-input').value;
    const calcValue = document.getElementById('calc-input').value;

    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-error');
    
    if (pinValue == calcValue) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
};