import React from "react";
import {Link} from "react-router-dom";
import {cyan, green, lightBlue, pink} from "@material-ui/core/colors";
import InfoBox from "../components/dashboard/InfoBox";
import RecentlyProducts from "../components/dashboard/RecentlyProducts";
import globalStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import {Category, GitHub, Stars, Storage} from "@material-ui/icons";

// const DashboardPage = () => {
//
// };
class DashboardPage extends React.Component {

    componentWillMount() {
        this.renderMyData();
    }

    state = {
        entriesCount: 0,
        categories: [],
        starCount: 0,
        forkCount:0,

    };

    renderMyData(){
        fetch('https://api.github-star-counter.workers.dev/user/public-apis')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.entries );
                // console.log(responseJson.entries[0].API)

                this.setState({ starCount : responseJson.stars, forkCount : responseJson.forks,  })
                // console.log(this.state.entries.entries)

            })
            .catch((error) => {
                console.error(error);
            });

        fetch('https://api.publicapis.org/categories')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.entries );
                // console.log(responseJson.entries[0].API)

                this.setState({ categories : responseJson })
                // console.log(this.state.entries.entries)

            })
            .catch((error) => {
                console.error(error);
            });

        fetch('https://api.publicapis.org/entries')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.entries );
                // console.log(responseJson.entries[0].API)

                this.setState({ entriesCount : responseJson.count })
                // console.log(this.state.entries.entries)

            })
            .catch((error) => {
                console.error(error);
            });
    }

  render() {
    return (
        <div>
          <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Link to="/table/data" className="button">
                <InfoBox Icon={Storage} color={pink[600]} title="API Entries" value={this.state.entriesCount} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoBox Icon={Category} color={cyan[600]} title="Categories" value={this.state.categories.length} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <a href="https://github.com/public-apis/public-apis" target="_blank">
                    <InfoBox Icon={Stars} color={green[600]} title="Github Stars" value={this.state.starCount} />
                </a>

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <a href="https://github.com/public-apis/public-apis" target="_blank">
                    <InfoBox Icon={GitHub} color={lightBlue[600]} title="Github Forks" value={this.state.forkCount} />
                </a>
            </Grid>
          </Grid>


          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <RecentlyProducts data={this.state.categories} />
            </Grid>
          </Grid>
        </div>
    );
  }

}

export default DashboardPage;
