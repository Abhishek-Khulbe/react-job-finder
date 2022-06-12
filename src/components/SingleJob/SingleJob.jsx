import React from "react";
import "./singleJob.css";

export default function SingleJob({
  company,
  designation,
  location,
  min_experience,
  skills,
}) {
  return (
    <div className="singleJob">
      <div className="company-info">
        <h3>{company}</h3>
        <h5>,{location}</h5>
      </div>
      <h4>{designation}</h4>

      <div className="experience">
        <h4>Minimum experience(in years): {min_experience}</h4>
      </div>
      <div className="skill-container">
        {skills.map((s) => {
          return <p className="skill-name">{s}</p>;
        })}
      </div>
    </div>
  );
}
