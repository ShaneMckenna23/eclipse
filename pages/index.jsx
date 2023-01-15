import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { home1SliderProps } from "../src/sliderProps";

import AboutVideo from "../src/components/AboutVideo";
import Footer from "../src/layout/Footer";
import { jsTestimonials } from "../src/sliderProps";
// import Splitting from "splitting";

const Index = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Hero Main Slider */}
        <Swiper {...home1SliderProps} className="section hero-main-slider">
          <SwiperSlide className="swiper-slide" data-color="dark">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/home.jpeg)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">audio</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Eclipse 8 Experience <br />
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
      <div
        className="wrapper"
        style={{
          backgroundColor: "white",
          color: "black",
          paddingTop: "10rem",
          paddingBottom: "2rem",
          marginBottom: "100px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* titles */}
              <div className="h-titles">
                <div
                  style={{ color: "black" }}
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  About us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div
          className="section section-inner section-description scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>
                  We are an audio &
                  <br />
                  experience
                </h1>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                A San Diego based studio building handcrafted websites and
                brands for companies and all over the world. It is not enough
                that we build products that function, that are understandable
                and usable, we also need to build products that bring joy and
                excitement, pleasure and fun, and, yes, beauty to people’s
                lives. Creativity is to discover a question that has never been
                asked. If one brings up an idiosyncratic questionl.
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                The development of digital marketing is inseparable from
                technology development. One of the first key events happened in
                1971, when Ray Tomlinson sent the first email, and his
                technology set the platform to allow people to send and receive
                files through different machines. However, the more recognizable
                period as being the start of Digital Marketing is 1990 as this
                was where the Archie search engine was created as an index for
                FTP sites.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wrapper"
        style={{
          backgroundColor: "white",
          color: "black",
          paddingTop: "1px",
          paddingBottom: "2rem",
        }}
      >
        {/* Section Services */}
        <div className="section section-inner ">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                    style={{
                      color: "black",
                    }}
                  >
                    Our services
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* services */}
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" class="fas fa-volume-up"></i>
                      </div>
                      <div className="name">Marketing</div>
                      <div className="text">
                        Focused on creating, publishing, and distributing
                        content for a targeted audience online.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-magic" />
                      </div>
                      <div className="name">Copywriting</div>
                      <div className="text">
                        Act or occupation of writing text for the purpose of
                        advertising or other forms of marketing.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fa fa-spray-can" />
                      </div>
                      <div className="name">Web Design</div>
                      <div className="text">
                        Design process relating to the front-end (client side)
                        design of a website including writing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default Index;
