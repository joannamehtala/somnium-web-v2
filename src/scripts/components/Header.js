import { Link } from "react-router-dom";
import styled from 'styled-components';
import DataStore from "flux/stores/DataStore.js";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends React.Component {
  render() {
    let allPages = DataStore.getAllPages();

    function compare(a, b) {
      const indexA = a.menu_order;
      const indexB = b.menu_order;
      if (indexA < indexB) {
        return -1;
      }
      if (indexA > indexB) {
        return 1;
      }
      return 0;
    }

    const menuPages = allPages.sort(compare);

    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" style={{ marginRight: "10px" }}>
              [ logo ]
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {menuPages.map(page => {
            if (page.slug != "home") {
              return (
                <NavItem key={page.id}>
                  <Link
                    key={page.id}
                    to={`/${page.slug}`}
                    style={{ marginRight: "10px" }}
                  >
                    {page.title.rendered}
                  </Link>
                </NavItem>
              );
            }
          })}
        </Nav>

      </Navbar>
    );
  }
}

export default Header;
