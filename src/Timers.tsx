import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { dropdown } from "./assets";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
    },
    timeC: {
      border: "0px",
      fontSize: "0.8vw",
      "&:focus-visible": {
        outline: "0px",
      },
      "&::-webkit-calendar-picker-indicator": {
        background: "none",
        display: "none",
      },
    },
    addRmBtnC: {
      border: "0px",
      width: "2vw",
      fontSize: "1.5vw",
      background: "transparent",
      fontWeight: "normal",
      color: "#14292d",
    },
    timeCC: {
      border: "0.5px solid #c7c7c7",
      borderRadius: "0.25vw",
      height: "3vw",
      display: "flex",
      // width: '6vw',
      justifyContent: "space-between",
      backgroundColor: "#fff",
      marginRight: "0.7vw",
    },
    AmPmSelectC: {
      border: "0.5px solid #c7c7c7",
      borderRadius: "0.25vw",
      width: "3vw",
    },
    AmPm_input_dd_s: {
      width: "4vw",
      height: "100%",
      background: "white",
      color: "#a8a8a8",
      cursor: "pointer",
      border: "1px solid #c7c7c7",
      paddingLeft: "0.9em",
      fontSize: "0.8em",
      fontFamily: "Inter",
      borderRadius: "0.5em",
      "&:focus-visible": {
        outline: "0px",
      },
    },
    AmPm_input_arrow: {
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
      marginRight: "0.3em",
      pointerEvents: "none",
    },
    prl_input_dd: {
      position: "relative",
    },
  })
);
interface Props {
  startTime: any;
  endTime: any;
}
const Timers = ({ startTime, endTime }: Props) => {
  const classes = useStyles();
  const [Stime, setSTime] = useState("10:00");
  const [Etime, setETime] = useState("05:00");

  // if (Stime[1] === "0") {
  //   console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
  // }

  useEffect(() => {
    console.log("Stime", Stime);
    console.log("Etime", Etime);
    let St = Stime.toString();
    const Stt = St[0] + St[1];
    if (parseInt(Stt) > 12) {
      let Sttt = "12" + St[2] + St[3] + St[4];
      setSTime(Sttt);
      //   console.log("setStart", ttt);
    }
    // console.log("tttttttttttttttttt", parseInt(tt));
    // if (parseInt(Stt) === 0) {
    //   let Sttt = "01" + St[2] + St[3] + St[4];
    //   setSTime(Sttt);
    //   //   console.log("setttttttttttttStart", ttt);
    // }
    // console.log("start", Stt);
    startTime(Stime);
    // *********************************** End Timer *************************************//
    let Et = Etime.toString();
    const Ett = Et[0] + Et[1];
    if (parseInt(Ett) > 12) {
      let Ettt = "12" + Et[2] + Et[3] + Et[4];
      setETime(Ettt);
      //   console.log("setStart", ttt);
    }
    // console.log("tttttttttttttttttt", parseInt(tt));
    // if (Et[1] === "0") {
    //   let Ettt = "01" + Et[2] + Et[3] + Et[4];
    //   setETime(Ettt);
    //   console.log("Error", Ett);
    // }
    // console.log("start", Ett);
    endTime(Etime);
  }, [Stime, Etime]);

  const handleStartTime = async (val: any) => {
    // await setTime(val)
    await setSTime(val.target.value);
    console.log("STORAGE_START", Stime);
  };
  const handleEndTime = async (val: any) => {
    // await setTime(val)
    await setETime(val.target.value);
  };

  const handleStartInc = () => {
    let t = Stime.toString();
    let tt = "0";
    if (t[0] == "0") {
      tt = t[1];
    } else {
      tt = t[0] + t[1];
    }
    if (parseInt(tt) >= 12) {
      let ttt = "01" + t[2] + t[3] + t[4];
      setSTime(ttt);
      //   console.log("setStartTime", ttt);
    } else {
      const tttt = parseInt(tt) + 1;
      let ss = tttt.toString();
      if (ss.length <= 1) {
        ss = "0" + ss;
      }
      //   console.log("ffff", tt);
      let ttt = ss + t[2] + t[3] + t[4];
      setSTime(ttt);
      //   console.log("setStartTime", ttt);
    }
  };

  const handleEndInc = () => {
    let t = Etime.toString();
    let tt = "0";
    if (t[0] == "0") {
      tt = t[1];
    } else {
      tt = t[0] + t[1];
    }
    if (parseInt(tt) >= 12) {
      let ttt = "01" + t[2] + t[3] + t[4];
      setETime(ttt);
      //   console.log("setStartTime", ttt);
    } else {
      const tttt = parseInt(tt) + 1;
      let ss = tttt.toString();
      if (ss.length <= 1) {
        ss = "0" + ss;
      }
      //   console.log("ffff", tt);
      let ttt = ss + t[2] + t[3] + t[4];
      setETime(ttt);
      //   console.log("setStartTime", ttt);
    }
  };

  const handleStartDec = () => {
    let t = Stime.toString();
    let tt = "0";
    if (t[0] == "0") {
      tt = t[1];
    } else {
      tt = t[0] + t[1];
    }
    // if (parseInt(tt) >= 12) {
    //     let ttt = '01' + t[2] + t[3] + t[4]
    //     setTime(ttt)
    //     console.log('setStartTime', ttt)
    // } else
    if (parseInt(tt) <= 1) {
      let ttt = "12" + t[2] + t[3] + t[4];
      setSTime(ttt);
      //   console.log("setStartTime", ttt);
    } else {
      const tttt = parseInt(tt) - 1;
      let ss = tttt.toString();
      if (ss.length <= 1) {
        ss = "0" + ss;
      }
      //   console.log("ffff", tt);
      let ttt = ss + t[2] + t[3] + t[4];
      setSTime(ttt);
      //   console.log("setStartTime", ttt);
    }
  };

  const handleEndDec = () => {
    let t = Etime.toString();
    let tt = "0";
    if (t[0] == "0") {
      tt = t[1];
    } else {
      tt = t[0] + t[1];
    }
    // if (parseInt(tt) >= 12) {
    //     let ttt = '01' + t[2] + t[3] + t[4]
    //     setTime(ttt)
    //     console.log('setStartTime', ttt)
    // } else
    if (parseInt(tt) <= 1) {
      let ttt = "12" + t[2] + t[3] + t[4];
      setETime(ttt);
      //   console.log("setStartTime", ttt);
    } else {
      const tttt = parseInt(tt) - 1;
      let ss = tttt.toString();
      if (ss.length <= 1) {
        ss = "0" + ss;
      }
      //   console.log("ffff", tt);
      let ttt = ss + t[2] + t[3] + t[4];
      setETime(ttt);
      //   console.log("setStartTime", ttt);
    }
  };
  return (
    <div className={classes.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <div className={classes.timeCC}>
            <button className={classes.addRmBtnC} onClick={handleStartDec}>
              -
            </button>
            <input
              name="startTime"
              type="time"
              autoComplete="off"
              className={classes.timeC}
              value={Stime}
              onChange={async (e) => {
                handleStartTime(e);
              }}
              // tabIndex={3}
              // maxLength={2}
              // onKeyUp={(e) => inputfocus(e)}
            />
            <button className={classes.addRmBtnC} onClick={handleStartInc}>
              +
            </button>
          </div>
          <div className={classes.prl_input_dd}>
            <select className={classes.AmPm_input_dd_s} defaultValue="AM" onChange={(e) => {}}>
              <option value="AM" data-key="Empty">
                AM
              </option>
              <option value="PM" data-key="Empty">
                PM
              </option>
            </select>
            <span className={classes.AmPm_input_arrow}>
              <img src={dropdown} alt="arrow" />
            </span>
          </div>
        </div>
        <p>to</p>
        <div style={{ display: "flex" }}>
          <div className={classes.timeCC}>
            <button className={classes.addRmBtnC} onClick={handleEndDec}>
              -
            </button>
            <input
              name="startTime"
              type="time"
              autoComplete="off"
              className={classes.timeC}
              value={Etime}
              onChange={async (e) => {
                handleEndTime(e);
              }}
              // tabIndex={3}
              // maxLength={2}
              // onKeyUp={(e) => inputfocus(e)}
            />
            <button className={classes.addRmBtnC} onClick={handleEndInc}>
              +
            </button>
          </div>
          <div className={classes.prl_input_dd}>
            <select className={classes.AmPm_input_dd_s} defaultValue="learner" onChange={(e) => {}}>
              <option value="learner" data-key="Empty">
                AM
              </option>
              <option value="teacher" data-key="Empty">
                PM
              </option>
            </select>
            <span className={classes.AmPm_input_arrow}>
              <img src={dropdown} alt="arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timers;
