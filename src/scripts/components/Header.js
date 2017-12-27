import { Link } from "react-router-dom";
import styled from 'styled-components';
import DataStore from "flux/stores/DataStore.js";

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
      <Nav>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>

        {menuPages.map(page => {
          if (page.slug != "home") {
            return (
              <Link
                key={page.id}
                to={`/${page.slug}`}
                style={{ marginRight: "10px" }}
              >
                {page.title.rendered}
              </Link>
            );
          }
        })}
      </Nav>
    );
  }
}

const Nav = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default Header;
