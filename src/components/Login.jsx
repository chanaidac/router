import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = (props) => {

    const users = props.users;

    const navigate = useNavigate()

    const [enterUserName, setEnterUserName] = useState()
    const [enterPassword, setEnterPassword] = useState()
    const [ruCheck, setRuCheck] = useState(true)

    const handleUserName = (event) => {
        setEnterUserName(event.target.value)
    }
    const handlePassword = (event) => {
        setEnterPassword(event.target.value)
    }

    const checkUser = () => {

        let userFound = false;

        users.forEach((item) => {
            if (item.username === enterUserName && item.password === enterPassword) {
                console.log('Login Success')
                userFound = true;
                navigate("/landing", {state: {user:enterUserName}})
            }
        })

        if (userFound === false) {
            console.log('Login Failed')
            setRuCheck(false)
        }
    }



    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h2 className="text-3xl font-medium">Hey Hi</h2>
                {
                    ruCheck ?
                        <p>I help you manage your activities after you login :)</p>
                        :
                        <p className="text-red-500">Please Sign Up Before you Login</p>
                }

                <div className="flex flex-col gap-1 my-2">
                    <input className="w-52 p-1 border border-black rounded-md bg-transparent" placeholder="Username" onChange={handleUserName} />
                    <input className="w-52 p-1 border border-black rounded-md bg-transparent" placeholder="Password" onChange={handlePassword} />
                    <button className="bg-[#8272DA] w-24 rounded-md p-1" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;