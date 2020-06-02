import React from 'react'
import { action } from '@storybook/addon-actions'
 
import Sample from './Sample'

export default {
    component:Sample,
    title:'Sample',
    excludeStories:/.*Data$/,
}

export const formData={
    name:'',
    password:'',
    placeholder:'Enter Value',
    state:'',
}
export const actionData={
    onloading:action('loading'),
    onSuccess:action('Success'),
    afterSuccess:action('Submission'),
}

const onSubmit=(e)=>{
    e.preventDefault();
    
}

// export const Default=()=><Sample props={{...formData}} {...actionData}/>setValue={setValue}
 export const Loading=()=><Sample props={{...formData, state: 'Loading'}} {...actionData} onSubmit={onSubmit}/>
 export const Success=()=><Sample props={{...formData, state: 'Success'}} {...actionData} onSubmit={onSubmit}/>
 export const afterSuccess=()=><Sample props={{...formData, state: 'AfterSuccess'}} {...actionData} onSubmit={onSubmit}/>