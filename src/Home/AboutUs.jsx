import person from '../assets/images/about_us/person.jpg';
import parts from '../assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className="mt-36 mb-36">
            <div className='flex gap-14 md:flex-row flex-col'>
                {/* img part */}
                <div className='lg:w-1/2 relative'>
                    <img className='w-3/4 rounded-lg shadow-2xl' src={person} alt="" />
                    <img className='w-1/2 right-5 border-8 border-white top-1/2 absolute rounded-lg shadow-2xl' src={parts} alt="" />
                </div>
                {/* text part */}
                <div className='lg:w-1/2 space-y-5 pr-3'>
                    <h1 className='text-[#FF3811] text-xl font-semibold'>About Us</h1>
                    <h2 className='text-5xl font-semibold'>We are qualified & of experience in this field</h2>
                    <p className='text-[#737373] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable</p>
                    <button className='btn btn-secondary'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;