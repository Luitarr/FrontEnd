import { Link} from 'react-router-dom'
import Body from './Body';

const Nav =()=>{
    return(
        <nav>
         <ul>
                <li>
                    <Link className="nav_link" to="/home">
                    Home
                    </Link>
                    </li>
                    <li>
                    <Link className="nav_link" to="/articles">
                    Articles
                    </Link>
                </li>
             
                
            </ul>

        </nav>
   


        
    )
}

export default Nav;