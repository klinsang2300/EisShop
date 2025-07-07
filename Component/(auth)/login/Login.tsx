'use client'
import Link from "next/link";
import { useFormStatus } from "react-dom";
import './Login.css'
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked)
        console.log(isChecked)
    }
    return (
        <div className="login-container">
            <div className="login-header">
                <h1>SG</h1>
                <h2>Log in / <Link href="/">Sign up</Link></h2>
            </div>
            <form>
                <div className="from-menu">
                    <p>Email</p>
                    <div className="box-inut">
                        <input
                            id="Email"
                            name="Email"
                            placeholder="yoer.email@gmail.com"

                        />
                    </div>
                </div>
                <div className="from-menu">
                    <p>Password</p>
                    <div className="box-inut">
                        <input
                            id="Password"
                            name="Password"
                            placeholder="password"
                            type="password"
                        />
                    </div>
                </div>
                <div className="box-menu">
                    <div className="box-menu-link">
                        <Link href="/">Foget Password?</Link>
                        <Link href="/">Sing up</Link>
                    </div>
                    <div className="box-combobox">
                        <div className="cmb-box">
                            <input
                                type="checkbox"
                                name="CheckOn"
                                checked={isChecked}
                                className="input-checkbox"
                                onChange={handleToggle}
                            />
                            <span className="checkmark">
                                {isChecked && (<GiCheckMark className="checkIcon" />)}
                            </span>
                        </div>
                        <label>Yes, I agree to <Link href="">all the terms and conditions</Link> </label>
                    </div>
                </div>
                <div className="box-button">
                    <Summitbutton />
                </div>
            </form>
        </div>
    )
}

export const Summitbutton = () => {
    const { pending } = useFormStatus();
    return (<button type="submit" disabled={pending}>
        {pending ? 'LOGIN' : 'LOGIN'}
    </button>);
}