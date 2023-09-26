

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/x1KRTKb/Rectangle-4281.png?fbclid=IwAR1MTCmpbpBBaSghEn19BgY9WgQRBPzbI2Z-tanpqER5u50IVw65qEXUddk)' }}>
                <div className="hero-overlay bg-opacity-80 bg-white "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-4xl font-bold  text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center h-12 m-9">
                            <input className="w-[300px] border rounded-l-lg pl-5" placeholder="Search here...." type="text" name="" id="" />
                            <button className=" border rounded-r-lg bg-[#FF444A] text-white border-[#FF444A] w-24">Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;