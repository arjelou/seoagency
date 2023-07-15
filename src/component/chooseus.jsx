import wcu from '../assets/wcu.svg'
export default function chooseus() {
  return (
    <div className="px-32 pt-[130px]">
        <button className="bg-blue-100 text-sm text-blue-600 font-medium py-1 px-2 rounded-md">WHY CHOOSE US</button>
        <div className="grid grid-cols-2 pt-7">
            <div className='w-[450px] justify-center items-center flex'>
                <img className='rounded-lg shadow-md' 
                src={wcu} alt='Why Choose US' />
            </div>
            <div className="justify-start items-start">
                <h1 className="text-4xl font-medium">We always strive to</h1>
                <h1 className="text-4xl font-medium">provide the <bold className="text-blue-600">best</bold> in</h1>
                <h1 className="text-4xl font-medium">every service we offer</h1>
                <p className="pt-">We have a history of delivering successful SEO campaigns for businesses across various industries. Our results-driven approach ensures that you achieve tangible outcomes and maximize your return on investment.</p>
                    <div className="pt-5">
                        <div className="pb-5">
                            <h1 className="text-[18px] font-medium"><bold className="bg-blue-600 rounded-full py-[5px] px-[11px] text-white font-bold mr-3">1</bold>Experienced Team</h1>
                        </div>
                        <div className="pb-5">
                            <h1 className="text-[18px] font-medium"><bold className="bg-blue-600 rounded-full py-[5px] px-[11px] text-white font-bold mr-3">2</bold>Customized Strategies</h1>
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium"><bold className="bg-blue-600 rounded-full py-[5px] px-[11px] text-white font-bold mr-3">3</bold>Long-Term Partnership</h1>
                        </div>
                    </div>
            </div>
           
        </div>
    </div>
  )
}
