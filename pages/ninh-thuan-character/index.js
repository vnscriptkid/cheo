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

      <img width="100%" src={"/cheo/images/ninh-thuan/05-min.jpg"} alt="10" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Quyền’s hometown, Phước Bình, is a flat area with a national park whose vegetation is dense and diverse. This land has been welcoming and nourishing her family since the day they came to establish a new village decades ago. Fertile strips of land and cold, pleasing airflow, though only with two seasons of rain and dry, are perfect for plants and trees to grow. Sources of spring water flowing to the Cái River had never been exhausted. Rich land nurtured sweet pomelo orchards, fragrant coffee gardens, and green banana fields. But one cannot think of Phước Bình without its cashew farms. Cashew nuts brought the Raglai households their most stable income. During the pandemic, it was also the most reliable source, as the price of cashew nuts remained during and after it. However, cashew trees cannot stand steady rains. Rains make the cashew fruits lose their sweetness and even fall off the tree, and therefore declining yields. Instead of big sacks of cashew fruits, now Quyền could only collect 2 to 3 kilograms for the whole morning, which earns her family a humble day of food. For two years now, Phước Bình’s cashews that once lifted the Raglai out of poverty, have been mentioned with bitterness, “With all these rains… Phước Bình’s cashew crops are doomed to fail again!”`
          : `Phước Bình quê Quyền là vùng đất nằm trải dài thuộc khu vực vườn quốc gia với thảm thực vật dày dặn và đa dạng. Nơi đây nuôi dưỡng gia đình em từ những ngày đầu trôi dạt lập làng nhiều thập kỷ về trước.  Những dải đất màu mỡ,  luồng khí hậu mát mẻ, tuy chỉ có hai mùa mưa – nắng nhưng vừa vặn để cây cối phát triển. Nguồn nước suối chảy về sông Cái cũng chưa bao giờ rơi vào tình cảnh cạn kiệt.  Đất đai tươi tốt nuôi dưỡng những vườn bưởi ngọt dịu, những vườn cà phê thơm nứt, hay đến những rẫy chuối xanh mướt. Nhưng nhắc về Phước Bình, thì chẳng thể nào thiếu được những vườn điều. Hạt điều là nguồn thu nhập ổn định nhất các hộ gia đình Raglai. Trong mùa dịch, nguồn thu nhập từ điều được coi là ổn định nhất, vì giá cả không bị ảnh hưởng trong và sau đại dịch. Tuy nhiên, điều không phải là thức quả hợp với những cơn mưa dai dẳng. Mưa làm cho trái điều nhạt và rụng nhiều, sản lượng từ đó cũng giảm đi. Thay vì những bao tải điều như trước kia, giờ đây, sau một buổi sáng thu nhặt, cô cũng chỉ có thể kiếm được tầm 2-3kg, đổi được một ngày cơm cho cả gia đình. Hai năm trở lại đây, điều Phước Bình, thức trái từng giúp người Raglai thoát nghèo, giờ đây chỉ được nhắc đến trong cái chép miệng :”Dân Phước Bình năm nay lại chết điều rồi, mưa gió kiểu này”.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/04-min.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/09-min.JPG"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The word “again”, as much as it denotes the real repetition of the situation, connotes the people’s resignation of something out of hand. After the 12th storm in 2020, the range of rainfall has been unpredictable. Rains are no longer a helper to crops and dry lands like they were to annual serious droughts in March, April, September, and October. Now, they are pouring as if Nature is taking all of her wrath out. Lasting heavy rains lead to floods. A large area from the south of Khánh Hòa to the north of Ninh Thuận, and to Phan Rang, is white with seething water foam, and in some places the water is 2 to 4 meter deep. Besides flooding, whirlwinds are also a "specialty" often seen in Ninh Thuận in stormy seasons.`
          : `Từ “lại” ở đây vừa diễn đạt sự lặp lại theo đúng nghĩa đen, và còn ẩn chứa sự cam chịu về một điều mà những người dân ở đây tuy không hề mong muốn nhưng vẫn phải chấp nhận. Kể từ sau cơn bão số 12 năm 2020, lượng mưa vào mùa mưa chợt trở nên khó đoán. Nó không còn là những cơn mưa giúp mùa màng tươi tốn, tưới mát cho những thửa đất khô cằn vào những ngày hạn hán lịch sử vào tháng 3-4 hay tháng 9-10, giờ đây, nó như trút hết sự giận dữ mà thiên nhiên mang trong lòng. Mưa lớn kéo dài dẫn đến lũ lụt. Cả một vùng đất rộng lớn từ Nam Khánh Hòa đến Bắc Ninh Thuận, qua Phan Rang, nước trắng xóa, có nơi ngập sâu 2-4 m.  Bên cạnh ngập lụt, gió lốc cũng là một “đặc sản” thường thấy ở Ninh Thuận vào mùa bão.
`}
      </p>

      <img width="100%" src={"/cheo/images/ninh-thuan/01-min.jpg"} alt="01" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The little house Quyền anh her husband built after their marriage has withstood the storms of 2020, but Quyền is doubtful it could stand storms to come. The house she currently lives in with her mother is built on a loan, to fight the harsh weather on a stormy day. Prolonged rains are not only a challenge to daily life of the family, but they also make it common for farming households in the area to hopelessly wake up to their gardens messy with ruins of durian, pomelo, bananas, cashew fruits.`
          : `Căn nhà nhỏ của Quyền cùng chồng mới được dựng sau khi cưới đã từng chống chọi qua mùa bão năm 2020, nhưng cô không chắc rằng nó có thể tiếp tục đứng vững nhiều năm tới. Căn nhà hiện tại mà cô ở cùng mẹ cũng là kết quả của việc vay tiền dựng mới để chống chọi với thời tiết khắc nghiệt trong ngày mưa bão. Những cơn mưa kéo dài không chỉ là thách thức với đời sống gia đình thường nhật, mà còn khiến nhiều hộ dân trồng trọt trong vùng tập làm quen với việc thức dậy rồi lặng lẽ nhìn những mảnh vườn với cơ mang là sầu riêng, bưởi, chuối, điều lẫn vào nhau như đống hoang tàn còn sót lại.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/06-min.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/07-min.JPG"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `It is difficult to encourage the Raglai to stay in the land that protected and loved them many years ago when things are no longer the same. We know that in any society changes are inevitable, but the layers and layers of problems piled up as transitions of climate, economic life, and family traditions interwoven, accelerates people seeking jobs away from home. In those trips to seek jobs, young women do not think about anything further than escaping the poverty besieging them, so that their small families can have a better life. Those rolling strips of arable land, the vast forests that once fed generations of their grandparents and parents, are now no longer sufficient to keep them whose eyes sparkle with sadness. For those who choose to work away for the first time, it is not easy for them to determine whether working in the factory or in the fields is easier. But at least, down to the plains where factories tightly spaced, being paid with the starting salary, they could already earn an income 4 times as much as they do at home where they reply on some banana trees, humble crops of corn, cashew, pomelo orchards that easily affected by the erratic weather.`
          : `Thật khó để bắt người dân Raglai tiếp tục trụ lại ở vùng đất đã từng bảo bọc và yêu thương họ nhiều năm về trước khi mà mọi thứ không còn như xưa. Vẫn biết là sự thay đổi là không thể tránh khỏi trong bất cứ bối cảnh xã hội nào, nhưng lớp lang chồng chất trong sự biến chuyển từ khí hậu, đời sống kinh tế, truyền thống gia đình đan xen vào nhau, càng đẩy nhanh hơn những chuyến đi làm ăn xa nhà. Những chuyến đi mà những người phụ nữ trẻ không nghĩ về  hệ quả xa hơn, mà chỉ đơn thuần mong thoát được cái nghèo bủa vây, để gia đình nhỏ của họ có cuộc sống tốt đẹp hơn. Những dải đất nương rẫy trập trùng, những cánh rừng bạt ngàn đã từng nuôi sống thế hệ ông bà, cha mẹ, giờ đây không còn đủ sức để giữ chân ánh mắt lấp lánh nhưng đượm buồn. Với những người chọn khăn gói đi làm xa lần đầu, chẳng dễ để họ xác định công việc trong nhà máy hay trên nương rẫy dễ dàng hơn. Nhưng ít nhất, xuống đồng bằng với những nhà máy san sát nhau, bắt đầu với mức lương khởi điểm, họ cũng đã kiếm được một khoản thu gấp 4 lần ở nhà nếu chỉ phụ thuộc vào ít chuối, ít bắp trên nương hoặc thấp thỏm lo âu khi mà những rẫy điều, vườn bưởi ảnh hưởng bởi thời tiết thất thường.`}
      </p>

      <img width="100%" src={"/cheo/images/ninh-thuan/03-min.jpg"} alt="01" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Many years ago, unable to resist the potential of earning more from big cities, Quyen packed up, and from Ninh Thuan she went to Nha Trang, a famous tourist coastal city 2 hour ride away from her house to work in a small local restaurant. With all her hardwork from early morning until late at night, she earned only about 3 million VND which had to cover her rent and meals too. Very modesty as she lived, nothing much was left to send back to her parents. But at least, that's how she, and other women her age, could earn a little more. After the Lunar New Year holiday of 2022, many of Quyền's friends went to work in the city. As for Quyền, when asked about this, she decisively shook her head: "I love my children so much, I want to stay at home to take care of them. If we both go, the little poor ones would be so miserable."`
          : `Cách đây nhiều năm, không cưỡng lại được tiềm năng kiếm thêm thu nhập từ những thành phố lớn khác, Quyền cũng đã khăn gói đi từ Ninh Thuận sang Nha Trang, một thành phố biển du lịch nổi tiếng cách nhà cô gần 2 tiếng đi xe, để phụ việc tại một quán cơm. Làm từ sáng sớm đến tối muộn, nhưng thu nhập cũng chỉ dao động vào khoảng 3 triệu đồng chưa trừ đi tiền thuê nhà, ăn uống. Tiền dư không còn nhiều để gửi về cho cha mẹ dù em không tiêu xài nhiều. Nhưng ít nhất, đó là cách mà em, và những người phụ nữ cùng lứa tuổi, có thể tăng thu nhập. Khoảng thời gian sau kỳ nghỉ tết nguyên đán năm 2022 nhiều người bạn khác của  Quyền đều đã đi làm ở thành phố. Còn Quyền, khi được hỏi về ý định này, em vẫn mạnh mẽ lắc đầu:” Em thương con lắm, em muốn ở nhà chăm cho tụi nó. Cha mẹ đi làm hết nhìn tụi nhỏ tội lắm”.
