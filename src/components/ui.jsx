// IBox: [url, 캡션, type] 튜플 → 이미지/유튜브/동영상 렌더링
// url이 비어 있으면 렌더링 안 함 (빈 이미지 방지)
export function IBox({ img, h = 200, e = "📷", cls = "ibox" }) {
  const [url, caption, type = "image"] = img;
  if (!url) return null;  // 빈 URL이면 렌더링 건너뜀
 
  const media =
    type === "youtube" ? (
      <iframe src={url} title={caption}
        style={{ width:"100%", height:h, border:"none", display:"block" }}
        allowFullScreen />
    ) : type === "video" ? (
      <video src={url} style={{ width:"100%", height:h, objectFit:"cover", display:"block" }}
        controls playsInline />
    ) : (
      <img src={url} alt={caption}
        style={{ height:h, width:"100%", objectFit:"cover", display:"block" }} />
    );
 
  return (
    <div className={cls}>
      {media}
      <div className="icap">{e} {caption}</div>
    </div>
  );
}
 
// Step: "제목 — 설명" 문자열 → 번호 있는 리스트 아이템
function Step({ step, i }) {
  const [lbl, ...rest] = step.split(" — ");
  return (
    <li className="how-item">
      <span className="hnum">0{i + 1}</span>
      <span className="htxt">
        <strong>{lbl}</strong>
        {rest.length > 0 && ` — ${rest.join(" — ")}`}
      </span>
    </li>
  );
}
 
// Steps: how 배열 슬라이스 → ul 리스트
export function Steps({ how, from = 0 }) {
  return (
    <ul className="how-list">
      {how.map((s, i) => <Step key={i} step={s} i={i + from} />)}
    </ul>
  );
}
 
// DBadge: color 하나로 텍스트·테두리·배경 파생
export function DBadge({ children, color }) {
  return (
    <span className="dbadge"
      style={{ color, border:`1px solid ${color}44`, background:`${color}18` }}>
      {children}
    </span>
  );
}