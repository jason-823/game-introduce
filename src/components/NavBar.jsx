import { useState, useEffect, useRef } from "react";
import { CAT_KEYS } from "../data/constants";
import { CATS } from "../data/games";
 
// 클릭으로 열고 닫는 드롭다운
// CSS :hover 방식은 버튼과 메뉴 사이 빈 틈에서 hover가 끊겨 클릭이 안 됨
function NavDD({ active, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
 
  // 드롭다운 바깥 클릭 시 닫기
  useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);
 
  return (
    <div className="ddwrap" ref={ref}>
      {/* 버튼 클릭으로 드롭다운 열기/닫기 */}
      <button
        className={`nbtn${active ? " on" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        카테고리 {open ? "▴" : "▾"}
      </button>
 
      {/* open 이 true 일 때만 렌더링 */}
      {open && (
        <div className="ddmenu ddmenu--open">
          {CAT_KEYS.map((k) => (
            <button
              key={k}
              className="dditem"
              onClick={() => {
                onSelect(k);  // 페이지 이동
                setOpen(false); // 드롭다운 닫기
              }}
            >
              {CATS[k].icon} {k}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
 
export default function NavBar({ s, setS, go, page, game }) {
  const isCat  = (k) => !game && !s.open && page === k;
  const isHome = !game && !s.open && page === "home";
 
  return (
    <nav className="nav">
      <div className="logo" onClick={() => go("home")}>GAMEVERSE</div>
 
      {s.open ? (
        <div className="sbar" style={{ flex: 1 }}>
          <span style={{ color: "rgba(148,163,184,.4)", fontSize: 14 }}>🔍</span>
          <input
            autoFocus
            placeholder="게임 이름, 장르로 검색..."
            value={s.q}
            onChange={(e) => setS((p) => ({ ...p, q: e.target.value }))}
            onKeyDown={(e) => e.key === "Escape" && setS({ open: false, q: "" })}
          />
          <button className="xbtn" onClick={() => setS({ open: false, q: "" })}>✕</button>
        </div>
      ) : (
        <>
          <div className="nav-links">
            <button
              className={`nbtn${isHome ? " on" : ""}`}
              onClick={() => go("home")}
            >
              홈 · 인기게임
            </button>
            <NavDD active={CAT_KEYS.some(isCat)} onSelect={go} />
          </div>
          <button className="icon-btn" onClick={() => setS({ open: true, q: "" })}>🔍</button>
        </>
      )}
    </nav>
  );
}