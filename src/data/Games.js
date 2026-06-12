export const ALL_GAMES = {
 
  dbd: {
    id:"dbd", title:"데드 바이 데이라이트", subtitle:"Dead by Daylight",
    genre:"비대칭 호러", rating:"8.4", tag:"공포", tagColor:"#FF4444",
    bg:"linear-gradient(135deg,#0A0010,#1D003A)", icon:"🔪",
    cover:"/images/dbd/dbd-0.png",
    cardImg:"/images/dbd/dbd-0.png",
    imgs: [
      ["/images/dbd/dbd-1.png", "생존자 시점 — 팔레트를 이용해 살인마의 추격을 따돌려야 합니다", "image"],
      ["/images/dbd/dbd-2.png", "살인자 시점 — 생존자를 추격하여 처치하는 것이 목표입니다",     "image"],
      ["/images/dbd/dbd-3.png", "갈고리 — 살인마는 생존자를 갈고리에 걸어야 합니다", "image"],
    ],
    description: "4명의 생존자와 1명의 살인마가 대결하는 공포 비대칭 멀티플레이어 게임. 발전기를 수리하고 탈출구를 열어 살아남거나, 살인마가 되어 모든 생존자를 처단하세요.",
    how: [
      "역할 선택 — 생존자(4인) 또는 살인마(1인) 중 역할을 선택합니다. 두 역할의 목표가 완전히 다릅니다.",
      "발전기 수리 (생존자) — 맵에 흩어진 발전기 5개를 수리하여 탈출구를 열고 탈출하는 것이 목표입니다.",
      "추격과 처치 (살인마) — 생존자들을 추격하여 갈고리에 걸어 희생 의식을 완성하는 것이 목표입니다.",
    ],
  },
 
  lol: {
    id:"lol", title:"리그 오브 레전드", subtitle:"League of Legends",
    genre:"MOBA", rating:"9.2", tag:"MOBA", tagColor:"#60A5FA",
    bg:"linear-gradient(135deg,#0A1128,#1A2A5A)", icon:"⚔️",
    cover: "/images/lol/lol-0.png", 
    cardImg:"/images/lol/lol-0.png",
    imgs: [
      ["/images/lol/lol-1.png", "챔피언 선택 화면", "image"],
      ["/images/lol/lol-2.png", "미니언 처치",    "image"],
      ["/images/lol/lol-3.png", "팀 교전",         "image"],
    ],
    description: "전 세계 1억 명 이상이 즐기는 최고의 MOBA 게임. 160여 명의 챔피언 중 하나를 선택해 5대5 팀 배틀을 펼칩니다.",
    how: [
      "챔피언 선택 — 탑·정글·미드·원딜·서포터 포지션에 맞는 챔피언을 선택합니다.",
      "미니언 처치 — 라인에서 미니언을 처치해 골드와 경험치를 획득하고 챔피언을 강화합니다.",
      "오브젝트 확보 — 드래곤·바론·전령 등 오브젝트를 확보하여 팀 버프를 획득합니다.",
      "넥서스 파괴 — 적 팀 기지인 넥서스를 먼저 파괴하는 팀이 승리합니다.",
    ],
  },
 
  fifa: {
    id:"fifa", title:"EA FC 25 (피파)", subtitle:"EA Sports FC 25",
    genre:"스포츠 시뮬레이션", rating:"8.0", tag:"스포츠", tagColor:"#4ADE80", icon:"⚽",
    cover: "/images/fifa/fifa-0.png",
    cardImg: "/images/fifa/fifa-0.png",  
    imgs: [
      ["/images/fifa/fifa-1.png", "리얼한 피치",    "image"],
      ["/images/fifa/fifa-2.png", "팀 강화", "image"],
      ["/images/fifa/fifa-3.png", "실제와 비슷한 플레이",    "image"],
    ],
    description: "세계 최고의 축구 시뮬레이션 게임. 실제 선수·팀·리그를 담아낸 리얼한 게임으로, Ultimate Team 모드에서 나만의 드림팀을 구성하세요.",
    how: [
      "모드 선택 — 커리어 모드, Ultimate Team, 프로 클럽, 볼타 중 원하는 모드를 선택합니다.",
      "기본 조작 숙달 — 패스·슛·드리블·태클 등 기본 조작을 먼저 충분히 익히세요.",
      "전술 설정 — 포메이션과 팀 전술을 설정하여 자신의 플레이 스타일에 맞게 최적화하세요.",
      "Ultimate Team 빌딩 — 선수 팩 개봉·이적 시장 활용으로 최강의 팀을 완성하세요.",
    ],
  },
 
  pubg: {
    id:"pubg", title:"배틀그라운드", subtitle:"PLAYERUNKNOWN'S BATTLEGROUNDS",
    genre:"배틀로얄", rating:"8.7", tag:"배틀로얄", tagColor:"#FF6B35",icon:"🎯",
    cover: "/images/pubg/pubg-0.png",
    cardImg: "/images/pubg/pubg-0.png",
    imgs: [
      ["/images/pubg/pubg-1.png", "낙하 장면",   "image"],
      ["/images/pubg/pubg-2.png", "아이템 수집", "image"],
      ["/images/pubg/pubg-3.png", "치킨", "image"],
    ],
    description: "100명의 플레이어가 섬에 낙하하여 최후의 1인이 될 때까지 생존을 다투는 배틀로얄 장르의 선구자.",
    how: [
      "낙하 — 비행기에서 뛰어내려 원하는 지점에 낙하합니다. 초반 위치 선택이 매우 중요합니다.",
      "아이템 수집 — 건물에서 무기·방어구·의료품을 빠르게 수집합니다.",
      "자기장 회피 — 점점 좁아지는 안전 구역 안으로 이동하여 자기장 피해를 피합니다.",
      "최후 생존 — 끝까지 살아남아 '치킨'을 획득하세요.",
    ],
  },
 
  maple: {
    id:"maple", title:"메이플스토리", subtitle:"MapleStory",
    genre:"MMORPG", rating:"8.5", tag:"RPG", tagColor:"#A78BFA", icon:"🍁",
    cover: "/images/maple/mp-0.png",
    cardImg: "/images/maple/mp-0.png",
    imgs: [ 
      ["/images/maple/mp-1.png", "직업 선택",   "image"],
      ["/images/maple/mp-2.png", "필드 사냥",   "image"],
      ["/images/maple/mp-3.png", "보스 레이드", "image"],
    ],
    description: "20년 이상의 역사를 가진 국민 MMORPG. 귀엽고 아기자기한 2D 그래픽과 다양한 직업, 풍부한 콘텐츠로 전 세계 수천만 명의 사랑을 받고 있습니다.",
    how: [
      "직업 선택 — 전사·마법사·궁수·도적·해적 계열 수십 가지 직업 중 자신에게 맞는 직업을 선택합니다.",
      "퀘스트와 사냥 — 메인 퀘스트를 통해 스토리를 진행하며 레벨을 올리고, 사냥터에서 몬스터를 처치해 경험치를 획득합니다.",
      "보스 레이드 — 강력한 보스를 공략하여 고급 장비 재료를 획득하고 캐릭터를 강화합니다.",
      "소셜 & 길드 — 길드 가입·파티 플레이·각종 이벤트 등 다양한 소셜 콘텐츠를 즐기세요.",
    ],
  },
 
  amnesia: {
    id:"amnesia", title:"암네시아: 더 벙커", subtitle:"Amnesia: The Bunker",
    genre:"서바이벌 호러", rating:"7.8", tag:"공포", tagColor:"#FF4444",icon:"🕯️",
    cover: "/images/amnesia/asia-0.png",
    cardImg: "/images/amnesia/asia-0.png",
    imgs: [
      ["/images/amnesia/asia-1.png", "어둠 속 탐색", "image"],
      ["/images/amnesia/asia-2.png", "벙커 구조",    "image"],
      ["/images/amnesia/asia-3.png", "괴물 회피",    "image"],
    ],
    description: "1차 세계대전 벙커를 배경으로 손전등 하나에 의지해 어둠 속 괴물을 피하며 탈출해야 하는 극한의 공포 생존 게임.",
    how: [
      "연료 관리 — 손전등 연료는 한정적입니다. 발전기를 가동해 전력을 공급하고 연료를 아껴 사용하세요.",
      "소음 최소화 — 괴물은 소리에 반응합니다. 달리거나 물건을 떨어뜨리면 주의를 끌게 됩니다.",
      "탐색과 단서 수집 — 벙커 곳곳을 탐색하여 탈출에 필요한 코드와 열쇠를 찾아야 합니다.",
      "임기응변 — 폭발물·총기 등 주변 물건들을 활용하여 위기 상황을 돌파하세요.",
    ],
  },
 
  l4d: {
    id:"l4d", title:"레프트 포 데드 2", subtitle:"Left 4 Dead 2 (레포데)",
    genre:"협동 FPS 호러", rating:"9.0", tag:"공포", tagColor:"#FF4444", icon:"🧟",
    cover: "/images/14d/14-0.png",
    cardImg: "/images/14d/14-0.png",
    imgs: [
      ["/images/14d/14-1.png", "4인 협동",    "image"],
      ["/images/14d/14-2.png", "특수 감염자", "image"],
      ["/images/14d/14-3.png", "마지막까지 생존",   "image"],
    ],
    description: "4명의 생존자가 좀비 아포칼립스에서 협력하여 탈출하는 협동 FPS의 고전. AI '디렉터' 시스템이 매 게임마다 새로운 경험을 제공합니다.",
    how: [
      "팀 협력 — 4명이 항상 뭉쳐 다녀야 합니다. 혼자 앞서 나가면 특수 감염자에게 당할 수 있습니다.",
      "특수 감염자 처리 — 헌터·스모커·부머·탱크 등 특수 감염자를 우선적으로 처치합니다.",
      "보급품 관리 — 의료 키트·진통제·탄약을 팀원들과 적절히 분배하여 사용하세요.",
      "안전 지대 도달 — 각 챕터 끝에 있는 안전 지대까지 살아서 도달하는 것이 목표입니다.",
    ],
  },
 
  supernatural: {
    id:"supernatural", title:"슈퍼네츄럴 (Phasmophobia)", subtitle:"Phasmophobia",
    genre:"공포 수사", rating:"8.6", tag:"공포", tagColor:"#FF4444", icon:"👻",
    cover: "/images/supernatural/super-0.png",
    cardImg: "/images/supernatural/super-0.png",
    imgs: [
      ["/images/supernatural/super-1.png", "조사 장비", "image"],
      ["/images/supernatural/super-2.png", "유령 출몰", "image"],
      ["/images/supernatural/super-3.png", "유령 일지", "image"],
    ],
    description: "유령을 조사하고 종류를 파악하는 1~4인 협동 공포 게임. 실제 음성 인식으로 유령을 직접 불러낼 수 있습니다.",
    how: [
      "계약 선택 — 난이도와 맵을 선택하고 조사를 시작합니다. 초보는 아마추어 난이도를 추천합니다.",
      "장비 활용 — EMF 리더·유령 필기 책·영하 온도계 등 장비로 유령의 증거 3개를 수집합니다.",
      "유령 유형 파악 — 수집한 증거 3개를 조합하여 일지에서 유령의 종류를 파악합니다.",
      "생존 — 유령이 사냥 모드에 진입하면 숨거나 도망치세요. 소금과 성수가 도움이 됩니다.",
    ],
  },
 
  dota2: {
    id:"dota2", title:"도타 2", subtitle:"Dota 2",
    genre:"MOBA", rating:"8.9", tag:"MOBA", tagColor:"#60A5FA",icon:"🏆",
    cover: "/images/dota2/dt-0.png",
    cardImg: "/images/dota2/dt-0.png",
    imgs: [
      ["/images/dota2/dt-1.png", "영웅 선택",  "image"],
      ["/images/dota2/dt-2.png", "로샨 공략", "image"],
      ["/images/dota2/dt-3.png", "교전을 통한 승리",  "image"],
    ],
    description: "120명 이상의 영웅으로 5대5 전략 배틀을 펼치는 최고 난이도의 MOBA 게임. 세계 최대 e스포츠 대회 The International의 주종목입니다.",
    how: [
      "영웅 선택 — 자신의 역할(캐리·서포터·오프레인)에 맞는 영웅을 선택합니다.",
      "라스트 히트 — 적 크립을 마지막 타격하여 골드를 효율적으로 획득합니다.",
      "로샨 공략 — 로샨을 처치하면 팀 전체에 유리한 아이템을 획득할 수 있습니다.",
      "엔시언트 파괴 — 적 기지의 엔시언트를 파괴하면 승리합니다.",
    ],
  },
 
  eternal: {
    id:"eternal", title:"이터널 리턴", subtitle:"Eternal Return",
    genre:"배틀로얄 MOBA", rating:"7.9", tag:"MOBA", tagColor:"#60A5FA",icon:"🧪",
    cover: "/images/eternal/et-0.png",
    cardImg: "/images/eternal/et-0.png",
    imgs: [
      ["/images/eternal/et-1.png", "실험체 선택", "image"],
      ["/images/eternal/et-2.png", "아이템 제작", "image"],
      ["/images/eternal/et-3.png", "생존 교전",   "image"],
    ],
    description: "한국산 배틀로얄 MOBA 게임. 루미아 섬에서 18명의 실험체가 생존을 위해 싸우며, 크래프팅 시스템과 MOBA 스타일 전투가 결합된 독특한 장르입니다.",
    how: [
      "실험체 선택 — 각기 다른 특성을 가진 실험체(캐릭터)를 선택합니다. 초보는 쉬운 등급을 추천합니다.",
      "루트 설정 — 필요한 제작 아이템을 수집하기 위한 이동 경로를 미리 계획합니다.",
      "아이템 제작 — 수집한 재료로 무기와 방어구를 제작하여 캐릭터를 강화합니다.",
      "생존과 교전 — 제한 구역을 피하며 다른 플레이어와 교전하여 최후의 생존자가 되세요.",
    ],
  },
 
  yeonyun: {
    id:"yeonyun", title:"연운: 십육성", subtitle:"Where Winds Meet",
    genre:"오픈 월드 액션 RPG", rating:"8.3", tag:"RPG", tagColor:"#F59E0B",icon:"🌸",
    cover: "/images/yeonyun/yn-0.png",
    cardImg: "/images/yeonyun/yn-0.png",
    imgs: [
      ["/images/yeonyun/yn-1.png", "자유로운 플레이가 가능한 월드맵",   "image"],
      ["/images/yeonyun/yn-2.png", "고대 도시",   "image"],
      ["/images/yeonyun/yn-3.png", "보스 대결", "image"],
    ],
    description: "중국 오대십국 시대를 배경으로 한 오픈 월드 액션 RPG. 광활한 강호 세계를 자유롭게 누비며 다양한 무공을 익히고 복잡한 정치적 음모를 헤쳐나가는 역작입니다.",
    how: [
      "무공 수련 — 다양한 무공 체계를 습득하여 자신만의 전투 스타일을 완성하세요.",
      "강호 탐험 — 광활한 오픈 월드를 탐험하며 숨겨진 비경과 NPC를 발견하세요.",
      "관계 형성 — NPC들과 관계를 쌓아 특별한 퀘스트와 보상을 얻을 수 있습니다.",
      "세력 선택 — 게임 내 여러 세력 중 하나를 선택하여 진영별 스토리를 진행하세요.",
    ],
  },
 
  aion2: {
    id:"aion2", title:"아이온 2", subtitle:"AION 2",
    genre:"비행 MMORPG", rating:"7.5", tag:"RPG", tagColor:"#F59E0B",icon:"👼",
    cover: "/images/aion2/aion2-0.png",
    cardImg: "/images/aion2/aion2-0.png",  
    imgs: [
      ["/images/aion2/aion2-1.png", "비행 전투",  "image"],
      ["/images/aion2/aion2-2.png", "직업 선택", "image"],
      ["/images/aion2/aion2-3.png", "공성전",     "image"],
    ],
    description: "날개 달린 캐릭터로 하늘을 자유롭게 나는 비행 MMORPG의 귀환. 아이온(빛)과 아스모디안(어둠)의 대립을 새로운 그래픽과 시스템으로 재현한 기대작입니다.",
    how: [
      "종족 선택 — 아이온(빛의 종족)과 아스모디안(어둠의 종족) 중 하나를 선택합니다.",
      "직업 육성 — 전사·정찰자·마법사·사제 중 직업을 선택하고 스킬을 육성합니다.",
      "비행 전투 — 날개를 펼쳐 공중에서 전투를 펼치는 아이온만의 독특한 전투를 즐기세요.",
      "공성전 참여 — 대규모 공성전에 참여하여 요새를 점령하고 보상을 획득하세요.",
    ],
  },
 
  lostark: {
    id:"lostark", title:"로스트아크", subtitle:"Lost Ark",
    genre:"ARPG MMORPG", rating:"8.6", tag:"RPG", tagColor:"#F59E0B",icon:"⚓",
    cover: "/images/lostark/lostark-0.png",
    cardImg: "/images/lostark/lostark-0.png",
    imgs: [
      ["/images/lostark/lostark-1.png", "클래스 선택", "image"],
      ["/images/lostark/lostark-2.png", "화려한 스킬", "image"],
      ["/images/lostark/lostark-3.png", "레이드 공략", "image"],
    ],
    description: "Smilegate RPG가 개발한 쿼터뷰 ARPG 스타일 MMORPG. 화려한 스킬 이펙트와 탄탄한 스토리, 고난도 레이드 콘텐츠로 국내외 수천만 명이 즐기는 게임입니다.",
    how: [
      "클래스 선택 — 각각 고유한 전투 스타일을 가진 다양한 클래스 중 자신에게 맞는 것을 선택합니다.",
      "스토리 진행 — 아크라시아 대륙을 여행하며 7개의 아크를 찾는 메인 스토리를 완료합니다.",
      "아이템 레벨 향상 — 장비 강화·보석·카드 세팅 등으로 아이템 레벨을 높여 더 어려운 레이드에 도전합니다.",
      "군단장 레이드 — 고난도 군단장 레이드를 공략하여 최고 등급 장비를 획득하세요.",
    ],
  },
 
  elden: {
    id:"elden", title:"엘든링", subtitle:"ELDEN RING",
    genre:"오픈 월드 액션 RPG", rating:"9.6", tag:"RPG", tagColor:"#F59E0B",icon:"💀",
    cover: "/images/elden/elden-0.png",
    cardImg: "/images/elden/elden-0.png",
    imgs: [
      ["/images/elden/elden-1.png", "인터 어스 탐험", "image"],
      ["/images/elden/elden-2.png", "보스 전투",      "image"],
      ["/images/elden/elden-3.png", "토레트 질주",    "image"],
    ],
    description: "프롬소프트웨어와 조지 R.R. 마틴이 협업한 오픈 월드 액션 RPG의 걸작. 극한의 도전과 깊은 세계관으로 가득한 역대 최고 평가 게임 중 하나입니다.",
    how: [
      "시작 클래스 선택 — 초보자는 영웅이나 방랑자 클래스를 추천합니다. 다양한 빌드의 시작점이 됩니다.",
      "탐험 우선 — 막히는 보스가 있다면 다른 지역을 탐험하여 더 강해진 뒤 다시 도전하세요.",
      "패링과 회피 — 적의 공격 타이밍에 맞춰 패링하거나 굴러서 회피하는 것이 전투 핵심입니다.",
      "레거시 던전 공략 — 스톰빌 성·레아니아 주술탑 등 레거시 던전에서 메인 보스를 처치하세요.",
    ],
  },
};
 
export const LISTS = {
  popular:  ["dbd","lol","fifa","pubg","maple"],
  공포게임: ["dbd","amnesia","l4d","supernatural"],
  MOBA게임: ["lol","dota2","eternal"],
  RPG게임:  ["yeonyun","aion2","maple","lostark","elden"],
};
 
export const CATS = {
  공포게임: { icon:"👻", color:"#FF4444", bg:"rgba(255,68,68,.08)" },
  MOBA게임: { icon:"⚔️", color:"#60A5FA", bg:"rgba(96,165,250,.08)" },
  RPG게임:  { icon:"🏆", color:"#F59E0B", bg:"rgba(245,158,11,.08)" },
};
 
export const gamesOf = (key) => LISTS[key].map((id) => ALL_GAMES[id]);