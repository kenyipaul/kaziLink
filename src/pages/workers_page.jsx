export default function WorkersPage() {
    return (
        <div className="workers-page">

            <div className="workers-page-content">
                <div className="top-bar">
                    <h1>Find Verified, Skilled Workers You Can Trust</h1>
                    <p>Discover reliable workers with proven skills and experience. KaziLink's verification system ensures you connect with qualified candidates for your specific needs.</p>

                    <div className="input-area">
                        <input type="text" name="" id="" placeholder="Search by name or skill" />
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
                    
                    <Worker />
                    <Worker />
                    <Worker />
                    <Worker />
                    <Worker />
                    <Worker />
                    <Worker />

                </div>
            </div>

        </div>
    )
}


function Worker() {
    return (
        <div className="worker">
            <div className="profile"></div>
            <div className="content">
                <div>
                    <h1>Claudine Uwimana</h1>
                    <p>Cleaning, Cooking, Washing</p>
                </div>
                <button>View Profile</button>
            </div>
        </div>
    )
}