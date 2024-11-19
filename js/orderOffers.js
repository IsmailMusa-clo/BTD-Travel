// Offer Modal
function showOfferModal() {
  const offerModal = document.getElementById('offer-modal');
  const offerOverlay = document.getElementById('offer-overlay');
  offerModal.classList.toggle("hidden");
  offerOverlay.classList.toggle("hidden");
  document.body.classList = 'overflow-y-hidden'
}

function hideOfferModal() {
  const offerModal = document.getElementById('offer-modal');
  const offerOverlay = document.getElementById('offer-overlay');
  offerModal.classList.toggle("hidden");
  offerOverlay.classList.toggle("hidden");
  document.body.classList = 'overflow-y-auto'
}

// Show Chat Area
function messageOfferProvider(id) {
  const chatArea = document.getElementById(`chatOffer-${id}`)
  chatArea.classList.toggle('hidden')
}

// Hide Accept Offer Modal
function hideAcceptOfferModal(id) {
  const AcceptOfferModal = document.getElementById(`acceptOfferModal-${id}`);
  AcceptOfferModal.remove();
  document.body.classList = 'overflow-y-auto'
}

// Accept Offer Modal
function acceptOfferModal(id) {
  const acceptOfferModal = document.createElement('div')
  acceptOfferModal.id = `acceptOfferModal-${id}`;
  document.body.classList = 'overflow-y-hidden'

  acceptOfferModal.innerHTML =
    `
        <!-- Accept Offer Modal -->
        <div id="accept-offer-overlay" onclick="hideAcceptOfferModal(${id})"
          class="fixed inset-0 bg-textDarkGray bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div id="accept-offer-modal" class="fixed inset-0 z-10 mx-auto w-fit overflow-y-auto">
          <div
            class=" flex min-h-full w-fit mx-auto items-end justify-center text-center sm:items-center sm:p-0 overflow-y-auto">
            <div
              class="flex flex-col gap-4 relative transform overflow-hidden rounded-lg bg-whitetext-center shadow-xl transition-all w-full sm:max-w-[850px] bg-lightGray">
              <div class="text-center bg-textGreen py-4">
                <h3 class="text-lg font-bold text-white" id="modal-title">قبول العرض</h3>
              </div>

                <div class="flex items-center gap-2 flex-wrap p-4">
                  <div class="flex w-[150px] items-center gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
                    <p class="text-white font-medium text-lg">محفطة</p>
                    <img class="w-7" src="./src/assets/icons/wallet.svg" alt="wallet">
                  </div>
                  <div class="flex w-[150px] items-center gap-4 justify-center p-2 rounded-md bg-textGreen">
                    <p class="text-white font-medium text-lg">تحويل بنكي</p>
                    <img class="w-7" src="./src/assets/icons/bank.svg" alt="bank">
                  </div>
                  <div class="flex w-[150px] items-center gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
                    <p class="text-white font-medium text-lg">فيزا كارد</p>
                    <img class="w-8" src="./src/assets/icons/visa.svg" alt="visa.svg">
                  </div>
                  <div class="flex w-[150px] items-center gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
                    <p class="text-white font-medium text-lg">تمارا</p>
                    <img class="w-8" src="./src/assets/icons/visa.svg" alt="visa.svg">
                  </div>
                  <div class="flex w-[150px] items-center gap-4 justify-center p-2 rounded-md bg-textGreen opacity-50">
                    <p class="text-white font-medium text-lg">تابي</p>
                    <img class="w-8" src="./src/assets/icons/visa.svg" alt="visa.svg">
                  </div>
                </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">

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

                </div>

                <div class="text-right">
                  <span class="text-textDarkGray text-xs self-right text-right w-full px-8">المبلغ النهائي بعد اضافة رسوم إجرائية بنسبة 0% على عملية الدفع </span>
                </div>

                <button type="submit" onclick="hideAcceptOfferModal(${id})"
                  class="rounded-md mx-auto mb-8 bg-textGreen w-[220px] h-12 text-2xl font-bold text-white shadow-sm hover:bg-mainGreen">
                    قبول العرض
                </button>

            </div>
          </div>
        </div>
      `

  document.body.appendChild(acceptOfferModal)

}
