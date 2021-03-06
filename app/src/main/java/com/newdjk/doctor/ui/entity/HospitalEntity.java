package com.newdjk.doctor.ui.entity;

import java.io.Serializable;
import java.util.List;

/**
 * Created by EDZ on 2018/10/10.
 */

public class HospitalEntity implements Serializable {


    @Override
    public String toString() {
        return "HospitalEntity{" +
                "Code=" + Code +
                ", Message='" + Message + '\'' +
                ", Data=" + Data +
                '}';
    }

    /**
     * Code : 0
     * Message :
     * Data : {"Total":6628,"ReturnData":[{"HospitalId":256,"HospitalName":"北京市回民医院","HospitalLevel":0,"AreaId":10102,"AreaName":"西城区","AreaPath":",0,1,101,10102,","Address":"西城区右安门内大街11号","Longitude":"116.370077","Dimension":"39.887993","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"北京市回民医院创建于1947年，原名\u201c中国回教协会普慈施医院\u201d ，是一所以现代医学为主，集医疗、预防、保健、康复、健康教育、社区服务为一体的二级甲等综合医院，是全国最大、北京唯一一家具有穆斯林特色的综合医院，是首都精神文明先进单位和首都民族团结进步先进单位。　　医院占地面积11760平方米，建筑面积25600平方米，床位设置300张。设内、外、妇产、骨伤、中医等九个病区,有装备一流、环境幽雅的\u201c综合病房\u201d为内外宾提供全程优质服务。日门诊可容纳2000人次, 设临床医技科室23个。　　医院中医科是北京市中医局批准的首批\u201c示范中医科\u201d之一。中医科有独立的病区28张床，5个专科门诊，有7名副主任医师以上专家和完整的人才梯队;有在牛街地区享誉盛名的回族老中医杨大奇和中医治疗脉管炎的专家;有开展中医治疗重症肌无力特色门诊，有针灸、推拿、中药、药浴、熏蒸等多项综合诊疗法。　　医院拥有现代化的高压氧及多个常规诊断治疗的西医专科专台，有CT机、1000MAX光机、CR型机、C型臂机、钼钯乳腺X光机、数字化胃肠机、眼科A、B超、曲率仪、视野机、全自动生化分析仪、血气分析仪、心导管、ICU、CCU监护系统等现代医疗诊断治疗设备。　　北京市回民医院作为中国与世界各国往来的窗口，经穆斯林国家开展学术交流并提供医疗服务，医院配有穆斯林营养师，设有\u201c割礼\u201d专台门诊、穆斯林沐浴、礼拜堂等设施，被卫生部指定为对外重点服务的医疗单位之一，是首都精神文明先进单位，是首都民族团结时步模范单位","Invalid":0,"CreateTime":"2018-10-06 14:55:12","UpdateTime":"2018-10-06 16:19:23"},{"HospitalId":512,"HospitalName":"广州市第一人民医院南沙医院","HospitalLevel":0,"AreaId":617,"AreaName":"广州","AreaPath":",0,6,617,","Address":"广州市南沙区丰泽东路105号","Longitude":"113.54051","Dimension":"22.793802","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"广州市南沙中心医院是广州市人民政府与南沙区人民政府为完善南沙区的医疗设施配置，加快南部广州新城建设而共同投资兴建的，于2008年7月15日开业，目前是南沙区内唯一一所三级综合性医院。医院原隶属广州市卫生局，由广州市第一人民医院经营管理，2014年3月经广州市机构编制委员会批准，更名为广州市第一人民医院南沙医院（挂广州市南沙中心医院牌子）。调整为广州市第一人民医院直接管理，仍为财政核补正处级事业单位。　　医院西临蕉门河，紧靠环市大道，北邻地铁4号线金洲站，东面群山环绕，依山近水，环境优美，空气清新，交通便利。医院总占地面积10.05万平方米，建筑工程分三期进行，现已完成的一期工程，建筑面积3万平方米，目前设置床位155张。二期工程于2016年3月交付使用，包括13层住院楼及5层医技楼，开设床位500张。二期后续工程包括13层外科综合住院楼、11层保健康复大楼、11层科教行政大楼、3层职工饭堂、肿瘤放疗中心及高压氧舱， 2014年11月开工建设工程基坑部分，预计完工后全院床位数达980张。　　医院现已开设内科、外科、妇科、产科、儿科、急诊科、危重医学科、麻醉科、中医科、康复科、眼科、耳鼻喉科、口腔科、皮肤科、医学影像科、医学检验科、临床药学科等17个专业科室。拥有员工515人，其中高级职称34名，博士导师2名，硕士导师2名，博士7名，硕士126名。目前医院配备价值近1.1亿元的先进医疗设备和精密仪器，其中包括3.0T磁共振成像系统（MRI）、数字减影血管造影系统（DSA）、64排螺旋CT、数字化X线摄影系统（DR）、高清胃肠镜（NBI）、全自动生化分析仪、全自动免疫分析仪、高端彩超、各类腔镜手术系统等，拥有世界先进水平的数字一体化手术室。　　医院自开业以来，开展了各类高难度手术，成功抢救无数的复杂疑难和危重症患者，业务量增长迅速。医院目前特色专科有：创伤外科、消化内科、皮肤科、儿科、中医科、影像科、检验科、体检中心等。医院秉持着\u201c仁心仁术方便为怀\u201d的市一院训，充分发扬\u201c创业、创新、服务、奉献\u201d的南沙中心医院精神，以真诚的服务、精湛的医术赢得了人民群众的认可。　　南沙区的战略定位是打造粤港澳全面合作示范区。广州市第一人民医院的战略定位是建设成为国内知名、省内一流的现代化医院。南沙中心医院在这两个战略定位的基础上提出自己的战略目标是：建设成为具有规模效应，功能完善，专科特色显著，拥有辐射港澳及珠三角地区影响力的品牌医院。","Invalid":0,"CreateTime":"2018-10-06 14:55:26","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":768,"HospitalName":"湛江市第二中医院","HospitalLevel":0,"AreaId":610,"AreaName":"湛江","AreaPath":",0,6,610,","Address":"湛江市解放西路14号","Longitude":"110.406645","Dimension":"21.198861","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"湛江市第二中医医院始建于1958年，目前已发展为一所中医特色浓厚、名医众多的集医疗、科研、教学、康复、保健、护老、社区服务、健康咨询为一体的三级甲等综合性中医院，是广州中医药大学非直属附属医院和省高等医药院校教学医院。　　医院占地面积2.5万平方米，建筑面积约4.5万平方米，其中医疗业务用房3.5万平方米，设有在编床位500张，开放床位700张。医院技术力量雄厚，科室设置齐全。现有职工600人，其中卫技人员472人，副高以上技术职称80多人，省名中医2人，市名中医6人，广州中医药大学教授13名，副教授67名，硕士研究生导师5人；拥有荷兰西门子CT机、飞利浦彩色多普勒B超、全自动生化分析仪、日产岛津及德国西门子500毫米X光机、蓝韵DR机、C臂X光机、日本奥林巴斯胃镜、体外震波碎石机、脑血管功能检测仪等一大批现代化医疗设备；设有急诊科、内科、普外科、骨伤科、肛肠科、针灸康复科、妇科、儿科、口腔科、皮肤科、结石科、老年病科、预防保健科等16个临床科室，14个职能部门，33个具有中医特色的专科门诊，其中骨伤科、呼吸内科、老年病科为省重点中医专科，康复科、妇科、心血管内科、针灸推拿科为省重点中医专科建设项目；腰腿痛专科、椎间盘关节病专科、结石专科和痔疮科等专科为市级重点中医专科。　　近年来，医院各项工作取得了长足的发展，医疗服务质量、技术水平、教学与科研水平不断提高，医院业务收入和各项业务指标不断增加；三个文明建设取得了上级领导的肯定和社会各界的认可，先后荣获\u201c广东省先进集体\u201d、\u201c广东省文明中医院\u201d、\u201c省、市行风建设先进单位\u201d、\u201c湛江市文明单位\u201d、\u201c广东省百家文明医院\u201d、\u201c广东省文明单位\u201d、\u201c广东省卫生系统创先争优先进集体\u201d等多项荣誉称号。","Invalid":0,"CreateTime":"2018-10-06 14:55:39","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1024,"HospitalName":"天等县人民医院","HospitalLevel":0,"AreaId":2602,"AreaName":"崇左","AreaPath":",0,26,2602,","Address":"天等县天等镇和平街4号","Longitude":"107.144543","Dimension":"23.087755","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"","Invalid":0,"CreateTime":"2018-10-06 14:55:53","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1280,"HospitalName":"宝应县中医院","HospitalLevel":0,"AreaId":707,"AreaName":"扬州","AreaPath":",0,7,707,","Address":"江苏省宝应县泰山西路4号","Longitude":"119.324081","Dimension":"33.248911","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"宝应县中医医院创建于一九八五年，现已发展成为全县中医医疗、教学和科研的中心。一九九七年八月，被国家中医药管理局命名为\u201c二级甲等\u201d中医医院，多次被评为扬州市文明单位、\u201c白求恩杯\u201d竞赛优胜单位，2006年被评为扬州市价格诚信单位。医院奉行团结、奉献、求实、创新的办院宗旨，树立崭新的发展理念，在硬件投入、专科特色、人才培养、优质服务、文化建设上下功夫，取得了令人瞩目的业绩。　　医院占地面积13456平方米，建筑面积达16000平方米。在职人员341人，卫生技术人员272人，中级职称145人，高级职称28人。李则藩、张长顺先后被江苏省卫生厅授予\u201c江苏省名中医\u201d称号。医院设有门急诊部、住院部（八个病区）、血液净化中心、健康体检中心、制剂中心。年门诊人次12万，实际开放床位300张，年出院人次6000余人。会员管理中心拥有会员近2万人，会员享有包括健康检查、定期回访、健康咨询、优惠就诊、绿色医疗通道等一整套温馨优质服务。制剂中心通过国家GPP验收，共有中药制剂30多个品种广泛运用于临床。    医院设有临床一级科室和专科专病科室达30多个。肝胆病专科、中风急救康复科、针推科、肛肠科为扬州市重点专科，医院发展的重点专科有肿瘤内科、心血管内科、糖尿病专科、骨伤科、中医妇科等。医院重视人才培养，全院所有医疗骨干均已接受三级以上医院进修深造。医院中医专家组定期举办各种主题的学术研讨会，并服务于临床。迄今有300多篇论文在省级以上专业期刊发表，主编《农村中医诊疗要略》由南大出版社出版发行，获县以上科技进步奖10多项。　　　　医院拥有日立磁共振（MRI）、螺旋CT、德国西门子DR、柯达CR、PACS系统、800MA数字胃肠、C型臂X光机、经颅多普勒（TCD）、GE彩超、德国进口全自动生化分析仪、全自动血流变仪、法国进口血球计数仪、化学发光仪、德国进口全自动血凝仪、尿沉渣分析仪、奥林巴斯电子胃镜、24小时动态心电图与动态血压、德国进口腹腔镜、血透机10台、热疗仪、一整套康复物理理疗（PT）与作业治疗（OT）等先进的现代化诊疗设备。病房楼设施先进，包括层流净化手术室、层流净化产房、中心吸引、中心供氧，病室内有冷热水供应系统、有线电视、空调及卫生洗浴间，每个病区还设有贵宾病房。医院大力开展信息化建设，已建成全院千兆级局域网，医院信息管理系统（HIS）涵盖临床医疗、住院管理、药品管理、财务收费等主要业务流程，所有病区均配备医生工作站、护士工作站。每个病区示教室均配备笔记本电脑和多媒体投影仪。","Invalid":0,"CreateTime":"2018-10-06 14:56:06","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1536,"HospitalName":"苍南县人民医院","HospitalLevel":0,"AreaId":504,"AreaName":"温州","AreaPath":",0,5,504,","Address":"浙江省温州市苍南县灵溪镇玉苍路195-243号","Longitude":"120.412452","Dimension":"27.510136","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"苍南县人民医院创建于1987年，是温州医科大学附属医院（温州医科大学附属苍南医院），上海交通大学医学院附属仁济医院苍南分院，三级乙等综合性医院，JCI国际认证医院，浙江大学医学院附属第一医院、第二医院协作医院，台湾彰化基督教医院友好医院，福建中医药大学、安徽医科大学教学医院，2012年连续三年成为中国县级医院综合竞争力百强医院，是浙江省文明医院、爱婴医院、绿色医院、平安医院。　　医院现有职工1260人，高级职称129人。 开放床位709张，设有23个临床科室，26个护理单元，10个辅助科室。2个省县级龙头学科，8个市重点学科及专科，3个县级重点专科。开展了甲状腺癌根治术、乳腺癌根治术、胃癌根治术、结直肠癌根治术、肝叶切除术、胰十二指肠切除术、低位直肠癌保肛手术、早期乳腺癌保乳手术、脑血肿清除术、复杂人工关节（髋、膝、肘等）置换术、经皮肾微造瘘输尿管镜钬激光碎石取石术及各种腔镜微创手术等。综合应用手术、化疗、生物治疗手段治疗各种恶性肿瘤。    医院拥有完备先进的医疗设备，有美国GE1.5T核磁共振、德国西门子64排螺旋CT、美国GE八排螺旋CT、日立生化免疫全自动流水线、飞利浦 IE ELITE超声、西门子 S3000超声、奥林巴斯内镜，价值1.3亿元。    医院为各医学院校教学医院及住院医师规范化培训国家后备基地，每年招收实习及住院医师近300余人；近十年，通过省市县级科研课题评审100余项，在省级以上专业杂志发表论文1000余篇。    多年来医院始终坚持\u201c一切为了病人的健康\u201d的宗旨，为广大人民群众提供了优质的医疗服务。2014年11月医院以高分通过JCI国际认证，成为国内第一家通过第五版JCI认证县级医院，其中\u201c患者唯一号、急救广播系统、休克早期预警系统、入院患者八大评估、临床监测指标\u201d等都是在国内同等级医院首创，确保患者得到更好的照护。    目前设置床位1500张，占地220亩，总建设面积21.6万平方米，投资10.7个亿的新院址已处于内装修阶段，预计2017年初投入使用，届时一座现代化的三级综合性医院将以最优质的医疗服务、最精湛的医疗技术、最先进的管理理念、最优美的医疗环境服务于浙南闽东北百万群众。","Invalid":0,"CreateTime":"2018-10-06 14:56:19","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1792,"HospitalName":"长丰县人民医院","HospitalLevel":0,"AreaId":1614,"AreaName":"合肥","AreaPath":",0,16,1614,","Address":"长丰县水湖镇长寿路91号","Longitude":"117.167954","Dimension":"32.48749","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"长丰县人民医院始建于1965年，是长丰地区唯一一所集医教研和预防保健于一体的二级综合性医院，是城镇职工医保和城乡居民合作医疗定点医院。　　1997年通过国家\u201c二级\u201d医院和国家爱婴医院评审，先后荣获\u201c市卫生先进单位\u201d、\u201c市人才工作先进单位\u201d、\u201c县抗非典先进单位\u201d、\u201c县文明单位\u201d等表彰。2013年，我院骨科申报并被列入第四周期合肥市医学重点学科建设计划。　　我院在职职工400余人，其中中高级职称103人，初级职称267人。医院开设内科、外科、妇科、儿科、脑外科、骨科、麻醉科、五官科、眼科、急诊科、口腔科、中医科、康复科、皮肤科等21个科室，有透析科、ICU、骨科等特色科室。　　2012年底安医大二附院开始托管我院，作为安医二附院的分院，县医院和三甲医院同频共振、等高对接，共享高素质的专家队伍、高水平的医疗设施。通过对口支援，二附院长期派驻支援骨干来院坐诊，内镜中心、超声诊断等科室每周均有知名专家固定坐诊，让长丰县的百姓足不出县，即可享受省级医院的诊疗服务；院内一百多位具有高、中级职称的专业人才牵头组建高素质团队，不断取得新突破，诊疗水平日益提升。　　为改善患者就医环境，2009年我院开工建设新住院综合楼，目前新住院综合楼已经完工，并于2015年10月底正式完成了搬迁工作。综合楼设计床位450张，目前的开放床位为280张。综合楼层高17层，地下负一层，地上16层，增设康复科、肿瘤科、感染科，并开展磁共振检查项目。　　新住院综合楼引进多台进口先进设备，包括飞利浦磁共振成像系统，数字化医用X射线摄影系统，通用及GE的移动式C形臂X射线机，医用诊断X射线透视摄影系统以及飞利浦彩色超声诊断系统。全新的手术室设备先进，可同时进行多台、多类别手术；先进的磁共振成像系统、螺旋CT、数字化X射线摄影系统、彩色超声诊断系统等，为精准治疗提供保障。　　医院将努力成为一所功能齐全、设施完善、环境一流、服务一流的现代化医院，也将为全县广大人民群众提供更好的医疗服务。","Invalid":0,"CreateTime":"2018-10-06 14:56:34","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":2048,"HospitalName":"赣州市第五人民医院","HospitalLevel":0,"AreaId":2107,"AreaName":"赣州","AreaPath":",0,21,2107,","Address":"江西省赣州市文明大道31号(南院) ；江西省赣州市水西镇赤珠105国道旁(北院)","Longitude":"114.956246","Dimension":"25.852298","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"赣州市第五人民医院是一所医教研为一体的副县级三级公立医院，同时也是赣州市肝病医院、赣州市肺科医院、赣州市传染病医院、赣南医学院非直属附属医院，是以肝病、肺病、职业病、传染病治疗为特色的品牌专科医院，是我市首批医疗保险、新型农村合作医疗定点医院，也是全国百姓放心示范医院。　　医院始建于1955年，经过六十年的建设与发展，现已具备现代品牌专科医院的规模。医院分为南院和北院，是一座环境园林化、设施宾馆化的现代化医院，南院位于市文明大道31号；北院位于章贡区水西镇赤珠105国道旁，占地138亩。　　医院现有病床350张，职工400余人，高级职称28名，中级职称136名，拥有赣州市肝病、肺病重点专科及PCR、艾滋病初筛、耐药基因检测等重点专科实验室，设有赣州市肝病研究所和赣州市呼吸病防治研究所，是中国医院协会感染病医院管理分会会员单位、江西省传染病学专业委员会委员单位、赣州市医学会感染病学专业委员会主任委员单位，同时已经与以肝病学科知名的中山大学第三附属医院和以肺病学科知名的广州呼吸病研究所等国内知名医院建立长期协作关系，并成为了北京佑安医院的联盟医院，是我市首批医疗保险、新型农村合作医疗定点医院。建院60年来，曾多次荣获国家、省、市级科研成果奖，并获得\u201c全国卫生防疫防治工作先进单位\u201d、\u201c防治非典先进集体\u201d、\u201c群众满意医院\u201d等殊荣。2014年8月，我院被中国医院协会评为\u201c全国百姓放心示范医院\u201d，成为我市唯一获此国家级殊荣的专科医院。　　我院以打造品牌专科、特色专科为抓手，着力推进肝病科、结核科、呼吸科、感染科、胸外科、肝胆外科、创伤外科、儿科、妇产科、介入科等重点学科建设，同时还开设有急诊科、口腔科、中医科、五官科、哮喘科等临床科室，在赣粤闽湘区域具有一定的核心竞争力。　　医院为进一步提高医疗技术水平和提升医疗服务能力，大力实施品牌专科战略，积极主动瞄准国内外医学前沿，坚持\u201c科技兴院、人才强院\u201d，积极开展新技术、新项目、新疗法。始终保持在肝病和肺病学科诊疗上的新优势，先后开展新技术40多项，如开展了人工肝支持系统治疗重症肝炎、无痛电子气管镜检查、肺部肿瘤微波消融、基因芯片、持续性血液净化、超声刀治疗肝肿瘤技术、大容量全费灌洗术治疗尘肺病、复治结核病介入治疗、双侧三肺叶切除术、肺大泡切除术、职业中毒治疗、肝纤维化系列指标的检测、肿瘤标记物检测及甲、乙、丙、丁等各型肝炎病毒学检测、PCR检测病毒DNA复制、快速结核菌培养、药敏检测、结核抗体检测、甲乙型流感检测、过敏源检测及脱敏治疗、艾治病检测等一批新技术。其中，我院应用人工肝支持系统治疗重症肝炎，大大降低了重症肝炎的病死率，取得了满意的临床效果，在全市率先引进的\u201c大容量全肺灌洗术治疗尘肺病\u201d新项目，填补了我市尘肺病治疗的空白，纤维支气管镜介入治疗术、球囊扩张术治疗耐多药肺结核、空洞型肺结核均获得成功并积累了丰富的临床经验。　　随着医学科学的迅猛发展，医院积极引进先进的医疗设备，现拥有美国GE 1.5核磁MRI、飞利浦16排和双排CT机、分子探针生物芯片基因检测设备、西门子移动DR、柯达固定DR、费森尤斯血滤机、数字化摄片系统\u2014飞利浦DSA（数字化血管减影系统）、日本旭化成全自动人工肝支持系统、高强度超声肿瘤治疗系统、全自动电脑视野计、美国GE LOGIQ E9彩色超声系统、日本奥林巴斯260电子胃镜、电子支气管镜、法国梅里埃Bactalert3D微生物快速检测和药敏系统、日本东芝全自动生化分析仪、美国ABI7500型荧光定量PCR仪、耶格肺功能仪、多功能型肝病热疗机以及重症监护所需的各种先进医疗设备，为开展医疗及科研工作提供了保证，医院各种医学检查及检测项目，无论在准确性和精确度上都处于省内领先水平。　　近年来，医院提出了围绕应对突发公共卫生事件医疗救治为核心，实施\u201c一个目标、二个重点、三个提高、四个加强、五型医院创建\u201d发展战略，即打造成为赣粤闽湘区域品牌专科大医院为目标，以肝病、肺病学科建设为重点，大力提高科学管理水平、医疗技术水平和医疗服务水平，加强品牌学科建设、人才队伍建设、内涵建设和医院文化建设，创建学习型、人文型、创新型、生态型、质量型医院，秉承厚德精医、仁爱奉献的精神，坚持\u201c以病人为中心、以质量为核心\u201d的宗旨，竭诚为广大患者提供优质、便捷、高效的医疗服务。","Invalid":0,"CreateTime":"2018-10-06 15:17:33","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":2304,"HospitalName":"泉州第三医院","HospitalLevel":0,"AreaId":1703,"AreaName":"泉州","AreaPath":",0,17,1703,","Address":"福建省泉州市台商投资区洛阳镇白沙二村","Longitude":"118.70641","Dimension":"24.913554","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"泉州第三医院是一所集医疗、预防、科研、教学于一体的\u201c三级乙等\u201d精神卫生专科医院。医院现有各类专业技术人员188名，其中正、副主任医师11人，中级技术人员46人，是福建省规模较大，技术力量较为雄厚，设备较为齐全的精神卫生机构。　　泉州第三医院目前设有五个病区和医学心理科（心理测验、心理咨询、心理治疗、医学心理热线电话：961681333）、司法精神医学鉴定科、神经内科、儿童少年心理卫生门诊。为满足广大群众就医的需要，门诊部开设有特需专家、专科门诊，为失眠症、癔症、神经症（恐怖症、焦虑症、强迫症、疑病症）、精神分裂症、抑郁症、人格障碍、性心理障碍、精神发育迟滞、少年期心理发育障碍、儿童多动症、孤独症、品行障碍和情绪障碍、老年痴呆、药、酒依赖等疾病患者提供有效的治疗和优质的服务。为适应医学模式转变，医院除了为精神疾病患者提供医疗服务外，还广泛开展精神卫生宣传，并定期邀请知名精神医学专家于每个月最后一个星期六上午在医院电教室举办\u201c精神康复与家庭护理\u201d系列讲座，欢迎社会各界人士光临垂询。","Invalid":0,"CreateTime":"2018-10-06 15:18:04","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":2560,"HospitalName":"青州市皮肤病防治站","HospitalLevel":0,"AreaId":1507,"AreaName":"潍坊","AreaPath":",0,15,1507,","Address":"潍坊市青州市云门山南路2838号","Longitude":"118.48145","Dimension":"36.680288","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"青州市皮肤病防治站暨市皮肤病医院，成立于1955年，是市唯一公立皮肤病、性病专业防治机构。　　拥有目前世界上最先进的过敏性疾病诊治设备摩拉生物治疗仪，美国科医人ACUPULSE微雕点阵王、红蓝光治疗仪、脉冲激光、希格玛全仓紫外线治疗仪、中药蒸汽浴疗、中药洗浴水疗等先进设备，并以开展激光美容，果酸换肤等美容项目。专业治疗过敏性疾病，皮炎，湿疹，带状疱疹，病毒疣，斑秃，痤疮，手足癣，体癣、白癜风、银屑病等多种皮肤病以及淋病、梅毒、生殖器疱疹、尖锐湿疣、非淋菌性尿道炎、HIV等性传播疾病。","Invalid":0,"CreateTime":"2018-10-06 15:19:10","UpdateTime":"2018-10-06 16:30:59"}]}
     */

