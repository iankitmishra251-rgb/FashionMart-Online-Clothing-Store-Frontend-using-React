import { faCartShopping, faClose, faHeart, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <div className='navbar1'>
        {/* Nav Header */}
        <nav className='navbarContainer'>
          <span className='text-truncate'>Welcome to Our Store FashionMart</span>
          <span className='text-truncate'>
            <FontAwesomeIcon icon={faPhone} />
            <span className='ms-2'>Call Us: 1234567890</span>
          </span>
        </nav>
      </div>
      {/* Nav Main */}
      <nav className='mainNav'>
        <div>
          <img src='/assets/images/hamburgur.png'
            onClick={toggleDrawer}
            style={{
              cursor: 'pointer',
              width: '30px',
              height: '30px'
            }} />
        </div>
        <div className='text-center text-brown w-100 playfair' style={{
          fontSize: 20,
        }}>Fashion<strong>Mart</strong></div>
        <div className='mainNavLinks'>
          <Link><img src="/assets/images/icons/Frame-3.png" height={20} width={20} /></Link>
          <Link><img src="/assets/images/icons/Frame-2.png" height={20} width={20} /></Link>
          <Link><img src="/assets/images/icons/Frame-1.png" height={20} width={20} /></Link>
          <Link><img src="/assets/images/icons/Frame.png" height={20} width={20} /></Link>
        </div>
      </nav>
      {/* Drawer */}
      <div className="drawer" style={{
        transform: showDrawer ? "translateX(0)" : "translateX(-100%)"
      }}>
        <div className='drawerHeader d-flex justify-content-between align-items-center p-4'>
          <span className='drawerTitle text-white'>Menu</span>
          <span className='closeDrawer text-white' style={{ cursor: "pointer" }} onClick={toggleDrawer}><FontAwesomeIcon fontSize={'30px'} icon={faClose} /></span>
        </div>
        <div className='drawerLinks d-flex flex-column align-items-center justify-content-center h-100'>
          <Link to={'/'} onClick={toggleDrawer}>Home</Link>
          <Link to={'/products'} onClick={toggleDrawer}>Products</Link>
          <Link to={'/about-us'} onClick={toggleDrawer}>About Us</Link>
          <Link to={'/contact-us'} onClick={toggleDrawer}>Contact Us</Link>
        </div>
      </div>
    </>

  )
}

export default Navbar
