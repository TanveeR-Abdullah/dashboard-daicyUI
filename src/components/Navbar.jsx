import React from 'react'

const Navbar = () => {
    return (

        <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-teal-700">
                <span>🏢</span>
                <span>Organization</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-teal-700">
                <span>🤝</span>
                <span>Donors</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-teal-700">
                <span>⚙️</span>
                <span>Admin</span>
            </a>
        </nav>

    )
}

export default Navbar
