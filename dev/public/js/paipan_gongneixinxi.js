const info = {
    xing: {
        天蓬: '<span style="color:#0079FE">五行：</span>水<br><span style="color:#0079FE">意：</span>偷盗、抢劫、险阻<br><span style="color:#0079FE">天：</span> 雨、水灾<br><span style="color:#0079FE">人：</span> 聪明伶俐，能言善辩，智慧，计谋，小人，投机，敌将<br><span style="color:#0079FE">性情：</span> 圆融果敢、大胆妄为、贪婪、敢于冒险、喜欢暗中行事、多情多欲、贪酒恋花<br><span style="color:#0079FE">形态：</span> 庄严、威猛、彪悍、精干、面黑或眼大',
        天芮: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">意：</span>疾病，毛病，吝啬，交往<br><span style="color:#0079FE">天：</span> 雾，昏暗 <br><span style="color:#0079FE">人：</span>奸臣, 姑母，母辈，奸诈，乡民，工匠，僧道，凡事迟滞难成<br><span style="color:#0079FE">性情：</span> 忠厚老实、任劳任怨、倔强、勤奋，有韧性但固执、保守、小气、缺乏开拓 精神',
        天冲: '<span style="color:#0079FE">五行：</span>木<br><span style="color:#0079FE">意：</span>权威，战斗，变化，躁动<br><span style="color:#0079FE">天：</span>雷，风<br><span style="color:#0079FE">人：</span>武士，车夫船夫，胆大，发展快速，沖动，脆弱<br><span style="color:#0079FE">形态：</span>直、高、长方脸、长发、梳抓鬓的人、身体瘦长<br><span style="color:#0079FE">性情：</span>性子急、工作麻利、为人爽快、敢打敢冲、好出风头、不稳重、好冲动、 做事多为欠思考、不顾后果、意识冲动、也表示有闯劲、开拓性、办事不拖泥带水、雷 厉风行、有勇气、积极进取',
        天辅: '<span style="color:#0079FE">五行：</span>木<br><span style="color:#0079FE">意：</span>辅助，媒介、文化<br><span style="color:#0079FE">天：</span>风<br><span style="color:#0079FE">人：</span>女人，考试，文书，教学，文雅<br><span style="color:#0079FE">形态：</span>身体细长、发缜密、脸青白、手细长<br><span style="color:#0079FE">性情：</span>文雅、谦虚、有修养、有文化、有风度、仁慈面善、测事多和谐、融洽、相 互谦让、有君子之风',
        天禽: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">意：</span>正直，稳定，平衡<br><span style="color:#0079FE">天：</span>阳时为云，阴时为雾<br><span style="color:#0079FE">人：</span>均旺，元帅，胖子，中正端庄<br><span style="color:#0079FE">形态：</span>偏胖，方圆<br><span style="color:#0079FE">性情：</span>憨厚老实',
        天心: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">意：</span>医药，贵重，公开，运行<br><span style="color:#0079FE">天：</span>雪，春夏为雨<br><span style="color:#0079FE">人：</span>医师，领导，直爽，原话，善良，秀才，官人<br><span style="color:#0079FE">形态：</span>圆形、高大、威严、雄伟<br><span style="color:#0079FE">性情：</span>聪明能干、精明机智、有领导才能、乐善好施、攻于心计、阴柔细腻、策划周密、进退自如、能惩恶助善',
        天柱: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">意：</span>破败，伤灾，色情，美貌，<br><span style="color:#0079FE">天：</span>霜，阴天，春夏为雨<br><span style="color:#0079FE">人：</span>少女，口舌，淫邪，桃花，哭喊<br><span style="color:#0079FE">形态：</span>面白、方圆脸、唇薄、身体健壮<br><span style="color:#0079FE">性情：</span>口舌是非、能说会道、好斗争讼、为能言善辩',
        天任: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">意：</span>稳重，平稳，吉利，财运，积累<br><span style="color:#0079FE">天：</span>云<br><span style="color:#0079FE">人：</span>少男，养生，忠厚，农夫<br><span style="color:#0079FE">形态：</span>弯腰驼背、胸部丰满、方脸重眉<br><span style="color:#0079FE">性情：</span>忠厚老实、任劳任怨、倔强、勤奋，有韧性但固执、保守、小气、缺乏开拓精神',
        天英: '<span style="color:#0079FE">五行：</span>火<br><span style="color:#0079FE">意：</span>烈性，没理，火光，光明<br><span style="color:#0079FE">天：</span>晴，旱灾，火灾<br><span style="color:#0079FE">人：</span>文化教育，文字，信息，虚荣，文人墨客<br><span style="color:#0079FE">形态：</span>瓜子脸、面红白、身体瘦、头发较黄<br><span style="color:#0079FE">性情：</span>声音焦脆、礼貌虚伪、焦躁不安、易怒',
    },
    men: {
        休: '<span style="color:#0079FE">五行：</span>水<br><span style="color:#0079FE">意：</span>修养，休闲，聚会，娱乐，喜庆，休养生息、休闲、懒散、旅游、休息、漫不经心、调养、调理、整理、美容、美发、死亡<br><span style="color:#0079FE">事：</span>婚姻，收益进财，贵人相助<br><span style="color:#0079FE">人：</span>品质高贵之人、美容美发、白领、护士、护理人员、离退休人员、清闲休闲之人、懒散之人、睡觉者、死人<br><span style="color:#0079FE">性情：</span>安然、漫不经心、懒散倦怠、性情温顺、没有活力<br><span style="color:#0079FE">形态：</span>漂亮、美丽、气质好、语音偏低、语速偏慢、着装宽松、休闲、半睁着眼的人、不慌不忙<br><span style="color:#0079FE">物品：</span>饮料、酒、油、盐、酱油、醋、调料、水、油器、汽油、煤油、柴油、润滑油等液体物质，布匹、绳索、衣物、棉花海绵等松软物质，船、汽车、火车、自行车、 电瓶车、摩托车等运输工具，钟表、风扇、洗衣机、空调等能动的家电<br><span style="color:#0079FE">动物：</span>金鱼、毛虫、蜗牛、水牛、黄牛等性情温顺、动作缓慢的动物、水中动物、 栖息在沼泽中的动物、喜水的动',
        死: '<span style="color:#0079FE"></span>五行：</span>土<br><span style="color:#0079FE">意：</span>执着、不灵活、没有变化、丧失生命、没有生命、不可调和、固定不变、不可周转、断了念头<br><span style="color:#0079FE">事：</span>主死丧、刑狱，田土，坟墓，疾病，凶灾之事，运气凝滞<br><span style="color:#0079FE">人：</span>死人、执着的人、不灵活的人、死板的人、不能变通的人、固执的人、 行刑之人、屠夫<br><span style="color:#0079FE">性情：</span>固执迟钝、稳重保守、死心眼、死气沉沉、死不认账、一条路走到黑、不灵活<br><span style="color:#0079FE">形态：</span>脸色呆板、木纳、不灵活、死板<br><span style="color:#0079FE">物品：</span>雕塑、木偶、死人照片、凶器、绳索、枷锁、医疗器械、墓碑、俑<br><span style="color:#0079FE">动物：</span>牛、羊、动物的尸体',
        伤: '<span style="color:#0079FE">五行：</span>木<br><span style="color:#0079FE">意：</span>震动、伤残、争斗，变动，鲁莽，冲动，巨响，损害，消耗，抓捕<br><span style="color:#0079FE">事：</span>争斗，失物，捕捉盗贼，运输赌博，伤心，讨债<br><span style="color:#0079FE">人：</span>公安、军警、斗殴者、讨债人、竞争对手、伤心人、驾驶员、手术医生、受伤者<br><span style="color:#0079FE">性情：</span>性情直爽、不拐弯抹角、雷厉风行、易怒、暴躁、粗野<br><span style="color:#0079FE">形态：</span>威严、恐惧、难看、丑陋、长方脸、面部少有笑容，健壮<br><span style="color:#0079FE">物品：</span>刀、剑、剪子、针、枪、炮、子弹、弓箭、锐器、炸药、武器、毒药、毒气、等一切使人伤亡的物质；破裂不完整的物质<br><span style="color:#0079FE">动物：</span>狮子、老虎、狗、鹰、豹子、蚊子、跳蚤、马蜂等一切能够伤人和骚扰人的<br>',
        杜: '<span style="color:#0079FE">五行：</span>木<br><span style="color:#0079FE">意：</span>阻塞、阻止、困难、限制、闭塞、隐藏、覆盖、遮掩、关闭、断绝、技术、 艺技、体会到的、感觉到的<br><span style="color:#0079FE">事：</span>保密，躲藏，出行避难等<br><span style="color:#0079FE">人：</span>技术人员、理论工作者、管理学者，公检法、安全保密人员、狱警、军人、聋哑人<br><span style="color:#0079FE">性情：</span>不爱言语、心平气和、文静内向<br><span style="color:#0079FE">形态：</span>晦涩、呆滞、深色安然<br><span style="color:#0079FE">物品：</span>书籍、报刊、门窗、瓶塞、瓶盖、衣物、被子、窗帘、内衣、胸罩<br><span style="color:#0079FE">动物：</span>夜行动物，黄鼠狼、老鼠、猫、狗、猫头鹰、<br>',
        中: '<span style="color:#0079FE">五行：</span>无<br><span style="color:#0079FE">意：</span>无路可走，无所适从，不知所措<br><span style="color:#0079FE">事：</span>谋求动静，不知所措，寻求帮助，寻求答案<br><span style="color:#0079FE">人：</span>中间人<br>',
        开: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">意：</span>公开、暴露、开放、开创、开始、开明、公开、开朗、打开、 手术、顺利、通畅、经营、经济、升迁、出行、贸易 ，分手，分开，离婚<br><span style="color:#0079FE">事：</span>主动身远出，功名词公，工作事业，者试升迁、开业等<br><span style="color:#0079FE">人：</span>领导、公务员、白领、公众人物、公司企业老板、创业者、法官、检察官、生意人<br><span style="color:#0079FE">性情：</span>豁达爽朗、谈吐不凡、坦诚无私、性情愉快、无所拘束、意志活跃、思想开放、通情达理、容易沟通、讲情重义、自尊心强、勤奋好学<br><span style="color:#0079FE">形态：</span>脸方顶圆、鼻正口方、上身长直、不怒而威<br><span style="color:#0079FE">物品：</span>金银饰品、贵重物品、圆形物品<br><span style="color:#0079FE">动物：</span>虎、狮、豹、马、天鹅、龙',
        惊: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">意：</span>惊恐、奇怪、刺激、吃惊、诧异、惊慌、恐慌、声音、官非、口舌是非、抖 讼、忧疑、音乐、响声<br><span style="color:#0079FE">事：</span>主口舌争执，宫讼是非，欺诈怪异，虚惊恐惧等<br><span style="color:#0079FE">人：</span>律师、教师、音乐家，歌星、纪检监察人员<br><span style="color:#0079FE">性情：</span>惊恐不安、担惊受怕、忐忑不安、心事重重<br><span style="color:#0079FE">形态：</span>瞠目结舌状、大眼睛、嘴闭不上、呆若木鸡状<br><span style="color:#0079FE">物品：</span>风铃、音响、电视、电话、钟表、乐器、鞭炮、一切能发声的物体<br><span style="color:#0079FE">动物：</span>蝉、蛙、蝈蝈、蟋蟀、黄鹂、麻雀、等一切善于鸣叫的生物',
        生: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">意：</span>有发生安闲、财帛、生机、生长、生意、生产、生命、家宅、压盛之意<br><span style="color:#0079FE">事：</span>建造，生意，求生，耕种，贸易求财<br><span style="color:#0079FE">人：</span>工作者、生产者、生意人、孕妇、从事金融机构者、经理、律师，医生<br><span style="color:#0079FE">性情：</span>忠厚、守时、诚恳、乐观、稳重<br><span style="color:#0079FE">形态：</span>方脸、厚唇、鼻子方直、乐观向上<br><span style="color:#0079FE">物品：</span>利于人们生活所需的一切物品，贵重物品，值钱物品<br><span style="color:#0079FE">动物：</span>泛指一切动物。植物：泛指一切植物',
        景: '<span style="color:#0079FE">五行：</span>火<br><span style="color:#0079FE">意：</span>张大虚花，发扬振作、实破、学习、文化、文书、证件，书信、火电，计划、谋划<br><span style="color:#0079FE">事：</span>主音信行人，文书华彩，酒食宴会，或有小喜而不久，先吉后凶，及考试，血光之事<br><span style="color:#0079FE">人：</span>作家，老师，演员，美容师，知识分子，广告、饭划，传媒，美工<br><span style="color:#0079FE">性情：</span>心直口快、脾气急躁、虚心处事、知书达理<br><span style="color:#0079FE">形态：</span>漂亮、红脸、脸尖形、身体偏瘦<br><span style="color:#0079FE">物品：</span>图书、图画、照片、图片、灯光、艺术品、首饰、时装、文件、合同、证 书、颜料、油漆、美容美发用品、书画用品、书籍、烟火爆竹、霓虹灯、电影机、电视 机、投影机<br><span style="color:#0079FE">动物：</span>雉鸡、孔雀、雄鹰、鸟类、观赏鱼、观赏动物等一切漂亮的生物',
    },
    shen: {
        值符: '<span style="color:#0079FE">五行：</span>木（用的时候当做火来用）<br><span style="color:#0079FE">意：</span>元首，领导，尊长，有权利的人，贵重的物品，贵人，靠山，重要的，有名望的<br><span style="color:#0079FE">事：</span>高攀接贵，财帛收益<br><span style="color:#0079FE">人：</span>名人、明星、领袖、领导、教授、老板、经理、管理者、负责人、长辈<br><span style="color:#0079FE">形态：</span>方脸、粗眉、重发、鼻子直大、嘴唇方而有棱角、唇线清晰、身材长直、敦厚<br><span style="color:#0079FE">地利：</span>首都、首府、古建筑、庙宇、高档场所、首饰店、古董行、金矿、珠宝、煤矿、油矿<br><span style="color:#0079FE">物品：</span>任何重要或贵重物品',
        螣蛇: '<span style="color:#0079FE">五行：</span>火<br><span style="color:#0079FE">意：</span>惊恐、虚惊、怪异、虚幻、梦境、变来变去、反反复复、曲折、虚诈、虚伪、华而 不实、闪烁不定、光怪陆离、耀眼、妖艳、猜疑、狠毒、纠缠、变化、拐弯抹角<br><span style="color:#0079FE">事：</span>怪异，多梦，惊恐，多疑，多虑<br><span style="color:#0079FE">人：</span>委屈婉转、狡猾之人、善变之人、虚诈之人、变化无常之人、死缠烂打之人、漂亮妖艳之人、口舌毒辣之人、呻吟之人、疑心之人、做梦人、精神病患者<br><span style="color:#0079FE">形态：</span>水蛇腰、驼背、头发黄或稀少、大脑门<br><span style="color:#0079FE">地利：</span>弯路、海岸线、河流、烟囱、窑燥、塔吊、高压线、山脉、弯曲的建筑物、 反光的建筑物、耀眼的光<br><span style="color:#0079FE">物品：</span>绳子、绳索、锁链、烟囱、灯、霓虹灯、烟火、汽车排气筒、蜡烛、香火、带花纹的布和衣服、渔网、腰带、鞋带、领带、项链、手链、表链、拉锁、发辫',
        太阴: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">意：</span>隐匿、隐秘，隐私，暖昧，阴佑，阴暗，阴谋，细腻，喜庆，妇女，婢妾<br><span style="color:#0079FE">事：</span>主淫荡阴私，暗地感情，背地里的事情，见不得光的事情<br><span style="color:#0079FE">人：</span>保姆、女友、二奶、女人、私通者、少女、歌手、策划师、 秘书、文人、暗中行事者、隐居者<br><span style="color:#0079FE">形态：</span>脸色白净、口似樱桃、鼻子挺直、身白如玉、四指如葱<br><span style="color:#0079FE">地利：</span>山的阴面、看不见光的房屋、地下室、潮湿的地方、洞穴、厕所、洗手间，阴暗的地方<br> <span style="color:#0079FE">物品：</span>为雕琢品、金银、羽毛、字迹、墨迹、字画、玩具、喜庆用品、化妆品、 冰、冷饮、车、碾碎机',
        六合: '<span style="color:#0079FE">五行：</span>木<br><span style="color:#0079FE">意：</span>合伙，和合，婚姻，喜庆，交易，众多，逃人，勾引，组合，聚集，团体，重叠，私情，朋友，人脉，交际，证据，中介，盒子，小孩 ，仁慈、包容<br><span style="color:#0079FE">事：</span>主结好说媒，恋爱，婚姻，合作，聚会 ，帮忙<br><span style="color:#0079FE">人：</span>乐善好施之人、医生、人缘好的人、组织能力强的人、中介人、儿童、幼 儿、教师、僧道、基督徒、信教人、艺人<br><span style="color:#0079FE">形态：</span>圆脸、兔牙、一团和气、笑容可掬、点头哈腰、缩头耸肩<br><span style="color:#0079FE">地利：</span>草地、公园、竹林、苇塘、葱岭、树林，植物周围，东西比较多的地方<br> <span style="color:#0079FE">物品：</span>合子、伞、柜子、箱子结婚证书、合约、合同、证书、信印、书契、果品、布帛、衣囊',
        白虎: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">意：</span>凶险，灾难，阻隔，残暴，威猛，权威，冷酷，强硬，杀伐，战斗，大风，道路，地震，军警，孝服人，刀枪，伤灾、牢狱、疾病、死亡<br><span style="color:#0079FE">事：</span>主讲武斗兵，伤灾病丧等<br><span style="color:#0079FE">人：</span>技术过硬之人、好斗之人、黑社会之人、威猛之人、权力之人、义气之人、公安、军警、捕盗人、罪犯、重病人、凶杀人<br><span style="color:#0079FE">形态：</span>圆眼、虎头虎脑、面部表情严肃或死板、身体多肌肉、强健<br><span style="color:#0079FE">地利：</span>道路、关卡、收费站、悬崖、峭壁、房角、堤坝、闸口、路口<br> <span style="color:#0079FE">物品：</span>毒品、金银、刀剑、枪枝、武器、凶器、锁、碾子、磨、石狮子、石制品、 铁质品、钛制品、瓦、石、网罗',
        勾陈: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">意：</span>勾连，迟滞，争执，反复，羁留，残忍，捕快，波折，勾心斗角，讼狱，不忠，惊恐怪异，妖言惑众，田土，土地<br><span style="color:#0079FE">事：</span>主争斗殴打，偷情，暗中联合，偷到等<br><span style="color:#0079FE">人：</span>公安，军警，具有权威得人，重刑犯，罪犯，死人，农夫<br><span style="color:#0079FE">形态：</span>脸色阴沉，显老<br><span style="color:#0079FE">地利：</span>阴暗角落，污垢很多的地方，家中老旧材质物品周围<br><span style="color:#0079FE">物品：</span>古董，金银，刀枪，枪支，武器，凶器',
        太常: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">意：</span>酒食，衣服，礼乐，宴会，司仪、头街、医药，装饰<br><span style="color:#0079FE">事：</span>主酒食宴会，装饰<br><span style="color:#0079FE">人：</span>  忠厚老实，憨厚，呆呆的，固执<br><span style="color:#0079FE">形态：</span>体态偏厚，膀大腰圆，壮实<br> <span style="color:#0079FE">物品：</span> 食品，所有日常常见用品，酒水',
        玄武: '<span style="color:#0079FE">五行：</span>水<br><span style="color:#0079FE">意：</span>偷盗、破耗，灵活，奸淫，欺骗，诡谲，玄学，神秘，小人，旁门，不正，逃亡，阴险，醉汉，污染，污秽，小偷、偷盗、偷情、谎言、阴谋、诡计<br><span style="color:#0079FE">事：</span>主被偷行窃，破财，上当受骗等<br><span style="color:#0079FE">人：</span>聪明多智者、能言善辩者、诚信不高者、爱说谎话者、骗子、醉酒之人、盗贼、娼妇、第三者<br><span style="color:#0079FE">形态：</span>贼眉鼠眼、神色不定、弯腰驼背、肩窄腿细、视力衰退<br><span style="color:#0079FE">地利：</span>阴沟、地井、下水道、地窖、地下室、不见光的场所、低洼地、河流、池 塘、湖泊、污水、粪便、厕所、洗手间、厨房<br> <span style="color:#0079FE">物品：</span>图片、图画、文章、印信、盐、酱、醋、油、酒、油漆、伞、碳、一切流体类物质；瓶、罐、瓢、缸等容器',
        朱雀: '<span style="color:#0079FE">五行：</span>火<br><span style="color:#0079FE">意：</span>文书，文化，信息，文字，口舌，能言善辦，玄虚，虚伪，不可靠，琢磨不透，神秘，谋划<br><span style="color:#0079FE">事：</span>主讲文斗口， 文书信息等<br><span style="color:#0079FE">人：</span> 文人，能说会道者，律师，骗子，智者，不诚实者，醉汉，演员，导演<br><span style="color:#0079FE">形态：</span>脸型偏尖，脸上肉不多，精神状态不错<br><span style="color:#0079FE">地利：</span>  潮安，来去水，道路，阳光照射出，有光的地方<br> <span style="color:#0079FE">物品：</span> 文书，画，纸张等',
        九地: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">意：</span>稳定，隐秘，暗地，缓慢，保守，长久，踏实，安静，低矮，疾病，暗疾，神鬼，幽冥，埋伏，储蓄，吝啬，消极，陈旧，低调，包容，博大，关怀，缓慢，困惑<br><span style="color:#0079FE">事：</span>主谋产寻穴，疾病，家宅，地皮等<br><span style="color:#0079FE">人：</span>乡农、医生、老妇人、道姑、村姑、狱警、地下工作者、不公开的职业、吝 啬之人、慢吞吞的人、性格柔顺、自私消极的人<br><span style="color:#0079FE">形态：</span>大腹、肥厚、方脸多肉、肥胖、身材五短、声音如瓮<br><span style="color:#0079FE">地利：</span>地基、地窖、低洼地带、地下室、地道、地下铁、地摊、地下水、地炉、地炕，矮处<br> <span style="color:#0079FE">物品：</span>五谷、布帛、沙石、缸、瓦盆、瓦罐、土制品、储存粮食的器皿、储存衣物 的柜子、首饰盒',
        九天: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">意：</span>刚强，好动，发扬，，威武，喧闹，变迁，远行，虚荣，好高慕远，不切实际，开豁，高调，吹噓，显摆，高大<br><span style="color:#0079FE">事：</span>主行欢作霸，出行变迁等<br><span style="color:#0079FE">人：</span>领导、首脑、长辈、父辈、有威望之人<br><span style="color:#0079FE">形态：</span>高大、魁梧、威严、脸方正、手绵软、言语掷地有声<br><span style="color:#0079FE">地利：</span>天井、天车、开阔地、高原、高空、高大建筑、首府、办公室、经理室、豪 华地方、楼房最高层，高处<br> <span style="color:#0079FE">物品：</span>金玉、宝石、高耸、剑戟、刀枪、钱、镜子、铜铁、帽子、眼镜、水果、光亮玲珑物、旋转或动物、飞机        ',
    },
    tiangan: {
        甲: '<span style="color:#0079FE">五行：</span>阳木<br><span style="color:#0079FE">天：</span>天<br><span style="color:#0079FE">地：</span>大树，林木<br><span style="color:#0079FE">人：</span>首领，长辈，领导人、经理、董事长、将军、元帅、名人<br><span style="color:#0079FE">意：</span>开始，喜庆，第一，重要，名贵，高档<br><span style="color:#0079FE">形状：</span>长方形，直，长，高<br><span style="color:#0079FE">人体：</span>内为胆，外为头<br>',
        乙: '<span style="color:#0079FE">五行：</span>阴木<br><span style="color:#0079FE">天：</span>日<br><span style="color:#0079FE">地：</span>花草，藤蔓<br><span style="color:#0079FE">人：</span>妻女，术士<br><span style="color:#0079FE">意：</span>曲折，间接，辅助，犹豫，依附，曲中求的希望，转机<br><span style="color:#0079FE">形状：</span>弯曲，曲折，长条<br><span style="color:#0079FE">人体：</span>内为肝，外为颈，四肢，经络<br>',
        丙: '<span style="color:#0079FE">五行：</span>阳火<br><span style="color:#0079FE">天：</span>月<br><span style="color:#0079FE">地：</span>火，电，炉灶<br><span style="color:#0079FE">人：</span>将军，浪子，第三者男性<br><span style="color:#0079FE">意：</span>悖乱不安宁，混乱，反叛，威严，急躁，希望（乱中取胜），发热<br><span style="color:#0079FE">形状：</span>锥形，尖锐<br><span style="color:#0079FE">人体：</span>内为小肠，外为面，精气神<br>',
        丁: '<span style="color:#0079FE">五行：</span>阴火<br><span style="color:#0079FE">天：</span>星<br><span style="color:#0079FE">地：</span>人烟，香火<br><span style="color:#0079FE">人：</span>文士，美女，第三者女性<br><span style="color:#0079FE">意：</span>希望，文化，文章，妩媚，漂亮，善变，炎症<br><span style="color:#0079FE">形状：</span>锥形，尖锐<br><span style="color:#0079FE">人体：</span>内为心，外为目，牙齿，舌头<br>',
        戊: '<span style="color:#0079FE">五行：</span>阳土<br><span style="color:#0079FE">天：</span>云<br><span style="color:#0079FE">地：</span>山岗，房屋<br><span style="color:#0079FE">人：</span>武人，中介<br><span style="color:#0079FE">意：</span>本金，财富，行动，积累，忠厚，憨厚，稳定<br><span style="color:#0079FE">形状：</span>方正，厚实<br><span style="color:#0079FE">人体：</span>内为胃，外为胸，臂，背，鼻<br> ',
        己: '<span style="color:#0079FE">五行：</span>阴土<br><span style="color:#0079FE">天：</span>雾<br><span style="color:#0079FE">地：</span>丘陵，坟墓<br><span style="color:#0079FE">人：</span>小人，内奸<br><span style="color:#0079FE">意：</span>自私，阴暗，受纳，杂乱，陈旧，欲望，计划，注意，想法<br><span style="color:#0079FE">形状：</span>方正，厚实<br><span style="color:#0079FE">人体：</span>内为脾，外为腹，小腹<br>',
        庚: '<span style="color:#0079FE">五行：</span>阳金<br><span style="color:#0079FE">天：</span>雨雪，冰雹<br><span style="color:#0079FE">地：</span>巨岩，大路<br><span style="color:#0079FE">人：</span>仇人，敌人，盗贼<br><span style="color:#0079FE">意：</span>更新，阻隔，困难，争斗，猛烈，破坏，强硬<br><span style="color:#0079FE">形状：</span>圆形，破碎，损坏<br><span style="color:#0079FE">人体：</span>内为大肠，外为骨骼<br>',
        辛: '<span style="color:#0079FE">五行：</span>阴金<br><span style="color:#0079FE">天：</span>风<br><span style="color:#0079FE">地：</span>碎石，小道<br><span style="color:#0079FE">人：</span>囚犯，罪人<br><span style="color:#0079FE">意：</span>错误，革新，压制，辛苦，问题<br><span style="color:#0079FE">形状：</span>圆形，破碎，损坏<br><span style="color:#0079FE">人体：</span>内为肺，外为喉咙，关节<br>',
        壬: '<span style="color:#0079FE">五行：</span>阳水<br><span style="color:#0079FE">天：</span>雨<br><span style="color:#0079FE">地：</span>江河，胡海<br><span style="color:#0079FE">人：</span>孕妇，流氓<br><span style="color:#0079FE">意：</span>动态，变化，困惑，困境，迷茫，任性<br><span style="color:#0079FE">形状：</span>弯曲，无规则<br><span style="color:#0079FE">人体：</span>内为膀胱，三焦，外为男性生殖器，腿<br> ',
        癸: '<span style="color:#0079FE">五行：</span>阴水<br><span style="color:#0079FE">天：</span>露<br><span style="color:#0079FE">地：</span>沼泽，池厕<br><span style="color:#0079FE">人：</span>逃人，隐士<br><span style="color:#0079FE">意：</span>制约，管束，艰难，流动，变动，变化，整合，陷阱，隐伏，肮脏<br><span style="color:#0079FE">形状：</span>弯曲，无规则<br><span style="color:#0079FE">人体：</span>内为肾，心包，外为女性生殖器，四肢，月经<br> ',
    },
    gua: {
        乾: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">事：</span>主大事，重要的事，事情影响很大<br><span style="color:#0079FE">藏：</span>戌，亥<br><span style="color:#0079FE">人：</span>父<br><span style="color:#0079FE">方位：</span>西北，右后<br><span style="color:#0079FE">地域：</span>雍州，黄河<br><span style="color:#0079FE">数目：</span>6, 1<br>与离宫，艮宫通气',
        坎: '<span style="color:#0079FE">五行：</span>水<br><span style="color:#0079FE">事：</span>动荡不安，变化、波折、忧患，疾病<br><span style="color:#0079FE">藏：</span>子<br><span style="color:#0079FE">人：</span>中男<br><span style="color:#0079FE">方位：</span>北，后，下<br><span style="color:#0079FE">地域：</span>冀州，恒山<br><span style="color:#0079FE">数目：</span>1, 5, 6<br>与兑宫，坤宫通气',
        艮: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">事：</span>事物发展缓慢，停滞不前，遇到了阻碍<br><span style="color:#0079FE">藏：</span>丑，寅<br><span style="color:#0079FE">人：</span>少男<br><span style="color:#0079FE">方位：</span>东北，左后<br><span style="color:#0079FE">地域：</span>兖州，济水<br><span style="color:#0079FE">数目：</span>8, 7<br>与震宫，乾宫通气',
        震: '<span style="color:#0079FE">五行：</span>木<br><span style="color:#0079FE">事：</span>有突发的变动，突然的机遇、意想不到的事情，容易出现变化<br><span style="color:#0079FE">藏：</span>卯<br><span style="color:#0079FE">人：</span>长男<br><span style="color:#0079FE">方位：</span>东，左<br><span style="color:#0079FE">地域：</span>青州，泰山<br><span style="color:#0079FE">数目：</span>3, 4<br>与离宫，艮宫通气',
        巽: '<span style="color:#0079FE">五行：</span>木<br><span style="color:#0079FE">事：</span>漂浮不定，进一步退两步，犹豫不决，不落实，尚在变化中，徘徊<br><span style="color:#0079FE">藏：</span>辰，巳<br><span style="color:#0079FE">人：</span>长女<br><span style="color:#0079FE">方位：</span>东南，左前<br><span style="color:#0079FE">地域：</span>徐州，淮河<br><span style="color:#0079FE">数目：</span>4, 5<br>与兑宫，坤宫通气',
        离: '<span style="color:#0079FE">五行：</span>火<br><span style="color:#0079FE">事：</span>开始轰轰烈烈，最后悄无声息，容易引人注目<br><span style="color:#0079FE">藏：</span>午<br><span style="color:#0079FE">人：</span>中女<br><span style="color:#0079FE">方位：</span>南，前，上<br><span style="color:#0079FE">地域：</span>扬州，衡山<br><span style="color:#0079FE">数目：</span>9, 6, 3<br>与乾宫，震宫通气',
        坤: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">事：</span>慢而稳，有问题，眼光短<br><span style="color:#0079FE">藏：</span>未，申<br><span style="color:#0079FE">人：</span>母<br><span style="color:#0079FE">方位：</span>西南，右前<br><span style="color:#0079FE">地域：</span>荆州，长江<br><span style="color:#0079FE">数目：</span>2, 8<br>与巽宫，坎宫通气',
        兑: '<span style="color:#0079FE">五行：</span>金<br><span style="color:#0079FE">事：</span>喜事担忧缺陷，胆战心惊，有口舌是非，不利索<br><span style="color:#0079FE">藏：</span>酉<br><span style="color:#0079FE">人：</span>少女<br><span style="color:#0079FE">方位：</span>西，右<br><span style="color:#0079FE">地域：</span>梁州，华山<br><span style="color:#0079FE">数目：</span>7, 8, 2<br>与巽宫，坎宫通气',
        中: '<span style="color:#0079FE">五行：</span>土<br><span style="color:#0079FE">事：</span>围堵，受困，困难重重，有计无施<br><span style="color:#0079FE">方位：</span>中<br><span style="color:#0079FE">地域：</span>豫州，嵩山<br><span style="color:#0079FE">数目：</span>5<br><span style="color:#0079FE">对宫：</span>阳遁看艮，阴遁看坤<br>',
    },
};

