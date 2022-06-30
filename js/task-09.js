const body = document.querySelector('body');
const textColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onChangeColor() {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}

