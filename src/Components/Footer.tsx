import { FaPiggyBank } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="flex gap-1 items-center text-xs md:text-sm px-4 py-4 justify-center border-t border-card lg:px-25 text-muted dark:text-darkSecondary dark:border-darkCard">
        <h2 className="  flex items-center gap-1 ">
          <FaPiggyBank />
          FinSight
        </h2>
        <p>- {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
