const multiSelect = document.getElementById("multiSelect");
  const selectedOptionsContainer = document.getElementById("selectedOptionsContainer");

  // Array to store selected options
  const selectedOptions = [];

  multiSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const selectedText = multiSelect.options[multiSelect.selectedIndex].text;

    // Check if the option is already selected
    if (!selectedOptions.includes(selectedValue)) {
      // Add to selected options
      selectedOptions.push(selectedValue);

      // Create a span for the selected option
      const span = document.createElement("span");
      span.className =
        "flex items-center justify-between gap-3 px-2 rounded-md bg-mainGreen text-white text-sm font-medium";
      span.dataset.value = selectedValue
      // Create the text for the span
      span.innerHTML = `
        <p>${selectedText}</p>
        <button class="text-white cursor-pointer text-xl">
          &times;
        </button>
      `;

      selectedOptionsContainer.appendChild(span);

      span.querySelector("button").addEventListener("click", () => {
        selectedOptionsContainer.removeChild(span);

        const index = selectedOptions.indexOf(selectedValue);
        if (index !== -1) selectedOptions.splice(index, 1);
      });
    }

    multiSelect.value = "";
  });