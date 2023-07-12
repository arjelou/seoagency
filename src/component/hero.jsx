
export default function hero() {
  return (
    <div className="px-32 pt-10">
        <div className="grid grid-cols-2">
            <div className="">
                <div>
                    <h1 className="text-5xl font-medium">One Stop</h1>
                    <h1 className="text-5xl font-medium pt-2"><bold className="text-blue-600">Multimedia</bold> Services</h1>
                    <p className="pt-2">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                </div>
                <div className="flex pt-5 gap-4 items-center">
                    <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-md hover:bg-blue-700 transi duration-300 ease-in-out">Get Started</button>
                    <h1 className="text-xl text-blue-600 font-medium"><i className="ri-play-fill text-2xl bg-blue-200 rounded-full p-1"></i>See our works</h1>
                </div>
            </div>
            <div>
            <lottie-player src="https://lottie.host/078d49aa-4f88-4b44-9204-4d90da373681/TGxPcE2ac7.json" background="#fff" speed="1"  loop autoplay direction="1" mode="normal"></lottie-player>
            </div>
        </div>
    </div>
  )
}
