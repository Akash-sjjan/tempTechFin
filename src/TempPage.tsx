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
import Pagination from "@mui/material/Pagination";
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
  gen: string;
  valid: boolean;
  listCountry: any[];
  listState: any[];
  listCity: any[];
  otp: string;
  sCountry: string;
  sCountryCode: string;
  sState: string;
  sStateCode: string;
  sCity: string;
  sCityCode: string;
  errOTP: boolean;

  posts: any[];
  loading: boolean;
  currentPage: number;
  postsPerPage: number;
  currentItems: any;
  pageCount: any;
  itemOffset: any;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    RelatedCourseCard: {
      width: 287,
      height: "100%",
    },

    CL_Page_select: {
      overflow: "hidden",
      // border: "0px solid #d6d6d6",
      backgroundColor: "transparent",
      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.MuiPaginationItem-firstLast":
        {
          backgroundColor: "#f7f7f7",
          borderRadius: "0px",
          marginLeft: "1vw",
          marginRight: "1vw",
        },
      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.MuiPaginationItem-circular":
        {},

      "& .Mui-selected": {
        backgroundColor: "red",
        borderRadius: "0px",
      },
      "& .MuiPaginamtion-ul li": {
        backgroundColor: "red",
        borderRadius: "0px",
      },

      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#f0d17c",
        borderRadius: "0px",
        border: "1px dashed #ddbe6b",
      },

      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-disabled": {
        opacity: 1,
        borderLeftWidth: "0.1px",
        borderColor: "#d6d6d6",
      },
      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root": {
        // border: "0.5px solid #d6d6d6",
      },

      "& .MuiPaginationItem-root": {
        margin: "0px",
        backgroundColor: "#f7f7f7",
        // border: "0.1px solid #d6d6d6",
        border: "0.5px solid #d6d6d6",

        borderRadius: "0em",
        width: "2vw",
        height: "2vw",
        // color: rgba(0, 0, 0, 0.87);
        // height: 32px;
        // margin: 0 3px;
        // padding: 0 6px;
        // font-size: 0.875rem;
        // min-width: 32px;
        // box-sizing: border-box;
        // text-align: center;
        // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        // font-weight: 400;
        // line-height: 1.43;
        // border-radius: 16px;
        // letter-spacing: 0.01071em;
      },
    },
  });
// Customizable Area End

class App extends Component<Props, States> {
  videoJsOptions: any;
  indexOfLastPost: any;
  indexOfFirstPost: any;
  currentPosts: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      gen: "",
      valid: false,
      listCountry: [],
      listState: [],
      listCity: [],
      otp: "",
      errOTP: false,
      sCountry: "",
      sCountryCode: "",
      sState: "",
      sStateCode: "",
      sCity: "",
      sCityCode: "",

      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 10,

      currentItems: null,
      pageCount: 0,
      itemOffset: 0,
    };
    this.videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: "/path/to/video.mp4",
          type: "video/mp4",
        },
      ],
    };
    this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
    this.currentPosts = this.state.posts.slice(
      this.indexOfFirstPost,
      this.indexOfLastPost
    );
  }

  Icon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  handleNavCourses = () => {
    console.log("courses");
  };
  // Get current posts

  // Change page

  paginate = (pageNumber: any) => {
    console.log(pageNumber);
    this.setState({ currentPage: pageNumber });
  };

  handleOTPChange = async (otp: string) => {
    await this.setState({ otp });
    console.log(this.state.otp);
  };

  async componentWillMount() {
    const fetchPosts = async () => {
      this.setState({ loading: true });
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      await this.setState({ posts: res.data, loading: false });
      console.log(this.state.posts);
    };

    fetchPosts();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="tn-container">
        {/* <Pagination
          count={10}
          showFirstButton
          showLastButton
          className={classes.CL_Page_select}
          // renderItem={(item) => (
          //   <PaginationItem
          //     components={{ previous: freetag, next: freetag }}
          //     {...item}
          //   />
          // )}
          renderItem={(item) => (
            <PaginationItem
              components={{
                // first: () => {
                //   return freetag;
                // },
                previous: () => {
                  return <PaginatedItems sx={{ color: "red" }} />;
                },
                next: ArrowRight,
                last: KeyboardDoubleArrowRight,
              }}
              {...item}
            />
          )}
        /> */}

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={0}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          //   onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />

        {/* <PaginatedItems /> */}
        {/* <OtpInput
          value={this.state.otp}
          onChange={this.handleOTPChange}
          numInputs={4}
          separator={<span>-</span>}
          isInputNum
          inputStyle={{
            width: "6em",
            height: "4em",
            border: "1px solid #c7c7c7",
            borderRadius: "0.3em",
            marginLeft: "1em",
            marginRight: "1em",
          }}
          containerStyle={{
            fontWeight: "bold",
            fontSize: "1.5em",
            fontFamily: "Inter",
          }}
          hasErrored={this.state.errOTP}
          errorStyle={{ backgroundColor: "#ffe5e5", borderColor: "#ff0000" }}
        /> */}
        {/* <Alert severity="success" color="success">
          This is a success alert — check it out!
        </Alert> */}
        {/* <ReactPlayer
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          playing
        /> */}
        {/* <VideoPlayer {...this.videoJsOptions} /> */}
        {/* <div>
          <Pagination
            count={10}
            showFirstButton
            showLastButton
            className={classes.CL_Page_select}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: freetag, next: freetag }}
                {...item}
              />
            )}
          />
        </div> */}
        {/* <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.posts.length}
          paginate={this.paginate}
        /> */}
        {/*
        <div style={{ paddingTop: "1vw" }}>
          <Grid
            container
            justifyContent="center"
            spacing={3}
            style={{ marginTop: 30 }}
          >
            <Grid item>
              <Card className={classes.RelatedCourseCard}>
                <CardMedia>
                  <img
                    style={{ height: "auto", width: "100%" }}
                    src={girllaptop}
                    alt=""
                  />
                </CardMedia>
                <CardContent>
                  <Typography style={{ fontSize: 21, fontWeight: 700 }}>
                    Course Name
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ lineHeight: 1.8 }}
                  >
                    is simply dummy text of printing of printing
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "13px",
                      columnGap: 5,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img style={{ width: "20px" }} src={twomembers} alt="" />
                      <Typography style={{ fontWeight: 550, fontSize: 14 }}>
                        &nbsp;34&nbsp;
                      </Typography>
                      <Typography>|</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ height: "16px", width: "16px" }}
                        src={freetag}
                        alt=""
                      />
                      <Typography style={{ fontWeight: 550, fontSize: 14 }}>
                        &nbsp;Free&nbsp;
                      </Typography>
                      <Typography>|</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ height: "16px", width: "16px" }}
                        src={calender}
                        alt=""
                      />
                      <Typography style={{ fontWeight: 550, fontSize: 14 }}>
                        &nbsp;5/07/2022
                      </Typography>
                    </div>
                  </div>
                </CardContent>

                <CardActions>
                  <div
                    style={{
                      display: "flex",
                      columnGap: 20,
                      marginBottom: 20,
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        background: "#f00",
                        color: "#fff",
                        textTransform: "none",
                        borderRadius: 100,
                        width: 115,
                      }}
                      size="small"
                    >
                      View Course
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        background: "#f0d17c",
                        textTransform: "none",
                        borderRadius: 100,
                        fontWeight: 550,
                        width: 115,
                      }}
                      size="small"
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div> */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
