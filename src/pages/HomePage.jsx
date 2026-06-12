import GameCard from "../components/GameCard";
import { Wrap, Header } from "../components/Header";
import { gamesOf } from "../data/games";
 
// 히어로 배경 이미지 경로 — public/images/hero-bg.png 에 파일 넣기
const HERO_IMG = "/images/hero-bg.png";
 
export default function HomePage({ onGameClick }) {
  const gs = gamesOf("popular");
  return (
    <>
      {/* ── 히어로 섹션 ── */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">🎮 &nbsp; GAMEVERSE &nbsp; 🎮</p>
          <h1 className="hero-title">
            <em>당신의 다음 게임</em>을<br />찾아보세요
          </h1>
          <p className="hero-sub">인기게임부터 장르별 추천까지, 최고의 게임들을 소개합니다</p>
          <button className="hero-btn" onClick={() => {
            document.getElementById("ranking").scrollIntoView({ behavior: "smooth" });
          }}>
            인기게임 순위 보기 →
          </button>
        </div>
        <div className="scroll-hint">
          <span>SCROLL</span>
          <span>↓</span>
        </div>
      </section>
 
      {/* ── 랭킹 섹션 ── */}
      <div id="ranking">
        <Wrap>
          <div style={{ padding: "64px 0 80px" }}>
            <Header
              kicker="LIVE RANKING"
              title={<><em>인기게임</em> 순위 TOP 5</>}
              sub="현재 가장 많이 플레이되고 있는 인기 게임 순위입니다"
              style={{ marginBottom: 40 }}
            />
            <div className="rank-top">
              {gs.slice(0, 2).map((g, i) => (
                <GameCard key={g.id} game={g} rank={i} onClick={onGameClick} />
              ))}
            </div>
            <div className="rank-bot">
              {gs.slice(2).map((g, i) => (
                <GameCard key={g.id} game={g} rank={i + 2} onClick={onGameClick} />
              ))}
            </div>
          </div>
        </Wrap>
      </div>
    </>
  );
}