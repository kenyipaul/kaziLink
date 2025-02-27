export default function JobsPage() {
    return (
        <div className="jobs-page">
            <div className="jobs-page-content">

                <div className="top-bar">
                    <h1>Find Jobs That Value Your Skills</h1>
                    <p>Your experience matters. On KaziLink, employers are looking for workers with real-world skills and verified work histories—exactly like yours.</p>

                    <div className="input-area">
                        <input type="text" name="" id="" placeholder="Search" />
                    </div>
                    <div className="tags">
                        <button>Most Recent</button>
                        <button>Most Applications</button>
                        <button>Highest Pay</button>
                        <button>Near Me</button>
                        <button>Fulltime</button>
                    </div>
                </div>

                <div className="jobs-list">

                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />

                </div>

            </div>
        </div>
    )
}


function Job() {
    return (
        <div className="job">
            <div className="image">
            <svg width="3rem" height="3rem" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <g> <g> <path class="duotone_een" d="M16.294,11c-0.236,0-0.404-0.144-0.441-0.332c-0.336-1.705-3.307-1.633-4.483-1.699 C11.106,8.954,11,8.778,11,8.563V7.311C11,7.087,11.033,7,11.311,7h9.161c0.231,0,0.432,0.082,0.488,0.264l0.985,2.186 c0.076,0.246-0.145,0.497-0.458,0.51c-1.182,0.05-2.048,0.67-2.36,0.929C19.037,10.962,18.929,11,18.812,11H16.294z M11.026,22 c0.05,2.301,0.285,4.677,0.382,5.576C11.432,27.792,11.648,28,11.907,28h8.341c0.264,0,0.483-0.181,0.5-0.402 c0.067-0.879,0.219-3.095,0.233-5.598H11.026z"></path> </g> <g> <path class="duotone_een" d="M16.294,11c-0.236,0-0.404-0.144-0.441-0.332c-0.336-1.705-3.307-1.633-4.483-1.699 C11.106,8.954,11,8.778,11,8.563V7.311C11,7.087,11.033,7,11.311,7h9.161c0.231,0,0.432,0.082,0.488,0.264l0.985,2.186 c0.076,0.246-0.145,0.497-0.458,0.51c-1.182,0.05-2.048,0.67-2.36,0.929C19.037,10.962,18.929,11,18.812,11H16.294z M11.026,22 c0.05,2.301,0.285,4.677,0.382,5.576C11.432,27.792,11.648,28,11.907,28h8.341c0.264,0,0.483-0.181,0.5-0.402 c0.067-0.879,0.219-3.095,0.233-5.598H11.026z"></path> </g> </g> <path class="duotone_twee" d="M20.979,21c-0.039-3.642-0.421-7.596-1.801-8.877C19.087,12.038,18.962,12,18.837,12h-2.376 c-0.227,0-0.431,0.099-0.483,0.284c-0.954,3.391-3.788,3.272-4.527,5.078c-0.314,0.768-0.426,2.136-0.434,3.638H20.979z"></path> </g> </g></svg>
            </div>
            <div className="content">
                <h3>Gig</h3>
                <h1>Painting Job - Gisozi</h1>
                <p>A painter is needed for a 3 day work in Gisozi</p>
                <button>View Job</button>
            </div>
        </div>
    )
}