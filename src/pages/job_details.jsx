import Axios from "axios";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function JobDetails() {

    const location = useLocation();
    const tmp_id = location.pathname.split('/');
    const job_id = tmp_id[tmp_id.length - 1];

    const [jobDetails, setJobDetails] = useState({});
    const jobsState = useSelector(state => state.jobsState);
    const userState = useSelector(state => state.userState);

    useEffect(() => {

        const job_details = jobsState.jobs.filter(job => {
            return job._id == job_id;
        })

        setJobDetails(job_details[0]);

        console.log(job_details);
    }, [location]);


    const apply = () => {
        Axios({
            method: "PATCH",
            url: `http://localhost:9000/api/v1/jobs/${job_id}`,
            data: {
                workers: [...jobDetails.workers, userState.user._id],
            }
        })
    }

    return (
        <div className="job-details-page">
            <div className="job-details-content">
                <div className="top-bar">
                    <h1>Find Jobs That Value Your Skills</h1>
                    <p>Your experience matters. On KaziLink, employers are looking for workers with real-world skills and verified work histories—exactly like yours.</p>
                </div>

                <div className="about-section">
                    <h1>{jobDetails.title} - {jobDetails.location}</h1>

                    <div className="description">
                        <h2>Description</h2>
                        <p>{jobDetails.description}</p>
                    </div>

                    <div className="job-details">
                        <div className="detail">
                            <p>Payment</p>
                            <h3>Rwf {jobDetails.payment}</h3>
                        </div>
                        <div className="detail">
                            <p>Start Date</p>
                            <h3>{new Date(jobDetails.startDate).toLocaleDateString()}</h3>
                        </div>
                        <div className="detail">
                            <p>Location</p>
                            <h3>{jobDetails.location}</h3>
                        </div>
                        <div className="detail">
                            <p>Duration</p>
                            <h3>8 hours per day</h3>
                        </div>
                        <div className="detail">
                            <p>End Date</p>
                            <h3>{new Date(jobDetails.endDate).toLocaleDateString()}</h3>
                        </div>
                    </div>

                    <button onClick={apply}>Apply Now</button>
                </div>
            </div>
        </div>
    )
}