// Show Chat Area
function messageOfferProvider(id) {
  const chatArea = document.getElementById(`chatOffer-${id}`)
  chatArea.classList.toggle('hidden')
}

// Hide Accept Offer Modal
function hideAcceptOfferModal(id) {
  const acceptOfferModal = document.getElementById(`acceptOfferModal-${id}`);

  acceptOfferModal.remove();
  document.body.classList = 'overflow-y-auto'
}

// Accept Offer Modal - Personal Info
function acceptOfferModalBasicFunc(id) {
  return (
    `
    <div class="text-center bg-textGreen py-4 relative">
      <h3 class="text-lg font-bold text-white" id="modal-title">البيانات الشخصية</h3>
      <img onclick="hideAcceptOfferModal(${id})" class="w-4 h-4 transform rotate-45 cursor-pointer absolute top-6 left-10" src="./src/assets/icons/plus.svg" alt="close">
    </div>


    <form class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">

      <div class="flex flex-1 flex-col items-start">
        <label for="name" class="block font-medium">الاسم</label>
        <div class="mt-2 w-full">
          <input id="name" name="name" type="text" required
            class="block min-w-[170px] w-full py-2 px-4 text-textDarkGray font-medium outline-textGreen rounded-lg shadow-sm border border-textGreen bg-white">
        </div>
      </div>

      <div class="flex flex-1 flex-col items-start">
        <label for="email" class="block font-medium">البريد الإلكتروني</label>
        <div class="mt-2 w-full">
          <input id="email" name="email" type="email" required
            class="block min-w-[170px] w-full  py-2 px-4 text-textDarkGray font-medium outline-textGreen rounded-lg shadow-sm border border-textGreen bg-white">
        </div>
      </div>

      <div class="flex flex-1 flex-col items-start">
        <label for="phone" class="block font-medium">رقم الجوال</label>
        <div class="mt-2 w-full">
          <input id="phone" name="phone" type="text" required
            class="block min-w-[170px] w-full py-2 px-4 text-textDarkGray font-medium outline-textGreen rounded-lg shadow-sm border border-textGreen bg-white">
        </div>
      </div>

      <div class="relative flex-1 min-w-[170px] sm:min-w-0 sm:w-full text-right">
        <label for="country" class="block font-medium">الدولة</label>
        <select id="country" name="options"
          class="h-[44px] mt-2 block flex-1 w-full px-4 py-2 border border-mainGreen bg-white rounded-lg font-semibold text-textGreen transition-all focus:outline-none focus:ring-textGreen focus:ring-1 appearance-none pr-8">
          <option class="font-semibold text-textGreen" value="" disabled selected></option>
          <option class="font-semibold text-textGreen" value="option4">فلسطين</option>
          <option class="font-semibold text-textGreen" value="option4">لبنان</option>
          <option class="font-semibold text-textGreen" value="option4">تركيا</option>
        </select>
        <div class="absolute bottom-[14px] left-4 transform flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-mainGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div class="relative flex-1 min-w-[170px] sm:min-w-0 sm:w-full text-right">
        <label for="city" class="block font-medium">المدينة</label>
        <select id="city" name="city"
          class="h-[44px] mt-2 block flex-1 w-full px-4 py-2 border border-mainGreen bg-white rounded-lg font-semibold text-textGreen transition-all focus:outline-none focus:ring-textGreen focus:ring-1 appearance-none pr-8">
          <option class="font-semibold text-textGreen" value="" disabled selected></option>
          <option class="font-semibold text-textGreen" value="option4">غزة</option>
          <option class="font-semibold text-textGreen" value="option4">القدس</option>
          <option class="font-semibold text-textGreen" value="option4">نابلس</option>
        </select>
        <div class="absolute bottom-[14px] left-4 transform flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-mainGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

    </form>

  `
  )
}

