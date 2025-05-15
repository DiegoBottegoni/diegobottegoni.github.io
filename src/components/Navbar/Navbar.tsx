import { links } from '../../../data';

const Navbar = () => {
    return (
        <nav id="home" className="bg-[#F4F4F3] py-4">
            <div className="max-w-screen-xl mx-auto px-6">
                <ul className="flex justify-between text-sm font-semibold tracking-wide uppercase">
                    {links.map(({ id, href, text }) => (
                        <li key={id}>
                            <a href={href}>{text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;