    private int Code;
    private String Message;
    private DataBean Data;

    public int getCode() {
        return Code;
    }

    public void setCode(int Code) {
        this.Code = Code;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String Message) {
        this.Message = Message;
    }

    public DataBean getData() {
        return Data;
    }

    public void setData(DataBean Data) {
        this.Data = Data;
    }

    public static class DataBean implements Serializable {
        /**
         * Total : 6628
         * ReturnData : [{"HospitalId":256,"HospitalName":"北京市回民医院","HospitalLevel":0,"AreaId":10102,"AreaName":"西城区","AreaPath":",0,1,101,10102,","Address":"西城区右安门内大街11号","Longitude":"116.370077","Dimension":"39.887993","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"北京市回民医院创建于1947年，原名\u201c中国回教协会普慈施医院\u201d ，是一所以现代医学为主，集医疗、预防、保健、康复、健康教育、社区服务为一体的二级甲等综合医院，是全国最大、北京唯一一家具有穆斯林特色的综合医院，是首都精神文明先进单位和首都民族团结进步先进单位。　　医院占地面积11760平方米，建筑面积25600平方米，床位设置300张。设内、外、妇产、骨伤、中医等九个病区,有装备一流、环境幽雅的\u201c综合病房\u201d为内外宾提供全程优质服务。日门诊可容纳2000人次, 设临床医技科室23个。　　医院中医科是北京市中医局批准的首批\u201c示范中医科\u201d之一。中医科有独立的病区28张床，5个专科门诊，有7名副主任医师以上专家和完整的人才梯队;有在牛街地区享誉盛名的回族老中医杨大奇和中医治疗脉管炎的专家;有开展中医治疗重症肌无力特色门诊，有针灸、推拿、中药、药浴、熏蒸等多项综合诊疗法。　　医院拥有现代化的高压氧及多个常规诊断治疗的西医专科专台，有CT机、1000MAX光机、CR型机、C型臂机、钼钯乳腺X光机、数字化胃肠机、眼科A、B超、曲率仪、视野机、全自动生化分析仪、血气分析仪、心导管、ICU、CCU监护系统等现代医疗诊断治疗设备。　　北京市回民医院作为中国与世界各国往来的窗口，经穆斯林国家开展学术交流并提供医疗服务，医院配有穆斯林营养师，设有\u201c割礼\u201d专台门诊、穆斯林沐浴、礼拜堂等设施，被卫生部指定为对外重点服务的医疗单位之一，是首都精神文明先进单位，是首都民族团结时步模范单位","Invalid":0,"CreateTime":"2018-10-06 14:55:12","UpdateTime":"2018-10-06 16:19:23"},{"HospitalId":512,"HospitalName":"广州市第一人民医院南沙医院","HospitalLevel":0,"AreaId":617,"AreaName":"广州","AreaPath":",0,6,617,","Address":"广州市南沙区丰泽东路105号","Longitude":"113.54051","Dimension":"22.793802","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"广州市南沙中心医院是广州市人民政府与南沙区人民政府为完善南沙区的医疗设施配置，加快南部广州新城建设而共同投资兴建的，于2008年7月15日开业，目前是南沙区内唯一一所三级综合性医院。医院原隶属广州市卫生局，由广州市第一人民医院经营管理，2014年3月经广州市机构编制委员会批准，更名为广州市第一人民医院南沙医院（挂广州市南沙中心医院牌子）。调整为广州市第一人民医院直接管理，仍为财政核补正处级事业单位。　　医院西临蕉门河，紧靠环市大道，北邻地铁4号线金洲站，东面群山环绕，依山近水，环境优美，空气清新，交通便利。医院总占地面积10.05万平方米，建筑工程分三期进行，现已完成的一期工程，建筑面积3万平方米，目前设置床位155张。二期工程于2016年3月交付使用，包括13层住院楼及5层医技楼，开设床位500张。二期后续工程包括13层外科综合住院楼、11层保健康复大楼、11层科教行政大楼、3层职工饭堂、肿瘤放疗中心及高压氧舱， 2014年11月开工建设工程基坑部分，预计完工后全院床位数达980张。　　医院现已开设内科、外科、妇科、产科、儿科、急诊科、危重医学科、麻醉科、中医科、康复科、眼科、耳鼻喉科、口腔科、皮肤科、医学影像科、医学检验科、临床药学科等17个专业科室。拥有员工515人，其中高级职称34名，博士导师2名，硕士导师2名，博士7名，硕士126名。目前医院配备价值近1.1亿元的先进医疗设备和精密仪器，其中包括3.0T磁共振成像系统（MRI）、数字减影血管造影系统（DSA）、64排螺旋CT、数字化X线摄影系统（DR）、高清胃肠镜（NBI）、全自动生化分析仪、全自动免疫分析仪、高端彩超、各类腔镜手术系统等，拥有世界先进水平的数字一体化手术室。　　医院自开业以来，开展了各类高难度手术，成功抢救无数的复杂疑难和危重症患者，业务量增长迅速。医院目前特色专科有：创伤外科、消化内科、皮肤科、儿科、中医科、影像科、检验科、体检中心等。医院秉持着\u201c仁心仁术方便为怀\u201d的市一院训，充分发扬\u201c创业、创新、服务、奉献\u201d的南沙中心医院精神，以真诚的服务、精湛的医术赢得了人民群众的认可。　　南沙区的战略定位是打造粤港澳全面合作示范区。广州市第一人民医院的战略定位是建设成为国内知名、省内一流的现代化医院。南沙中心医院在这两个战略定位的基础上提出自己的战略目标是：建设成为具有规模效应，功能完善，专科特色显著，拥有辐射港澳及珠三角地区影响力的品牌医院。","Invalid":0,"CreateTime":"2018-10-06 14:55:26","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":768,"HospitalName":"湛江市第二中医院","HospitalLevel":0,"AreaId":610,"AreaName":"湛江","AreaPath":",0,6,610,","Address":"湛江市解放西路14号","Longitude":"110.406645","Dimension":"21.198861","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"湛江市第二中医医院始建于1958年，目前已发展为一所中医特色浓厚、名医众多的集医疗、科研、教学、康复、保健、护老、社区服务、健康咨询为一体的三级甲等综合性中医院，是广州中医药大学非直属附属医院和省高等医药院校教学医院。　　医院占地面积2.5万平方米，建筑面积约4.5万平方米，其中医疗业务用房3.5万平方米，设有在编床位500张，开放床位700张。医院技术力量雄厚，科室设置齐全。现有职工600人，其中卫技人员472人，副高以上技术职称80多人，省名中医2人，市名中医6人，广州中医药大学教授13名，副教授67名，硕士研究生导师5人；拥有荷兰西门子CT机、飞利浦彩色多普勒B超、全自动生化分析仪、日产岛津及德国西门子500毫米X光机、蓝韵DR机、C臂X光机、日本奥林巴斯胃镜、体外震波碎石机、脑血管功能检测仪等一大批现代化医疗设备；设有急诊科、内科、普外科、骨伤科、肛肠科、针灸康复科、妇科、儿科、口腔科、皮肤科、结石科、老年病科、预防保健科等16个临床科室，14个职能部门，33个具有中医特色的专科门诊，其中骨伤科、呼吸内科、老年病科为省重点中医专科，康复科、妇科、心血管内科、针灸推拿科为省重点中医专科建设项目；腰腿痛专科、椎间盘关节病专科、结石专科和痔疮科等专科为市级重点中医专科。　　近年来，医院各项工作取得了长足的发展，医疗服务质量、技术水平、教学与科研水平不断提高，医院业务收入和各项业务指标不断增加；三个文明建设取得了上级领导的肯定和社会各界的认可，先后荣获\u201c广东省先进集体\u201d、\u201c广东省文明中医院\u201d、\u201c省、市行风建设先进单位\u201d、\u201c湛江市文明单位\u201d、\u201c广东省百家文明医院\u201d、\u201c广东省文明单位\u201d、\u201c广东省卫生系统创先争优先进集体\u201d等多项荣誉称号。","Invalid":0,"CreateTime":"2018-10-06 14:55:39","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1024,"HospitalName":"天等县人民医院","HospitalLevel":0,"AreaId":2602,"AreaName":"崇左","AreaPath":",0,26,2602,","Address":"天等县天等镇和平街4号","Longitude":"107.144543","Dimension":"23.087755","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"","Invalid":0,"CreateTime":"2018-10-06 14:55:53","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1280,"HospitalName":"宝应县中医院","HospitalLevel":0,"AreaId":707,"AreaName":"扬州","AreaPath":",0,7,707,","Address":"江苏省宝应县泰山西路4号","Longitude":"119.324081","Dimension":"33.248911","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"宝应县中医医院创建于一九八五年，现已发展成为全县中医医疗、教学和科研的中心。一九九七年八月，被国家中医药管理局命名为\u201c二级甲等\u201d中医医院，多次被评为扬州市文明单位、\u201c白求恩杯\u201d竞赛优胜单位，2006年被评为扬州市价格诚信单位。医院奉行团结、奉献、求实、创新的办院宗旨，树立崭新的发展理念，在硬件投入、专科特色、人才培养、优质服务、文化建设上下功夫，取得了令人瞩目的业绩。　　医院占地面积13456平方米，建筑面积达16000平方米。在职人员341人，卫生技术人员272人，中级职称145人，高级职称28人。李则藩、张长顺先后被江苏省卫生厅授予\u201c江苏省名中医\u201d称号。医院设有门急诊部、住院部（八个病区）、血液净化中心、健康体检中心、制剂中心。年门诊人次12万，实际开放床位300张，年出院人次6000余人。会员管理中心拥有会员近2万人，会员享有包括健康检查、定期回访、健康咨询、优惠就诊、绿色医疗通道等一整套温馨优质服务。制剂中心通过国家GPP验收，共有中药制剂30多个品种广泛运用于临床。    医院设有临床一级科室和专科专病科室达30多个。肝胆病专科、中风急救康复科、针推科、肛肠科为扬州市重点专科，医院发展的重点专科有肿瘤内科、心血管内科、糖尿病专科、骨伤科、中医妇科等。医院重视人才培养，全院所有医疗骨干均已接受三级以上医院进修深造。医院中医专家组定期举办各种主题的学术研讨会，并服务于临床。迄今有300多篇论文在省级以上专业期刊发表，主编《农村中医诊疗要略》由南大出版社出版发行，获县以上科技进步奖10多项。　　　　医院拥有日立磁共振（MRI）、螺旋CT、德国西门子DR、柯达CR、PACS系统、800MA数字胃肠、C型臂X光机、经颅多普勒（TCD）、GE彩超、德国进口全自动生化分析仪、全自动血流变仪、法国进口血球计数仪、化学发光仪、德国进口全自动血凝仪、尿沉渣分析仪、奥林巴斯电子胃镜、24小时动态心电图与动态血压、德国进口腹腔镜、血透机10台、热疗仪、一整套康复物理理疗（PT）与作业治疗（OT）等先进的现代化诊疗设备。病房楼设施先进，包括层流净化手术室、层流净化产房、中心吸引、中心供氧，病室内有冷热水供应系统、有线电视、空调及卫生洗浴间，每个病区还设有贵宾病房。医院大力开展信息化建设，已建成全院千兆级局域网，医院信息管理系统（HIS）涵盖临床医疗、住院管理、药品管理、财务收费等主要业务流程，所有病区均配备医生工作站、护士工作站。每个病区示教室均配备笔记本电脑和多媒体投影仪。","Invalid":0,"CreateTime":"2018-10-06 14:56:06","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1536,"HospitalName":"苍南县人民医院","HospitalLevel":0,"AreaId":504,"AreaName":"温州","AreaPath":",0,5,504,","Address":"浙江省温州市苍南县灵溪镇玉苍路195-243号","Longitude":"120.412452","Dimension":"27.510136","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"苍南县人民医院创建于1987年，是温州医科大学附属医院（温州医科大学附属苍南医院），上海交通大学医学院附属仁济医院苍南分院，三级乙等综合性医院，JCI国际认证医院，浙江大学医学院附属第一医院、第二医院协作医院，台湾彰化基督教医院友好医院，福建中医药大学、安徽医科大学教学医院，2012年连续三年成为中国县级医院综合竞争力百强医院，是浙江省文明医院、爱婴医院、绿色医院、平安医院。　　医院现有职工1260人，高级职称129人。 开放床位709张，设有23个临床科室，26个护理单元，10个辅助科室。2个省县级龙头学科，8个市重点学科及专科，3个县级重点专科。开展了甲状腺癌根治术、乳腺癌根治术、胃癌根治术、结直肠癌根治术、肝叶切除术、胰十二指肠切除术、低位直肠癌保肛手术、早期乳腺癌保乳手术、脑血肿清除术、复杂人工关节（髋、膝、肘等）置换术、经皮肾微造瘘输尿管镜钬激光碎石取石术及各种腔镜微创手术等。综合应用手术、化疗、生物治疗手段治疗各种恶性肿瘤。    医院拥有完备先进的医疗设备，有美国GE1.5T核磁共振、德国西门子64排螺旋CT、美国GE八排螺旋CT、日立生化免疫全自动流水线、飞利浦 IE ELITE超声、西门子 S3000超声、奥林巴斯内镜，价值1.3亿元。    医院为各医学院校教学医院及住院医师规范化培训国家后备基地，每年招收实习及住院医师近300余人；近十年，通过省市县级科研课题评审100余项，在省级以上专业杂志发表论文1000余篇。    多年来医院始终坚持\u201c一切为了病人的健康\u201d的宗旨，为广大人民群众提供了优质的医疗服务。2014年11月医院以高分通过JCI国际认证，成为国内第一家通过第五版JCI认证县级医院，其中\u201c患者唯一号、急救广播系统、休克早期预警系统、入院患者八大评估、临床监测指标\u201d等都是在国内同等级医院首创，确保患者得到更好的照护。    目前设置床位1500张，占地220亩，总建设面积21.6万平方米，投资10.7个亿的新院址已处于内装修阶段，预计2017年初投入使用，届时一座现代化的三级综合性医院将以最优质的医疗服务、最精湛的医疗技术、最先进的管理理念、最优美的医疗环境服务于浙南闽东北百万群众。","Invalid":0,"CreateTime":"2018-10-06 14:56:19","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":1792,"HospitalName":"长丰县人民医院","HospitalLevel":0,"AreaId":1614,"AreaName":"合肥","AreaPath":",0,16,1614,","Address":"长丰县水湖镇长寿路91号","Longitude":"117.167954","Dimension":"32.48749","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"长丰县人民医院始建于1965年，是长丰地区唯一一所集医教研和预防保健于一体的二级综合性医院，是城镇职工医保和城乡居民合作医疗定点医院。　　1997年通过国家\u201c二级\u201d医院和国家爱婴医院评审，先后荣获\u201c市卫生先进单位\u201d、\u201c市人才工作先进单位\u201d、\u201c县抗非典先进单位\u201d、\u201c县文明单位\u201d等表彰。2013年，我院骨科申报并被列入第四周期合肥市医学重点学科建设计划。　　我院在职职工400余人，其中中高级职称103人，初级职称267人。医院开设内科、外科、妇科、儿科、脑外科、骨科、麻醉科、五官科、眼科、急诊科、口腔科、中医科、康复科、皮肤科等21个科室，有透析科、ICU、骨科等特色科室。　　2012年底安医大二附院开始托管我院，作为安医二附院的分院，县医院和三甲医院同频共振、等高对接，共享高素质的专家队伍、高水平的医疗设施。通过对口支援，二附院长期派驻支援骨干来院坐诊，内镜中心、超声诊断等科室每周均有知名专家固定坐诊，让长丰县的百姓足不出县，即可享受省级医院的诊疗服务；院内一百多位具有高、中级职称的专业人才牵头组建高素质团队，不断取得新突破，诊疗水平日益提升。　　为改善患者就医环境，2009年我院开工建设新住院综合楼，目前新住院综合楼已经完工，并于2015年10月底正式完成了搬迁工作。综合楼设计床位450张，目前的开放床位为280张。综合楼层高17层，地下负一层，地上16层，增设康复科、肿瘤科、感染科，并开展磁共振检查项目。　　新住院综合楼引进多台进口先进设备，包括飞利浦磁共振成像系统，数字化医用X射线摄影系统，通用及GE的移动式C形臂X射线机，医用诊断X射线透视摄影系统以及飞利浦彩色超声诊断系统。全新的手术室设备先进，可同时进行多台、多类别手术；先进的磁共振成像系统、螺旋CT、数字化X射线摄影系统、彩色超声诊断系统等，为精准治疗提供保障。　　医院将努力成为一所功能齐全、设施完善、环境一流、服务一流的现代化医院，也将为全县广大人民群众提供更好的医疗服务。","Invalid":0,"CreateTime":"2018-10-06 14:56:34","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":2048,"HospitalName":"赣州市第五人民医院","HospitalLevel":0,"AreaId":2107,"AreaName":"赣州","AreaPath":",0,21,2107,","Address":"江西省赣州市文明大道31号(南院) ；江西省赣州市水西镇赤珠105国道旁(北院)","Longitude":"114.956246","Dimension":"25.852298","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"赣州市第五人民医院是一所医教研为一体的副县级三级公立医院，同时也是赣州市肝病医院、赣州市肺科医院、赣州市传染病医院、赣南医学院非直属附属医院，是以肝病、肺病、职业病、传染病治疗为特色的品牌专科医院，是我市首批医疗保险、新型农村合作医疗定点医院，也是全国百姓放心示范医院。　　医院始建于1955年，经过六十年的建设与发展，现已具备现代品牌专科医院的规模。医院分为南院和北院，是一座环境园林化、设施宾馆化的现代化医院，南院位于市文明大道31号；北院位于章贡区水西镇赤珠105国道旁，占地138亩。　　医院现有病床350张，职工400余人，高级职称28名，中级职称136名，拥有赣州市肝病、肺病重点专科及PCR、艾滋病初筛、耐药基因检测等重点专科实验室，设有赣州市肝病研究所和赣州市呼吸病防治研究所，是中国医院协会感染病医院管理分会会员单位、江西省传染病学专业委员会委员单位、赣州市医学会感染病学专业委员会主任委员单位，同时已经与以肝病学科知名的中山大学第三附属医院和以肺病学科知名的广州呼吸病研究所等国内知名医院建立长期协作关系，并成为了北京佑安医院的联盟医院，是我市首批医疗保险、新型农村合作医疗定点医院。建院60年来，曾多次荣获国家、省、市级科研成果奖，并获得\u201c全国卫生防疫防治工作先进单位\u201d、\u201c防治非典先进集体\u201d、\u201c群众满意医院\u201d等殊荣。2014年8月，我院被中国医院协会评为\u201c全国百姓放心示范医院\u201d，成为我市唯一获此国家级殊荣的专科医院。　　我院以打造品牌专科、特色专科为抓手，着力推进肝病科、结核科、呼吸科、感染科、胸外科、肝胆外科、创伤外科、儿科、妇产科、介入科等重点学科建设，同时还开设有急诊科、口腔科、中医科、五官科、哮喘科等临床科室，在赣粤闽湘区域具有一定的核心竞争力。　　医院为进一步提高医疗技术水平和提升医疗服务能力，大力实施品牌专科战略，积极主动瞄准国内外医学前沿，坚持\u201c科技兴院、人才强院\u201d，积极开展新技术、新项目、新疗法。始终保持在肝病和肺病学科诊疗上的新优势，先后开展新技术40多项，如开展了人工肝支持系统治疗重症肝炎、无痛电子气管镜检查、肺部肿瘤微波消融、基因芯片、持续性血液净化、超声刀治疗肝肿瘤技术、大容量全费灌洗术治疗尘肺病、复治结核病介入治疗、双侧三肺叶切除术、肺大泡切除术、职业中毒治疗、肝纤维化系列指标的检测、肿瘤标记物检测及甲、乙、丙、丁等各型肝炎病毒学检测、PCR检测病毒DNA复制、快速结核菌培养、药敏检测、结核抗体检测、甲乙型流感检测、过敏源检测及脱敏治疗、艾治病检测等一批新技术。其中，我院应用人工肝支持系统治疗重症肝炎，大大降低了重症肝炎的病死率，取得了满意的临床效果，在全市率先引进的\u201c大容量全肺灌洗术治疗尘肺病\u201d新项目，填补了我市尘肺病治疗的空白，纤维支气管镜介入治疗术、球囊扩张术治疗耐多药肺结核、空洞型肺结核均获得成功并积累了丰富的临床经验。　　随着医学科学的迅猛发展，医院积极引进先进的医疗设备，现拥有美国GE 1.5核磁MRI、飞利浦16排和双排CT机、分子探针生物芯片基因检测设备、西门子移动DR、柯达固定DR、费森尤斯血滤机、数字化摄片系统\u2014飞利浦DSA（数字化血管减影系统）、日本旭化成全自动人工肝支持系统、高强度超声肿瘤治疗系统、全自动电脑视野计、美国GE LOGIQ E9彩色超声系统、日本奥林巴斯260电子胃镜、电子支气管镜、法国梅里埃Bactalert3D微生物快速检测和药敏系统、日本东芝全自动生化分析仪、美国ABI7500型荧光定量PCR仪、耶格肺功能仪、多功能型肝病热疗机以及重症监护所需的各种先进医疗设备，为开展医疗及科研工作提供了保证，医院各种医学检查及检测项目，无论在准确性和精确度上都处于省内领先水平。　　近年来，医院提出了围绕应对突发公共卫生事件医疗救治为核心，实施\u201c一个目标、二个重点、三个提高、四个加强、五型医院创建\u201d发展战略，即打造成为赣粤闽湘区域品牌专科大医院为目标，以肝病、肺病学科建设为重点，大力提高科学管理水平、医疗技术水平和医疗服务水平，加强品牌学科建设、人才队伍建设、内涵建设和医院文化建设，创建学习型、人文型、创新型、生态型、质量型医院，秉承厚德精医、仁爱奉献的精神，坚持\u201c以病人为中心、以质量为核心\u201d的宗旨，竭诚为广大患者提供优质、便捷、高效的医疗服务。","Invalid":0,"CreateTime":"2018-10-06 15:17:33","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":2304,"HospitalName":"泉州第三医院","HospitalLevel":0,"AreaId":1703,"AreaName":"泉州","AreaPath":",0,17,1703,","Address":"福建省泉州市台商投资区洛阳镇白沙二村","Longitude":"118.70641","Dimension":"24.913554","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"泉州第三医院是一所集医疗、预防、科研、教学于一体的\u201c三级乙等\u201d精神卫生专科医院。医院现有各类专业技术人员188名，其中正、副主任医师11人，中级技术人员46人，是福建省规模较大，技术力量较为雄厚，设备较为齐全的精神卫生机构。　　泉州第三医院目前设有五个病区和医学心理科（心理测验、心理咨询、心理治疗、医学心理热线电话：961681333）、司法精神医学鉴定科、神经内科、儿童少年心理卫生门诊。为满足广大群众就医的需要，门诊部开设有特需专家、专科门诊，为失眠症、癔症、神经症（恐怖症、焦虑症、强迫症、疑病症）、精神分裂症、抑郁症、人格障碍、性心理障碍、精神发育迟滞、少年期心理发育障碍、儿童多动症、孤独症、品行障碍和情绪障碍、老年痴呆、药、酒依赖等疾病患者提供有效的治疗和优质的服务。为适应医学模式转变，医院除了为精神疾病患者提供医疗服务外，还广泛开展精神卫生宣传，并定期邀请知名精神医学专家于每个月最后一个星期六上午在医院电教室举办\u201c精神康复与家庭护理\u201d系列讲座，欢迎社会各界人士光临垂询。","Invalid":0,"CreateTime":"2018-10-06 15:18:04","UpdateTime":"2018-10-06 16:30:59"},{"HospitalId":2560,"HospitalName":"青州市皮肤病防治站","HospitalLevel":0,"AreaId":1507,"AreaName":"潍坊","AreaPath":",0,15,1507,","Address":"潍坊市青州市云门山南路2838号","Longitude":"118.48145","Dimension":"36.680288","Order":0,"IsHot":0,"IsDisplay":1,"ImgPath":"","Description":"青州市皮肤病防治站暨市皮肤病医院，成立于1955年，是市唯一公立皮肤病、性病专业防治机构。　　拥有目前世界上最先进的过敏性疾病诊治设备摩拉生物治疗仪，美国科医人ACUPULSE微雕点阵王、红蓝光治疗仪、脉冲激光、希格玛全仓紫外线治疗仪、中药蒸汽浴疗、中药洗浴水疗等先进设备，并以开展激光美容，果酸换肤等美容项目。专业治疗过敏性疾病，皮炎，湿疹，带状疱疹，病毒疣，斑秃，痤疮，手足癣，体癣、白癜风、银屑病等多种皮肤病以及淋病、梅毒、生殖器疱疹、尖锐湿疣、非淋菌性尿道炎、HIV等性传播疾病。","Invalid":0,"CreateTime":"2018-10-06 15:19:10","UpdateTime":"2018-10-06 16:30:59"}]
         */

