// Select All
function selectAllFunc(selectAllBtn) {
  const checkboxes = document.querySelectorAll('.notification-checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllBtn.checked
  })
}