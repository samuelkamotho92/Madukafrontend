import React,{useState,useEffect} from 'react';
import "./FeaturedInfo.css";
import {MdArrowUpward,MdArrowDownward}  from 'react-icons/md';
import { useSelector } from 'react-redux';
// import { userRequest } from '../../../requestMethod.js';
const FeaturedInfo = () => {
  const user = useSelector((state)=>state.user?.currentUser?.data.username)
 const auctions = useSelector((state)=>state.auction.auctions[0].filter(auction=>auction.Owner == user));
  return (
<div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sold Auctions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{auctions.length}</span>
          <span className="featuredMoneyRate">
            -1.4 <MdArrowUpward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Traffic</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2000</span>
          <span className="featuredMoneyRate">
            +2.4 <MdArrowDownward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
