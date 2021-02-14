import React, { useContext, useState } from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState(''); 

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text.trim() === '') {
            alertContext.setAlert("Please Enter username", "light");
            return;
        }
        githubContext.searchUsers(text);
        setText("")
    }


    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" value={text} placeholder="Search Users ..." onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 &&
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
            }

        </div>
    )

}


export default Search;