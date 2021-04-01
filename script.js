'use strict';

//select elements
const inputValues = document.querySelector('.values-input');
const copyButton = document.querySelector('.copy-button');

//copy to clipboard function
copyButton.addEventListener('click', () => {
  inputValues.select();
  inputValues.setSelectionRange(0, 99999);
  document.execCommand('copy');
});
