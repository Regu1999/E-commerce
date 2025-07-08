import { Link, useSearchParams, useNavigate } from "react-router-dom";
import FormBackground from "../Component/UI/FormBackground";
import { useForm } from "react-hook-form";
import { authendication } from '../https.js'
import { TextFeild, EmailFeild, PasswordFeild } from "../Component/UI/Inputs";
import Card from "../Component/UI/Card.jsx";
export default function UserAuth() {
    const [search] = useSearchParams();
    const navigate = useNavigate()
    const loginMode = search.get('mode') === 'login';
    const { register, formState: { errors, isSubmitting }, handleSubmit, watch, setError, reset } = useForm();
    // console.log(isSubmitting);
    const handleFromSubmit = async (data) => {
        delete data.newPwd;
        try {
            const response = await authendication(search.get('mode'), data);
            navigate('/shop')
        } catch (error) {
            setError('root', {
                type: 'manual',
                message: !loginMode ? error.response.data.errors?.email || 'Unable to Process data' :
                    error.response.data.errors?.credentials || error.response.data.message
            })
            console.log(error);
        }
    }
    let newPwd = watch("newPwd")
    return <FormBackground>
        <Card>
            {errors.root && <div className="bg-red-500 p-5 w-full text-white my-4">{errors.root.message}</div>}
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
                                value: 8,
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