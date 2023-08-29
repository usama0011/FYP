import "../admin/Admin.css"
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';

function AdminPage() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default AdminPage