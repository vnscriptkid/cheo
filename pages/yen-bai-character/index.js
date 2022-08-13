import { useState } from "react";
import Banner from "../shared/Banner";
import Header from "../shared/Header";
import LanguagePicker from "../shared/LanguagePicker";

const Body = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <div className="">
      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To those who haven’t been here, Mu Cang Chai echoes the feeling of a forsaken, lasting mountainous region, nestled by beautiful terraced fields. And to those who have touched its land,  Mu Cang Chai lingers on their soul through its Northern chilly air and the affection contained in the eyes of the locals. More than that, this land, 1000 meters above sea level, is also known for its wealth of minerals, natural resources, and Nature's gift of beautiful landscapes. However, all these gifts are not proportional to the livelihood of the locals. Mu Cang Chai is still facing the challenge of finding a suitable livelihood to make its way out of the poorest regions in Vietnam.`
          : `Với những ai chưa đến Mù Cang Chải, thị trấn nhỏ này gợi tưởng về một vùng núi heo hút vững chãi sau thửa ruộng bậc thang đẹp đến nao lòng. Với những ai đã từng đặt chân đến đây, Mù Cang Chải vương vấn lại tâm hồn người đi bằng chút không khí se lạnh của núi rừng Tây Bắc và sự trìu mến chất chứa trong ánh mắt người dân bản địa. Không chỉ vậy, vùng đất cao hơn mực nước biển 1000m này còn gắn liền với sự giàu có về khoáng sản, cảnh vật, tài nguyên thiên nhiên. Tuy nhiên, sự trù phú mà thiên nhiên dành tặng không tỷ lệ thuận với sinh kế mà người dân trong thị trấn có được. Mù Cang Chải vẫn đối mặt với thách thức trong việc tìm ra kế mưu sinh phù hợp để thoát khỏi chỗ đứng trong những vùng nghèo nhất nước.`}
      </p>

      <img
        width="100%"
        src={"/cheo/images/yen_bai/final/1.jpg"}
        alt="opening"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mua Thi Mua, our character in the project’s second story, Mu Cang Chai is both a friend and a stranger. Though it is not her birthplace, the place itself and its people have been indelibly photographed in her mind by fate. When she was still a law student, she initiated some social projects in Mu Cang Chai. Later, in her visits to her friend’s, who is now her husband, hometown, she became more familiar with the place. Mu Cang Chai reminds Mua of her lovely and intimate Nam Po,  Dien Bien where she was born, though it is also a land notorious for drug trafficking, child marriage and human trafficking acrossing Vietnam-Laos border. Life here in this tourist town also shares some similarities with the Hmong community where she grew up. Better than anyone else, in her mind, these images were ingrained: the immensity of the terraced fields, the softness of the golden rays of sunlight every morning, and the pristine water channel flowing from the mountain for irrigation.`
          : `Với Mùa Thị Mua, nhân vật của câu chuyện thứ 2 trong dự án, Mù Cang Chải vừa thân quen vừa lạ lẫm. Đây không phải là nơi em sinh ra, nhưng bằng những mối nhân duyên khác nhau, bối cảnh và con người của vùng đất này dần in sâu vào tâm trí em.  Khi còn là cô sinh viên ngành luật, em từng có dịp thực hiện các dự án xã hội tại đây. Hay trong những lần về thăm gia đình người bạn đời hiện tại, em cũng được nhìn ngắm thị trấn này thêm nhiều lần khác. Mù Cang Chải gợi cho em khung cảnh thân thương về Nậm Pồ, Điện Biên nơi Mua sinh ra, vùng đất khét tiếng với buôn bán ma túy, nạn tảo hôn và buôn bán người qua biên giới Việt - . Bối cảnh đời sống ở thị trấn du lịch này cũng san sẻ những điểm chung với cộng đồng người HMong em lớn lên. Hơn ai hết, tâm thức em hiện rõ sự mênh mông của thửa ruộng bậc thang, sự êm dịu của những đợt nắng vàng rực vào mỗi sáng, hay sự nguyên sơ của từng kênh nước chảy đều từ núi mỗi lần tưới tiêu.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/2.1.jpg"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/2.2.jpg"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Perhaps, these mosaic fragments of memory had kept Mua encouraged to put her first brick into Na Na - a circular economy project aimed to generate income from products of Hmong farmers in Mu Cang Chai.  Mua understands that the effort she is making is about just about a brand, but it is for her family, for the Hmong community in the area. They are those who are under the threat of unsustainable livelihoods amid many unexpected fluctuations of life such as pandemics and climate change. Therefore, with the small project that she and her companions cherished, Mu Cang Chai will be the beginning, so that Na Na's spirit will grow and expand to other places in the region, providing tools and techniques for farmers to keep indigenous seeds from the effects of climate change. Especially, through the project's name "Na Na", the Hmong language for "Mother, mother", Mua hopes it will grow through the care of mothers and sisters in the community. Hmong women are gentle and yet they are equally courageous, and they always seek ways to strive despite many challenges in family and farming life.`
          : `Có lẽ, những mảng màu mosaic rời rạc trong ký ức phần nào tiếp thêm động lực cho Mua để đặt viên gạch đầu tiên cho Ná Nả - dự án kinh tế tuần hoàn nhằm tạo nguồn thu nhập bền vững cho bà con nông dân người Hmong tại Mù Cang Chải dựa trên các sản phẩm bản địa. Với Mua, em hiểu rằng nỗ lực em đang xây dựng không chỉ dành cho một cái tên nhất định, mà còn là cho cả gia đình em, cho cộng đồng người Hmong trong khu vực, những người đang đối mặt với thách thức về sinh kế không bền vững giữa nhiều biến động bất thường của đời sống như đại dịch hay biến đổi khí hậu. Vì thế, trong kế hoạch nho nhỏ mà em cùng người bạn đồng hành ấp ủ, Mù Cang Chải sẽ là nơi khởi đầu, để rồi tinh thần của Ná Nả sẽ tiếp tục mở rộng đến nhiều nơi khác trong vùng, cung cấp các công cụ và kỹ thuật cho nông dân nhằm bảo vệ các loại hạt giống bản địa khỏi tác động của biến đổi khí hậu. Đặc biệt, như đúng cái tên “Ná nả”, trong tiếng Mông nghĩa là “Mẹ ơi, mẹ”, Mua mong cầu dự án sẽ được nuôi nấng bằng sự chăm chút của những người mẹ, người chị trong cộng đồng. Họ là người phụ nữ Mông dịu dàng nhưng không kém phần mạnh mẽ, luôn tìm cách để vươn lên trong đời sống gia đình và nương rẫy còn nhiều lo toan. `}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/3.1.jpg"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/3.2.jpg"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The Hmong is one of the ethnic minority groups living mainly in the northwest extreme point of Vietnam. The Hmong are not just residing in Mu Cang Chai, or Dien Bien where Mua was born, but also in many different provinces. In recent years, in particular destinations such as Mu Cang Chai and Sapa, tourism has developed, creating more economic resources for the Hmong community. However, these are not sustainable sources of income they could rely on. The life of the Hmong is about the cultivation of terraced fields, honeycombs, chicken coops, and cultivation fields. Therefore, their fundamental livelihood is heavily dependent on nature. Weather changes in recent years have directly affected the life of Hmong households. For women, in particular, tourism brings both opportunities and challenges. The situation indeed offers men different employment opportunities. However, this in turn puts pressure on women, in the name of equality in the family, to go outside to earn money. This is not easy for Hmong women. Prejudice about gender and ethnicity has been deeply rooted in the community, now deepened by the invisible impacts of the pandemic and climate change. Layers of layers pile up creating a vicious circle straining the lives of Hmong women.`
          : `Hmong là một trong những nhóm người dân tộc thiểu số nằm chủ yếu ở phía Tây Bắc Việt Nam, nơi đỉnh đầu tổ quốc. Người Hmong tập trung sinh sống chủ yếu không chỉ ở Điện Biên, nơi Mua sinh ra hay Mù Cang Chải mà trải dài ra nhiều tỉnh thành khác nhau. Những năm gần đây, ở một vài điểm đến đặc biệt như Mù Cang Chải, Sapa, du lịch dần phát triển, tạo thêm nguồn lợi kinh tế cho cộng đồng người  HMông. Tuy nhiên, đó không phải là nguồn lợi bền vững mà họ phụ thuộc vào. Đời sống của người Hmong gắn với nương rẫy, với thửa ruộng bậc thang, với tổ mật ong, với chuồng gà, hay những cánh rừng. Thế nên, nguồn sinh kế cơ bản thường phụ thuộc nhiều vào thiên nhiên. Sự biến chuyển của thời tiết trong nhiều năm gần đây ảnh hưởng trực tiếp đến đời sống của những hộ gia đình người Hmong. Đặc biệt đối với nhóm phụ nữ, tác động của du lịch vừa mang lại cơ hội nhưng cũng là thách thức. Người đàn ông được mang lại các cơ hội việc làm khác nhau, nhưng chính điều này lại tạo áp lực ra ngoài kiếm tiền lên phụ nữ để có được sự bình đẳng trong gia đình. Điều này chẳng hề dễ dàng với phụ nữ Hmong. Định kiến về giới và nhóm người thiểu số đã là vấn đề ăn sâu trong cộng đồng, giờ đây lại khoét sâu bởi những ảnh hưởng vô hình từ đại dịch, biến đổi khí hậu. Từng lớp lang chồng chất tạo nên một vòng luẩn quẩn mà ôm chặt lấy cuộc sống của những người phụ nữ Hmong.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/4.1.jpg"
          alt="4.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/4.2.jpg"
          alt="4.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `In Nam Po, Dien Bien where Mua returns each year, the rainy season comes earlier, yet it is much drier, because precipitation decreases. She can clearly see the difference in her parents' sowing fields compared to the days when she was a little girl following her parents to the fields.  It is not just her parents, but all her relatives and acquaintances in the community who are sowing rice in fields with no water available. The rice plant depends on rain, once sown for a few days without water, it will be damaged, and unable to germinate. In phone calls with Mua from a distance, her mother could not explain why "it has been sunny for so long, the seeds could not sprout". Many farmers have given up farming to work in China. Farming in the traditional Hmong style is very challenging, especially when the weather is hot. Farming used to be simple in cool weather, but now it's more difficult because it's getting warmer. Weather therefore affects their earnings. Last year (2020), Mua's family produced 63 bags of rice, but only 30 for this year. `
          : `Ở Nậm Pồ, Điện Biên, nơi Mua thường trở về mỗi năm, mùa mưa đến sớm hơn nhưng lại khô hơn ngày trước, lượng nước mưa dần ít hơn. Những thửa ruộng đang gieo của cha mẹ em đã có sự khác biệt rõ ràng so với những ngày em còn là một cô bé nhỏ và theo chân cha mẹ đi gieo gặt. Không chỉ cha mẹ em, mà cả những người họ hàng, những gương mặt khác trong cộng đồng đều đang gieo lúa trên những thửa ruộng không có nước. Tất cả lúa đều phụ thuộc vào mưa, nhưng nếu gieo vài ngày mà không có nước thì cây sẽ hư, không nảy mầm được. Trong những cuộc điện thoại với Mua khi xa nhà, mẹ em cũng chẳng lý giải được vì sao “trời nắng quá lâu, hạt không gieo được”. Nhiều nông dân đã bỏ nghề nông để sang Trung Quốc làm việc. Làm ruộng theo kiểu truyền thống của người Hmông rất khó, nhất là khi thời tiết nắng nóng. Việc canh tác trước đây đơn giản vì không khí mát mẻ, nhưng bây giờ khó khăn hơn vì trời nóng hơn. Thời tiết cũng có ảnh hưởng đến thu nhập; năm ngoái (2020), gia đình em thu được 63 bao gạo nhưng năm nay chỉ nhận được 30 bao.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "33.333%" }}
          src="images/yen_bai/final/5.1.jpg"
          alt="5.1"
        />
        <img
          style={{ width: "33.333%" }}
          src="images/yen_bai/final/5.2.jpg"
          alt="5.2"
        />
        <img
          style={{ width: "33.333%" }}
          src="images/yen_bai/final/5.3.jpg"
          alt="5.3"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `In Mu Cang Chai whose geographical features considerably differ from Nam Po’s, the story is barely more optimistic. In recent years, the town has been clearly affected by climate change. Once a place that never experienced severe water shortage for its position on the headwaters of many streams, Mu Cang Chai is now facing low rainfall and delayed rainy seasons. Cultivation lands are parched, evident in the highland terraced fields. In the past, forest fires and outdated cultivation methods were considered the principal causes of uncontrollable water volume: water shortage during the dry seasons and excess water during the rainy season. Now, pressure from population growth as well as mass tourism contributes to unpredictable climate change. Because of storms and tornadoes, hundreds of households having their homes in areas with a high risk of landslides must relocate, many irrigation works are severely damaged, and hundreds of hectares of crops are affected, thereby directly affecting the livelihoods of the locals.`
          : `Ở Mù Cang Chải, nơi có đặc điểm địa lý khác xa so với Nậm Pồ, câu chuyện cũng chẳng lạc quan hơn là bao. Thị trấn nhiều năm gần đây chịu tác động rõ nét từ biến đổi khí hậu. Từ một địa bàn đầu nguồn, chưa bao giờ thiếu nước sản xuất trầm trọng, Mù Cang Chải giờ đây phải đối diện với lượng nước mưa ít, mùa mưa đến muộn hơn thường lệ. Diện tích đất trồng cho các vụ mùa bị khô nứt, hiện hữu rõ trên những thửa ruộng bậc thang vùng cao. Trong quá khứ, nạn cháy rừng cũng như các phương thức làm rẫy lạc hậu được coi là một trong những nguyên nhân dẫn đến tình trạng thiếu nước vào mùa khô và dư nước vào mùa mưa, lượng nước dần mất kiểm soát. Giờ đây, áp lực từ việc gia tăng dân số cũng như du lịch đại trà càng góp phần vào quá trình biến đổi khó lường của khí hậu. Do ảnh hưởng từ bão và lốc xoáy, nhiều ngôi nhà và hàng trăm hộ dân nằm trong vùng có nguy cơ sạt lở cao phải di dời; nhiều công trình thủy lợi bị hư hỏng nặng, hàng trăm ha hoa màu bị ảnh hưởng, từ đó ảnh hưởng trực tiếp đến sinh kế người dân.`}
      </p>

      <div>
        {/* <audio controls autoPlay={false} style={{ position: "absolute" }}>
          <source src="/cheo/audios/loa_phat_thanh.m4a" type="audio/ogg" />
        </audio> */}
        <img width="100%" src={"/cheo/images/yen_bai/final/6.jpg"} alt="6" />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mua, climate change becomes more pronounced over time. In her somewhat faint memory, Mua remembers her parents and her rushing from their makeshift hut on the mountain into the deep forest because of a sudden big flood when she was only 4 years old. History repeats itself after 12 years, but then Mua was studying at university in Ha Noi , the capital of Vietnam, only listening to her mother over the phone. It wasn't until she started Na Na and spent more time on this community project for her hometown that she saw more clearly the cracks in the waterless fields, the erosion from the landslides, and the obscurity of dangerous trips to look for jobs across borders of women in her community.`
          : `Với Mua, biến đổi khí hậu dần rõ nét hơn theo thời gian. Trong ký ức có phần đã mờ nhạt, Mua nhớ em và cha mẹ vội từ căn chòi dựng tạm trên núi vào rừng sâu vì một trận lũ lớn bất ngờ ập đến khi em chỉ mới 4 tuổi.  Điều này lặp lại tương tự sau 12 năm, nhưng lúc này Mua đang học đại học ở thủ đô, chỉ nghe mẹ em thuật lại qua điện thoại. Đến khi bắt tay với Ná Nả, dành thời gian hơn cho dự án cộng đồng ở quê hương, em mới thấy rõ nét hơn sự nứt rạn của những thửa ruộng không nước nơi quê em, sự lở loét của những mảng đất sạt lở,  sự mù mịt của những chuyến đi kiếm việc làm nơi biên giới nguy hiểm của những người phụ nữ trong cộng đồng em.`}
      </p>

      <img width="100%" src={"/cheo/images/yen_bai/final/7.jpg"} alt="7" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The more attached she gets to Na Na and the community, the more she understands the significance of her return this time. When she was a college student, Mua never thought she would come back. To many, her journey is such a paradox. Days and days she tried her best to get out of these sterile fields to come to Ha Noi, eager to explore the world. And yet, after her dream came to a realization, she chose to come back to her birthplace. She is one of the very rare cases in her hometown attending university, though her family and community conditions put a great obstacle to that. What we know is, to finish this four-year bachelor's program in Law, she had experienced all sorts of part-time jobs, including waiting tables for food stalls, so she didn’t have to ask for support from her family.`
          : `Tình cảm vun đắp cho Ná Nả và cộng đồng càng nh cũng là khi Mua hình dung rõ hơn ý nghĩa của lần trở về này. Lúc còn ngồi trên giảng đường đại học, em chưa bao giờ hình dung một ngày nào đó, mình sẽ lại trở về quê hương. Đối với nhiều người, thật nghịch lý khi nhìn thấy hành trình của Mua. Từ những ngày nỗ lực hết mình để rời những thửa ruộng khô cằn đến thủ đô khám phá thế giới mới, để rồi khi có được những gì em mơ ước trong tay, em lại chọn quay về với quê hương mình. Em là trường hợp hiếm hoi theo học đại học tại quê mình dù điều kiện sống của gia đình hay cộng đồng chẳng dễ dàng để em có thể thực hiện tâm nguyện đó. Chỉ biết rằng, để hoàn thành 4 năm học với tấm bằng cử nhân Luật trên tay, em đã chọn đi làm thêm ở nhiều nơi khác nhau từ quán cháo, quán bún mà không xin sự hỗ trợ từ gia đình.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/8.1.jpg"
          alt="8.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/8.2.jpg"
          alt="8.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mua, the decision comes as it has to be. She sensed something different in her even when she was little. In the rare moments of resting after reaping the rice, she didn't join her friends to have fun but rather took walks in the deserted forests where she relaxed on the grass, under the trees, talked, and laughed with herself. She loved walking alone, and sometimes the walk was 5-6 km from the family's field back home. She didn't care about getting married or working at the border either, though it was the ideal vision friends her age talked about as they hit puberty.`
          : `Với Mua, em chẳng bỡ ngỡ với những quyết định tự thân. Ngay từ bé, em đã thấy mình lạ lẫm so với các bạn đồng lứa. Trong những lần hiếm hoi nghỉ ngơi sau khi gặt lúa, em không tham gia tụ họp cùng bạn bè vui chơi mà thường chọn dạo bộ trong những mảnh rừng vắng, thả mình trên bãi cỏ, trong rặng cây, nói chuyện và cười đùa với chính mình. Em thích đi dạo một mình, có những hôm còn đi 5-6km từ ruộng của gia đình về nhà. Em cũng chẳng để tâm đến chuyện cưới chồng hay đi làm ở biên giới, bức tranh điển hình mà bạn bè em luôn nói với nhau khi họ bắt đầu bước vào giai đoạn dậy thì.`}
      </p>

      <img width="100%" src={"/cheo/images/yen_bai/final/9.jpg"} alt="9" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Higher study is also not an easy decision where Mua was born. Limited economic conditions and identification of ethnic minorities often discourage girls  from continuing their higher education. Therefore, instead, they often work in factories on the plains or the border. Or they choose marriage and stay at home to take care of the family. Mua, however, only knew one thing for certain: she wanted to go to university and wanted to continue to learn more about the big, big world around her. Her dream, as we see, doesn't stop at the farms and crops at home, but it travels further and wider.`
          : `Việc chọn học cao hơn cũng không phải là quyết định dễ dàng ở vùng đất em sinh ra.  Điều kiện kinh tế giới hạn, định danh dân tộc thiểu số  thường không khuyến khích trẻ em gái học lên cao. Thay vào đó, các em thường đi làm ở các nhà máy dưới đồng bằng hoặc nơi biên giới. Hoặc chọn cưới chồng và ở nhà chăm sóc gia đình. Với Mua, em chỉ biết rõ một điều là em muốn đi học, muốn tiếp tục biết thêm về thế giới rộng lớn xung quanh em. Giấc mơ của em không chỉ dừng lại ở quê nhà, mà còn mong đi xa hơn, rộng hơn.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/10.1.jpg"
          alt="10.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/yen_bai/final/10.2.jpg"
          alt="10.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Now, her dream feeds on her concern for her origin, for the faces she grew up with, and for their sustainable livelihood she considers her responsibility. She has in her other little dreams, one about her own little garden for her own little family, another about movies she could direct in the future. But for now, she is all about the sustainability for which not just Mua but her whole community is yearning.`
          : `Giờ đây, giấc mơ của em nằm trong sự trăn trở của em về cội nguồn, về những gương mặt người mà em lớn lên cùng, về kế sinh nhai bền vững mà em nghĩ mình là một phần của câu chuyện. Em vẫn nuôi những giấc mơ nhỏ khác trong mình, về một khu vườn rừng cho gia đình nhỏ của em, về những bộ phim mà em có thể làm trong tương lai. Nhưng điều mà em hướng đến hiện giờ, là sự bền vững mà không chỉ em, mà còn là cả cộng đồng em thuộc về. `}
      </p>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Mua remembers the day of her first footsteps in Ha Noi for her higher education. On her feet were the honeycomb sandals whose soles were worn out and tinged with earth. Her friend said it would be better for her to change into a pair of high heels or stylish sandals. In response, she simply smiled and continued to go to school in her very same sandals. Years later, Mua still wears this idyllic pair of honeycomb sandals as she treads into the remote hills, instructing each household to store indigenous seeds and take care of their gardens without damaging the land. It is the same honeycomb sandals, and it can't stop her steady footsteps. It is the step of a girl from an ethnic minority community in the highlands, once wanting to come down to the plain to pursue their dreams, who then bravely gave up their ambitions, returning home, on the same steady footsteps, to nurture the land that has nurtured her since birth.`
          : `Mua vẫn còn nhớ ngày đầu tiên em đặt chân đến thủ đô để theo học đại học. Trên chân em là đôi dép tổ ong đã mòn đế và nhuốm màu đất. Bạn em có bảo sẽ tốt hơn nếu em thay một đôi giày cao gót hay dép kiểu cách. Mua chỉ cười và vẫn tiếp tục giữ nguyên đôi dép ấy đến trường. Sau nhiều năm, Mua vẫn mang một đôi dép tổ ong để vào những mảnh đồi xa, hướng dẫn cho từng hộ gia đình cách lưu giữ hạt giống bản địa, cách chăm sóc mảnh vườn mà không tổn hại đến đất đai. Cũng là đôi dép tổ ong giản đơn, nhưng chẳng thể nào cản được bước chân vững chắc của em. Đó là bước chân từ một cộng đồng dân tộc thiểu số ở vùng cao tìm về với đồng bằng theo đuổi ước mơ, để rồi cũng mạnh dạn đặt xuống những tham vọng của mình, trở về với nơi mình ra đời, trên chính bước chân ấy, để nuôi dưỡng cho cội nguồn mình được sinh ra. `}
      </p>
    </div>
  );
};

