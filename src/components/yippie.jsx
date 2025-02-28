import "../sass/yippie.scss";
import { RiVerifiedBadgeFill } from "react-icons/ri";
export default function Yippie() {
  return (
    <div className="yippie">
      <RiVerifiedBadgeFill style={{ fontSize: "50px", color: "#00FF44" }} />
      <h1>Yippie!</h1>
      <h3>Your Job listing was successfully posted</h3>
      <p>Rooting for you get to get a good Worker match soon</p>
      <button>Dismiss</button>
    </div>
  );
}
