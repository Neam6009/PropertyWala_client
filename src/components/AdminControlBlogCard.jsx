import React, { useEffect } from "react";
import classes from "../assets/Styles/AdminControlBlogCard.module.css";
import { useState } from "react";
import { backendUrl } from '../App';

const AdminControlBlogCard = ({ blog }) => {
  const [deleted, setDeleted] = useState(false);
  const [csrfToken, setCsrfToken] = useState();

  useEffect(() => {


  }, []);


  const removeBlogHandler = async () => {
    fetch(backendUrl + `/blogs/deleteBlog/${blog._id}`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',

      },
    }).then(() => setDeleted(true));
  };

  return (
    <div>
      {!deleted && (
        <div className={classes.blogCardAdminControl}>
          <div className={classes.blogCardAdminControlChild}>
            <div>
              <p className={classes.icon}>{blog.title[0]}</p>
            </div>
            <div>
              <h2>{blog.title}</h2>
              <div className={classes.card__handle}>
                <span className={classes.handle}>{blog.date}</span>
              </div>
            </div>
          </div>
          <div className={classes.blogCardAdminControlButtons}>
            <button onClick={removeBlogHandler}>Remove Blog</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminControlBlogCard;
