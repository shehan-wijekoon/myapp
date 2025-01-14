import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";

const Mainlayout = ({children}) => {
    return ( 
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 bg-grey-100">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default Mainlayout;