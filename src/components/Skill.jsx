import React from "react";
import { FaBriefcase, FaGraduationCap, FaPaintBrush } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Skill = () => {
  return (
    <div id="skills" className="container my-5">
      <h2 className="display-6 text-success text-center mb-4">My Skills</h2>

      <div className="row">
        {/* Experience Section */}
        <div className="col-md-4 mb-4 d-flex align-items-stretch">
          <div className="card border-0 w-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-success d-flex align-items-center mb-3">
                <FaBriefcase className="me-2" /> Experience
              </h5>
              <p className="card-text mb-3">
                Over 3 years of experience working as a freelance graphic
                designer. I've collaborated with numerous clients on branding,
                website designs, and digital marketing materials.
              </p>
              <ul>
                <li className="d-flex align-items-center">
                  <IoIosArrowDroprightCircle className="me-2 text-success" />{" "}
                  Freelance Designer for 3+ years
                </li>
                <li className="d-flex align-items-center">
                  <IoIosArrowDroprightCircle className="me-2 text-success" />{" "}
                  Branding and Identity Design
                </li>
                <li className="d-flex align-items-center">
                  <IoIosArrowDroprightCircle className="me-2 text-success" />{" "}
                  Website & UI/UX Design
                </li>
                <li className="d-flex align-items-center">
                  <IoIosArrowDroprightCircle className="me-2 text-success" />{" "}
                  Collaborated with agencies & clients
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="col-md-4 mb-4 d-flex align-items-stretch">
          <div className="card border-0 w-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-success d-flex align-items-center mb-3">
                <FaGraduationCap className="me-2" /> Education
              </h5>
              <p className="card-text mb-3">
                I hold a Bachelor's degree in Graphic Design from XYZ University.
                Additionally, I've completed various certification courses in
                graphic design tools and web design.
              </p>
              <ul>
                <li className="d-flex align-items-center">
                  <IoIosArrowDroprightCircle className="me-2 text-success" />{" "}
                  Bachelor's in Graphic Design
                </li>
                <li className="d-flex align-items-center">
                  <IoIosArrowDroprightCircle className="me-2 text-success" />{" "}
                  Adobe Certified Expert
                </li>
                <li className="d-flex align-items-center">
                  <IoIosArrowDroprightCircle className="me-2 text-success" />{" "}
                  Web Design Certification
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="col-md-4 mb-4 d-flex align-items-stretch">
          <div className="card border-0 w-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-success d-flex align-items-center mb-3">
                <FaPaintBrush className="me-2" /> Skills
              </h5>

              {/* Skill 1: Photoshop */}
              <div className="mb-3">
                <p>Adobe Photoshop</p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Photoshop Skill"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              {/* Skill 2: Illustrator */}
              <div className="mb-3">
                <p>Adobe Illustrator</p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Illustrator Skill"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              {/* Skill 3: Figma */}
              <div className="mb-3">
                <p>Figma</p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Figma Skill"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              {/* Skill 4: Web Design */}
              <div className="mb-3">
                <p>Web Design</p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Web Design Skill"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