        private int Total;
        private List<ReturnDataBean> ReturnData;

        public int getTotal() {
            return Total;
        }

        public void setTotal(int Total) {
            this.Total = Total;
        }

        public List<ReturnDataBean> getReturnData() {
            return ReturnData;
        }

        public void setReturnData(List<ReturnDataBean> ReturnData) {
            this.ReturnData = ReturnData;
        }

        public static class ReturnDataBean implements Serializable {
            /**
             * HospitalId : 256
             * HospitalName : 北京市回民医院
             * HospitalLevel : 0
             * AreaId : 10102
             * AreaName : 西城区
             * AreaPath : ,0,1,101,10102,
             * Address : 西城区右安门内大街11号
             * Longitude : 116.370077
             * Dimension : 39.887993
             * Order : 0
             * IsHot : 0
             * IsDisplay : 1
             * ImgPath :
             * Description : 北京市回民医院创建于1947年，原名“中国回教协会普慈施医院” ，是一所以现代医学为主，集医疗、预防、保健、康复、健康教育、社区服务为一体的二级甲等综合医院，是全国最大、北京唯一一家具有穆斯林特色的综合医院，是首都精神文明先进单位和首都民族团结进步先进单位。　　医院占地面积11760平方米，建筑面积25600平方米，床位设置300张。设内、外、妇产、骨伤、中医等九个病区,有装备一流、环境幽雅的“综合病房”为内外宾提供全程优质服务。日门诊可容纳2000人次, 设临床医技科室23个。　　医院中医科是北京市中医局批准的首批“示范中医科”之一。中医科有独立的病区28张床，5个专科门诊，有7名副主任医师以上专家和完整的人才梯队;有在牛街地区享誉盛名的回族老中医杨大奇和中医治疗脉管炎的专家;有开展中医治疗重症肌无力特色门诊，有针灸、推拿、中药、药浴、熏蒸等多项综合诊疗法。　　医院拥有现代化的高压氧及多个常规诊断治疗的西医专科专台，有CT机、1000MAX光机、CR型机、C型臂机、钼钯乳腺X光机、数字化胃肠机、眼科A、B超、曲率仪、视野机、全自动生化分析仪、血气分析仪、心导管、ICU、CCU监护系统等现代医疗诊断治疗设备。　　北京市回民医院作为中国与世界各国往来的窗口，经穆斯林国家开展学术交流并提供医疗服务，医院配有穆斯林营养师，设有“割礼”专台门诊、穆斯林沐浴、礼拜堂等设施，被卫生部指定为对外重点服务的医疗单位之一，是首都精神文明先进单位，是首都民族团结时步模范单位
             * Invalid : 0
             * CreateTime : 2018-10-06 14:55:12
             * UpdateTime : 2018-10-06 16:19:23
             */

