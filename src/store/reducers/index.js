import {actionTypes} from "../actions";

const initStatus = {
    pageNum: 1
}

export default (store = initStatus, action) => {
    switch (action.type) {
        case actionTypes.SET_PAGE_NUM:
            return {...store, pageNum: action.pageNum}
        default:
            return store;
    }
}