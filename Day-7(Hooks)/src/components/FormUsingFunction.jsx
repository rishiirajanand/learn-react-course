import {useState, useEffect} from 'react';

export default function Input(props)
{
    const [fname, setFname] = useState('Rishi');
    const [lname, setLname] = useState('');

    // Works as a componentDidMount and componentDidUpdate
    useEffect(()=>{
        document.title = fname +' '+ lname;
    },[lname])

    // Works as a 
    useEffect( ()=> {
        let timer = setInterval(()=>{
            console.log('Window-Width', window.innerWidth);
        },1000)

        return(clearInterval(timer))
    })

    const handleFirstName = (e)=> setFname(e.target.value);
    const handleLastName = (e)=> setLname(e.target.value)

    return (
        <>
            <div className="container">
                <label htmlFor="fname">Enter Name</label>
                <input type="text" name="fname" id="fname" 
                    value={fname}
                    onChange={handleFirstName}
                />

                <br /><br />
                <label htmlFor="lname">Enter Last Name</label>
                <input type="text" name="lname" id="lname" 
                    value={lname}
                    onChange={handleLastName}
                />
            </div>
            <div className="res">
                <span>{`Hello, ${fname} ${lname}`}</span>
            </div>
        </>
    )
}