import {NavLink , Link} from 'react-router-dom';

const Footer =()=>{
    return (

  <footer>
    <div className="footer-container">
      
        <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to='/'>Home</Link></li> 
              <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
        <div className="sec contactBx">
            <h2>Contact Info</h2>
            <ul className="info">
                <li>
                    <span><i className='bx bxs-map'></i></span>
                    <span> Civil Lines <br /> Prayagraj <br /> india</span>
                </li>
                <li>
                    <span><i className='bx bx-envelope' ></i></span>
                    <p><a href="vivekverma4679@gmail.com">vivekverma4679@gmail.com</a></p>
                </li>
            </ul>
        </div>
    </div>
</footer>

)
}
export default Footer;