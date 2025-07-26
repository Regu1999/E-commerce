import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import FormBackground from "../Component/UI/FormBackground";
import { authendication } from '../https.js'
import { TextFeild, EmailFeild, PasswordFeild } from "../Component/UI/Inputs";
import { addToken } from "../store/token.js";
import Card from "../Component/UI/Card.jsx";
import useNotification from "../hooks/useNotification.js";
export default function UserAuth() {
    const [search] = useSearchParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const notification = useNotification()
    const loginMode = search.get('mode') === 'login';
    const { register, formState: { errors, isSubmitting }, handleSubmit, watch, reset } = useForm();
    const handleFromSubmit = async (data) => {
        delete data.newPwd;
        try {
            const response = await authendication(search.get('mode'), data);
            notification({ message: "Welcome " + response.userName + " !", status: 'success' })
            dispatch(addToken(response.token))
            navigate('/shop')
        } catch (error) {
            notification({ message: error.message, status: 'error', info: error.info })
        }
    }
    let newPwd = watch("newPwd")
    return <FormBackground>
        <Card>
            <h1 className="text-2xl mb-6 font-bold">{loginMode ? "Login" : "Sign Up"}</h1>
            <form action="post" onSubmit={handleSubmit(handleFromSubmit)}>
                {!loginMode && <TextFeild inputId="UserName" lableName="User Name" placeholder="Name" register={register} errors={errors} />}
                <EmailFeild register={register} errors={errors} />
                {!loginMode && <div className="w-full mb-4">
                    <label htmlFor="newPwd" className="font-semibold mb-1 block">New Password</label>
                    <input type="password" placeholder="create your new password" id="newPwd"
                        className="rounded-md w-full p-2 border border-gray-400 focus:outline-rose-200"
                        {...register("newPwd", {
                            required: 'new password is required for create account',
                            minLength: {
                                value: 6,
                                message: 'minimum 8 cheracter required'
                            }
                        })}
                    />
                    {errors.newPwd && <small className="text-red-500">{errors.newPwd.message}</small>}
                </div>}
                <PasswordFeild register={register} errors={errors} loginMode={loginMode} newPwd={newPwd} />
                <button className="bg-rose-100 p-2 w-full my-3 text-white rounded-md hover:bg-white
                 hover:text-rose-100 border hover:border-rose-100 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : loginMode ? 'Login' : 'Create Account'}
                </button>
                <small>
                    {loginMode ? "Don't have an account?" : "Already a user?"}
                    <Link to={`?mode=${loginMode ? 'signup' : 'login'}`} className="text-blue-500" onClick={() => reset()}>
                        {loginMode ? ' Sign Up' : ' Login In'}
                    </Link>
                </small>
            </form>
        </Card>
    </FormBackground>
}