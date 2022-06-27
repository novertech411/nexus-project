import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />

      <div>
        <span className="tage  top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tag bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html"></span>
        </span>
      </div>
    </div>
  )
}

export default Layout
