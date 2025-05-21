import { useAppSelector } from "../redux/hooks"
import type { RootState } from "../redux/store"

const Loader = () => {
    const {isLoading}=useAppSelector((state:RootState)=>state.loader)
    // console.log('isLoading: ', isLoading);
    if(!isLoading)return
    
    return(
    <div className="flex items-center justify-center h-screen ">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
)}

export default Loader