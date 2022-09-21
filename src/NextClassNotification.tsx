import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { dashArrowActive, dashArrowInactive } from "./assets";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    next_class_notification_container: {
        backgroundColor: '#ffffff',
        boxShadow: '0px 5px 30px rgba(0,0,0,0.08)',
        width: '100%',
        borderRadius: '1vw',
    },
    next_class_notification_c: {
        paddingTop: '1.5vw',
        paddingBottom: '1.3vw',
        paddingLeft: '1.3vw',
        paddingRight: '1.3vw',
    },
    next_class_notification_title: {
        margin: '0px',
        color: '#333333',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '1vw',
        lineHeight: '1.7vw'
    },
    next_class_notification_subtitle: {
        margin: '0px',
        color: '#666666',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '0.7vw',
        lineHeight: '1vw',
        marginTop: '0.4vw'
    },
    next_class_notification_Hr: {
        borderBottom: '0.5px solid #3f526d',
        marginTop: '0.8vw'
    },
    next_class_notification_Vtitle: {
        margin: '0px',
        color: '#333333',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '1.2vw',
        lineHeight: '1.7vw',
        marginTop: '1vw'
    },
    next_class_notification_btn: {

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
    timings?: string;
    title?: string;
    subtitle?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    styles?: React.CSSProperties | undefined;
}
const NextClassNotification = ({ timings, title, subtitle, onClick, styles }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.next_class_notification_container} style={styles}>
            <div className={classes.next_class_notification_c}>
                <p className={classes.next_class_notification_title}>
                    Your Next Class
                </p>
                <p className={classes.next_class_notification_title}>
                    {timings}
                </p>
                <p className={classes.next_class_notification_subtitle}>
                    {title}
                </p>
                <div className={classes.next_class_notification_Hr} />
                <p className={classes.next_class_notification_Vtitle}>
                    Join Webinar
                </p>
                <p className={classes.next_class_notification_subtitle}>
                    {subtitle}
                </p>
                <Button variant='contained' className={classes.next_class_notification_btn} onClick={onClick}>Join Now</Button>
            </div>
        </div>
    )
}
export default NextClassNotification