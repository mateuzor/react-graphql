import { createSelector } from "reselect";
import { IRootState } from "../../types";

export const selectHomePage = (state: IRootState) => state.homePage;

export const makeSelectAnimePage = createSelector(selectHomePage, (homePage) => homePage.animePage);