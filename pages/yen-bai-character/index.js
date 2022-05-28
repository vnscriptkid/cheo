import { useState } from "react";
import Carousel from "react-multi-carousel";
import LanguagePicker from "../shared/LanguagePicker";

const Body = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <div className="">
      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To those who haven’t been here, Mù Cang Chải echoes the feeling of a forsaken, lasting mountainous region, nestled by beautiful terraced fields. And to those who have touched its land, Mù Cang Chải lingers on their soul, its Northern chilly air and the affection contained in the eyes of the locals are carried through each ray of sunlight. More than that, this land, 1000 meters above sea level, is also known for its wealth of minerals, natural resources, and Nature's gift of beautiful landscapes. However, all these gifts are not proportional to the livelihood of the locals. Mu Cang Chai is still facing the challenge of finding a suitable livelihood to make its way out of the charting of the poorest regions in Vietnam.`
          : `Với những ai chưa đến Mù Cang Chải, thị trấn nhỏ này hiện diện trong tâm thức là một vùng núi heo hút vững chãi sau thửa ruộng bậc thang đẹp đến nao lòng. Với những ai đã từng đặt chân đến đây, Mù Cang Chải còn xuyên qua từng khe nắng để vương vấn lại tâm hồn người đi kẻ ở bằng chút không khí se lạnh của núi rừng Tây Bắc và sự trìu mến chất chứa trong ánh mắt người dân bản địa. Không chỉ vậy, vùng đất cao hơn mực nước biển 1000m này còn gắn liền với sự giàu có về khoáng sản, cảnh vật, tài nguyên thiên nhiên. Tuy nhiên, sự giàu có mà thiên nhiên dành tặng không tỷ lệ thuận với sinh kế mà người dân trong thị trấn có được. Mù Cang Chải vẫn phải đối mặt với thách thức trong việc tìm ra kế mưu sinh phù hợp để thoát khỏi chỗ đứng trong bảng xếp hạng những vùng nghèo nhất nước. `}
      </p>

      <img width="100%" src={"/cheo/images/yen_bai/1.jpg"} alt="opening" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mùa Thị Mua, our character in the project’s second story, Mù Cang Chải is both a friend and a stranger. Though it is not her birthplace, the place itself and its people have been indelibly photographed in her mind by fate. When she was still a law student, she initiated some social projects in Mù Cang Chải. Later, in her visits to her friend’s, who is now her husband, hometown, she became more familiar with the place. Mù Cang Chải reminds Mua of her lovely and intimate Nam Po, Dien Bien where she was born, though it is also a land notorious for drug trafficking, cross-border human trafficking, and child marriage on the Vietnam-Laos border. The life here in this tourist town also shares some similarities with the Hmong community where she grew up. Better than anyone else, in her mind, these images were ingrained: the immensity of the terraced fields, the softness of the golden rays of sunlight every morning, and the pristine water channel flowing from the mountain for irrigation.`
          : `Với Mùa Thị Mua, nhân vật của câu chuyện thứ 2 trong dự án, Mù Cang Chải vừa thân quen vừa lạ lẫm. Đây không phải là nơi em sinh ra, nhưng bằng những mối nhân duyên khác nhau, bối cảnh và con người của vùng đất này dần in sâu vào tâm trí em.  Khi còn là cô sinh viên ngành luật, em từng có dịp thực hiện các dự án xã hội tại đây. Hay trong những lần về thăm gia đình người bạn đời hiện tại, em cũng được nhìn ngắm thị trấn này thêm nhiều lần. Mù Cang Chải gợi cho em khung cảnh thân thương về Nậm Pồ, Điện Biên nơi Mua sinh ra, vùng đất khét tiếng với buôn bán ma túy, bán người qua biên giới và nạn tảo hôn ở biên giới Việt - Lào. Bối cảnh đời sống ở thị trấn du lịch này âu cũng san sẻ những điểm chung mà cộng đồng người HMong em lớn lên đã và đang lưu giữ.  Hơn ai hết, tâm thức em hiện rõ sự mênh mông của thửa ruộng bậc thang, sự êm dịu của những đợt nắng vàng rực vào mỗi sáng, hay sự nguyên sơ của từng kênh nước chảy đều từ núi mỗi lần tưới tiêu. `}
      </p>

      <div style={{ display: "flex" }}>
        <img style={{ width: "50%" }} src="images/yen_bai/2.1.JPG" alt="3.1" />
        <img style={{ width: "50%" }} src="images/yen_bai/2.2.JPG" alt="3.2" />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Perhaps, these mosaic fragments of memory had kept Mua encouraged to put her first brick into Ná Nả - a cyclical economy project aimed to generate income from products of Hmong farmers in Mu Cang Chai. But Mua understands that the effort she is making is about just about a brand, but it is for her family, for the Hmong community in the area. They are those who are under the threat of unsustainable livelihoods amid many unexpected fluctuations of life such as pandemics and climate change. Therefore, with the small project that she and her companions cherished, Mù Cang Chải will be the beginning, so that Ná Nả's spirit will grow and expand to Nậm Pồ and Điện Biên to provide tools and techniques for farmers to keep indigenous seeds from the effects of climate change. Especially, through the project's name "Nà Na", the Hmong language for "Mother, mother", Mua hopes it will grow through the care of mothers and sisters in the community. Hmong women are gentle and yet they are equally courageous, and they always seek ways to strive despite many challenges in family and farming life.`
          : `Có lẽ, những mảng màu mosaic rời rạc trong ký ức phần nào tiếp thêm động lực cho Mua để đặt viên gạch đầu tiên cho Ná Nả - dự án kinh tế tuần hoàn nhằm tạo nguồn thu nhập bền vững dựa trên các sản phẩm bản địa cho bà con nông dân người Hmong tại Mù Cang Chải. Nhưng với Mua, em hiểu rằng nỗ lực em đang xây dựng không chỉ dành cho một cái tên nhất định, mà còn là cho cả cho gia đình em, cho cộng đồng người Hmong trong khu vực, những người đang đối mặt với thách thức về sinh kế không bền vững giữa nhiều biến động bất thường của đời sống như đại dịch hay biến đổi khí hậu. Vì thế, trong kế hoạch nho nhỏ mà em cùng người bạn đồng hành ấp ủ, Mù Cang Chải sẽ là nơi khởi đều, để rồi tinh thần của Ná Nả sẽ tiếp tục mở rộng đến? Nậm Pồ, Điện Biên để cung cấp các công cụ và kỹ thuật cho nông dân nhằm bảo vệ các loại hạt giống bản địa khỏi tác động của biến đổi khí hậu. Đặc biệt, như đúng cái tên “Ná nả”, trong tiếng Mông nghĩa là “Mẹ ơi, mẹ”, Mua mong cầu dự án sẽ được nuôi nấng bằng sự chăm chút của những người mẹ, người chị trong cộng đồng Họ là người phụ nữ Mông dịu dàng nhưng không kém phần mạnh mẽ, luôn tìm cách để vươn lên trong đời sống gia đình và nương rẫy còn nhiều lo toan. `}
      </p>

      <div style={{ display: "flex" }}>
        <img style={{ width: "50%" }} src="images/yen_bai/3.1.JPG" alt="3.1" />
        <img style={{ width: "50%" }} src="images/yen_bai/3.2.JPG" alt="3.2" />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The Hmong is one of the ethnic minority groups living mainly in the northwest extreme point of Vietnam. The Hmong are not just residing in Dien Bien, where Mua was born, or Mu Cang Chai, but also in many different provinces. In recent years, in particular destinations such as Mù Cang Chải and Sapa, tourism has developed, creating more economic resources for the Hmong community. However, these are not sustainable sources of income they could rely on. The life of the Hmong is about the cultivation of terraced fields, honeycombs, chicken coops, and cultivation fields. Therefore, their fundamental livelihood is heavily dependent on nature. Weather changes in recent years have directly affected the life of Hmong households. For women, in particular, tourism brings both opportunities and challenges. The situation indeed offers men different employment opportunities. However, this in turn puts pressure on women, in the name of equality in the family, to go outside to earn money. This is not easy for Hmong women. Prejudice about gender and ethnicity has been deeply rooted in the community, now deepened by invisible impacts of the pandemic and climate change. Layers of layers pile up creating a vicious circle straining the lives of Hmong women.`
          : `H’Mong là một trong những nhóm người dân tộc thiểu số nằm chủ yếu ở phía Tây Bắc Việt Nam, nơi đỉnh đầu tổ quốc. Người HMong tập trung sinh sống chủ yếu không chỉ ở Điện Biên, nơi Mua sinh ra hay Mù Cang Chải mà trải dài ra nhiều tỉnh thành khác nhau. Những năm gần đây, ở một vài điểm đến đặc biệt như Mù Cang Chải, Sapa, du lịch dần phát triển, tạo thêm nguồn lợi kinh tế cho cộng đồng người  HMông. Tuy nhiên, đó không phải là nguồn lợi bền vững mà họ phụ thuộc vào. Đời sống của người Hmong gắn với nương rẫy, với thửa ruộng bậc thang, với tổ mật ong, với chuồng gà, hay những cánh rừng. Thế nên, nguồn sinh kế cơ bản thường phụ thuộc nhiều vào thiên nhiên. Sự biến chuyển của thời tiết trong nhiều năm gần đây ảnh hưởng trực tiếp đến đời sống của những hộ gia đình người Mông. Đặc biệt đối với nhóm phụ nữ, tác động của du lịch vừa mang lại cơ hội nhưng cũng là thách thức. Người đàn ông được mang lại các cơ hội việc làm khác nhau, nhưng chính điều này lại tạo áp lực ra ngoài kiếm tiền lên phụ nữ để có được sự bình đẳng trong gia đình. Điều này chẳng hề dễ dàng với phụ nữ Hmong. Định kiến về giới và nhóm người thiểu số đã là vấn đề ăn sâu trong cộng đồng, giờ đây lại khoét sâu bởi những ảnh hưởng vô hình từ đại dịch, biến đổi khí hậu. Từng lớp lang chồng chất tạo nên một vòng luẩn quẩn mà ôm chặt lấy cuộc sống của những người phụ nữ Hmong.`}
      </p>

      <div style={{ display: "flex" }}>
        <img style={{ width: "50%" }} src="images/yen_bai/4.1.JPG" alt="4.1" />
        <img style={{ width: "50%" }} src="images/yen_bai/4.2.JPG" alt="4.2" />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `In Nậm Pồ, Điện Biên where Mua returns each year, the rainy season comes earlier, yet it is much drier, because precipitation decreases. She can clearly see the difference in her parents' sowing fields compared to the days when she was a little girl following her parents to the fields.  It is not just her parents, but all her relatives and acquaintances in the community who are sowing rice in fields with no water available. The rice plant depends on rain, once sown for a few days without water, it will be damaged, unable to germinate. In phone calls with Mua from a distance, her mother could not explain why "it has been sunny for so long, the seeds could not sprout". Many farmers have given up farming to work in China. Farming in the traditional Hmong style is very challenging, especially when the weather is hot. Farming used to be simple in cool weather, but now it's more difficult because it's getting warmer. Weather therefore affects their earnings. Last year (2020), Mua's family produced 63 bags of rice, but only 30 for this year. Now the price of rice grain has increased, the weather effects have become more and more severe for all farmers.`
          : `Ở Nậm Pồ, Điện Biên, nơi Mua thường trở về mỗi năm, mùa mưa đến sớm hơn nhưng lại khô hơn ngày trước, lượng nước mưa dần ít hơn. Những thửa ruộng đang gieo của cha mẹ em đã có sự khác biệt rõ ràng so với những ngày em còn là một cô bé nhỏ và theo chân cha mẹ đi gieo gặt. Không chỉ cha mẹ em, mà cả những người họ hàng, những gương mặt khác trong cộng đồng đều đang gieo lúa trên những thửa ruộng không có nước. Tất cả lúa đều phụ thuộc vào mưa, nhưng nếu gieo vài ngày mà không có nước thì cây sẽ hư, không nảy mầm được. Trong những cuộc điện thoại với Mua khi xa nhà, mẹ em cũng chẳng lý giải được vì sao “trời nắng quá lâu, hạt không gieo được”. Nhiều nông dân đã bỏ nghề nông để sang Trung Quốc làm việc. Làm ruộng theo kiểu truyền thống của người Hmông rất khó, nhất là khi thời tiết nắng nóng. Việc canh tác trước đây đơn giản vì không khí mát mẻ, nhưng bây giờ khó khăn hơn vì trời nóng hơn. Thời tiết cũng có ảnh hưởng đến thu nhập; năm ngoái (2020), gia đình em thu được 63 bao gạo nhưng năm nay chỉ nhận được 30 bao.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "33.333%" }}
          src="images/yen_bai/5.1.JPG"
          alt="5.1"
        />
        <img
          style={{ width: "33.333%" }}
          src="images/yen_bai/5.2.JPG"
          alt="5.2"
        />
        <img
          style={{ width: "33.333%" }}
          src="images/yen_bai/5.3.JPG"
          alt="5.3"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `In Mù Cang Chải that shares Nậm Pồ's geographical features, the story is barely more optimistic. In recent years, the town has been clearly affected by climate change, the major reason is that for generations, the locals have been cultivating with the rather outdated method of deforestation. Forest fires happen, forest resources shrink; and as the lack of awareness leads to failure to protect the forest, during the dry season they suffer water shortage, and during the rainy season: floods, landslides, and flash floods. Besides, each year, many houses and hundreds of households in areas with high risk of landslides are relocated, many irrigation works are severely damaged, hundreds of hectares of crops are affected by storms and tornadoes. As an upstream area, Mù Cang Chải has never before had a serious shortage of water for production, although people still have the habit of "waiting for rain" for their crops. Because of climate change which results in later arrival of a shorter, drier rainy season, many production areas of the winter-spring crop are dried out and cracked. This is clearly visible on the terraced fields in the highlands.`
          : `Ở Mù Cang Chải, nơi chia sẻ chung về đặc điểm địa lý, câu chuyện cũng chẳng lạc quan hơn là bao. Thị trấn nhiều năm gần đây chịu tác động rõ nét từ biến đổi khí hậu, nguyên nhân chính là do người dân từ bao đời nay vẫn còn phương thức làm nương, làm rẫy lạc hậu, chặt phá cây rừng trồng, phơi khô. Cháy rừng, tài nguyên rừng bị thu hẹp, người dân thiếu ý thức bảo vệ rừng đã khiến mùa khô cạn kiệt nước, mùa mưa thì thừa nước dẫn đến lũ ống, lũ quét, sạt lở đất. Ngoài ra, hàng năm, do ảnh hưởng của bão, lốc xoáy, nhiều ngôi nhà và hàng trăm hộ dân nằm trong vùng có nguy cơ sạt lở cao phải di dời; nhiều công trình thủy lợi bị hư hỏng nặng, hàng trăm ha hoa màu bị ảnh hưởng. Là địa bàn đầu nguồn nhưng Mù Cang Chải chưa bao giờ thiếu nước sản xuất trầm trọng, dù người dân vẫn có thói quen “chờ nước mưa” trồng trọt. Do biến đổi khí hậu, mưa ít, mùa mưa đến muộn hơn nên nhiều diện tích sản xuất vụ đông xuân bị khô nứt, hiện hữu  rõ trên ruộng bậc thang vùng cao.`}
      </p>

      <img width="100%" src={"/cheo/images/yen_bai/6.jpg"} alt="6" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mua, climate change becomes more pronounced over time. In her somewhat faint memory, Mua remembers her parents and her rushing from their makeshift hut on the mountain into the deep forest because of a sudden big flood when she was only 4 years old. History repeats itself after 12 years, but then Mua was studying at university in Hà Nội, the capital of Vietnam, only listening to her mother over the phone. It wasn't until she started Ná Nả and spent more time on this community project for her hometown that she saw more clearly the cracks in the waterless fields, the erosion from the landslides, and the obscurity of dangerous trips to look for jobs across borders of women in her community.`
          : `Với Mua, biến đổi khí hậu dần rõ nét hơn theo thời gian. Trong ký ức có phần đã mờ nhạt, Mua nhớ em và cha mẹ vội từ căn chòi dựng tạm trên núi vào rừng sâu vì một trận lũ lớn bất ngờ ập đến khi em chỉ mới 4 tuổi.  Điều này lặp lại tương tự sau 12 năm, nhưng lúc này Mua đang học đại học ở thủ đô, chỉ nghe mẹ em thuật lại qua điện thoại. Đến khi bắt tay với Ná Nả, dành thời gian hơn cho dự án cộng đồng ở quê hương, em mới thấy rõ nét hơn sự nứt rạn của những thửa ruộng không nước nơi quê em, sự lở loét của những mảng đất sạt lở,  sự mù mịt của những chuyến đi kiếm việc làm nơi biên giới nguy hiểm của những người phụ nữ trong cộng đồng em.`}
      </p>

      <img width="100%" src={"/cheo/images/yen_bai/7.jpg"} alt="7" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The more attached she gets to Ná Nả and the community, the more she understands the significance of her return this time. When she was a college student, Mua never thought she would come back. To many, her journey is such a paradox. Days and days she tried her best to get out of these terraced fields to come to Hà Nội, eager to explore the world. And yet, after her dream came to a realization, she chose to come back to her birthplace. But as we get closer to her growing journey, the rather odd choices she makes would be less unexpected. Something in her soul makes her special, ever since she was a little girl. She is one of the very rare cases in her hometown attending university, though her family and community conditions put a great obstacle to that. What we know is that, to finish this four-year bachelor's program in Law, she had experienced all sorts of part-time jobs, including waiting tables for food stalls, so she didn’t have to ask for support from her family.`
          : `Tình cảm vun đắp cho Ná Nả và cộng đồng càng nhièu cũng là khi Mua hình dung rõ hơn ý nghĩa của lần trở về này. Lúc còn ngồi trên giảng đường đại học, em chưa bao giờ hình dung một ngày nào đó, mình sẽ lại trở về quê hương. Đối với nhiều người, thật nghịch lý khi nhìn thấy hành trình của Mua. Từ những ngày nỗ lực hết mình để rời những thửa ruộng bậc thang đến thủ đô khám phá thế giới mới, để rồi khi có được những gì em mơ ước trong tay, em lại chọn quay về với quê hương mình. Nhưng nếu đi sâu vào hành trình lớn khôn của Mua, những quyết định khác thường cũng không phải là điều quá lạ lẫm. Sự khác biệt nằm sâu bên trong tâm hồn em từ khi chỉ là một cô bé gái. Em là trường hợp hiếm hoi theo học đại học tại quê mình dù điều kiện sống của gia đình hay cộng đồng cũng chẳng dễ dàng để em có thể thực hiện tâm nguyện đó. Chỉ biết rằng, để hoàn thành 4 năm học với tấm bằng cử nhân Luật trên tay, em đã chọn đi làm thêm ở nhiều nơi khác nhau từ quán cháo, quán bún mà không xin sự hỗ trợ từ gia đình. `}
      </p>

      <div style={{ display: "flex" }}>
        <img style={{ width: "50%" }} src="images/yen_bai/8.1.JPG" alt="8.1" />
        <img style={{ width: "50%" }} src="images/yen_bai/8.2.JPG" alt="8.2" />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mua, the decision comes as it has to be. She sensed something different in her even when she was little. In the rare moments of resting after reaping the rice, she didn't join her friends to have fun but rather took walks in the deserted forests where she relaxed on the grass, under the trees, talked, and laughed with herself. She loved walking alone, and sometimes the walk was 5-6km from the family's field back home. She didn't care about getting married or working at the border either, though it was the ideal vision friends her age talked about as they hit puberty.`
          : `Với Mua, em cũng chẳng bỡ ngỡ với những quyết định tự thân. Ngay từ bé, em đã thấy mình lạ lẫm so với các bạn đồng lứa. Trong những lần hiếm hoi nghĩ ngơi sau khi gặt lúa, em không tham gia tụ họp cùng bạn bè vui chơi mà thường chọn dạo bộ trong những mảnh rừng vắng, thả mình trên bãi cỏ, trong rặng cây, nói chuyện và cười đùa với chính mình. Em thích đi dạo một mình, có những hôm còn đi dạo 5-6km từ ruộng của gia đình về nhà. Em cũng chẳng để tâm đến chuyện cưới xin hay đi làm ở biên giới, bức tranh điển hình mà bạn bè em luôn nói với nhau khi họ bắt đầu bước vào giai đoạn dậy thì. `}
      </p>

      <img width="100%" src={"/cheo/images/yen_bai/9.jpg"} alt="9" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Higher study is also not an easy decision where Mua was born. Limited economic conditions and identification of ethnic minorities often discourage girls her age to continue their higher education. Therefore, instead, they often work in factories on the plains or the border. Or from their observation of the previous generation, they choose marriage and stay at home to take care of the family. Mua, however, only knew one thing for certain: she wanted to go to university and wanted to continue to learn more about the big, big world around her. Her dream, as we see, doesn't stop at the farms and crops at home, but it travels further and wider.`
          : `Việc chọn học cao hơn cũng không phải là quyết định dễ dàng ở vùng đất em sinh ra.  Điều kiện kinh tế giới hạn, định danh dân tộc thiểu số  thường không khuyến khích các bạn gái bằng tuổi Mua tiếp tục học cao. Thay vào đó, các em thường đi làm ở các nhà máy dưới đồng bằng hoặc nơi biên giới. Hoặc theo những gì mà các em thấy được ở thế hệ trước, chọn cưới chồng và ở nhà chăm sóc gia đình. Với Mua, em chỉ biết rõ một điều là em muốn đi học, muốn tiếp tục biết thêm về thế giới rộng lớn xung quanh em. Giấc mơ của em không chỉ dừng lại ở những gốc cây quê nhà, mà còn mong đi xa hơn, rộng hơn.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/10.1.JPG"
          alt="10.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/10.2.JPG"
          alt="10.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Now, her dream feeds on her concern for her origin, for the faces she grew up with, and for their sustainable livelihood she considers her responsibility. She has in her other little dreams, one about her own little garden for her own little family, another about movies she could direct in the future. But for now, she is all about the sustainability for which, not just her, but her whole community is yearning.`
          : `Giờ đây, giấc mơ của em nằm trong sự trăn trở của em về cội nguồn, về những gương mặt người mà em lớn lên cùng, về kế sinh nhai bền vững mà em nghĩ mình là một phần của câu chuyện. Em vẫn nuôi những giấc mơ nhỏ khác trong mình, về một khu vườn rừng cho gia đình nhỏ của em, về những bộ phim mà em có thể làm trong tương lai. Nhưng điều mà em hướng đến hiện giờ, là sự bền vững mà không chỉ em, mà còn là cả cộng đồng em thuộc về. `}
      </p>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Mua remembers the day of her first footsteps in Hà Nội for her higher education. On her feet were the honeycomb sandals whose soles were worn out and tinged with earth. Her friend said it would be better for her to change into a pair of high heels or stylish sandals. In response, she simply smiled and continued to go school on her very same sandals. Years later, Mua still wears this idyllic pair of honeycomb sandals as she treads into the remote hills, instructing each household to store indigenous seeds and take care of their gardens without damaging the land. It is the same simple honeycomb sandals, and it can't stop her steady footsteps. It is the step of a girl from an ethnic minority community in the highlands, once wanted to come down to the plain to pursue their dreams, who then bravely gave up their ambitions, returning home, still the steady footsteps, to nurture the land that has nurtured her since birth.`
          : `Mua vẫn còn nhớ ngày đầu tiên em đặt chân đến thủ đô để theo học đại học. Trên chân em là đôi dép tổ ong đã mòn đế và nhuốm màu đất. Bạn em có bảo sẽ tốt hơn nếu em thay một đôi giày cao gót hay dép kiểu cách. Mua chỉ cười và vẫn tiếp tục giữ nguyên đôi dép ấy đến trường. Sau nhiều năm, Mua vẫn mang một đôi dép tổ ong bình dị để đi vào những mảnh đồi xa, hướng dẫn cho từng hộ gia đình cách lưu giữ hạt giống bản địa, cách chăm sóc mảnh vườn mà không tổn hại đến đất đai. Cũng là đôi dép tổ ong giản đơn, nhưng chẳng thể nào cản được bước chân vững chắc của em.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Đó là bước chân từ một cộng đồng dân tộc thiểu số ở vùng cao tìm về với đồng bằng theo đuổi ước mơ, để rồi cũng mạnh dạn đặt xuống những tham vọng của mình, trở về với nơi mình ra đời, trên chính bước chân ấy, để nuôi dưỡng cho cội nguồn mình được sinh ra.`}
      </p>

      {/* {isEnglish ? (``) : (``)} */}
      {/* <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `For this morning’s early autumn rain, the sun was blessing us with lowered light softer than usual. Thu’s steps quickened despite the full load of firewood burdening her shoulder. Thu’s sister-in-law walked before her, her steps steady as she crossed the streambed, trying to make her way through before dusk. Suddenly the whirlpool intensified, and its currents grew more rapid. Thu looked far beyond, trying to figure out what could be the matter. Her sister-in-law turned to her, “The hydropower plant is draining! Hurry up! It’s getting dangerous.” Not so long after, the water rose to above their knees, then higher, and soon reached her waists. Thu was worried though she had been in this situation before. Their feet scurried, making stumbling on sharp rocks unavoidable.`
          : `Mặt trời hôm nay dịu nhẹ hơn thường lệ, âu cũng vì cơn mưa đầu thu ban
        sáng. Thu rảo bước chân nhanh hơn dù gánh củi trên vai vun đầy. Chị dâu
        của em đi trước, đôi bàn chân băng suối đều đặn trước khi trời sập tối.
        Vòng xoáy nước chợt mạnh hơn lúc đầu giờ, nhịp điệu dồn dập dần, Thu
        phóng mắt nhìn xa, đoán định xem điều gì bất thường đang xảy ra. Chị dâu
        em quay sang:”Thủy điện xả nước, đi nhanh kẻo nguy hiểm.” Không lâu sau,
        nước đã cao lên trên cả gối, rồi dần lại cao hơn nữa, mấy chốc đã lên
        đến ngang hông. Thu lo lắng, dù đã từng băng suối khi thủy điện xả nước
        bất ngờ. Bước chân hai chị em vội vã hơn, chẳng tránh được việc vấp phải
        đá nhọn dưới nước.`}
      </p>

      <img
        width="100%"
        src={"/cheo/images/hue-story/13_fullscreen-min.jpg"}
        alt="opening"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The night came, and under the little light in her sister’s kitchen, Thu narrated her arduous task, still looking haggard. Beside her, the sister-in-law was applying a bit more of anti infection medicine on her legs. This medicine is indispensable for the women of this Dỗi Hamlet, especially during these rainy days when their feet get long-exposed to water. It’s an everyday task to the Cơ Tu women in this hamlet to fetch firewood and wade through the streams for fish. The firewood would reduce the fuel cost, a major spending of a household. Each three to four hard-working hours of collecting firewood secures a month-worth of fuel. Income from cultivation activities becomes less stable, so any least of cost reduction would suffice the effort. However, landslides on hill tops, water rising from hydro power plant’s drainage, and sudden rains in Nam Đông make this task more arduous.`
          : `Tối đến, dưới ánh đèn nhỏ trong gian bếp nhà chị gái, Thu kể lại lần đi
        gánh củi lúc chiều mà lòng vẫn bần thần. Bên cạnh em, chị chồng Thu đang
        dặm thêm một ít thuốc chống ăn chân, tuýp thuốc không thể thiếu được
        trong nhà phụ nữ thôn Dỗi, đặc biệt là trong những ngày mưa gió, phải
        ngâm chân dưới nước lâu. Việc đi lội suối bắt cá lấy củi là chuyện quá
        quen thuộc với phụ nữ Cơ Tu ở Thôn Dỗi. Những gánh củi đỡ đần được phần
        nào tiền chất đốt, một khoản chi chiếm phần lớn chi phí sinh hoạt trong
        gia đình. 3-4 tiếng cật lực thu nhặt đảm bảo được hơn một tháng dùng
        nhiên liệu. Thu nhập từ nương rẫy không còn đều đặn như trước nên giảm
        đi bất cứ một khoản chi nào đều là cần thiết. Tuy nhiên, đất đai sạt lở
        trên những đỉnh đồi, nước dâng cao lúc thủy điện xả lũ hay nhiều cơn mưa
        bất chợt ở Nam Đông khiến công việc này dần trở nên khó khăn hơn.`}
      </p>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Since her marriage made her a woman of Dỗi Hamlet (Nam Đông), Thu has often followed her sisters to fetch firewood at noon, when her husband is home to take care of the children or when the children are in school. In the morning, she spends time doing her housework. Some other days of the week, she would go take care of her wattle (an acacia plantation) and rubber field. Married and a mom, she is still among the group of younger women of the hamlet. Therefore, the neighboring ladies support her with her fieldwork and economic activities.`
          : `Từ ngày về làm dâu ở thôn Dỗi (Nam Đông), Thu thường hay đi cùng các chị
        gánh củi vào những buổi chiều, lúc có chồng phụ chăm con hoặc con cái
        gửi ở trường. Ban sáng, em dành thời gian để làm công việc nội trợ trong
        gia đình. Đôi ngày trong tuần, Thu cũng lên rẫy keo và cao su của mình
        để chăm sóc. Tuy đã lập gia đình và làm mẹ, nhưng Thu vẫn thuộc lứa phụ
        nữ nhỏ tuổi trong thôn. Các hoạt động kinh tế, nương rẫy vẫn nhận được
        sự đỡ đần từ các chị em xung quanh.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/hue-story/3.1-min.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/hue-story/3.2-min.JPG"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Married at 18, Thu moved to Dỗi Hamlet with her in-law family. At such an age, most of her friends opt for the option of moving to the city for jobs or becoming textiles workers for factories near home. They all would work to earn some funds before returning to cultivation activities, simply because it has no longer provided as stably as it did. In Nam Đông, many young girls quit school to work before the legal age. The story of Díp, Thu’s sister-in-law and her constant supporter when she first moved in, is typical of this type. Díp started working at the age of 15 and kept it from her family, after being introduced by her friends to a well-paid job in the city. A few years later, she returned with a humble fund, swore never to return to the miserable job, and instead to stick to her rather desolate field at home. Unlike Díp’s case, Thu’s parents sent her to boarding school down the district lest she leaves too. Now that Thu is a mother to a four-year-old girl and a young wife to a family of very few members, leaving for city jobs is indeed not of one her intentions, though she would earn much more.`
          : `Cưới chồng năm 18 tuổi, Thu chuyển về thôn Dỗi ở cùng gia đình chồng. Ở
        lứa tuổi của em lúc ấy, hầu hết các bạn đều lựa chọn lên thành phố kiếm
        việc làm hoặc làm nhân công ở các xưởng may gần nhà. Gần như bạn bè em
        đều chọn đi làm để kiếm vốn làm ăn rồi mới trở về làm nông, đơn giản vì
        nguồn lợi từ việc là nương rẫy không còn đều đặn như thế hệ trước. Ở Nam
        Đông, nhiều trẻ em gái bỏ học đi làm khi chưa đủ tuổi lao động. Díp, chị
        dâu của Thu, người luôn hỗ trợ Thu lúc mới về thôn là câu chuyện điển
        hình. Díp trốn gia đình đi làm từ những năm 15 tuổi, theo lời bạn bè
        giới thiệu về một công việc lương cao dưới thành phố. Mấy năm sau, cô
        trở về với chút vốn ít ỏi trong tay, cùng lời thề sẽ chẳng quay lại công
        việc cực khổ nơi thành phố và bám trụ lại đến cùng với nương rẫy điêu
        tàn nơi quê nhà. Khác với Díp, để ngăn Thu theo bạn đi làm xa, bố mẹ em
        đã gửi em đi học ở trường nội trú dưới huyện. Giờ đây, khi em đã là mẹ
        của một bé gái 4 tuổi, là người vợ trẻ của một gia đình neo người, việc
        đi làm xa ở thành phố càng không phải là dự định của em dù đồng lương
        kiếm được cao gấp nhiều lần thu nhập không ổn định ở quê.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/hue-story/1.2-min.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/hue-story/2-min.JPG"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `That being said, every meal, every unstable earning from fieldwork, and her wattle field damaged by a recent storm requires all her attention. The wattle trees from 2020’s cultivation season were all damaged. Besides, rubber tapping is not possible during rainy seasons. And so Thu’s husband’s freelance job and some cassava (a type of starchy root vegetable) grown in their garden have been the only sources of income. This situation is shared by Díp’s and many other women’s families in the hamlet. A five-year season of wattle of half a hectare could give an interest of 20 to 30 million Vietnam dongs (roughly $860 to $1300). Because of severe storms and landslides, they earned nothing in 2020. These disasters also influenced other crops like rubber, cassava, corn, and rice. At the same time, the pandemic has put great pressure on their economic activities. Even their most stable source of income from rubber tapping, with which they earn 300,000VND ($13) a day, is hampered by the rain. The scarce and occasional money they get from cassava and corn crops is often not enough to make ends meet. Therefore, a job in a factory with a stable income is a preferable choice for young women like Thu and Díp. Or perhaps, the men are to be the only breadwinners.`
          : `Ngược lại, nỗi bận tâm của em gói ghém trong những bữa ăn hàng ngày,
        trong rẫy keo mới đổ gãy vì cơn bão đi qua, hay trong nguồn thu nhập bấp
        bênh từ trồng trọt. Đợt keo trồng năm 2020 của gia đình em đều bị đổ gãy
        hết, cao su cũng không thu hoạch được vào mùa mưa gió, nên nguồn thu
        chính chỉ còn phụ thuộc vào công việc tự do của chồng, hay một ít củ mì
        trồng sau nhà. Díp, chị dâu của Thu và nhiều phụ nữ trong thôn cũng lâm
        vào tình cảnh tương tự. Keo trồng 5 năm có thể thu lãi 20 - 30 triệu
        đồng với vài sào đất. Do ảnh hưởng của các trận bão lớn và sạt lở đất
        bất chợt, thu nhập của họ dường như bằng không vào năm 2020. Sạt lở và
        tần suất bão lớn càng tăng cũng ảnh hưởng đến các loại cây trồng khác
        trong khu vực như cao su, mì, bắp, lúa. Song song với đó, áp lực từ đại
        dịch cũng khiến gánh nặng kinh tế gia đình khó khăn. Vào trời mưa, công
        việc có nguồn thu nhập ổn định nhất là cạo mủ cao su, tầm 300k/ ngày
        cũng bị cản trở. Chút ít thu nhập hiếm hoi từ trồng bắp hay khoai mì
        thường không đủ cho việc sinh hoạt gia đình hằng ngày. Vì thế, tìm kiếm
        một chân việc ở nhà máy với đồng lương ổn định thường là sự lựa chọn dễ
        dàng hơn đối với những người phụ nữ trẻ như Thu, như Díp.`}
      </p>

      <img
        style={{ width: "100%" }}
        src="images/hue-story/1.1-min.JPG"
        alt="1.1"
      />
      <img
        style={{ width: "100%" }}
        src="images/hue-story/5.1-min.JPG"
        alt="5.1"
      />
      <img style={{ width: "100%" }} src="images/hue-story/6-min.JPG" alt="6" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The sudden environmental change happening in Nam Đông does not just bring economic challenges to Thu: It puts everyone in the hamlet at risk. Slippery roads and landslides make it more and more difficult for the women of Dỗi Hamlet to come to their fields. Fetching firewood becomes more challenging because of sudden drainage from the hydropower plant. Sometimes heavy rains raise the water level, and they are stuck in the forest. Now as the mother of a four-year-old girl and the co-breadwinner of her little family, Thu has more to worry about. Every flood season gives her anxiety that her backyard garden by the river bank would collapse, taking with it her crop of cassava, or worse: the life of her family. During nights of great storms, Thu and her husband have to pack their things and run to their sister’s house on the other side of the road for shelter, because their house has a leaky roof, and is very likely to be roofless from the wind.`
          : `Sự biến chuyển bất ngờ mà khí hậu diễn ra ở Nam Đông không chỉ đặt ra
        những thách thức về thu nhập với Thu, mà hơn cả còn là sự an toàn của
        người dân trong thôn. Đường trơn trượt, hay sạt lở khiến những ngày đi
        làm rẫy với chị em ở thôn Dỗi ngày càng khó khăn. Những lần đi lấy củi
        vất vả hơn, khi nước từ thủy điện xả xuống đột ngột, hoặc chị em dễ bị
        kẹt lại ở rừng lúc gặp mưa lớn, nước dâng cao. Thu còn nhiều nỗi lo hơn
        khi em đã là một người mẹ của cô con gái 4 tuổi, và là đồng trụ cột của
        gia đình nhỏ. Cứ đến mùa lũ lụt, em lại lo sợ mảnh đất sát bờ sông sau
        nhà sạt lở, không chỉ mất trắng thửa khoai mì trồng dở, mà còn nguy hiểm
        đến tính mạng của các thành viên trong gia đình. Hay những đêm bão to,
        vì nhà dễ bị tốc mái và dột, em phải cùng chồng gói ghém chút đồ đạc,
        chạy qua căn nhà vững chắc hơn của chị chồng em phía bên kia đường. Sau
        bão, cả gia đình mới dám về nhà.`}
      </p>

      <img style={{ width: "100%" }} src="images/hue-story/4-min.JPG" alt="4" />
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/hue-story/5.2-min.JPG"
          alt="5.2"
        />
        <img
          style={{ width: "50%" }}
          src="images/hue-story/5.1-min.JPG"
          alt="5.1"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Disasters are not much stranger to people here in Nam Đông, this mountainous area of Thừa Thiên Huế. This area often suffers from natural disasters, from droughts to storms. Its climate is characterized by tropical monsoon with heavy rainfall, combined with sloping terrain that easily causes flash floods and severe landslides. The vegetation cover here has been destroyed over time, making the ability to absorb water in some places very low, making this situation alarming.`
          : `Người dân ở Nam Đông quê Thu, huyện miền núi của tỉnh Thừa Thiên Huế
        không còn lạ gì với thiên tai. Đây là địa bàn thường xuyên chịu thảm họa
        thiên nhiên từ hạn hán đến bão. Khí hậu đặc trưng nhiệt đới gió mùa với
        lượng mưa lớn kết hợp với địa hình dốc dễ gây ra lũ quét và trượt lở đất
        nghiêm trọng. Lớp phủ thực vật ở đây bị tàn phá theo thời gian nên khả
        năng thấm nước ở một số nơi rất thấp càng khiến tình trạng trên báo
        động.`}
      </p>

      <img
        style={{ width: "100%" }}
        src="images/hue-story/11-min.jpg"
        alt="11"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Besides the sensitive geographical location, the socio-economic activities of the residents also alter the natural conditions, activating and intensifying disasters such as landslides in some areas. Small and medium irrigation works in the district, such as Khe Lá (Thượng Lộ), Ga Hồn (Thượng Long)... are degraded, putting many limitations on the storage and water supply in the dry season. Deforestation of watersheds, because of economic activities such as road construction, lake construction, dams, mining of minerals, and construction materials, is the most significant. The increase in agricultural, forestry, fishery, and industrial production activities leads to the expansion of arable land. Ever since, there has been more bare land and hills, which decrease protection from flash floods, landslides in the rainy season, and drought in the dry season; the soils cultivated for other purposes are gradually degraded, eroded, and polluted.`
          : `Bên cạnh vị trí địa lý nhạy cảm, các hoạt động kinh tế - xã hội của cư
        dân cũng tác động đến việc thay đổi điều kiện tự nhiên, làm cho thảm họa
        như trượt lở được kích hoạt và mạnh lên ở một số khu vực. Các công trình
        thủy lợi vừa và nhỏ trên địa bàn huyện, như Khe Lá (Thượng Lộ), Ga Hồn
        (Thượng Long)… bị xuống cấp nên việc tích và cấp nước vào mùa khô gặp
        nhiều hạn chế. Ảnh hưởng đáng kể nhất phải kể đến nạn phá rừng đầu
        nguồn, các hoạt động kinh tế như làm đường, xây dựng hồ, đập dâng, khai
        thác khoáng sản, vật liệu xây dựng. Hoạt động sản xuất nông lâm ngư
        nghiệp và công nghiệp ngày càng gia tăng, kéo theo việc mở rộng diện
        tích đất canh tác. Từ đó, những mảng đất trống đồi trọc tăng dễ dẫn đến
        gia tăng lũ quét, trượt lở đất vào mùa mưa và hạn hán vào mùa khô; Bên
        cạnh đó, các loại đất sử dụng cho mục đích khác dần bị bạc màu, xói mòn
        và ô nhiễm.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/hue-story/12.1-min.JPG"
          alt="12.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/hue-story/12.2-min.JPG"
          alt="12.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Thu participated in local climate change sharing sessions. She has clearly recognized the unpredictable changes in the weather where she was born and could feel that it has gradually become more severe. But perhaps, it’s not equally easy for her to look at climate change in a broader picture, in relations with her daughter and her family’s life or even her own’s, in the future. Will that picture answer the question of what will be left of the already meager agricultural income once the storms come even more frequent? Or who will take care of her daughter and family if she ever decides to leave the fields to distant work?`
          : `Thu từng tham gia những buổi chia sẻ về biến đổi khí hậu do địa phương
        tổ chức. Em nhận diện rõ nét những chuyển biến khó lường ở thời tiết nơi
        em sinh ra, cảm nhận được nó dần trở nên khắc nghiệt hơn. Nhưng có lẽ,
        chẳng dễ gì để em nhìn khí hậu ở một bức tranh rộng hơn, trong mối tương
        quan với cuộc sống của con gái em, của gia đình em và cả chính em ở thì
        tương lai. Bức tranh đó liệu có thể trả lời cho câu hỏi liệu nếu tần
        suất về những cơn bão càng gia tăng, thì nguồn thu nhập từ nông nghiệp
        vốn đã ít ỏi sẽ còn lại gì? Hay nếu em bỏ rẫy đi làm ăn xa, thì ai sẽ
        san sẻ cùng mối quan tâm về con cái hay gia đình?`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/hue-story/15-min.JPG"
          alt="15"
        />
        <img
          style={{ width: "50%" }}
          src="images/hue-story/16-min.JPG"
          alt="16"
        />
      </div>
      <img
        style={{ width: "100%" }}
        src="images/hue-story/14_fullscreen-min.jpg"
        alt="14"
      />
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/hue-story/17.1-min.JPG"
          alt="15"
        />
        <img
          style={{ width: "50%" }}
          src="images/hue-story/17.2-min.JPG"
          alt="16"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The worry about Thu's future lies in the next generation, her daughter. Thu, Díp, or young women in Dỗi hamlet have acquired skills of cultivation and animal husbandry from their grandmothers, mothers, and sisters, and then learned more from the women in the community. But few want their children to continue like this, given the precariousness they themselves are going through. Thu also cannot avoid that spiral of life. Working in factories with poor working conditions has frightened Díp, her sister-in-law, and many other friends of hers, and she surely doesn't want to repeat the same mistakes. But cultivation and other fieldwork are no longer safe for her to entrust her hope because of the unpredictable effects of Mother Nature.`
          : `Nỗi lo về tương lai của Thu nằm ở thế hệ tiếp theo, của con gái em. Thu,
        Díp, hay những người phụ nữ trẻ ở thôn Dỗi đã tiếp thu kỹ năng trồng
        trọt và chăn nuôi từ thế hệ bà em, mẹ em, chị em, rồi học hỏi thêm từ
        những người phụ nữ trong cộng đồng. Nhưng hiếm ai muốn con em họ tiếp
        nối công việc này, với sự bấp bênh mà chính họ đang đi qua. Thu cũng
        không tránh khỏi vòng xoáy đó. Việc đi làm ở những nhà máy với điều kiện
        làm việc kém đã là nỗi ám ảnh mà Díp, chị chồng em và nhiều bạn bè khác
        từng trải qua, và em cũng không muốn đi lại vết xe đổ. Nhưng nương rẫy
        và công việc đồng áng khác cũng không phải là niềm hy vọng mà em trao
        gửi hết bởi những tác động khó lường từ mẹ thiên nhiên.`}
      </p> */}
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

export default function Home({}) {
  const [lang, setLang] = useState("en"); // vi || en

  return (
    <>
      <LanguagePicker
        onEnClick={() => setLang("en")}
        onVnClick={() => setLang("vn")}
      />
      <Banner />

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/yen_bai/open.mp4"} type="video/mp4" />
      </video>

      {/* <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/hue_opening_small.mp4"} type="video/mp4" />
      </video> */}

      <Body lang={lang} />

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/yen_bai/end.mp4"} type="video/mp4" />
      </video>
      {/* <ImageSlider /> */}
    </>
  );
}

const Banner = () => (
  <div
    style={{
      position: "relative",
      textAlign: "center",
      color: "white",
    }}
  >
    <img
      width="100%"
      src={"/cheo/images/yen_bai/bia.jpg"}
      alt="opening"
      style={{ verticalAlign: "middle" }}
    />
    <h1
      style={{
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 30,
        fontFamily: "'Dancing Script', cursive",
      }}
    ></h1>

    <h2
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 50,
      }}
    >
      Mù Căng Chải - Yên Bái
    </h2>
  </div>
);
