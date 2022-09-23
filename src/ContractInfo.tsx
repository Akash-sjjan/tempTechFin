import React, { useState } from "react";
import { dropdown } from "./assets";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Timers from "./Timers";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Contract_container: {
      background: "#f7f7f7",
      padding: "2vw",
      borderRadius: "1vw",
    },
    prl_input_cc: {
      display: "flex",
      width: "100%",
      marginBottom: "1em",
    },
    prl_input_left: {
      position: "relative",
      width: "100%",
      marginRight: "1em",
    },
    prl_input_left_Count_c: {
      position: "relative",
      width: "100%",
      paddingRight: "1em",
      display: "flex",
    },
    prl_input_right: {
      position: "relative",
      width: "100%",
      marginLeft: "1em",
    },
    prl_input_lable: {
      display: "flex",
      fontSize: "0.9em",
      fontWeight: 600,
      fontFamily: "Inter",
      marginBottom: "0.7em",
      color: "rgba(51, 51, 51, 1)",
    },
    prl_input_dd: {
      position: "relative",
    },
    prl_input_dd_s: {
      width: "100%",
      height: "3.5rem",
      background: "white",
      color: "#a8a8a8",
      cursor: "pointer",
      border: "1px solid #c7c7c7",
      paddingLeft: "1.5em",
      fontSize: "0.8em",
      fontFamily: "Inter",
      borderRadius: "0.5em",
      "&:focus-visible": {
        outline: "0px",
      },
    },
    prl_input_dd_currency: {
      position: "relative",
      width: "8vw",
      height: "3vw",
    },
    prl_input_dd_s_currency: {
      width: "8vw",
      height: "100%",
      background: "white",
      color: "#a8a8a8",
      cursor: "pointer",
      border: "1px solid #c7c7c7",
      paddingLeft: "1.5em",
      fontSize: "1em",
      fontFamily: "Inter",
      borderRadius: "0.5em",
      "&:focus-visible": {
        outline: "0px",
      },
    },
    required: {
      color: "#ff0000",
    },
    prl_input_arrow: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "2em",
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginTop: "0.2em",
      marginRight: "0.2em",
      pointerEvents: "none",
    },
    prl_input_arrow_currency: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "2em",
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginTop: "0.2em",
      marginRight: "0.2em",
      pointerEvents: "none",
    },
    Contract_payInfo_txt: {
      color: "#333333",
      fontWeight: 600,
      fontSize: "1vw",
      fontFamily: "Inter",
      marginTop: "2vw",
      marginBottom: "1.5vw",
    },
    countC: {
      border: "0px",
      fontSize: "0.8vw",
      textAlign: "center",
      width: "100%",
      "&:focus-visible": {
        outline: "0px",
      },
    },
    addRmBtnC: {
      border: "0px",
      width: "3vw",
      fontSize: "1.5vw",
      background: "transparent",
      fontWeight: "normal",
      color: "#14292d",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    countCC: {
      border: "0.5px solid #c7c7c7",
      borderRadius: "0.25vw",
      height: "3vw",
      display: "flex",
      // width: '6vw',
      justifyContent: "space-between",
      backgroundColor: "#fff",
      marginRight: "0.7vw",
    },
    contract_scroll_C: {
      background: "#ffffff",
    },
    contract_scroll_header: {
      background: "#14292d",
      borderRadius: "0.25vw",
      display: "flex",
      paddingTop: "1vw",
      paddingBottom: "1vw",
    },
    contract_scroll_head_p1: {
      flex: 3,
      textAlign: "center",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "0.8vw",
      color: "#ffffff",
      margin: "0px",
    },
    contract_scroll_head_p2: {
      flex: 7,
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "0.8vw",
      color: "#ffffff",
      margin: "0px",
    },
    contract_sroll_item_c: {
      display: "flex",
      paddingTop: "0.8vw",
      paddingBottom: "0.8vw",
    },
    contract_sroll_item_p1: {
      flex: 3,
      textAlign: "center",
      color: "#181617",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "0.85vw",
    },
    contract_sroll_item_p2_c: {
      flex: 3,
    },
    contract_sroll_item_p2: {
      paddingLeft: "1vw",
      color: "#181617",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "0.85vw",
    },
    contract_sroll_item_input: {
      flex: 4,
      paddingLeft: "0.8vw",
      border: "0.5px solid #c7c7c7",
      borderRadius: "0.25vw",
      color: "#666666",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "0.75vw",
      "&:focus-visible": {
        outline: "0px",
      },
    },
    contract_send_info_btn: {
      backgroundColor: "#ff0000",
      marginTop: "1.5vw",
      borderRadius: "10em",
      textTransform: "none",
      paddingLeft: "1.5vw",
      paddingRight: "1.5vw",
      color: "#ffffff",
      fontWeight: 700,
      fontFamily: "Inter",
      fontSize: "0.85vw",
      "&:hover": {
        backgroundColor: "#ff0000",
      },
    },
  })
);

