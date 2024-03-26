import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
function AgeCalculator() {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');
    const [conbtn, setconbtn] = useState(false);

  
    // useEffect(() => { }, [birthDate])


    const calculateAge = () => {
        const currentDate = new Date();
        const birthYear = new Date(birthDate).getFullYear();
        const currentYear = currentDate.getFullYear();


        const calculatedAge = currentYear - birthYear;
        setAge(calculatedAge);
        setconbtn(true)
    };
    const cleare = () => {
        setBirthDate('')
        setconbtn(false);
    }

    return (
        <div className="App">

            <div className="App-header">
                <div className='black'>
                    <h2 >Age Calculator</h2>
                    <label htmlFor="birthDate">Enter your birth date:</label>
                    <input
                        type="date"
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                    {conbtn && age ? <Button className='pk' variant="contained" onClick={cleare}>cleare</Button> : <Button className='pk' variant="contained" onClick={calculateAge}>Calculate Age</Button>}
                    {conbtn ?age?<p className='pk'>Your age is {age} years.</p>:"please select age or lesser then current year " : " "}

                </div>
            </div>


        </div>
    );
}

export default AgeCalculator;
