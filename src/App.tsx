import React, { Component } from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import "./App.css";
import { contactusPhone, contractTeacherDp, dashArrowActive, dashArrowInactive, girllaptop } from "./assets";
import DashNav from "./DashNav";
import NextClassNotification from "./NextClassNotification";
import DashAdvartiseCard from "./DashAdvartiseCard";
import { Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import Timers from "./Timers";
import ContractInfo from "./ContractInfo";
import AddContractsuccess from "./AddContractsuccess";

interface Props {
  classes: any;
}
interface States {}

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    add_contract_container: {
      paddingLeft: "13vw",
      paddingRight: "13vw",
      paddingTop: "3vw",
      display: "flex",
    },
    dash_left_c: {
      flex: 2,
    },
    add_contract_cc: {
      width: "100%",
      marginLeft: "2vw",
      flex: 7.5,
    },
    add_contract_Hr: {
      borderBottom: "0.5px solid #e4e4e5",
    },
    add_contract_title: {
      color: "#14292d",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1.55vw",
      margin: "0px",
      marginBottom: "1vw",
    },
    add_contract_card_c: {
      boxShadow: "0px 5px 30px rgba(0,0,0,0.05)",
      borderRadius: "1vw",
      padding: "2vw",
      marginTop: "2vw",
    },
    add_contract_card_row_1: {
      display: "flex",
      justifyContent: "space-between",
    },
    add_contract_card_row_1_sec_1: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    add_contract_card_row_1_sec_1_img: {
      width: "4vw",
      height: "4vw",
      objectFit: "cover",
      borderRadius: "50%",
    },
    add_contract_card_row_1_sec_1_name: {
      color: "#333333",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1.2vw",
      marginLeft: "1vw",
    },
    add_contract_card_row_1_sec_1_stat_c: {
      color: "#181617",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "0.85vw",
    },
    add_contract_card_row_1_sec_1_stat: {
      color: "#6f924a",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "0.85vw",
    },
    add_contract_card_row_2: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1.5vw",
    },
    add_contract_card_row_2_tit: {
      margin: "0px",
      color: "#ff0000",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1vw",
    },
    add_contract_card_row_2_tit_tit: {
      margin: "0px",
      marginTop: "0.7vw",
      color: "#181617",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "0.85vw",
    },
    add_contract_card_row_3: {
      marginTop: "1.5vw",
      marginBottom: "1.5vw",
    },
    add_contract_card_row_3_btn: {
      borderColor: "#ff4452",
      borderWidth: "2px",
      borderRadius: "10em",
      color: "#333333",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "0.7vw",
      textTransform: "none",
      paddingLeft: "1vw",
      paddingRight: "1vw",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    add_contract_card_row_4: {
      marginTop: "1.5vw",
    },
    add_contract_card_row_4_btn1: {
      backgroundColor: "#ff0000",
      borderRadius: "10em",
      textTransform: "none",
      paddingLeft: "1vw",
      paddingRight: "1vw",
      marginRight: "1vw",
      color: "#ffffff",
      fontWeight: 500,
      fontFamily: "Inter",
      fontSize: "0.7vw",
      "&:hover": {
        backgroundColor: "#ff0000",
      },
    },
    add_contract_card_row_4_btn2_inactive: {
      backgroundColor: "#f0d17c",
      borderRadius: "10em",
      textTransform: "none",
      paddingLeft: "1vw",
      paddingRight: "1vw",
      color: "#333333",
      fontWeight: 600,
      fontFamily: "Inter",
      fontSize: "0.7vw",
      "&:hover": {
        backgroundColor: "#f0d17c",
      },
    },
    add_contract_details_cc: {
      marginTop: "4vw",
    },
    add_contract_details_title: {
      color: "#333333",
      fontFamily: "Inter",
      fontSize: "1.2vw",
      fontWeight: 600,
    },
  });
// Customizable Area End

class App extends Component<Props, States> {
  indexOfLastPost: any;
  indexOfFirstPost: any;
  currentPosts: any;
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  startTime = (val: any) => {
    console.log("startssssssssssssssssss", val);
  };
  endTime = (val: any) => {
    console.log("Enddddddddddddddddddddddddddd", val);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.add_contract_container}>
        <div className={classes.dash_left_c}>
          <DashNav active="HireATeacher" styles={{ marginBottom: "1.5vw" }} />
          <NextClassNotification
            timings="10:00 AM - 11:00 PM"
            title="Introduction to foundation of digital marketing and e-commerce"
            subtitle=" Lorem Ipsum is simply dummy text of the printing"
            onClick={() => {
              console.log("Next Class");
            }}
            styles={{ marginBottom: "1.5vw" }}
          />
          <DashAdvartiseCard
            title="One on One classes with Teachers"
            subtitle="Lorem Ipsum is simply dummy text of the printing"
            styles={{}}
            onClick={() => {}}
          />
        </div>
        <div className={classes.add_contract_cc}>
          <p className={classes.add_contract_title}>Candidate Details</p>
          <div className={classes.add_contract_Hr} />
          <div className={classes.add_contract_card_c}>
            <div className={classes.add_contract_card_row_1}>
              <div className={classes.add_contract_card_row_1_sec_1}>
                <img src={contractTeacherDp} alt="" className={classes.add_contract_card_row_1_sec_1_img} />
                <p className={classes.add_contract_card_row_1_sec_1_name}>Ajit Wadora</p>
              </div>
              <div className={classes.add_contract_card_row_1_sec_1}>
                <p className={classes.add_contract_card_row_1_sec_1_stat_c}>Status:&nbsp;&nbsp;</p>
                <p className={classes.add_contract_card_row_1_sec_1_stat}>Accepted</p>
              </div>
            </div>
            <div className={classes.add_contract_card_row_2}>
              <div>
                <p className={classes.add_contract_card_row_2_tit}>Experience</p>
                <p className={classes.add_contract_card_row_2_tit_tit}>2-3 years</p>
              </div>
              <div>
                <p className={classes.add_contract_card_row_2_tit}>Qualification</p>
                <p className={classes.add_contract_card_row_2_tit_tit}>Post Graduate</p>
              </div>
              <div>
                <p className={classes.add_contract_card_row_2_tit}>Specialization</p>
                <p className={classes.add_contract_card_row_2_tit_tit}>English</p>
              </div>
              <div>
                <p className={classes.add_contract_card_row_2_tit}>Languages</p>
                <p className={classes.add_contract_card_row_2_tit_tit}>English, Hindi</p>
              </div>
              <div>
                <p className={classes.add_contract_card_row_2_tit}>Availability</p>
                <p className={classes.add_contract_card_row_2_tit_tit}>After 1 week</p>
              </div>
            </div>
            <div className={classes.add_contract_card_row_3}>
              <Button variant="outlined" className={classes.add_contract_card_row_3_btn}>
                Download Resume
              </Button>
            </div>
            <div className={classes.add_contract_Hr} />
            <div className={classes.add_contract_card_row_4}>
              <Button variant="contained" className={classes.add_contract_card_row_4_btn1}>
                Send Message
              </Button>
              <Button variant="contained" className={classes.add_contract_card_row_4_btn2_inactive}>
                Add Contract Info
              </Button>
            </div>
          </div>
          <div className={classes.add_contract_details_cc}>
            <p className={classes.add_contract_details_title}>Contract Info</p>
            {/* 
            <div>
              <ContractInfo startTime={this.startTime} endTime={this.endTime} />
            </div> 
            */}
            <div>
              <AddContractsuccess />
            </div>
          </div>
          {/* <iframe src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" title="description"></iframe> */}
        </div>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(App);
