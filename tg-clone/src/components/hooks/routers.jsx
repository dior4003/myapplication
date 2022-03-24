import NavbarFixed from "../navbarFixedBottom";
import MainHome from "../privateComponents/mainHome";
import Registr from "../registr";


export const PublicRoutes =[
    {path:"/start" , element:<Registr/> , exact:true}
    


];
export const PrivateRoutes=[
    {path:"*" , element:<MainHome/> , exact:true},
    {path:"/user" , element:<MainHome/> , exact:true}


]; 