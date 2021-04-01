'use strict';

//select elements
const inputValues = document.querySelector('.values-input');
const copyButton = document.querySelector('.copy-button');
const bigBox = document.querySelector('.border-radius-container');
const insideBox = document.querySelector('.inside');
const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const widthHeightContainer = document.querySelector('.width-height-container');
// const checkBox = document.querySelector('.checkbox');
// const toggleSwitch = document.querySelector('.switch');
const switchButton = document.querySelector('.slider');

//input field values

//copy to clipboard function
copyButton.addEventListener('click', () => {
  inputValues.select();
  inputValues.setSelectionRange(0, 99999);
  document.execCommand('copy');
});

//calculating border radius functions +
topLeft.addEventListener('input', function () {
  insideBox.style.borderTopLeftRadius = Number(topLeft.value) + 'px';
});

topLeft.addEventListener('focusout', function () {
  inputValues.setAttribute(
    'value',
    'border-radius: ' + topLeft.value + 'px' + ' '
  );
});

topRight.addEventListener('input', function () {
  insideBox.style.borderTopRightRadius = Number(topRight.value) + 'px';
});

topRight.addEventListener('focusout', function () {
  inputValues.setAttribute(
    'value',
    inputValues.value + topRight.value + 'px' + ' '
  );
});

bottomLeft.addEventListener('input', function () {
  insideBox.style.borderBottomLeftRadius = Number(bottomLeft.value) + 'px';
});

bottomLeft.addEventListener('focusout', function () {
  inputValues.setAttribute(
    'value',
    inputValues.value + bottomLeft.value + 'px' + ' '
  );
});

bottomRight.addEventListener('input', function () {
  insideBox.style.borderBottomRightRadius = Number(bottomRight.value) + 'px';
});

bottomRight.addEventListener('focusout', function () {
  inputValues.setAttribute(
    'value',
    inputValues.value + bottomRight.value + 'px' + ' '
  );
});

//adjusting the size of the box
widthInput.addEventListener('input', () => {
  bigBox.style.width = widthInput.value + 'px';
});

heightInput.addEventListener('input', () => {
  bigBox.style.height = heightInput.value + 'px';
});

//toggle custom height/width
switchButton.addEventListener('click', () => {
  widthHeightContainer.classList.toggle('inactive');
  console.log('hello');
});