let whichGong;

document.querySelectorAll('[data-gongwei-overlay]').forEach((overlay, index) => {
    overlay.addEventListener('click', () => {
        whichGong = index;
        if (
            document.querySelectorAll('[data-tianpanshen]')[index].innerHTML == '值符' &&
            document.querySelectorAll('[data-dipanshen]')[index].innerHTML == '值符'
        ) {
            document.getElementById('paipan-jiamu-info').classList.remove('hidden');
            document.getElementById('paipan-gongwei-info').classList.remove('rounded-bl-[15px]');
            document.getElementById('paipan-gongwei-info').classList.add('gongwei-info-on-bottom');
            getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
            changeFocusItem('geju', true, true);
            openInfoWindow();
        } else if (document.querySelectorAll('[data-tianpanshen]')[index].innerHTML == '值符') {
            document.getElementById('paipan-jiamu-info').classList.remove('hidden');
            document.getElementById('paipan-gongwei-info').classList.remove('rounded-bl-[15px]');
            document.getElementById('paipan-gongwei-info').classList.add('gongwei-info-on-bottom');
            getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
            changeFocusItem('geju', true, false);
            openInfoWindow();
        } else if (document.querySelectorAll('[data-dipanshen]')[index].innerHTML == '值符') {
            document.getElementById('paipan-jiamu-info').classList.remove('hidden');
            document.getElementById('paipan-gongwei-info').classList.remove('rounded-bl-[15px]');
            document.getElementById('paipan-gongwei-info').classList.add('gongwei-info-on-bottom');
            getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
            changeFocusItem('geju', false, true);
            openInfoWindow();
        } else {
            document.getElementById('paipan-jiamu-info').classList.add('hidden');
            document.getElementById('paipan-gongwei-info').classList.add('rounded-bl-[15px]');
            document
                .getElementById('paipan-gongwei-info')
                .classList.remove('gongwei-info-on-bottom');
            getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
            changeFocusItem('geju', false, false);
            openInfoWindow();
        }
    });
});

