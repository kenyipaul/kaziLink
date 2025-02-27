import "../../sass/_createJob.scss"
import { MdOutlineCalendarMonth } from "react-icons/md";
export default function CreateJob() {
    return (
      <div className="create-job-section">
        <div className="create-header">
          <h1>Create Your Job Listing</h1>
          <p>
            Post your job opportunity and connect with verified workers who
            match your needs.
          </p>
        </div>
        <div className="job-input">
          <div className="title">
            <h3>Title</h3>
            <input type="text" placeholder="Enter Job Title" />
          </div>
          <div className="description">
            <h3>Description</h3>
            <textarea></textarea>
          </div>
          <div className="payment">
            <h3>Payment</h3>
            <input type="text" placeholder="Enter job budget" />
          </div>
          <div className="start-date">
            <div className="start">
              <h3>Start Date</h3>
              <MdOutlineCalendarMonth style={{ fontSize: "20px" }} />
            </div>
            <input type="text" />
          </div>
          <div className="end-date">
            <div className="end">
              <h3>End Date</h3>
              <MdOutlineCalendarMonth style={{ fontSize: "20px" }} />
            </div>
            <input type="text" />
          </div>
          <div className="duration">
            <h3>Duration</h3>
            <input type="text" placeholder="Enter job duration" />
          </div>
          <div className="location">
            <h3>Location</h3>
            <select name="location">
              <option value="Gisozi">Gisozi</option>
              <option value="Remera">Remera</option>
              <option value="Kisumu">Kisumu</option>
            </select>
          </div>
          <div className="post-job">
            <button>Post job</button>
          </div>
        </div>
      </div>
    );
}