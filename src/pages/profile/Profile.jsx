import React, { useState } from 'react'
import { User, Mail, Lock, Camera, Save, Key } from 'lucide-react'
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';

export default function Profile() {

    const [avatar, setAvatar] = useState('/');
    const Auth = useSelector(state => state.Auth);

    const [formData, setFormData] = useState({
        first_name: Auth?.user?.first_name,
        last_name: Auth?.user?.last_name,
        email: Auth?.user?.email,
        oldPassword: '',
        newPassword: ''
    })

    const handleAvatarChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setAvatar(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData)
    }



    return (
        <div className="bg-gray-100 flex items-center justify-center p-4" dir="rtl">
            {
                Auth.loading ?
                    <div className='min-h-[50vh] flex items-center justify-center'>
                        <Loading />
                    </div>

                    :

                    <form onSubmit={handleSubmit} className="w-full  bg-white rounded-lg p-6">
                        <h2 className="text-2xl font-bold font-bold text-blue-600 mb-6">الملف الشخصي للمسؤول</h2>
                        <div className="space-y-6">
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <img
                                        src={avatar}
                                        alt="صورة الملف الشخصي"
                                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                                    />
                                    <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
                                        <Camera className="w-4 h-4 text-white" />
                                        <input
                                            id="avatar-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleAvatarChange}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="flex gap-[40px] items-center w-full">
                                <div className='min-w-[250px] flex-1'>
                                    <label htmlFor="first_name" className="text-right block text-sm font-medium text-gray-700">
                                        الاسم الشخصي
                                    </label>
                                    <div className="relative mt-2">
                                        <input
                                            id="first_name"
                                            name="first_name"
                                            type="text"
                                            value={formData.first_name}
                                            onChange={handleInputChange}
                                            placeholder="أدخل اسمك الشخصي"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                                        />
                                        <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    </div>
                                </div>
                                <div className='min-w-[250px] flex-1'>
                                    <label htmlFor="last_name" className="text-right block text-sm font-medium text-gray-700">
                                        الاسم الشخصي
                                    </label>
                                    <div className="relative mt-2">
                                        <input
                                            id="last_name"
                                            name="last_name"
                                            type="text"
                                            value={formData.last_name}
                                            onChange={handleInputChange}
                                            placeholder="أدخل اسمك الشخصي"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                                        />
                                        <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    </div>
                                </div>

                            </div>
                            <div className="space-y-2 max-w-md">
                                <label htmlFor="email" className="text-right block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="أدخل بريدك الإلكتروني"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                                    />
                                    <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                </div>
                            </div>
                            <div className="space-y-2 max-w-md">
                                <label htmlFor="oldPassword" className="text-right block text-sm font-medium text-gray-700">كلمة المرور الحالية</label>
                                <div className="relative">
                                    <input
                                        id="oldPassword"
                                        name="oldPassword"
                                        type="password"
                                        value={formData.oldPassword}
                                        onChange={handleInputChange}
                                        placeholder="أدخل كلمة المرور الحالية"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                                        required
                                    />
                                    <Key className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                </div>
                            </div>
                            <div className="space-y-2 max-w-md">
                                <label htmlFor="newPassword" className="text-right block text-sm font-medium text-gray-700">كلمة المرور الجديدة</label>
                                <div className="relative">
                                    <input
                                        id="newPassword"
                                        name="newPassword"
                                        type="password"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        placeholder="أدخل كلمة المرور الجديدة"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                                    />
                                    <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-fit mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center transition duration-300"
                        >
                            <Save className="w-4 h-4 ml-2" />
                            حفظ التغييرات
                        </button>
                    </form>

            }
        </div>
    )
}