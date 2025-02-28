import "../sass/hurray.scss";
import { RiVerifiedBadgeFill } from "react-icons/ri";
export default function Hurray() {
  return (
    <div className="hurray">
      <RiVerifiedBadgeFill style={{ fontSize: "50px", color: "#00FF44" }} />
      <h1>Hurray!</h1>
      <h3>Your job application was successfully placed</h3>
      <p>Rooting for you to get the approval notification soon</p>
      <button>Dismiss</button>
    </div>
  );
}
