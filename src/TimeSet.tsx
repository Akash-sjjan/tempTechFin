import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TimePicker, { TimePickerValue } from 'react-time-picker';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
        },
        textField: {
            backgroundColor: 'red',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            // width: 200,
            '& .MuiInput-underline:before': {
                display: 'none'
            }
        },
        startTime: {
            maxWidth: '6vw',
            fontSize: '0.7vw',
            fontWeight: 400,
            color: '#666666',
            '& .react-time-picker__wrapper': {
                border: '0px'
            },
            '& .react-time-picker--open': {
                border: '0px'
            },
            '& .react-time-picker--closed': {
                border: '0px'
            },
            '& .react-time-picker__clear-button': {
                display: 'none'
            },
            '& .react-time-picker__clock-button': {
                display: 'none'
            },
            '& .react-time-picker__inputGroup__amPm': {
                backgroundColor: 'red',
                display: 'none',
                // width: '0px',
                // height: '0px',
            },
            '& .react-time-picker__inputGroup__input': {
                // fontSize: '0.7vw'
                minWidth: '0px'
            },
            '& .react-time-picker__inputGroup__divider': {
                // fontSize: '0.7vw'
            },
            '& .react-time-picker__inputGroup__leadingZero': {
                // fontSize: '0.7vw'

            },

            '& .react-time-picker': {
                // fontSize: '0.7vw'
                width: '2vw'

            }

        },
        startTimeC: {
            position: 'relative',
            display: 'flex',
            // border: '1px solid #000000',
            // paddingLeft: '2vw',
            alignItems: 'center',
            width: '4vw'

        },
        incrementB: {
            position: 'absolute',
            right: 0,
            cursor: 'pointer',
            backgroundColor: 'red',
            width: '2vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        incrementB_C: {
            cursor: 'pointer',
        },
        decrementB: {
            position: 'absolute',
            left: 0,
            cursor: 'pointer',
            backgroundColor: 'red',
            width: '2vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        timeC: {
            border: '0px',
            fontSize: '0.8vw'
        },
        addRmBtnC: {
            border: '0px',
            width: '2vw',
            fontSize: '1.5vw',
            background: 'transparent',
            fontWeight: 'normal',
            color: '#14292d'
        },
        timeCC: {
            border: '0.5px solid #979797',
            borderRadius: '0.25vw',
            height: '3vw',
            display: 'flex',
            // width: '6vw',
            justifyContent: 'space-between',
            backgroundColor: '#fff'
        }
    }),
);

