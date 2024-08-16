import { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SideBarTitle } from '../../contextData/contextUtility';
// import { SidebarContext } from '../../context/sidebarContext';
const Sidebar = () => {
  const { setTitle } = useContext(SideBarTitle)
  const [activeLinkIdx] = useState(1);
  const ClickFunction = (title) => {
    console.log("title", title);
    setTitle(title)
  }
  // const [sidebarClass, setSidebarClass] = useState("sidebar-change");
  // const { isSidebarOpen } = useContext(SidebarContext);

  // useEffect(() => {
  //   if(isSidebarOpen){
  //     setSidebarClass('');
  //   } else {
  //     setSidebarClass('sidebar-change');
  //   }
  // }, [isSidebarOpen]);

  return (
    <div className={`sidebar sidebar-change`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_five} alt="profile image" />
        </div>
        <span className="info-name">Nashik First</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {
            navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <Link
                  onClick={ClickFunction(navigationLink.title)}
                  // to={`${navigationLink.urlLink}`} 
                  to={`${navigationLink.urlLink}`} className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}>
                  {/* <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } /> */}
                  <span className="nav-link-text">{navigationLink.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