            private int HospitalId;
            private String HospitalName;
            private int HospitalLevel;
            private int AreaId;
            private String AreaName;
            private String AreaPath;
            private String Address;
            private String Longitude;
            private String Dimension;
            private int Order;
            private int IsHot;
            private int IsDisplay;
            private String ImgPath;
            private String Description;
            private int Invalid;
            private String CreateTime;
            private String UpdateTime;
            private boolean isCustom;

            public boolean isCustom() {
                return isCustom;
            }

            public void setCustom(boolean custom) {
                isCustom = custom;
            }

            public int getHospitalId() {
                return HospitalId;
            }

            public void setHospitalId(int HospitalId) {
                this.HospitalId = HospitalId;
            }

            public String getHospitalName() {
                return HospitalName;
            }

            public void setHospitalName(String HospitalName) {
                this.HospitalName = HospitalName;
            }

            public int getHospitalLevel() {
                return HospitalLevel;
            }

            public void setHospitalLevel(int HospitalLevel) {
                this.HospitalLevel = HospitalLevel;
            }

            public int getAreaId() {
                return AreaId;
            }

            public void setAreaId(int AreaId) {
                this.AreaId = AreaId;
            }

            public String getAreaName() {
                return AreaName;
            }

            public void setAreaName(String AreaName) {
                this.AreaName = AreaName;
            }

