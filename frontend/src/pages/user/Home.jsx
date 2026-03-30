import HeroSection from "../../components/homePage/HeroSection";
import HomeCta from "../../components/homePage/HomeCta";
import HomeKeunggulan from "../../components/homePage/HomeKunggulan";
import HomeTentangKami from "../../components/homePage/HomeTentangKami";

function Home() {
    return (
        <div>
            <HeroSection />
            <HomeTentangKami />
            <HomeKeunggulan />
            <HomeCta />
        </div>
    );
}

export default Home;