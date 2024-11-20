// User Toggle
const clientBtn = document.getElementById('client-btn')
const freelancerBtn = document.getElementById('freelancer-btn')
const clientForm = document.getElementById('client-form')
const freelancerForm = document.getElementById('freelancer-form')

const userToggle = (isClient) => {
  if (isClient) {
    clientBtn.style.color = '#00BE64';
    clientBtn.style.borderBottom = '3px solid #00BE64';
    freelancerBtn.style.color = '#707070';
    freelancerBtn.style.borderBottom = 'none';

    freelancerForm.classList.add('hidden');
    freelancerForm.classList.remove('fade-in');
    clientForm.classList.remove('hidden');
    clientForm.classList.add('fade-in');
  } else {
    freelancerBtn.style.color = '#00BE64';
    freelancerBtn.style.borderBottom = '3px solid #00BE64';
    clientBtn.style.color = '#707070';
    clientBtn.style.borderBottom = 'none';

    clientForm.classList.add('hidden');
    clientForm.classList.remove('fade-in');
    freelancerForm.classList.remove('hidden');
    freelancerForm.classList.add('fade-in');
  }
}

clientBtn.addEventListener('click', () => userToggle(true))
freelancerBtn.addEventListener('click', () => userToggle(false))

// Input file
function displayFileName() {
  const input = document.getElementById('file-input');
  const placeholder = document.getElementById('file-placeholder');

  if (input.files.length > 0) {
    placeholder.textContent = input.files[0].name;
  } else {
    placeholder.textContent = 'ارفع الملفات من هنا';
  }

}