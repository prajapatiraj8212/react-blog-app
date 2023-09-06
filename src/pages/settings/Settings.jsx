import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
    <div className="settingsTitle">
    <span className="settingsUpdateTitle">Update Your Account</span>
    <span className="settingsDeleteTitle">Delete Account</span>
    </div>
    <form action="" className="settingsForm">
    <label>Profile Picture</label>
    <div className="settingsPP">
    <img 
    src="https://cdn.pixabay.com/photo/2019/07/09/08/03/boy-4326461_1280.jpg"
    alt="" />
    <label htmlFor="fileInput">
    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
    </label>
    <input type="file" id="fileInput" style={{display:"none"}} />
    </div>
    <label>Username</label>
    <input type="text" placeholder="Your Name"/>
    <label>Email</label>
    <input type="email" placeholder="Your Email"/>
    <label>Password</label>
    <input type="password" />
    <button className="settingsSubmit">Update</button>
    </form>
    </div>
    <Sidebar/>
    </div>
  )
}
