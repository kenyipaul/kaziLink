import Axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function JobDetails() {

    const location = useLocation();
    const tmp_id = location.pathname.split('/');
    const job_id = tmp_id[tmp_id.length - 1];
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState(0);
    const [jobDetails, setJobDetails] = useState({});
    const jobsState = useSelector(state => state.jobsState);
    const userState = useSelector(state => state.userState);

    useEffect(() => {

        let activeJob = sessionStorage.getItem("active_job");

        if (activeJob == null) {
            navigate("/jobs");
        } else {
            activeJob = JSON.parse(activeJob);
            setJobDetails(activeJob);
        }

    }, [location]);


    const apply = () => {
        Axios({
            method: "PATCH",
            url: `http://localhost:9000/api/v1/jobs/${job_id}`,
            data: {
                workers: [...jobDetails.workers, userState.userData._id],
            }
        }).then((response) => {
            setJobDetails(response.data.data.updatedJob)
            sessionStorage.setItem("active_job", JSON.stringify(response.data.data.updatedJob));
        })
    }

    return (
        <div className="job-details-page">
            <div className="job-details-content">
                <div className="top-bar">
                    <h1>Find Jobs That Value Your Skills</h1>
                    <p>Your experience matters. On KaziLink, employers are looking for workers with real-world skills and verified work histories—exactly like yours.</p>
                </div>

                { userState.userData.role === "employer" &&
                <div className="nav-bar">
                    <button className={currentTab === 0 && "active"} onClick={() => setCurrentTab(0)} >Job Details</button>
                    <button className={currentTab === 1 && "active"} onClick={() => setCurrentTab(1)} >Applicants</button>
                </div> }

                {currentTab === 0 ?
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
                            <p>End Date</p>
                            <h3>{new Date(jobDetails.endDate).toLocaleDateString()}</h3>
                        </div>
                    </div>
                    { userState.userData.role === "worker" &&
                        <>{
                            jobDetails.workers && jobDetails.workers.includes(userState.userData._id) ?
                            <button className="pending" onClick={apply}>Application Pending</button> :
                            <button onClick={apply}>Apply Now</button>
                        }</>
                    }
                </div> :

                    <div className="applicant-section">
                        <div className="top-bar">

                        </div>
                        <div className="users">

                            <Worker />
                            <Worker />
                            <Worker />
                            <Worker />
                            <Worker />
                            <Worker />

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


function Worker() {
    return (
        <div className="user">
            <div className="profile">
                <div className="cover"></div>
                <h1>John Doe</h1>
            </div>

            <div className="actions">
                <button>View Profile</button>
                <button>Hire</button>
            </div>
        </div>
    )
}