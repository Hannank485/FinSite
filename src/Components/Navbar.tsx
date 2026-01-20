import { FaPiggyBank } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router";
function Navbar({ state, click }: { state: boolean; click: () => void }) {
  // NavLink class to handle active links
  const NavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primaryText dark:text-darkPrimary font-semibold border-b-2 border-accent pb-1"
      : "text-muted dark:text-darkSecondary hover:text-accent dark:hover:text-darkAccent transition-colors";

  return (
    <>
      <header className="flex items-center justify-between px-4 py-4 lg:px-25 border-b border-card dark:border-darkCard sticky top-0  backdrop-blur-sm z-10">
        <div className="flex items-center gap-4">
          <Link to="/">
            <div className="flex gap-1  font-extrabold items-center text-lg ">
              <FaPiggyBank className="text-accent" />
              <h1>FinSight</h1>
            </div>
          </Link>
          <nav>
            <ul className="flex gap-4 text-sm  text-muted dark:text-darkSecondary items-center ">
              <li>
                <NavLink to="/" className={NavLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/invest" className={NavLinkClass}>
                  Invest
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <button
          className="hover:bg-softBG p-3 rounded-sm transition-all ease-in cursor-pointer dark:hover:bg-darkSoftBG"
          onClick={click}
        >
          {state ? (
            <FaRegMoon className="text-darkPrimary" />
          ) : (
            <FaRegSun className="text-primaryText" />
          )}
        </button>
      </header>
    </>
  );
}

export default Navbar;
