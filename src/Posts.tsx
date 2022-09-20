import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import { twomembers, girllaptop, freetag, calender } from "./assets";
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: 'red',
  },
  RelatedCourseCard: {
    width: '100%',
    borderRadius: '0px'
    // height: "100%",
  },
  List_ul_c: {
    // display: 'flex',
    width: '100%'
  },
  List_image: {
    height: "auto",
    width: "100%"
  },
  List_title: {
    color: '#333333',
    fontFamily: 'Inter',
    fontSize: '1.3vw',
    fontWeight: 600,
    lineHeight: '1.7em'
  },
  List_subtitle: {
    color: '#666666',
    fontFamily: 'Inter',
    fontSize: '0.8vw',
    fontWeight: 400,
    lineHeight: '2em'

  },
  List_info_c: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0.5vw",
    // columnGap: 5,
  },
  List_info_c_c: {
    display: "flex",
    alignItems: "center"
  },
  List_info_img: {
    // height: "0.8vw",
    width: "0.9vw",
    objectFit: 'contain',
    marginRight: '0.2vw'
  },
  List_info_txt: {
    fontWeight: 600,
    fontSize: '0.75vw',
    color: '#333333',
    fontFamily: 'Inter'
  },
  List_info_break: {
    color: '#f0d17c',
    marginRight: '0.4vw'
  },
  List_info_btn_c: {
    display: "flex",
    // columnGap: 20,
    // rowGap: 20,
    justifyContent: 'space-between',
    alignItem: 'center',
    width: '100%',
    marginBottom: '1vw',
  },
  List_info_btn_1: {
    background: "#f00",
    color: "#fff",
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '0.8vw',
    textTransform: "none",
    borderRadius: 100,
    width: '48%',
  },
  List_info_btn_2: {
    background: "#f0d17c",
    color: "#333333",
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '0.8vw',
    textTransform: "none",
    borderRadius: 100,
    width: '48%',
  },
  List_cardCont: {
    padding: '0.8vw'
  },
  List_cardAct: {
    padding: '0.6vw'
  }
}));


const Posts = ({ posts, loading }: any) => {
  const classes = useStyles();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  //   console.log("aa", posts);
  return (
    <Grid
      container
      justifyContent="flex-start"
      // spacing={2}
      style={{ marginTop: '3em', width: "100%", columnGap: '1.5vw', rowGap: '1.5vw', marginBottom: '1.5em' }}
    >
      {/* <ul className={classes.List_ul_c}> */}
      {posts.map((post: any) => (
        // <li style={{
        //   listStyleType: 'none'
        // }}>
        <Grid style={{ padding: '0px', width: '17vw', backgroundColor: 'red', boxShadow: '0px 5px 20px rgba(0,0,0,0.06)' }}>
          <Card className={classes.RelatedCourseCard}>
            <CardMedia>
              <img
                className={classes.List_image}
                src={girllaptop}
                alt=""
              />
            </CardMedia>
            <CardContent className={classes.List_cardCont}>
              <Typography className={classes.List_title}>
                Course Name
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.List_subtitle}                >
                is simply dummy text of printing of printing<br />

              </Typography>

              <div
                className={classes.List_info_c}
              >
                <div className={classes.List_info_c_c}>
                  <img
                    className={classes.List_info_img}
                    src={twomembers}
                    alt=""
                  />
                  <Typography className={classes.List_info_txt}>
                    &nbsp;34&nbsp;
                  </Typography>
                  <Typography className={classes.List_info_break}>|</Typography>
                </div>
                <div className={classes.List_info_c_c}>
                  <img
                    className={classes.List_info_img}
                    src={freetag}
                    alt=""
                  />
                  <Typography className={classes.List_info_txt}>
                    &nbsp;Free&nbsp;
                  </Typography>
                  <Typography className={classes.List_info_break}>|</Typography>
                </div>
                <div className={classes.List_info_c_c}>
                  <img
                    className={classes.List_info_img}
                    src={calender}
                    alt=""
                  />
                  <Typography className={classes.List_info_txt}>
                    &nbsp;5/07/2022
                  </Typography>
                </div>
              </div>
            </CardContent>

            <CardActions className={classes.List_cardAct}>
              <div
                className={classes.List_info_btn_c}
              >
                <Button
                  variant="contained"
                  className={classes.List_info_btn_1}
                  size="small"
                >
                  View Course
                </Button>
                <Button
                  variant="contained"
                  className={classes.List_info_btn_2}
                  size="small"
                >
                  Buy Now
                </Button>
              </div>
            </CardActions>
          </Card>
        </Grid>
        // </li>
      ))}
      {/* </ul> */}
    </Grid>

  );
};

export default Posts;

