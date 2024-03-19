import { Email, GitHub, LinkedIn, X } from "@mui/icons-material"
import programming from "../assets/programming.svg"
import Header from "../components/Header"
import "../styles/home.css"
import About from "./About"
import Project from "./Project"

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="contener">
        <div className="photo">
          <img src={programming} alt="photo"/>
        </div>
        <div className="presentation">
          <div className="salut">Hi<div className="emoji">👋</div>, my name is <br /></div>
          <h1 className="name">Abdoul Ibrahima Samaké</h1>
          <p>I&apos;m a web developer full-stack localited in Bamako <br /></p>
          <p>I&apos;m passionate about technology</p>
          <div className="icons">
          <div><a href="https://github.com/Abdoul03" target="_blank" alt="github"><GitHub fontSize="large"/></a></div> 
          <div><a href="https://www.linkedin.com/in/abdoul-ibrahima-samak%C3%A9-573159204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLuFRpBQ3Qhay5r0T11nwiw%3D%3D" target="_blank"><LinkedIn fontSize="large"/></a></div>
          <div><a href="mailto:samabdoul03@gmail.com"><Email fontSize="large"/></a></div>
          <div><a href="https://twitter.com/SamaIbrahima"><X fontSize="large"/></a></div>
          </div>
         
        </div>
        <div className="down">
          👇
        </div>
      </div>
      <About/>
      <hr />
      <Project/>
    </div>
  )
}

export default Home