function TimeSet() {
    const classes = useStyles();
    const [time, setTime] = useState('10:00');
    const [hStime, setHSTime] = useState<string>('');
    const [mStime, setMSTime] = useState<string>('');

    useEffect(() => {
        console.log('time', time)
        let t = time.toString();
        const tt = t[0] + t[1]
        if (parseInt(tt) > 12) {
            let ttt = '12' + t[2] + t[3] + t[4]
            setTime(ttt)
            console.log('setStart', ttt)
        }
        console.log('tttttttttttttttttt', parseInt(tt))
        if (parseInt(tt) === 0) {

            let ttt = '01' + t[2] + t[3] + t[4]
            setTime(ttt)
            console.log('setttttttttttttStart', ttt)
        }
        console.log('start', tt)
    }, [time])

    const handleStartTime = async (val: any) => {
        // await setTime(val)
        await setTime(val.target.value)

    }
    const handleIncrement = () => {
        const t = time.toString()
        const tt = t[0] + t[1]
        let ttt = parseInt(tt)
        if (ttt >= 12) {
            ttt = 1
        } else {
            ttt = ttt + 1
        }
        // setTime(ttt.toString())
        console.log(time, ttt)
    }
    const inputfocus = (elmnt: any) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {

            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {
                elmnt.target.form.elements[next].focus();
                console.log(next)
            }
        } else {
            const next = elmnt.target.tabIndex;
            // if (next < 5) {
            elmnt.target.form.elements[next].focus();
            // }
        }

    }

    const handleStartInc = () => {
        let t = time.toString();
        let tt = '0'
        if (t[0] == '0') {
            tt = t[1]
        } else {
            tt = t[0] + t[1]
        }
        if (parseInt(tt) >= 12) {
            let ttt = '01' + t[2] + t[3] + t[4]
            setTime(ttt)
            console.log('setStartTime', ttt)
        }
        else {
            const tttt = parseInt(tt) + 1
            let ss = tttt.toString()
            if (ss.length <= 1) {
                ss = '0' + ss
            }
            console.log('ffff', tt)
            let ttt = ss + t[2] + t[3] + t[4]
            setTime(ttt)
            console.log('setStartTime', ttt)
        }
    }
    const handleStartDec = () => {
        let t = time.toString();
        let tt = '0'
        if (t[0] == '0') {
            tt = t[1]
        } else {
            tt = t[0] + t[1]
        }
        // if (parseInt(tt) >= 12) {
        //     let ttt = '01' + t[2] + t[3] + t[4]
        //     setTime(ttt)
        //     console.log('setStartTime', ttt)
        // } else
        if (parseInt(tt) <= 1) {
            let ttt = '12' + t[2] + t[3] + t[4]
            setTime(ttt)
            console.log('setStartTime', ttt)
        }
        else {
            const tttt = parseInt(tt) - 1
            let ss = tttt.toString()
            if (ss.length <= 1) {
                ss = '0' + ss
            }
            console.log('ffff', tt)
            let ttt = ss + t[2] + t[3] + t[4]
            setTime(ttt)
            console.log('setStartTime', ttt)
        }
    }
    return (
        <div className={classes.container} >
            <div style={{
                display: 'flex',

                width: '6vw',
                border: '1px solid #000000',
                // paddingLeft: '2vw',
            }}>
                <Button
                    style={{
                        width: '2vw',
                        // marginRight: '-2vw',
                        minWidth: '0px',
                        // backgroundColor: 'red'
                    }}
                >-</Button>
                <div className={classes.startTimeC}>
                    {/* <button onClick={handleIncrement} className={classes.incrementB}>
                    +
                </button> */}
                    {/* <div className={classes.incrementB} style={{ cursor: 'pointer' }}>
                    <div style={{ position: 'absolute', cursor: 'pointer' }}>+</div>
                </div> */}
                    {/* <div style={{
                    position: 'absolute',
                    right: 0,
                    // width: '2vw',
                    backgroundColor: 'red',

                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center'
                }}>
                    <div style={{
                        width: '2vw',
                        cursor: 'pointer',
                    }}>sdf</div></div> */}
                    {/* <div style={{ position: 'absolute', right: 0 }}>
                    <Button variant='text' style={{
                        backgroundColor: 'red',
                        //  position: 'absolute',
                        right: 0,
                        // boxSizing: 'border-box',
                        width: '2vw',
                        minWidth: '0px',
                        minHeight: '0px'

                    }}>
                        <Button>+</Button>

                    </Button>
                </div> */}
                    <TimePicker clearIcon={null} disableClock className={classes.startTime} onChange={(val) => { handleStartTime(val) }} value={time} />
                    {/* <div className={classes.decrementB}>-</div> */}
                </div>
                <Button
                    style={{
                        width: '2vw',
                        marginLeft: '-2vw',
                        minWidth: '0px',
                        // backgroundColor: 'red'
                    }}
                >+</Button>
                {/* <div style={{
                cursor: 'pointer',
                width: '2vw',
                paddingLeft: '-2vw',
                backgroundColor: 'red'
            }}
            >+</div> */}
            </div>
            <div style={{ display: 'flex' }}>
                <div className={classes.timeCC} >
                    <button className={classes.addRmBtnC} onClick={handleStartDec}>-</button>

                    <input
                        name="startTime"
                        type="time"
                        autoComplete="off"
                        className={classes.timeC}
                        value={time}
                        onChange={async (e) => {
                            handleStartTime(e)
                        }}
                    // tabIndex={3}
                    // maxLength={2}
                    // onKeyUp={(e) => inputfocus(e)}
                    />
                    <button className={classes.addRmBtnC} onClick={handleStartInc}>+</button>

                </div>
                <div className={classes.timeCC} >
                    <button className={classes.addRmBtnC} onClick={handleStartDec}>-</button>

                    <input
                        name="startTime"
                        type="time"
                        autoComplete="off"
                        className={classes.timeC}
                        value={time}
                        onChange={async (e) => {
                            handleStartTime(e)
                        }}
                    // tabIndex={3}
                    // maxLength={2}
                    // onKeyUp={(e) => inputfocus(e)}
                    />
                    <button className={classes.addRmBtnC} onClick={handleStartInc}>+</button>

                </div>
            </div>
        </div>
    )
}

export default TimeSet