const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  formData = JSON.parse(saved);
  form.elements.email.value = formData.email ?? '';
  form.elements.message.value = formData.message ?? '';
}

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
