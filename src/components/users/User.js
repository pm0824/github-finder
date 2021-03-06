import React, { useEffect, Fragment, useContext } from 'react'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'


const User =({match})=> {
    const githubContext = useContext(GithubContext)
    const {loading,user,getUser,getUserRepos,repos,}=githubContext

    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    },[])

        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;

        if(loading) return <Spinner/>
        return (
           <Fragment>
                <Link to='/' className='btn btn-light'>Back to Search</Link>
                Hireable: {' '}
                {hireable?
                <i className='fas fa-check text-success'/> :
                <i className='fas fa-times-circle text-danger'/>
                }
                <div className="card grid-2">
                    <div className="all-center">
                        <img 
                        src={avatar_url}
                        className='round-img'
                        alt=''
                        style={{width:'150px'}}
                        />
                        <h3>{name}</h3>
                        {location && <p>Location: {location}</p>}
                    </div>
                    <div>
                    {bio && <Fragment>
                        <h3>Bio:</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} target='__blank' className='btn btn-primary my-1'>
                        Go to GitHub Profile
                    </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                Username: {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                Company: {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                Blog: {blog}
                            </Fragment>}
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-success">
                        Followers: {followers}
                    </div>
                    <div className="badge badge-danger">
                        Following: {following}
                    </div>
                    <div className="badge badge-light">
                        Public Repos: {public_repos}
                    </div>
                    <div className="badge badge-dark">
                        Public Gists: {public_gists}
                    </div>
                </div>
                <Repos repos={repos}/>
           </Fragment>
        )
}

export default User
