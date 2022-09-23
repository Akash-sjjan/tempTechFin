import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { contractSuccessIcon } from "./assets";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Contract_container: {
      background: "#f7f7f7",
      padding: "3vw",
      borderRadius: "1vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    Contract_suc_Hr: {
      borderBottom: "0.5px solid #c7c7c7",
      width: "100%",
      marginTop: "2.5vw",
      marginBottom: "2.5vw",
    },
    Contract_suc_img: {
      width: "4vw",
    },
    Contract_suc_p1: {
      margin: "0px",
      color: "#ff0000",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1.55vw",
      marginTop: "2vw",
    },
    Contract_suc_p2: {
      margin: "0px",
      color: "#14292d",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1vw",
    },
  })
);
function AddContractsuccess() {
  const classes = useStyles();

  return (
    <div className={classes.Contract_container}>
      <div>
        <img src={contractSuccessIcon} alt="" className={classes.Contract_suc_img} />
      </div>
      <p className={classes.Contract_suc_p1}>Contract successfully sent to candidate</p>
      <div className={classes.Contract_suc_Hr} />
      <p className={classes.Contract_suc_p2}>you will be notified once the candidate accepts or rejects the proposal</p>
    </div>
  );
}

export default AddContractsuccess;
