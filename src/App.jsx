import { useState } from "react";
import { CAT_KEYS } from "./data/constants";
import NavBar    from "./components/NavBar";
import HomePage  from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage   from "./pages/DetailPage";
import SearchPage   from "./pages/SearchPage";
import "./styles/global.css";
 
// App: 라우팅 로직과 전역 상태만 담당 — UI 코드 없음
//
// 상태 설계
//   page → 현재 표시 페이지 ("home" | "공포게임" | "MOBA게임" | "RPG게임")
//   game → 상세 보기 중인 게임 객체 (null 이면 상세 페이지 닫힘)
//   prev → 뒤로 가기 시 돌아갈 이전 페이지
//   s    → 검색 상태 { open: boolean, q: string } 통합 객체
export default function App() {
  const [page, setPage] = useState("home");
  const [game, setGame] = useState(null);
  const [prev, setPrev] = useState("home");
  const [s,    setS]    = useState({ open: false, q: "" });
 
  // go: 페이지 이동 — 게임 선택·검색 초기화 후 최상단 스크롤
  const go = (to) => { setPage(to); setGame(null); setS({ open: false, q: "" }); window.scrollTo({ top: 0 }); };
 
  // open: 게임 상세 진입 — 이전 페이지 저장 후 선택 게임 설정
  const open = (g)  => { setPrev(page); setGame(g); setS({ open: false, q: "" }); window.scrollTo({ top: 0 }); };
 
  // back: 상세에서 뒤로 — 저장된 prev 페이지로 복귀
  const back = ()   => { setGame(null); setPage(prev); window.scrollTo({ top: 0 }); };
 
  return (
    <>
      <NavBar s={s} setS={setS} go={go} page={page} game={game} />
 
      {/* 라우팅: 삼항 연산자 체인 (검색 > 상세 > 홈 > 카테고리) */}
      {s.open                    ? <SearchPage  q={s.q} onGameClick={open} />           :
       game                      ? <DetailPage  game={game} onBack={back} />            :
       page === "home"           ? <HomePage    onGameClick={open} />                   :
       CAT_KEYS.includes(page)   ? <CategoryPage catKey={page} onGameClick={open} />   : null}
    </>
  );
}