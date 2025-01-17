const Sidebar = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-60 bg-blue-300 shadow-lg flex flex-col">
                <div className="p-4 text-xl font-bold text-white bg-blue-500">
                    Categories
                </div>
                <nav className="flex-1 overflow-y-auto">
                    <ul className="space-y-2 p-4">
                        <li className="hover:bg-blue-400 rounded-md p-2">
                            <a href="#" className="block text-white">Electronics</a>
                        </li>
                        <li className="hover:bg-blue-400 rounded-md p-2">
                            <a href="#" className="block text-white">Cloths</a>
                        </li>
                        <li className="hover:bg-blue-400 rounded-md p-2">
                            <a href="#" className="block text-white">Shoes</a>
                        </li>
                        <li className="hover:bg-blue-400 rounded-md p-2">
                            <a href="#" className="block text-white">Toys</a>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 text-center text-sm text-gray-600">
                    © 2025 My App
                </div>
            </div>

            {/* Main Content */}
            <div className="">{children}</div>
        </div>
    );
};

export default Sidebar;
