import Start from "../home";
import Registr from "../registr";


export const PublicRoutes =[
    {path:"/start" , element:<Registr/> , exact:true}
    


];
export const PrivateRoutes=[
    {path:"/se" , element:<Start/> , exact:true}


];