'use client'
import Image from "next/image"
import React, { useState } from "react"
interface PasswordInputProp{
    placeholder :string
    idName:string
    className:string
}

const PasswordInput:React.FC<PasswordInputProp> = ({placeholder,idName,className}) => {
    const [isShowPassword, setisShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const IsToggleShow = () => {
        setisShowPassword(!isShowPassword);

    }

    return (
        <div className={className}>
            <input
                type={isShowPassword ? 'text' : 'Password'}
                id={idName}
                name={idName}
                placeholder={placeholder}
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <div className="visible-box" onClick={IsToggleShow}>
                <Image src={`/${isShowPassword ? 'visible.png' : 'invisible.png'}`}
                    alt={idName}
                    width={21}
                    height={21}
                />
            </div>

        </div>
    )
}
export default PasswordInput