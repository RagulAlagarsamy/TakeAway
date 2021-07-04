
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { searchList } from '../components/details/searchDetails';

const slice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        user: [],
        currentUser: [],
        searchList: searchList,
        selectedItem:[]
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
                var user = Object.assign({}, action.payload)
                user.quantity =1;
                user.total = user.price* user.quantity;
                items.list.push(user);
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
            let index = 0
            if(action.payload.email === "admin@test.com" && action.payload.password === "admin123"){
                details.user = [action.payload]
                details.user[0].status = "admin"
                details.currentUser = action.payload
            }else{
                index = details.user.findIndex(detail => detail.email === action.payload.email);
                if(index !== -1) {
                    if(action.payload.email === details.user[index].email && action.payload.password === details.user[index].password){
                        details.user[index].status = true
                        details.currentUser = action.payload
                    }
                }
                else{
                    alert('login failed..') 
                }
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
        updateProductDetails: (details,action) => {
            let index = details.searchList.findIndex(detail => detail.id === action.payload.id);
            console.log(index);
            details.searchList[index] = action.payload;
             index = details.list.findIndex(detail => detail.id === action.payload.id);
            if(details.list[index]){
                const temp = details.list[index];
                details.list[index] = action.payload;
                details.list[index].quantity = temp.quantity;
                details.list[index].total = details.list[index].quantity*details.list[index].price
            }
            console.log(details.list[index], action.payload);
        },
        deleteItem: (details,action) => {
            const index = details.searchList.findIndex(detail => detail.title === action.payload.title);
            details.searchList.splice(index,1);
        },
        addItem: (details,action) => {
            if(details.searchList.length !== 0){
                let index = details.searchList.findIndex(detail => detail.title === action.payload.title);
                console.log(index);
                if(index !== -1){
                    alert("This Product is already exist.Adding New Item Failed.")
                }else{
                    details.searchList.push(action.payload)
                    alert("Adding New Item Successfully.")
                }
            }else{
                details.searchList = [action.payload];
            }
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
            console.log(details.list,details.searchList,action.payload);
            
        },
    }
})

console.log(slice);


export const loadMenus = () => apiCallBegan({
    url: "https://jsonplaceholder.typicode.com/users",
    onSuccess: "menus/menuReceived",
    onError: "menus/menuFailed"
})


export const {menuAdded, menuResolved, menuReceived, menuFailed, loginCheck, signupDetails,addNewItems, addItems, updateDetails,increaseItems,decreaseItems,logoutCheck,searchLists,searchSelectedList,updateQuantityDetails,deleteItem,updateProductDetails,addItem} = slice.actions
export default slice.reducer;



