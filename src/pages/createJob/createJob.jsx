import Axios from "axios";
import { useRef } from "react";
import "../../sass/_createJob.scss";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setJobState } from "../../store/states/jobs.state.js";
import { useNavigate } from "react-router-dom";

export default function CreateJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const paymentRef = useRef();
  const endDateRef = useRef();
  const startDateRef = useRef();
  const descriptionRef = useRef();
  const locationRef = useRef();
  const typeRef = useRef();

  const submit = () => {
    const type = typeRef.current.value;
    const title = titleRef.current.value;
    const payment = paymentRef.current.value;
    const endDate = endDateRef.current.value;
    const startDate = startDateRef.current.value;
    const location = locationRef.current.value;
    const description = descriptionRef.current.value;

    const token = localStorage.getItem("_kazi_token");

<<<<<<< HEAD
    if (token == null) {
      navigate("/");
    } else {
      Axios({
        method: "POST",
        url: "http://localhost:9000/api/v1/jobs",
        data: {
          title,
          payment,
          endDate,
          startDate,
          location,
          description,
          type,
          token,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          res.data.data && dispatch(setJobState(res.data.data.job));
          alert("Job successfully created");
          navigate("/jobs");
        }
      });
=======
		const type = typeRef.current.value;
        const title = titleRef.current.value;
        const payment = paymentRef.current.value;
        const endDate = endDateRef.current.value;
        const startDate = startDateRef.current.value;
        const location = locationRef.current.value;
        const description = descriptionRef.current.value;

		const token = localStorage.getItem("_kazi_token");

		if (token == null) {
			navigate("/");
		} else {
			Axios({
				method: "POST",
				url: "https://kazilink.onrender.com/api/v1/jobs",
				data: {
					title, payment, endDate, startDate, location, description, type, token
				}
			}).then((res) => {
				console.log(res);
				if (res.data.status === "success") {
					res.data.data && dispatch(setJobState(res.data.data.job));
					alert("Job successfully created");
					navigate("/jobs");
				}
			})
		}
>>>>>>> cb90936fde9eb6f73633f29dab321df07061efce
    }
  };

  return (
    <div className="create-job-section">
      <div className="create-header">
        <h1>Create Your Job Listing</h1>
        <p>
          Post your job opportunity and connect with verified workers who match
          your needs.
        </p>
      </div>

      <div className="job-input">
        <div className="title">
          <h3>Title</h3>
          <input type="text" placeholder="Enter Job Title" ref={titleRef} />
        </div>

        <div className="description">
          <h3>Description</h3>
          <textarea ref={descriptionRef}></textarea>
        </div>

        <div className="payment">
          <h3>Payment</h3>
          <input type="text" placeholder="Enter job budget" ref={paymentRef} />
        </div>

        <div className="start-date">
          <div className="start">
            <h3>Start Date</h3>
            <MdOutlineCalendarMonth style={{ fontSize: "20px" }} />
          </div>
          <input type="date" ref={startDateRef} />
        </div>

        <div className="end-date">
          <div className="end">
            <h3>End Date</h3>
            <MdOutlineCalendarMonth style={{ fontSize: "20px" }} />
          </div>
          <input type="date" ref={endDateRef} />
        </div>

        {/* <div className="duration">
					<h3>Duration</h3>
					<input type="text" placeholder="Enter job duration" />
				</div> */}

        <div className="input-area">
          <label htmlFor="type">Employment Type</label>
          <select name="location" ref={typeRef}>
            <option value="gig">Gig</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        <div className="location">
          <h3>Location</h3>
          <select name="location" ref={locationRef}>
            <option value="Gisozi">Gisozi</option>
            <option value="Remera">Remera</option>
            <option value="Kisumu">Kisumu</option>
          </select>
        </div>

        <div className="post-job">
          <button onClick={submit}>Post job</button>
        </div>
      </div>
    </div>
  );
}
