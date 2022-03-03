const Navbar = () => {
    return (
            <nav className="p-6 flex flex-col space-y-5 sm:space-y-0 items-center justify-between shadow-lg bg-orange-100">
            <a href="##" className="text-2xl font-semibold text-orange-500">KingdomBlog</a>

            <div>
                <a href="##" className="text-base text-orange-400 px-4">New Blog</a>
                <a href="##" className="text-base text-orange-400 px-4">Create</a>
                <a href="##" className="text-base text-orange-400 px-4">Sign up</a>


            </div>
        </nav>
     );
}

export default Navbar;