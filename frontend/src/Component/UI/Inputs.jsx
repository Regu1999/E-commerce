import Input from "./Input";
import './checkBoxStyle.css'
import { useEffect, useRef } from "react";

export const TextFeild = ({ lableName, inputId, placeholder, register, errors }) => {
    let validation = {
        required: 'This feild is required',
    }

    return <Input lableName={lableName}
        inputId={inputId}
        placeholder={placeholder}
        validation={validation}
        register={register}
        errors={errors}
    />
}

export const EmailFeild = ({ register, errors }) => {
    let validation = {
        required: 'Email is required',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address'
        }
    }

    return <Input lableName={"Email"}
        inputId={"email"}
        type="email"
        placeholder="demo@mail.com"
        validation={validation}
        register={register}
        errors={errors}
    />
}

export const PasswordFeild = ({ register, errors, loginMode, newPwd }) => {
    let confPwdValidate = {
        validate: value => value === newPwd || 'Password do not match'
    }

    let validation = {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: "Minumum 8 cheracter required"
        },
        ...(!loginMode && confPwdValidate)
    }

    return <Input lableName={loginMode ? "Password" : "Conform Password"}
        inputId={"password"}
        type="password"
        placeholder="enter your passowrd "
        validation={validation}
        register={register}
        errors={errors}
    />
}

export const CheckBox = ({ inputName, type, handleIsUpdated, checkedArray }) => {
    const checkbox = useRef();
    useEffect(() => {
        if (checkbox.current && checkbox.current.checked === false) {
            checkbox.current.checked = checkedArray.includes(inputName);
        }
    }, [checkedArray])
    return <div className="">
        <input type="checkbox" ref={checkbox} name={type} id={inputName} value={inputName} className="me-1 hidden" onChange={() => handleIsUpdated(inputName)} />
        <label htmlFor={inputName} className={`shadow bg-white select-none min-w-16 inline-block px-2 text-center  text-sm p-1 rounded-xl cursor-pointer hover:scale-105 `}>
            {inputName}
        </label>
    </div>
}