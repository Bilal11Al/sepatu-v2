import AboutCta from "../../components/aboutPage/AboutCta";
import AboutSejarah from "../../components/aboutPage/AboutSejarah";
import AboutTestimoni from "../../components/aboutPage/AboutTestimoni";
import AboutVisiMisi from "../../components/aboutPage/AboutVisiMisi";
import HeroAbout from "../../components/aboutPage/HeroAbout";

function About() {
    return (
        <div>
            <HeroAbout />
            <AboutSejarah />
            <AboutTestimoni />
            <AboutVisiMisi />
            <AboutCta />
        </div>
    )
}


export default About;