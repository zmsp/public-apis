import React from "react";
import {Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ThemeProvider, withStyles} from "@material-ui/core/styles";
import Header from "../components/Header";
import LeftDrawer from "../components/LeftDrawer";
import RightDrawer from "../components/RightDrawer";
import Dashboard from "./DashboardPage";
import ButtonBase from "@material-ui/core/ButtonBase";
import Form from "./FormPage";
import BasicTable from "./Table/BasicTables";
import DataTable from "./Table/DataTables";
import NotFound from "./NotFoundPage";
import defaultTheme, {customTheme} from "../theme";
import Assessment from "@material-ui/icons/Assessment";
import Web from "@material-ui/icons/Web";
import GridOn from "@material-ui/icons/GridOn";
import BorderClear from "@material-ui/icons/BorderClear";
import BorderOuter from "@material-ui/icons/BorderOuter";

const styles = () => ({
  container: {
    margin: "80px 20px 20px 15px",
    paddingLeft: defaultTheme.drawer.width,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
    // width: `calc(100% - ${defaultTheme.drawer.width}px)`
  },
  containerFull: {
    paddingLeft: defaultTheme.drawer.miniWidth,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
  },
  settingBtn: {
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    width: 48,
    right: 0,
    height: 48,
    opacity: 0.9,
    padding: 0,
    zIndex: 999,
    position: "fixed",
    minWidth: 48,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // nav bar default open in desktop screen, and default closed in mobile screen
    this.state = {
      theme: defaultTheme,
      menus: [
        { text: "Dashboard", icon: <Assessment />, link: "/dashboard" },
        { text: "API List", icon: <Web />, link: "/table/data" },
        {
          text: "Categories",
          icon: <GridOn />,
          // link: "/table",
          subMenus: [
            {
              text: "Animals",
              icon: <BorderClear />,
              link: "/table/basic"
            },
            {
              text: "TODO",
              icon: <BorderOuter />,
              link: "/table/data"
            }
          ]
        },

      ],
      rightDrawerOpen: false,
      navDrawerOpen:
        window && window.innerWidth && window.innerWidth >= defaultTheme.breakpoints.values.md
          ? true
          : false
    };

    this.handleChangeRightDrawer = this.handleChangeRightDrawer.bind(this);
    this.handleChangeNavDrawer = this.handleChangeNavDrawer.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  componentWillMount() {
    this.renderMyData();
  }
  renderMyData(){


    fetch('https://api.publicapis.org/categories')
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson.entries );
          // console.log(responseJson.entries[0].API)\
          var subMenus = [];
          responseJson.map((value) => {
            subMenus.push({
              text: value,
              icon: <BorderOuter />,
              link: "/table/data/"+value
            })
          });
          console.log(subMenus);


          this.setState({        menus: [
              { text: "Dashboard", icon: <Assessment />, link: "/dashboard" },
              { text: "API List", icon: <Web />, link: "/table/data" },
              {
                text: "Categories",
                icon: <GridOn />,

                subMenus: subMenus
              },

            ]})
          // console.log(this.state.entries.entries)

        })
        .catch((error) => {
          console.log("##########################");
          console.log("##########################");
          console.error(error);
        });

  }


  handleChangeNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  handleChangeRightDrawer() {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen
    });
  }

  handleChangeTheme(colorOption) {
    const theme = customTheme({
      palette: colorOption
    });
    this.setState({
      theme
    });
  }

  render() {
    const { classes } = this.props;
    const { navDrawerOpen, rightDrawerOpen, theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Header handleChangeNavDrawer={this.handleChangeNavDrawer} navDrawerOpen={navDrawerOpen} />

        <LeftDrawer
          navDrawerOpen={navDrawerOpen}
          handleChangeNavDrawer={this.handleChangeNavDrawer}
          menus={this.state.menus}
        />
        <ButtonBase
          color="inherit"
          classes={{ root: classes.settingBtn }}
          onClick={this.handleChangeRightDrawer}
        >
          <i className="fa fa-cog fa-3x" />
        </ButtonBase>
        <RightDrawer
          rightDrawerOpen={rightDrawerOpen}
          handleChangeRightDrawer={this.handleChangeRightDrawer}
          handleChangeTheme={this.handleChangeTheme}
        />
        <div className={classNames(classes.container, !navDrawerOpen && classes.containerFull)}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/form" component={Form} />
            <Route path="/table/basic" component={BasicTable} />
            <Route path="/table/data/:handle" component={DataTable} />
            <Route path="/table/data" component={DataTable} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object
};

export default withStyles(styles)(App);
