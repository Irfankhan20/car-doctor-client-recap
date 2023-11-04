import banner1 from '../../src/assets/images/banner/1.jpg'
import banner2 from '../../src/assets/images/banner/2.jpg'
import banner3 from '../../src/assets/images/banner/3.jpg'
import banner4 from '../../src/assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">

            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner1} className="w-full rounded-lg " />
                {/* banner1 text,btn */}
                <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    {/* banner text1*/}
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-semibold leading-[75px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-secondary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                {/*banner1 scroll bar1 */}
                <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                    <a href="#slide4" className="btn btn-circle bg-sky-500 text-white hover:bg-red-500 hover:text-white border-0">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-sky-500 text-white hover:bg-red-500 hover:text-white border-0">❯</a>
                </div>

            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                {/* banner2 text,btn */}
                <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    {/* banner text*/}
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-semibold leading-[75px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-secondary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                {/*banner2 scroll bar */}
                <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                    <a href="#slide1" className="btn btn-circle hover:bg-red-500 hover:text-white border-0">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-red-500 hover:text-white border-0">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                {/* banner3 text,btn */}
                <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    {/* banner text*/}
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-semibold leading-[75px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-secondary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                {/*banner3 scroll bar */}
                <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                    <a href="#slide2" className="btn btn-circle hover:bg-red-500 hover:text-white border-0">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-red-500 hover:text-white border-0">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                {/* banner4 text,btn */}
                <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    {/* banner text1*/}
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-semibold leading-[75px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-secondary'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                {/*banner4 scroll bar1 */}
                <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                    <a href="#slide3" className="btn btn-circle hover:bg-red-500 hover:text-white border-0">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-red-500 hover:text-white border-0">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;