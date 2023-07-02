import React,{useState} from "react";
import { Link } from "react-router-dom";
import {MdPublish,MdTitle,MdOutlineMoney,MdBrandingWatermark,MdDescription,MdPhoneAndroid, MdCategory} from 'react-icons/md'
import { useSelector,useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import './Auction.css';
import { updateAuction } from "../../../redux/apiCall";
const Auction = () => {
  let auctionId;
  const location = useLocation();
  auctionId = location.pathname.split("/")[3];
  const auction = useSelector((state) => state.auction.auctions[0]).find(
    (auction) => auction.id == auctionId
  );
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    setInputs((prev)=>{
      console.log({...prev,[e.target.name]:e.target.value})
        return {...prev,[e.target.name]:e.target.value}
    })
}

const handleClick = (e)=>{
e.preventDefault();
const auctionsUpdate = {...inputs};
updateAuction(auctionsUpdate,auctionId,dispatch);
alert('auction updated successfully');
}

  return (
    <div className="auction">
      <div className="auctionTitleContainer">
        <h1 className="auctionTitle">Edit Auction</h1>
        <Link to="/sell">
          <button className="auctionAddButton">Create Auction</button>
        </Link>
      </div>
      <div className="auctionContainer">
        <div className="auctionShow">
          <div className="auctionShowTop">
            <img
              src={auction?.photos?.replace(/\[|\]/g, '').split(',')[0].replace(/"/g, '').replace(/'/g, '')}
              alt={auction?.title}
              className="auctionShowImg"
            />
            <div className="auctionShowTopTitle">
              <span className="auctionShowUsername">{auction?.title}</span>
            </div>
          </div>
          <div className="auctionShowBottom">
            <span className="auctionShowTitle">Account Details</span>
            <div className="auctionShowInfo">
              < MdTitle className="auctionShowIcon" />
              <span className="auctionShowInfoTitle">{auction?.title}</span>
            </div>
            <div className="auctionShowInfo">
              <MdOutlineMoney className="auctionShowIcon" />
              <span className="auctionShowInfoTitle">{auction?.price}</span>
            </div>
            <div className="auctionShowInfo">
              < MdBrandingWatermark className="auctionShowIcon" />
              <span className="auctionShowInfoTitle">{auction?.brand}</span>
            </div>
            <div className="auctionShowInfo">
              <MdCategory className="auctionShowIcon" />
              <span className="auctionShowInfoTitle">{auction?.category}</span>
            </div>
            <div className="auctionShowInfo">
              <MdDescription className="auctionShowIcon" />
              <span className="auctionShowInfoTitle">
                {auction?.description}
              </span>
            </div>
            <div className="auctionShowInfo">
              <MdOutlineMoney className="auctionShowIcon" />
              <span className="auctionShowInfoTitle">
                {auction?.paymentMethod}
              </span>
            </div>
            <div className="auctionShowInfo">
              <MdPhoneAndroid className="auctionShowIcon" />
              <span className="auctionShowInfoTitle">
                {auction?.phoneNumber}
              </span>
            </div>
          </div>
        </div>
        <div className="auctionUpdate">
          <span className="auctionUpdateTitle">Edit</span>
          <form className="auctionUpdateForm">
            <div className="auctionUpdateLeft">
              <div className="auctionUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder={auction?.title}
                  className="auctionUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="auctionUpdateItem">
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder={auction?.price}
                  className="auctionUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="auctionUpdateItem">
                <label>{auction?.brand}</label>
                <select name="brand" id=" brand" onChange={handleChange}  className="auctionUpdateInput">
                  <option disabled selected>
                    {auction?.brand}
                  </option>
                  <option value="New">New</option>
                  <option value="Second hand">Second Hand</option>
                </select>
              </div>
              <div className="auctionUpdateItem">
                <label>{auction?.category}</label>
                <select name="category" id=" category" onChange={handleChange} className="auctionUpdateInput">
                  <option disabled selected>
                    {auction?.category}
                  </option>
                  <option>phone gadgets</option>
                  <option>Laptop and Computers</option>
                  <option>Furnitures</option>
                  <option>Vehicles</option>
                </select>
              </div>
              <div className="auctionUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder={auction?.description}
                  className="auctionUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="auctionUpdateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder={auction?.phoneNumber}
                  className="auctionUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="auctionUpdateItem">
                <label>{auction?.paymentMethod}</label>
                <select name="paymentMethod" id="paymentMethod"  onChange={handleChange} className="auctionUpdateInput">
                  <option disabled selected>
                    {auction?.paymentMethod}
                  </option>
                  <option value="Mpesa">Mpesa</option>
                  <option value="On Cash">On Cash</option>
                </select>
              </div>
            </div>
            <div className="auctionUpdateRight">
              <div className="auctionUpdateUpload">
                <img
                  className="auctionUpdateImg"
                  src={auction?.photos.replace(/\[|\]/g, '').split(',')[0].replace(/"/g, '').replace(/'/g, '')}
                  alt={auction?.title}
                />
                <label htmlFor="file">
                  <MdPublish className="auctionUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button onClick={handleClick} className="auctionUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auction;
