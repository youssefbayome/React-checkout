import React from "react";
import photo from '../photo.jpg';
function Profilephoto() {
    return (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={photo} className="profile-pic"alt="profile photo"/>
    )
}

export default Profilephoto;