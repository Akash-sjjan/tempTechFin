import React, { useState, Component } from "react";
import "./App.css";
import Logo from "./images/Logo.png";
import TL_SEC_1 from "./images/TL-SEC-1.png";
import TL_SEC_2 from "./images/TL-SEC-2.png";
import TL_SEC_3 from "./images/TL-SEC-3.png";
import TL_SEC_4 from "./images/TL-SEC-4.png";
import TL_SEC_5 from "./images/TL-SEC-5.png";
import freetag from "./assets/freetag.png";

import { Country, State, City } from "country-state-city";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import {
  twomembers,
  calender,
  // freetag,
  girllaptop,
  book,
  boylaptop,
  boyphone,
  InstructorPic,
  syllabusIcon,
  // tickmark
} from "./assets";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// import Pagination from "@mui/material/Pagination";
import Pagination from "react-js-pagination";

import PaginationItem from "@mui/material/PaginationItem";
import OtpInput from "react-otp-input";
import { Alert } from "@material-ui/lab";
import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import Pagination from "./Pagination";
import axios from "axios";
import PaginatedItems from "./Pageinate";
// import ReactPaginate from "react-paginate";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { pink } from "@mui/material/colors";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ReactPaginate from "react-paginate";
interface Props {
  classes: any;
}
interface States {
  activePage: number;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    RelatedCourseCard: {
      width: 287,
      height: "100%",
    },
  });
// Customizable Area End

class App extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activePage: 6,
    };
  }

  handlePageChange(pageNumber: any) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  async componentWillMount() {}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
