// 모든 페이지에서 반복되는 .page > .inner 구조를 한 줄로 압축
export function Wrap({ children }) {
  return <div className="page"><div className="inner">{children}</div></div>;
}
 
// kicker(소제목) + title(큰제목) + sub(설명) 패턴 재사용
// size prop으로 fontSize 동적 조절 (홈=38, 카테고리=32 등)
export function Header({ kicker, title, sub, size = 38, style }) {
  return (
    <div style={style}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="s-title" style={{ fontSize: size }}>{title}</h2>
      {sub && <p className="s-sub">{sub}</p>}
    </div>
  );
}