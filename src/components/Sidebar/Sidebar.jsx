import "./sidebar.scss";
import { Link } from "react-router-dom";
import { React, useContext } from "react";
import NotesIcon from '@mui/icons-material/Notes';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FilterIcon from '@mui/icons-material/Filter';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserContext from '../../context/notes/noteContext';

// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = (props) => {
  //   const { dispatch } = useContext(DarkModeContext);
  const context = useContext(UserContext);
  const { user, getuser, getuserdetail, detail, editdetails } = context;

  return (
    <div className="sidebar" style={{width:"", backgroundColor:""}}>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">{ user.name}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
                  <p className="title">COLLECTIONS</p>
                  
             <Link to="/notes"  style={{ textDecoration: "none" }}>
            <li>
            <NotesIcon className="icon" />
            <span>Notes</span>
          </li>
                  </Link>
         
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <VideoFileIcon className="icon" />
              <span>Video</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <AudioFileIcon className="icon" />
              <span>Audio</span>
            </li>
          </Link>
          <li>
            <PictureAsPdfIcon className="icon" />
            <span>Pdf</span>
          </li>
          <li>
            <FilterIcon className="icon" />
            <span>Images</span>
          </li>
          
          <li>
            <CodeIcon  className="icon" />
            <span>Leetcode links</span>
          </li>
          
          <li>
            <CodeIcon  className="icon" />
            <span>Gfg Links</span>
          </li>
          <li>
            <LinkIcon className="icon" />
            <span>Other Links</span>
                  </li>
                  
    <Link to="/user">
         <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>         
                  
    </Link>
          
         
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;