// Accept Offer Modal - Visitor Data
function acceptOfferModalPersonalFunc(id) {
  return (
    `
    <div class="text-center bg-textGreen py-4 relative">
      <h3 class="text-lg font-bold text-white" id="modal-title">معلومات الضيف</h3>
      <img onclick="hideAcceptOfferModal(${id})" class="w-4 h-4 transform rotate-45 cursor-pointer absolute top-6 left-10" src="./src/assets/icons/plus.svg" alt="close">
    </div>


    <form class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">

      <div class="flex flex-1 flex-col items-start">
        <label for="name" class="block font-medium">الاسم الأول</label>
        <div class="mt-2 w-full">
          <input id="name" name="name" type="text" required
            class="block min-w-[170px] w-full py-2 px-4 text-textDarkGray font-medium outline-textGreen rounded-lg shadow-sm border border-textGreen bg-white">
        </div>
      </div>

      <div class="flex flex-1 flex-col items-start">
        <label for="name" class="block font-medium">الاسم الثاني</label>
        <div class="mt-2 w-full">
          <input id="name" name="name" type="text" required
            class="block min-w-[170px] w-full py-2 px-4 text-textDarkGray font-medium outline-textGreen rounded-lg shadow-sm border border-textGreen bg-white">
        </div>
      </div>


      <div class="relative flex-1 min-w-[170px] sm:min-w-0 sm:w-full text-right">
        <label for="country" class="block font-medium">الدولة</label>
        <select id="country" name="options"
          class="h-[44px] mt-2 block flex-1 w-full px-4 py-2 border border-mainGreen bg-white rounded-lg font-semibold text-textGreen transition-all focus:outline-none focus:ring-textGreen focus:ring-1 appearance-none pr-8">
          <option class="font-semibold text-textGreen" value="" disabled selected></option>
          <option class="font-semibold text-textGreen" value="option4">فلسطين</option>
          <option class="font-semibold text-textGreen" value="option4">لبنان</option>
          <option class="font-semibold text-textGreen" value="option4">تركيا</option>
        </select>
        <div class="absolute bottom-[14px] left-4 transform flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-mainGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div class="relative flex-1 min-w-[170px] sm:min-w-0 sm:w-full text-right">
        <label for="city" class="block font-medium">المدينة</label>
        <select id="city" name="city"
          class="h-[44px] mt-2 block flex-1 w-full px-4 py-2 border border-mainGreen bg-white rounded-lg font-semibold text-textGreen transition-all focus:outline-none focus:ring-textGreen focus:ring-1 appearance-none pr-8">
          <option class="font-semibold text-textGreen" value="" disabled selected></option>
          <option class="font-semibold text-textGreen" value="option4">غزة</option>
          <option class="font-semibold text-textGreen" value="option4">القدس</option>
          <option class="font-semibold text-textGreen" value="option4">نابلس</option>
        </select>
        <div class="absolute bottom-[14px] left-4 transform flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-mainGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div class="relative flex-1 min-w-[170px] sm:min-w-0 sm:w-full text-right">
        <label for="city" class="block font-medium">الجنسية</label>
        <select id="city" name="city"
          class="h-[44px] mt-2 block flex-1 w-full px-4 py-2 border border-mainGreen bg-white rounded-lg font-semibold text-textGreen transition-all focus:outline-none focus:ring-textGreen focus:ring-1 appearance-none pr-8">
          <option class="font-semibold text-textGreen" value="" disabled selected></option>
          <option class="font-semibold text-textGreen" value="option4">فلسطيني</option>
          <option class="font-semibold text-textGreen" value="option4">لبناني</option>
          <option class="font-semibold text-textGreen" value="option4">تركي</option>
        </select>
        <div class="absolute bottom-[14px] left-4 transform flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-mainGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

    </form>

  `
  )
}

