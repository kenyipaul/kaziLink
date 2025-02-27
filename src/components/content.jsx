import girl from "/carpenter-cutting-mdf-board-inside-workshop copy 2.png";
import background from "/Vector 1.png";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { LuMessageCircleMore } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Content() {

    const navigate = useNavigate();
    
	return (
		<div className="hero-container">
			<div className="contents">
				<div className="right-content">
					<h1>Verify Your Work. Open New Doors</h1>
					<h2>Your skills deserve recognition.</h2>
					<p>Every job builds experience. Every experience builds skill. KaziLink transforms your work history into a verified digital identity that employers trust. </p>
                    <div className="buttons">
                        <button onClick={() => navigate("/register")}>Join as Worker</button>
                        <button onClick={() => navigate("/register/employer")}>Join as Employer</button>
                    </div>
                </div>

				<div className="left-content">
					<img src="/Frame.png" alt="" />
				</div>
			</div>

			<div className="box-section">
				{boxInfo.map((item) => (
					<div key={item.id} className="box-container">
						<div className="box-icon">{item.icon}</div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}




const boxInfo = [
    {
        id: "1",
        icon: <MdOutlineVerifiedUser style={{ fontSize: "30px" }} />,
        title: "Build Your Digital Identity",
        description:
            "No formal employment history? No problem. KaziLink verifies your informal work experience and skills, creating a professional identity you can share anywhere.",
    },
    {
        id: "2",
        title: "Get Discovered by Employers",
        icon: <CiGlobe style={{ fontSize: "30px" }} />,
        description:
            "Employers are looking for reliable, skilled workers. Your verified KaziLink profile helps them find you based on your real experience and abilities.",
    },
    {
        id: "3",
        icon: <LuMessageCircleMore style={{ fontSize: "30px" }} />,
        title: "Simple Verification Process",
        description:
            "Upload basic information about your work history. We verify it through references and our trusted network. Your verified profile is ready to open new opportunities.",
    },
    {
        id: "4",
        icon: <LuMessageCircleMore style={{ fontSize: "30px" }} />,
        title: "Access Opportunities Anywhere",
        description:
            "Your digital work identity works across platforms – accessible by SMS, smartphone app, or web. Share your verification with anyone, anywhere.",
    },
];