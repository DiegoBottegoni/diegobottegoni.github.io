const Navbar = () => {
    return (
        <nav className="bg-[#F4F4F3] py-4">
            <div className="max-w-screen-xl mx-auto px-6">
                <ul className="flex justify-between text-sm font-semibold tracking-wide uppercase">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;