document.getElementById('paipan-geju-info').addEventListener('click', () => {
    if (
        document.querySelectorAll('[data-tianpanshen]')[whichGong].innerHTML == '值符' &&
        document.querySelectorAll('[data-dipanshen]')[whichGong].innerHTML == '值符'
    ) {
        changeFocusItem('geju', true, true);
    } else if (document.querySelectorAll('[data-tianpanshen]')[whichGong].innerHTML == '值符') {
        changeFocusItem('geju', true, false);
    } else if (document.querySelectorAll('[data-dipanshen]')[whichGong].innerHTML == '值符') {
        changeFocusItem('geju', false, true);
    } else {
        changeFocusItem('geju', false, false);
    }
});
document.getElementById('paipan-tianpanshen-info').addEventListener('click', () => {
    changeFocusItem('tianpanshen');
});
document.getElementById('paipan-xing-info').addEventListener('click', () => {
    changeFocusItem('xing');
});
document.getElementById('paipan-men-info').addEventListener('click', () => {
    changeFocusItem('men');
});
document.getElementById('paipan-tianpangan-info').addEventListener('click', () => {
    changeFocusItem('tianpangan');
});
document.getElementById('paipan-jiamu-info').addEventListener('click', () => {
    changeFocusItem('jiamu');
});
document.getElementById('paipan-dipangan-info').addEventListener('click', () => {
    changeFocusItem('dipangan');
});
document.getElementById('paipan-gongwei-info').addEventListener('click', () => {
    changeFocusItem('gua');
});

