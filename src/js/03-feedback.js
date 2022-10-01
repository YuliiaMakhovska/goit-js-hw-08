import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);
const feedbackFormState = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};
onSavedMessageInput();
function onInputChange(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
  console.log(feedbackFormState);
}

function onFormSubmit(e) {
  e.preventDefault();
  if (emailEl.value === '' || messageEl.value === '') {
    alert('Please fill in the empty fields');
    return;
  }
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onSavedMessageInput() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    if (savedMessage.message) {
      messageEl.textarea.value = savedMessage.message;
    }
    if (savedMessage) {
      if (savedMessage.email) {
        emailEl.value = savedMessage.email;
      }
    }
  }
  console.log(savedMessage);
}
