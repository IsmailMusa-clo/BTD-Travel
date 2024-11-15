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

    clientForm.style.display = 'block'
    freelancerForm.style.display = 'none'
  } else {
    freelancerBtn.style.color = '#00BE64';
    freelancerBtn.style.borderBottom = '3px solid #00BE64';
    clientBtn.style.color = '#707070';
    clientBtn.style.borderBottom = 'none';

    freelancerForm.style.display = 'block'
    clientForm.style.display = 'none'
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