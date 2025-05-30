import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap justify-between">
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">HeavenCrust</h2>
                        <p className="text-lg">
                            Your go-to place for premium quality services and products.
                            Bringing the best to your doorstep.
                        </p>
                    </div>

                    {/* Middle Section (Links) */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-lg space-y-2">
                            <li><a href="#" className="hover:text-orange-500">Home</a></li>
                            <li><a href="#" className="hover:text-orange-500">Shipping</a></li>
                            <li><a href="#" className="hover:text-orange-500">About</a></li>
                            <li><a href="#" className="hover:text-orange-500">Services</a></li>
                            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right Section (Social Media Icons) */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i> Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-8 text-gray-400">
                    <p>&copy; 2025 HeavenCrust LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
