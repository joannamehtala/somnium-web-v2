import { render } from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';
import Blog from 'components/Blog.js';
import Home from 'components/Home.js';
import Header from 'components/Header.js';
import Page from 'components/Page.js';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class AppInitializer {

  buildRoutes(data) {
    return data.pages.map((page, i) => {
      return (
        <Route
          key={i}
          render={()=><Page slug={page.slug}/>}
          path={`/${page.slug}`}
          exact
        />
      );
    });
  }

  run() {
    DataActions.getPages(response => {
      render(
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              {this.buildRoutes(response)}
              <Route
                render={() => {
                  return <Redirect to="/" />;
                }}
              />
            </Switch>
          </div>
        </Router>,

        document.getElementById('app')
      );
    });
  }
}

new AppInitializer().run();
