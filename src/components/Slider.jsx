
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
import { FaAmbulance } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { MdComputer } from "react-icons/md"; 
import { GiHospitalCross } from "react-icons/gi";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Slide } from "react-awesome-reveal";

const Slider = () => {
    return (
        <div className="relative">
            <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide className=""> 
                {/* style={{backgroundImage: "url('https://i.ibb.co/zP3M0Sg/slider1.jpg')"}} */}
                    <div className="bg-cover bg-center h-[250px] md:h-[580px] flex flex-col justify-center items-center p-5 lg:px-40 bg-slate-200" >
                            <div className="absolute inset-0 backdrop-blur-2xl"></div>
                            <div className="flex gap-6 items-center">
                                <div className="animate__animated animate__backInUp"><img src="https://i.ibb.co/kxbgWMc/slider2-image.png" alt="" /></div>
                                <div className="flex flex-col gap-3 scale-50 md:scale-100">
                                    <div className="flex items-center  gap-2 animate__animated animate__fadeInRight animate__delay-2s">
                                        <p className="text-3xl  font-bold">Our Features</p>
                                    </div>
                                    <div className="flex items-center  gap-2 animate__animated animate__fadeInRight animate__delay-2s">
                                        <p className="text-2xl "><FaBriefcaseMedical /></p>
                                        <p className="text-2xl text-blue-500 font-bold">State-of-the-Art Facilities</p>
                                    </div>
                                    <div className="flex items-center  gap-2 animate__animated animate__fadeInRight animate__delay-2s">
                                        <p className="text-2xl "><FaBriefcaseMedical /></p>
                                        <p className="text-2xl text-blue-500 font-bold">Expert Medical Staff</p>
                                    </div>
                                    <div className="flex items-center  gap-2 animate__animated animate__fadeInRight animate__delay-2s">
                                        <p className="text-2xl "><FaBriefcaseMedical /></p>
                                        <p className="text-2xl text-blue-500 font-bold">Comprehensive Services</p>
                                    </div>
                                    <div className="flex items-center  gap-2 animate__animated animate__fadeInRight animate__delay-2s">
                                        <p className="text-2xl "><FaBriefcaseMedical /></p>
                                        <p className="text-2xl text-blue-500 font-bold">Focus on Safety and Quality</p>
                                    </div>
                                    <div className="flex items-center  gap-2 animate__animated animate__fadeInRight animate__delay-2s">
                                        <p className="p-3 border-2 border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">KNOW MORE</p>
                                    </div>
                                </div>
                            </div>
                            {/* <Fade duration={3000}><h1 className='text-4xl my-5 font-semibold text-white text-center'>Craft Your Home Oasis</h1></Fade>
                            <Slide direction='up'><h2 className='text-xl  text-white text-center'>Transform your living space into a sanctuary of style with our exquisite range of artisanal ceramics.Each piece is lovingly crafted to infuse your home with elegance and personality</h2></Slide> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                
                    <div className="bg-cover bg-center h-[250px] md:h-[590px] flex flex-col justify-center items-center p-5 lg:px-40 " style={{backgroundImage: "url('https://i.ibb.co/y0ptBHP/slider-4.jpg')"}} >
                            <div className="absolute inset-0 backdrop-blur-xl"></div>
                            <div className="flex flex-row-reverse gap-6 items-center">
                                <Slide direction='right'><div className=""><img src="https://i.ibb.co/nRLZbTz/slider3-image.png" alt="" /></div></Slide>
                                <div className="flex flex-col gap-3 scale-50 md:scale-100">
                                    <Slide direction='down'><div className="flex  items-center  gap-2 ">
                                        <p className="text-3xl  font-bold">Our Services</p>
                                    </div></Slide>
                                    <Slide direction='left' ><div className="flex items-center  gap-2 ">
                                        <p className="text-2xl "><GiHospitalCross /></p>
                                        <p className="text-2xl text-blue-500 font-bold">24*7 Emergency Care</p>
                                    </div></Slide>
                                    <Slide direction='left'><div className="flex items-center  gap-2 ">
                                        <p className="text-2xl "><MdComputer /></p>
                                        <p className="text-2xl text-blue-500 font-bold">Diagnostic Services</p>
                                    </div></Slide>
                                    <Slide direction='left'><div className="flex items-center  gap-2 ">
                                        <p className="text-2xl "><FaBriefcaseMedical /></p>
                                        <p className="text-2xl text-blue-500 font-bold">Specialized Medical Care</p>
                                    </div></Slide>
                                    <Slide direction='left'><div className="flex items-center  gap-2 ">
                                        <p className="text-2xl "><FaUserDoctor /></p>
                                        <p className="text-2xl text-blue-500 font-bold">Surgical Services by Experts</p>
                                    </div></Slide>
                                    <Slide direction='left'><div className="flex items-center  gap-2 ">
                                        <p className="text-2xl "><FaAmbulance /></p>
                                        <p className="text-2xl text-blue-500 font-bold">Convenient Ambulace Service</p>
                                    </div></Slide>
                                </div>
                            </div>
                            
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                {/* style={{backgroundImage: "url('https://i.ibb.co/zP3M0Sg/slider1.jpg')"}} */}
                    <div className="bg-cover bg-center h-[250px] md:h-[550px] flex flex-col justify-center items-center p-5 lg:px-40 bg-slate-200 " >
                            <div className="absolute inset-0 backdrop-blur-xl"></div>
                            <div className="flex flex-row-reverse gap-6 items-center">
                                <Slide direction='right'><div className="h-full w-[130%]"><img src="https://i.ibb.co/9WcT6vt/slider1-image.png" alt="" /></div></Slide>
                                <div className="flex flex-col gap-3 w-3/4 md:w-1/2 scale-[.25] md:scale-100">
                                    <Slide direction='down'><div className="flex items-center  gap-2 ">
                                        <p className="text-3xl font-bold">Technology Meets Experience</p>
                                    </div></Slide>
                                    <Slide direction='left' ><div className="flex items-center  gap-2 ">
                                        <p className="text-2xl text-blue-500 font-bold">Our specialized centers of excellence ensure comprehensive care. .Empowering individuals with personalized treatments and compassionate support for optimal health outcomes.</p>
                                    </div></Slide>
                                    <Slide direction='down' ><div className="flex items-center  gap-2">
                                        <p className="p-3 border-2 border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">KNOW MORE</p>
                                    </div></Slide>
                                </div>
                            </div>
                            
                    </div>
                </SwiperSlide>
                
            </Swiper> 
        </div>
    );
};

export default Slider;