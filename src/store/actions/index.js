export const actionTypes = {
    SET_PAGE_NUM: 'SET_PAGE_NUM'
}

export const setPageNum = (pageNum) => ({
    type: actionTypes.SET_PAGE_NUM,
    pageNum
})