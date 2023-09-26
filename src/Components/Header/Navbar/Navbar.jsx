import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-10 px-32">
                <Logo></Logo>
                {/* routes of the navbar  */}
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }>
                            Statistics
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;