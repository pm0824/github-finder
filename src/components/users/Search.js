import React, { useState, useContext} from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Search =({setAlert})=> {
    const githubContext = useContext(GithubContext)
    const [text,setText] = useState('');
    
    //Passing props up and search
    const onSubmit =(e)=>{                    //must be arrow fun otherwise use bind while call
        e.preventDefault();
        if(text===''){
           setAlert("Please enter something to search","light");
        }
        else{
            githubContext.searchUsers(text);
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
                {githubContext.users.length>0 && 
                    <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
                    Clear
                </button>}
            </div>
        )
}

Search.propTypes={
    setAlert:PropTypes.func.isRequired,
}    

export default Search
