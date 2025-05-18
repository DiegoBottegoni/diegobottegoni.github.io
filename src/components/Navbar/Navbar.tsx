import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";


const handleLanguageToggle = () => {
    // lógica para cambiar idioma
};

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorNavigation = (anchorId: string) => {
        if (location.pathname !== "/") {
            // Si no estamos en "/", navegamos y luego scroll
            navigate("/", { state: { scrollTo: anchorId } });
        } else {
            // Ya estamos en home, hacemos scroll directo
            const el = document.getElementById(anchorId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav id="home" className="bg-[#F4F4F3] py-4">
            <div className="max-w-screen-xl mx-auto px-6">
                <ul className="flex justify-between text-sm font-semibold tracking-wide uppercase">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <button className="uppercase cursor-pointer" onClick={() => handleAnchorNavigation("about")}>About</button>
                    </li>
                    <li>
                        <button className="uppercase cursor-pointer" onClick={() => handleAnchorNavigation("works")}>Works</button>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <button className="uppercase cursor-pointer" onClick={handleLanguageToggle}>EN / ES</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;
