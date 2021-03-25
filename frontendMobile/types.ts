export const SET_PERSONNELS = "SET_PERSONNELS"
export const SET_PERSONNELS_PER_PAGE = "SET_PERSONNELS_PER_PAGE"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_PREVIOUS_PAGE = "SET_PREVIOUS_PAGE"
export const SET_NEXT_PAGE = "SET_NEXT_PAGE"
export const SET_SEARCH_PERSONNEL = "SET_SEARCH_PERSONNEL"
export const SET_FIND_PERSONNEL = "SET_FIND_PERSONNEL"

export type thunkType = {
    state: undefined,
    action: undefined
}
export type initialStatePersonnels = {
    Personnels: any,
    PersonnelsPerPage: number,
    SearchPersonnel: string,
    FindPersonnel: any
}
export type initialStatePage = {
    CurrentPage: number,
    PreviousPage: boolean,
    NextPage: boolean

}

