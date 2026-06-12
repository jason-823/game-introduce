import { RANK_CLR } from "../data/constants";
 
// rank prop이 있으면 우상단에 순위 배지 표시 (홈 페이지 전용) 
// cardImg 있으면 이미지, 없으면 bg 그라디언트로 폴백
// opacity 값으로 이미지 밝기 조절 (0.0~1.0, 권장 0.45~0.6)
export default function GameCard({ game: g, rank, onClick }) {
  return (
    <div className="gcard" onClick={() => onClick(g)}>
      <div className="gcard-bg" style={{ background: g.bg }}>
        {g.cardImg && (
          <img src={g.cardImg} alt={g.title}
            style={{ width:"100%", height:"100%", objectFit:"cover", opacity:0.5 }} />
        )}
      </div>
      <div className="gcard-overlay" />
      <div className="gcard-body">
        <div className="gtag" style={{ color:g.tagColor, borderColor:g.tagColor }}>{g.tag}</div>
        {rank != null && <div className="rnum" style={{ color:RANK_CLR[rank] }}>{rank+1}위</div>}
        <div className="gicon">{g.icon}</div>
        <div className="gtitle">{g.title}</div>
        <div className="gsub">{g.subtitle}</div>
        <div className="gmeta">
          <span className="gg">{g.genre}</span>
          <span className="gr">★ {g.rating}</span>
        </div>
        <div className="gmore">자세히 보기 →</div>
      </div>
    </div>
  );
}
