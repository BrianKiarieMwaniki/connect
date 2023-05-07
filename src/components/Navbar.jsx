import {Link} from 'react-router-dom';
export const Navbar = () =>{
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/excuses">Excuses</Link>
        <Link to="/agify">Agify</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
    );
}