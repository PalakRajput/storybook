import React from 'react'

export default function Sample({props:{name,password,placeholder,state},onloading,onSuccess,afterSuccess,onSubmit={onSubmit}}){
   
    if(state==='AfterSuccess'){
        return (
           <h4>Submission done</h4>
        )
    }
    const loading=state==='Loading'
    const success=state==='Success'
    return(
        <div>
            <form onSubmit={onSubmit}>

                Name: <input type="text" value={name} placeholder={placeholder} 
                disabled={loading}
                onChange={(e)=>onSuccess(e.target.value)
                }></input><br/><br/>
                PassWord: <input type="text" value={password} placeholder={placeholder} 
                disabled={loading}
                onChange={(e)=>onSuccess(e.target.value)}></input><br/><br/>
                <button disabled={loading} type="submit" onClick={afterSuccess}>Submit</button>
            </form>
        </div>
    )
}

// onChange={()=>onSuccess}