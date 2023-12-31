//import the reducers from slice
import {
    loginStart,
    loginFailure,
    loginSuccess,
    logout
} from './userSlice'

import {
getAuctionFailure,
getAuctionStart,
getAuctionSuccess,
createAuctionFailure,
createAuctionSuccess,
createAuctionStart,
updateAuctionFailure,
updateAuctionStart,
updateAuctionSuccess,
deleteAuctionStart,
deleteAuctionSuccess,
deleteAuctionFailure
} from
'./auction'

import axios from 'axios'
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { apiDomain } from '../utils/utils';
export const registerUser = async(dispatch,user)=>{
try{
    console.log(user)
const res = await fetch(`${apiDomain}/users/`,{
method: 'POST',
headers:{
    "Content-Type": "application/json",
},
body: JSON.stringify(user)
})
const data = await res.json();
if(data.status == 'success'){
    alert('registered successfully');
    toast.info(`success you have registered successfully head to login Page`,{
      position:'top-center'
  })
}
console.log(data);
}catch(err){
    alert('user not registered')
    toast.warning(`Not registered try again`,{
      position:'top-center'
  })
    console.log(err);
}
}
//login user

export const login = async (dispatch, user) => {
    console.log(user);
    dispatch(loginStart());
    try {
      const response = await fetch(`${apiDomain}/users/login`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const result = await response.json();
      console.log(response.ok,result)
      if(result.status === 'failure' || !response.ok){
        console.log()
        dispatch(loginFailure(result));
      }else{
        dispatch(loginSuccess(result));
        alert('logged in successfully being redirected to main page')
        toast.success(`successfully logged in`,{
          position:'top-center'
        })
        
      }
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  export const loggedOut = function(dispatch){
    dispatch(logout());
    alert('logged out successfully');
    toast.info(`logged out successfully`,{
      position:'top-center'
    })
  }

  export const getAuction = async(dispatch)=>{
dispatch(getAuctionStart());
try{
const res =  await fetch(`${apiDomain}/auctions`);
// console.log(await res.json(),'all data');
const data = await res.json();
console.log(data.data,'check data');
dispatch(getAuctionSuccess(data.data))
}catch(err){
dispatch(getAuctionFailure(err));
}
  }

  export const createAuction = async(auction)=>{
console.log(auction);
try{
const res = await fetch(`${apiDomain}/auctions`,{
  method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(auction),
})
const data = await res.json();
console.log(data);
if(data.created == 'successfully' ){
  alert('Auction created successfully');
  toast.info(`Auction created successfully`,{
    position:'top-center'
  })
}
}catch(err){
console.log(err.message);
}
  }

  export const updateAuction = async(auctionsUpdate,id,dispatch)=>{
    console.log(auctionsUpdate,id,'all products ');
    dispatch(updateAuctionStart());
try{
  // const {data} = await axios.put(`http://localhost:8000/auctions/${id}`,auction);
  // console.log(data);
// const val = await getAuction();
// console.log(val,'my val');
  dispatch(updateAuctionSuccess({auctionsUpdate,id}));
// console.log(data.auction);

}catch(err){
console.log(err);
dispatch(updateAuctionFailure());
}
  }


  //delete user 
export const deleteAuction = async (id,dispatch)=>{
  console.log(id,'val');
  dispatch(deleteAuctionStart())
  try
  {
    await axios.delete(`${apiDomain}/auctions/${id}`);
    dispatch(deleteAuctionSuccess(id))
  }catch(err){
dispatch(deleteAuctionFailure());
  }
}