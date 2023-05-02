import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";

import "./Projects.css";
import { data } from "../data/data";

const Projects: React.FC = () => {
  return (
    <section className="projects container section" id="projects">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Projects</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">Check my projects</span>
      </Slide>
      <Slide direction="left" triggerOnce>
        <Swiper
          className="projects__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {data.map(({ id, title, img_url, link }) => {
            return (
              <SwiperSlide className="projects__card" key={id}>
                <h3 className="projects__name">{title}</h3>
                <img src={img_url} alt="img" className="projects__img" />

                <div>
                  <a
                    href={`${link}`}
                    className="projects_social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-globe"></i>
                  </a>
                  <a
                    href="https://github.com/muratavci05"
                    className="projects_social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-github-alt"></i>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slide>
    </section>
  );
};

export default Projects;
