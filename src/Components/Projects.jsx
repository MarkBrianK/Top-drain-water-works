import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qualityAuto } from "@cloudinary/url-gen/qualifiers/quality";
import { fill } from "@cloudinary/url-gen/actions/resize";

import data from "../Data/projects.json";

const cld = new Cloudinary({
  cloud: {
    cloudName: "deqzkva98",
  },
});

export default function Projects() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">Our Projects</h1>
      <p className="text-center mb-5 fs-5 text-muted">
        A showcase of recent and ongoing water infrastructure projects across Kenya.
      </p>

      <div className="row g-4">
        {data.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Carousel */}
              <div
                id={`carousel-${index}`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {project.images.map((publicId, imgIndex) => {
                    const cldImg = cld
                      .image(publicId)
                      .format(auto())
                      .quality(qualityAuto())
                      .resize(fill().width(600).height(250));

                    return (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                      >
                        <AdvancedImage
                          cldImg={cldImg}
                          className="d-block w-100"
                          style={{
                            height: "250px",
                            objectFit: "cover",
                          }}
                          alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
                {project.images.length > 1 && (
                  <>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${index}`}
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" />
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${index}`}
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon" />
                    </button>
                  </>
                )}
              </div>

              {/* Card Content */}
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-2">{project.title}</h5>
                <p className="card-text small text-muted mb-2">
                  {project.description}
                </p>
                <p className="text-primary fw-medium mb-0">
                  <i className="bi bi-geo-alt-fill me-1" />
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
