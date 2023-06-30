import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@material-ui/icons";
import {LineStyleIcon,Timeline,TrendingUpIcon,StorefrontIcon,BarChartIcon,MailOutlineIcon,DynamicFeedIcon,ChatBubbleIcon,WorkOutlineIcon,ReportIcon}  from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <NavLink to="/admin/home" className="link">
          <li className="sidebarListItem active">
            <LineStyleIcon className="sidebarIcon" />
            Home
          </li>
          </NavLink>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUpIcon className="sidebarIcon" />
            Sales
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <NavLink to="/admin/auctions" className="link">
            <li className="sidebarListItem">
              <StorefrontIcon  className="sidebarIcon" />
              Auctions
            </li>
          </NavLink>
          <li className="sidebarListItem">
            <BarChartIcon className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MailOutlineIcon className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeedIcon className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <ChatBubbleIcon className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <ReportIcon className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar