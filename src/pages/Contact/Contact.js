import React from 'react'
import Banner from '../../components/Banner/Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faMap, faPhone ,faHeart} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import Form from '../../components/Form/Form';
function Contact() {
  return (
   <>
   <Banner title ="Contact" smtitle="contact"/>
   <section className='contact-us'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6'>
<Form/>
            </div>
            <div className='col-lg-6 col-md-6'>
                <div className='side'>
                    <div className='overlay'>
                        <h3>Contact Us For Any Information</h3>
                        <li><FontAwesomeIcon icon={faMap}/>Location</li>
                        <hr/>
                        <p>2005 Stokes Isle Apt. 896, Venaille 10010, USA</p>
                        <li><FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
                        <hr/>
                        <p>sa@gmail.com</p>
                        <p>010215563</p>
                        <li><FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                        <ul>
                             <li><FontAwesomeIcon icon={faHeart}/> </li>
                             <li><FontAwesomeIcon icon={faPhone}/> </li>
                             <li><FontAwesomeIcon icon={faHeart}/> </li>

                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
   </>
  )
}

export default Contact;
