import "../admin/Admin.css"
import Content from './layout/Content/Content';
import Sidebar from "./layout/Sidebar/Sidebar";

function AdminPage() {
  return (
    <>
      <div className='app'>
        <Sidebar/>
        <Content />
      </div>
    </>
  )
}

export default AdminPage