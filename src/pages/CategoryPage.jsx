import GameCard from "../components/GameCard";
import { Wrap, Header } from "../components/Header";
import { CATS, gamesOf } from "../data/games";
 
// catKey("공포게임" 등) 하나로 CATS·LISTS를 조회해 동적 렌더링
// 같은 컴포넌트로 3개 카테고리를 모두 처리
export default function CategoryPage({ catKey, onGameClick }) {
  const { icon, color, bg } = CATS[catKey];
  const gs = gamesOf(catKey);
 
  return (
    <Wrap>
      <div className="cat-hero">
        <span style={{ fontSize: 52 }}>{icon}</span>
        <div>
          <Header
            kicker="카테고리"
            title={<span style={{ fontFamily: "'Black Han Sans',sans-serif", color }}>{catKey}</span>}
            size={32}
          />
          <span className="cpill" style={{ color, borderColor: color, background: bg }}>
            총 {gs.length}개의 게임
          </span>
        </div>
      </div>
      <div className="cat-grid">
        {gs.map((g) => <GameCard key={g.id} game={g} onClick={onGameClick} />)}
      </div>
    </Wrap>
  );
}