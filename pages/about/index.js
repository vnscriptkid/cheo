const ImageWithText = ({
  url = "",
  text = "",
  showHeader = false,
  component,
}) => (
  <div
    style={{
      height: "100vh",
      color: "white",
      padding: "0 10rem",
      backgroundImage: `url("${url}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {showHeader && (
      <h2 style={{ textAlign: "center", fontSize: "5rem", marginRight: 10 }}>
        ABOUT
      </h2>
    )}
    <div style={{ background: "rgba(0, 0, 0, 0.5)", padding: 10 }}>
      {text && <p>{text}</p>}
      {component && component}
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <ImageWithText
        url="/cheo/images/general/1.JPG"
        text={`“Who is she?” started as a photo reportage, then has evolved into a
            multimedia project of storytelling about the impacts of climate change
            on women under 25 from ethnic minorities in three provinces of Yen
            Bai, Hue, and Ninh Thuan.`}
        showHeader={true}
      />
      <ImageWithText
        url="/cheo/images/general/2.JPG"
        text={`“Who is she?” started as a photo reportage, then has evolved into a
            multimedia project of storytelling about the impacts of climate change
            on women under 25 from ethnic minorities in three provinces of Yen
            Bai, Hue, and Ninh Thuan.`}
      />

      <ImageWithText
        url="/cheo/images/general/3.JPG"
        text={`"Who is she?" aims to reach girls under 25 from three ethnic minority
          groups across Vietnam. This boundary placed on age and ethnic groups
          is both a strength and drawback of the project. On the one hand, this
          common ground will create a framework for the story. At the age of
          under 25, contributing to beterring the society seems too much to ask
          of. As I've just turned 25, I see myself in my character. At this age,
          our connection with the past, present, or future can sometimes be
          ambiguous. Besides, connections to our environment are impurified by
          many layers of information, and so it is not so easy to see the
          relationship between ourselves, nature, and our society. However, as I
          decide on my group of characters, I am expecting to encounter their
          unique, cultured reasoning in the way they react to their
          surroundings. Each female character from my project comes from an
          ethnical background, raised and nurtured by distinct culture, history,
          and tradition. Besides, elements from one’s bringing up, society, and
          education also contribute to a whole person and its experience. Each
          of these elements would affect the way the character responds to a
          context, giving life choices, or orienting their path now and in the
          future.`}
      />

      <ImageWithText
        url="/cheo/images/general/4.JPG"
        text={`One thing I found out by accident, beyond my expectation: All my characters are mothers. Their development to be mothers from a young girl also alters their interaction with the world. I love observing them in shoots of life in their diversity. Looking for characters following certain criteria allows me to understand their context better, in intimate response with other women around them. While focusing on the characters, I too had a chance to get to know the life of many other women, beautiful and courageous, those who are in the same context and have the same, secret worries that can only be shared among women themselves. They support, love one another and raise one another up, so no one will be left behind in life adversities. Another thing I admire about my characters is that they, all three of them, have decided to stay with the land of their childhood, though farming and cultivation life ensures many challenges.`}
      />
      <ImageWithText
        url="/cheo/images/general/5.1.JPG"
        text={`I initiated “Who is she?” with my concern for climate change and how it is being portrayed. At the same time, the story of gender equality is still often told with much hesitation. Climate change and gender inequality, put in larger contexts, could be both cause and effect to other problems.  During my journey of seeking and interacting with each character in their social circle, I’ve encountered many patterns and questions those patterns neccesitate. Climate change has been pushing people to move, and immigration has unfortunately entailed trafficking of children and women, family abuse, changes in matriarchal families, and child exploitation. In Dỗi Hamlet, coaches run every night, in them full of girls under working age hoping to get out of poverty, as their fields no longer suffice them and their family’s need.`}
      />
      <ImageWithText
        url="/cheo/images/general/5.2.JPG"
        text={`For the same reasons, in Ninh Thuận, many Raglai girls are hired for jobs in the cities, despite being at the age where they should be at school. In Điện Biên, child marriage and being tricked across borders remain nightmares. These problems have been creating changes in family and social structure, creating disruptions in family and relatives relationships, not just in the present. Children of high mountain areas in the project such as in Dỗi Hamlet (Nam Đông, Huế) or Phước Bình (Ninh Thuận) have to grow up in the absence of a father or mother. One of the two main breadwinners has to go to big cities to earn a living, because cultivating activities are not enough to support a living amid such a tight economic situation. This absence tremendously affects the education and personality formation of the next generation. Now, images of houses with only the elderly and children are familiar, as the parents have to live far away or work in the fields.`}
      />
      <ImageWithText
        url="/cheo/images/general/6.JPG"
        text={`Within this context, loss and lack of wisdom, customs, culture, family structure, and society are recognized. Adaptability to nature inherited from ancestors and previous generations are gradually lost as indigenous wisdom can no longer hold its place under strong attack from modern society. Especially to marginalized groups such as ethnic minorities, social difference and prejudices are deepened to create invisible barriers. These seemingly unrelated social issues are closely linked in a  picture broader than climate change and gender inequality. In another dimension of such a sensitive context we are having, how each community or character acts towards nature also creates unpredictable impacts.`}
      />
      <ImageWithText
        url="/cheo/images/general/7.JPG"
        text={`"Who is she?" was first shaped as a simple photo reportage. However, the deeper I went, the more I realized that there are many worthwhile vibrations I need to record. Therefore, besides words and images, I might have been a bit ambitious and saved every other small vibration to create a more vivid scene for the reader. During this journey, I realized in order for a work to be truly meaningful, I must make it "Live". The life of a work does not just stay at the outer appearance, in its images, videos, sounds, interviews, but it is alive so much as it creates a sincere vibe for the viewers, as well as inspires them to do something with it. For that, I am not going to limit "Who is she?" as my personal work, but I am offering it as communal, a work, a place where anyone can tell stories of women, education, and climate that they know . “She” is no longer just stories I seek, but will also be the stories of so many courageous, beautiful, hard-working women out there.`}
      />
      <ImageWithText
        url="/cheo/images/general/8.JPG"
        text={`Technically, this is also the journey where I see my own transformation within the process of experimentation. From a mere photo reportage, my ambition has helped me to open up different dimensions, from sound to movement, and so I myself can live in many new arrangements that each dimension brings. Just as each story will be presented by different instruments, it is a way for me to see a very personal development in my practice and thinking.`}
      />
      <ImageWithText
        url="/cheo/images/general/9.JPG"
        component={
          <div>
            <p>
              Personally, “Who is she?” is a project that comes as a personal
              pursuit where I store up reflections on people, climate change, or
              more deeply, how we are able to listen to stories that need to be
              listened to. But the deeper I go, the more I understand that it is
              essentially a community project, because it is built by many
              different people, and it contributes a different perspective to
              the community. I have to admit that if I had worked alone, “Who is
              she?” will never take shape. What is in front of the readers is
              the connection between many: from the characters who accept my
              interview and open their hearts to a (somewhat too talkative)
              stranger; to each person who supports me on every little thing on
              my journey: each resting place, each meal, each sleep, to my
              companions who suggested and supported me with new ideas and how
              to carry them out. If I mention all the names, the list would
              never end, but in my humble effort, I send my sincerest gratitude
              to:{" "}
            </p>
            <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
              <li> Miss Anne - my photography mentor.</li>
              <li>
                Girl Rising - Future Rising Fellowship for providing financial
                support for my project.
              </li>
              <li>
                {" "}
                My friends: cậu Thành, anh Vũ, Lan Chi, Minh Anh, anh Đức, Quang
                Minh, Thư Vũ, anh Quang. These are the people who provided
                technical and logistical advice throughout the project.
              </li>
              <li>{`The people who supported me throughout the journey of my project like Bé's family in Nam Đông, Khang A Tủa's, cậu Thành's, chú Quang's, Thu Vu's, Mr. Hải, and Ms. Giang , Ms. Vân, and my family for their great love and support.`}</li>
            </ul>
          </div>
        }
      />
      <ImageWithText
        url="/cheo/images/general/10.JPG"
        text={`Especially, I send my gratitude to Thu of Dỗi Hamlet, to Mua of Mù Cang Chải, Quyền of Phước Bình - they are the characters who have opened their hearts and accepted such a stranger like me into their lives. I am grateful, because I know it is not that easy to let a stranger come and document even a small chapter of their life. Along the way, they had taught me many lessons, showing me the beauty of those human faces, of pure and innocent souls, and helping me realize that strength and tenderness could always coexist in one same person. They make me believe in the work I am doing: that it is necessary to record and narrate shades of life in their unique vibration.`}
      />
      <ImageWithText
        url="/cheo/images/general/11.JPG"
        text={`On the other hand, I am hoping the simple stories from my motherland can be an inspiration to others of faraway lands. There are always people who silently endure the changes of nature, and there are always people who are trying to alter their situation with whatever they have. And women, more than what I can put into words and pictures, are truly beautiful creatures of this world, much stronger and braver than they appear to be.`}
      />

      <ImageWithText
        url="/cheo/images/general/12.JPG"
        component={
          <div style={{ lineHeight: 2 }}>
            <h3 style={{ textAlign: "center" }}>Project Team</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>Producer: Alex Nguyen</li>
              <li>
                <strong>Web Architect:</strong> Nguyen Trung Thanh
              </li>
              <li>Translator: Hoang Nguyen Minh Anh</li>
              <li>Photography Advisor: Anne</li>
              <li>Technical Support: Duong Thanh Quang</li>
              <li>
                The project is financed by Future Rising Fellow Fund 2021.
              </li>
            </ul>
          </div>
        }
      />
    </>

    // <p>{``}</p>
  );
};

export default About;
