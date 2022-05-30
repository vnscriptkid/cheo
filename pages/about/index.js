import { useState } from "react";
import Header from "../shared/Header";

const ImageWithText = ({
  url = "",
  text = "",
  showHeader = false,
  component,
  lang = "en",
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
      <h2
        style={{
          textAlign: "center",
          fontSize: "5rem",
          marginRight: 10,
          flex: 1,
        }}
      >
        {lang === "en" ? "ABOUT" : "Về Dự Án"}
      </h2>
    )}
    <div style={{ background: "rgba(0, 0, 0, 0.5)", padding: 10, flex: 2 }}>
      {text && <p>{text}</p>}
      {component && component}
    </div>
  </div>
);

const About = () => {
  const [lang, setLang] = useState("en");

  const isEnglish = lang === "en";

  return (
    <>
      <Header
        isEnglish={isEnglish}
        onEnClick={() => setLang("en")}
        onVnClick={() => setLang("vn")}
      />

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/1.JPG"
          text={`“Who is she?” started as a photo reportage, then has evolved into a
          multimedia project of storytelling about the impacts of climate change
          on women under 25 from ethnic minorities in three provinces of Yen
          Bai, Hue, and Ninh Thuan.`}
          showHeader={true}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/1.JPG"
          text={`“Who is she?”  khởi điểm là một phóng sự ảnh,  phát triển thành dự án kể chuyện đa phương tiện về tác động của biến đổi khí hậu đối với  phụ nữ dưới 25 tuổi thuộc các cộng đồng dân tộc thiểu số từ ba tỉnh Yên Bái, Huế, và Ninh Thuận. `}
          showHeader={true}
          lang="vi"
        />
      )}

      {isEnglish ? (
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
      ) : (
        <ImageWithText
          url="/cheo/images/general/3.JPG"
          text={`“Who is she?” chọn tiếp cận các bạn nữ dưới 25 tuổi thuộc ba nhóm cộng đồng dân tộc thiểu số khác nhau dọc khắp Việt Nam. Sự giới hạn mà dự án đặt ra về tuổi tác và nhóm tộc tính vừa là điểm hay vừa là điểm yếu của dự án. Một phần, điểm chung này sẽ giới hạn câu chuyện của nhân vật vì ở lứa tuổi dưới 25,  đòi hỏi các bạn đóng góp sức mình để thay đổi xã hội hay cộng đồng các bạn sống dường như khá khó khăn. Tôi cũng nhìn thấy cả bản thân mình trong chính các nhân vật nữ khi vừa bước qua tuổi 25 cách đây không lâu. Ở lứa tuổi này, tìm thấy sự gắn kết với quá khứ, hiện tại, hay tương lai đôi lúc vẫn còn mơ hồ. Ngoài ra, sự gắn kết với môi trường sống đã bị nhiều lớp thông tin bao phủ và không dễ để có thể nhìn thấu được mối liên hệ chặt chẽ giữa bản thân, thiên nhiên và xã hội. Tuy nhiên, khi chọn nhóm nhân vật của mình, tôi kỳ vọng được nhìn thấy sự khác biệt của họ trong cách suy nghĩ, lựa chọn hay phản ứng lại với bối cảnh xung quanh. Mỗi nhân vật nữ từ dự án xuất thân từ các nhóm dân tộc khác nhau, được nuôi dưỡng bởi những lớp lang văn hóa, lịch sử, truyền thống khác biệt. Cùng với đó, yếu tố gia đình, xã hội và vai trò của giáo dục trong cuộc đời từng người tạo nên các biến số thú vị. Từng khía cạnh sẽ ảnh hưởng tới cách từng nhân vật hồi đáp lại với bối cảnh, đưa ra những lựa chọn cuộc đời khác nhau hay hình dung về đời sống hiện tại và tương lai của mình.`}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/4.JPG"
          text={`One thing I found out by accident, beyond my expectation: All my characters are mothers. Their development to be mothers from a young girl also alters their interaction with the world. I love observing them in shoots of life in their diversity. Looking for characters following certain criteria allows me to understand their context better, in intimate response with other women around them. While focusing on the characters, I too had a chance to get to know the life of many other women, beautiful and courageous, those who are in the same context and have the same, secret worries that can only be shared among women themselves. They support, love one another and raise one another up, so no one will be left behind in life adversities. Another thing I admire about my characters is that they, all three of them, have decided to stay with the land of their childhood, though farming and cultivation life ensures many challenges.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/4.JPG"
          text={`Một điều mà tôi không hình dung từ ban đầu là việc các nhân vật tôi tìm kiếm, một cách vô tình, đều đã là mẹ. Sự phát triển và trải nghiệm từ một thiếu nữ đến một người phụ nữ cũng ảnh hưởng nhiều đến cách các nhân vật tương tác với thế giới xung quanh họ. Đây cũng là một trong những điều tôi yêu thích khi được nhìn ngắm các nhân vật trong nhiều khung hình khác nhau với những sắc thái riêng biệt. Đi tìm những nhân vật nữ với những tiêu chí nhất định cũng là cơ hội để tôi hiểu thêm về bối cảnh xung quanh họ, trong sự phản hồi thân mật với những người phụ nữ khác. Trong quá trình tiếp cận nhân vật chính, tôi luôn có cơ hội để biết thêm về cuộc đời của rất nhiều người phụ nữ can đảm và đẹp đẽ khác, những người thuộc chung cộng đồng với nhân vật, chia sẻ những nỗi niềm riêng tư mà có lẽ, chỉ có phụ nữ mới có chút không gian để nói cùng nhau. Họ nâng đỡ nhau, yêu thương nhau, phụ giúp nhau để đi qua nhiều khó khăn mà cuộc sống đặt ra. Một điều khác mà tôi trân trọng ở những nhân vật của mình là cả ba đều chọn ở lại với mảnh đất đã nuôi dưỡng họ dù cuộc sống gắn với nương rẫy ruộng đồng còn đầy bấp bênh. `}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/5.1.JPG"
          text={`I initiated “Who is she?” with my concern for climate change and how it is being portrayed. At the same time, the story of gender equality is still often told with much hesitation. Climate change and gender inequality, put in larger contexts, could be both cause and effect to other problems.  During my journey of seeking and interacting with each character in their social circle, I’ve encountered many patterns and questions those patterns neccesitate. Climate change has been pushing people to move, and immigration has unfortunately entailed trafficking of children and women, family abuse, changes in matriarchal families, and child exploitation. In Dỗi Hamlet, coaches run every night, in them full of girls under working age hoping to get out of poverty, as their fields no longer suffice them and their family’s need.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/5.1.JPG"
          text={`Với “Who is she?”, bản thân tôi khởi nguồn với câu hỏi về biến đổi khí hậu và cách biến đổi khí hậu đang được kể. Cùng với đó, câu chuyện về giới vẫn luôn là thách thức trong nhiều bối cảnh. Tuy nhiên, biến đổi khí hậu hay bất bình đẳng giới đặt trong bối cảnh rộng hơn của nhiều yếu tố khác, vừa là nguyên nhân vừa là hậu quả. Quá trình tìm kiếm nhân vật và tiếp xúc với bối cảnh đời sống từng cá nhân và trong liên hệ cộng đồng đặt ra nhiều câu hỏi về những mẫu lặp. Tác động của biến đổi khí hậu làm đẩy nhanh quá trình di cư ở nhiều địa phương, đẩy đến những hệ lụy liên quan đến buôn bán trẻ em và phụ nữ hay việc bạo hành trong gia đình, thay đổi cấu trúc gia đình mẫu hệ và bóc lột sức lao động trẻ em vị thành niên. Ở thôn Dỗi, những chuyến xe chở các em gái chưa đủ tuổi lao động vẫn đầy khách mỗi đêm với mong muốn thoát nghèo khi mà việc nương rẫy không còn đủ nuôi sống họ và gia đình.`}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/5.2.JPG"
          text={`For the same reasons, in Ninh Thuận, many Raglai girls are hired for jobs in the cities, despite being at the age where they should be at school. In Điện Biên, child marriage and being tricked across borders remain nightmares. These problems have been creating changes in family and social structure, creating disruptions in family and relatives relationships, not just in the present. Children of high mountain areas in the project such as in Dỗi Hamlet (Nam Đông, Huế) or Phước Bình (Ninh Thuận) have to grow up in the absence of a father or mother. One of the two main breadwinners has to go to big cities to earn a living, because cultivating activities are not enough to support a living amid such a tight economic situation. This absence tremendously affects the education and personality formation of the next generation. Now, images of houses with only the elderly and children are familiar, as the parents have to live far away or work in the fields.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/5.2.JPG"
          text={`Ở Ninh Thuận, nhiều em gái Raglai phải đi làm thuê ở thành phố lớn dù đang ở tuổi học hành, cũng với cùng lý do. Ở Điện Biên, nạn tảo hôn hay việc bị bán qua biên giới vẫn luôn là nỗi ám ảnh. Không chỉ ở hiện tại, những vấn đề này còn tạo ra sự thay đổi trong cấu trúc gia đình và xã hội, tạo nên những đứt gánh trong mối liên hệ gia đình, người thân. Trẻ em ở những vùng núi cao trong dự án như thôn Dỗi (Nam Đông, Huế) hay Phước Bình ( Ninh Thuận) phải lớn lên trong sự thiếu hụt hình bóng của cha hoặc mẹ. Một trong hai trụ cột gia đình phải tìm về thành phố lớn để tìm kiếm kế sinh nhai vì hoạt động nương rẫy không đủ để hỗ trợ đời sống giữa bối cảnh kinh tế eo hẹp. Sự vắng bóng này ảnh hưởng lớn việc hình thành nhân cách cũng như giáo dục của thế hệ tiếp theo. Giờ đây, không khó để bắt gặp hình ảnh những ngôi nhà chỉ có người già và trẻ nhỏ, còn mẹ cha phải mưu sinh phương xa, hoặc làm lụng trên nương rẫy.`}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/6.JPG"
          text={`Within this context, loss and lack of wisdom, customs, culture, family structure, and society are recognized. Adaptability to nature inherited from ancestors and previous generations are gradually lost as indigenous wisdom can no longer hold its place under strong attack from modern society. Especially to marginalized groups such as ethnic minorities, social difference and prejudices are deepened to create invisible barriers. These seemingly unrelated social issues are closely linked in a  picture broader than climate change and gender inequality. In another dimension of such a sensitive context we are having, how each community or character acts towards nature also creates unpredictable impacts.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/6.JPG"
          text={`Bối cảnh trên cũng ghi nhận sự mất mát và thiếu hụt từ trí tuệ, tập tục, văn hóa, cấu trúc gia đình, xã hội. Những bài học về thích nghi với thiên nhiên từ tổ tiên hay thế hệ đi trước dần bị mai một, trí tuệ bản địa không còn giữ được chỗ đứng dưới sự tấn công mạnh mẽ từ xã hội hiện đại. Đặc biệt đối với nhóm yếu thế như các nhóm dân tộc thiểu số, khoảng cách cũng như định kiến xã hội còn bị khoét sâu và tạo những rào cản vô hình. Những vấn đề xã hội tưởng chừng như không liên quan nhưng lại gắn kết một cách chặt chẽ trong một bức tranh rộng lớn hơn cả vấn đề về khí hậu và giới. Đối lập lại với chiều kích đó, cách ứng xử của từng cộng đồng hoặc nhân vật đối với thiên nhiên cũng tạo nên  ảnh hưởng khó lường trong bối cảnh nhạy cảm như hiện tại. `}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/7.JPG"
          text={`"Who is she?" was first shaped as a simple photo reportage. However, the deeper I went, the more I realized that there are many worthwhile vibrations I need to record. Therefore, besides words and images, I might have been a bit ambitious and saved every other small vibration to create a more vivid scene for the reader. During this journey, I realized in order for a work to be truly meaningful, I must make it "Live". The life of a work does not just stay at the outer appearance, in its images, videos, sounds, interviews, but it is alive so much as it creates a sincere vibe for the viewers, as well as inspires them to do something with it. For that, I am not going to limit "Who is she?" as my personal work, but I am offering it as communal, a work, a place where anyone can tell stories of women, education, and climate that they know . “She” is no longer just stories I seek, but will also be the stories of so many courageous, beautiful, hard-working women out there.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/7.JPG"
          text={`“Who is she?” khởi nguồn là một phóng sự ảnh đơn thuần. Nhưng càng đi sâu, tôi nhận ra có nhiều rung động đáng giá nên được ghi lại. Vì thế, bên cạnh chữ viết và hình ảnh, cá nhân tôi tham lam  lưu lại từng rung động nhỏ khác để phần nào tạo nên một khung cảnh sống động hơn cho người đọc. Trong hành trình ấy, tôi nhận ra rằng cách để một tác phẩm có ý nghĩa thực sự là việc luôn giúp nó thực sự “Sống”. Sự sống của một tác phẩm không chỉ dừng lại ở hình hài bên ngoài, từ hình ảnh, video, âm thanh, phỏng vấn, mà nó còn sống nếu nó tạo nên sự rung cảm chân thành cho người xem cũng như truyền cảm hứng để họ tiếp tục làm điều gì đó với tác phẩm. Vì thế, tôi không đóng “Who is she?” lại như một tác phẩm cá nhân mà muốn mở  thành một tác phẩm cộng đồng, nơi bất cứ ai cũng có thể kể câu chuyện mà họ biết về nữ giới, giáo dục và khí hậu. “She” giờ đây không chỉ là những câu chuyện mà tôi tìm kiếm, mà sẽ còn là câu chuyện của rất nhiều người phụ nữ can đảm, đẹp đẽ, đầy nỗ lực ngoài kia.`}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/8.JPG"
          text={`Technically, this is also the journey where I see my own transformation within the process of experimentation. From a mere photo reportage, my ambition has helped me to open up different dimensions, from sound to movement, and so I myself can live in many new arrangements that each dimension brings. Just as each story will be presented by different instruments, it is a way for me to see a very personal development in my practice and thinking.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/8.JPG"
          text={`Về mặt kỹ thuật, đây cũng là hành trình mà cá nhân tôi tự thấy được sự biến chuyển của bản thân trong quá trình thể nghiệm. Chỉ từ một phóng sự ảnh, sự tham lam của bản thân lại tiếp tục mở ra những chiều kích khác nhau, từ âm thanh đến chuyển động, để chính tôi cũng được sống trong nhiều sắp đặt mới mẻ mà từng bối cảnh tạo ra. Vậy nên, tuy mỗi câu chuyện sẽ được trình bày từ những công cụ khác nhau, nhưng đó cũng là cách để bản thân tôi thấy được sự phát triển rất riêng tư trong cách thực hành và suy nghĩ. `}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/9.JPG"
          component={
            <div>
              <p>
                Personally, “Who is she?” is a project that comes as a personal
                pursuit where I store up reflections on people, climate change,
                or more deeply, how we are able to listen to stories that need
                to be listened to. But the deeper I go, the more I understand
                that it is essentially a community project, because it is built
                by many different people, and it contributes a different
                perspective to the community. I have to admit that if I had
                worked alone, “Who is she?” will never take shape. What is in
                front of the readers is the connection between many: from the
                characters who accept my interview and open their hearts to a
                (somewhat too talkative) stranger; to each person who supports
                me on every little thing on my journey: each resting place, each
                meal, each sleep, to my companions who suggested and supported
                me with new ideas and how to carry them out. If I mention all
                the names, the list would never end, but in my humble effort, I
                send my sincerest gratitude to:{" "}
              </p>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
                <li> Miss Anne - my photography mentor.</li>
                <li>
                  Girl Rising - Future Rising Fellowship for providing financial
                  support for my project.
                </li>
                <li>
                  {" "}
                  My friends: cậu Thành, anh Vũ, Lan Chi, Minh Anh, anh Đức,
                  Quang Minh, Thư Vũ, anh Quang. These are the people who
                  provided technical and logistical advice throughout the
                  project.
                </li>
                <li>{`The people who supported me throughout the journey of my project like Bé's family in Nam Đông, Khang A Tủa's, cậu Thành's, chú Quang's, Thu Vu's, Mr. Hải, and Ms. Giang , Ms. Vân, and my family for their great love and support.`}</li>
              </ul>
            </div>
          }
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/9.JPG"
          component={
            <div>
              <p>
                Với tôi, “ Who is she?” là dự án xuất phát từ mưu cầu cá nhân,
                chất chứa những suy tư về con người, biến đổi khí hậu hay sâu xa
                hơn nữa là cách mà chúng ta đang được nghe những câu chuyện mà
                người khác muốn ta phải nghe. Nhưng càng đi sâu, tôi hiểu rằng
                nó thực sự là một dự án cộng đồng, vì được xây dựng bởi nhiều
                người khác nhau, và đóng góp cho cộng đồng một cách nhìn khác.
                Tôi thừa nhận rằng, nếu chỉ làm việc một mình , thì “Who is
                she?” sẽ chẳng bao giờ thành hình. Điều đang trình hiện trước
                mặt người đọc là sự gắn kết giữa nhiều gương mặt người, từ những
                nhân vật nhận lời phỏng vấn và mở lòng cho một người lạ (hay nói
                nhiều) đi vào cuộc đời họ, đến từng người gom góp giúp đỡ tôi
                trên hành trình từ từng nơi chốn đi về, từng bữa cơm, từng giấc
                ngủ, đến những người đồng hành gợi ý và hỗ trợ tôi những ý tưởng
                mới và cách phát triển nó thành hình. Nếu kể tên thì có lẽ sẽ
                chẳng bao giờ hết được, nhưng vẫn gửi lời biết ơn chân thành
                nhất đến:{" "}
              </p>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
                <li> Cô Anne - người hướng dẫn hình ảnh</li>
                <li>
                  Girl Rising - Future Rising Fellowship đã hỗ trợ tài chính để
                  thực hiện dự án
                </li>
                <li>
                  {" "}
                  Những người bạn: cậu Thành, anh Vũ, Lan Chi, Minh Anh, anh
                  Đức, Quang Minh, Thư Vũ, chú Quang. Đây là những người đã tư
                  vấn về mặt kỹ thuật và hậu cần xuyên suốt dự án.
                </li>
                <li>{`Những người đã ủng hộ tôi trên suốt chặng hành trình làm dự án như gia đình chị Bé ở Nam Đông, gia đình bạn Khang A Tủa, gia đình cậu Thành, gia đình chú Quang,  gia đình Thư Vũ, anh Hải, chị Giang, chị Vân và gia đình tôi với rất nhiều tình cảm và sự ủng hộ.`}</li>
              </ul>
            </div>
          }
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/10.JPG"
          text={`Especially, I send my gratitude to Thu of Dỗi Hamlet, to Mua of Mù Cang Chải, Quyền of Phước Bình - they are the characters who have opened their hearts and accepted such a stranger like me into their lives. I am grateful, because I know it is not that easy to let a stranger come and document even a small chapter of their life. Along the way, they had taught me many lessons, showing me the beauty of those human faces, of pure and innocent souls, and helping me realize that strength and tenderness could always coexist in one same person. They make me believe in the work I am doing: that it is necessary to record and narrate shades of life in their unique vibration.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/10.JPG"
          text={`Và đặc biệt, tôi gửi sự biết ơn của mình đến Thu từ thôn Dỗi, đến Mua từ Mù Cang Chải, đến Quyền từ Phước Bình, những nhân vật đã mở lòng và chấp nhận để tôi được bước vào cuộc đời họ. Tôi biết ơn vì chẳng dễ dàng với việc để một người lạ bước vào cuộc đời, ghi chép lại một chương nhỏ trong cuộc đời của mình. Cùng với đó, họ đã dạy tôi rất nhiều bài học trong quá trình làm việc, cho tôi thấy được vẻ đẹp của những gương mặt người, của những tâm hồn trong sáng thuần hậu  hay nhận ra rằng sự mạnh mẽ và dịu dàng luôn có thể tồn tại trong cùng một con người. Họ khiến tôi tin vào công việc mình đang làm, tin rằng việc ghi chép và kể lại những lát cắt trong cuộc sống với những cung bậc khác nhau là điều cần thiết. `}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/11.JPG"
          text={`On the other hand, I am hoping the simple stories from my motherland can be an inspiration to others of faraway lands. There are always people who silently endure the changes of nature, and there are always people who are trying to alter their situation with whatever they have. And women, more than what I can put into words and pictures, are truly beautiful creatures of this world, much stronger and braver than they appear to be.`}
        />
      ) : (
        <ImageWithText
          url="/cheo/images/general/11.JPG"
          text={`Ở trong một chiều kích khác, tôi mong những câu chuyện nhỏ từ quê hương mình có thể là nguồn cảm hứng đến nhiều vùng đất khác. Vẫn luôn có những con người âm thầm chịu đựng và chống chọi với sự thay đổi của tự nhiên, và luôn có những con người đang tìm cách biến chuyển nó dựa trên khả năng của mình. Phụ nữ, hơn cả những gì tôi có thể gói gọn trong con chữ và hình ảnh, thực sự là những sinh vật đẹp đẽ của thế giới này, họ mạnh mẽ và can đảm hơn rất nhiều so với những gì họ đã thể hiện.`}
        />
      )}

      {isEnglish ? (
        <ImageWithText
          url="/cheo/images/general/12.JPG"
          component={
            <div style={{ lineHeight: 2 }}>
              <h3 style={{ textAlign: "center" }}>Project Team</h3>
              <ul style={{ paddingLeft: 20 }}>
                <li>Producer: Alex Nguyen</li>
                <li>
                  <strong>Web Solution Architect:</strong> Nguyen Trung Thanh
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
      ) : (
        <ImageWithText
          url="/cheo/images/general/12.JPG"
          component={
            <div style={{ lineHeight: 2 }}>
              <h3 style={{ textAlign: "center" }}>Đội ngũ thực hiện:</h3>
              <ul style={{ paddingLeft: 20 }}>
                <li>Chịu trách nhiệm sản xuất: Alex Nguyen</li>
                <li>
                  <strong>Kiến trúc giải pháp Web:</strong> Nguyễn Trung Thành
                </li>
                <li>Dịch thuật: Hoàng Nguyễn Minh Anh</li>
                <li>Cố vấn hình ảnh: Anne</li>
                <li>Hỗ trợ kỹ thuật: Dương Thanh Quang </li>
                <li>
                  Dự án nằm trong khuôn khổ tài trợ của quỹ Future Rising Fellow
                  2021
                </li>
              </ul>
            </div>
          }
        />
      )}
    </>
  );
};

export default About;
