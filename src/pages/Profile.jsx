import { useContext } from 'react';
import { ChangeProfile } from './../components/ChangeProfile';
import { AppContext } from '../App';
import { Form } from '../forms/Form';
export const Profile = () =>{
    const {username} = useContext(AppContext);
    return(
        <div>
            {username.length === 0 ? <h1>Profile</h1> : <h1>Profile of {username}</h1>}
            <ChangeProfile/>

            <Form/>
        </div>
    );
}