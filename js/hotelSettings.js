// Settings Toggle
function settingsToggle(btn) {
  const basicInfo = document.getElementById("basic-info");
  const generalSettings = document.getElementById("general-settings");
  const employeesDashboard = document.getElementById("employeesDashboard");

  const basicInfoBtn = document.querySelector(".basic-info-btn");
  const generalSettingsBtn = document.querySelector(".general-settings-btn");

  if (btn.classList.contains('basic-info-btn')) {
    generalSettings.classList.add("hidden");
    employeesDashboard.classList.add("hidden");
    generalSettingsBtn.style.opacity = '0.6';
    generalSettingsBtn.style.borderRight = '0';
    basicInfo.classList.remove("hidden");
    basicInfoBtn.style.opacity = '1'
    basicInfoBtn.style.borderRight = '8px solid #69BE96';
  } else {
    basicInfo.classList.add("hidden");
    basicInfoBtn.style.opacity = '0.6';
    basicInfoBtn.style.borderRight = '0';
    generalSettings.classList.remove("hidden");
    employeesDashboard.classList.remove("hidden");
    generalSettingsBtn.style.opacity = '1';
    generalSettingsBtn.style.borderRight = '8px solid #69BE96'
  }
}


// Dashboard Section

// Employees Dummy Data
const data = [
  { id: 1, name: "أحمد", jobCode: 51, jobType: "المدير العام", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 2, name: "ليلى", jobCode: 52, jobType: "مسؤول قسم مبيعات", gender: "أنثى", phone: "654321", email: "layla@example.com" },
  { id: 3, name: "عماد", jobCode: 53, jobType: "مسؤول الحجوزات", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 4, name: "ألاء", jobCode: 54, jobType: "مسؤول قسم المالية", gender: "أنثى", phone: "654321", email: "layla@example.com" },
  { id: 5, name: "خالد", jobCode: 51, jobType: "المدير العام", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 6, name: "سعاد", jobCode: 52, jobType: "مسؤول قسم مبيعات", gender: "أنثى", phone: "654321", email: "layla@example.com" },
  { id: 7, name: "خالد", jobCode: 54, jobType: "مسؤول قسم المالية", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 8, name: "ملاك", jobCode: 53, jobType: "مسؤول الحجوزات", gender: "أنثى", phone: "654321", email: "layla@example.com" },
  { id: 9, name: "علاء", jobCode: 52, jobType: "مسؤول قسم مبيعات", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 10, name: "منى", jobCode: 52, jobType: "مسؤول قسم مبيعات", gender: "أنثى", phone: "654321", email: "layla@example.com" },
  { id: 11, name: "أسعد", jobCode: 51, jobType: "المدير العام", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 12, name: "علا", jobCode: 54, jobType: "مسؤول قسم المالية", gender: "أنثى", phone: "654321", email: "layla@example.com" },
  { id: 13, name: "جهاد", jobCode: 52, jobType: "مسؤول قسم مبيعات", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 14, name: "سميرة", jobCode: 54, jobType: "مسؤول قسم المالية", gender: "أنثى", phone: "654321", email: "layla@example.com" },
  { id: 15, name: "ماجد", jobCode: 55, jobType: "مسؤول قسم النشر", gender: "ذكر", phone: "123456", email: "ahmed@example.com" },
  { id: 16, name: "سهاد", jobCode: 53, jobType: "مسؤول الحجوزات", gender: "أنثى", phone: "654321", email: "layla@example.com" },
];

let currentPage = 1;
let rowsPerPage = 5;

// Initialize the table
function loadTable(dataToLoad) {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = dataToLoad.slice(startIndex, endIndex);

  currentData.forEach((item, index) => {
    const row = document.createElement('tr');
    row.classList.add('border-b');
    row.classList.add('odd:bg-[#69be961d]');
    row.classList.add('even:bg-white');
    row.innerHTML = `
            <td class="px-2 py-4 min-w-fit">${item.id}</td>
            <td class="px-2 py-4 min-w-fit">${item.name}</td>
            <td class="px-2 py-4 min-w-[170px] flex items-center justify-center">
              <p class="${getJobColor(item.jobCode)} p-1 px-2 rounded-full w-fit">${item.jobType}</p>  
            </td>
            <td class="px-2 py-4 min-w-fit">${item.gender}</td>
            <td class="px-2 py-4 min-w-fit">${item.phone}</td>
            <td class="px-2 py-4 min-w-fit">${item.email}</td>
            <td class="px-2 py-4 min-w-fit flex items-center justify-center gap-4">
              <button onclick="editRow(${index})" class="text-blue-500">
                <img class="w-5" src="./src/assets/icons/edit-row.svg" alt="edit">  
              </button>
              <button onclick="deleteRow(${index})" class="text-red-500">
                <img class="w-5" src="./src/assets/icons/delete-row.svg" alt="edit">  
              </button>
            </td>
        `;
    tableBody.appendChild(row);
  });

  updatePaginationButtons();

}

