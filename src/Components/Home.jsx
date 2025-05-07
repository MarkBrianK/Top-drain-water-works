import React from "react";
import servicesData from "../Data/services.json";
import videosData from "../Data/videos.json";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qualityAuto } from "@cloudinary/url-gen/qualifiers/quality";

const cld = new Cloudinary({ cloud: { cloudName: "deqzkva98" } });

export default function Home() {
  return (
    <main className="container py-5">
      <section className="mb-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">
            <span style={{
              display: "inline-block",
              backgroundColor: "#d0e7ff",
              padding: "0 5px"
            }}>
              Precision
            </span>{" "}
            <span style={{ fontSize: "1.2rem" }}>at work</span>
          </h1>


        </div>


        <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded-4 overflow-hidden">
            {videosData.map((video, index) => {
              const cldVideo = cld.video(video.publicId).format(auto()).quality(qualityAuto());

              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                  style={{ height: "500px" }}
                >
                  <div className="position-relative h-100">
                    <AdvancedVideo
                      cldVid={cldVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                      <h5>{video.title}</h5>
                      <p>{video.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="text-center mb-5">
          <h1 className="fw-bold">
            <span style={{
              display: "inline-block",
              backgroundColor: "#d0e7ff",
              padding: "0 5px"
            }}>
              Our Core
            </span>{" "}
            <span style={{ fontSize: "1.2rem" }}>Services</span>
          </h1>


        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {servicesData.map((service, index) => {
            const cldImage = cld
              .image(service.publicId)
              .format(auto())
              .quality(qualityAuto())
              .resize(scale().width(600));

            return (
              <div className="col" key={index}>
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
                  }}
                >
                  <AdvancedImage
                    cldImg={cldImage}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text">{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
