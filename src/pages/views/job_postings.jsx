import Axios from "axios";
import "./styles/job_postings.scss";
import { useEffect, useState } from "react";
import { setJobState } from "../../store/states/jobs.state.js";

export default function JobPostings() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    Axios({
      method: "get",
      url: "http://localhost:9000/api/v1/jobs",
    }).then((res) => {
      if (res.data.status === "success") {
        setJobs(res.data.data.jobs);
      }
    });
  }, []);

<<<<<<< HEAD
  return (
    <div className="job-postings-page">
      <div className="job-postings-content">
        <h1>Job Listings</h1>
=======
    useEffect(() => {
        Axios({
            method: "get",
            url: "https://kazilink.onrender.com/api/v1/jobs",
>>>>>>> cb90936fde9eb6f73633f29dab321df07061efce

        <div className="job-list">
          {jobs.map((data, key) => {
            return <Job data={data} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Job(props) {
  return (
    <div className="job-post">
      <div className="top-bar">
        <button>
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                fill="#1C274C"
              ></path>{" "}
              <path
                d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                fill="#1C274C"
              ></path>{" "}
              <path
                d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                fill="currentColor"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
      <h3>Posted by {props.data.createdBy}</h3>
    </div>
  );
}
