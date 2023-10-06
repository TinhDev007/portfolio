import React from 'react'
import Slider from 'react-slick'
import Background1 from '../assets/images/bg_1.png'
import Background2 from '../assets/images/bg_2.png'

const Hero = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <section id="home-section" className="hero">
      <div className="home-slider">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={Background1} alt="" style={{ width: '100%' }} />
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">
                      I'm <span>Clark Thompson</span>
                    </h1>
                    <h2 className="mb-4">A Freelance Web Designer</h2>
                    <p>
                      <a href="#" className="btn btn-primary py-3 px-4">
                        Hire me
                      </a>{' '}
                      <a
                        href="#"
                        className="btn btn-white btn-outline-white py-3 px-4"
                      >
                        My works
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="text">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">
                      I'm <span>Clark Thompson</span>
                    </h1>
                    <h2 className="mb-4">A Freelance Web Designer</h2>
                    <p>
                      <a href="#" className="btn btn-primary py-3 px-4">
                        Hire me
                      </a>{' '}
                      <a
                        href="#"
                        className="btn btn-white btn-outline-white py-3 px-4"
                      >
                        My works
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={Background2} alt="" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Hero
