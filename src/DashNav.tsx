import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { dashArrowActive, dashArrowInactive } from "./assets";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    dash_nav_container: {
        backgroundColor: '#f7f7f7',
        width: '100%',
        borderRadius: '1vw',

    },
    dash_nav_c: {
        paddingTop: '2vw',
        paddingBottom: '1.3vw',
        paddingLeft: '1.3vw',
        paddingRight: '1.3vw',
    },
    dash_nav_item_c: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginBottom: '1vw',
        cursor: 'pointer'

    },
    dash_nav_item_img: {
        width: '0.5vw',
        marginRight: '0.5vw'
    },
    dash_nav_item_txt: {
        fontWeight: 600,
        fontFamily: 'Inter',
        color: '#333333',
        fontSize: '0.85vw',
        margin: '0px'
    }

}));

interface Props {
    active: 'Dashboard' | "Courses" | "Classes&Teachers" | 'HireATeacher' | "Messages" | "Profile" | "Settings"
    styles?: React.CSSProperties | undefined;
}
const DashNav = ({ active, styles }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.dash_nav_container} style={styles}>
            <div className={classes.dash_nav_c}>
                <div onClick={() => { console.log('Dashboard') }} className={classes.dash_nav_item_c}>
                    {active == "Dashboard" ? <img src={dashArrowActive} alt="" className={classes.dash_nav_item_img} /> : <img src={dashArrowInactive} alt="" className={classes.dash_nav_item_img} />}
                    <p className={classes.dash_nav_item_txt} style={active == "Dashboard" ? { color: '#ff0000' } : {}}>Dashboard</p>
                </div>
                <div onClick={() => { console.log('Courses') }} className={classes.dash_nav_item_c}>
                    {active == "Courses" ? <img src={dashArrowActive} alt="" className={classes.dash_nav_item_img} /> : <img src={dashArrowInactive} alt="" className={classes.dash_nav_item_img} />}
                    <p className={classes.dash_nav_item_txt} style={active == "Courses" ? { color: '#ff0000' } : {}}>Courses</p>
                </div>
                <div onClick={() => { console.log('Classes & Teachers') }} className={classes.dash_nav_item_c}>
                    {active == "Classes&Teachers" ? <img src={dashArrowActive} alt="" className={classes.dash_nav_item_img} /> : <img src={dashArrowInactive} alt="" className={classes.dash_nav_item_img} />}
                    <p className={classes.dash_nav_item_txt} style={active == "Classes&Teachers" ? { color: '#ff0000' } : {}}>Classes & Teachers</p>
                </div>
                <div onClick={() => { console.log('Hire a Teacher') }} className={classes.dash_nav_item_c}>
                    {active == "HireATeacher" ? <img src={dashArrowActive} alt="" className={classes.dash_nav_item_img} /> : <img src={dashArrowInactive} alt="" className={classes.dash_nav_item_img} />}
                    <p className={classes.dash_nav_item_txt} style={active == "HireATeacher" ? { color: '#ff0000' } : {}}>Hire a Teacher</p>
                </div>
                <div onClick={() => { console.log('Messages') }} className={classes.dash_nav_item_c}>
                    {active == "Messages" ? <img src={dashArrowActive} alt="" className={classes.dash_nav_item_img} /> : <img src={dashArrowInactive} alt="" className={classes.dash_nav_item_img} />}
                    <p className={classes.dash_nav_item_txt} style={active == "Messages" ? { color: '#ff0000' } : {}}>Messages</p>
                </div>
                <div onClick={() => { console.log('Profile') }} className={classes.dash_nav_item_c}>
                    {active == "Profile" ? <img src={dashArrowActive} alt="" className={classes.dash_nav_item_img} /> : <img src={dashArrowInactive} alt="" className={classes.dash_nav_item_img} />}
                    <p className={classes.dash_nav_item_txt} style={active == "Profile" ? { color: '#ff0000' } : {}}>Profile</p>
                </div>
                <div onClick={() => { console.log('Settings') }} className={classes.dash_nav_item_c}>
                    {active == "Settings" ? <img src={dashArrowActive} alt="" className={classes.dash_nav_item_img} /> : <img src={dashArrowInactive} alt="" className={classes.dash_nav_item_img} />}
                    <p className={classes.dash_nav_item_txt} style={active == "Settings" ? { color: '#ff0000' } : {}}>Settings</p>
                </div>
            </div>
        </div>
    )
}
export default DashNav