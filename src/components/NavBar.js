import { Link } from 'react-router-dom';
import './NavBar.css'
import CardWidget from "./CardWidget";
import styled from 'styled-components';

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: inline-flex;
  }

  li {
    margin-right: 1rem;
  }
`

const NavBar = () => {
  return (
    <StyledNavBar>
      Ecommerce
      <ul>
        <li>
          <Link to='/' >
            Home
          </Link>
        </li>
        <li>
          <Link to='/item/1' >
            Detail
          </Link>
        </li>
      </ul>
      <CardWidget />
    </StyledNavBar>
  );
}
 
export default NavBar;