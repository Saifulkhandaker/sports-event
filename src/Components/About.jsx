import aboutimg from "../assets/Images/About Page.jpg"
import bannerimg from "../assets/Images/main_banner.jpg"

const About = () => {
    return (
        <div>
            <div className="space-y-5 mt-5 mb-10">
                <img className="text-center items-center w-3/4 mx-auto" src={aboutimg} alt="" />
                <h1 className="text-left w-11/12 mx-auto font-bold text-3xl mt-5">About Us</h1>
                <h3 className="text-xl w-11/12 mx-auto font-medium">
            Welcome to the ultimate hub for
            cycling enthusiasts and adventurers! We are passionate about all
            things cycling and are thrilled to share our love for this
            exhilarating sport with you.At ours
            we believe that cycling is more than just a hobby; it's a lifestyle
            that promotes fitness, environmental sustainability, and a sense of
            freedom. Whether you're a seasoned cyclist or just starting on your
            two-wheeled journey, we have something for everyone. Our mission is
            simple: to connect cyclists from all walks of life, inspire a sense
            of community, and provide valuable resources to help you make the
            most of your cycling experience
          </h3>
            </div>
            
        </div>
    );
};

export default About;