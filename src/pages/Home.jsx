import Hero from "../components/hero/Hero"
import Skill from "../components/skills/skill"
import Header from "../layout/header/header"
import Project from "../components/project/Project"
import Contact from "../components/contacts/Contact"

const Home = ()=> {
    return(
     <>
     <Header/>
     <Hero/>
     <Skill/>
     <Project/>
     <Contact/>
     </>
    )
} 
export default Home