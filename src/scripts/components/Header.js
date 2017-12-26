import { Link } from "react-router-dom";
import styled from 'styled-components';
import DataStore from "flux/stores/DataStore.js";

class Header extends React.Component {
  render() {
    let allPages = DataStore.getAllPages();
    allPages = _.sortBy(allPages, [
      function(page) {
        return page.menu_order;
      }
    ]); // Sort pages by order

    return (
      <Nav>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>

        {allPages.map(page => {
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
