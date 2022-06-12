import React, { useState, useRef, useEffect } from "react";
import { links } from "./../data";
import "./navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [profile, setProfile] = useState(null);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/user/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfile(data);
      });
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>Job Finder</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="user-profile">
          <div className="user-data">
            <h5>{profile ? profile.data.name : null}</h5>
            <h6>{profile ? profile.data.college : null}</h6>
          </div>
          <img
            src={profile ? profile.data.pictureUrl : null}
            alt="photo"
            className="profile-picture"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
