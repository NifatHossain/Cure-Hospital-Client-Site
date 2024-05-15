

const Gallary = () => {
    return (
        <div className="my-5">
            <h2 className="text-2xl font-bold text-center mb-5">Gallary section</h2>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[65vh]">
                    <img src="https://i.ibb.co/NxNf2SP/portfolio-new-16.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full h-[65vh]">
                    <img src="https://i.ibb.co/Xj9CH7H/portfolio-new-17.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full h-[65vh]">
                    <img src="https://i.ibb.co/2gykqwV/portfolio-new-18.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full h-[65vh]">
                    <img src="https://i.ibb.co/r0hqLfY/portfolio-new-20-hospital.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;