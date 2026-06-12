import { useMemo } from "react";
import GameCard from "../components/GameCard";
import { Wrap, Header } from "../components/Header";
import { ALL_GAMES } from "../data/games";
 
// 모듈 수준 상수 — ALL_GAMES 는 변하지 않으므로 컴포넌트 밖에 선언
// 컴포넌트 안에 두면 렌더링마다 새 배열이 생성되고
// useMemo 의존 배열에서 누락돼 ESLint exhaustive-deps 경고가 발생함
const ALL_LIST = Object.values(ALL_GAMES);
 
// useMemo로 q가 바뀔 때만 filter 재계산 (불필요한 순회 방지)
// q가 빈 문자열이면 전체 게임 표시
export default function SearchPage({ q, onGameClick }) {
 
  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    return t
      ? ALL_LIST.filter((g) => g.title.toLowerCase().includes(t) || g.genre.toLowerCase().includes(t))
      : ALL_LIST;
  }, [q]);
 
  return (
    <Wrap>
      <div style={{ padding: "64px 0 32px" }}>
        <Header
          kicker="검색"
          title={q.trim() ? <><em>"{q}"</em> 검색 결과</> : "전체 게임"}
          sub={`${results.length}개의 게임`}
        />
      </div>
      {results.length === 0 ? (
        <div className="empty">
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <p>검색 결과가 없습니다</p>
        </div>
      ) : (
        <div className="sg">
          {results.map((g) => <GameCard key={g.id} game={g} onClick={onGameClick} />)}
        </div>
      )}
    </Wrap>
  );
}