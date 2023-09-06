import "./header.css"
import f6 from "./images/f6.jpg"

export default function Header() {
  return (
    <div className="header">
    <div className="headerTitles">
    <span className="headerTitleSm">React & Node</span>
    <span className="headerTitleLg">Blog</span>
    </div>
    <img className="headerImg"
     src={f6}
     alt=""/>

    </div>
  )
}
