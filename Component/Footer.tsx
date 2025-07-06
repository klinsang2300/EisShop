import React from "react"
import { BsTelephoneFill } from "react-icons/bs"
import { CiInstagram } from "react-icons/ci"
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
                        <CiInstagram />
                        <p>sg.kpopshop_</p>
                    </div>
                      <div className="ft-contact">
                        <BsTelephoneFill />
                        <p>094-xxx-xxxx</p>
                    </div>
                      <div className="ft-contact">
                        <SiLine/>
                        <p>sg.kpopshop</p>
                    </div>
                      <div className="ft-contact">
                        <BsTelephoneFill />
                        <p>icexxx@xxxxx.com</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer