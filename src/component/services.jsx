import { bestfolio } from "../assets"

export default function services() {

  return (
    <div className="sm:px-5 px-32 pt-[130px] sm:pt-[60px] h-screen justify-center items-center">
        <button className="rounded-md bg-blue-100 text-sm text-blue-600 font-medium py-1 px-2">BEST SERVICES</button>
        <div className="sm:grid-cols-1 grid grid-cols-2 pt-5">
            <div>
                <h1 className="sm:text-4xl text-5xl font-medium">This is the best <bold className="text-blue-600">service</bold> we</h1>
                <h1 className="sm:text-4xl text-5xl font-medium">provide for you.</h1>
            </div>
            <div>
                <p className="sm:pt-2.5 sm:text-[16px] text-[18px] font-medium">We conduct in-depth keyword research to identify the most relevant and valuable keywords for your business. By targeting the right keywords, we help you attract highly targeted traffic and increase your chances of conversion.</p>
            </div>
        </div>
        <div className="sm:pt-5 pt-10">
            <div>
                <h1 className="sm:text-[20px] text-2xl font-medium text-blue-600">On-Page Optimization</h1>
                <p className="sm:text-[16px] text-[17px] sm:pt-1.5 pt-3">Our team optimizes various on-page elements such as meta tags, headings, content structure, and URL structure to ensure that your website is easily accessible and understandable by search engines. This optimization improves your websites visibility and relevancy.</p>
                <hr className="sm:mt-2.5 mt-5"/>
            </div>
            <div className="pt-5">
                <h1 className="sm:text-[20px] text-2xl font-medium text-blue-600">SEO Reporting and Analysis</h1>
                <p className="sm:text-[16px] text-[17px] sm:pt-1.5 pt-3">We provide regular reports and insights on key SEO metrics, such as keyword rankings, organic traffic, and conversion rates. Our comprehensive analysis helps you understand the impact of our efforts and allows us to make data-driven optimizations.</p>
                <hr className="sm:mt-2.5 mt-5" />
            </div>
            <div className="pt-5">
                <h1 className="sm:text-[20px] text-2xl font-medium text-blue-600">Content Creation and Optimization</h1>
                <p className="sm:text-[16px] text-[17px] sm:pt-1.5 pt-3">We create high-quality, engaging, and SEO-friendly content that aligns with your business goals and resonates with your target audience. Our content optimization techniques ensure that search engines can understand and rank your content effectively.</p>
                <hr className="sm:mt-2.5 mt-5" />
            </div>
        </div>
        <div className="flex gap-5 pt-[100px] sm:pt-[60px] justify-center sm:grid-cols-1 sm:grid">
            <div className=" bg-blue-600 sm:w-[350px] w-[400px] h-[400px] sm:h-[380px] rounded-lg p-8 shadow-lg">
                <div>
                    <button className="bg-white shadow-md text-blue-600 font-medium sm:text-[16px] sm:font-medium px-6 py-2 sm:px-1.5 sm:py-1 rounded-md">Our Best</button>
                </div>
                <div>
                    <h1 className="text-white sm:text-4xl text-5xl pt-5">Bestfolio from <br />RBSA</h1>
                    <p className="text-white text-[16px] pt-3 sm:pt-1.5">At RankBoost, we adhere to ethical practices and follow industry best standards. We prioritize quality over shortcuts, employing white-hat techniques that are in line with search engine guidelines.</p>
                </div>
                <div className="flex sm:pt-3 pt-5 gap-3">
                    <i className="ri-play-fill sm:text-xl text-2xl text-blue-600 bg-white rounded-full px-1"></i>
                    <h1 className="text-xl text-white font-normal sm:text-[16px] cursor-pointer hover:underline">See more</h1>
                </div>
            </div>
            <div>
                <img className='rounded-lg shadow-md h-[400px] sm:hidden' 
                src={bestfolio} alt='bestfolio' />
            </div>
        </div>
    </div>
  )
}
