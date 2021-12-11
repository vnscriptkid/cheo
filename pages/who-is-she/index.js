// import img from "../../public/images/mu-cang-chai/_DSC0094.jpg";
// import style from "./style.scss";

import Carousel from "react-multi-carousel";

// export default function Article({}) {
//   return (
//     <>
//       {/* <img src="images/mu-cang-chai/_DSC0094.jpg" alt="image-1" /> */}
//       <div className="bg-image img1"></div>
//       <div className="bg-image img2"></div>
//       <div className="bg-image img3"></div>
//       <div className="bg-image img4"></div>
//       <div className="bg-image img5"></div>
//       <div className="bg-image img6"></div>

//       <div className="bg-text">TEXT</div>
//     </>
//   );
// }

const Header = () => {
  return (
    <header className="header">
      <span className="logo">Who is she?</span>
      <ul className="actions-list">
        <li className="action-list-item">About</li>
        <li className="action-list-item">Showcase</li>
        <li className="action-list-item">More</li>
      </ul>
    </header>
  );
};

const Banner = () => {
  return (
    <div className="bg-image img1 banner">
      <div className="banner-content">
        <h1 className="banner-header">Where Will Everyone Go?</h1>
        <p className="banner-desc">
          ProPublica and The New York Times Magazine, with support from the
          Pulitzer Center, have for the first time modeled how climate refugees
          might move across international borders. This is what we found.
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <h2>Who is she? </h2>

      <p>
        The IPCC (The Intergovernmental Panel on Climate Change) has identified
        Vietnam as one of the countries most likely to be affected by climate
        change due to its extensive coastline, vast deltas and floodplains,
        location in the path of typhoons, and large population living in
        poverty. For the last decade, there have been accountable difficulties
        and pains experienced by Vietnamese people.
      </p>

      <p>
        &ldquo;Who is she?&rdquo; is an ongoing documentation that will seek out
        and tell the stories of Vietnamese girls who are part of the
        marginalized group most affected by climate change. However, because of
        their diverse backgrounds, education, and traditions, each girl would
        try a different approach to dealing with the situation. It is also a
        project to discover &ldquo;unknown&rdquo; things because the effects of
        climate change on these girls would be completely different and would
        lead them to particular life choices.
      </p>

      <p>
        Project is in process with support from Girl Rising (Future Rising
        Fellowship).
      </p>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ImageSlider = () => (
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    infinite={true}
    responsive={responsive}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <div>
      <img
        className="d-block w-100 slider-img"
        src="images/mu-cang-chai/_DSC0104.jpg"
        alt="First slide"
      />
    </div>
    <div>
      <img
        className="d-block w-100 slider-img"
        src="images/mu-cang-chai/_DSC0110.jpg"
        alt="Second slide"
      />
    </div>
    <div>
      <img
        className="d-block w-100 slider-img"
        src="images/mu-cang-chai/_DSC0115.jpg"
        alt="Third slide"
      />
    </div>
    <div>
      <img
        className="d-block w-100 slider-img"
        src="images/mu-cang-chai/_DSC0190.jpg"
        alt="Third slide"
      />
    </div>
    <div>
      <img
        className="d-block w-100 slider-img"
        src="images/mu-cang-chai/_DSC0200.jpg"
        alt="Third slide"
      />
    </div>
  </Carousel>
);

export default function Home({}) {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <ImageSlider />
    </>
  );
}
