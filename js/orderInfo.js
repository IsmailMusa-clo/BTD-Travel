document.addEventListener("DOMContentLoaded", () => {
  const addRoomSectionBtn = document.getElementById('addRoomSectionBtn');

  addRoomSectionBtn.addEventListener('click', () => {

    const roomInfoInputs = document.querySelector('.roomInfoInputs');

    const newRoomInfoInputs = roomInfoInputs.cloneNode(true);

    newRoomInfoInputs.querySelectorAll('input').forEach(input => input.value = '');

    roomInfoInputs.insertAdjacentElement('afterend', newRoomInfoInputs);
    updateRoomInfoButtons();
  });

  function updateRoomInfoButtons() {
    const roomInfoSections = document.querySelectorAll('.roomInfoInputs');

    roomInfoSections.forEach((section, index) => {
      let buttonContainer = section.querySelector('.addRoomSectionBtn');

      if (!buttonContainer) {
        buttonContainer = document.createElement('div');
        buttonContainer.className = 'addRoomSectionBtn min-w-9 h-9 bg-textGreen rounded-md shadow-md flex items-center justify-center cursor-pointer';
        section.querySelector('.flex.items-center.gap-2.mt-2').appendChild(buttonContainer);
      }

      if (index === roomInfoSections.length - 1) {
        buttonContainer.innerHTML = '<img class="w-6 h-6" src="./src/assets/icons/plus.svg" alt="plus">';
        buttonContainer.onclick = () => {
          addRoomSectionBtn.click();
        };
      } else {
        buttonContainer.innerHTML = '<img class="w-6 h-6" src="./src/assets/icons/minus.svg" alt="minus">';
        buttonContainer.onclick = () => {
          section.remove();
          updateRoomInfoButtons();
        };
      }
    });
  }

  updateRoomInfoButtons();
});