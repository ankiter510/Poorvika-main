const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between gap-6">
                    {/* Links Section */}
                    <div className="w-full text-start">
                        <div className="flex flex-wrap">
                            {/* Column 1 */}
                            <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
                                <h4 className="text-lg font-semibold text-white tracking-wide mb-3 border-b-2 border-orange-500 inline-block">
                                    Support
                                </h4>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Head Office<br />
                                    Poorvika Mobiles Pvt Ltd<br />
                                    Admin Office No.30, Arcot Road,<br />
                                    Kodambakkam, Chennai- 600 024
                                </p>
                            </div>

                            {/* Column 2 */}
                            <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
                                <h4 className="text-lg font-semibold text-white tracking-wide mb-3 border-b-2 border-orange-500 inline-block">
                                    Support
                                </h4>
                                <ul>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">Contact Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">Site Map</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">One Assist</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
                                <h4 className="text-lg font-semibold text-white tracking-wide mb-3 border-b-2 border-orange-500 inline-block">
                                    Policies
                                </h4>
                                <ul>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">T & C</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">Privacy Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">CSR & Whistle Blower Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-orange-500 text-sm">Return, Replacement & Refund</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 4 */}
                            <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
                                <h4 className="text-lg font-semibold text-white tracking-wide mb-3 border-b-2 border-orange-500 inline-block">
                                    Opportunities
                                </h4>
                                <ul>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">Careers</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 5 */}
                            <div className="w-full sm:w-1/2 lg:w-1/5 mb-6">
                                <h4 className="text-lg font-semibold text-white tracking-wide mb-3 border-b-2 border-orange-500 inline-block">
                                    Know More
                                </h4>
                                <ul>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">About Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">Our Stores</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-orange-500 text-sm">Service Centers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
