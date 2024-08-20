import './App.css';
import SidebarMenu from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { SideBarTitleData } from './contextData/contextUtility';

function App() {
  return (
    <>
    <SideBarTitleData>
      <div className='app'>
        <SidebarMenu />
        <Content />
      </div>
    </SideBarTitleData>
    </>
  )
}

export default App
