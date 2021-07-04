
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { searchList } from '../components/details/searchDetails';

const slice = createSlice({
    name: 'admin',
    initialState: {
        list: [],
        admin: [],
        currentAdmin: [],
        searchList: searchList,
        selectedItem:[]
    },
    reducers: {
        loginCheck: (details,action) =>{
            if(action.payload.email === "admin@test.com" && action.payload.password === 123456){
                    details.admin[0].status = true
                    details.currentAdmin = action.payload
                }else{
                alert('login failed..') 
            }
        },
        logoutCheck: (details,action) =>{
            const index = details.user.findIndex(detail => detail.email === action.payload.email);
            if(index !== -1) details.user[index].status = false
        },
        signupDetails: (details,action) =>{
            if(details.user.length === 0) {
                details.user = [action.payload]
            }else{
                details.user.push(action.payload); 
            }
        },
        updateDetails: (details,action) => {
            const index = details.user.findIndex(detail => detail.email === action.payload.email);
            details.user[index] = action.payload;
        },
        searchLists: (details,action) => {
            console.log(details.searchList);
            const filtered = details.searchList.filter((item) => item.title.includes(action.payload));
            console.log(filtered, action.payload);
            details.filteredSearch = filtered;
        },
        searchSelectedList: (details,action) => {
            details.selectedItem = action.payload
        },
        updateQuantityDetails: (details,action) => {
            const index = details.list.findIndex(detail => detail.title === action.payload.title);
            if(index !== -1) {
                details.list[index] = action.payload;
                details.list[index].total = details.list[index].price* details.list[index].quantity;
            }else{
                if(details.list.length !== 0){
                    var item = Object.assign({}, action.payload)
                    item.total = item.price* item.quantity;
                    details.list.push(item);
                }else{
                details.list = [action.payload]; 
                details.list[0].total = details.list[0].price* details.list[0].quantity;
            }
            }
        },
    }
})


export const loadMenus = () => apiCallBegan({
    url: "https://jsonplaceholder.typicode.com/users",
    onSuccess: "menus/menuReceived",
    onError: "menus/menuFailed"
})


export const {menuAdded, menuResolved, menuReceived, menuFailed, loginCheck, signupDetails,addNewItems, addItems, updateDetails,increaseItems,decreaseItems,logoutCheck,searchLists,searchSelectedList,updateQuantityDetails} = slice.actions
export default function adminReducer() {
    return slice.reducer;
} 




