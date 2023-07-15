import { navlinks } from "../constant/navlinks";
import { menu } from "../assets";

export default function navbar() {
  return (
    <nav>
    {/* Start Desktop view */}
      <ul className="sm:hidden flex justify-end gap-10 py-5 w-full px-32 items-center">
        {
          navlinks.map((links) => (
            <li key={links.id} className="font-medium">
              {links.title}
            </li>
          ))
        }
      <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-md hover:bg-blue-700 transi duration-300 ease-in-out">Contact Us</button>
      </ul>
    {/* End Desktop view */}


      {/* mobile view */}
      <ul className="hidden sm:flex justify-end gap-10 py-5 bg-slate-400 w-full px-32 sm:px-12">
        {/* {
          navlinks.map((links) => (
            <li key={links.id} className="font-medium">
              {links.title}
            </li>
          ))
        } */}
        <img className="w-[40px]" 
        src={menu} alt="menu" />
      </ul>
    </nav>
  )
}
