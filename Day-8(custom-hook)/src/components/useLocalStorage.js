import { useState, useEffect } from "react";

const useGetEmail = ()=>{

    const [email, setEmail] = useState('');

    useEffect(() =>{
        const getEmail = localStorage.getItem('email');
        if(getEmail){
            setEmail(getEmail)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('email', email);
    },[email]);
    
    return {email, setEmail};
}

export default useGetEmail;
