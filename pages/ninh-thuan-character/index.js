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
          ? `The sky turned dark. The sound of thunder seemed closer by minutes. Rain drops started to mark their trails on the cement front yard. Quyền, our third character, hurried to the back of her house, collecting the clothes she hung which now exposed to the rain. Frequent afternoon rain has been a familiar sight during early April in Phước Bình, Ninh Thuận where Quyền was born and raised.`
          : `Bầu trời ngả màu xám tro, tiếng sấm dần rõ nét hơn, nền đất trước hiên nhà đã xuất hiện đôi vệt nước rơi. Quyền, nhân vật thứ 3 trong dự án, chạy vội ra sau nhà, kéo ít áo quần đang phơi còn sót lại. Những buổi chiều mưa kéo dài dần thành một khung hình quen thuộc vào những ngày đầu tháng 4 ở Phước Bình, Ninh Thuận, nơi Quyền sinh ra và lớn lên.`}
      </p>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Years ago, when Ninh Thuận suffered a crisis of water shortage and drought, Quyền along with her family struggled with cultivation work, and so, better than ever, she treasured these early rains. Rains fertilize crops, refresh the air, and in such a place with stiflingly hot weather like Ninh Thuận, rains are the savior. With eagerness, Quyền waited for the beginning of rainy season to start growing her crop after the scorching March. However, things have changed, and those downpouring, lingering rains are putting a weight on her heart.`
          : `Nhiều năm về trước, giai đoạn Ninh Thuận trải qua cuộc khủng hoảng về nước tưới tiêu, hạn hán hoành hành, Quyền cùng gia đình phải vật lộn với nương rẫy, nên em hiểu giá trị của những cơn mưa đầu mùa hơn bao giờ hết.  Mưa làm cây cỏ tốt tươi hơn, khí hậu mát mẻ hơn, đặc biệt là khi nó xua đi sự oi bức đặc trưng ở một vùng đất mà nắng nóng bao trùm – Ninh Thuận. Với Quyền, đầu mùa mưa còn là những ngày em nóng lòng gieo trồng sau cơn hạn hán nắng gắt tháng Ba. Nhưng bây giờ, bối cảnh đã thay đổi, những cơn mưa xối xả kéo dài lại dấy lên trong lòng em nỗi bận tâm khác. `}
      </p>

      <img
        width="100%"
        src={"/cheo/images/ninh-thuan/final/05-min.jpg"}
        alt="10"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Quyền’s hometown, Phước Bình, is a flat area with a national park whose vegetation is dense and diverse. This land has been welcoming and nourishing her family since the day they came to establish a new village decades ago. Fertile strips of land and cold, pleasing airflow, though only with two seasons of rain and dry, are perfect for plants and trees to grow. Sources of spring water flowing to the Cái River had never been exhausted. Rich land nurtured sweet pomelo orchards, fragrant coffee gardens, and green banana fields. But one cannot think of Phước Bình without its cashew farms. Cashew nuts brought the Raglai households their most stable income. During the pandemic, it was also the most reliable source, as the price of cashew nuts remained during and after it. However, cashew trees cannot stand steady rains. Rains make the cashew fruits lose their sweetness and even fall off the tree, and therefore declining yields. Instead of big sacks of cashew fruits, now Quyền could only collect 2 to 3 kilograms for the whole morning, which earns her family a humble day of food. For two years now, Phước Bình’s cashews that once lifted the Raglai out of poverty, have been mentioned with bitterness, “With all these rains… Phước Bình’s cashew crops are doomed to fail again!”`
          : `Phước Bình quê Quyền là vùng đất nằm trải dài thuộc khu vực vườn quốc gia với thảm thực vật dày dặn và đa dạng. Nơi đây nuôi dưỡng gia đình em từ những ngày đầu trôi dạt lập làng nhiều thập kỷ về trước.  Những dải đất màu mỡ,  luồng khí hậu mát mẻ, tuy chỉ có hai mùa mưa – nắng nhưng vừa vặn để cây cối phát triển. Nguồn nước suối chảy về sông Cái cũng chưa bao giờ rơi vào tình cảnh cạn kiệt.  Đất đai tươi tốt nuôi dưỡng những vườn bưởi ngọt dịu, những vườn cà phê thơm nứt, hay đến những rẫy chuối xanh mướt. Nhưng nhắc về Phước Bình, thì chẳng thể nào thiếu được những vườn điều. Hạt điều là nguồn thu nhập ổn định nhất các hộ gia đình Raglai. Trong mùa dịch, nguồn thu nhập từ điều được coi là ổn định nhất, vì giá cả không bị ảnh hưởng trong và sau đại dịch. Tuy nhiên, điều không phải là thức quả hợp với những cơn mưa dai dẳng. Mưa làm cho trái điều nhạt và rụng nhiều, sản lượng từ đó cũng giảm đi. Thay vì những bao tải điều như trước kia, giờ đây, sau một buổi sáng thu nhặt, cô cũng chỉ có thể kiếm được tầm 2-3kg, đổi được một ngày cơm cho cả gia đình. Hai năm trở lại đây, điều Phước Bình, thức trái từng giúp người Raglai thoát nghèo, giờ đây chỉ được nhắc đến trong cái chép miệng :”Dân Phước Bình năm nay lại chết điều rồi, mưa gió kiểu này”.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/04-min.jpg"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/09-min.jpg"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The word “again”, as much as it denotes the real repetition of the situation, connotes the people’s resignation of something out of hand. After the 12th storm in 2020, the range of rainfall has been unpredictable. Rains are no longer a helper to crops and dry lands like they were to annual serious droughts in March, April, September, and October. Now, they are pouring as if Nature is taking all of her wrath out. Lasting heavy rains lead to floods. A large area from the south of Khánh Hòa to the north of Ninh Thuận, and to Phan Rang, is white with seething water foam, and in some places the water is 2 to 4 meter deep. Besides flooding, whirlwinds are also a "specialty" often seen in Ninh Thuận in stormy seasons.`
          : `Từ “lại” ở đây vừa diễn đạt sự lặp lại theo đúng nghĩa đen, và còn ẩn chứa sự cam chịu về một điều mà những người dân ở đây tuy không hề mong muốn nhưng vẫn phải chấp nhận. Kể từ sau cơn bão số 12 năm 2020, lượng mưa vào mùa mưa chợt trở nên khó đoán. Nó không còn là những cơn mưa giúp mùa màng tươi tốn, tưới mát cho những thửa đất khô cằn vào những ngày hạn hán lịch sử vào tháng 3-4 hay tháng 9-10, giờ đây, nó như trút hết sự giận dữ mà thiên nhiên mang trong lòng. Mưa lớn kéo dài dẫn đến lũ lụt. Cả một vùng đất rộng lớn từ Nam Khánh Hòa đến Bắc Ninh Thuận, qua Phan Rang, nước trắng xóa, có nơi ngập sâu 2-4 m.  Bên cạnh ngập lụt, gió lốc cũng là một “đặc sản” thường thấy ở Ninh Thuận vào mùa bão.
`}
      </p>

      <img
        width="100%"
        src={"/cheo/images/ninh-thuan/final/01-min.jpg"}
        alt="01"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The little house Quyền anh her husband built after their marriage has withstood the storms of 2020, but Quyền is doubtful it could stand storms to come. The house she currently lives in with her mother is built on a loan, to fight the harsh weather on a stormy day. Prolonged rains are not only a challenge to daily life of the family, but they also make it common for farming households in the area to hopelessly wake up to their gardens messy with ruins of durian, pomelo, bananas, cashew fruits.`
          : `Căn nhà nhỏ của Quyền cùng chồng mới được dựng sau khi cưới đã từng chống chọi qua mùa bão năm 2020, nhưng cô không chắc rằng nó có thể tiếp tục đứng vững nhiều năm tới. Căn nhà hiện tại mà cô ở cùng mẹ cũng là kết quả của việc vay tiền dựng mới để chống chọi với thời tiết khắc nghiệt trong ngày mưa bão. Những cơn mưa kéo dài không chỉ là thách thức với đời sống gia đình thường nhật, mà còn khiến nhiều hộ dân trồng trọt trong vùng tập làm quen với việc thức dậy rồi lặng lẽ nhìn những mảnh vườn với cơ mang là sầu riêng, bưởi, chuối, điều lẫn vào nhau như đống hoang tàn còn sót lại.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/06-min.jpg"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/07-min.jpg"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `It is difficult to encourage the Raglai to stay in the land that protected and loved them many years ago when things are no longer the same. We know that in any society changes are inevitable, but the layers and layers of problems piled up as transitions of climate, economic life, and family traditions interwoven, accelerates people seeking jobs away from home. In those trips to seek jobs, young women do not think about anything further than escaping the poverty besieging them, so that their small families can have a better life. Those rolling strips of arable land, the vast forests that once fed generations of their grandparents and parents, are now no longer sufficient to keep them whose eyes sparkle with sadness. For those who choose to work away for the first time, it is not easy for them to determine whether working in the factory or in the fields is easier. But at least, down to the plains where factories tightly spaced, being paid with the starting salary, they could already earn an income 4 times as much as they do at home where they reply on some banana trees, humble crops of corn, cashew, pomelo orchards that easily affected by the erratic weather.`
          : `Thật khó để bắt người dân Raglai tiếp tục trụ lại ở vùng đất đã từng bảo bọc và yêu thương họ nhiều năm về trước khi mà mọi thứ không còn như xưa. Vẫn biết là sự thay đổi là không thể tránh khỏi trong bất cứ bối cảnh xã hội nào, nhưng lớp lang chồng chất trong sự biến chuyển từ khí hậu, đời sống kinh tế, truyền thống gia đình đan xen vào nhau, càng đẩy nhanh hơn những chuyến đi làm ăn xa nhà. Những chuyến đi mà những người phụ nữ trẻ không nghĩ về  hệ quả xa hơn, mà chỉ đơn thuần mong thoát được cái nghèo bủa vây, để gia đình nhỏ của họ có cuộc sống tốt đẹp hơn. Những dải đất nương rẫy trập trùng, những cánh rừng bạt ngàn đã từng nuôi sống thế hệ ông bà, cha mẹ, giờ đây không còn đủ sức để giữ chân ánh mắt lấp lánh nhưng đượm buồn. Với những người chọn khăn gói đi làm xa lần đầu, chẳng dễ để họ xác định công việc trong nhà máy hay trên nương rẫy dễ dàng hơn. Nhưng ít nhất, xuống đồng bằng với những nhà máy san sát nhau, bắt đầu với mức lương khởi điểm, họ cũng đã kiếm được một khoản thu gấp 4 lần ở nhà nếu chỉ phụ thuộc vào ít chuối, ít bắp trên nương hoặc thấp thỏm lo âu khi mà những rẫy điều, vườn bưởi ảnh hưởng bởi thời tiết thất thường.`}
      </p>

      <div>
        <audio controls autoPlay={false} style={{ position: "absolute" }}>
          <source src="/cheo/audios/ninh-thuan.m4a" type="audio/ogg" />
        </audio>
        <img
          style={{ width: "100%", verticalAlign: "middle" }}
          src="/cheo/images/ninh-thuan/final/03-min.jpg"
          alt="03"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Many years ago, unable to resist the potential of earning more from big cities, Quyen packed up, and from Ninh Thuan she went to Nha Trang, a famous tourist coastal city 2 hour ride away from her house to work in a small local restaurant. With all her hardwork from early morning until late at night, she earned only about 3 million VND which had to cover her rent and meals too. Very modesty as she lived, nothing much was left to send back to her parents. But at least, that's how she, and other women her age, could earn a little more. After the Lunar New Year holiday of 2022, many of Quyền's friends went to work in the city. As for Quyền, when asked about this, she decisively shook her head: "I love my children so much, I want to stay at home to take care of them. If we both go, the little poor ones would be so miserable."`
          : `Cách đây nhiều năm, không cưỡng lại được tiềm năng kiếm thêm thu nhập từ những thành phố lớn khác, Quyền cũng đã khăn gói đi từ Ninh Thuận sang Nha Trang, một thành phố biển du lịch nổi tiếng cách nhà cô gần 2 tiếng đi xe, để phụ việc tại một quán cơm. Làm từ sáng sớm đến tối muộn, nhưng thu nhập cũng chỉ dao động vào khoảng 3 triệu đồng chưa trừ đi tiền thuê nhà, ăn uống. Tiền dư không còn nhiều để gửi về cho cha mẹ dù em không tiêu xài nhiều. Nhưng ít nhất, đó là cách mà em, và những người phụ nữ cùng lứa tuổi, có thể tăng thu nhập. Khoảng thời gian sau kỳ nghỉ tết nguyên đán năm 2022 nhiều người bạn khác của  Quyền đều đã đi làm ở thành phố. Còn Quyền, khi được hỏi về ý định này, em vẫn mạnh mẽ lắc đầu:” Em thương con lắm, em muốn ở nhà chăm cho tụi nó. Cha mẹ đi làm hết nhìn tụi nhỏ tội lắm”.
