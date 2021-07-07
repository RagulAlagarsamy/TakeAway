import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiPostCallBegan = createAction("api/postCallBegan");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailure = createAction("api/callFailure");
export const userAddItems = createAction("users/updateQuantityDetails");
export const userGetItems = createAction("users/getItems");