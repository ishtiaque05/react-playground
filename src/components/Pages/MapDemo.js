import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Map1 from "../maps/Map1";
import Map2 from "../maps/Map2";
import DefaultMap from "../maps/DefaultMap";
import "../../assets/css/map/map.css"

class MapDemo extends React.Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <div className="map-dashboard">
        <Container>
          <Grid container>
            <Grid.Column width={4} className="right-border">
              <ul className="nav-sidebar">
                <li>
                  <NavLink className="list-item"to="/map1">map 1</NavLink>
                </li>
                <li>
                  <NavLink className="list-item" to="/map2">map 2</NavLink>
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column width={12}>
              <Route exact path="/" component={DefaultMap}/>
              <Route exact path="/map1" component={Map1} />
              <Route exact path="/map2" component={Map2} />
            </Grid.Column>
          </Grid>
        </Container>
        </div>
      </HashRouter>
    );
  }
}

export default MapDemo;
