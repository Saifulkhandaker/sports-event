import aboutus from "../../src/assets/Images/About Us Banner.jpg";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 mb-5 items-center  ">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <div>
          <img src={aboutus} alt="" />
        </div>
        <div>
          <h2 className="text-3xl mb-5 font-bold">About Us</h2>
          <h3 className="text-xl font-medium">
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
    </div>
  );
};

export default AboutUs;