`}
      </p>

      <img
        width="100%"
        src={"/cheo/images/ninh-thuan/final/14-min.jpg"}
        alt="01"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Seven in the morning, after feeding the children and sending them to her mother to look after them, Quyền starts her working day on her cultivation land by the mountain, after sowing corn on the opposite side. Owning a lot of land does not mean high income. It did, but that was the story of many years ago, when Quyền was just a 9th grader who spent her days off working in the farms to help her parents. In the memory of what seems like yesterday, she followed her parents and sisters to the farm on weekends. Wherever the land stretched, there stretched fruitful banana trees. There were plenty of them, from snow bananas, areca bananas (musa acuminata), ducasse bananas. Moderate regular rainfall was an adequate supply for bananas to grow. The price of bananas was stable, which was the main source of income for her family, especially during Tet holidays. A fully grown banana tree does not just give fruit and leaves to sell, but other parts of it could be used in daily meals. Sadly, it is in the same vivid memory that she sees the erratic storms, the most recent being the storm No. 12 happened exactly 2 years ago, which swept through her village, leaving behind desolate, destroyed banana fields.`
          : `7h sáng, sau khi cho con ăn uống và gửi mẹ trông. Quyền bắt đầu một ngày làm việc của mình ở nương phía núi, sau khi đã gieo hạt bắp ở mảnh đất phía đối diện. Việc sở hữu nhiều đất đai không đồng nghĩa với thu nhập cao. Điều đó có thể đồng nghĩa trong bối cảnh nhiều năm về trước, khi Quyền chỉ là một cô học sinh lớp 9 ngày đi học, ngày nghỉ lên nương rẫy phụ ba mẹ. Trong ký ức tưởng chừng như mới xảy ra hôm qua, em theo chân ba mẹ cùng các chị em lên nương rẫy vào những ngày cuối tuần. Đất trải dài tới đâu là chuối tốt tươi đến đó. Từ chuối cô đơn, chuối cau, chuối mốc. Lượng mưa đều đặn vừa phải là nguồn cung cấp đủ đầy cho chuối phát triển. Giá chuối đều đặn không bị ảnh hưởng nhiều, là nguồn thu chính của gia đình em, đặc biệt là vào những ngày tết. Một cây chuối lớn lên không chỉ dùng để bán trái, bán lá, mà còn để phục vụ cho những bữa ăn thường ngày. Nhưng cũng chính trong vùng ký ức rõ nét ấy, em chẳng thể quên được những cơn bão thất thường, gần nhất là cơn bão số 12 cách đây đúng 2 năm quét qua thôn mình, để lại những bãi chuối hoang tàn xác xơ.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/13-min.jpg"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/15-min.jpg"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The traditional Raglai life is almost exclusively confined to the bur (neighborhood) or palei (village) in high, flat lands close to the water source. Each palei usually consists of dozens of households of one extended family. Upland agriculture is the dominant mode of production with corn and rice as the main food sources. There are also other agricultural products such as cassava, potatoes, and fruits. Buffalo, cows, pigs, and chickens are widely raised but not on a large scale. Each family keeps a couple of cows for funeral ceremonies. The area in Ninh Thuan where the Raglai live has many rivers. It is those rivers and streams that provide water for domestic use and production irrigation. Besides, handicraft activities such as knitting, forging, pottery... rudimentary as they are, secure the people's need for daily life. Quyền's grandparents and parents who came here to set up a village, although they were poor, they were never hungry for they had the forests, the farms, the rivers, and the streams. Nights of hard work casting nets and mornings of picking vegetables in the forest can guarantee them meals for the week and enable them to bring up their children. But the changing socio-economic context poses new challenges, Quyền's generation has more to worry about than just daily meals.`
          : `Cuộc sống của người Raglai truyền thống gần như chỉ thu hẹp trong khuôn khổ của các bur (xóm) hoặc palei (buôn làng) ở các khu đất cao, bằng phẳng và gần nguồn nước. Mỗi palei thường gồm vài chục nóc nhà của một dòng họ. Nông nghiệp nương rẫy là phương thức sản xuất chủ đạo với bắp và lúa là nguồn lương thực chính. Ngoài ra còn có các loại nông sản khác như đậu, khoai củ, hoa quả… Trâu, bò, heo, gà được nuôi thả phổ biến nhưng không nhiều. Mỗi nhà giữ cho mình đôi ba con bò để phục vụ cho ma chay lễ lượt. Khu vực địa lý của người Raglai ở Ninh Thuận nhiều sông ngòi. Chính những con sông, dòng suối là cung nước uống cho sinh hoạt và tưới tiêu sản xuất. Cùng với đó, nhiều hoạt động thủ công như đan lát, rèn, làm gốm… dù thô sơ nhưng cũng đủ đảm bảo cho sản xuất và sinh hoạt. Thế hệ ông bà, cha mẹ của Quyền, những người đến đây lập làng tuy có thiếu thốn nhưng chưa bao giờ đói, vì họ có rừng, có nương rẫy, có sông suối. Những đêm chăm chỉ giăng lưới đánh bắt hay những sáng hái rau trong rừng có thể đảm bảo cho họ các bữa cơm trong tuần và nuôi lớn con cái. Nhưng bối cảnh xã hội – kinh tế thay đổi lại đặt ra những thách thức mới, thế hệ của Quyền không thể chỉ đặt sự quan tâm vào bữa cơm hàng ngày như trước.`}
      </p>

      <img
        width="100%"
        src={"/cheo/images/ninh-thuan/final/17-min.jpg"}
        alt="01"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The children grow, the prices increase, the pandemic ravages all, material and spiritual life experience transitions, .. these seemingly unrelated aspects intertwined, creating systemic problems that affect the community as a whole. The majority of the Raglai people make a living on farming and animal husbandry. However, phenomena of climate extreme increasingly cause agricultural output to decline. With changes in livelihood, moving to another place to live and work is inevitably entailed. It is now hard to see young people in farms. Quyền's husband and her best friend Nghiễm had chosen to go to other provinces to either work in shrimp farms or go fishing in the open sea. The children, after school time, would be found attached to their grandparents who are no longer able to work hard and so leave the garden to their children to take care of. The migration for work of the majority of young and middle-aged people has caused many unpredictable consequences for the matriarchal family structure and traditional culture of the Chăm and Raglai, one consequence being the lack of affection and education from parents in the children's upbringing. Reciprocal poetic verses, epic songs of the mountains and forests are now set aside into a vague memory corner, giving way to arguments about who should work to raise children, who stays at home to take care of the farm. Quyền, no matter how pure and optimistic she is, cannot keep herself from these concerns.`
          : `Con cái càng lớn, vật giá leo thang, đại dịch hoành hành, đời sống vật chất và tinh thần biến đổi, .. từng khía cạnh tưởng chừng không liên quan lại đan xen chồng chéo tạo nên những vấn đề mang tính hệ thống đến cộng đồng. Đa số đồng bào Raglai mưu sinh chủ yếu dựa vào việc trồng trọt và chăn nuôi. Nhưng các hiện tượng khí hậu cực đoan ngày càng khiến sản lượng nông nghiệp sụt giảm. Cùng với việc chuyển đổi sinh kế, di dời đến địa bàn khác để sinh sống và làm việc là một lựa chọn khó tránh khỏi. Chẳng dễ gì tìm thấy hình ảnh thanh niên trên nương rẫy. Như chồng của Quyền, hay Nghiễm bạn thân em đều đã chọn đi làm xa ở các tỉnh thành khác trong những trang trại nuôi tôm hay đánh bắt ngoài biển khơi. Con nít nếu không đến trường thì sẽ quấn quýt với ông bà, người không còn khả năng lao động nặng và nhường lại vườn tược cho con cái họ trước đó. Việc đa số thanh niên và trung niên di tản đi làm ăn xa gây ra nhiều hệ quả khó lường đối với cấu trúc gia đình mẫu hệ và văn hóa truyền thống của đồng bào Chăm và Raglai, điển hình là tình cảm và sự giáo dục của cha mẹ đối với con cái.  Những câu thơ đối đáp, những bài ca sử thi của núi rừng giờ đây xếp lặng yên vào một góc ký ức mờ nhạt, nhường chỗ cho những đoạn hội thoại tranh cãi rằng ai đủ sức đi làm nuôi con, ai ở nhà lo nhà cửa đồng áng. Với Quyền, dù trong sáng và lạc quan đến đâu, em cũng chẳng thể nào giữa được tâm hồn mình tách biệt với những ưu tư đó.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/10-min.jpg"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/final/12-min.jpg"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Her life now is very different from what 15 year old Quyền would have imagined. Now, she is a mother of two little ones. She takes care of the children, of her own mother, and of everything in the family while her husband is away for work. The economic burden is heavier on her shoulders after the pandemic. She brought more than 20 kilograms of bananas down from the top of the mountain to sell them for no more than 40 thousand dong each kilogram (about $1,7). The pomelos she took care of every day are forced to sell for only 10 thousand dong (about $0,4). And, instead of tens of kilograms of cashews every day, now she could collect only 2 to 3 kilos. The weather changed remarkably compared to the days she followed her parents to the farms. It is much more real than what she learned about climate change, about hurricanes, droughts, floods, at school. Or maybe, it is more real to her because it directly affects her livelihood and her family.`
          : `Cuộc sống ở thì hiện tại đã khác xa trong tâm trí của một cô bé Quyền 15 tuổi. Giờ đây, em đã làm mẹ của hai bé nhỏ, vừa trông con, vừa chăm sóc mẹ, vừa quán xuyến mọi thứ trong nhà khi chồng làm xa.  Gánh nặng kinh tế cũng thể hiện rõ hơn trên vai em sau đại dịch. Gánh chuối hơn 20kg em đem từ đỉnh núi xuống bán với giá không quá 40 ngàn, trái bưởi hằng ngày chăm bón để bị thu mua ép giá 10 nghìn, hay thay vì hàng chục kí điều mỗi ngày, giờ đây em chỉ thu được đôi ba kí. Thời tiết đổi thay rõ rệt với những ngày em còn theo chân ba mẹ lên rẫy. Nó gần hơn với những gì mà em học về biến đổi khí hậu lúc còn trên ghế nhà trường về những cơn bão, hạn hán, lũ lụt. Hay có chăng, nó đậm nét hơn trong tâm trí em vì ảnh hưởng trực tiếp đến sinh kế của em và gia đình.`}
      </p>
      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `5:00 p.m on a Saturday, a 45-seat bus was parked in front of Quyền’s house. She quickly looked up to her front yard, where her close friend, Nghiễm, was preparing to get on the bus. In just 12 hours, Nghiễm will be in the city, where she wishes to find a job with a salary 5 to 6 times higher than what she and Quyền are earning here in Phước Bình, Ninh Thuận. It also means that it will be half a year ahead until they could meet again, and no more hanging out and pouring their heart out to each other every afternoon like before.
