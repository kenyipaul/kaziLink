import './content.css'
import girl from "/public/carpenter-cutting-mdf-board-inside-workshop copy 2.png"
import background from "/public/Vector 1.png"
const content = () => {
  return (
    <div className="content-container">
      <div className="right-content">
        <h1>Verify Your Work.</h1>
        <h1>Open New Doors</h1>
        <h2>Your skills deserve recognition.</h2>
        <p>
          Every job builds experience. Every experience builds
          <br /> skill. KaziLink transforms your work history into a verified
          <br />
          digital identity that employers trust.
        </p>
      </div>
      <div className="left-content">
        <img src={background} alt="background" className='background1' />
        <img src={girl} alt="girl" />
      </div>
    </div>
  );
}

export default content