interface Props {
  startTime: any;
  endTime: any;
}
const ContractInfo = ({ startTime, endTime }: Props) => {
  const classes = useStyles();
  const [totClasses, setTotClasses] = useState<string>("1");
  const [noOfPayments, setNoOfPayments] = useState<string>("1");

  const handleIncTotClasses = () => {
    if (totClasses !== "") {
      const inc = parseInt(totClasses) + 1;
      setTotClasses(inc.toString());
    }
  };
  const handleDecTotClasses = () => {
    if (totClasses !== "" && totClasses !== "0" && totClasses !== "1") {
      const inc = parseInt(totClasses) - 1;
      setTotClasses(inc.toString());
    }
  };
  const handleIncNoOfClasses = () => {
    if (noOfPayments !== "") {
      const inc = parseInt(noOfPayments) + 1;
      setNoOfPayments(inc.toString());
    }
  };
  const handleDecNoOfClasses = () => {
    if (noOfPayments !== "" && noOfPayments !== "0" && noOfPayments !== "1") {
      const inc = parseInt(noOfPayments) - 1;
      setNoOfPayments(inc.toString());
    }
  };

  return (
    <div className={classes.Contract_container}>
      <div className={classes.prl_input_cc}>
        <div className={classes.prl_input_left}>
          <label className={classes.prl_input_lable}>Class Timings</label>
          <Timers startTime={startTime} endTime={endTime} />
        </div>
        <div className={classes.prl_input_right}>
          <label className={classes.prl_input_lable}>Contract Type</label>
          <div className={classes.prl_input_dd}>
            <select
              className={classes.prl_input_dd_s}
              defaultValue="Full Time"
              onChange={(e) => {
                // this.handleStateChange(e);
              }}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            <span className={classes.prl_input_arrow}>
              <img src={dropdown} alt="arrow" />
            </span>
          </div>
        </div>
      </div>
      <p className={classes.Contract_payInfo_txt}>Payment Info</p>
      <div className={classes.prl_input_cc}>
        <div className={classes.prl_input_left}>
          <label className={classes.prl_input_lable}>Payment Condition</label>
          <div className={classes.prl_input_dd}>
            <select
              className={classes.prl_input_dd_s}
              defaultValue="By Class"
              onChange={(e) => {
                // this.handleCountryChange(e);
              }}
            >
              <option value="By Class" data-key="Empty">
                By Class
              </option>
              <option value="By Duration" data-key="Empty">
                By Duration
              </option>
            </select>
            <span className={classes.prl_input_arrow}>
              <img src={dropdown} alt="arrow" />
            </span>
          </div>
        </div>
        <div className={classes.prl_input_right}>
          <label className={classes.prl_input_lable}>Distribution Method</label>
          <div className={classes.prl_input_dd}>
            <select
              className={classes.prl_input_dd_s}
              defaultValue="In Amount"
              onChange={(e) => {
                // this.handleStateChange(e);
              }}
            >
              <option value="In Amount">In Amount</option>
              <option value="In Percentage">In Percentage</option>
            </select>
            <span className={classes.prl_input_arrow}>
              <img src={dropdown} alt="arrow" />
            </span>
          </div>
        </div>
      </div>
      <p className={classes.Contract_payInfo_txt}>Payment Structure</p>
      <div className={classes.prl_input_cc}>
        <div className={classes.prl_input_left_Count_c}>
          <div>
            <label className={classes.prl_input_lable}>Total Classes</label>
            <div className={classes.countCC}>
              <button className={classes.addRmBtnC} onClick={handleDecTotClasses}>
                <p style={{ width: "2.5vw" }}>-</p>
              </button>
              <input
                name="startTime"
                type="text"
                pattern="[0-9]*"
                className={classes.countC}
                value={totClasses}
                onChange={async (e) => {
                  const re = /^[0-9\b]+$/;
                  console.log(re.test(e.target.value));
                  if (e.target.value === "" || re.test(e.target.value)) {
                    if (parseInt(e.target.value) !== 0) {
                      setTotClasses(e.target.value);
                    } else {
                      setTotClasses("1");
                    }
                    // console.log("set");
                  }
                }}
                // tabIndex={3}
                // maxLength={2}
                // onKeyUp={(e) => inputfocus(e)}
              />
              <button className={classes.addRmBtnC} onClick={handleIncTotClasses}>
                <p style={{ width: "2.5vw" }}>+</p>
              </button>
            </div>
          </div>
          <div>
            <label className={classes.prl_input_lable}>No: of Payments</label>

            <div className={classes.countCC}>
              <button className={classes.addRmBtnC} style={{}} onClick={handleDecNoOfClasses}>
                <p style={{ width: "2.5vw" }}>-</p>
              </button>
              <input
                name="startTime"
                type="text"
                autoComplete="off"
                className={classes.countC}
                value={noOfPayments}
                onChange={async (e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    if (parseInt(e.target.value) !== 0) {
                      setNoOfPayments(e.target.value);
                    } else {
                      setNoOfPayments("1");
                    }
                    // console.log("set");
                  }
                }}
                // tabIndex={3}
                // maxLength={2}
                // onKeyUp={(e) => inputfocus(e)}
              />
              <button className={classes.addRmBtnC} onClick={handleIncNoOfClasses}>
                <p style={{ width: "2.5vw" }}>+</p>
              </button>
            </div>
          </div>
          <div>
            <label className={classes.prl_input_lable}>Currency</label>
            <div className={classes.prl_input_dd_currency}>
              <select
                className={classes.prl_input_dd_s_currency}
                defaultValue="INR"
                onChange={(e) => {
                  // this.handleStateChange(e);
                }}
              >
                <option value="INR">INR</option>
              </select>
              <span className={classes.prl_input_arrow_currency}>
                <img src={dropdown} alt="arrow" />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.prl_input_right}></div>
      </div>
      <div className={classes.contract_scroll_C}>
        <div className={classes.contract_scroll_header}>
          <p className={classes.contract_scroll_head_p1}>Payment No:</p>
          <p className={classes.contract_scroll_head_p2}>Payment</p>
        </div>
        <div>
          <div className={classes.contract_sroll_item_c}>
            <p className={classes.contract_sroll_item_p1}>PN001</p>
            <input type="text" className={classes.contract_sroll_item_input} />
            <div className={classes.contract_sroll_item_p2_c}>
              <p className={classes.contract_sroll_item_p2}>₹</p>
            </div>
          </div>
          <div style={{ marginLeft: "2vw", marginRight: "2vw", borderBottom: "0.5px solid #c7c7c7" }} />
          <div className={classes.contract_sroll_item_c}>
            <p className={classes.contract_sroll_item_p1}>PN002</p>
            <input type="text" className={classes.contract_sroll_item_input} />
            <div className={classes.contract_sroll_item_p2_c}>
              <p className={classes.contract_sroll_item_p2}>₹</p>
            </div>
          </div>
          <div style={{ marginLeft: "2vw", marginRight: "2vw", borderBottom: "0.5px solid #c7c7c7" }} />
          <div className={classes.contract_sroll_item_c}>
            <p className={classes.contract_sroll_item_p1}>PN003</p>
            <input type="text" className={classes.contract_sroll_item_input} />
            <div className={classes.contract_sroll_item_p2_c}>
              <p className={classes.contract_sroll_item_p2}>₹</p>
            </div>
          </div>
          <div style={{ marginLeft: "2vw", marginRight: "2vw", borderBottom: "0.5px solid #c7c7c7" }} />
          <div className={classes.contract_sroll_item_c}>
            <p className={classes.contract_sroll_item_p1}>PN004</p>
            <input type="text" className={classes.contract_sroll_item_input} />
            <div className={classes.contract_sroll_item_p2_c}>
              <p className={classes.contract_sroll_item_p2}>₹</p>
            </div>
          </div>
          <div style={{ marginLeft: "2vw", marginRight: "2vw", borderBottom: "0.5px solid #c7c7c7" }} />
          <div className={classes.contract_sroll_item_c}>
            <p className={classes.contract_sroll_item_p1}>PN005</p>
            <input type="text" className={classes.contract_sroll_item_input} />
            <div className={classes.contract_sroll_item_p2_c}>
              <p className={classes.contract_sroll_item_p2}>₹</p>
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" className={classes.contract_send_info_btn}>
        Send Contract Info to Candidate
      </Button>
    </div>
  );
};

export default ContractInfo;
