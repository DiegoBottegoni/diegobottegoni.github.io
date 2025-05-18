import { Link } from "react-router-dom";

const handleLanguageToggle = () => {
    // lógica para cambiar idioma
};

const Navbar = () => {
    return (
        <nav id="home" className="bg-[#F4F4F3] py-4">
            <div className="max-w-screen-xl mx-auto px-6">
                <ul className="flex justify-between text-sm font-semibold tracking-wide uppercase">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#works">Works</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <button onClick={handleLanguageToggle}>EN / ES</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;
