document.addEventListener('DOMContentLoaded', () => {
  const buttonEl = document.getElementById('button');
  const fnameInput = document.getElementById('fnameInput');
  const lnameInput = document.getElementById('lnameInput');
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');
  const fnameErrorText = document.getElementById('fnameErrorText');
  const lnameErrorText = document.getElementById('lnameErrorText');
  const emailErrorText = document.getElementById('emailErrorText');
  const radioErrorText = document.getElementById('radioErrorText');
  const messageErrorText = document.getElementById('messageErrorText');
  const confirmErrorText = document.getElementById('confirmErrorText');
  const radioOne = document.getElementById('radio1');
  const radioTwo = document.getElementById('radio2');
  const checkboxInput = document.getElementById('checkboxInput');

  const customAlert = document.querySelector('.customAlert');

  const fnameTextOnlyPattern = /^[a-zA-Z\s]+$/;
  const lnameTextOnlyPattern = /^[a-zA-Z\s]+$/;
  const emailPatter = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  let isRadioOneTrue = false;
  let isRadioTwoTrue = false;

  radioOne.addEventListener('change', () => {
    isRadioOneTrue = true;
    isRadioTwoTrue = false;
  });

  radioTwo.addEventListener('change', () => {
    isRadioOneTrue = false;
    isRadioTwoTrue = true;
  });

  checkboxInput.addEventListener('change', () => {
    checkboxInput = !checkboxInput;
  });

  buttonEl.addEventListener('click', (event) => {
    const fnameValue = fnameInput.value;
    const lnameValue = lnameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    const checkboxTriggered = checkboxInput.checked;

    event.preventDefault();

    errorChecker(
      fnameValue,
      lnameValue,
      emailValue,
      messageValue,
      checkboxTriggered,
      isRadioOneTrue,
      isRadioTwoTrue,
    );
  });

  function errorChecker(
    fname,
    lname,
    emailIn,
    messageIn,
    isCheckTriggered,
    radio1,
    radio2,
  ) {
    resetErrors();

    let isError = false;

    if (!fname) {
      console.log('First Name is Empty');
      fnameErrorText.classList.add('errorText');
      fnameErrorText.textContent = 'This field is required';
      fnameInput.classList.add('errorBorder');
      isError = true;
    }
    if (!fnameTextOnlyPattern.test(fname)) {
      console.log('First Name is Invalid');
      fnameErrorText.classList.add('errorText');
      fnameErrorText.textContent = 'This field is required';
      fnameInput.classList.add('errorBorder');
      isError = true;
    }
    if (!lname) {
      console.log('Last Name is Empty');
      lnameErrorText.classList.add('errorText');
      lnameErrorText.textContent = 'This field is required';
      lnameInput.classList.add('errorBorder');
      isError = true;
    }
    if (!lnameTextOnlyPattern.test(lname)) {
      console.log('Last Name is Invalid');
      lnameErrorText.classList.add('errorText');
      lnameErrorText.textContent = 'This field is required';
      lnameInput.classList.add('errorBorder');
      isError = true;
    }
    if (!emailIn) {
      console.log('Email is Empty');
      emailErrorText.classList.add('errorText');
      emailErrorText.textContent = 'Please enter a valid email address';
      emailInput.classList.add('errorBorder');
      isError = true;
    }
    if (!emailPatter.test(emailIn)) {
      console.log('Email is Invalid');
      emailErrorText.classList.add('errorText');
      emailErrorText.textContent = 'Please enter a valid email address';
      emailInput.classList.add('errorBorder');
      isError = true;
    }
    if (!messageIn) {
      console.log('Message is Empty');
      messageErrorText.classList.add('errorText');
      messageErrorText.textContent = 'This field is required';
      messageInput.classList.add('errorBorder');
      isError = true;
    }
    if (!isCheckTriggered) {
      console.log('Checkbox is not checked');
      confirmErrorText.classList.add('errorText');
      confirmErrorText.textContent = 'This field is required';
      isError = true;
    }
    if (!radio1 && !radio2) {
      radioErrorText.classList.add('errorText');
      radioErrorText.textContent = 'Please select a query type';
      isError = true;
    } else {
      radioErrorText.textContent = '';
    }

    return !isError && timer();
  }

  function resetErrors() {
    fnameInput.classList.remove('errorBorder');
    lnameInput.classList.remove('errorBorder');
    emailInput.classList.remove('errorBorder');
    messageInput.classList.remove('errorBorder');

    fnameErrorText.classList.remove('errorText');
    fnameErrorText.textContent = '';
    lnameErrorText.classList.remove('errorText');
    lnameErrorText.textContent = '';
    emailErrorText.classList.remove('errorText');
    emailErrorText.textContent = '';
    radioErrorText.classList.remove('errorText');
    radioErrorText.textContent = '';
    messageErrorText.classList.remove('errorText');
    messageErrorText.textContent = '';
    confirmErrorText.classList.remove('errorText');
    confirmErrorText.textContent = '';
  }

  function timer() {
    customAlert.classList.add('moveAlert');

    console.log('It works!');

    setTimeout(() => {
      customAlert.classList.remove('moveAlert');
    }, 5000);
  }
});
