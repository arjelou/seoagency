import SeoVid from "../vid/seovid"

export default function about() {
  return (
    <div className="px-32 pt-[130px]">
        <button className="rounded-md bg-blue-100 text-sm text-blue-600 font-medium py-1 px-2">ABOUT US</button>
        <div className="grid grid-cols-2 items-center">
            <div>
                <h1 className="text-4xl font-medium">We are</h1>
                <h1 className="text-4xl font-medium">The <bold className="text-blue-600">Best Team</bold></h1>
                <h1 className="text-4xl font-medium">of Multimedia Services</h1>

            </div>
            <div>
                <p>Partner with RankBoost SEO Agency and unlock the true potential of your online business. Let us help you dominate search engine rankings, increase organic traffic, and drive growth that lasts. Get in touch with us today and embark on a journey towards digital success.</p>
                <div className="grid grid-cols-3 pt-4">
                    <div>
                        <h1 className="text-4xl font-medium">1<i className="font-medium text-blue-600 ri-add-line"></i></h1>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-medium">12<i className="font-medium text-blue-600 ri-add-line"></i></h1>
                        <p>Success Total Clients</p>            
                    </div>
                    <div>
                        <h1 className="text-4xl font-medium">150<i className="font-medium text-blue-600 ri-add-line"></i></h1>
                        <p>Videos Published</p>                        
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full pt-10 flex items-center justify-center">
            <SeoVid embedId="7lZc_fsw-JU" />
        </div>
    </div>
  )
}
