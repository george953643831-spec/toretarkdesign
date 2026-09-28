import { c as r, r as a, j as e, H as d } from "./index-CYlb9IhA.js";
import { a as downloadBlob, c as copyClipboard } from "./exportUtils-DBv8hqlY.js";

const DEFAULT_IMAGE = "/images/pitch-deck-banner.jpg";

const UploadIcon = r("upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "1" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "2" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "3" }]
]);

const RotateCcwIcon = r("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1" }],
  ["path", { d: "M3 3v5h5", key: "2" }]
]);

const MaximizeIcon = r("maximize-2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "1" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "2" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "3" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "4" }]
]);

const XIcon = r("x", [
  ["line", { x1: "18", x2: "6", y1: "6", y2: "18", key: "1" }],
  ["line", { x1: "6", x2: "18", y1: "6", y2: "18", key: "2" }]
]);

const SparklesIcon = r("sparkles", [
  ["path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z", key: "1" }],
  ["path", { d: "M5 3v4", key: "2" }],
  ["path", { d: "M19 17v4", key: "3" }],
  ["path", { d: "M3 5h4", key: "4" }],
  ["path", { d: "M17 19h4", key: "5" }]
]);

const DownloadIcon = r("download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "1" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "3" }]
]);

const CopyIcon = r("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "1" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "2" }]
]);

const CheckIcon = r("check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "1" }]
]);