// Accept Offer Modal - Order Info
function acceptOfferModalFinalFunc(id) {
  return (
    `
    <div class="text-center bg-textGreen py-4 relative">
      <h3 class="text-lg font-bold text-white" id="modal-title">قبول العرض</h3>
      <img onclick="hideAcceptOfferModal(${id})" class="w-4 h-4 transform rotate-45 cursor-pointer absolute top-6 left-10" src="./src/assets/icons/plus.svg" alt="close">
    </div>

      <div class="flex items-center gap-2 flex-wrap p-4">
        <div class="flex w-[135px] sm:w-[150px] items-center gap-2 sm:gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
          <p class="text-white font-medium text-base sm:text-lg">محفطة</p>
          <img class="w-7" src="./src/assets/icons/wallet.svg" alt="wallet">
        </div>
        <div class="flex w-[135px] sm:w-[150px] items-center gap-2 sm:gap-4 justify-center p-2 rounded-md bg-textGreen">
          <p class="text-white font-medium text-base sm:text-lg">تحويل بنكي</p>
          <img class="w-7" src="./src/assets/icons/bank.svg" alt="bank">
        </div>
        <div class="flex w-[135px] sm:w-[150px] items-center gap-2 sm:gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
          <p class="text-white font-medium text-base sm:text-lg">فيزا كارد</p>
          <img class="w-8" src="./src/assets/icons/visa.svg" alt="visa.svg">
        </div>
        <div class="flex w-[135px] sm:w-[150px] items-center gap-2 sm:gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
          <p class="text-white font-medium text-base sm:text-lg">تمارا</p>
          <img class="w-8" src="./src/assets/icons/visa.svg" alt="visa.svg">
        </div>
        <div class="flex w-[135px] sm:w-[150px] items-center gap-2 sm:gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
          <p class="text-white font-medium text-base sm:text-lg">تابي</p>
          <img class="w-8" src="./src/assets/icons/visa.svg" alt="visa.svg">
        </div>
      </div>

    <form class="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">

        <div class="flex items-center gap-4">
          <label for="BankName" class="block font-medium">اسم البنك</label>
          <select id="BankName" name="BankName"
            class="mt-2 block flex-1 min-w-[170px] w-full px-4 py-2 border border-mainGreen bg-white rounded-lg font-semibold text-textDarkGray focus:outline-none focus:ring-textGreen focus:border-textGreen">
            <option class="font-semibold text-textGreen" value="option1">بنك الراجحي</option>
            <option class="font-semibold text-textGreen" value="option2">بنك الرشيد</option>
            <option class="font-semibold text-textGreen" value="option3">بنك اسطنبول</option>
            <option class="font-semibold text-textGreen" value="option4">بنك اخر</option>
          </select>
        </div>

        <div class="flex items-center gap-4">
          <label for="username" class="block font-medium">اسم المستخدم</label>
          <div class="mt-2 flex-1">
            <input id="username" name="username" type="text" required placeholder="أحمد محمد"
              class="block w-full  py-2 px-4 text-textDarkGray outline-none rounded-lg shadow-sm border border-textGreen bg-white">
          </div>
        </div>

        <div class="flex items-center gap-4">
          <label for="IPAN" class="block font-medium">رقم الايبان</label>
          <div class="mt-2 flex-1">
            <input id="IPAN" name="IPAN" type="text" required placeholder="ABD787DF897"
              class="block w-full  py-2 px-4 text-textDarkGray outline-none rounded-lg shadow-sm border border-textGreen bg-white">
          </div>
        </div>

        <div class="flex items-center gap-4">
          <label for="finalPrice" class="block font-medium">المبلغ النهائي</label>
          <div class="mt-2 flex-1">
            <input id="finalPrice" name="finalPrice" type="text" required placeholder="1500$"
              class="block w-full  py-2 px-4 text-textDarkGray outline-none rounded-lg shadow-sm border border-textGreen bg-white">
          </div>
        </div>

      </form>

      <div class="text-right">
        <span class="text-textDarkGray text-xs self-right text-right w-full px-8">المبلغ النهائي بعد اضافة رسوم إجرائية بنسبة 0% على عملية الدفع </span>
      </div>

  `
  )
}

function acceptOfferModal(id) {
  const modal = document.createElement('div');
  modal.id = `acceptOfferModal-${id}`;
  modal.classList.add('fixed', 'inset-0', 'z-10', 'flex', 'items-center', 'justify-center', 'bg-opacity-75', 'bg-gray-900/50');

  const modalContent = document.createElement('div');
  modalContent.classList.add('flex', 'flex-col', 'gap-4', 'mx-auto', 'max-h-[90%]', 'overflow-y-scroll', 'rounded-lg', 'text-center', 'shadow-xl', 'transition-all', 'w-full', 'sm:max-w-[820px]', 'bg-lightGray', 'scrollbar-hidden');
  modal.appendChild(modalContent);

  // Function to display the current step's content
  function displayStep(step) {
    modalContent.innerHTML = '';

    switch (step) {
      case 1:
        // Basic information step
        modalContent.innerHTML = acceptOfferModalBasicFunc(id);
        break;
      case 2:
        // Personal information step
        modalContent.innerHTML = acceptOfferModalPersonalFunc(id);
        break;
      case 3:
        // Final step
        modalContent.innerHTML = acceptOfferModalFinalFunc(id);
        break;
      default:
        console.error('Invalid step:', step);
    }

    // Add "Next" or "Submit" button
    const button = document.createElement('button');
    button.classList.add('rounded-md', 'mx-auto', 'mb-8', 'bg-textGreen', 'w-[220px]', 'h-12', 'min-h-[44px]', 'text-xl', 'font-bold', 'text-white', 'shadow-sm', 'hover:bg-mainGreen');
    button.textContent = step === 3 ? 'قبول العرض' : 'التالي';

    button.addEventListener('click', (e) => {
      e.stopPropagation();

      if (step === 3) {
        hideAcceptOfferModal(id)
        const formData = {
          form: 'Data'
        };
        console.log(formData);
        modal.remove();
        document.body.classList.remove('overflow-y-hidden');
      } else {
        displayStep(step + 1);
      }
    });
    modalContent.append(button);
  }

  // Display the initial step
  displayStep(1);

  // Hide Modal When Click The Overlay
  modal.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target)) hideAcceptOfferModal(id)
  })

  // Prevent scrolling when modal is open
  document.body.classList.add('overflow-y-hidden');
  document.body.appendChild(modal);
}