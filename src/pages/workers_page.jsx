import Axios from "axios";
import { useEffect, useState } from "react";
import {
  setWorkersState,
  setActiveWorker,
} from "../store/states/workers.state.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function WorkersPage() {
  const dispatch = useDispatch();
  const [workersArray, setWorkersAray] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:9000/api/v1/users/workers",
    }).then((response) => {
      setWorkers(response.data.data);
      setWorkersAray(response.data.data);
      dispatch(setWorkersState(response.data.data));
    });
  }, [dispatch]);

  const search = (e) => {
    let searchQuery = e.target.value.toLowerCase();
    const results = [];

    workersArray.filter((worker) => {
      let workersName = `${worker.Fname.toLowerCase()} ${worker.Lname.toLowerCase()}`;
      let workersSkills = worker.skills;

      if (
        workersName.includes(searchQuery) ||
        workersSkills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) {
        results.push(worker);
        setWorkers(results);
      }
    });
  };

  return (
    <div className="workers-page">
      <div className="workers-page-content">
        <div className="top-bar">
          <h1>Find Verified, Skilled Workers You Can Trust</h1>
          <p>
            Discover reliable workers with proven skills and experience.
            KaziLink's verification system ensures you connect with qualified
            candidates for your specific needs.
          </p>

          <div className="input-area">
            <input
              type="text"
              onChange={(e) => search(e)}
              placeholder="Search by name or skill"
            />
          </div>
          <div className="tags">
            <button>All Workers</button>
            <button>Verified Only</button>
            <button>Near Me</button>
            <button>Highest Reviews</button>
            <button>Available for work</button>
          </div>
        </div>

        <div className="workers-list">
          {workers.map((data, key) => {
            return <Worker key={key} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Worker(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setActive = () => {
    dispatch(setActiveWorker(props.data._id));
    navigate(`/workers/dashboard/${props.data._id}`);
  };

  return (
    <div className="worker">
      <div
        className="profile"
        style={{
          backgroundImage: `url('${props.data.profilePicture}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="content">
        <div>
          <h1>
            {props.data.Fname} {props.data.Lname}
          </h1>
          <p>
            {props.data.skills.map((skill, index) => {
              return <span key={index}>{skill},</span>;
            })}
          </p>
        </div>
        <button onClick={setActive}>View Profile</button>
      </div>
    </div>
  );
}
