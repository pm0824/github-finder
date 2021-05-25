import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search =({searchUsers,clearUsers,showClear,setAlert})=> {
    const [text,setText] = useState('');
    
    //Passing props up and search
    const onSubmit =(e)=>{                    //must be arrow fun otherwise use bind while call
        e.preventDefault();
        if(text===''){
           setAlert("Please enter something to search","light");
        }
        else{
            searchUsers(text);
            setText('');
        }
    }
    const onChange = (e)=> setText(e.target.value)  //name:value

        return (
            <div>
                <form onSubmit={onSubmit} className='form'>
                    <input 
                    type="text" 
                    name="text" 
                    placeholder='Search User'
                    onChange = {onChange}
                    value={text}
                    />
                    <input type="submit" value="Search" className='btn btn-dark btn-block'/>
                </form>
                {showClear && 
                    <button className='btn btn-light btn-block' onClick={clearUsers}>
                    Clear
                </button>}
            </div>
        )
}

Search.propTypes={
    searchUsers: PropTypes.func.isRequired,   //ptfr+tab
    clearUsers: PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired,
}    

export default Search