`}
      </p>

      <img width="100%" src={"/cheo/images/ninh-thuan/14-min.jpg"} alt="01" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Seven in the morning, after feeding the children and sending them to her mother to look after them, Quyền starts her working day on her cultivation land by the mountain, after sowing corn on the opposite side. Owning a lot of land does not mean high income. It did, but that was the story of many years ago, when Quyền was just a 9th grader who spent her days off working in the farms to help her parents. In the memory of what seems like yesterday, she followed her parents and sisters to the farm on weekends. Wherever the land stretched, there stretched fruitful banana trees. There were plenty of them, from snow bananas, areca bananas (musa acuminata), ducasse bananas. Moderate regular rainfall was an adequate supply for bananas to grow. The price of bananas was stable, which was the main source of income for her family, especially during Tet holidays. A fully grown banana tree does not just give fruit and leaves to sell, but other parts of it could be used in daily meals. Sadly, it is in the same vivid memory that she sees the erratic storms, the most recent being the storm No. 12 happened exactly 2 years ago, which swept through her village, leaving behind desolate, destroyed banana fields.`
          : `7h sáng, sau khi cho con ăn uống và gửi mẹ trông. Quyền bắt đầu một ngày làm việc của mình ở nương phía núi, sau khi đã gieo hạt bắp ở mảnh đất phía đối diện. Việc sở hữu nhiều đất đai không đồng nghĩa với thu nhập cao. Điều đó có thể đồng nghĩa trong bối cảnh nhiều năm về trước, khi Quyền chỉ là một cô học sinh lớp 9 ngày đi học, ngày nghỉ lên nương rẫy phụ ba mẹ. Trong ký ức tưởng chừng như mới xảy ra hôm qua, em theo chân ba mẹ cùng các chị em lên nương rẫy vào những ngày cuối tuần. Đất trải dài tới đâu là chuối tốt tươi đến đó. Từ chuối cô đơn, chuối cau, chuối mốc. Lượng mưa đều đặn vừa phải là nguồn cung cấp đủ đầy cho chuối phát triển. Giá chuối đều đặn không bị ảnh hưởng nhiều, là nguồn thu chính của gia đình em, đặc biệt là vào những ngày tết. Một cây chuối lớn lên không chỉ dùng để bán trái, bán lá, mà còn để phục vụ cho những bữa ăn thường ngày. Nhưng cũng chính trong vùng ký ức rõ nét ấy, em chẳng thể quên được những cơn bão thất thường, gần nhất là cơn bão số 12 cách đây đúng 2 năm quét qua thôn mình, để lại những bãi chuối hoang tàn xác xơ.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/13-min.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/15-min.JPG"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The traditional Raglai life is almost exclusively confined to the bur (neighborhood) or palei (village) in high, flat lands close to the water source. Each palei usually consists of dozens of households of one extended family. Upland agriculture is the dominant mode of production with corn and rice as the main food sources. There are also other agricultural products such as cassava, potatoes, and fruits. Buffalo, cows, pigs, and chickens are widely raised but not on a large scale. Each family keeps a couple of cows for funeral ceremonies. The area in Ninh Thuan where the Raglai live has many rivers. It is those rivers and streams that provide water for domestic use and production irrigation. Besides, handicraft activities such as knitting, forging, pottery... rudimentary as they are, secure the people's need for daily life. Quyền's grandparents and parents who came here to set up a village, although they were poor, they were never hungry for they had the forests, the farms, the rivers, and the streams. Nights of hard work casting nets and mornings of picking vegetables in the forest can guarantee them meals for the week and enable them to bring up their children. But the changing socio-economic context poses new challenges, Quyền's generation has more to worry about than just daily meals.`
          : `Cuộc sống của người Raglai truyền thống gần như chỉ thu hẹp trong khuôn khổ của các bur (xóm) hoặc palei (buôn làng) ở các khu đất cao, bằng phẳng và gần nguồn nước. Mỗi palei thường gồm vài chục nóc nhà của một dòng họ. Nông nghiệp nương rẫy là phương thức sản xuất chủ đạo với bắp và lúa là nguồn lương thực chính. Ngoài ra còn có các loại nông sản khác như đậu, khoai củ, hoa quả… Trâu, bò, heo, gà được nuôi thả phổ biến nhưng không nhiều. Mỗi nhà giữ cho mình đôi ba con bò để phục vụ cho ma chay lễ lượt. Khu vực địa lý của người Raglai ở Ninh Thuận nhiều sông ngòi. Chính những con sông, dòng suối là cung nước uống cho sinh hoạt và tưới tiêu sản xuất. Cùng với đó, nhiều hoạt động thủ công như đan lát, rèn, làm gốm… dù thô sơ nhưng cũng đủ đảm bảo cho sản xuất và sinh hoạt. Thế hệ ông bà, cha mẹ của Quyền, những người đến đây lập làng tuy có thiếu thốn nhưng chưa bao giờ đói, vì họ có rừng, có nương rẫy, có sông suối. Những đêm chăm chỉ giăng lưới đánh bắt hay những sáng hái rau trong rừng có thể đảm bảo cho họ các bữa cơm trong tuần và nuôi lớn con cái. Nhưng bối cảnh xã hội – kinh tế thay đổi lại đặt ra những thách thức mới, thế hệ của Quyền không thể chỉ đặt sự quan tâm vào bữa cơm hàng ngày như trước.`}
      </p>

      <img width="100%" src={"/cheo/images/ninh-thuan/17-min.jpg"} alt="01" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The children grow, the prices increase, the pandemic ravages all, material and spiritual life experience transitions, .. these seemingly unrelated aspects intertwined, creating systemic problems that affect the community as a whole. The majority of the Raglai people make a living on farming and animal husbandry. However, phenomena of climate extreme increasingly cause agricultural output to decline. With changes in livelihood, moving to another place to live and work is inevitably entailed. It is now hard to see young people in farms. Quyền's husband and her best friend Nghiễm had chosen to go to other provinces to either work in shrimp farms or go fishing in the open sea. The children, after school time, would be found attached to their grandparents who are no longer able to work hard and so leave the garden to their children to take care of. The migration for work of the majority of young and middle-aged people has caused many unpredictable consequences for the matriarchal family structure and traditional culture of the Chăm and Raglai, one consequence being the lack of affection and education from parents in the children's upbringing. Reciprocal poetic verses, epic songs of the mountains and forests are now set aside into a vague memory corner, giving way to arguments about who should work to raise children, who stays at home to take care of the farm. Quyền, no matter how pure and optimistic she is, cannot keep herself from these concerns.`
          : `Con cái càng lớn, vật giá leo thang, đại dịch hoành hành, đời sống vật chất và tinh thần biến đổi, .. từng khía cạnh tưởng chừng không liên quan lại đan xen chồng chéo tạo nên những vấn đề mang tính hệ thống đến cộng đồng. Đa số đồng bào Raglai mưu sinh chủ yếu dựa vào việc trồng trọt và chăn nuôi. Nhưng các hiện tượng khí hậu cực đoan ngày càng khiến sản lượng nông nghiệp sụt giảm. Cùng với việc chuyển đổi sinh kế, di dời đến địa bàn khác để sinh sống và làm việc là một lựa chọn khó tránh khỏi. Chẳng dễ gì tìm thấy hình ảnh thanh niên trên nương rẫy. Như chồng của Quyền, hay Nghiễm bạn thân em đều đã chọn đi làm xa ở các tỉnh thành khác trong những trang trại nuôi tôm hay đánh bắt ngoài biển khơi. Con nít nếu không đến trường thì sẽ quấn quýt với ông bà, người không còn khả năng lao động nặng và nhường lại vườn tược cho con cái họ trước đó. Việc đa số thanh niên và trung niên di tản đi làm ăn xa gây ra nhiều hệ quả khó lường đối với cấu trúc gia đình mẫu hệ và văn hóa truyền thống của đồng bào Chăm và Raglai, điển hình là tình cảm và sự giáo dục của cha mẹ đối với con cái.  Những câu thơ đối đáp, những bài ca sử thi của núi rừng giờ đây xếp lặng yên vào một góc ký ức mờ nhạt, nhường chỗ cho những đoạn hội thoại tranh cãi rằng ai đủ sức đi làm nuôi con, ai ở nhà lo nhà cửa đồng áng. Với Quyền, dù trong sáng và lạc quan đến đâu, em cũng chẳng thể nào giữa được tâm hồn mình tách biệt với những ưu tư đó.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/10-min.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/12-min.JPG"
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

      <img width="100%" src={"/cheo/images/ninh-thuan/16-min.jpg"} alt="01" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `It is difficult for Quyền to say for sure whether it would eventually be her turn, when her two children grow a bit older, to get in the familiar bus which runs at 5pm every Saturday. Or would she still be able to hold on to the land where she was born and raised, with the erratic weather and the burden of making a living that pressures her shoulders? She is not sure about the other options she has, besides getting married when coming of age, leaving school to go to the city to find a job, and staying at home to work in the fields to earn money every day. Everything seems out of hand. She can't even be sure of next week, or of tomorrow, of how heavy the rain would pour, and how devastated her cashew farms would become.`
          : `Thật khó để em chắc chắn rằng khi hai con em lớn hơn chút, em có lên chiếc xe quen thuộc vào 5h chiều thứ 7 hàng tuần không, hay vẫn có thể bám trụ tại mảnh đất em sinh ra và lớn lên, với thời tiết thất thường và gánh nặng mưu sinh bủa vây. Em cũng không chắc về những sự lựa chọn mà mình có, ngoài việc đến tuổi cưới chồng, nghỉ học lên thành phố kiếm việc làm, hay ở nhà làm nương rẫy kiếm tiền mỗi ngày. Và nói đâu xa, chỉ tuần sau thôi, ngày mai thôi, em cũng không chắc là cơn mưa còn có thể to đến đâu, hay rẫy điều của em rồi sẽ điêu tàn đến thế nào. `}
      </p>

      {/* <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mùa Thị Mua, our character in the project’s second story, Mù Cang Chải is both a friend and a stranger. Though it is not her birthplace, the place itself and its people have been indelibly photographed in her mind by fate. When she was still a law student, she initiated some social projects in Mù Cang Chải. Later, in her visits to her friend’s, who is now her husband, hometown, she became more familiar with the place. Mù Cang Chải reminds Mua of her lovely and intimate Nam Po, Dien Bien where she was born, though it is also a land notorious for drug trafficking, cross-border human trafficking, and child marriage on the Vietnam-Laos border. The life here in this tourist town also shares some similarities with the Hmong community where she grew up. Better than anyone else, in her mind, these images were ingrained: the immensity of the terraced fields, the softness of the golden rays of sunlight every morning, and the pristine water channel flowing from the mountain for irrigation.`
          : `Với Mùa Thị Mua, nhân vật của câu chuyện thứ 2 trong dự án, Mù Cang Chải vừa thân quen vừa lạ lẫm. Đây không phải là nơi em sinh ra, nhưng bằng những mối nhân duyên khác nhau, bối cảnh và con người của vùng đất này dần in sâu vào tâm trí em.  Khi còn là cô sinh viên ngành luật, em từng có dịp thực hiện các dự án xã hội tại đây. Hay trong những lần về thăm gia đình người bạn đời hiện tại, em cũng được nhìn ngắm thị trấn này thêm nhiều lần. Mù Cang Chải gợi cho em khung cảnh thân thương về Nậm Pồ, Điện Biên nơi Mua sinh ra, vùng đất khét tiếng với buôn bán ma túy, bán người qua biên giới và nạn tảo hôn ở biên giới Việt - Lào. Bối cảnh đời sống ở thị trấn du lịch này âu cũng san sẻ những điểm chung mà cộng đồng người HMong em lớn lên đã và đang lưu giữ.  Hơn ai hết, tâm thức em hiện rõ sự mênh mông của thửa ruộng bậc thang, sự êm dịu của những đợt nắng vàng rực vào mỗi sáng, hay sự nguyên sơ của từng kênh nước chảy đều từ núi mỗi lần tưới tiêu. `}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/2.1.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/2.2.JPG"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Perhaps, these mosaic fragments of memory had kept Mua encouraged to put her first brick into Ná Nả - a cyclical economy project aimed to generate income from products of Hmong farmers in Mu Cang Chai. But Mua understands that the effort she is making is about just about a brand, but it is for her family, for the Hmong community in the area. They are those who are under the threat of unsustainable livelihoods amid many unexpected fluctuations of life such as pandemics and climate change. Therefore, with the small project that she and her companions cherished, Mù Cang Chải will be the beginning, so that Ná Nả's spirit will grow and expand to Nậm Pồ and Điện Biên to provide tools and techniques for farmers to keep indigenous seeds from the effects of climate change. Especially, through the project's name "Nà Na", the Hmong language for "Mother, mother", Mua hopes it will grow through the care of mothers and sisters in the community. Hmong women are gentle and yet they are equally courageous, and they always seek ways to strive despite many challenges in family and farming life.`
          : `Có lẽ, những mảng màu mosaic rời rạc trong ký ức phần nào tiếp thêm động lực cho Mua để đặt viên gạch đầu tiên cho Ná Nả - dự án kinh tế tuần hoàn nhằm tạo nguồn thu nhập bền vững dựa trên các sản phẩm bản địa cho bà con nông dân người Hmong tại Mù Cang Chải. Nhưng với Mua, em hiểu rằng nỗ lực em đang xây dựng không chỉ dành cho một cái tên nhất định, mà còn là cho cả cho gia đình em, cho cộng đồng người Hmong trong khu vực, những người đang đối mặt với thách thức về sinh kế không bền vững giữa nhiều biến động bất thường của đời sống như đại dịch hay biến đổi khí hậu. Vì thế, trong kế hoạch nho nhỏ mà em cùng người bạn đồng hành ấp ủ, Mù Cang Chải sẽ là nơi khởi đều, để rồi tinh thần của Ná Nả sẽ tiếp tục mở rộng đến? Nậm Pồ, Điện Biên để cung cấp các công cụ và kỹ thuật cho nông dân nhằm bảo vệ các loại hạt giống bản địa khỏi tác động của biến đổi khí hậu. Đặc biệt, như đúng cái tên “Ná nả”, trong tiếng Mông nghĩa là “Mẹ ơi, mẹ”, Mua mong cầu dự án sẽ được nuôi nấng bằng sự chăm chút của những người mẹ, người chị trong cộng đồng Họ là người phụ nữ Mông dịu dàng nhưng không kém phần mạnh mẽ, luôn tìm cách để vươn lên trong đời sống gia đình và nương rẫy còn nhiều lo toan. `}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/3.1.JPG"
          alt="3.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/3.2.JPG"
          alt="3.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The Hmong is one of the ethnic minority groups living mainly in the northwest extreme point of Vietnam. The Hmong are not just residing in Dien Bien, where Mua was born, or Mu Cang Chai, but also in many different provinces. In recent years, in particular destinations such as Mù Cang Chải and Sapa, tourism has developed, creating more economic resources for the Hmong community. However, these are not sustainable sources of income they could rely on. The life of the Hmong is about the cultivation of terraced fields, honeycombs, chicken coops, and cultivation fields. Therefore, their fundamental livelihood is heavily dependent on nature. Weather changes in recent years have directly affected the life of Hmong households. For women, in particular, tourism brings both opportunities and challenges. The situation indeed offers men different employment opportunities. However, this in turn puts pressure on women, in the name of equality in the family, to go outside to earn money. This is not easy for Hmong women. Prejudice about gender and ethnicity has been deeply rooted in the community, now deepened by invisible impacts of the pandemic and climate change. Layers of layers pile up creating a vicious circle straining the lives of Hmong women.`
          : `H’Mong là một trong những nhóm người dân tộc thiểu số nằm chủ yếu ở phía Tây Bắc Việt Nam, nơi đỉnh đầu tổ quốc. Người HMong tập trung sinh sống chủ yếu không chỉ ở Điện Biên, nơi Mua sinh ra hay Mù Cang Chải mà trải dài ra nhiều tỉnh thành khác nhau. Những năm gần đây, ở một vài điểm đến đặc biệt như Mù Cang Chải, Sapa, du lịch dần phát triển, tạo thêm nguồn lợi kinh tế cho cộng đồng người  HMông. Tuy nhiên, đó không phải là nguồn lợi bền vững mà họ phụ thuộc vào. Đời sống của người Hmong gắn với nương rẫy, với thửa ruộng bậc thang, với tổ mật ong, với chuồng gà, hay những cánh rừng. Thế nên, nguồn sinh kế cơ bản thường phụ thuộc nhiều vào thiên nhiên. Sự biến chuyển của thời tiết trong nhiều năm gần đây ảnh hưởng trực tiếp đến đời sống của những hộ gia đình người Mông. Đặc biệt đối với nhóm phụ nữ, tác động của du lịch vừa mang lại cơ hội nhưng cũng là thách thức. Người đàn ông được mang lại các cơ hội việc làm khác nhau, nhưng chính điều này lại tạo áp lực ra ngoài kiếm tiền lên phụ nữ để có được sự bình đẳng trong gia đình. Điều này chẳng hề dễ dàng với phụ nữ Hmong. Định kiến về giới và nhóm người thiểu số đã là vấn đề ăn sâu trong cộng đồng, giờ đây lại khoét sâu bởi những ảnh hưởng vô hình từ đại dịch, biến đổi khí hậu. Từng lớp lang chồng chất tạo nên một vòng luẩn quẩn mà ôm chặt lấy cuộc sống của những người phụ nữ Hmong.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/4.1.JPG"
          alt="4.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/4.2.JPG"
          alt="4.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `In Nậm Pồ, Điện Biên where Mua returns each year, the rainy season comes earlier, yet it is much drier, because precipitation decreases. She can clearly see the difference in her parents' sowing fields compared to the days when she was a little girl following her parents to the fields.  It is not just her parents, but all her relatives and acquaintances in the community who are sowing rice in fields with no water available. The rice plant depends on rain, once sown for a few days without water, it will be damaged, unable to germinate. In phone calls with Mua from a distance, her mother could not explain why "it has been sunny for so long, the seeds could not sprout". Many farmers have given up farming to work in China. Farming in the traditional Hmong style is very challenging, especially when the weather is hot. Farming used to be simple in cool weather, but now it's more difficult because it's getting warmer. Weather therefore affects their earnings. Last year (2020), Mua's family produced 63 bags of rice, but only 30 for this year. Now the price of rice grain has increased, the weather effects have become more and more severe for all farmers.`
          : `Ở Nậm Pồ, Điện Biên, nơi Mua thường trở về mỗi năm, mùa mưa đến sớm hơn nhưng lại khô hơn ngày trước, lượng nước mưa dần ít hơn. Những thửa ruộng đang gieo của cha mẹ em đã có sự khác biệt rõ ràng so với những ngày em còn là một cô bé nhỏ và theo chân cha mẹ đi gieo gặt. Không chỉ cha mẹ em, mà cả những người họ hàng, những gương mặt khác trong cộng đồng đều đang gieo lúa trên những thửa ruộng không có nước. Tất cả lúa đều phụ thuộc vào mưa, nhưng nếu gieo vài ngày mà không có nước thì cây sẽ hư, không nảy mầm được. Trong những cuộc điện thoại với Mua khi xa nhà, mẹ em cũng chẳng lý giải được vì sao “trời nắng quá lâu, hạt không gieo được”. Nhiều nông dân đã bỏ nghề nông để sang Trung Quốc làm việc. Làm ruộng theo kiểu truyền thống của người Hmông rất khó, nhất là khi thời tiết nắng nóng. Việc canh tác trước đây đơn giản vì không khí mát mẻ, nhưng bây giờ khó khăn hơn vì trời nóng hơn. Thời tiết cũng có ảnh hưởng đến thu nhập; năm ngoái (2020), gia đình em thu được 63 bao gạo nhưng năm nay chỉ nhận được 30 bao.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "33.333%" }}
          src="images/ninh-thuan/5.1.JPG"
          alt="5.1"
        />
        <img
          style={{ width: "33.333%" }}
          src="images/ninh-thuan/5.2.JPG"
          alt="5.2"
        />
        <img
          style={{ width: "33.333%" }}
          src="images/ninh-thuan/5.3.JPG"
          alt="5.3"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `In Mù Cang Chải that shares Nậm Pồ's geographical features, the story is barely more optimistic. In recent years, the town has been clearly affected by climate change, the major reason is that for generations, the locals have been cultivating with the rather outdated method of deforestation. Forest fires happen, forest resources shrink; and as the lack of awareness leads to failure to protect the forest, during the dry season they suffer water shortage, and during the rainy season: floods, landslides, and flash floods. Besides, each year, many houses and hundreds of households in areas with high risk of landslides are relocated, many irrigation works are severely damaged, hundreds of hectares of crops are affected by storms and tornadoes. As an upstream area, Mù Cang Chải has never before had a serious shortage of water for production, although people still have the habit of "waiting for rain" for their crops. Because of climate change which results in later arrival of a shorter, drier rainy season, many production areas of the winter-spring crop are dried out and cracked. This is clearly visible on the terraced fields in the highlands.`
          : `Ở Mù Cang Chải, nơi chia sẻ chung về đặc điểm địa lý, câu chuyện cũng chẳng lạc quan hơn là bao. Thị trấn nhiều năm gần đây chịu tác động rõ nét từ biến đổi khí hậu, nguyên nhân chính là do người dân từ bao đời nay vẫn còn phương thức làm nương, làm rẫy lạc hậu, chặt phá cây rừng trồng, phơi khô. Cháy rừng, tài nguyên rừng bị thu hẹp, người dân thiếu ý thức bảo vệ rừng đã khiến mùa khô cạn kiệt nước, mùa mưa thì thừa nước dẫn đến lũ ống, lũ quét, sạt lở đất. Ngoài ra, hàng năm, do ảnh hưởng của bão, lốc xoáy, nhiều ngôi nhà và hàng trăm hộ dân nằm trong vùng có nguy cơ sạt lở cao phải di dời; nhiều công trình thủy lợi bị hư hỏng nặng, hàng trăm ha hoa màu bị ảnh hưởng. Là địa bàn đầu nguồn nhưng Mù Cang Chải chưa bao giờ thiếu nước sản xuất trầm trọng, dù người dân vẫn có thói quen “chờ nước mưa” trồng trọt. Do biến đổi khí hậu, mưa ít, mùa mưa đến muộn hơn nên nhiều diện tích sản xuất vụ đông xuân bị khô nứt, hiện hữu  rõ trên ruộng bậc thang vùng cao.`}
      </p>

      <div>
        <audio controls autoPlay={false} style={{ position: "absolute" }}>
          <source src="/cheo/audios/loa_phat_thanh.m4a" type="audio/ogg" />
        </audio>
        <img width="100%" src={"/cheo/images/ninh-thuan/6.jpg"} alt="6" />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mua, climate change becomes more pronounced over time. In her somewhat faint memory, Mua remembers her parents and her rushing from their makeshift hut on the mountain into the deep forest because of a sudden big flood when she was only 4 years old. History repeats itself after 12 years, but then Mua was studying at university in Hà Nội, the capital of Vietnam, only listening to her mother over the phone. It wasn't until she started Ná Nả and spent more time on this community project for her hometown that she saw more clearly the cracks in the waterless fields, the erosion from the landslides, and the obscurity of dangerous trips to look for jobs across borders of women in her community.`
          : `Với Mua, biến đổi khí hậu dần rõ nét hơn theo thời gian. Trong ký ức có phần đã mờ nhạt, Mua nhớ em và cha mẹ vội từ căn chòi dựng tạm trên núi vào rừng sâu vì một trận lũ lớn bất ngờ ập đến khi em chỉ mới 4 tuổi.  Điều này lặp lại tương tự sau 12 năm, nhưng lúc này Mua đang học đại học ở thủ đô, chỉ nghe mẹ em thuật lại qua điện thoại. Đến khi bắt tay với Ná Nả, dành thời gian hơn cho dự án cộng đồng ở quê hương, em mới thấy rõ nét hơn sự nứt rạn của những thửa ruộng không nước nơi quê em, sự lở loét của những mảng đất sạt lở,  sự mù mịt của những chuyến đi kiếm việc làm nơi biên giới nguy hiểm của những người phụ nữ trong cộng đồng em.`}
      </p>

      <img width="100%" src={"/cheo/images/ninh-thuan/7.jpg"} alt="7" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `The more attached she gets to Ná Nả and the community, the more she understands the significance of her return this time. When she was a college student, Mua never thought she would come back. To many, her journey is such a paradox. Days and days she tried her best to get out of these terraced fields to come to Hà Nội, eager to explore the world. And yet, after her dream came to a realization, she chose to come back to her birthplace. But as we get closer to her growing journey, the rather odd choices she makes would be less unexpected. Something in her soul makes her special, ever since she was a little girl. She is one of the very rare cases in her hometown attending university, though her family and community conditions put a great obstacle to that. What we know is that, to finish this four-year bachelor's program in Law, she had experienced all sorts of part-time jobs, including waiting tables for food stalls, so she didn’t have to ask for support from her family.`
          : `Tình cảm vun đắp cho Ná Nả và cộng đồng càng nhièu cũng là khi Mua hình dung rõ hơn ý nghĩa của lần trở về này. Lúc còn ngồi trên giảng đường đại học, em chưa bao giờ hình dung một ngày nào đó, mình sẽ lại trở về quê hương. Đối với nhiều người, thật nghịch lý khi nhìn thấy hành trình của Mua. Từ những ngày nỗ lực hết mình để rời những thửa ruộng bậc thang đến thủ đô khám phá thế giới mới, để rồi khi có được những gì em mơ ước trong tay, em lại chọn quay về với quê hương mình. Nhưng nếu đi sâu vào hành trình lớn khôn của Mua, những quyết định khác thường cũng không phải là điều quá lạ lẫm. Sự khác biệt nằm sâu bên trong tâm hồn em từ khi chỉ là một cô bé gái. Em là trường hợp hiếm hoi theo học đại học tại quê mình dù điều kiện sống của gia đình hay cộng đồng cũng chẳng dễ dàng để em có thể thực hiện tâm nguyện đó. Chỉ biết rằng, để hoàn thành 4 năm học với tấm bằng cử nhân Luật trên tay, em đã chọn đi làm thêm ở nhiều nơi khác nhau từ quán cháo, quán bún mà không xin sự hỗ trợ từ gia đình. `}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/8.1.JPG"
          alt="8.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/8.2.JPG"
          alt="8.2"
        />
      </div>

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `To Mua, the decision comes as it has to be. She sensed something different in her even when she was little. In the rare moments of resting after reaping the rice, she didn't join her friends to have fun but rather took walks in the deserted forests where she relaxed on the grass, under the trees, talked, and laughed with herself. She loved walking alone, and sometimes the walk was 5-6km from the family's field back home. She didn't care about getting married or working at the border either, though it was the ideal vision friends her age talked about as they hit puberty.`
          : `Với Mua, em cũng chẳng bỡ ngỡ với những quyết định tự thân. Ngay từ bé, em đã thấy mình lạ lẫm so với các bạn đồng lứa. Trong những lần hiếm hoi nghĩ ngơi sau khi gặt lúa, em không tham gia tụ họp cùng bạn bè vui chơi mà thường chọn dạo bộ trong những mảnh rừng vắng, thả mình trên bãi cỏ, trong rặng cây, nói chuyện và cười đùa với chính mình. Em thích đi dạo một mình, có những hôm còn đi dạo 5-6km từ ruộng của gia đình về nhà. Em cũng chẳng để tâm đến chuyện cưới xin hay đi làm ở biên giới, bức tranh điển hình mà bạn bè em luôn nói với nhau khi họ bắt đầu bước vào giai đoạn dậy thì. `}
      </p>

      <img width="100%" src={"/cheo/images/ninh-thuan/9.jpg"} alt="9" />

      <p style={{ padding: "0 300px" }}>
        {isEnglish
          ? `Higher study is also not an easy decision where Mua was born. Limited economic conditions and identification of ethnic minorities often discourage girls her age to continue their higher education. Therefore, instead, they often work in factories on the plains or the border. Or from their observation of the previous generation, they choose marriage and stay at home to take care of the family. Mua, however, only knew one thing for certain: she wanted to go to university and wanted to continue to learn more about the big, big world around her. Her dream, as we see, doesn't stop at the farms and crops at home, but it travels further and wider.`
          : `Việc chọn học cao hơn cũng không phải là quyết định dễ dàng ở vùng đất em sinh ra.  Điều kiện kinh tế giới hạn, định danh dân tộc thiểu số  thường không khuyến khích các bạn gái bằng tuổi Mua tiếp tục học cao. Thay vào đó, các em thường đi làm ở các nhà máy dưới đồng bằng hoặc nơi biên giới. Hoặc theo những gì mà các em thấy được ở thế hệ trước, chọn cưới chồng và ở nhà chăm sóc gia đình. Với Mua, em chỉ biết rõ một điều là em muốn đi học, muốn tiếp tục biết thêm về thế giới rộng lớn xung quanh em. Giấc mơ của em không chỉ dừng lại ở những gốc cây quê nhà, mà còn mong đi xa hơn, rộng hơn.`}
      </p>

      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/10.1.JPG"
          alt="10.1"
        />
        <img
          style={{ width: "50%" }}
          src="images/ninh-thuan/10.2.JPG"
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
      </p> */}
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
        url={`/cheo/images/ninh-thuan/08-min.jpg`}
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
//       src={"/cheo/images/ninh-thuan/08-min.jpg"}
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
