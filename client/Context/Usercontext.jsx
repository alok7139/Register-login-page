import axios  from 'axios'
import { createContext , useState , useEffect } from 'react'

export const userContext = createContext({});


export function UserContextProvider({children}){
    const [user, setuser] = useState(null);


    useEffect(() => {
        if(!user){
            axios.get('/profile').then(({data}) => {
                setuser(data);
            })
        }
    })


    return (
        <userContext.Provider value={{user,setuser}}>{children}</userContext.Provider>
    )
}