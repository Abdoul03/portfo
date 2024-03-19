import "../styles/about.css"

const About = () => {
    const languages = [
      {id:1,name: "HTML"},
      {id:2,name: "CSS"},
      {id:3,name:"JavaScript"},
      {id:4,name:"React JS"},
      {id:5,name:"Node JS"},
      {id:6,name:"MySQL"},
        
    ]
  return (
    <div id="about">
        <h2 className="title2">About me</h2>
        <p>
          I&apos;m a student in Computer Management at the University Institute of Management (IUG) in Bamako.<br />
          I&apos;ve always loved computers science and technology in general, which is why I&apos;m always on the 
          lookout to performe me.    
        </p>
        <p className="lang">I work with..</p>
        <ul className="listes">
          {languages.map((language)=> <li key={language.id}>{language.name}</li>)}
        </ul>
    </div>
  )
}

export default About