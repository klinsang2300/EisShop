'use client'
import { useFormStatus } from "react-dom";
import './Login.css'
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { useTranslations } from "next-intl";
import PasswordInput from "../Passowrd/Password";
import { Link } from "@/i18n/navigation";
export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
    const t = useTranslations('Login')
    const handleToggle = () => {
        setIsChecked(!isChecked)
        console.log(isChecked)
    }
    return (
        <div className="login-container">
            <div className="login-header">
                <h1>SG</h1>
                <h2>{t('Login')} / <Link href="/signup">{t('Sign up')}</Link></h2>
            </div>
            <form>
                <div className="from-menu top">
                    <p>{t('Email')}</p>
                    <div className="box-inut">
                        <input
                            id="Email"
                            name="Email"
                            placeholder="yoer.email@gmail.com"
                        />
                    </div>
                </div>
                <div className="from-menu">
                    <p>{t('Password')}</p>
                 
                        <PasswordInput placeholder="password" idName="passowrd" className="box-inut"/>                   
                         
                </div>
                <div className="box-menu">
                    <div className="box-menu-link">
                        <Link href="/">{t('Forgot')}</Link>
                        <Link href="/signup">{t('Sign up')}</Link>
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
                        <label>{t('Condition1')} <Link href="">{t('Condition2')}</Link> </label>
                    </div>
                </div>
                <div className="box-button">
                    <Summitbutton 
                        ButtonPending=""
                        Buttontext=""
                    />
                </div>
            </form>
        </div>
    )
}
interface ButtonProp{
    Buttontext:string,
    ButtonPending:string
}

export const Summitbutton:React.FC<ButtonProp> = ({Buttontext,ButtonPending}) => {
    const { pending } = useFormStatus();
    return (<button type="submit" disabled={pending}>
        {pending ? 'LOGIN' : 'LOGIN'}
    </button>);
}