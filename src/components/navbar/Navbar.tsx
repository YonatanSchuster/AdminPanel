import './navbar.scss'

 const Navbar = () => {
  return (
    <div className='navbar'>Admin
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin</span>
        <div className="icons">
        <img src="/search.svg" alt="" className='icon'/>
          <img src="/app.svg" alt="" className='icon'/>
          <img src="/expand.svg" alt="" className='icon'/>
          <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
          </div>
          <div className="user">
          <img src="https://media.licdn.com/dms/image/D4D03AQENbJaINo5qQg/profile-displayphoto-shrink_100_100/0/1668330743256?e=1696464000&v=beta&t=JVLNgRpvLa1dMjDVmh0UKxMiR8srUhUT6PHiaGegaW4" alt="" className='icon'/>  
          <span>Yonatan</span>
          </div>
          <img src="/settings" alt="" className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar