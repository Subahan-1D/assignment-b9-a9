import 'animate.css'
const Slider = () => {
    return (
        <>
            <div className="carousel container mx-auto w-full rounded-2xl ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/pdR64vm/pexels-pixabay-258154.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">Escape to Paradise: Explore Our Exclusive Resort Deals</h1>
                                <p className="mb-5 text-white animate__animated animate__fadeIn animate__delay-1s">Indulge in luxury and relaxation with our handpicked selection of resort deals. Whether you're seeking serene beaches, lush landscapes, or adventurous excursions, our curated offers promise unforgettable experiences. Dive into paradise and discover your perfect getaway today!</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url( https://i.ibb.co/Cn6S72j/pexels-asad-photo-maldives-1450361.jpg )' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">Discover Blissful Retreats: Unbeatable Resort Deals Await</h1>
                                <p className="mb-5 text-white animate__animated animate__fadeIn animate__delay-1s">Embark on a journey to rejuvenation and bliss with our enticing array of resort deals. From tropical oases to mountain hideaways, our carefully crafted packages cater to every traveler's dream. With unbeatable savings and exceptional amenities, your next escape is just a click away. Start planning your ultimate retreat now!</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RDXBXLJ/pexels-asad-photo-maldives-1450363.jpg)' }}>
                        <div className="hero-overlay bg-opacity-75"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">Unwind in Style: Exclusive Resort Deals for Your Dream Vacation</h1>
                                <p className="mb-5 text-white ">Unwind and recharge in style with our exclusive resort deals, designed to elevate your vacation experience to new heights of luxury. Immerse yourself in breathtaking surroundings, indulge in gourmet dining, and pamper yourself with world-class amenities. With unbeatable offers and personalized service, your dream vacation is closer than you think. Book now and embark on a journey of relaxation and rejuvenation!</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle text-white">❯</a>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Slider;