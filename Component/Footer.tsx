import React from "react"

import { FaPhoneAlt } from "react-icons/fa"
import {  FaInstagram, FaPhone } from "react-icons/fa6"
import { SiLine } from "react-icons/si"

const Footer: React.FC = () => {
    return (
        <footer >
            <div className="ft-Logo">
                <p>SG</p>
            </div>
            <div className="ft-contact-main">
                <p>CONTACT</p>
                <div className="ft-contact-box">
                    <div className="ft-contact">
                        <div className="ft-contact-img">
                            <FaInstagram/>
                        </div>

                        <p>sg.kpopshop_</p>
                    </div>
                    <div className="ft-contact">
                        <div className="ft-contact-img">   <FaPhone /></div>

                        <p>094-xxx-xxxx</p>
                    </div>
                    <div className="ft-contact">
                        <div className="ft-contact-img"><SiLine /></div>

                        <p>sg.kpopshop</p>
                    </div>
                    <div className="ft-contact">
                        <div className="ft-contact-img"> <FaPhoneAlt /></div>

                        <p>icexxx@xxxxx.com</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer