import { Link } from 'react-router-dom'
import './Socials.css'

const Socials = ({ link1 }) => {

  return (
    <div className='socials-bar'>
        {/* <h4 className='socials-title font-glacial-r'>DIKSUSHI</h4>
        <hr className='socials-hr' /> */}
        <div className="socials-icons">
            <Link to={link1} className="icon color-primary">
              <img src="/instagram.png" alt="" />
            </Link>
            {/* <Link className="icon color-primary">j</Link>
            <Link className="icon color-primary">k</Link> */}
        </div>
    </div>
  )
}

export default Socials