const FileTextIcon = r("file-text", [
  ["path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "2" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "3" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "4" }]
]);

const BRIEF_DATABASE = {
  "大灯修复液": {
    name: "大灯修复液",
    enName: "Car Headlight Restoration Kit",
    sku: "TT-HLR-100",
    series: "修复系列 (Restoration Purple)",
    seriesColor: "#9333EA",
    capacity: "16 fl. oz. / 473 mL",
    tags: ["免打磨", "去黄增透", "UV长效阻隔", "防二次氧化"],
    positioning: "专为解决老旧车辆大灯面罩氧化泛黄、模糊雾化、夜间透光率下跌，以及传统打磨翻新流程繁琐、门槛高、极易刮伤车漆等核心痛点而设计的免打磨大灯翻新养护套装。",
    coreAudience: "25-50岁私家车主、二手车翻新从业者、爱车自驾族。痛点为大灯发黄影响年检与夜行安全，期望通过极简操作快速恢复透亮。",
    slogan: "免砂纸打磨 · 一喷一擦 · 3分钟大灯晶透如新",
    painPoints: [
      "老旧车灯发黄模糊，年审难通过，夜间照明距离衰减 50% 以上",
      "传统汽修店抛光翻新收费高昂（$100+），施工耗时且极易磨花周围车漆",
      "普通除黄剂维持时间短，阳光暴晒 1 个月后再次发黄变暗"
    ],
    sellingPoints: [
      {
        title: "化学解构发黄与氧化层 (Chemical Oxidation Removal)",
        desc: "无需物理砂纸粗暴打磨，去氧化活性因子瞬间瓦解表面老化紫外线涂层与顽固污垢，不伤原车 PC 面罩灯壳。",
        visualIdea: "微观化学反应 3D 透视动画：老化发黄颗粒被活性因子包裹乳化剥离，面罩恢复绝对镜面平整。"
      },
      {
        title: "高透光率镜面还原 (Optical Clarity Restoration)",
        desc: "纳米修复聚合物微孔填平，透光率由原本的 42% 极速跃升至 98.6%，夜间远光照射距离延伸 35 米。",
        visualIdea: "21:6 宽幅实测左右分屏：左侧发黄暗淡老旧灯光 vs 右侧清澈透亮冷白强光切线对比。"
      },
      {
        title: "UV 耐候保护膜屏障 (Long-lasting UV Shield)",
        desc: "成膜后具备长效抗紫外线聚合物保护层，耐高温暴晒与酸雨冲刷，持久透亮维持 180 天以上防二次黄化。",
        visualIdea: "日光模拟箱 UV 400nm 照射阻隔实验，水滴在灯壳表面呈 110° 规整水珠滑落。"
      }
    ],
    mainImages: [
      { num: 1, title: "合规纯白底首图", desc: "RGB(255,255,255) 纯白底，瓶体 15° 微仰角，保留 20% 真实接触倒影，展示瓶身哑光磨砂质感与局部烫金 Logo。" },
      { num: 2, title: "核心卖点：免打磨快捷施工", desc: "直观对比图：左侧砂纸繁琐打磨打叉，右侧 TORETARK 仅需喷雾轻喷轻擦即刻通透，标注 '3 MINS QUICK RESTORE'。" },
      { num: 3, title: "实测效果对比（策划）", desc: "21:6 宽幅透光率对比：发黄白内障车灯 vs 晶莹剔透新灯，附实验室透光率数据 42% -> 98.6%。" },
      { num: 4, title: "微观化学解构机理", desc: "纳米活性成分渗透氧化裂纹，分解泛黄硫化物，重构透明树脂晶体保护层。" },
      { num: 5, title: "夜行照明实景安全提升", desc: "夜间公路远光照射实景：照射宽度拓宽 2 车道，照射深度延长 35 米，行车安全系数倍增。" },
      { num: 6, title: "180天长效抗 UV 耐候", desc: "极端温差暴晒模拟测试，高分子抗紫外线屏蔽涂层，抵御酸雨洗车与阳光二次黄化。" },
      { num: 7, title: "原厂规格清单与包装", desc: "包含 500ml 喷雾 + 专用超细纤维毛巾 + 密封防漏盖 + 原厂防伪二维码溯源。" }
    ]
  },
  "快速镀晶喷雾": {
    name: "快速镀晶喷雾",
    enName: "Quick Ceramic Coating Spray",
    sku: "TT-SWR-240",
    series: "护理系列 (Ceramic Cyan)",
    seriesColor: "#06B6D4",
    capacity: "16 fl. oz. / 473 mL",
    tags: ["SiO2陶瓷镀晶", "115°超疏水", "30秒即喷即擦", "全车原厂漆兼容"],
    positioning: "面向车库爱好者与日常车主的易用型专业级高浓度 SiO₂ 陶瓷镀膜喷雾，打破传统固蜡打磨与结晶施工门槛。",
    coreAudience: "追求漆面极致镜面光泽与疏水效果的爱车族，痛点是传统打蜡费时费力，期望一喷一擦即可获得专业美容级泼水光泽。",
    slogan: "Spray, Wipe, Done · 30秒即喷即擦，115°极致荷叶水珠",
    painPoints: [
      "传统打蜡/镀晶施工繁琐需 2-4 小时，下蜡困难产生太阳纹旋光",
      "雨后漆面留存顽固酸雨水斑与泥浆水痕，车漆失光发乌",
      "非专业施工极易发白挂胶，伤及车身黑色塑料与橡胶饰条"
    ],
    sellingPoints: [
      {
        title: "SiO₂ 纳米蜂窝覆膜技术 (SiO2 Ceramic Shield Matrix)",
        desc: "活性高纯度纳米二氧化硅微粒渗入车漆清漆微孔，固化形成坚硬高密度陶瓷保护屏障，抗微划痕与酸雨侵蚀。",
        visualIdea: "3D 显微镜视角展现漆面毛孔被二氧化硅微晶严密填平并形成超滑保护膜的过程。"
      },
      {
        title: "115° 荷叶仿生超疏水 (Superhydrophobic Bead Effect)",
        desc: "接触角高达 115°，行车中水珠与污泥受气流冲击自然滚落，产生极强自洁效果，雨天行车视线更清爽。",
        visualIdea: "超高速 1000fps 摄影捕获倾斜漆面上完美圆润水珠极速弹跳滑落无水痕。"
      },
      {
        title: "30秒即喷即擦快捷工艺 (Instant Wipe & Gloss)",
        desc: "无需干燥等待或专业烤灯，一喷一擦即刻呈现深邃湿润光泽，抗静电少吸灰，全车车漆、玻璃、轮毂通用。",
        visualIdea: "施工动作三步动图：手持哑黑喷雾轻雾化喷洒 -> 蜂芒黄毛巾轻柔擦匀 -> 镜面高光反射天际线。"
      }
    ],
    mainImages: [
      { num: 1, title: "纯白底无影合规主图", desc: "符合亚马逊合规标准，瓶体黑色与蜂芒黄视觉冲击，双侧条形箱 45° 笔直高光线。" },
      { num: 2, title: "30s 即喷即擦三步极速施工", desc: "直观动作分镜：喷雾雾化喷涂、毛巾擦拭抛光、镜面立刻呈现，突出 'SPRAY, WIPE, DONE'。" },
      { num: 3, title: "115° 极致疏水水珠实测", desc: "微距拍摄水珠圆润度，荷叶仿生滚动自洁效果，水迹不留漆面。" },
      { num: 4, title: "SiO₂ 纳米蜂窝分子屏障", desc: "3D 剖面透视原厂清漆孔隙被纳米微粒密封填平过程，杜绝氧化侵蚀。" },
      { num: 5, title: "抗酸雨腐蚀与耐温耐污", desc: "模拟酸雨冲刷与高温暴晒环境测试，漆面抗划痕与抗污能力提升 300%。" },
      { num: 6, title: "全车通用多材质适用", desc: "车漆、挡风玻璃、后视镜、合金轮毂、黑色塑料饰条均可安全使用不发白。" },
      { num: 7, title: "原厂套装清单与配件标注", desc: "500ml 陶瓷喷雾 + 专属双面加厚螺旋珊瑚绒毛巾 + 防漏喷嘴配件。" }
    ]
  },
  "镀膜剂": {
    name: "镀膜剂",
    enName: "Ceramic Coating Agent",
    sku: "TT-CCS-473",
    series: "护理系列 (Ceramic Cyan)",
    seriesColor: "#06B6D4",
    capacity: "16 fl. oz. / 473 mL",
    tags: ["9H硬度保护", "深邃镜面光泽", "抗污耐高温", "持久防护"],
    positioning: "专业级长效车漆陶瓷覆膜养护剂，提供长达 180 天的深层清漆固化与超凡镜面反光质感。",
    coreAudience: "中高端车主、自驾爱好者，期望减少洗车频率并保持展厅级车漆反光度。",
    slogan: "封存新车镜面光泽，抵御 180 天风吹雨淋",
    painPoints: [
      "新车漆面裸奔易遭鸟粪树胶氧化腐蚀产生永久性印迹",
      "日常洗车毛巾摩擦频繁产生大量太阳纹与发丝划痕",
      "劣质镀膜产品含有机硅，产生彩虹纹油影难以清除"
    ],
    sellingPoints: [
      {
        title: "高交联陶瓷聚合物 (Cross-linked Polymer)",
        desc: "形成高韧性微弹性透明膜层，有效吸收外界轻微刮蹭动能，抵御细碎石子与浮尘刮擦。",
        visualIdea: "硬度对比测试演示：钥匙在镀膜机盖表面划过光洁无损。"
      },
      {
        title: "极致深邃湿润镜面感 (Deep Mirror Reflection)",
        desc: "光泽度提升 30% 以上，反射率如同黑曜石镜面，清晰倒映蓝天白云与车库射灯。",
        visualIdea: "车库顶置射灯 45° 倒影无畸变测试，高反差黑金对比呈现极致质感。"
      },
      {
        title: "耐酸碱与耐高温隔热 (Chemical & Heat Resistance)",
        desc: "可耐受 pH 2~12 强酸碱洗车液清洗与 250℃ 发动机机盖高温，保护层不剥落不氧化。",
        visualIdea: "喷灯机盖耐温烘烤实验与强碱泡沫喷射冲水实验对比。"
      }
    ],
    mainImages: [
      { num: 1, title: "纯白底高反差旗舰主图", desc: "符合亚马逊合规标准，纯白底无影布光，突出黑色瓶体与青色功能标识。" },
      { num: 2, title: "深邃镜面反光对比", desc: "车身机盖清晰倒映天空与建筑，光泽度提升 30% 数据标注。" },
      { num: 3, title: "超韧微弹性防护层", desc: "抵御树枝刮擦与洗车发丝纹，微观结构弹性缓冲抗冲击。" },
      { num: 4, title: "强效抗污防鸟粪树胶", desc: "树胶与鸟粪易擦即净，不渗透腐蚀原厂清漆。" },
      { num: 5, title: "耐高温发动机盖实测", desc: "250℃ 烘烤环境下膜层稳定不发黄不龟裂。" },
      { num: 6, title: "180天超长保质期", desc: "洗车 50 次后疏水角依然稳定保持在 105° 以上。" },
      { num: 7, title: "包装清单与施工手套毛巾", desc: "完整套装配件包含专用涂抹块、超纤擦拭布与防漏包装。" }
    ]
  },
  "轮胎上光剂": {
    name: "轮胎上光剂",
    enName: "Tire Shine & Gloss Dressing",
    sku: "TT-IRN-473",
    series: "清洁与养护系列 (Brand Amber)",
    seriesColor: "#FFB600",
    capacity: "16 fl. oz. / 473 mL",
    tags: ["深邃缎面黑", "不甩胶不飞溅", "防紫外线龟裂", "速干水性配方"],
    positioning: "水性环保不粘灰轮胎深邃黑亮滋养光泽剂，拒绝油腻甩黑胶，告别橡胶白化老化。",
    coreAudience: "改装车主、展会车主与日常洁癖车主，极其反感传统油性上光剂甩黑飞溅到车门下侧的痛点。",
    slogan: "纯粹缎面黑质感 · 绝不甩胶飞溅车身",
    painPoints: [
      "普通油性上光剂洗车后跑高速立刻甩胶飞溅车门车裙，极难清洗",
      "胎壁发白发灰氧化，产生微细裂纹，车辆整体视觉老气横秋",
      "粘黏泥沙灰尘，跑两公里立刻变身泥腿子"
    ],
    sellingPoints: [
      {
        title: "水性纳米渗透成膜配方 (Zero-Sling Water-Based Matrix)",
        desc: "分子直接渗透进橡胶孔隙，3 分钟彻底快干固化，跑高速 120km/h 零甩胶不脏车裙。",
        visualIdea: "高速转动轮胎微距慢动作：胎面干爽无油性飞溅滴落，白色车门依旧一尘不染。"
      },
      {
        title: "深邃自然缎面光泽 (Deep Satin Obsidian Gloss)",
        desc: "非廉价刺眼油腻反光，呈现如赛道全新半热熔轮胎般的高级缎面哑黑质感。",
        visualIdea: "轮胎左右分屏对比：左侧氧化灰白粗糙 vs 右侧饱满黑润缎面原厂质感。"
      },
      {
        title: "抗臭氧紫外线防老化 (Anti-UV & Anti-Browning)",
        desc: "内含抗臭氧与橡胶抗老化助剂，延缓胎壁发棕、发白及细微龟裂，延长轮胎橡胶使用寿命。",
        visualIdea: "长时间日晒模拟试验下胎壁橡胶微观韧性保持对比。"
      }
    ],
    mainImages: [
      { num: 1, title: "纯白底高保真主图", desc: "亚马逊规范 1:1 白底图，瓶身带有细密雾化喷头，倒影精致。" },
      { num: 2, title: "120km/h 高速零甩胶实测", desc: "高速公路行驶实拍，白色车裙车门洁净如初，杜绝黑色甩油点。" },
      { num: 3, title: "新车级缎面哑光黑对比", desc: "分屏呈现胎壁发棕发白氧化对比，瞬间焕发黑亮光泽。" },
      { num: 4, title: "水性纳米快干不粘沙", desc: "手指触摸胎面干爽无油脂残留，沙土自然滑落不沾灰。" },
      { num: 5, title: "延缓橡胶老化防开裂", desc: "滋养橡胶弹性纤维，抵御紫外线与高温暴晒发脆。" },
      { num: 6, title: "人体工学六角海绵搭配", desc: "贴合轮胎胎弧弧度，均匀涂抹不漏边不脏轮毂。" },
      { num: 7, title: "原厂正品配件包装清单", desc: "上光喷雾 + 定制弧形涂抹海绵 + 耐酸碱封口内塞。" }
    ]
  },
  "铁粉去除剂": {
    name: "铁粉去除剂",
    enName: "Iron Fallout Remover",
    sku: "TT-QDT-473",
    series: "清洁系列 (Degreaser Power Amber)",
    seriesColor: "#F59E0B",
    capacity: "16 fl. oz. / 473 mL",
    tags: ["中性温和pH=7", "紫色变色显效", "深层溶解刹车粉", "不伤轮毂原厂漆"],
    positioning: "高效中性化学反应型轮毂与车漆铁粉溶解喷雾，通过遇铁变紫反应将刹车焦粉彻底水溶化冲净。",
    coreAudience: "欧系车及性能车车主（刹车粉尘极多），痛点是轮毂长期黑垢硬结刷不掉且容易磨伤高亮轮毂。",
    slogan: "遇铁变紫瞬间溶解 · 一喷一冲轮毂亮白如新",
    painPoints: [
      "刹车片高温磨损铁粉嵌入轮毂清漆，普通洗车液根本洗不掉",
      "使用酸性强腐蚀洗剂容易导致锻造轮毂与刹车卡钳褪色失光甚至螺丝生锈",
      "硬毛刷暴力用力刷洗导致高光轮毂表面满是拉丝划痕"
    ],
    sellingPoints: [
      {
        title: "化学螯合遇铁变紫反应 (Visible Purple Reaction)",
        desc: "活性中性硫醇盐配方迅速与刹车铁屑发生化学螯合，30 秒转为深紫色水溶性复合物，功效肉眼可见。",
        visualIdea: "白金轮毂喷洒透明药剂，30秒内化为浓郁深紫色水流带走铁屑的视觉冲击大特写。"
      },
      {
        title: "绝对中性 pH=7 安全保障 (pH Neutral Safety)",
        desc: "不含强酸强碱，对阳极氧化轮毂、多活塞烤漆卡钳、电镀饰条及车漆无任何腐蚀损害风险。",
        visualIdea: "pH 测试试纸直测标准 7.0 中性绿，与市面发红强酸除铁剂对比。"
      },
      {
        title: "无接触一冲即净高效洗车 (Touchless Rinse Clean)",
        desc: "溶解后只需高压水枪强力冲洗即可带走 95% 以上顽固污垢，大幅减少物理毛刷擦拭带来的划伤风险。",
        visualIdea: "高压水枪扇面冲过轮毂，紫色污液如浪花般退散，露出银光闪闪的金属原貌。"
      }
    ],
    mainImages: [
      { num: 1, title: "纯白底规范首图", desc: "清澈透明药液配黑色高阻隔瓶体，体现科技感与专业度。" },
      { num: 2, title: "遇铁 30 秒变紫反应", desc: "化学可视化大图：刹车盘铁屑迅速转为深紫色水流流下。" },
      { num: 3, title: "中性 pH=7 安全测试", desc: "试纸实测 7.0 绿色，不伤刹车盘螺丝与昂贵烤漆卡钳。" },
      { num: 4, title: "无接触高压一冲即净", desc: "水枪强力冲刷，省去弯腰刷洗轮毂内侧的繁重劳动。" },
      { num: 5, title: "车身漆面隐形铁粉去除", desc: "白色车身点点黄锈斑溶解排出，漆面恢复婴儿肌手感。" },
      { num: 6, title: "低气味柑橘清爽配方", desc: "摒弃传统除铁剂刺鼻恶臭，改善施工环境体验。" },
      { num: 7, title: "大容量规格与专业耐酸碱喷头", desc: "具备大扇形雾化与细线喷射双模式喷嘴配置。" }
    ]
  }
};

const getProposalData = (input) => {
  const query = (input || "").trim();
  let matched = null;
  for (const [key, val] of Object.entries(BRIEF_DATABASE)) {
    if (query && (key.includes(query) || query.includes(key))) {
      matched = val;
      break;
    }
  }
  if (!matched) {
    const prodTitle = query || "全能汽车美化防护套装";
    matched = {
      name: prodTitle,
      enName: "TORETARK Pro Detailing Series",
      sku: "TT-PRO-" + Math.floor(100 + Math.random() * 900),
      series: "品牌标准系列 (Brand Standard)",
      seriesColor: "#FFB600",
      capacity: "16 fl. oz. / 473 mL",
      tags: ["即喷即擦", "易用专业级", "高效耐久", "原厂漆面兼容"],
      positioning: "为大众车主与车库爱好者量身打造的高效便携汽美解决方案，秉承 TORETARK 纯黑曜石与蜂芒耀黄工业美学，以极低学习门槛提供展厅级养护效果。",
      coreAudience: "25-45岁日常车主及爱车自驾群体，注重效率与视觉品质，追求即刻见效的养护反馈。",
      slogan: "Spray, Wipe, Done · 专业品质，轻松掌控",
      painPoints: [
        "传统汽美操作步骤复杂，需要专业场地与昂贵设备",
        "市面竞品宣传噱头大于实效，持久性差容易沾灰粘污",
        "施工容错率低，容易残留油影或伤害车身其他材质"
      ],
      sellingPoints: [
        {
          title: "极简即用配方体系",
          desc: "开瓶即用无需稀释，均匀喷洒后使用专用毛巾擦匀即可完成施工。",
          visualIdea: "施工动作三步动图：手持哑黑喷雾轻雾化喷洒 -> 蜂芒黄毛巾轻柔擦匀 -> 镜面高光反射天际线。"
        },
        {
          title: "长效耐候防护屏障",
          desc: "抵御紫外线老化与酸雨侵蚀，提供持久稳定的保护周期。",
          visualIdea: "分屏耐候测试数据图表，抗污自洁效果突出展示。"
        },
        {
          title: "全材质中性安全兼容",
          desc: "温和配方无腐蚀无残留，保护原车所有饰面部件原貌。",
          visualIdea: "多部件微距测试：金属、玻璃、塑料零损害验证。"
        }
      ],
      mainImages: [
        { num: 1, title: "纯白底合规首图", desc: "符合亚马逊合规标准，纯白背景，瓶身带有精致倒影与高光流线。" },
        { num: 2, title: "核心卖点极速施工演示", desc: "分步展示一喷一擦操作流程，清晰突出省时高效优势。" },
        { num: 3, title: "核心功效实测对比", desc: "左右分屏高反差对比图，肉眼立见养护前后巨大视觉差异。" },
        { num: 4, title: "微观材质科技解析", desc: "3D 剖面透视分解分子层渗透与保护膜固化机理。" },
        { num: 5, title: "全天候多环境耐受性", desc: "耐高温、抗紫外线、耐酸雨洗礼实景表现。" },
        { num: 6, title: "权威认证与中性安全保障", desc: "标明环保无毒、pH 中性安全与原厂工艺兼容性。" },
        { num: 7, title: "完整包装清单与原厂配件", desc: "展示瓶装产品、专业喷头及附赠定制配件工具全貌。" }
      ]
    };
  }
  return matched;
};

const buildMarkdownText = (p) => {
  return [
    `# TORETARK ${p.name} · 视觉链路策划方案`,
    `**英文名称**：${p.enName}`,
    `**产品代码**：${p.sku} | **所属品类**：${p.series} | **规格容量**：${p.capacity}`,
    `**核心口号**：${p.slogan}`,
    `**生成日期**：${new Date().toISOString().split("T")[0]} | **版本状态**：官方策划提案母版 (Final Release)`,
    ``,
    `---`,
    ``,
    `## 模块一：品牌战略定位与破局策略`,
    `- **产品定位**：${p.positioning}`,
    `- **核心消费客群**：${p.coreAudience}`,
    `- **核心差异化生态位**：打破专业汽美门槛高、收费昂贵痛点，提供面向大众爱车车主的即用型专业产品。`,
    ``,
    `## 模块二：核心痛点与心理期望穿透`,
    p.painPoints.map((pt, i) => `${i + 1}. ${pt}`).join("\n"),
    ``,
    `## 模块三：核心卖点视觉实测矩阵 (Core Proof)`,
    p.sellingPoints.map((sp, i) => `### 卖点 ${i + 1}：${sp.title}\n- **技术与功效逻辑**：${sp.desc}\n- **视觉分镜呈现建议**：${sp.visualIdea}`).join("\n\n"),
    ``,
    `## 模块四：电商 7 张主图架构策划 (Amazon & DTC)`,
    p.mainImages.map(img => `- **主图 ${img.num}（${img.title}）**：${img.desc}`).join("\n"),
    ``,
    `## 模块五：品牌色彩体系与排版网格规范`,
    `- **主色彩导视**：蜂芒耀黄 (#FFB600) + 曜夜纯黑 (#0D0D0E) + 钛金深灰 (#27272A)`,
    `- **系列辅色**：${p.series}（色值 ${p.seriesColor}）`,
    `- **字体层级**：Montserrat Bold（标题）/ Poppins Regular（正文）/ JetBrains Mono（参数代码）`,
    `- **网格系统**：8px/12px 严谨对齐栅格，图文黄金比例 7:3。`,
    ``,
    `## 模块六：3D 渲染与棚拍布光规范`,
    `- **瓶体材质**：高精度哑光微磨砂瓶身，局部烫金 Logo 带有微物理凹凸法线。`,
    `- **布光方案**：标准双侧长条柔光箱 (Dual Strip Rig 45°)，车体与瓶身反光带笔直无锯齿。`,
    `- **纯白底主图规范**：严格保证背景 RGB (255,255,255)，保留 20% 真实接触漫反射阴影。`,
    ``,
    `## 模块七：交付物标准与排期`,
    `- **设计交付包**：包含 Figma 响应式设计工程源文件、分层 PSD 智能对象、4K 超清透明底 PNG、16:9 Keynote 提案母版。`,
    `- **合规自查标准**：严禁虚假违禁词，符合亚马逊全球电商合规标准，通过率需达 100%。`,
    ``,
    `---`,
    `*TORETARK 内部设计与视觉资产系统 · 机密文件*`
  ].join("\n");
};

const buildDocHtml = (p) => {
  const md = buildMarkdownText(p);
  const formattedBody = md
    .replace(/^# (.*$)/gim, '<h1 style="color:#000;font-size:22px;border-bottom:2px solid #FFB600;padding-bottom:8px;">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 style="color:#222;font-size:16px;margin-top:20px;border-left:4px solid #FFB600;padding-left:8px;">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 style="color:#333;font-size:14px;margin-top:14px;">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');

  return '<!DOCTYPE html><html><head><meta charset="utf-8"><title>TORETARK ' + p.name + ' 视觉链路策划方案</title><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333;padding:40px;max-width:800px;margin:auto;}</style></head><body>' + formattedBody + '</body></html>';
};

const PitchDeck = ({ onShowToast: x }) => {
  const [currentImage, setCurrentImage] = a.useState(() => {
    try {
      const saved = localStorage.getItem("toretark_pitch_deck_single_image");
      return saved || DEFAULT_IMAGE;
    } catch {
      return DEFAULT_IMAGE;
    }
  });

  const [isFullscreen, setIsFullscreen] = a.useState(false);
  const [inputVal, setInputVal] = a.useState("");
  const [generating, setGenerating] = a.useState(false);
  const [currentProposal, setCurrentProposal] = a.useState(null);
  const [activeTab, setActiveTab] = a.useState("overview");
  const [copied, setCopied] = a.useState(false);

  const handleFileChange = (ev) => {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (re) => {
      const dataUrl = re.target.result;
      if (typeof dataUrl === "string") {
        setCurrentImage(dataUrl);
        try {
          localStorage.setItem("toretark_pitch_deck_single_image", dataUrl);
        } catch (err) {
          console.warn("Storage full", err);
        }
        if (x) x("已成功更换视觉链路策划提案单图", file.name, "success");
      }
    };
    reader.readAsDataURL(file);
    ev.target.value = "";
  };

  const handleReset = () => {
    setCurrentImage(DEFAULT_IMAGE);
    try {
      localStorage.removeItem("toretark_pitch_deck_single_image");
    } catch (err) {}
    if (x) x("已恢复默认提案单图", "16:9 官方母版", "info");
  };

  const handleGenerate = (targetName) => {
    const nameToUse = (typeof targetName === "string" ? targetName : inputVal).trim() || "快速镀晶喷雾";
    setGenerating(true);
    setTimeout(() => {
      const proposal = getProposalData(nameToUse);
      setCurrentProposal(proposal);
      setGenerating(false);
      setActiveTab("overview");
      if (x) x(`已生成《${proposal.name}》视觉链路策划方案`, "支持一键下载导出 Markdown / Word 文档", "success");
    }, 450);
  };

  const handleDownloadMd = () => {
    if (!currentProposal) return;
    const text = buildMarkdownText(currentProposal);
    const filename = `TORETARK_${currentProposal.name}_视觉链路策划提案.md`;
    downloadBlob(text, filename, "text/markdown;charset=utf-8");
    if (x) x(`已导出 ${filename}`, "可在 Notion / 飞书 / Obsidian 导入编辑", "download");
  };

  const handleDownloadDoc = () => {
    if (!currentProposal) return;
    const docHtml = buildDocHtml(currentProposal);
    const filename = `TORETARK_${currentProposal.name}_视觉链路策划提案.doc`;
    downloadBlob(docHtml, filename, "application/msword;charset=utf-8");
    if (x) x(`已导出 ${filename}`, "可用 Microsoft Word 或 WPS 直接打开", "download");
  };

  const handleCopy = () => {
    if (!currentProposal) return;
    const text = buildMarkdownText(currentProposal);
    copyClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    if (x) x("已成功复制方案全文到剪贴板", "支持快速粘贴至文档与汇报邮件", "success");
  };

  return e.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-200",
    children: [
      e.jsx("div", {
        className: "border-b border-zinc-800 pb-4",
        children: e.jsxs("div", {
          children: [
            e.jsxs("h1", {
              className: "text-xl font-extrabold text-white flex items-center gap-2",
              children: [
                e.jsx(d, { className: "w-5 h-5 text-[#FFB600]" }),
                e.jsx("span", { children: "视觉链路策划提案" })
              ]
            }),
            e.jsx("p", {
              className: "text-xs text-zinc-400 mt-1",
              children: "16:9 宽屏视觉链路母版与策划提案单图，支持随时上传更换并保存展示。"
            })
          ]
        })
      }),

      // 16:9 Card Box
      e.jsx("div", {
        className: "p-4 sm:p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl",
        children: e.jsxs("div", {
          className: "relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 group shadow-inner",
          children: [
            e.jsx("img", {
              src: currentImage,
              alt: "视觉链路策划提案 16:9 单图",
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]",
              loading: "eager",
              decoding: "async",
              onError: (t) => {
                const n = t && t.currentTarget;
                if (n && !n.dataset.fallback) {
                  n.dataset.fallback = "1";
                  n.src = n.src.startsWith("/assets/") ? n.src.replace("/assets/", "/") : DEFAULT_IMAGE;
                }
              }
            }),
            e.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"
            }),
            e.jsxs("div", {
              className: "absolute top-3.5 right-3.5 flex items-center gap-2 z-10",
              children: [
                currentImage !== DEFAULT_IMAGE && e.jsxs("button", {
                  onClick: handleReset,
                  className: "px-3 py-1.5 rounded-lg bg-black/75 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all text-xs font-medium flex items-center gap-1 border border-zinc-700/80 cursor-pointer backdrop-blur-md shadow-md",
                  title: "恢复默认图片",
                  children: [
                    e.jsx(RotateCcwIcon, { className: "w-3.5 h-3.5 text-zinc-400" }),
                    e.jsx("span", { children: "恢复默认" })
                  ]
                }),
                e.jsxs("label", {
                  className: "px-3 py-1.5 rounded-lg bg-black/75 hover:bg-[#FFB600] text-zinc-200 hover:text-black transition-all border border-zinc-700/80 hover:border-[#FFB600] text-xs font-bold flex items-center gap-1.5 cursor-pointer backdrop-blur-md shadow-md group/btn",
                  title: "更换 16:9 单图",
                  children: [
                    e.jsx("input", {
                      type: "file",
                      accept: "image/*",
                      className: "hidden",
                      onChange: handleFileChange
                    }),
                    e.jsx(UploadIcon, { className: "w-3.5 h-3.5 text-[#FFB600] group-hover/btn:text-black transition-colors" }),
                    e.jsx("span", { children: "更换图片" })
                  ]
                }),
                e.jsx("button", {
                  onClick: () => setIsFullscreen(true),
                  className: "p-2 rounded-lg bg-black/75 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-700/80 cursor-pointer backdrop-blur-md shadow-md",
                  title: "全屏查看大图",
                  "aria-label": "全屏查看大图",
                  children: e.jsx(MaximizeIcon, { className: "w-4 h-4" })
                })
              ]
            }),
            e.jsxs("div", {
              className: "absolute bottom-3.5 left-3.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-700/80 flex items-center gap-2 pointer-events-none shadow-md",
              children: [
                e.jsx("span", {
                  className: "text-[#FFB600] font-black text-xs tracking-wider",
                  children: "TORETARK"
                }),
                e.jsx("span", { className: "text-zinc-600 text-xs", children: "•" }),
                e.jsx("span", {
                  className: "text-zinc-200 font-bold text-xs",
                  children: "视觉链路策划提案"
                }),
                e.jsx("span", {
                  className: "text-zinc-400 font-mono text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700/60 ml-1",
                  children: "16:9"
                })
              ]
            })
          ]
        })
      }),

      // AI Input Bar (faithful to image.png)
      e.jsxs("div", {
        className: "space-y-3 pt-1",
        children: [
          e.jsxs("div", {
            className: "w-full flex items-stretch shadow-xl",
            children: [
              e.jsx("input", {
                type: "text",
                value: inputVal,
                onChange: (ev) => setInputVal(ev.target.value),
                onKeyDown: (ev) => {
                  if (ev.key === "Enter" && !generating) {
                    handleGenerate();
                  }
                },
                placeholder: "输入Brief中的产品名，一键输出策划提案",
                className: "flex-1 bg-[#404040] hover:bg-[#484848] focus:bg-[#454545] border border-zinc-700/70 focus:border-[#FFB600] px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-zinc-400 focus:outline-none transition-colors rounded-none"
              }),
              e.jsxs("button", {
                onClick: () => handleGenerate(),
                disabled: generating,
                className: "bg-[#FFB600] hover:bg-[#FFB600]/90 active:bg-[#e5a400] text-black font-extrabold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 transition-all flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer rounded-none tracking-wide shadow-md",
                title: "点击一键输出视觉链路策划提案",
                children: [
                  generating ? e.jsx(SparklesIcon, { className: "w-4 h-4 animate-spin text-black" }) : null,
                  e.jsx("span", { children: generating ? "正在生成..." : "输出策划" })
                ]
              })
            ]
          }),

          // Quick selection chips
          e.jsxs("div", {
            className: "flex flex-wrap items-center gap-2 pt-0.5 text-xs text-zinc-400",
            children: [
              e.jsx("span", { className: "text-zinc-500 font-medium", children: "快捷选择 Brief 产品：" }),
              Object.keys(BRIEF_DATABASE).map((pName) => e.jsx("button", {
                key: pName,
                onClick: () => {
                  setInputVal(pName);
                  handleGenerate(pName);
                },
                className: `px-2.5 py-1 text-xs rounded-none border transition-colors cursor-pointer ${
                  inputVal === pName
                    ? "bg-[#FFB600]/20 text-[#FFB600] border-[#FFB600]/60 font-bold"
                    : "bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`,
                children: pName
              }))
            ]
          })
        ]
      }),

      // Generated Proposal Result Container
      currentProposal && e.jsxs("div", {
        className: "p-5 sm:p-7 rounded-2xl border border-zinc-800 bg-[#0d0d10] shadow-2xl space-y-6 animate-in fade-in slide-in-from-top-4 duration-300",
        children: [
          // Header of proposal
          e.jsxs("div", {
            className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4",
            children: [
              e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsxs("span", {
                        className: "text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#FFB600] text-black",
                        children: [currentProposal.sku]
                      }),
                      e.jsx("span", {
                        className: "text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60",
                        children: currentProposal.series
                      }),
                      e.jsxs("span", {
                        className: "text-xs font-bold text-emerald-400 flex items-center gap-1",
                        children: [
                          e.jsx(CheckIcon, { className: "w-3.5 h-3.5" }),
                          "AI 策划方案已就绪"
                        ]
                      })
                    ]
                  }),
                  e.jsxs("h2", {
                    className: "text-lg sm:text-xl font-extrabold text-white flex items-center gap-2",
                    children: [
                      e.jsx("span", { children: `TORETARK ${currentProposal.name} · 全链路视觉策划提案` })
                    ]
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-zinc-400 font-mono",
                    children: [
                      `${currentProposal.enName} · ${currentProposal.capacity} · ${currentProposal.slogan}`
                    ]
                  })
                ]
              }),

              // Export Action Toolbar
              e.jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                  e.jsxs("button", {
                    onClick: handleDownloadMd,
                    className: "px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-[#FFB600] text-zinc-200 hover:text-black font-bold text-xs transition-all flex items-center gap-1.5 border border-zinc-700/80 hover:border-[#FFB600] cursor-pointer shadow-sm group",
                    title: "下载 Markdown 格式 (.md) 策划方案",
                    children: [
                      e.jsx(DownloadIcon, { className: "w-3.5 h-3.5 text-[#FFB600] group-hover:text-black transition-colors" }),
                      e.jsx("span", { children: "下载 Markdown" })
                    ]
                  }),
                  e.jsxs("button", {
                    onClick: handleDownloadDoc,
                    className: "px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold text-xs transition-all flex items-center gap-1.5 border border-zinc-700/80 cursor-pointer shadow-sm",
                    title: "导出 Word 文档 (.doc)",
                    children: [
                      e.jsx(FileTextIcon, { className: "w-3.5 h-3.5 text-zinc-400" }),
                      e.jsx("span", { children: "导出 Word (.doc)" })
                    ]
                  }),
                  e.jsxs("button", {
                    onClick: handleCopy,
                    className: "px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold text-xs transition-all flex items-center gap-1.5 border border-zinc-700/80 cursor-pointer shadow-sm",
                    title: "复制方案全文到剪贴板",
                    children: [
                      copied ? e.jsx(CheckIcon, { className: "w-3.5 h-3.5 text-emerald-400" }) : e.jsx(CopyIcon, { className: "w-3.5 h-3.5 text-zinc-400" }),
                      e.jsx("span", { children: copied ? "已复制" : "复制方案全文" })
                    ]
                  }),
                  e.jsx("button", {
                    onClick: () => setCurrentProposal(null),
                    className: "p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800 cursor-pointer",
                    title: "收起方案",
                    children: e.jsx(XIcon, { className: "w-4 h-4" })
                  })
                ]
              })
            ]
          }),

          // Tab navigation
          e.jsx("div", {
            className: "flex flex-wrap items-center gap-2 border-b border-zinc-800/80 pb-3",
            children: [
              { id: "overview", label: "全案总览与战略定位" },
              { id: "main_images", label: "7张电商主图策划架构" },
              { id: "selling_points", label: "核心卖点视觉实测矩阵" },
              { id: "standards", label: "色彩 / 3D布光 / 交付SOP" },
              { id: "markdown", label: "完整 Markdown 源码" }
            ].map(tab => e.jsx("button", {
              key: tab.id,
              onClick: () => setActiveTab(tab.id),
              className: `px-3.5 py-1.5 text-xs font-bold transition-all rounded-none cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#FFB600] text-black shadow-md"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
              }`,
              children: tab.label
            }))
          }),

          // Tab 1: Overview
          activeTab === "overview" && e.jsxs("div", {
            className: "space-y-5 animate-in fade-in duration-200",
            children: [
              e.jsxs("div", {
                className: "p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2",
                children: [
                  e.jsx("div", { className: "text-xs font-bold text-[#FFB600] uppercase tracking-wider", children: "品牌定位与破局策略" }),
                  e.jsx("p", { className: "text-xs sm:text-sm text-zinc-200 leading-relaxed", children: currentProposal.positioning })
                ]
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  e.jsxs("div", {
                    className: "p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-2",
                    children: [
                      e.jsx("div", { className: "text-xs font-bold text-zinc-300 flex items-center gap-1.5", children: "目标客群画像与心理期望" }),
                      e.jsx("p", { className: "text-xs text-zinc-400 leading-relaxed", children: currentProposal.coreAudience })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-2",
                    children: [
                      e.jsx("div", { className: "text-xs font-bold text-zinc-300 flex items-center gap-1.5", children: "产品核心 Slogan" }),
                      e.jsx("p", { className: "text-xs sm:text-sm font-bold text-[#FFB600] leading-relaxed", children: currentProposal.slogan })
                    ]
                  })
                ]
              }),
              e.jsxs("div", {
                className: "p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-2.5",
                children: [
                  e.jsx("div", { className: "text-xs font-bold text-red-400", children: "解决的核心场景痛点 (Pain Points)" }),
                  e.jsx("ul", {
                    className: "space-y-1.5 text-xs text-zinc-300",
                    children: currentProposal.painPoints.map((pt, i) => e.jsxs("li", {
                      key: i,
                      className: "flex items-start gap-2",
                      children: [
                        e.jsxs("span", { className: "font-mono font-bold text-red-400", children: [`0${i + 1}.`] }),
                        e.jsx("span", { children: pt })
                      ]
                    }))
                  })
                ]
              })
            ]
          }),

          // Tab 2: 7 Main Images
          activeTab === "main_images" && e.jsx("div", {
            className: "space-y-3.5 animate-in fade-in duration-200",
            children: currentProposal.mainImages.map(img => e.jsxs("div", {
              key: img.num,
              className: "p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-3.5",
              children: [
                e.jsxs("div", {
                  className: "w-8 h-8 rounded bg-[#FFB600]/15 text-[#FFB600] border border-[#FFB600]/40 flex items-center justify-center font-mono font-extrabold text-sm shrink-0 mt-0.5",
                  children: [img.num]
                }),
                e.jsxs("div", {
                  className: "space-y-1 min-w-0 flex-1",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("h4", { className: "text-xs sm:text-sm font-bold text-white", children: img.title }),
                        img.num === 1 && e.jsx("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold", children: "亚马逊合规" })
                      ]
                    }),
                    e.jsx("p", { className: "text-xs text-zinc-400 leading-relaxed", children: img.desc })
                  ]
                })
              ]
            }))
          }),

          // Tab 3: Selling Points Matrix
          activeTab === "selling_points" && e.jsx("div", {
            className: "space-y-4 animate-in fade-in duration-200",
            children: currentProposal.sellingPoints.map((sp, idx) => e.jsxs("div", {
              key: idx,
              className: "p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 border-b border-zinc-800/80 pb-2.5",
                  children: [
                    e.jsxs("span", {
                      className: "text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FFB600] text-black",
                      children: [`卖点 0${idx + 1}`]
                    }),
                    e.jsx("h4", { className: "text-xs sm:text-sm font-bold text-white", children: sp.title })
                  ]
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-xs",
                  children: [
                    e.jsxs("div", {
                      className: "p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 space-y-1",
                      children: [
                        e.jsx("div", { className: "text-[11px] font-mono text-[#FFB600] font-bold", children: "技术与功效逻辑" }),
                        e.jsx("p", { className: "text-zinc-300 leading-relaxed", children: sp.desc })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 space-y-1",
                      children: [
                        e.jsx("div", { className: "text-[11px] font-mono text-cyan-400 font-bold", children: "视觉分镜呈现建议" }),
                        e.jsx("p", { className: "text-zinc-300 leading-relaxed", children: sp.visualIdea })
                      ]
                    })
                  ]
                })
              ]
            }))
          }),

          // Tab 4: Standards & SOP
          activeTab === "standards" && e.jsxs("div", {
            className: "space-y-4 animate-in fade-in duration-200",
            children: [
              e.jsxs("div", {
                className: "p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2",
                children: [
                  e.jsx("div", { className: "text-xs font-bold text-[#FFB600]", children: "色彩与字体体系规范" }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
                    children: [
                      e.jsxs("div", {
                        className: "p-2 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-2",
                        children: [
                          e.jsx("div", { className: "w-4 h-4 rounded-full bg-[#FFB600] shrink-0" }),
                          e.jsxs("div", { children: [e.jsx("div", { className: "text-white font-bold text-[11px]", children: "蜂芒耀黄" }), e.jsx("div", { className: "text-zinc-500 font-mono text-[10px]", children: "#FFB600" })] })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "p-2 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-2",
                        children: [
                          e.jsx("div", { className: "w-4 h-4 rounded-full bg-[#0D0D0E] border border-zinc-700 shrink-0" }),
                          e.jsxs("div", { children: [e.jsx("div", { className: "text-white font-bold text-[11px]", children: "曜夜纯黑" }), e.jsx("div", { className: "text-zinc-500 font-mono text-[10px]", children: "#0D0D0E" })] })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "p-2 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-2",
                        children: [
                          e.jsx("div", { style: { backgroundColor: currentProposal.seriesColor }, className: "w-4 h-4 rounded-full shrink-0" }),
                          e.jsxs("div", { children: [e.jsx("div", { className: "text-white font-bold text-[11px]", children: "系列专色" }), e.jsx("div", { className: "text-zinc-500 font-mono text-[10px]", children: currentProposal.seriesColor })] })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "p-2 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-2",
                        children: [
                          e.jsx("div", { className: "w-4 h-4 rounded-full bg-white shrink-0" }),
                          e.jsxs("div", { children: [e.jsx("div", { className: "text-white font-bold text-[11px]", children: "极简纯白" }), e.jsx("div", { className: "text-zinc-500 font-mono text-[10px]", children: "#FFFFFF" })] })
                        ]
                      })
                    ]
                  })
                ]
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",
                children: [
                  e.jsxs("div", {
                    className: "p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2",
                    children: [
                      e.jsx("div", { className: "text-xs font-bold text-white", children: "3D 建模渲染与棚拍布光" }),
                      e.jsx("p", { className: "text-zinc-400 leading-relaxed", children: "采用标准双侧条形柔光箱 (Dual Strip 45°)，在黑色微磨砂瓶身两侧投射笔直高光线，保证标签烫金 Logo 清晰无反光干扰；白底图严格保证 RGB(255,255,255) 并保留 20% 真实接触漫反射阴影。" })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2",
                    children: [
                      e.jsx("div", { className: "text-xs font-bold text-white", children: "交付物标准与归档" }),
                      e.jsx("p", { className: "text-zinc-400 leading-relaxed", children: "输出规范包含 Figma 完整设计稿组件库、分层 PSD 智能对象工程、32-bit EXR 高动态范围渲染原文件、以及多规格 WebP/PNG 高清成品包。" })
                    ]
                  })
                ]
              })
            ]
          }),

          // Tab 5: Raw Markdown
          activeTab === "markdown" && e.jsxs("div", {
            className: "space-y-3 animate-in fade-in duration-200",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2",
                children: [
                  e.jsx("span", { children: "纯文本 Markdown 预览，可直接全选或使用上方复制按钮：" }),
                  e.jsxs("button", {
                    onClick: handleCopy,
                    className: "text-[#FFB600] font-bold hover:underline cursor-pointer flex items-center gap-1",
                    children: [
                      copied ? e.jsx(CheckIcon, { className: "w-3 h-3" }) : e.jsx(CopyIcon, { className: "w-3 h-3" }),
                      copied ? "已复制" : "复制全部文本"
                    ]
                  })
                ]
              }),
              e.jsx("pre", {
                className: "p-4 rounded-xl bg-zinc-950 text-zinc-300 font-mono text-xs overflow-x-auto max-h-96 leading-relaxed whitespace-pre-wrap select-all border border-zinc-800",
                children: buildMarkdownText(currentProposal)
              })
            ]
          })
        ]
      }),

      // Fullscreen modal
      isFullscreen && e.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200",
        onClick: () => setIsFullscreen(false),
        children: e.jsxs("div", {
          className: "relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center",
          onClick: (ev) => ev.stopPropagation(),
          children: [
            e.jsx("div", {
              className: "absolute -top-12 right-0 flex items-center gap-2",
              children: e.jsx("button", {
                onClick: () => setIsFullscreen(false),
                className: "p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-white transition-colors border border-zinc-700 cursor-pointer",
                "aria-label": "关闭",
                children: e.jsx(XIcon, { className: "w-5 h-5" })
              })
            }),
            e.jsx("img", {
              src: currentImage,
              alt: "视觉链路策划提案 16:9 大图",
              className: "w-full max-h-[85vh] object-contain rounded-xl border border-zinc-800 shadow-2xl"
            })
          ]
        })
      })
    ]
  });
};

export { PitchDeck };
