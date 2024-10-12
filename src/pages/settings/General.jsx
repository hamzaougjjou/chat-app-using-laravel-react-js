import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxiosFetch from '../../utils/useFetch';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';

function General() {
  // Fetch store information using the custom hook
  let { data: result, loading, error } = useAxiosFetch("/store/info");

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    address: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  });

  // Populate form when data is fetched
  useEffect(() => {
    if (result) {
      setFormData({
        name: result.store.name || '',
        about: result.store.about || '',
        address: result.store.address || '',
        phone: result.store.phone || '',
        whatsapp: result.store.whatsapp || '',
        email: result.store.email || '',
        address: result.store.address || '',
        facebook: result.store.facebook || '',
        twitter: result.store.twitter || '',
        instagram: result.store.instagram || '',
        linkedin: result.store.linkedin || ''
      });
    }
  }, [result]);

  // State for loading and success/error messages
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [txtError, setTxtError] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const Auth = useSelector(state => state.Auth);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);
    setSaveError(false);

    await axios({
      url: import.meta.env.VITE_API_URL + "/store/update",
      method: "PUT",

      headers: {
        Authorization: "Bearer " + Auth.token, // Pass token here
        "Content-Type": "application/json"
      },
      data: JSON.stringify(formData) // Send form data in request body

    }).then(res => {
      setSuccess(true);
    })
      .catch(err => {

        setSaveError(true); // Handle error
      })
      .finally(() => {

        setSaving(false);
      });


  };

  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">معلومات المتجر</h1>

        {loading && <div className='min-h-[40vh] flex items-center justify-center'>
          <Loading />
        </div>}
        {error && <p>Error</p>}

        {!loading && !error && (
          <form id="personalInfoForm" className="space-y-8" onSubmit={handleSubmit}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">المعلومات الأساسية</h2>
              <p className="text-gray-600 mb-4">أدخل معلوماتك الشخصية وتفاصيل المتجر.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">نبذة</label>
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    value={formData.about}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">معلومات الاتصال</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">العنوان</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">واتساب</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2"
                  />
                </div>
              </div>
            </div>
            <div class="bg-white shadow-md rounded-lg p-6">
              <h2 class="text-xl font-semibold mb-4 text-blue-600">وسائل التواصل الاجتماعي</h2>
              <p class="text-gray-600 mb-4">تواصل مع عملائك على المنصات الاجتماعية.</p>
              <div class="space-y-4">
                <div>
                  <label for="facebook" class="block text-sm font-medium text-gray-700">فيسبوك</label>
                  <input type="url"
                    value={formData.facebook}
                    id="facebook" name="facebook" placeholder="https://facebook.com/yourstorename"
                    class="mt-1 block w-full rounded-md border border-green-600 
                  shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
                </div>
                <div>
                  <label for="twitter" class="block text-sm font-medium text-gray-700">تويتر</label>
                  <input type="url"
                    value={formData.twitter}
                    id="twitter" name="twitter" placeholder="https://twitter.com/yourstorename" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
                </div>
                <div>
                  <label for="instagram"
                    class="block text-sm font-medium text-gray-700">إنستغرام</label>
                  <input
                    value={formData.instagram}
                    type="url" id="instagram" name="instagram" placeholder="https://instagram.com/yourstorename" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
                </div>
                <div>
                  <label for="linkedin" class="block text-sm font-medium text-gray-700">لينكدإن</label>
                  <input
                    value={formData.linkedin}
                    type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourstorename" class="mt-1 block w-full rounded-md border border-green-600 shadow-sm focus:border-green-600 focus:outline-none px-3 py-2" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              id="submitButton"
              disabled={saving}
              className={`w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {saving ? 'جاري الحفظ ...' : 'حفظ المعلومات'}
            </button>
          </form>
        )}

        {/* Success Popup */}
        {success && (
          <div id="successPopup"
            className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center flex">
            <div className="bg-white p-8 min-w-[300px]  rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-green-600 mb-4">نجاح!</h2>
              <p className="text-gray-700 mb-4">تم حفظ معلوماتك بنجاح.</p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-150 ease-in-out"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}

        {/* Error Popup */}
        {saveError && (
          <div id="errorPopup" className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center flex">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-red-600 mb-4">خطأ</h2>
              <p className="text-gray-700 mb-4">
                {
                  txtError ?
                    txtError
                    :
                    " حدث خطأ أثناء حفظ معلوماتك. يرجى المحاولة مرة أخرى."
                }
              </p>
              <button
                onClick={() => setSaveError(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-150 ease-in-out"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default General;