            public String getAreaPath() {
                return AreaPath;
            }

            public void setAreaPath(String AreaPath) {
                this.AreaPath = AreaPath;
            }

            public String getAddress() {
                return Address;
            }

            public void setAddress(String Address) {
                this.Address = Address;
            }

            public String getLongitude() {
                return Longitude;
            }

            public void setLongitude(String Longitude) {
                this.Longitude = Longitude;
            }

            public String getDimension() {
                return Dimension;
            }

            public void setDimension(String Dimension) {
                this.Dimension = Dimension;
            }

            public int getOrder() {
                return Order;
            }

            public void setOrder(int Order) {
                this.Order = Order;
            }

            public int getIsHot() {
                return IsHot;
            }

            public void setIsHot(int IsHot) {
                this.IsHot = IsHot;
            }

            public int getIsDisplay() {
                return IsDisplay;
            }

            public void setIsDisplay(int IsDisplay) {
                this.IsDisplay = IsDisplay;
            }

            public String getImgPath() {
                return ImgPath;
            }

            public void setImgPath(String ImgPath) {
                this.ImgPath = ImgPath;
            }

            public String getDescription() {
                return Description;
            }

            public void setDescription(String Description) {
                this.Description = Description;
            }

            public int getInvalid() {
                return Invalid;
            }

