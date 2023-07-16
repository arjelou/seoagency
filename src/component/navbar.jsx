import React from 'react';
import { navlinks } from "../constant/navlinks";
import { menu, close, logo, logo_mobile } from "../assets";

export default class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        toggle: false,   
    }
}
  openToggle = () => {
      this.setState(prevState => ({
          toggle: !prevState.toggle
          }));
      }
  render() {
  return (
    <nav className="sticky top-0 z-10">
      {/* Start Desktop view */}
      <div className="flex px-32 sm:hidden bg-white shadow-sm">
        <img className="w-[100px]" src={logo} alt="menu" />
        <ul className="sm:hidden flex justify-end gap-10 py-5 w-full items-center">
          {
            navlinks.map((links) => (
              <li key={links.id} className="font-semibold cursor-pointer text-blue-400 hover:text-blue-600 hover:font-semibold transition ease-in-out duration-300 ">
                {links.title}
              </li>
            ))
          }
        <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-md hover:bg-blue-700 transi duration-300 ease-in-out">Contact Us</button>
        </ul>
      </div>  
      {/* End Desktop view */}

      {/* mobile view */}
      <div className="hidden sm:flex bg-blue-600 justify-between items-center sm:px-6 sm:p-3">
        <div>
          <img className="w-[80px] fill-slate-200" src={logo_mobile} alt="menu" />   
        </div>
        <div>  
            <img src={this.state.toggle ? close : menu} alt='menu' className='w-[38px] h-[38px] object-contain cursor-pointer ml-5'
            onClick={this.openToggle}/>
            <div className={`${this.state.toggle ? 'flex' : 'hidden'} p-6 bg-blue-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1 px-6'>
                    <>
                        {navlinks.map((navLink, index) =>(
                            <li key={navLink.id}
                                className={`${index === navLink.length-1 ? 'mr-0' : 'mb-4'} text-white font-poppins font-normal cursor-pointer`}>
                                {/* <Link activeClass="active" spy to={navLink.id}> */}
                                    <a href={navLink.id} className='font-semibold'>
                                        {navLink.title}
                                    </a>
                                {/* </Link> */}
                            </li>
                        ))}
                    </>    
                </ul>
            </div>
        </div>  
      </div>  
    </nav>
  )
    }
}
