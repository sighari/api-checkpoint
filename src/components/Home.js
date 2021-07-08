import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div> 
            <Link style={{color: 'red', fontWeight: 'bold'}} to="/users" >User List</Link>
        </div>
    );
}

export default Home;
