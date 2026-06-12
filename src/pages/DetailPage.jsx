import { IBox, Steps, DBadge } from "../components/ui";
 
export default function DetailPage({ game: g, onBack }) {
  return (
    <div className="page">
 
      {g.cover && (
        <div className="d-banner">
          <img src={g.cover} alt={g.title} />
        </div>
      )}
 
      <div className="inner">
        <div className="d-wrap">
          <button className="back" onClick={onBack}>← 뒤로 가기</button>
 
          <div className="d-title-area">
            <div className="d-game-icon">{g.icon}</div>
            <h1 className="d-title">{g.title}</h1>
            {g.subtitle && <p className="d-sub">{g.subtitle}</p>}
            <div className="d-badges">
              <DBadge color="#93C5FD">{g.genre}</DBadge>
              <DBadge color="#FFD700">★ {g.rating} / 10</DBadge>
              <DBadge color={g.tagColor}>{g.tag}</DBadge>
            </div>
          </div>
 
          <section className="blk">
            <h3 className="blk-title">게임 소개</h3>
            <div className="dsplit">
              <p className="dtxt">{g.description}</p>
              <IBox img={g.imgs[0]} />
            </div>
          </section>
 
          <section className="blk">
            <h3 className="blk-title">게임 방법</h3>
            <Steps how={g.how.slice(0, 2)} />
            <IBox img={g.imgs[1]} h={500} e="🎮" cls="hss" />
            <Steps how={g.how.slice(2)} from={2} />
            {g.imgs[2] && <IBox img={g.imgs[2]} h={500} e="💡" cls="hss" />}
          </section>
        </div>
      </div>
 
    </div>
  );
}