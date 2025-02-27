import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="logo">
            <img src="public/KaziLink 1.png" alt="logo" />
            <h1>KaziLink</h1>
        </div>
        <div className="navbar-buttons">
            <button>Join as Worker</button>
            <button>Join as Employer</button>
        </div>
    </div>
  )
}

export default Navbar