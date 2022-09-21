import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DashAdImg, dashArrowActive, dashArrowInactive, girllaptop } from "./assets";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    dash_ad_container: {
        backgroundColor: '#14292d',
        width: '100%',
        borderRadius: '1vw',
        overflow: 'hidden',

    },
    dash_ad_img: {
        width: '100%',
        objectFit: 'cover',
        height: '12em'
    },
    dash_ad_txt_c: {
        paddingLeft: '1.3vw',
        paddingRight: '1.3vw',
        paddingTop: '1vw',
        paddingBottom: '1.3vw',
    },
    dash_ad_btn_c: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dash_ad_title: {
        color: '#ffffff',
        margin: '0px',
        fontSize: '1.2vw',
        fontWeight: 600,
        lineHeight: '1.6vw',
    },
    dash_ad_subtitle: {
        color: '#ffffff',
        textAlign: 'center',
        margin: '0px',
        fontSize: '0.7vw',
        fontWeight: 400,
        lineHeight: '1.1vw',
        marginTop: '0.7vw'
    },
    dash_ad_btn: {
        borderRadius: '10em',
        width: '10vw',
        marginTop: '0.8vw',
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: '0.8vw',
        color: '#ffffff',
        textTransform: 'none',
        backgroundColor: '#ff0000',
        '&:hover': {
            backgroundColor: '#ff0000'
        },
    }

}));

interface Props {
    title?: string;
    subtitle?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    styles?: React.CSSProperties | undefined;
}
const DashAdvartiseCard = ({ title, subtitle, onClick, styles }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.dash_ad_container} style={styles}>
            <img src={DashAdImg} alt="" className={classes.dash_ad_img} />
            <div className={classes.dash_ad_txt_c}>
                <p className={classes.dash_ad_title}>
                    {title}
                </p>
                <div className={classes.dash_ad_btn_c}>
                    <p className={classes.dash_ad_subtitle}>
                        {subtitle}
                    </p>
                    <Button variant='contained' className={classes.dash_ad_btn} onClick={onClick}>Book Now</Button>
                </div>
            </div>
        </div>
    )
}
export default DashAdvartiseCard