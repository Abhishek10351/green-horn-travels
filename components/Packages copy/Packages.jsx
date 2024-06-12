// src/pages/ContactUsPage.jsx
import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Packages.css";

const courses = [
  {
    title: "Assam",
    startDate: "04.11.2022",
    image: "./src/assets/illustrations/brahmaputra.jpg",
    info: "Explore the beautiful landscapes and tea gardens of Assam.",
  },
  {
    title: "Meghalaya",
    startDate: "30.11.2022",
    image: "./src/assets/illustrations/meghalaya1.jpg",
    info: "Discover the majestic waterfalls and caves in Meghalaya.",
  },
  {
    title: "Arunachal Pradesh",
    startDate: "31.10.2022",
    image: "./src/assets/illustrations/arunachal.jpg",
    info: "Experience the serene beauty and cultural heritage of Arunachal Pradesh.",
  },
];

const overlayColors = [
  "rgba(249, 178, 52, 0.7)", // yellow
  "rgba(62, 205, 94, 0.7)",  // green
  "rgba(228, 64, 2, 0.7)",   // red
];

const Packages = () => {
  return (
    <>
      <div className="package-container">
        <div className="ag-format-container">
          <div className="ag-courses_box">
            {courses.map((course, index) => (
              <div className="ag-courses_item" key={index}>
                <a href="#" className="ag-courses-item_link">
                  <div
                    className="ag-courses-item_bg"
                    style={{
                      backgroundImage: `url(${course.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="ag-courses-item_overlay"
                    style={{
                      backgroundColor: overlayColors[index % overlayColors.length],
                      
                    }}
                  ></div>
                  <div className="ag-courses-item_title">{course.title}</div>
                  <button>Book</button>
                  <div className="ag-courses-item_info">{course.info}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Packages;
