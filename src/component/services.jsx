
export default function services() {

  return (
    <div className="px-32 pt-[130px] h-screen justify-center items-center">
        <button className="rounded-md bg-blue-100 text-sm text-blue-600 font-medium py-1 px-2">BEST SERVICES</button>
        <div className="grid grid-cols-2 pt-5">
            <div>
                <h1 className="text-5xl font-medium">This is the best <bold className="text-blue-600">service</bold> we</h1>
                <h1 className="text-5xl font-medium">provide for you.</h1>
            </div>
            <div>
                <p className="text-[18px] font-medium">We conduct in-depth keyword research to identify the most relevant and valuable keywords for your business. By targeting the right keywords, we help you attract highly targeted traffic and increase your chances of conversion.</p>
            </div>
        </div>
        <div className="pt-10">
            <div>
                <h1 className="text-2xl font-medium text-blue-600">On-Page Optimization</h1>
                <p className="text-[17px] pt-3">Our team optimizes various on-page elements such as meta tags, headings, content structure, and URL structure to ensure that your website is easily accessible and understandable by search engines. This optimization improves your websites visibility and relevancy.</p>
                <hr className="mt-5"/>
            </div>
            <div className="pt-5">
                <h1 className="text-2xl font-medium text-blue-600">SEO Reporting and Analysis</h1>
                <p className="text-[17px] pt-3">We provide regular reports and insights on key SEO metrics, such as keyword rankings, organic traffic, and conversion rates. Our comprehensive analysis helps you understand the impact of our efforts and allows us to make data-driven optimizations.</p>
                <hr className="mt-5" />
            </div>
            <div className="pt-5">
                <h1 className="text-2xl font-medium text-blue-600">Content Creation and Optimization</h1>
                <p className="text-[17px] pt-3">We create high-quality, engaging, and SEO-friendly content that aligns with your business goals and resonates with your target audience. Our content optimization techniques ensure that search engines can understand and rank your content effectively.</p>
                <hr className="mt-5" />
            </div>
        </div>
        <div className="flex">
            <div className="bg-slate-300 w-[500px] h-[360px]">
                contect
            </div>
            <div className="bg-slate-600 w-[600px]">
                image
            </div>
        </div>
    </div>
  )
}