document.getElementById('paipan-overlay').addEventListener('click', () => {
    document.getElementById('paipan-overlay').classList.remove('active');
    document.getElementById('paipan-info-modal').classList.remove('active');
});

function openInfoWindow() {
    // open info modal
    document.getElementById('paipan-overlay').classList.add('active');
    document.getElementById('paipan-info-modal').classList.add('active');
}

async function getCurrentGongweiInfo(gongweiIndex) {
    const tianpanshen = document.querySelectorAll('[data-tianpanshen]')[gongweiIndex].innerHTML;
    const xing = document.querySelectorAll('[data-xing]')[gongweiIndex].innerHTML;
    const men = document.querySelectorAll('[data-men]')[gongweiIndex].innerHTML;
    const tianpangan = document.querySelectorAll('[data-tianpangan]')[gongweiIndex].innerHTML;
    const dipangan = document.querySelectorAll('[data-dipangan]')[gongweiIndex].innerHTML;
    let bagua = '';
    switch (gongweiIndex) {
        case 0:
            bagua = '坎';
            break;
        case 1:
            bagua = '坤';
            break;
        case 2:
            bagua = '震';
            break;
        case 3:
            bagua = '巽';
            break;
        case 4:
            bagua = '中';
            break;
        case 5:
            bagua = '乾';
            break;
        case 6:
            bagua = '兑';
            break;
        case 7:
            bagua = '艮';
            break;
        case 8:
            bagua = '离';
            break;
    }
    document.getElementById('paipan-tianpanshen-info').innerText = tianpanshen;
    document.getElementById('paipan-xing-info').innerText = xing;
    document.getElementById('paipan-men-info').innerText = men;
    document.getElementById('paipan-tianpangan-info').innerText = tianpangan;
    document.getElementById('paipan-dipangan-info').innerText = dipangan;
    document.getElementById('paipan-gongwei-info').innerText = bagua;
    // return {
    //     tianpanshen: tianpanshen,
    //     xing: xing,
    //     men: men,
    //     tianpangan: tianpangan,
    //     dipangan: dipangan,
    //     bagua: bagua,
    // };
}

