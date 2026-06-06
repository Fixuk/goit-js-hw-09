const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

let formData = {
  email: '',
  message: '',
};

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  formData = JSON.parse(saved);
  emailInput.value = formData.email ?? '';
  messageInput.value = formData.message ?? '';
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: formData.email.trim(),
      message: formData.message.trim(),
    })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
