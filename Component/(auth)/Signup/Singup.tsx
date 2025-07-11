'use client'
import { Link } from "@/i18n/navigation"
import PasswordInput from "../Passowrd/Password"
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { useFormStatus } from "react-dom";
import sty from './Signup.module.css'
import { useTranslations } from "next-intl";
const Singup = () => {
    const [isChecked, setIsChecked] = useState(false);
    const t = useTranslations('Signup')
    const handleToggle = () => {
        setIsChecked(!isChecked)
        console.log(isChecked)
    }
    return (
        <div className={sty.regisContainer}>
            <div className={sty.resiHeader}>
                <h1>SG</h1>
                <h2><Link href="/login">{t('Login')}</Link> / {t('Signup')}</h2>
            </div>
            <form>
                <div className={sty.formBox}>
                    <div className={sty.fromMenu}>
                        <label htmlFor="Email">{t('Email')}<p>(your.email@gmail.com)</p></label>
                        <div className={sty.boxInut}>
                            <input
                                id="Email"
                                name="Email"
                                placeholder="your.email@gmail.com"
                            />
                        </div>
                    </div>
                    <div className={sty.fromMenu}>
                        <label htmlFor="Address">{t('Address')}<p>{t('AddressDetail')}</p> </label>
                        <div className={sty.boxInut}>
                            <input
                                id="Address"
                                name="Address"
                                placeholder={t('Addressplaceholder')}
                            />
                        </div>
                    </div>
                    <div className={`${sty.fromMenu} ${sty.pass}`}>
                        <label htmlFor="password">{t('Password')}<p>(Your password)</p> </label>
                        <PasswordInput placeholder="password" idName="password" className={sty.boxInut} />
                        <label htmlFor="password" className={sty.passDetail}>{t('PasswordCondition')}</label>
                    </div>

                    <div className={sty.fromMenu}>
                        <label htmlFor="province">{t('Province')}</label>
                        <div className={sty.boxInut}>
                            <input
                                id="province"
                                name="province"
                            />
                        </div>
                    </div>
                    <div className={`${sty.fromMenu} ${sty.pass}`}>
                        <label htmlFor="confirm_password">{t('PasswordConfirm')}</label>
                        <PasswordInput placeholder="confirm password" idName="confirm_password" className={sty.boxInut} />
                        <label htmlFor="password" className={sty.passDetail}>{t('PasswordCondition')}</label>
                    </div>


                    <div className={sty.fromMenu}>
                        <label htmlFor="district">{t('District')}</label>
                        <div className={sty.boxInut}>
                            <input
                                id="district"
                                name="district"
                            />
                        </div>
                    </div>

                    <div className={sty.fromMenu}>
                        <label htmlFor="fname">{t('Name')}</label>
                        <div className={sty.boxInut}>
                            <input
                                id="fname"
                                name="fname"
                            />
                        </div>
                    </div>
                    <div className={sty.fromMenu}>
                        <label htmlFor="subdistrict">{t('SubDistrict')}</label>
                        <div className={sty.boxInut}>
                            <input
                                id="subdistrict"
                                name="subdistrict"
                            />
                        </div>
                    </div>
                    <div className={sty.fromMenu}>
                        <label htmlFor="sname">{t('Surname')}</label>
                        <div className={sty.boxInut}>
                            <input
                                id="sname"
                                name="sname"
                            />
                        </div>
                    </div>
                    <div className={sty.fromMenu}>
                        <label htmlFor="postal">{t('PostalCode')}</label>
                        <div className={sty.boxInut}>
                            <input
                                id="postal"
                                name="postal"
                            />
                        </div>
                    </div>
                    <div className={sty.fromMenu}>
                        <label htmlFor="datebirth">{t('Datebirth')}<p>(Month/Day/Year 03/26/1998)</p> </label>
                        <div className={sty.boxInut}>
                            <input
                                id="datebirth"
                                name="datebirth"
                            />
                        </div>
                    </div>
                    <div className={sty.fromMenu}>
                        <label htmlFor="telephone">{t('Telephone')}<p>(094-xxx-xxx)</p></label>
                        <div className={sty.boxInut}>
                            <input
                                id="telephone"
                                name="telephone"
                            />
                        </div>
                    </div>
                    <div className={sty.fromMenu}>
                        <label htmlFor="favorite">{t('Favorite')}</label>
                        <div className={sty.boxInut}>
                            <input
                                id="favorite"
                                name="favorite"
                            />
                        </div>
                    </div>
                </div>

                <div className={sty.boxMenu}>
                    <div className={sty.boxCombobox}>
                        <div className={sty.cmbBox}>
                            <input
                                type="checkbox"
                                name="CheckOn"
                                checked={isChecked}
                                className={sty.inputCheckbox}
                                onChange={handleToggle}
                            />
                            <span className={sty.checkmark}>
                                {isChecked && (<GiCheckMark className={sty.checkIcon} />)}
                            </span>
                        </div>
                        <label>Yes, I hereby consent to <Link href="">the registration and accept all the terms and conditions.</Link> </label>
                    </div>
                </div>



                <div className={sty.boxButton}>
                    <Summitbutton
                        ButtonPending=""
                        Buttontext=""
                    />
                </div>
            </form>
        </div>
    )
}
export default Singup

interface ButtonProp {
    Buttontext: string,
    ButtonPending: string
}

export const Summitbutton: React.FC<ButtonProp> = ({ Buttontext, ButtonPending }) => {
    const { pending } = useFormStatus();
    return (<button type="submit" disabled={pending}>
        {pending ? 'CONFIRM' : 'CONFIRM'}
    </button>);
}