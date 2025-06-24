import React, { useEffect, useRef } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qualityAuto } from "@cloudinary/url-gen/qualifiers/quality";

import data from "../Data/projects.json";

const cld = new Cloudinary({
  cloud: {
    cloudName: "deqzkva98",
  },
});

export default function Projects() {
  const carouselRefs = useRef([]);

  useEffect(() => {
    const bootstrap = require("bootstrap");
    const refs = [...carouselRefs.current];
    const carousels = [];

    refs.forEach((carouselEl, index) => {
      if (carouselEl && data[index].images.length > 1) {
        const carousel = new bootstrap.Carousel(carouselEl, {
          interval: false,
          pause: false,
          ride: false,
        });

        let autoplayTimer = null;
        let startX = 0;

        const startAutoplay = () => {
          autoplayTimer = setInterval(() => {
            carousel.next();
          }, 2500);
        };

        const stopAutoplay = () => {
          clearInterval(autoplayTimer);
        };

        const handleTouchStart = (e) => {
          startX = e.touches[0].clientX;
          startAutoplay();
        };

        const handleTouchEnd = (e) => {
          const endX = e.changedTouches[0].clientX;
          const diffX = endX - startX;

          if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
              carousel.prev(); // swipe right
            } else {
              carousel.next(); // swipe left
            }
          }

          stopAutoplay();
        };

        // Event bindings
        carouselEl.addEventListener("mouseenter", startAutoplay);
        carouselEl.addEventListener("mouseleave", stopAutoplay);
        carouselEl.addEventListener("touchstart", handleTouchStart);
        carouselEl.addEventListener("touchend", handleTouchEnd);

        // Save for cleanup
        carousels.push({
          carouselEl,
          handlers: {
            startAutoplay,
            stopAutoplay,
            handleTouchStart,
            handleTouchEnd,
          },
        });
      }
    });

    // Cleanup
    return () => {
      carousels.forEach(({ carouselEl, handlers }) => {
        carouselEl.removeEventListener("mouseenter", handlers.startAutoplay);
        carouselEl.removeEventListener("mouseleave", handlers.stopAutoplay);
        carouselEl.removeEventListener("touchstart", handlers.handleTouchStart);
        carouselEl.removeEventListener("touchend", handlers.handleTouchEnd);
      });
    };
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-semibold text-center mb-4">Our Projects</h2>

      <div className="row g-4">
        {data.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className="card border-1 shadow-sm h-100"
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
              <div
                id={`carousel-${index}`}
                className="carousel slide"
                ref={(el) => (carouselRefs.current[index] = el)}
              >
                <div className="carousel-inner bg-dark">
                  {project.images.map((publicId, imgIndex) => {
                    const cldImg = cld
                      .image(publicId)
                      .format(auto())
                      .quality(qualityAuto());

                    return (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "300px",
                            backgroundColor: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <AdvancedImage
                            cldImg={cldImg}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                            alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                          />
                        </div>
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