`
          : `5h chiều thứ bảy, chiếc xe bus 45 chỗ đỗ xịch trước nhà Quyền. Em ngước vội nhìn ra trước nhà, nơi chị bạn thân thiết của mình là Nghiễm, đang sửa soạn hành lý lên xe. Chỉ sau 12 tiếng đồng hồ nữa thôi, Nghiễm sẽ có mặt tại thành phố, nơi mà cô kỳ vọng có thể tìm được công việc với mức lương cao gấp 5,6 lần công việc mà cô và Quyền đang làm ở Phước Bình, Ninh Thuận. Và cũng phải mất hơn cả nửa năm nữa, để họ có thể gặp nhau, tụ họp hàn huyên vào mỗi chiều như thường ngày. `}
      </p>

      <img
        width="100%"
        src={"/cheo/images/ninh-thuan/final/16-min.jpg"}
        alt="01"
      />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `It is difficult for Quyền to say for sure whether it would eventually be her turn, when her two children grow a bit older, to get in the familiar bus which runs at 5pm every Saturday. Or would she still be able to hold on to the land where she was born and raised, with the erratic weather and the burden of making a living that pressures her shoulders? She is not sure about the other options she has, besides getting married when coming of age, leaving school to go to the city to find a job, and staying at home to work in the fields to earn money every day. Everything seems out of hand. She can't even be sure of next week, or of tomorrow, of how heavy the rain would pour, and how devastated her cashew farms would become.`
          : `Thật khó để em chắc chắn rằng khi hai con em lớn hơn chút, em có lên chiếc xe quen thuộc vào 5h chiều thứ 7 hàng tuần không, hay vẫn có thể bám trụ tại mảnh đất em sinh ra và lớn lên, với thời tiết thất thường và gánh nặng mưu sinh bủa vây. Em cũng không chắc về những sự lựa chọn mà mình có, ngoài việc đến tuổi cưới chồng, nghỉ học lên thành phố kiếm việc làm, hay ở nhà làm nương rẫy kiếm tiền mỗi ngày. Và nói đâu xa, chỉ tuần sau thôi, ngày mai thôi, em cũng không chắc là cơn mưa còn có thể to đến đâu, hay rẫy điều của em rồi sẽ điêu tàn đến thế nào. `}
      </p>
    </div>
  );
};

export default function Home({}) {
  const [lang, setLang] = useState("en"); // vi || en

  const isEnglish = lang === "en";

  return (
    <>
      <Header
        isEnglish={isEnglish}
        onEnClick={() => setLang("en")}
        onVnClick={() => setLang("vn")}
      />

      <Banner
        url={`/cheo/images/ninh-thuan/final/08-min.jpg`}
        isEnglish={isEnglish}
        enText={"Phuoc Binh - Ninh Thuan"}
        viText={"Phước Bình - Ninh Thuận"}
      />

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/ninh-thuan/open.mp4"} type="video/mp4" />
      </video>

      <Body lang={lang} />

      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={"/cheo/videos/ninh-thuan/end.mp4"} type="video/mp4" />
      </video>
    </>
  );
}
