import React, {useEffect, useState} from 'react'


const TotalStudents = props =>{
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(()=>{
        const sendRequest = async () => {
            setIsLoading(true);
            try{
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/students`);
                const responseData = await response.json();
  
                if (!response.ok){
                    throw new Error(responseData.message);
                }
    
                setLoadedUsers(responseData.students);
            }catch(err){
                setIsLoading(false)
                setError(err.message);
            }
        }
        sendRequest();
    },[])
    let data
    if (loadedUsers){
        data = loadedUsers.length
    }
    return(
        //length of students
        <h1>total students: {data}</h1>
    );
};

export default TotalStudents;