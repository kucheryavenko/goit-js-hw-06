const fontInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function onInputSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
};

fontInputEl.addEventListener('input', onInputSize);