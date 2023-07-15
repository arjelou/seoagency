import ctu from '../assets/contactUs.svg'

export default function footer() {
  return (
    <div className="px-32 mt-[600px]">
        <div className="bg-blue-600 rounded-md mb-8">
            <div className="grid grid-cols-2">
                <div className='w-[450px] justify-center flex -mt-[140px]'>
                    <img className=''
                    src={ctu} alt='Why Choose US' />
                </div>
                <div className='p-8'>
                    <div>
                        <h1 className="text-white text-4xl font-medium">Ready to grow your</h1>
                        <h1 className="text-white text-4xl font-medium">business made it special ?</h1>
                        <p className="text-white pt-3">At RankBoost SEO Agency, we are passionate about helping businesses succeed online. Contact us today to discuss your SEO goals and discover how we can elevate your digital presence to new heights.</p>
                        <button className="mt-8 bg-white text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-700 hover:text-white hover:font-medium transi duration-300 ease-in-out">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
