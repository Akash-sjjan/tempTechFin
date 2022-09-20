import React, { Component } from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import './App.css'
import { contactUsSec2Img, dropdown, contactUsLoc, contactUsEmail, contactusPhone } from "./assets";
import { Button } from "@material-ui/core";
import ContactUsMap from "./ContactUsMap";
import ContactUsAccords from "./ContactUsAccords";

interface Props {
  classes: any;
}
interface States { }

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    contactUs: {

    },
    contactUs_sec_2_c: {
      backgroundColor: '#f7f7f7',
      paddingLeft: '17%',
      paddingRight: '17%',

    },
    contactUs_sec_2_title: {
      color: '#333333',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '1.7vw',
      paddingTop: '2vw'
    },
    CONTACT_sub_c: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    CONTACT_sub_btn: {
      backgroundColor: '#ff0000',
      borderRadius: '10em',
      width: '15vw',
      height: '2.8vw',
      marginBottom: '6vw',
      color: '#ffffff',
      fontFamily: 'Inter',
      fontSize: '0.8vw',
      fontWeight: 700,
      textTransform: 'none'
    },
    contactUs_sec_3_c: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: '17%',
      paddingRight: '17%',
      // marginTop: '8vw',
      backgroundColor: '#ffffff',
      position: 'relative',
      height: '25vw'
    },
    contactUs_sec_4_c: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '4vw',
      background: "linear-gradient(#14292d 50%, #ffffff 0%)",
    },
    contactUs_sec_4_Map_c: {
      width: '66vw', height: '22vw'
    },
    contactUs_sec_4_title: {
      color: '#ffffff',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '2vw',
      marginTop: '3vw',
      marginBottom: '3vw'
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

  componentDidMount() { }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contactUs}>
        <div className={classes.contactUs_sec_2_c}>
          <p className={classes.contactUs_sec_2_title}>Send Us a Message</p>
          <div className="prl-input-cc">
            <div className="prl-input-left">
              <label className="prl-input-lable">
                I am a<sup className="required">*</sup>
              </label>
              <div className="prl-input-dd">
                <select
                  className="prl-input-dd-s"
                  defaultValue="learner"
                  onChange={(e) => {
                    // this.handleCountryChange(e);
                  }}
                // style={this.state.errCountry ? this.errStyle : {}}
                >
                  <option value="learner" data-key="Empty">
                    Learner
                  </option> <option value="teacher" data-key="Empty">
                    Teacher
                  </option>
                  {/* {this.state.listCountry.map((val, key) => {
                            return (
                              <option
                                value={key}
                                key={key}
                                data-key={val.isoCode}
                                a-key={val.isoCode}
                              >
                                {val.name}
                              </option>
                            );
                          })} */}
                </select>
                <span
                  className="prl-input-arrow"
                // style={
                //   this.state.errCountry
                //     ? { backgroundColor: "#fcecec" }
                //     : {}
                // }
                >
                  <img src={dropdown} alt="arrow" />
                </span>
                {/* {this.state.errCountry ? (
                          <p className="prl-input-err-txt">
                            Please select a value.
                          </p>
                        ) : (
                          <></>
                        )} */}
              </div>
            </div>
            <div className="prl-input-right">
              <label className="prl-input-lable">
                What can we help you with<sup className="required">*</sup>
              </label>
              <div className="prl-input-dd">
                <select
                  className="prl-input-dd-s"
                  defaultValue="Please Select"
                  onChange={(e) => {
                    // this.handleStateChange(e);
                  }}
                // style={this.state.errState ? this.errStyle : {}}
                >
                  <option value="Please Select">Please Select</option>
                  {/* {this.state.listState.map((val, key) => {
                            return (
                              <option value={key} key={key}>
                                {val.name}
                              </option>
                            );
                          })} */}
                </select>
                <span
                  className="prl-input-arrow"
                // style={
                //   this.state.errState
                //     ? { backgroundColor: "#fcecec" }
                //     : {}
                // }
                >
                  <img src={dropdown} alt="arrow" />
                </span>
                {/* {this.state.errState ? (
                          <p className="prl-input-err-txt">
                            Please select a value.
                          </p>
                        ) : (
                          <></>
                        )} */}
              </div>
            </div>
          </div>
          <div className="prl-input-cc">
            <div className="prl-input-left">
              <label className="prl-input-lable">
                Your Name<sup className="required">*</sup>
              </label>
              <input
                className="prl-input"
                type="text"
                value=''
                required
                onChange={(e) => {
                  // this.handleFNameChange(e);
                }}
                placeholder="Enter Name"
              // style={this.state.errFName ? this.errStyle : {}}
              />
              {/* {this.state.errFName ? (
                        <p className="prl-input-err-txt">
                          Please enter a value.{" "}
                        </p>
                      ) : (
                        <></>
                      )} */}
              {/* {this.state.errMaxFName ? (
                        <p className="prl-input-err-txt">
                          Maximum 15 characters
                        </p>
                      ) : (
                        <></>
                      )} */}
            </div>
            <div className="prl-input-right">
              <label className="prl-input-lable">
                Email<sup className="required">*</sup>
              </label>
              <input
                className="prl-input"
                type="email"
                value=''
                required
                onChange={(e) => {
                  // this.handleLNameChange(e);
                }}
                placeholder="email@gmail.com"
              // style={this.state.errLName ? this.errStyle : {}}
              />
              {/* {this.state.errLName ? (
                        <p className="prl-input-err-txt">
                          Please enter a value.{" "}
                        </p>
                      ) : (
                        <></>
                      )} */}
              {/* {this.state.errMaxLName ? (
                        <p className="prl-input-err-txt">
                          Maximum 15 characters
                        </p>
                      ) : (
                        <></>
                      )} */}
            </div>
          </div>
          <div className="prl-input-cc-message">
            <div className="prl-input-message">
              <label className="prl-input-lable">
                Your Message<sup className="required">*</sup>
              </label>
              <textarea
                className="prl-input prl-input-message"
                value=''
                required
                onChange={(e) => {
                  // this.handleFNameChange(e);
                }}
                placeholder="Enter Details"
                cols={10}
                rows={10}
              // style={this.state.errFName ? this.errStyle : {}}
              />
              {/* {this.state.errFName ? (
                        <p className="prl-input-err-txt">
                          Please enter a value.{" "}
                        </p>
                      ) : (
                        <></>
                      )} */}
              {/* {this.state.errMaxFName ? (
                        <p className="prl-input-err-txt">
                          Maximum 15 characters
                        </p>
                      ) : (
                        <></>
                      )} */}
            </div>

          </div>
          <div className={classes.CONTACT_sub_c}>
            <Button className={classes.CONTACT_sub_btn} variant="contained">Submit</Button>
          </div>
        </div>
        <div className={classes.contactUs_sec_3_c}>

          <div className="TL-sec-2-txt">
            <div className="TL-sec-2-title">
              <p>Keep in touch with us</p>
            </div>
            <div className="TL-sec-2-sub-c">
              <div className="TL-sec-2-txt-subtxt">
                <div className="TL-sec-2-txt-s">
                  <img src={contactUsLoc} alt='' />
                </div>
                <p className="TL-sec-2-txt-t">Lorem Ipsum, Dolor Amet, Worli - Bumbai, India 000</p>
              </div>
              <div className="TL-sec-2-txt-subtxt">
                <div className="TL-sec-2-txt-s">
                  <img src={contactUsEmail} alt='' />
                </div>
                <p className="TL-sec-2-txt-t">email@gmail.com</p>
              </div>
              <div className="TL-sec-2-txt-subtxt">
                <div className="TL-sec-2-txt-s">
                  <img src={contactusPhone} alt='' />
                </div>
                <p className="TL-sec-2-txt-t">+91123458645</p>
              </div>
            </div>
          </div>
          <div className="TL-sec-2-img">
            <img src={contactUsSec2Img} alt="img" />
          </div>
        </div>
        <div className={classes.contactUs_sec_4_c}>
          <p className={classes.contactUs_sec_4_title}>View us on Map</p>
          <div className={classes.contactUs_sec_4_Map_c} >
            <ContactUsMap />
          </div>
        </div>
        <ContactUsAccords />
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(App);

