import React from 'react'

function General() {
  return (
    <>
      <div class="container mx-auto py-10 px-4">
        <h1 class="text-3xl font-bold mb-6 text-blue-600">المعلومات الشخصية</h1>
        <form id="personalInfoForm" class="space-y-8">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-4 text-blue-600">المعلومات الأساسية</h2>
            <p class="text-gray-600 mb-4">أدخل معلوماتك الشخصية وتفاصيل المتجر.</p>
            <div class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">الاسم</label>
                <input type="text" id="name" name="name" placeholder="محمد علي" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">نبذة</label>
                <textarea id="about" name="about" rows="3" placeholder="أخبرنا عن متجرك الرقمي..." class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2"></textarea>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-4 text-blue-600">معلومات الاتصال</h2>
            <p class="text-gray-600 mb-4">كيف يمكن للعملاء التواصل معك؟</p>
            <div class="space-y-4">
              <div>
                <label for="address" class="block text-sm font-medium text-gray-700">العنوان</label>
                <input type="text" id="address" name="address" placeholder="123 شارع الرقمي، الفضاء الإلكتروني" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">الهاتف</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
              <div>
                <label for="whatsapp" class="block text-sm font-medium text-gray-700">واتساب</label>
                <input type="tel" id="whatsapp" name="whatsapp" placeholder="+1 234 567 8900" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" placeholder="mohammed@digitalstore.com" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-4 text-blue-600">وسائل التواصل الاجتماعي</h2>
            <p class="text-gray-600 mb-4">تواصل مع عملائك على المنصات الاجتماعية.</p>
            <div class="space-y-4">
              <div>
                <label for="facebook" class="block text-sm font-medium text-gray-700">فيسبوك</label>
                <input type="url" id="facebook" name="facebook" placeholder="https://facebook.com/yourstorename" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
              <div>
                <label for="twitter" class="block text-sm font-medium text-gray-700">تويتر</label>
                <input type="url" id="twitter" name="twitter" placeholder="https://twitter.com/yourstorename" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
              <div>
                <label for="instagram" class="block text-sm font-medium text-gray-700">إنستغرام</label>
                <input type="url" id="instagram" name="instagram" placeholder="https://instagram.com/yourstorename" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
              <div>
                <label for="linkedin" class="block text-sm font-medium text-gray-700">لينكدإن</label>
                <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourstorename" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
              </div>
            </div>
          </div>

          <button type="submit" id="submitButton"
            class="w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 
          rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            حفظ المعلومات
          </button>
        </form>

        <br />
      </div>

      {/* <!-- Success Popup --> */}
      <div id="successPopup" class="fixed inset-0 bg-black bg-opacity-50 items-center justify-center hidden">
        <div class="bg-white p-8 rounded-lg shadow-xl">
          <h2 class="text-2xl font-bold text-green-600 mb-4">نجاح!</h2>
          <p class="text-gray-700 mb-4">تم حفظ معلوماتك بنجاح.</p>
          <button onclick="closePopup('successPopup')" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-150 ease-in-out">إغلاق</button>
        </div>
      </div>

      {/* <!-- Error Popup --> */}
      <div id="errorPopup" class="fixed inset-0 bg-black bg-opacity-50 items-center justify-center hidden">
        <div class="bg-white p-8 rounded-lg shadow-xl">
          <h2 class="text-2xl font-bold text-red-600 mb-4">خطأ</h2>
          <p class="text-gray-700 mb-4">حدث خطأ أثناء حفظ معلوماتك. يرجى المحاولة مرة أخرى.</p>
          <button onclick="closePopup('errorPopup')" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-150 ease-in-out">إغلاق</button>
        </div>
      </div>
    </>
  )
}

export default General
