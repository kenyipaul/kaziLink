import "../sass/glory.scss";
import { RiVerifiedBadgeFill } from "react-icons/ri";
export default function Glory() {
  return (
    <div className="glory">
      <RiVerifiedBadgeFill style={{ fontSize: "50px", color: "#00FF44" }} />
      <h1>Glory!</h1>
      <h3>You marked this job as completed</h3>
      <p>Hope the Worker delivered to your highest expectation.</p>
      <button>Dismiss</button>
    </div>
  );
}
