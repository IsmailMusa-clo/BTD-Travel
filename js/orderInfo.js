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
        buttonContainer.innerHTML = '<img class="w-5 h-5" src="./src/assets/icons/plus.svg" alt="plus">';
        buttonContainer.onclick = () => {
          addRoomSectionBtn.click();
        };
      } else {
        buttonContainer.innerHTML = '<img class="w-5 h-5" src="./src/assets/icons/minus.svg" alt="minus">';
        buttonContainer.onclick = () => {
          section.remove();
          updateRoomInfoButtons();
        };
      }
    });
  }

  updateRoomInfoButtons();
});

document.addEventListener("DOMContentLoaded", () => {
  const addDurationBtn = document.getElementById('addDurationBtn');

  addDurationBtn.addEventListener('click', () => {

    const durationInfoInputs = document.querySelector('.durationInfoInputs');

    const newDurationInfoInputs = durationInfoInputs.cloneNode(true);

    newDurationInfoInputs.querySelectorAll('input').forEach(input => input.value = '');

    durationInfoInputs.insertAdjacentElement('afterend', newDurationInfoInputs);
    updateDurationInfoButtons();
  });

  function updateDurationInfoButtons() {
    const durationInfoSections = document.querySelectorAll('.durationInfoInputs');

    durationInfoSections.forEach((section, index) => {
      let buttonContainer = section.querySelector('.addDurationBtn');

      if (!buttonContainer) {
        buttonContainer = document.createElement('div');
        buttonContainer.className = 'addDurationBtn min-w-9 h-9 bg-textGreen rounded-md shadow-md flex items-center justify-center cursor-pointer';
        section.querySelector('.flex.items-center.gap-2.mt-2').appendChild(buttonContainer);
      }

      if (index === durationInfoSections.length - 1) {
        buttonContainer.innerHTML = '<img class="w-5 h-5" src="./src/assets/icons/plus.svg" alt="plus">';
        buttonContainer.onclick = () => {
          addDurationBtn.click();
        };
      } else {
        buttonContainer.innerHTML = '<img class="w-5 h-5" src="./src/assets/icons/minus.svg" alt="minus">';
        buttonContainer.onclick = () => {
          section.remove();
          updateDurationInfoButtons();
        };
      }
    });
  }

  updateDurationInfoButtons();
});

// Select For Hotels
const toggleHotels = document.getElementById("multiSelectToggleHotels");
const optionsHotels = document.getElementById("multiSelectOptionsHotels");
const placeholderHotels = document.getElementById("multiSelectPlaceholderHotels");
let selectedHotelsOptions = [];

toggleHotels.addEventListener("click", () => {
  optionsHotels.classList.toggle("hidden");
});

optionsHotels.addEventListener("click", (event) => {
  const option = event.target.closest(".optionHotel");
  if (!option) return;

  const value = option.dataset.value;

  if (selectedHotelsOptions.includes(value)) {
    // Deselect option
    selectedHotelsOptions = selectedHotelsOptions.filter((v) => v !== value);
    option.classList.remove("bg-gray-100", "font-bold");
  } else {
    // Select option
    selectedHotelsOptions.push(value);
    option.classList.add("bg-gray-100", "font-bold");
  }

  // Update placeholder text
  placeholderHotels.textContent = selectedHotelsOptions.length
    ? selectedHotelsOptions.join(", ")
    : "Select multiple options...";
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!toggleHotels.contains(event.target) && !optionsHotels.contains(event.target)) {
    optionsHotels.classList.add("hidden");
  }
});

// Select For Meals
const toggleMeals = document.getElementById("multiSelectToggleMeals");
const optionsMeals = document.getElementById("multiSelectOptionsMeals");
const placeholderMeals = document.getElementById("multiSelectPlaceholderMeals");
let selectedMealsOptions = [];

// Toggle dropdown visibility
toggleMeals.addEventListener("click", () => {
  optionsMeals.classList.toggle("hidden");
});

// Handle option selection
optionsMeals.addEventListener("click", (event) => {
  const option = event.target.closest(".optionMeal");
  if (!option) return;

  const value = option.dataset.value;

  if (selectedMealsOptions.includes(value)) {
    // Deselect option
    selectedMealsOptions = selectedMealsOptions.filter((v) => v !== value);
    option.classList.remove("bg-gray-100", "font-bold");
  } else {
    // Select option
    selectedMealsOptions.push(value);
    option.classList.add("bg-gray-100", "font-bold");
  }

  // Update placeholder text
  placeholderMeals.textContent = selectedMealsOptions.length
    ? selectedMealsOptions.join(", ")
    : "Select multiple options...";
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!toggleMeals.contains(event.target) && !optionsMeals.contains(event.target)) {
    optionsMeals.classList.add("hidden");
  }
});