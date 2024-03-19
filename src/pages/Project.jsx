import {GitHub} from "@mui/icons-material"
import "../styles/project.css"

const Project = () => {
  return (
    <div>
        <h2 className="title">My project</h2>
        <div className="card">
            <div className="item">
                <h2>Web_site</h2>
                <p>I created this web-site when I was learning HTML, CSS and JavaScript.</p>
                <a href="https://github.com/Abdoul03/web_site"><GitHub fontSize="large"/></a>
            </div>
            <div className="item">
                <h2>Calculator</h2>
                <p>I recreated this calculator to reinforce my knowledge of HTML, CSS and JavaScript.</p>
                <a href="https://github.com/Abdoul03/calculette"><GitHub fontSize="large"/></a>
            </div>
            <div className="item">
                <h2>React-deploy</h2>
                <p>a project made with HTML and CSS for the school taken over in reactjs.</p>
                <a href="https://github.com/Abdoul03/react-deploy"><GitHub fontSize="large"/></a>
            </div>
            <div className="item">
                <h2>Morpion</h2>
                <p>a game I made when I was learning reactjs.</p>
                <a href="https://github.com/Abdoul03/morpion"><GitHub fontSize="large"/></a>
            </div>
            <div className="item">
                <h2>ChefMixBack</h2>
                <p>the backend of my personal project, a food delivery application in NodeJS.</p>
                <a href="https://github.com/Abdoul03/chefMixBack"><GitHub fontSize="large"/></a>
            </div>
        </div>
    </div>
  )
}

export default Project