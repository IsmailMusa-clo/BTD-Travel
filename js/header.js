// Profile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("[aria-label='Global'] button");
  const mobileMenu = document.querySelector("[role='dialog']");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  const closeButton = mobileMenu.querySelector("button");
  closeButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// User Profile Toggle Menu
function toggleProfileDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("hidden");
}

window.addEventListener("click", function (e) {
  const dropdown = document.getElementById("dropdownMenu");
  if (!e.target.closest("#dropdownMenu") && !e.target.closest("button")) {
    dropdown.classList.add("hidden");
  }
});

// Messages DropMenu
function toggleChatDropdown() {
  const MessagesDropdownMenu = document.getElementById('messages-dropdown-menu');
  MessagesDropdownMenu.classList.toggle("hidden");
}

window.addEventListener('click', (e) => {
  const MessagesDropdownMenu = document.getElementById('messages-dropdown-menu');
  if (!e.target.closest("#messages-dropdown-menu") && !e.target.closest("#email-icon")) {
    MessagesDropdownMenu.classList.add("hidden");
  }
});

// Notifications DropMenu
function toggleNotificationsDropdown() {
  const notificationsDropdownMenu = document.getElementById('notifications-dropdown-menu');
  notificationsDropdownMenu.classList.toggle("hidden");
}

window.addEventListener('click', (e) => {
  const notificationsDropdownMenu = document.getElementById('notifications-dropdown-menu');
  if (!e.target.closest("#notifications-dropdown-menu") && !e.target.closest("#notification-icon")) {
    notificationsDropdownMenu.classList.add("hidden");
  }
});
