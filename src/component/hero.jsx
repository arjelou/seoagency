import heroimage from '../assets/hero_img.svg';
export default function hero() {
  return (
    <div className="sm:px-5 px-32 sm:pt-10 pt-20 h-screen sm:h-[500px]">
        <div className="sm:grid-cols-1 grid grid-cols-2 justify-center items-center">
            <div className='flex justify-center'>
                <div>
                    <img className='hidden sm:flex w-[250px] justify-center items-center ' 
                    src={heroimage} alt="hero_image"/>
                </div>
            </div>
            <div className="">
                <div>
                    <h1 className="sm:text-5xl text-7xl font-medium">One Stop</h1>
                    <h1 className="sm:text-5xl text-7xl font-medium pt-2"><bold className="text-blue-600">SEO</bold> Services</h1>
                    <p className="sm:pt-2.5 pt-5 sm:text-[16px] text-[18px] font-medium">RankBoost SEO Agency is a leading digital marketing <br />agency specializing in search engine optimization (SEO) services.</p>
                </div>
                <div className="flex sm:pt-2.5 pt-5 gap-4 items-center">
                    <button className="bg-blue-600 text-white font-medium sm:text-[16px] sm:font-medium px-3 py-2 sm:px-1.5 sm:py-1 rounded-md hover:bg-blue-700 transi duration-300 ease-in-out">Get Started</button>
                    <h1 className="text-xl text-blue-600 font-medium sm:text-[16px] cursor-pointer hover:text-blue-700"><i className="ri-play-fill sm:text-xl text-2xl bg-blue-200 rounded-full p-1 mr-2 ml-5"></i>See our works</h1>
                </div>
            </div>
            <div>
                <div>
                    <img className='sm:hidden flex w-[450px] justify-center items-center' 
                    src={heroimage} alt="hero_image"/>
                </div>
            </div>
        </div>
    </div>
  )
}
