const fontInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontInputEl.addEventListener('input', onInputSize);

function onInputSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
};
