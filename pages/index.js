import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import VietnameMap from "../components/VietnamMap";
import Router from "next/router";

export default function Home({}) {
  return (
    <>
      <div className="home">
        <div className="home-slider">
          <div
            className="home-slider-item home-slider-img home-slider-img-1"
            onClick={() => Router.push("/about")}
          >
            <div id="map">
              <VietnameMap />
            </div>
          </div>
          <div className="home-slider-item home-slider-img home-slider-img-2"></div>
          <div className="home-slider-item home-slider-img home-slider-img-3"></div>
          <div className="home-slider-item home-slider-img home-slider-img-4"></div>
          <div className="home-slider-item home-slider-img home-slider-img-5"></div>
        </div>
        <div
          className="text-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "white",
            transform: "translate(-50%, -50%)",
            fontSize: "2rem",
          }}
        >
          <h1>WHO IS SHE?</h1>
        </div>
        <p className="home-text-bottom">
          <span className="love">&#9829;</span>
          Supported by Girl Rising (Future Rising Fellowship)
          <span className="love">&#9829;</span>
        </p>
        {/* <div className="home-content">
          <div className="home-text">
            <div className="home-text-middle">
              <h1 className="home-text-heading">Who is she?</h1>
              <p className="home-text-desc">
                is an ongoing documentation that will seek out and tell the
                stories of Vietnamese girls <br></br>
                who are part of the marginalized group most affected by climate
                change.
              </p>

              <p className="home-text-desc">
                However, because of their diverse backgrounds, education, and
                traditions, <br></br>each girl would try a different approach to
                dealing with the situation.
              </p>
              <p className="home-text-desc">
                It is also a project to discover &ldquo;unknown&rdquo; things
                because the effects of climate change on these girls <br></br>{" "}
                would be completely different and would lead them to particular
                life choices.
              </p>
            </div>
          </div>
          <p className="home-text-bottom">
            <span className="love">&#9829;</span>
            Supported by Girl Rising (Future Rising Fellowship)
            <span className="love">&#9829;</span>
          </p>
        </div> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
