
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: 'menus',
    initialState: {
        list: [],
        user: [],
        currentUser: []
    },
    reducers: {
        menuReceived: (menus,action) =>{
            menus.list = action.payload;
        },
        addNewItems: (items,action) =>{
          items.list =[action.payload];
          items.list[0].quantity =1;
          items.list[0].total = items.list[0].price* items.list[0].quantity;
        },
        addItems: (items,action) =>{
            const index = items.list.findIndex(item => item.title === action.payload.title);
            console.log(index);
            if(index !== -1) {
                items.list[index].quantity = items.list[index].quantity+1;
                items.list[index].total = items.list[index].price* items.list[index].quantity;
            }else{
                action.payload.quantity =1;
                action.payload.total = action.payload.price* action.payload.quantity;
                items.list.push(action.payload);
            }
        },
        increaseItems: (items,action) =>{
            const index = items.list.findIndex(item => item.title === action.payload.title);
            if(index !== -1) {
                items.list[index].quantity = items.list[index].quantity+1;
                items.list[index].total = items.list[index].price* items.list[index].quantity;
            }
        },
        decreaseItems: (items,action) =>{
            const index = items.list.findIndex(item => item.title === action.payload.title);
            if(index !== -1) {
                items.list[index].quantity = items.list[index].quantity-1;
                console.log(items.list[index].quantity);
                if(items.list[index].quantity === 0 ) {
                    const filtered = items.list.filter((item) => item.title !== action.payload.title )
                    items.list = filtered;
                }
                    else{
                        items.list[index].total = items.list[index].price* items.list[index].quantity;
                    }
            }
        },
        loginCheck: (details,action) =>{
            const index = details.user.findIndex(detail => detail.email === action.payload.email);
            if(index !== -1) {
                if(action.payload.email === details.user[index].email && action.payload.password === details.user[index].password){
                    details.user[index].status = true
                    details.currentUser = action.payload
                }
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
        }
    }
})


export const loadMenus = () => apiCallBegan({
    url: "https://jsonplaceholder.typicode.com/users",
    onSuccess: "menus/menuReceived",
    onError: "menus/menuFailed"
})


export const {menuAdded, menuResolved, menuReceived, menuFailed, loginCheck, signupDetails,addNewItems, addItems, updateDetails,increaseItems,decreaseItems,logoutCheck} = slice.actions
export default slice.reducer;



