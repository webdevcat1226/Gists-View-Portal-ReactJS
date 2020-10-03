import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 100,
        zIndex: 9999,
        backgroundColor: 'rgba(255,255,255)',
    },
    spinner: {
        height: 5,
        margin: '50px'
    },
}));

export default function LinearIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                [1, 2, 3, 4, 5].map(element => {
                    return (
                        <div key={element}>
                            <LinearProgress className={classes.spinner}/>
                            <LinearProgress className={classes.spinner} color="secondary"/>
                        </div>
                    )
                })
            }
        </div>
    );
}