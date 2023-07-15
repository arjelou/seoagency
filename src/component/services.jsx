
export default function services() {

  return (
    <div className="px-32 pt-[130px] h-screen justify-center items-center">
        <button className="rounded-md bg-blue-100 text-sm text-blue-600 font-medium py-1 px-2">BEST SERVICES</button>
        <div className="grid grid-cols-2 pt-7">
            <div>
                <h1 className="text-4xl font-medium">This is the best <bold className="text-blue-600">service</bold> we</h1>
                <h1 className="text-4xl font-medium">provide for you.</h1>
            </div>
            <div>
                <p>We conduct in-depth keyword research to identify the most relevant and valuable keywords for your business. By targeting the right keywords, we help you attract highly targeted traffic and increase your chances of conversion.</p>
            </div>
        </div>
        <div className="pt-10">
            <di>
                <h1 className="text-2xl font-medium text-blue-600">On-Page Optimization</h1>
                <p>Our team optimizes various on-page elements such as meta tags, headings, content structure, and URL structure to ensure that your website is easily accessible and understandable by search engines. This optimization improves your websites visibility and relevancy.</p>
                <hr className="mt-2 pt-2" />
            </di>
            <di>
                <h1 className="text-2xl font-medium text-blue-600">SEO Reporting and Analysis</h1>
                <p>We provide regular reports and insights on key SEO metrics, such as keyword rankings, organic traffic, and conversion rates. Our comprehensive analysis helps you understand the impact of our efforts and allows us to make data-driven optimizations.</p>
                <hr className="mt-2 pt-2" />
            </di>
            <di>
                <h1 className="text-2xl font-medium text-blue-600">SOCIAL MEDIA MAINTENANCE</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                <hr className="mt-2 pt-2" />
            </di>
        </div> 
    </div>
  )
}
