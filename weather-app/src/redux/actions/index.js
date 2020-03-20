export const CHANGE_PAGE = 'CHANGE_PAGE';

export function changePage(newPage) {
    return {
        type: CHANGE_PAGE,
        newPage
    }
}