            public void setInvalid(int Invalid) {
                this.Invalid = Invalid;
            }

            public String getCreateTime() {
                return CreateTime;
            }

            public void setCreateTime(String CreateTime) {
                this.CreateTime = CreateTime;
            }

            public String getUpdateTime() {
                return UpdateTime;
            }

            public void setUpdateTime(String UpdateTime) {
                this.UpdateTime = UpdateTime;
            }

            @Override
            public String toString() {
                return "ReturnDataBean{" +
                        "HospitalId=" + HospitalId +
                        ", HospitalName='" + HospitalName + '\'' +
                        ", HospitalLevel=" + HospitalLevel +
                        ", AreaId=" + AreaId +
                        ", AreaName='" + AreaName + '\'' +
                        ", AreaPath='" + AreaPath + '\'' +
                        ", Address='" + Address + '\'' +
                        ", Longitude='" + Longitude + '\'' +
                        ", Dimension='" + Dimension + '\'' +
                        ", Order=" + Order +
                        ", IsHot=" + IsHot +
                        ", IsDisplay=" + IsDisplay +
                        ", ImgPath='" + ImgPath + '\'' +
                        ", Description='" + Description + '\'' +
                        ", Invalid=" + Invalid +
                        ", CreateTime='" + CreateTime + '\'' +
                        ", UpdateTime='" + UpdateTime + '\'' +
                        ", isCustom=" + isCustom +
                        '}';
            }
        }
    }
}
