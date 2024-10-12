import React, { useState } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Home, ShoppingCart, Users, BarChart2, Settings, Inbox, MessageCircleMore, LayoutGrid } from 'lucide-react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isCustumersOpen, setIsCustumersOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const toggleProducts = () => setIsProductsOpen(!isProductsOpen)
    let navigate = useNavigate();

    const Auth = useSelector(state => state.Auth);

    const logOut = () => {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className="flex min-h-screen bg-gray-100 font-sans" dir="rtl">
            {/* Aside Menu */}
            <aside className={`bg-gray-800 text-white w-64 flex-shrink-0 
            sticky top-0 right-0 min-h-screen
            ${isMenuOpen ? '' : 'hidden'} lg:block`}>
                <div className="p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">لوحة التحكم</h1>
                    <button onClick={toggleMenu} className="lg:hidden">
                        <X className="h-6 w-6 p-4 bg-red-900" >h</X>
                    </button>
                </div>
                <nav className="mt-8">
                    <Link to="/" className="py-4 my-2 px-4 hover:bg-gray-700 flex items-center">
                        <Home className="h-5 w-5 ml-2" />
                        الرئيسية
                    </Link>

                    <div>
                        <button onClick={() => setIsCustumersOpen(!isCustumersOpen)} className="w-full
                        py-4 my-2                        
                        px-4 hover:bg-gray-700 flex items-center justify-between">
                            <span className="flex items-center">
                                <LayoutGrid className="h-5 w-5 ml-2" />
                                التصنيفات
                            </span>
                            {isCustumersOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                        {isCustumersOpen && (
                            <div className="bg-gray-500 py-2">
                                <Link to="/categories" className="block py-2 px-8 hover:bg-gray-600">
                                    جميع التصنيفات
                                </Link>
                                <Link to="/categories/add" className="block py-2 px-8 hover:bg-gray-600">
                                    اضافة تصنيفات جديد
                                </Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <button onClick={toggleProducts} className="w-full py-4 my-2 px-4 hover:bg-gray-700 flex items-center justify-between">
                            <span className="flex items-center">
                                <ShoppingCart className="h-5 w-5 ml-2" />
                                المنتجات
                            </span>
                            {isProductsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                        {isProductsOpen && (
                            <div className="bg-gray-500 py-2">
                                <Link to="/products" className="block py-2 px-8 hover:bg-gray-600">
                                    جميع المنتجات
                                </Link>
                                <Link to="/products/add" className="block py-2 px-8 hover:bg-gray-600">اضافة منتج جديد</Link>
                            </div>
                        )}
                    </div>


                    <div>
                        <button onClick={() => setIsCustumersOpen(!isCustumersOpen)} className="w-full
                        py-4 my-2                        
                        px-4 hover:bg-gray-700 flex items-center justify-between">
                            <span className="flex items-center">
                                <Users className="h-5 w-5 ml-2" />
                                العملاء
                            </span>
                            {isCustumersOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                        {isCustumersOpen && (
                            <div className="bg-gray-500 py-2">
                                <Link to="/customers" className="block py-2 px-8 hover:bg-gray-600">
                                    العملاء
                                </Link>
                                <Link to="/admin" className="block py-2 px-8 hover:bg-gray-600">
                                    المشرفون
                                </Link>
                                <Link to="/sellers" className="block py-2 px-8 hover:bg-gray-600">
                                    البائعين
                                </Link>
                            </div>
                        )}
                    </div>


                    <Link to="/inbox" className="py-4 my-2 px-4 hover:bg-gray-700 flex items-center">
                        <MessageCircleMore className="h-5 w-5 ml-2" />
                        الرسائل
                    </Link>

                    <Link to="/analytics" className="py-2 px-4 hover:bg-gray-700 flex items-center">
                        <BarChart2 className="h-5 w-5 ml-2" />
                        التقارير
                    </Link>
                    <div>
                        <button onClick={() => setIsSettingsOpen(!isSettingsOpen)} className="w-full
                        py-4 my-2
                        px-4 hover:bg-gray-700 flex items-center justify-between">
                            <span className="flex items-center">
                                <Settings className="h-5 w-5 ml-2" />
                                الإعدادات
                            </span>
                            {isSettingsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                        {isSettingsOpen && (
                            <div className="bg-gray-500 py-2">
                                <Link to="/settings/general" className="block py-2 px-8 hover:bg-gray-600">
                                    اعدادات المتجر
                                </Link>
                                <Link to="/profile" className="block py-2 px-8 hover:bg-gray-600">
                                    الملف الشخصي
                                </Link>
                                <Link to="/payments" className="block py-2 px-8 hover:bg-gray-600">
                                    طرق الدفع
                                </Link>
                            </div>
                        )}
                    </div>


                </nav>
            </aside>

            {/* Main Content */}
            <div className="bg-gray-50 flex-1 flex flex-col">
                {/* Header */}
                <header className="shadow-lg shadow p-4 bg-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button onClick={toggleMenu} className="lg:hidden ml-2">
                                <Menu className="h-6 w-6" />
                            </button>
                            <h2 className="text-xl font-semibold">مرحبًا،

                                {
                                    " "
                                    +
                                    Auth?.user?.first_name
                                    +
                                    " "
                                    +
                                    Auth?.user?.last_name
                                }

                            </h2>
                        </div>
                        <button
                            onClick={() => logOut()}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1
                        text-sm
                        rounded">تسجيل الخروج</button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <Outlet />
            </div>
        </div>
    )
}