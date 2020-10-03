import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

import {selectPageNum} from "./store/selectors";

import {GistsService} from "./core/services/gists.service";
import GistsList from "./components/GistsList";
import PaginationRounded from "./components/Pagination";
import LinearIndeterminate from "./ui-kit/LoadingSpinner";

const useStyles = makeStyles(() => ({
    pageContainer: {
        height: '100vh',
    },
    gistsContainer: {
        height: 'calc(100% - 100px)',
        paddingLeft: 20,
        position: 'relative'
    },
    paginationPan: {
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 30
    }
}))

function App() {
    const classes = useStyles();
    const pageNum = useSelector(selectPageNum)

    const [isLoading, setIsLoading] = useState(false);
    const [gists, setGists] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        GistsService.instance.getGistsData('2019-12-31', 30, pageNum)
            .then(data => {
                setGists(data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    })

    return (
        <div className={classes.pageContainer}>
            <div className={classes.gistsContainer}>
                {
                    isLoading && <LinearIndeterminate/>
                }
                <GistsList gistsList={gists}/>
            </div>
            <div className={classes.paginationPan}>
                <PaginationRounded count={37}/>
            </div>
        </div>
    );
}

export default App;
