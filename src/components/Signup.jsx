import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {

    const users = props.users;
    const setUsers = props.setUsers;

    const navigate = useNavigate()

    const [enterUserName, setEnterUserName] = useState()
    const [enterPassword, setEnterPassword] = useState()

    const handleUserName = (event) => {
        setEnterUserName(event.target.value)
    }
    const handlePassword = (event) => {
        setEnterPassword(event.target.value)
    }

    const addUser = () => {
        
        setUsers([...users,{id: users.length+1,username: enterUserName,password: enterPassword}])
        navigate('/')
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h2 className="text-3xl font-medium">Hey Hi</h2>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-1 my-2">
                    <input onChange={handleUserName} className="w-52 p-1 border border-black rounded-md bg-transparent" placeholder="Username" />
                    <input onChange={handlePassword} className="w-52 p-1 border border-black rounded-md bg-transparent" placeholder="Password" />
                    <input className="w-52 p-1 border border-black rounded-md bg-transparent" placeholder="Confirm password" />
                    <button className="bg-[#FCA201] w-24 rounded-md p-1" onClick={addUser}>Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup;