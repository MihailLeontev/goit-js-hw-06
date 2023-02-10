document.querySelector('body').style.backgroundColor = '#cfd1e1';

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) =>
  (nameRef.innerText = currentTarget.value.trim()
    ? currentTarget.value.trim()
    : 'Anonymous');

inputRef.addEventListener('input', getInputValue);
