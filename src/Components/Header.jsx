import { useState } from "react";
import { useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import Codingit from "../../src/assets/svg/Codingit.svg"
import { HiChevronDown } from "react-icons/hi";

function Header() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            }
        }

        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className='container mx-auto p-2 ' >
            <nav className=''>
                <div className='flex items-center justify-between'>
                    <div>
                        <a href="/"><img src={Codingit} alt="" />
                        </a>
                    </div>
                    {/* for large devices */}
                    <div className='lg:flex items-center gap-3 hidden text-stone-500'>
                        <a href="/" className='block hover:text-slate-300 py-2 px-4'>Home</a>
                        <div className="relative inline-block">
                            <span

                                className="hover:text-slate-300 py-2 px-4 flex cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                Services
                                <div className="py-1">
                                    <HiChevronDown />
                                </div>
                            </span>

                            {isDropdownOpen && (
                                <div className="absolute z-10 mt-2 py-2 px-2 w-32 bg-white border rounded shadow-lg">
                                    {/* Dropdown content */}
                                    <a href="business" className="block hover:bg-slate-300 py-2">Business Applications</a>
                                    <a href="integrations" className="block hover:bg-slate-300 py-2">Integrations</a>
                                    <a href="scripting" className="block hover:bg-slate-300 py-2">Scripting</a>
                                </div>
                            )}
                        </div>
                        <a href="technology" className='block hover:text-slate-300 py-2 px-4'>Technology</a>
                        <a href="company" className='block hover:text-slate-300 py-2 px-4'>Company</a>
                        <a href="contact" className='block hover:text-slate-300 py-2 px-4'>Contact us</a>
                    </div>

                    {/* contact me button  */}
                    <div className='lg:block hidden mt-2 '>
                        <a href="getquote"> <button className='py-1.5 px-2.5 border text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-800 rounded-md transition-all duration-300 '>Get Quote</button></a>
                    </div>

                    {/* button for small screen  */}
                    <button onClick={toggleMenu} className='lg:hidden text-3xl'>
                        <HiMenu />
                    </button>
                </div>
                {/* nav items for small screen  */}
                {
                    isMenuOpen && (
                        <div className='py-3 bg-indigo-600 text-white rounded-md mx-4'>
                            <a href="/" className='block hover:text-slate-300 py-2 px-4'>Home</a>
                            <span className=' hover:text-slate-300 py-2 px-4 flex'>Services
                                <div className="py-1">
                                    <HiChevronDown />
                                </div>
                            </span>
                            <ul class="list-disc ml-12">
                                <li><a href="business" class="block hover:bg-slate-300 py-2">Business Applications</a></li>
                                <li><a href="integrations" class="block hover:bg-slate-300 py-2">Integrations</a></li>
                                <li><a href="scripting" class="block hover:bg-slate-300 py-2">Scripting</a></li>
                            </ul>


                            <a href="technology" className='block hover:text-slate-300 py-2 px-4'>Technology</a>
                            <a href="company" className='block hover:text-slate-300 py-2 px-4'>Company</a>
                            <a href="contact " className='block hover:text-slate-300 py-2 px-4'>Contact us</a>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}

export default Header
