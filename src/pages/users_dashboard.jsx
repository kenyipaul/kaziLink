import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom";
import { setAuthorized, setUser } from "../store/states/user.state.js";

export default function UsersDashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userState = useSelector(store => store.userState)

    const logout = () => {
        if (confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("_kazi_user")
            localStorage.removeItem("_kazi_token")

            dispatch(setUser({}))
            dispatch(setAuthorized(false))

            navigate("/")
        }
    }

    return (
        <div className="users-dashboard">

            <div className="user-info-container">

                <section>
                    <div className="profile-image"></div>
                    <div className="user-info">
                        <h1>{userState.userData.Fname} {userState.userData.Lname}, 26</h1>
                        <h4>{userState.userData.email}</h4>
                        <h4>User Since: {new Date(userState.userData.createdAt).toLocaleDateString()}</h4>
                        <div className="reports">
                            <h3><svg width="1.3rem" height="1.3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z" fill="currentColor"></path> </g></svg>Verified</h3>
                            <h3><svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8" fill="currentColor"></circle> </g></svg>Available for work</h3>
                        </div>
                        <div className="buttons">
                            <button>Edit Profile</button>
                            <button onClick={logout}>Log Out</button>
                        </div>
                    </div>

                </section>

                <section>
                    <div className="about-section section">
                        <div className="header-bar">
                            <h1>About Claudine</h1>
                            <button><svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 21H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Edit</button>
                        </div>
                        <p>I am a detail-oriented cleaning professional with 6 years of experience working in private homes and small offices in Kigali. I specialize in deep cleaning services and organizing living spaces. I am reliable, trustworthy, and take pride in transforming spaces to create clean, comfortable environments for my clients.</p>
                    </div>

                    <div className="skill-section section">
                        <h1>Skills</h1>
                        <div className="skill-grid">
                            {
                                Object.values(userState.userData).length > 0 && userState.userData.skills.map((data, key) => {
                                    return <p key={key}>{data}</p>
                                })
                            }
                        </div>
                    </div>

                    <div className="skill-section section">
                        <h1>Values</h1>
                        <div className="skill-grid">
                            <p>Honesty</p>
                            <p>Good Communicator</p>
                            <p>God Fearing</p>
                        </div>
                    </div>


                    <div className="work-history-section section">
                        <h1>Work History</h1>

                        <div className="work-history-grid">

                            <div className="work-history-skeleton">
                                <h3>Build Your Work History</h3>
                                <p>Start adding your work experience to showcase your skills and achievements.</p>
                                <button onClick={() => navigate("/jobs")}>Find a Job</button>
                            </div>
                            {/*<div className="work-history">*/}
                            {/*    <h4>Fulltime</h4>*/}
                            {/*    <h1>Cleaning Maid</h1>*/}
                            {/*    <p>A cleaner needed is Gismenti for a full time job for the month of January</p>*/}
                            {/*    <button>View job</button>*/}
                            {/*</div>*/}
                            {/*<div className="work-history">*/}
                            {/*    <h4>Fulltime</h4>*/}
                            {/*    <h1>Cleaning Maid</h1>*/}
                            {/*    <p>A cleaner needed is Gismenti for a full time job for the month of January</p>*/}
                            {/*    <button>View job</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>


                    <div className="testimonial-section section">
                        <h1>What Employers say</h1>

                        <div className="testimonial-grid">

                            <div className="testimony-skeleton">
                                <h3>No Testimonials</h3>
                                <p>Start collecting testimonials to showcase your positive impact.</p>
                            </div>

                            {/* <div className="testimony">
                                <svg width="5rem" height="5rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>quote_left_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Editor" transform="translate(-624.000000, -144.000000)" fill-rule="nonzero"> <g id="quote_left_fill" transform="translate(624.000000, 144.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M8.40001,6.20006 C8.84184,5.86869 9.46864,5.95823 9.80001,6.40005 C10.1314,6.84188 10.0418,7.46868 9.60002,7.80006 C8.03605,8.97305 7.13907,10.1135 6.62712,11.1097 C6.90615,11.0381 7.19863,11.0000002 7.5,11.0000002 C9.433,11.0000002 11,12.567 11,14.5000002 C11,16.433 9.433,18.0000002 7.5,18.0000002 C5.58635,18.0000002 4.0314,16.4642 4.00047,14.5579 C3.91027,13.6929 3.92344,12.4169 4.50804,10.9437 C5.10548,9.43818 6.27242,7.79577 8.40001,6.20006 Z M17.4,6.20006 C17.8418,5.86869 18.4686,5.95823 18.8,6.40005 C19.1314,6.84188 19.0418,7.46868 18.6,7.80006 C17.036,8.97305 16.1391,10.1135 15.6271,11.1097 C15.9061,11.0381 16.1986,11.0000002 16.5,11.0000002 C18.433,11.0000002 20,12.567 20,14.5000002 C20,16.433 18.433,18.0000002 16.5,18.0000002 C14.5863,18.0000002 13.0314,16.4642 13.0005,14.5579 C12.9103,13.6929 12.9234,12.4169 13.508,10.9437 C14.1055,9.43818 15.2724,7.79577 17.4,6.20006 Z" id="形状结合" fill="currentColor"> </path> </g> </g> </g> </g></svg>
                                <p>Claudine transformed our home with her attention to detail. She's reliable and trustworthy.</p>
                                <h4>Sarah, Former Employer</h4>
                            </div>
                            <div className="testimony">
                                <svg width="5rem" height="5rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>quote_left_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Editor" transform="translate(-624.000000, -144.000000)" fill-rule="nonzero"> <g id="quote_left_fill" transform="translate(624.000000, 144.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M8.40001,6.20006 C8.84184,5.86869 9.46864,5.95823 9.80001,6.40005 C10.1314,6.84188 10.0418,7.46868 9.60002,7.80006 C8.03605,8.97305 7.13907,10.1135 6.62712,11.1097 C6.90615,11.0381 7.19863,11.0000002 7.5,11.0000002 C9.433,11.0000002 11,12.567 11,14.5000002 C11,16.433 9.433,18.0000002 7.5,18.0000002 C5.58635,18.0000002 4.0314,16.4642 4.00047,14.5579 C3.91027,13.6929 3.92344,12.4169 4.50804,10.9437 C5.10548,9.43818 6.27242,7.79577 8.40001,6.20006 Z M17.4,6.20006 C17.8418,5.86869 18.4686,5.95823 18.8,6.40005 C19.1314,6.84188 19.0418,7.46868 18.6,7.80006 C17.036,8.97305 16.1391,10.1135 15.6271,11.1097 C15.9061,11.0381 16.1986,11.0000002 16.5,11.0000002 C18.433,11.0000002 20,12.567 20,14.5000002 C20,16.433 18.433,18.0000002 16.5,18.0000002 C14.5863,18.0000002 13.0314,16.4642 13.0005,14.5579 C12.9103,13.6929 12.9234,12.4169 13.508,10.9437 C14.1055,9.43818 15.2724,7.79577 17.4,6.20006 Z" id="形状结合" fill="currentColor"> </path> </g> </g> </g> </g></svg>
                                <p>Claudine transformed our home with her attention to detail. She's reliable and trustworthy.</p>
                                <h4>Sarah, Former Employer</h4>
                            </div>
                            <div className="testimony">
                                <svg width="5rem" height="5rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>quote_left_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Editor" transform="translate(-624.000000, -144.000000)" fill-rule="nonzero"> <g id="quote_left_fill" transform="translate(624.000000, 144.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M8.40001,6.20006 C8.84184,5.86869 9.46864,5.95823 9.80001,6.40005 C10.1314,6.84188 10.0418,7.46868 9.60002,7.80006 C8.03605,8.97305 7.13907,10.1135 6.62712,11.1097 C6.90615,11.0381 7.19863,11.0000002 7.5,11.0000002 C9.433,11.0000002 11,12.567 11,14.5000002 C11,16.433 9.433,18.0000002 7.5,18.0000002 C5.58635,18.0000002 4.0314,16.4642 4.00047,14.5579 C3.91027,13.6929 3.92344,12.4169 4.50804,10.9437 C5.10548,9.43818 6.27242,7.79577 8.40001,6.20006 Z M17.4,6.20006 C17.8418,5.86869 18.4686,5.95823 18.8,6.40005 C19.1314,6.84188 19.0418,7.46868 18.6,7.80006 C17.036,8.97305 16.1391,10.1135 15.6271,11.1097 C15.9061,11.0381 16.1986,11.0000002 16.5,11.0000002 C18.433,11.0000002 20,12.567 20,14.5000002 C20,16.433 18.433,18.0000002 16.5,18.0000002 C14.5863,18.0000002 13.0314,16.4642 13.0005,14.5579 C12.9103,13.6929 12.9234,12.4169 13.508,10.9437 C14.1055,9.43818 15.2724,7.79577 17.4,6.20006 Z" id="形状结合" fill="currentColor"> </path> </g> </g> </g> </g></svg>
                                <p>Claudine transformed our home with her attention to detail. She's reliable and trustworthy.</p>
                                <h4>Sarah, Former Employer</h4>
                            </div> */}
                        </div>
                    </div>

                </section>


            </div>

        </div>
    )
}