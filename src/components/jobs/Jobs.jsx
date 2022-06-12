import React, { useEffect, useState } from "react";
import SingleJob from "./../SingleJob/SingleJob";
import "./jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/job/openings")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data.data);
      });
  }, []);

  return (
    <div className="gridContainer">
      {jobs &&
        jobs.map((m) => {
          return <SingleJob key={m.id} {...m} />;
        })}
    </div>
  );
}
