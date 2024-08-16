import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { SideBarTitleData } from './contextData/contextUtility';

function App() {
  return (
    <>
    <SideBarTitleData>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </SideBarTitleData>
    </>
  )
}

export default App
