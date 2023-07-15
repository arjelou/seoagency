import heroimage from '../assets/hero_img.svg';
export default function hero() {
  return (
    <div className="px-32 pt-20 h-screen">
        <div className="grid grid-cols-2 justify-center items-center">
            <div className="">
                <div>
                    <h1 className="text-7xl font-medium">One Stop</h1>
                    <h1 className="text-7xl font-medium pt-2"><bold className="text-blue-600">SEO</bold> Services</h1>
                    <p className="pt-5 text-[18px] font-medium">RankBoost SEO Agency is a leading digital marketing <br />agency specializing in search engine optimization (SEO) services.</p>
                </div>
                <div className="flex pt-5 gap-4 items-center">
                    <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-md hover:bg-blue-700 transi duration-300 ease-in-out">Get Started</button>
                    <h1 className="text-xl text-blue-600 font-medium cursor-pointer hover:text-blue-700"><i className="ri-play-fill text-2xl bg-blue-200 rounded-full p-1 mr-2 ml-5"></i>See our works</h1>
                </div>
            </div>
            <div>
                <div>
                    <img className='w-[450px] justify-center items-center flex' 
                    src={heroimage} alt="hero_image"/>
                </div>
            </div>
        </div>
    </div>
  )
}
