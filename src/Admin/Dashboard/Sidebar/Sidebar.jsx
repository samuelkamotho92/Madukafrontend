import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import {MdOutlineStyle,MdTimeline,MdTrendingUp,MdStorefront,MdBarChart,MdMailOutline,MdDynamicFeed,MdChatBubble,MdWorkOutline,MdReport}  from 'react-icons/md'
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <NavLink to="/admin/home" className="link">
          <li className="sidebarListItem active">
            <MdOutlineStyle className="sidebarIcon" />
            Home
          </li>
          </NavLink>
          <li className="sidebarListItem">
            <MdTimeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <MdTrendingUp className="sidebarIcon" />
            Sales
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <NavLink to="/admin/auctions" className="link">
            <li className="sidebarListItem">
              <MdStorefront  className="sidebarIcon" />
              Auctions
            </li>
          </NavLink>
          <li className="sidebarListItem">
            <MdBarChart className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdMailOutline className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListItem">
            <MdDynamicFeed className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <MdChatBubble className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdWorkOutline className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <MdTimeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <MdReport className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar