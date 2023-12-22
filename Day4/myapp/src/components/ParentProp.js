import React from 'react'
import ChildProp from './ChildProp'
const ParentProp =()=> {
    const name1 = "Varsha"
    const name2 = "Sanvi"
    return(
        <>
        <ChildProp name ={name1}/>
        <ChildProp name ={name2}/>
        </>
    )
}
export default ParentProp