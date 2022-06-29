const input = document.querySelector('#validation-input');
const validLength = document.querySelector('input[data-length="6"]');

function onInputBlur(event) {
    
    if (event.currentTarget.value.length >= validLength.dataset.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
};

input.addEventListener('blur', onInputBlur);
