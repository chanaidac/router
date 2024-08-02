import { useLocation } from "react-router-dom";

const Landing = () => {
    const userName = useLocation()

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h2 className="text-3xl font-medium">Hello {userName.state.user}</h2>
                
            </div>
        </div>
    )
}
export default Landing;