import React, { useState, Component, useEffect } from "react";
import "./App.css";
import Logo from "./images/Logo.png";
import freetag from "./assets/freetag.png";

import { Country, State, City } from "country-state-city";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles, Theme, makeStyles } from "@material-ui/core/styles";
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
    dropdown
} from "./assets";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
// import Pagination from "react-js-pagination";

interface Props {
    classes: any;
}
interface States {
    posts: any;
    loading: boolean;
    currentPage: any;
    postsPerPage: any;
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    root: {},
    CL_CC_C: {
        display: 'flex',
        backgroundColor: 'white',
        /* overflow: hidden; */
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '12vw',
        paddingRight: '12vw',
    },
    RelatedCourseCard: {
        width: '100%',
        borderRadius: '0px'
        // height: "100%",
    },
    formControl: {
        width: "18vw",
        paddingRight: "1.5vw"
    },
    prl_input_left: {
        position: 'relative',
        width: '18vw',
        marginRight: '2em',
    },
    prl_input_lable: {
        display: 'flex',
        fontSize: '0.9em',
        fontWeight: 600,
        fontFamily: "Inter",
        marginBottom: '0.7em',
        color: 'rgba(51, 51, 51, 1)',
    },
    prl_input_dd: {
        position: 'relative'
    },
    prl_input_dd_s: {
        width: '100%',
        height: '3.5rem',
        background: 'white',
        color: '#a8a8a8',
        cursor: 'pointer',
        border: '1px solid #c7c7c7',
        paddingLeft: '1.5em',
        fontSize: '0.8em',
        fontFamily: "Inter",
        borderRadius: '0.5em',
    },
    prl_input_arrow: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '2em',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: '0.2em',
        marginRight: '0.2em',
        pointerEvents: 'none',
    },
    CL_page_cc: {
        width: '100%',
        marginTop: '1em',
        marginBottom: '3em',
    }
}));
// Customizable Area End

const App = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

    return (
        <div className={classes.CL_CC_C}>
            <div style={{ width: '100%' }}>
                <Grid spacing={2} style={{ width: '100%', }}>
                    <Grid spacing={2} style={{ display: 'flex', width: '100%', }}>
                        <div>
                            <div className={classes.prl_input_left}>
                                <label className={classes.prl_input_lable}>
                                    Filter By
                                </label>
                                <div className={classes.prl_input_dd}>
                                    <select
                                        className={classes.prl_input_dd_s}
                                        defaultValue="Most Viewed"
                                        onChange={(e) => {
                                            // this.handleCityChange(e);
                                        }}
                                    >
                                        <option value="Most Viewed">Most Viewed</option>
                                        {/* {this.state.listCity.map((val, key) => {
                            return (
                              <option value={val.name} key={key}>
                                {val.name}
                              </option>
                            );
                          })} */}
                                    </select>
                                    <span
                                        className={classes.prl_input_arrow}

                                    >
                                        <img src={dropdown} alt="arrow" />
                                    </span>

                                </div>
                            </div>

                        </div>
                        <div>
                            <div className={classes.prl_input_left}>
                                <label className={classes.prl_input_lable}>
                                    Pricing
                                </label>
                                <div className={classes.prl_input_dd}>
                                    <select
                                        className={classes.prl_input_dd_s}
                                        defaultValue="Please Select"
                                        onChange={(e) => {
                                            // this.handleCityChange(e);
                                        }}
                                    >
                                        <option value="Please Select">Please Select</option>
                                        {/* {this.state.listCity.map((val, key) => {
                            return (
                              <option value={val.name} key={key}>
                                {val.name}
                              </option>
                            );
                          })} */}
                                    </select>
                                    <span
                                        className={classes.prl_input_arrow}

                                    >
                                        <img src={dropdown} alt="arrow" />
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.prl_input_left}>
                                <label className={classes.prl_input_lable}>
                                    Start Date
                                </label>
                                <div className={classes.prl_input_dd}>
                                    <select
                                        className={classes.prl_input_dd_s}
                                        defaultValue="Please Select"
                                        onChange={(e) => {
                                            // this.handleCityChange(e);
                                        }}
                                    >
                                        <option value="Please Select">Please Select</option>
                                        {/* {this.state.listCity.map((val, key) => {
                            return (
                              <option value={val.name} key={key}>
                                {val.name}
                              </option>
                            );
                          })} */}
                                    </select>
                                    <span
                                        className={classes.prl_input_arrow}

                                    >
                                        <img src={dropdown} alt="arrow" />
                                    </span>

                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Posts posts={currentPosts} loading={loading} />
            <div className={classes.CL_page_cc}>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>

    );
};

export default App;




// import React, { useState, Component } from "react";
// import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
// import axios from "axios";
// import Posts from "./Posts";
// import Pagination from "./Pagination";

// interface Props {
//   classes: any;
// }
// interface States {
//   posts: any;
//   loading: boolean;
//   CurrentPage: any;
//   postsPerPage: any;
// }

// const styles = (theme: Theme) =>
//   createStyles({
//     root: {},
//     RelatedCourseCard: {
//       width: 287,
//       height: "100%",
//     },
//   });
// // Customizable Area End

// class App extends Component<Props, States> {
//   indexOfLastPost: any;
//   indexOfFirstPost: any;
//   currentPosts: any;
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       posts: [],
//       loading: false,
//       CurrentPage: 1,
//       postsPerPage: 9,
//     };
//     console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
//     this.indexOfLastPost = this.state.CurrentPage * this.state.postsPerPage;
//     this.indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
//     this.currentPosts = this.state.posts.slice(
//       this.indexOfFirstPost,
//       this.indexOfLastPost
//     );
//   }
//   // const [posts, setPosts] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [postsPerPage] = useState(9);
//   componentDidMount() {
//     const fetchPosts = async () => {
//       this.setState({ loading: true });
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       this.setState({ posts: res.data });
//       this.setState({ loading: false });
//     };

//     fetchPosts();
//   }

//   componentWillUpdate = () => {
//     console.log(
//       "beforeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//     );
//     this.indexOfLastPost = this.state.CurrentPage * this.state.postsPerPage;
//     this.indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
//     this.currentPosts = this.state.posts.slice(
//       this.indexOfFirstPost,
//       this.indexOfLastPost
//     );
//   };

//   // Get current posts

//   // Change page
//   paginate = (pageNumber: any) => this.setState({ CurrentPage: pageNumber });
//   render() {
//     return (
//       <div className="tn-container">
//         <Posts posts={this.currentPosts} loading={this.state.loading} />
//         <div>
//           <Pagination
//             postsPerPage={this.state.postsPerPage}
//             totalPosts={this.state.posts.length}
//             paginate={this.paginate}
//             currentPage={this.state.CurrentPage}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default withStyles(styles, { withTheme: true })(App);

// export default withStyles(styles, { withTheme: true })(App);
