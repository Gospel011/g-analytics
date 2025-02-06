import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../ui/Logo";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((val) => !val);
  }

  return (
    <nav className="m-auto flex h-24 max-w-[1200px] items-center justify-between px-4 text-white">
      <Logo />
      <ul className="hidden gap-4 p-4 md:flex">
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="p-1 md:hidden" onClick={toggleNav}>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* SIDE BAR */}

      <aside
        className={`bg-background fixed top-0 z-10 ${isOpen ? "left-0" : "left-[-100%]"} h-dvh w-[60%] border-r border-r-gray-900 duration-300 ease-in-out`}
      >
        <Logo className={"m-4"} />
        <ul className="divide-y-1 divide-gray-600 px-4 uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </aside>

      {isOpen && (
        <div
          onClick={toggleNav}
          className="fixed top-24 right-0 z-10 h-dvh w-[40%]"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
