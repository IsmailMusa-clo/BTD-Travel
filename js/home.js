// Create Order Modal
function showPostModal() {
  const postModal = document.getElementById('post-modal');
  const postOverlay = document.getElementById('post-overlay');
  postModal.classList.toggle("hidden");
  postOverlay.classList.toggle("hidden");
  document.body.classList = 'overflow-y-hidden'
}

function hidePostModal() {
  const postModal = document.getElementById('post-modal');
  const postOverlay = document.getElementById('post-overlay');
  postModal.classList.toggle("hidden");
  postOverlay.classList.toggle("hidden");
  document.body.classList = 'overflow-y-auto'
}