export default function Home({ }) {
  const [lang, setLang] = useState("en"); // vi || en

  const isEnglish = lang === "en";

  return (
    <>
      <Header
        isEnglish={isEnglish}
        onEnClick={() => setLang("en")}
        onVnClick={() => setLang("vn")}
      />

      {/* <img width="100%" src={"/cheo/images/yen_bai/final/bia.jpg"} alt="opening" />*/}
      <Banner
        url={`/cheo/images/yen_bai/final/bia.jpg`}
        isEnglish={isEnglish}
        enText={"Mu Cang Chai - Yen Bai"}
        viText={"Mù Cang Chải - Yên Bái"}
      />

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/yen_bai/open.mp4"} type="video/mp4" />
      </video>

      <Body lang={lang} />

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/yen_bai/end.mp4"} type="video/mp4" />
      </video>
    </>
  );
}

// const Banner = ({ isEnglish }) => (
//   <div
//     style={{
//       position: "relative",
//       textAlign: "center",
//       color: "white",
//     }}
//   >
//     <img
//       width="100%"
//       src={"/cheo/images/yen_bai/final/bia.jpg"}
//       alt="opening"
//       style={{ verticalAlign: "middle" }}
//     />
//     <h1
//       style={{
//         position: "absolute",
//         top: "5%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         fontSize: 30,
//         fontFamily: "'Dancing Script', cursive",
//       }}
//     ></h1>

//     <h2
//       style={{
//         position: "absolute",
//         top: "40%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         fontSize: 50,
//       }}
//     >
//       {isEnglish ? "Mu Cang Chai - Yen Bai" : "Mù Cang Chải - Yên Bái"}
//     </h2>
//   </div>
// );
