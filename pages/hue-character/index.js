// import img from "../../public/images/mu-cang-chai/_DSC0094-min.JPG";
// import style from "./style.scss";

import { useState } from "react";
import Carousel from "react-multi-carousel";
import ReactAudioPlayer from "react-audio-player";
import LanguagePicker from "../shared/LanguagePicker";

// import sample from "../../public/videos/duongvao.mp4";

// export default function Article({}) {
//   return (
//     <>
//       {/* <img src="images/mu-cang-chai/_DSC0094-min.JPG" alt="image-1" /> */}
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

// const Header = () => {
//   return (
//     <header className="header">
//       <span className="logo">Who is she?</span>
//       <ul className="actions-list">
//         <li className="action-list-item">About</li>
//         <li className="action-list-item">Showcase</li>
//         <li className="action-list-item">More</li>
//       </ul>
//     </header>
//   );
// };

const Banner = () => {
  return (
    <div className="bg-image img1 banner">
      <div className="banner-content">
        {/* <h1 className="banner-header">Hue char?</h1>
        <p className="banner-desc">
          ProPublica and The New York Times Magazine, with support from the
          Pulitzer Center, have for the first time modeled how climate refugees
          might move across international borders. This is what we found.
        </p> */}
      </div>
    </div>
  );
};

const About = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <div className="">
      {/* <h2>Who is she? </h2> */}

      <p style={{ padding: "0 300px" }}>
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
        src={"/cheo/images/hue-story/13_fullscreen-min.JPG"}
        alt="opening"
        // style={{ verticalAlign: "middle" }}
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
        style={{ width: "100%", verticalAlign: "middle" }}
        src="images/hue-story/1.1-min.JPG"
        alt="1.1"
      />
      <img
        style={{ width: "100%", verticalAlign: "middle" }}
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

      <div>
        <audio controls autoPlay={false} style={{ position: "absolute" }}>
          <source src="/cheo/audios/loa_phat_thanh.m4a" type="audio/ogg" />
        </audio>
        <img
          style={{ width: "100%", verticalAlign: "middle" }}
          src="images/hue-story/4-min.JPG"
          alt="4"
        />
        {/* <img width="100%" src={"/cheo/images/yen_bai/6.jpg"} alt="6" /> */}
      </div>
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
        src="images/hue-story/11-min.JPG"
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
        style={{ width: "100%", verticalAlign: "middle" }}
        src="images/hue-story/14_fullscreen-min.JPG"
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

export default function Home({}) {
  const [lang, setLang] = useState("en"); // vi || en

  const isEnglish = lang === "en";

  return (
    <>
      <audio controls autoPlay={true}>
        <source src="/cheo/audios/loa_phat_thanh.m4a" type="audio/ogg" />
      </audio>
      <LanguagePicker
        onEnClick={() => setLang("en")}
        onVnClick={() => setLang("vn")}
      />
      <div
        style={{ position: "relative", textAlign: "center", color: "white" }}
      >
        <img
          width="100%"
          src={"/cheo/images/hue-story/opening-min.JPG"}
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
        >
          <span className="love love--small">&#9829;</span>
          Future Rising Fellowship
          <span className="love love--small">&#9829;</span>
        </h1>

        <h2
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 50,
          }}
        >
          {isEnglish ? "Nam Dong - Hue" : "Nam Đông - Huế"}
        </h2>
      </div>

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/hue_opening_small.mp4"} type="video/mp4" />
      </video>

      <About lang={lang} />

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/hue_ending_small.mp4"} type="video/mp4" />
      </video>
      {/* <ImageSlider /> */}
    </>
  );
}
