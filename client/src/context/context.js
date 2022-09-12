import React, {useState, useReducer, useEffect,useRef} from "react";
import axios from "axios";
import reducer from "./reducer";



export const AppContext = React.createContext()

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error:false
}



export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [devs, setDevs] = useState([])


 


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])

    // fetch Dev Users
    
    useEffect(() => {
        const fetchDevs = async () => {
          const res = await axios.get("/dev");
          console.log(res);
          setDevs(res.data);
        };
    
        fetchDevs();
      }, []);

   

    console.log(devs)








    return(
        <AppContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            devs
           
           

        }}        
        >{children}

        </AppContext.Provider>
    )







}