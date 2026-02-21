const User = ()=><div>This is User Page</div>
const Admin = ()=><div>This is Admin Page</div>


const AdminanduserPanel = ({data}:{
  data:"user" | "admin"
}) => {
  // if (data==='user') {
  //   return User()
  // }

  // if (data==='admin') {
  //   return Admin()
  // }

  return data === 'admin' ? Admin() : User()
}

export default AdminanduserPanel