function changeFocusItem(item, tianpanjia = false, dipanjia = false) {
    switch (item) {
        case 'geju':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.add('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
            document.getElementById('paipan-xing-info').classList.remove('focused-item');
            document.getElementById('paipan-men-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
            document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
            document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
            document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
            document.getElementById('paipan-modal-info-section').innerHTML = updateGejuInfo(
                document.getElementById('paipan-tianpangan-info').innerText,
                document.getElementById('paipan-dipangan-info').innerText,
                document.getElementById('paipan-gongwei-info').innerText,
                tianpanjia,
                dipanjia,
            );
            break;
        case 'tianpanshen':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.add('focused-item');
            document.getElementById('paipan-xing-info').classList.remove('focused-item');
            document.getElementById('paipan-men-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
            document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
            document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
            document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
            updateShenInfo(document.getElementById('paipan-tianpanshen-info').innerText);
            break;
        case 'xing':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
            document.getElementById('paipan-xing-info').classList.add('focused-item');
            document.getElementById('paipan-men-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
            document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
            document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
            document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
            updateXingInfo(document.getElementById('paipan-xing-info').innerText);
            break;
        case 'men':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
            document.getElementById('paipan-xing-info').classList.remove('focused-item');
            document.getElementById('paipan-men-info').classList.add('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
            document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
            document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
            document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
            updateMenInfo(document.getElementById('paipan-men-info').innerText);
            break;
        case 'tianpangan':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
            document.getElementById('paipan-xing-info').classList.remove('focused-item');
            document.getElementById('paipan-men-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.add('focused-item');
            document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
            document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
            document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
            updateTianganInfo(document.getElementById('paipan-tianpangan-info').innerText);
            break;
        case 'jiamu':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
            document.getElementById('paipan-xing-info').classList.remove('focused-item');
            document.getElementById('paipan-men-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
            document.getElementById('paipan-jiamu-info').classList.add('focused-item');
            document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
            document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
            updateTianganInfo('甲');
            break;
        case 'dipangan':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
            document.getElementById('paipan-xing-info').classList.remove('focused-item');
            document.getElementById('paipan-men-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
            document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
            document.getElementById('paipan-dipangan-info').classList.add('focused-item');
            document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
            updateTianganInfo(document.getElementById('paipan-dipangan-info').innerText);
            break;
        case 'gua':
            document.getElementById('paipan-modal-info-section').innerHTML = '';
            document.getElementById('paipan-geju-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
            document.getElementById('paipan-xing-info').classList.remove('focused-item');
            document.getElementById('paipan-men-info').classList.remove('focused-item');
            document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
            document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
            document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
            document.getElementById('paipan-gongwei-info').classList.add('focused-item');
            updateBaguaInfo(document.getElementById('paipan-gongwei-info').innerText);
            break;
    }
}
function updateXingInfo(xing) {
    switch (xing) {
        case '天蓬':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天蓬;
            break;
        case '天芮':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天芮;
            break;
        case '天冲':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天冲;
            break;
        case '天辅':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天辅;
            break;
        case '天禽':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天禽;
            break;
        case '天心':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天心;
            break;
        case '天柱':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天柱;
            break;
        case '天任':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天任;
            break;
        case '天英':
            document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天英;
            break;
    }
}
function updateMenInfo(men) {
    switch (men) {
        case '休门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.休;
            break;
        case '死门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.死;
            break;
        case '伤门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.伤;
            break;
        case '杜门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.杜;
            break;
        case '中门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.中;
            break;
        case '开门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.开;
            break;
        case '惊门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.惊;
            break;
        case '生门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.生;
            break;
        case '景门':
            document.getElementById('paipan-modal-info-section').innerHTML = info.men.景;
            break;
    }
}
function updateShenInfo(shen) {
    switch (shen) {
        case '值符':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.值符;
            break;
        case '螣蛇':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.螣蛇;
            break;
        case '太阴':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.太阴;
            break;
        case '六合':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.六合;
            break;
        case '白虎':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.白虎;
            break;
        case '勾陈':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.勾陈;
            break;
        case '太常':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.太常;
            break;
        case '玄武':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.玄武;
            break;
        case '朱雀':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.朱雀;
            break;
        case '九地':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.九地;
            break;
        case '九天':
            document.getElementById('paipan-modal-info-section').innerHTML = info.shen.九天;
            break;
    }
}
function updateTianganInfo(tiangan) {
    switch (tiangan) {
        case '甲':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.甲;
            break;
        case '乙':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.乙;
            break;
        case '丙':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.丙;
            break;
        case '丁':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.丁;
            break;
        case '戊':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.戊;
            break;
        case '己':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.己;
            break;
        case '庚':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.庚;
            break;
        case '辛':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.辛;
            break;
        case '壬':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.壬;
            break;
        case '癸':
            document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.癸;
            break;
    }
}
function updateBaguaInfo(gua) {
    switch (gua) {
        case '乾':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.乾;
            break;
        case '坎':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.坎;
            break;
        case '艮':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.艮;
            break;
        case '震':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.震;
            break;
        case '巽':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.巽;
            break;
        case '离':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.离;
            break;
        case '坤':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.坤;
            break;
        case '兑':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.兑;
            break;
        case '中':
            document.getElementById('paipan-modal-info-section').innerHTML = info.gua.中;
            break;
    }
}
function updateGejuInfo(tianpangan, dipangan, gong, tianpanjia = false, dipanjia = false) {
    let result = '';
    if (gong !== '中') {
        if (tianpanjia == true || dipanjia == true) {
            result =
                getZhangSheng(tianpangan, gong) +
                getZhangSheng(dipangan, gong) +
                getZhangSheng('甲', gong) +
                '<br>' +
                getZhengGe(tianpangan, dipangan) +
                '<br>';
            if (tianpanjia == true && dipanjia == true) {
                result =
                    result +
                    getZhengGe('甲', '甲') +
                    '<br>' +
                    getZhengGe(tianpangan, '甲') +
                    '<br>' +
                    getZhengGe('甲', dipangan) +
                    '<br>' +
                    getFuGe(tianpangan, gong) +
                    '<br><br>' +
                    getFuGe('甲', gong);
            } else if (tianpanjia == true) {
                result =
                    result +
                    getZhengGe('甲', dipangan) +
                    '<br>' +
                    getFuGe(tianpangan, gong) +
                    '<br><br>' +
                    getFuGe(dipangan, gong) +
                    '<br><br>' +
                    getFuGe('甲', gong);
            } else if (dipanjia == true) {
                result =
                    result +
                    getZhengGe(tianpangan, '甲') +
                    '<br>' +
                    getFuGe(tianpangan, gong) +
                    '<br><br>' +
                    getFuGe(dipangan, gong) +
                    '<br><br>' +
                    getFuGe('甲', gong);
            }
        } else {
            result =
                getZhangSheng(tianpangan, gong) +
                getZhangSheng(dipangan, gong) +
                '<br>' +
                getZhengGe(tianpangan, dipangan) +
                '<br>' +
                getFuGe(tianpangan, gong) +
                '<br><br>' +
                getFuGe(dipangan, gong);
        }
    } else {
        for (let i = 0; i < 9; i++) {
            if (document.querySelectorAll('[data-wangshuai]')[i].innerText == '旺') {
                switch (i) {
                    case 0:
                        gong = '坎';
                        break;
                    case 1:
                        gong = '坤';
                        break;
                    case 2:
                        gong = '震';
                        break;
                    case 3:
                        gong = '巽';
                        break;
                    case 5:
                        gong = '乾';
                        break;
                    case 6:
                        gong = '兑';
                        break;
                    case 7:
                        gong = '艮';
                        break;
                    case 8:
                        gong = '离';
                        break;
                }
                if (tianpanjia == true || dipanjia == true) {
                    result =
                        getZhangSheng(tianpangan, gong) +
                        getZhangSheng(dipangan, gong) +
                        getZhangSheng('甲', gong) +
                        '<br>' +
                        getZhengGe(tianpangan, dipangan) +
                        '<br>';
                    if (tianpanjia == true && dipanjia == true) {
                        result =
                            result +
                            getZhengGe('甲', '甲') +
                            '<br>' +
                            getZhengGe(tianpangan, '甲') +
                            '<br>' +
                            getZhengGe('甲', dipangan) +
                            '<br>' +
                            getFuGe(tianpangan, '中') +
                            '<br><br>' +
                            getFuGe('甲', '中');
                    } else if (tianpanjia == true) {
                        result =
                            result +
                            getZhengGe('甲', dipangan) +
                            '<br>' +
                            getFuGe(tianpangan, '中') +
                            '<br><br>' +
                            getFuGe(dipangan, '中') +
                            '<br><br>' +
                            getFuGe('甲', '中');
                    } else if (dipanjia == true) {
                        result =
                            result +
                            getZhengGe(tianpangan, '甲') +
                            '<br>' +
                            getFuGe(tianpangan, '中') +
                            '<br><br>' +
                            getFuGe(dipangan, '中') +
                            '<br><br>' +
                            getFuGe('甲', '中');
                    }
                } else {
                    result =
                        getZhangSheng(tianpangan, gong) +
                        getZhangSheng(dipangan, gong) +
                        '<br>' +
                        getZhengGe(tianpangan, dipangan) +
                        '<br>' +
                        getFuGe(tianpangan, '中') +
                        '<br><br>' +
                        getFuGe(dipangan, '中');
                }
            }
        }
    }
    return result;
}
function getZhengGe(tianpangan, dipangan) {
    // todo 重构代码，把所有的格局全部变成单独的 const 从而更加方便后期修改
    const group = tianpangan + dipangan;
    const jinruge =
        '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br>';
    let output = `${tianpangan} + ${dipangan}：<br>`;
    switch (group) {
        case '甲甲':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '甲乙':
            output = output + jinruge;
            break;
        case '甲丙':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '甲丁':
            output =
                output +
                '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
            break;
        case '甲戊':
            output =
                output +
                '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。木土相犯，牢狱口舌，争财夺利<br>';
            break;
        case '甲己':
            output =
                output +
                '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我<br>';
            break;
        case '甲庚':
            output =
                output +
                '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br><span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '甲辛':
            output =
                output +
                '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '甲壬':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '甲癸':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;

        case '乙甲':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
            break;
        case '乙乙':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '乙丙':
            output =
                output +
                '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
            break;
        case '乙丁':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '乙戊':
            output =
                output +
                '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。木土相犯，牢狱口舌，争财夺利<br>';
            break;
        case '乙己':
            output =
                output +
                '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。木土相犯，牢狱口舌，争财夺利<br>';
            break;
        case '乙庚':
            output =
                output +
                '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '乙辛':
            output =
                output +
                '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br><span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '乙壬':
            output =
                output +
                '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;
        case '乙癸':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;

        case '丙甲':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '丙乙':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;
        case '丙丙':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '丙丁':
            output = output + jinruge;
            break;
        case '丙戊':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '丙己':
            output =
                output +
                '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
            break;
        case '丙庚':
            output =
                output +
                '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。火金相见，怪异血光，突发灾难<br>';
            break;
        case '丙辛':
            output =
                output +
                '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我<br>';
            break;
        case '丙壬':
            output =
                output +
                '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br><span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '丙癸':
            output =
                output +
                '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;

        case '丁甲':
            output =
                output +
                '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;
        case '丁乙':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '丁丙':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
            break;
        case '丁丁':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '丁戊':
            output =
                output +
                '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
            break;
        case '丁己':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '丁庚':
            output =
                output +
                '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。火金相见，怪异血光，突发灾难<br>';
            break;
        case '丁辛':
            output =
                output +
                '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。火金相见，怪异血光，突发灾难<br>';
            break;
        case '丁壬':
            output =
                output +
                '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '丁癸':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;

        case '戊甲':
            output =
                output +
                '<span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '戊乙':
            output =
                output +
                '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '戊丙':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '戊丁':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;
        case '戊戊':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '戊己':
            output =
                output +
                '<span style="color:#0079FE">进茹格：凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利</span><br>';
            break;
        case '戊庚':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '戊辛':
            output =
                output +
                '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
            break;
        case '戊壬':
            output =
                output +
                '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。土水相克，遗财患病，争竞家园<br>';
            break;
        case '戊癸':
            output =
                output +
                '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我<br>';
            break;

        case '己甲':
            output =
                output +
                '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '己乙':
            output =
                output +
                '<span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '己丙':
            output =
                output +
                '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;
        case '己丁':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '己戊':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
            break;
        case '己己':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '己庚':
            output =
                output +
                '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
            break;
        case '己辛':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '己壬':
            output =
                output +
                '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。土水相克，遗财患病，争竞家园<br>';
            break;
        case '己癸':
            output =
                output +
                '<span style="color:#0079FE">外乱格：/span>主事从外入，需防外人欺凌，外人主动来找我。土水相克，遗财患病，争竞家园<br>';
            break;

        case '庚甲':
            output =
                output +
                '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。金木相加，官事，口舌争斗<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
            break;
        case '庚乙':
            output =
                output +
                '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我。<br>';
            break;
        case '庚丙':
            output =
                output +
                '<span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '庚丁':
            output =
                output +
                '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '庚戊':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '庚己':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;
        case '庚庚':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '庚辛':
            output = output + jinruge;
            break;
        case '庚壬':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '庚癸':
            output =
                output +
                '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
            break;

        case '辛甲':
            output =
                output +
                '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。金木相加，官事，口舌争斗<br>';
            break;
        case '辛乙':
            output =
                output +
                '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。金木相加，官事，口舌争斗<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
            break;
        case '辛丙':
            output =
                output +
                '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '辛丁':
            output =
                output +
                '<span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '辛戊':
            output =
                output +
                '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
            break;
        case '辛己':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '辛庚':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
            break;
        case '辛辛':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '辛壬':
            output =
                output +
                '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
            break;
        case '辛癸':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;

        case '壬甲':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '壬乙':
            output =
                output +
                '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
            break;
        case '壬丙':
            output =
                output +
                '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。水火相乘，惊恐，妇女不安<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
            break;
        case '壬丁':
            output =
                output +
                '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我。<br>';
            break;
        case '壬戊':
            output =
                output +
                '<span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '壬己':
            output =
                output +
                '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
            break;
        case '壬庚':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '壬辛':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
            break;
        case '壬壬':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
        case '壬癸':
            output = output + jinruge;
            break;

        case '癸甲':
            output =
                output +
                '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
            break;
        case '癸乙':
            output =
                output +
                '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
            break;
        case '癸丙':
            output =
                output +
                '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。水火相乘，惊恐，妇女不安<br>';
            break;
        case '癸丁':
            output =
                output +
                '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。水火相乘，惊恐，妇女不安<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
            break;
        case '癸戊':
            output =
                output +
                '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '癸己':
            output =
                output +
                '<span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
            break;
        case '癸庚':
            output =
                output +
                '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
            break;
        case '癸辛':
            output =
                output +
                '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
            break;
        case '癸壬':
            output =
                output +
                '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
            break;
        case '癸癸':
            output = output + '<span style="color:#0079FE">伏吟格</span><br>';
            break;
    }
    return output;
}
function getFuGe(tiangan, gong) {
    const jiedang = '凡事必须聚伙成群而始能有成，不然则需要等待时机';
    const deli = '凡事必须得他人周济而始能有成，不然也需要等待时机';
    const shili = '凡事必须耗我心力，威服他人而始能有成，不然则有伤害于他人';
    const cuican = '凡事必须伏服于他人之下，卑躬折节而始能有成，不然则会受到他人迫害';
    const pojing = '主凡事必须辅佐他人，保护同伴而始能有成，不然则要破财伤身';
    if (tiangan == '甲' || tiangan == '乙') {
        switch (gong) {
            case '乾':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '兑':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '坎':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '离':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '震':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '巽':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '坤':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '艮':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '中':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
        }
    } else if (tiangan == '丙' || tiangan == '丁') {
        switch (gong) {
            case '乾':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '兑':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '坎':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '离':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '震':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '巽':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '坤':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '艮':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '中':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
        }
    } else if (tiangan == '戊' || tiangan == '己') {
        switch (gong) {
            case '乾':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '兑':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '坎':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '离':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '震':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '巽':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '坤':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '艮':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '中':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
        }
    } else if (tiangan == '庚' || tiangan == '辛') {
        switch (gong) {
            case '乾':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '兑':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '坎':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '离':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '震':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '巽':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '坤':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '艮':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '中':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
        }
    } else if (tiangan == '壬' || tiangan == '癸') {
        switch (gong) {
            case '乾':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '兑':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">得力格：</span>' +
                    deli
                );
            case '坎':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">结党格：</span>' +
                    jiedang
                );
            case '离':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">失利格：</span>' +
                    shili
                );
            case '震':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '巽':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">破精格：</span>' +
                    pojing
                );
            case '坤':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '艮':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
            case '中':
                return (
                    tiangan +
                    '在' +
                    gong +
                    '<br>' +
                    '<span style="color:#0079FE">摧残格：</span>' +
                    cuican
                );
        }
    }
}
function getZhangSheng(tiangan, gongwei) {
    const zhangsheng = '<span style="color:red">长生</span>';
    const muyu = '沐浴';
    const guandai = '冠带';
    const linguan = '<span style="color:red">临官</span>';
    const diwang = '<span style="color:red">帝旺</span>';
    const shuai = '衰';
    const bing = '病';
    const si = '死';
    const mu = '<span style="color:#0079FE">墓</span>';
    const jue = '绝';
    const tai = '胎';
    const yang = '养';

    let result = '';
    switch (tiangan) {
        case '甲':
            switch (gongwei) {
                case '乾':
                    result = '甲：' + yang + '，' + zhangsheng;
                    break;
                case '坎':
                    result = '甲：' + muyu;
                    break;
                case '艮':
                    result = '甲：' + guandai + '，' + linguan;
                    break;
                case '震':
                    result = '甲：' + diwang;
                    break;
                case '巽':
                    result = '甲：' + shuai + '，' + bing;
                    break;
                case '离':
                    result = '甲：' + si;
                    break;
                case '坤':
                    result = '甲：' + mu + '，' + jue;
                    break;
                case '兑':
                    result = '甲：' + tai;
                    break;
            }
            break;
        case '乙':
            switch (gongwei) {
                case '乾':
                    result = '乙：' + si + '，' + mu;
                    break;
                case '坎':
                    result = '乙：' + bing;
                    break;
                case '艮':
                    result = '乙：' + diwang + '，' + shuai;
                    break;
                case '震':
                    result = '乙：' + linguan;
                    break;
                case '巽':
                    result = '乙：' + muyu + '，' + guandai;
                    break;
                case '离':
                    result = '乙：' + zhangsheng;
                    break;
                case '坤':
                    result = '乙：' + tai + '，' + yang;
                    break;
                case '兑':
                    result = '乙：' + jue;
                    break;
            }
            break;
        case '丙':
            switch (gongwei) {
                case '乾':
                    result = '丙：' + mu + '，' + jue;
                    break;
                case '坎':
                    result = '丙：' + tai;
                    break;
                case '艮':
                    result = '丙：' + yang + '，' + zhangsheng;
                    break;
                case '震':
                    result = '丙：' + muyu;
                    break;
                case '巽':
                    result = '丙：' + guandai + '，' + linguan;
                    break;
                case '离':
                    result = '丙：' + diwang;
                    break;
                case '坤':
                    result = '丙：' + shuai + '，' + bing;
                    break;
                case '兑':
                    result = '丙：' + si;
                    break;
            }
            break;
        case '丁':
            switch (gongwei) {
                case '乾':
                    result = '丁：' + tai + '，' + yang;
                    break;
                case '坎':
                    result = '丁：' + jue;
                    break;
                case '艮':
                    result = '丁：' + si + '，' + mu;
                    break;
                case '震':
                    result = '丁：' + bing;
                    break;
                case '巽':
                    result = '丁：' + diwang + '，' + shuai;
                    break;
                case '离':
                    result = '丁：' + linguan;
                    break;
                case '坤':
                    result = '丁：' + muyu + '，' + guandai;
                    break;
                case '兑':
                    result = '丁：' + zhangsheng;
                    break;
            }
            break;
        case '戊':
            switch (gongwei) {
                case '乾':
                    result = '戊：' + mu + '，' + jue;
                    break;
                case '坎':
                    result = '戊：' + tai;
                    break;
                case '艮':
                    result = '戊：' + yang + '，' + zhangsheng;
                    break;
                case '震':
                    result = '戊：' + muyu;
                    break;
                case '巽':
                    result = '戊：' + guandai + '，' + linguan;
                    break;
                case '离':
                    result = '戊：' + diwang;
                    break;
                case '坤':
                    result = '戊：' + shuai + '，' + bing;
                    break;
                case '兑':
                    result = '戊：' + si;
                    break;
            }
            break;
        case '己':
            switch (gongwei) {
                case '乾':
                    result = '己：' + tai + '，' + yang;
                    break;
                case '坎':
                    result = '己：' + jue;
                    break;
                case '艮':
                    result = '己：' + si + '，' + mu;
                    break;
                case '震':
                    result = '己：' + bing;
                    break;
                case '巽':
                    result = '己：' + diwang + '，' + shuai;
                    break;
                case '离':
                    result = '己：' + linguan;
                    break;
                case '坤':
                    result = '己：' + muyu + '，' + guandai;
                    break;
                case '兑':
                    result = '己：' + zhangsheng;
                    break;
            }
            break;
        case '庚':
            switch (gongwei) {
                case '乾':
                    result = '庚：' + shuai + '，' + bing;
                    break;
                case '坎':
                    result = '庚：' + si;
                    break;
                case '艮':
                    result = '庚：' + mu + '，' + jue;
                    break;
                case '震':
                    result = '庚：' + tai;
                    break;
                case '巽':
                    result = '庚：' + yang + '，' + zhangsheng;
                    break;
                case '离':
                    result = '庚：' + muyu;
                    break;
                case '坤':
                    result = '庚：' + guandai + '，' + linguan;
                    break;
                case '兑':
                    result = '庚：' + diwang;
                    break;
            }
            break;
        case '辛':
            switch (gongwei) {
                case '乾':
                    result = '辛：' + muyu + '，' + guandai;
                    break;
                case '坎':
                    result = '辛：' + zhangsheng;
                    break;
                case '艮':
                    result = '辛：' + tai + '，' + yang;
                    break;
                case '震':
                    result = '辛：' + jue;
                    break;
                case '巽':
                    result = '辛：' + si + '，' + mu;
                    break;
                case '离':
                    result = '辛：' + bing;
                    break;
                case '坤':
                    result = '辛：' + diwang + '，' + shuai;
                    break;
                case '兑':
                    result = '辛：' + linguan;
                    break;
            }
            break;
        case '壬':
            switch (gongwei) {
                case '乾':
                    result = '壬：' + guandai + '，' + linguan;
                    break;
                case '坎':
                    result = '壬：' + diwang;
                    break;
                case '艮':
                    result = '壬：' + shuai + '，' + bing;
                    break;
                case '震':
                    result = '壬：' + si;
                    break;
                case '巽':
                    result = '壬：' + mu + '，' + jue;
                    break;
                case '离':
                    result = '壬：' + tai;
                    break;
                case '坤':
                    result = '壬：' + yang + '，' + zhangsheng;
                    break;
                case '兑':
                    result = '壬：' + muyu;
                    break;
            }
            break;
        case '癸':
            switch (gongwei) {
                case '乾':
                    result = '癸：' + diwang + '，' + shuai;
                    break;
                case '坎':
                    result = '癸：' + linguan;
                    break;
                case '艮':
                    result = '癸：' + muyu + '，' + guandai;
                    break;
                case '震':
                    result = '癸：' + zhangsheng;
                    break;
                case '巽':
                    result = '癸：' + tai + '，' + yang;
                    break;
                case '离':
                    result = '癸：' + jue;
                    break;
                case '坤':
                    result = '癸：' + si + '，' + mu;
                    break;
                case '兑':
                    result = '癸：' + bing;
                    break;
            }
            break;
    }
    return result + '<br>';
}
