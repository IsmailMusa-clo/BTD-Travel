// Settings Toggle
function settingsToggle(btn) {
  const basicInfo = document.getElementById("basic-info");
  const generalSettings = document.getElementById("general-settings");

  const basicInfoBtn = document.querySelector(".basic-info-btn");
  const generalSettingsBtn = document.querySelector(".general-settings-btn");

  if (btn.classList.contains('basic-info-btn')) {
    generalSettings.classList.add("hidden");
    generalSettingsBtn.style.opacity = '0.6';
    generalSettingsBtn.style.borderRight = '0';
    basicInfo.classList.remove("hidden");
    basicInfoBtn.style.opacity = '1'
    basicInfoBtn.style.borderRight = '8px solid #69BE96'
  } else {
    basicInfo.classList.add("hidden");
    basicInfoBtn.style.opacity = '0.6';
    basicInfoBtn.style.borderRight = '0';
    generalSettings.classList.remove("hidden");
    generalSettingsBtn.style.opacity = '1';
    generalSettingsBtn.style.borderRight = '8px solid #69BE96'
  }
}