// Function to get background color based on job type
function getJobColor(jobCode) {
  switch (jobCode) {
    case 51: return "bg-[#d1c1a9]";
    case 52: return "bg-[#69be9693]";
    case 53: return "bg-[#2d36b96c]";
    case 54: return "bg-[#b4223554]";
    case 55: return "bg-[#00be6580]";
    default: return "bg-gray-200";
  }
}

// Pagination functions

// Generate Pagination Buttons
function updatePaginationButtons() {
  const paginationButtons = document.getElementById('paginationButtons');
  paginationButtons.innerHTML = '';
  paginationButtons.style.direction = 'ltr'

  const totalPages = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.classList.add('px-3', 'py-1', 'rounded', 'text-white', i === currentPage ? 'bg-textGreen' : 'bg-gray-500');
    button.textContent = i;
    button.onclick = () => goToPage(i);
    paginationButtons.appendChild(button);
  }
}

// Change page
function goToPage(page) {
  currentPage = page;
  loadTable(data);
}

function nextPage() {
  if (currentPage * rowsPerPage < data.length) {
    currentPage++;
    loadTable(data);
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    loadTable(data);
  }
}

function changeRowsPerPage() {
  rowsPerPage = parseInt(document.getElementById('rowsPerPage').value);
  currentPage = 1;
  loadTable(data);
}

function deleteRow(index) {
  data.splice(index, 1);
  loadTable(data);
}

function editRow(index) {
  alert("Editing row: " + data[index].name);
  // Add edit functionality here
}

// Sorting function (basic sort implementation)
function sortTable(column) {
  data.sort((a, b) => {
    const valA = Object.values(a)[column];
    const valB = Object.values(b)[column];
    return valA < valB ? -1 : valA > valB ? 1 : 0;
  });
  loadTable(data);
}

// Filter function (basic search)
function filterTable() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.jobType.toLowerCase().includes(searchTerm) ||
    item.phone.toLowerCase().includes(searchTerm) ||
    item.email.toLowerCase().includes(searchTerm)
  );
  currentPage = 1; // Reset to the first page after filtering
  loadTable(filteredData);

}

// Open and Close Add Employee Form
function openAddEmployeeForm() {
  document.getElementById('addEmployeeForm').classList.remove('hidden');
}

function closeAddEmployeeForm() {
  document.getElementById('addEmployeeForm').classList.add('hidden');
}

// Add new employee to the data
function addEmployee() {
  const name = document.getElementById('employeeName').value;
  const jobType = document.getElementById('employeeJob').value;
  const gender = document.getElementById('employeeGender').value;
  const phone = document.getElementById('employeePhone').value;
  const email = document.getElementById('employeeEmail').value;

  if (name && jobType && gender && phone && email) {
    const newEmployee = {
      id: data.length + 1,
      name,
      jobType,
      gender,
      phone,
      email
    };

    data.push(newEmployee);
    loadTable(data);
    closeAddEmployeeForm();
  } else {
    alert("يرجى ملء جميع الحقول.");
  }
}

loadTable(data);

// Toggle Client Type
function toggleClientType() {
  const normalAccountBtn = document.getElementById('normalAccountBtnLabel')
  const businessAccountBtn = document.getElementById('businessAccountBtnLabel')
  const isNormal = document.getElementById('normalAccountBtn').checked
  const normalSection = document.getElementById("normalClientSection");
  const businessSection = document.getElementById("businessClientSection");

  if (isNormal) {
    normalSection.classList.remove('hidden')
    businessSection.classList.add('hidden')
    normalAccountBtn.style.color = '#69BE96';
    businessAccountBtn.style.color = '#707070';
  } else {
    businessSection.classList.remove('hidden')
    normalSection.classList.add('hidden')
    businessAccountBtn.style.color = '#69BE96';
    normalAccountBtn.style.color = '#707070';
  }
}
