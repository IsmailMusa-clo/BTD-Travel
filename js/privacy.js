// FAQs Function
function toggleFAQ(faqId) {
  const content = document.getElementById(`${faqId}-content`);
  const icon = document.getElementById(`${faqId}-icon`);

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.classList.add('rotate-180');
  } else {
    content.classList.add('hidden');
    icon.classList.remove('rotate-180');
  }
}