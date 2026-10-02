// =============================================
// MathText
// Save as: src/components/MathText.jsx
//
// Shows maths in questions, options and explanations so it looks right on every phone.
// Many phones have no glyph for characters like ⁴ ⁹ ₇ or ∛ and show empty boxes.
// This turns them into normal digits shown raised or lowered, so they always display.
//
// Understands:
//   x²  a⁴  10⁻⁹        (unicode superscripts)
//   log₇49  x₁          (unicode subscripts)
//   ∛8  ∜16             (cube and fourth roots)
//   x^2  10^-9  e^(2x)  x^{n+1}   (caret powers)
//   log_10  x_{n}       (underscore subscripts, only after a letter or bracket and before a digit)
// Anything else is shown exactly as written.
// =============================================

const SUP_MAP = {
  "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
  "⁺": "+", "⁻": "−", "⁼": "=", "⁽": "(", "⁾": ")", "ⁿ": "n",
}
const SUB_MAP = {
  "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
  "₊": "+", "₋": "−", "₌": "=", "₍": "(", "₎": ")",
}

const PATTERN_SOURCE =
  // 1,2: base char + caret power      3,4: base char + underscore subscript
  "([A-Za-z0-9)\\]])\\^(\\{[^}]+\\}|\\([^)]*\\)|-?[A-Za-z0-9]+(?:\\.\\d+)?)" +
  "|([A-Za-z)\\]])_(\\{[^}]+\\}|\\d+)" +
  // 5: unicode superscripts   6: unicode subscripts   7: cube / fourth root
  "|([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ]+)" +
  "|([₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎]+)" +
  "|(∛|∜)"

const supStyle = {
  fontSize: "0.72em", lineHeight: 0, position: "relative",
  verticalAlign: "baseline", top: "-0.5em", marginLeft: "0.04em",
}
const subStyle = {
  fontSize: "0.72em", lineHeight: 0, position: "relative",
  verticalAlign: "baseline", top: "0.35em", marginLeft: "0.04em",
}

const clean = (s) => {
  let out = s
  if (out.startsWith("{") && out.endsWith("}")) out = out.slice(1, -1)
  else if (out.startsWith("(") && out.endsWith(")")) out = out.slice(1, -1)
  return out.replace(/^-/, "−")
}
const mapChars = (run, map) => run.split("").map(ch => map[ch] || ch).join("")

export default function MathText({ text }) {
  if (text === null || text === undefined) return null
  const str = String(text)

  const re = new RegExp(PATTERN_SOURCE, "g")
  const nodes = []
  let last = 0
  let key = 0
  let m

  while ((m = re.exec(str)) !== null) {
    if (m.index > last) nodes.push(str.slice(last, m.index))

    if (m[2] !== undefined) {
      nodes.push(m[1])
      nodes.push(<sup key={key++} style={supStyle}>{clean(m[2])}</sup>)
    } else if (m[4] !== undefined) {
      nodes.push(m[3])
      nodes.push(<sub key={key++} style={subStyle}>{clean(m[4])}</sub>)
    } else if (m[5] !== undefined) {
      nodes.push(<sup key={key++} style={supStyle}>{mapChars(m[5], SUP_MAP)}</sup>)
    } else if (m[6] !== undefined) {
      nodes.push(<sub key={key++} style={subStyle}>{mapChars(m[6], SUB_MAP)}</sub>)
    } else if (m[7] !== undefined) {
      nodes.push(<sup key={key++} style={supStyle}>{m[7] === "∛" ? "3" : "4"}</sup>)
      nodes.push("√")
    }
    last = m.index + m[0].length
  }

  if (nodes.length === 0) return <>{str}</>
  if (last < str.length) nodes.push(str.slice(last))

  return <>{nodes.map((n, i) => (typeof n === "string" ? <span key={`t${i}`}>{n}</span> : n))}</>
}
