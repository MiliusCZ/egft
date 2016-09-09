import React, { PropTypes } from 'react';
import './profile.scss';

export const Profile = ({ gray, heading, photo, info }) => (
  <div className={`content${gray ? ' gray' : ''}`}>
    <div className="container">
      <div className="row">
        <h3>{heading}</h3>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <div className="profilePhoto">
            <img alt={heading} src={photo} />
          </div>
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="profile}">
            <p>
              {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  gray: PropTypes.bool,
  heading: PropTypes.string,
  photo: PropTypes.string,
  info: PropTypes.string
};
