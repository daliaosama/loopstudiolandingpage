import menu from '/assets/images/icon-hamburger.svg'
import close from '/assets/images/icon-close.svg'
import facebook from '/assets/images/icon-facebook.svg'
import twitter from '/assets/images/icon-twitter.svg'
import pinterest from'/assets/images/icon-pinterest.svg'
import instagram from '/assets/images/icon-instagram.svg'
import { useState } from "react";
import './App.css'

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [buttoncolor,setButtonColor]= useState(null);
  const [social,setSocial]=useState(null);
  const handleClick = (item) => {
    setSelectedItem(item);
    
  };
  function changeButtonColor(item){
    setButtonColor(item)
  }
  const handleCardClick = (item) => {
    setSelectedCard(item);
  };
  const handleSocialClick=(item)=>{
    setSocial(item)
  }
  const [menuitems, setMenuItems] = useState(false);
  const handleMenu = () => {
    setMenuItems(true);
  }
  const handleMenuClose = () => {
    setMenuItems(false);
  }
  return (
    <main>
      <header>
      <nav>
            <label id="tophead">Loopstudios</label>
           <img src={menu} id="menu" onClick={handleMenu}/>
           {menuitems==true &&(<div id="mainmenu">
            <div id="header">
              <h4>loopstudio</h4>
                <img src={close} onClick={handleMenuClose} style={{cursor:'pointer'}}/>
            </div>
            <ul id="about">
           <li>ABOUT</li>
           <li>CAREERS</li>
           <li>EVENTS</li>
           <li>PRODUCTS</li>
           <li>SUPPORT</li>
            </ul>
           </div>)}
           <ul id="toppage">
            <li  className={selectedItem === "item1" ? "selecteditem" : ""}
                onClick={() => handleClick("item1")}>About</li>
            <li className={selectedItem === "item2" ? "selecteditem" : ""}
            onClick={() => handleClick("item2")}>Careers</li>
            <li className={selectedItem === "item3" ? "selecteditem" : ""}
                onClick={() => handleClick("item3")}>Events</li>
            <li className={selectedItem === "item4" ? "selecteditem" : ""}
                onClick={() => handleClick("item4")}>Products</li>
            <li  className={selectedItem === "item5" ? "selecteditem" : ""}
                onClick={() => handleClick("item5")}>Support</li>
           </ul> 
        </nav>
        <div id="immersive">
            <label className="lab">Immersive </label>
            <label className="lab">experiences</label>
            <label className="lab"> that deliver</label>
        </div>
      </header>
      <div id="middle">
        <div id="left"></div>
        <div id="right">
            <label className="lab1">The leader in </label>
            <label  className="lab1">interactive VR</label>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.</p>
        </div>
    </div>
    <div id="creations">
     <div id="cre">
        <label id="Creations"> Our creations</label>
        <button className={buttoncolor==="item" ? "buttoncolor":""} onClick={() =>changeButtonColor("item")}>SEE ALL</button>
     </div>  
     <div id="create">
        <div className={selectedCard === "item1" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item1")} id="earth" ><div className="Lab"><label className="lab2">Deep earth</label></div></div>
        <div className={selectedCard === "item2" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item2")} id="arcade"><div className="Lab"><label className="lab2">Night arcade</label></div></div>
        <div  className={selectedCard === "item3" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item3")}id="soccer"><div className="Lab"><label className="lab2">Soccer team VR</label></div></div>
        <div className={selectedCard === "item4" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item4")} id="grid"><div className="Lab"><label className="lab2"> The grid</label></div></div>
        <div className={selectedCard === "item5" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item5")} id="vr"><div className="Lab"><label className="lab2">From up above VR</label></div></div>
        <div className={selectedCard === "item6" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item6")} id="pocket"><div className="Lab"><label className="lab2">Pocket borealis</label></div></div>
        <div className={selectedCard === "item7" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item7")} id="curiosity"><div className="Lab"><label className="lab2">The curiosity</label></div></div>
        <div className={selectedCard === "item8" ? "selectedCard" : "crea"}
                onClick={() => handleCardClick("item8")}id="fisheye"><div className="Lab"><label className="lab2">Make it fisheye</label></div></div>
     </div> 
    </div>
    <footer>
    <div id="leftbottom">
        <label id="loop">Loopstudios</label>
        <nav id="bot"><ul><li className={selectedItem === "item1" ? "selecteditem" : ""}
                onClick={() => handleClick("item1")}>About</li>
            <li className={selectedItem === "item2" ? "selecteditem" : ""}
            onClick={() => handleClick("item2")}>Careers</li>
            <li className={selectedItem === "item3" ? "selecteditem" : ""}
                onClick={() => handleClick("item3")}>Events</li>
            <li className={selectedItem === "item4" ? "selecteditem" : ""}
                onClick={() => handleClick("item4")}>Products</li>
            <li className={selectedItem === "item5" ? "selecteditem" : ""}
                onClick={() => handleClick("item5")}>Support</li></ul></nav>
        
    </div>    
    <div id="rightbottom">
        <div id="social">
            <img src={facebook} className={social === "item1" ? "social" : "img"} onClick={()=>handleSocialClick("item1")}/>
            <img src={twitter}className={social === "item2" ? "social" : "img"} onClick={()=>handleSocialClick("item2")}/>
            <img src={pinterest}className={social === "item3" ? "social" : "img"} onClick={()=>handleSocialClick("item3")}/>
            <img src={instagram}className={social === "item4" ? "social" : "img"} onClick={()=>handleSocialClick("item4")}/>
        </div>
       <label id="copyright">&#169; 2021Loopstudios.All rights reserved</label>
    </div>
    </footer>
    </main>
  )
}

export default App
