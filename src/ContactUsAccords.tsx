import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { contactUsCollapse, contactUsExpand } from './assets';


const useStyles = makeStyles((theme: Theme) => createStyles({
    contactUs_sec_5_c: {
        paddingLeft: '17vw',
        paddingRight: '17vw',
        marginBottom: '4vw',
    },
    contactUs_sec_5_title: {
        color: '#333333',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '2vw',
        marginTop: '3vw',
        marginBottom: '3vw'
    },
    contactUs_accord_cc: {
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%)',

    },
    contactUs_Hr: {
        borderBottom: '0.5px solid #f0d17c'
    },
    contactUs_accord_img: {
        width: '1.3vw'
    },
    contactUs_accord_heading: {
        color: '#333333',
        fontWeight: 600,
        fontFamily: 'Inter',
        fontSize: '1vw',
        marginTop: '0.5vw',
        marginBottom: '0.5vw'
    },
    contactUs_accord_title: {
        padding: '0px',

    },
    contactUs_accord_subtitle: {
        padding: '0px',

    },
    contactUs_accord_subheading: {
        color: '#181617',
        fontFamily: 'Inter',
        fontSize: '0.9vw',
        fontWeight: 400,
        lineHeight: '2em'
    }
}));
function ContactUsAccords() {
    const classes = useStyles();
    const [expand, setExpand] = useState<string | false>(false)
    const handleExpand = (isExpanded: boolean, panel: string) => {
        setExpand(isExpanded ? panel : false)
    }
    return (
        <div className={classes.contactUs_sec_5_c}>
            <p className={classes.contactUs_sec_5_title}>FAQs</p>
            <div
            // className={classes.contactUs_sec_5_Accord_c} 
            >
                <Accordion className={classes.contactUs_accord_cc} expanded={expand === 'panel1'} onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel1')}>
                    <AccordionSummary
                        expandIcon={expand == 'panel1' ? <img src={contactUsCollapse} alt='' className={classes.contactUs_accord_img} /> : <img src={contactUsExpand} alt='' className={classes.contactUs_accord_img} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.contactUs_accord_title}
                    >
                        <Typography className={classes.contactUs_accord_heading}> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.contactUs_accord_subtitle}>
                        <Typography className={classes.contactUs_accord_subheading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>

                </Accordion>
                <div className={classes.contactUs_Hr} />
                <Accordion className={classes.contactUs_accord_cc} expanded={expand === 'panel2'} onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel2')}>
                    <AccordionSummary
                        expandIcon={expand == 'panel2' ? <img src={contactUsCollapse} alt='' className={classes.contactUs_accord_img} /> : <img src={contactUsExpand} alt='' className={classes.contactUs_accord_img} />} aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={classes.contactUs_accord_title}
                    >
                        <Typography className={classes.contactUs_accord_heading}> Lorem ipsum dolor sit amet, malesuada lacus ex, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.contactUs_accord_subtitle}>
                        <Typography className={classes.contactUs_accord_subheading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.contactUs_Hr} />
                <Accordion className={classes.contactUs_accord_cc} expanded={expand === 'panel3'} onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel3')}>
                    <AccordionSummary
                        expandIcon={expand == 'panel3' ? <img src={contactUsCollapse} alt='' className={classes.contactUs_accord_img} /> : <img src={contactUsExpand} alt='' className={classes.contactUs_accord_img} />} aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={classes.contactUs_accord_title}
                    >
                        <Typography className={classes.contactUs_accord_heading}> Lorem ipsum dolor sit amet, adipiscing elit. consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.contactUs_accord_subtitle}>
                        <Typography className={classes.contactUs_accord_subheading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.contactUs_Hr} />
                <Accordion className={classes.contactUs_accord_cc} expanded={expand === 'panel4'} onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel4')}>
                    <AccordionSummary
                        expandIcon={expand == 'panel4' ? <img src={contactUsCollapse} alt='' className={classes.contactUs_accord_img} /> : <img src={contactUsExpand} alt='' className={classes.contactUs_accord_img} />} aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={classes.contactUs_accord_title}
                    >
                        <Typography className={classes.contactUs_accord_heading}> Lorem ipsum dolor sit amet, adipiscing elit. consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.contactUs_accord_subtitle}>
                        <Typography className={classes.contactUs_accord_subheading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className={classes.contactUs_Hr} />
                <Accordion className={classes.contactUs_accord_cc} expanded={expand === 'panel5'} onChange={(event, isExpanded) => handleExpand(isExpanded, 'panel5')}>
                    <AccordionSummary
                        expandIcon={expand == 'panel5' ? <img src={contactUsCollapse} alt='' className={classes.contactUs_accord_img} /> : <img src={contactUsExpand} alt='' className={classes.contactUs_accord_img} />} aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={classes.contactUs_accord_title}
                    >
                        <Typography className={classes.contactUs_accord_heading}> Lorem ipsum dolor sit amet, adipiscing elit. consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.contactUs_accord_subtitle}>
                        <Typography className={classes.contactUs_accord_subheading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default ContactUsAccords