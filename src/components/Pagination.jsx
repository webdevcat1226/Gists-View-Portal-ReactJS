import React from "react";
import {useDispatch} from "react-redux";
import Pagination from '@material-ui/lab/Pagination';

import {setPageNum} from "../store/actions";

export default function PaginationRounded(props) {
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(setPageNum(value))
    }

    return (
        <div>
            <Pagination count={props.count} variant="outlined" shape="rounded" onChange={handleChange}/>
        </div>
    )
}