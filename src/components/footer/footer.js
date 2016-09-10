import React, { PropTypes } from 'react';
import './footer.scss';

export const Footer = ({ data }) => (
  <footer>
    <a name="footer"></a>
    <div className="container text-center">
      <div className="col-md-4 col-lg-4 footerItem">
        <h4>Telefony</h4>
        <p>
          Markéta: <a href="tel:+420774220078">774 220 078</a> <br />
          Zdena: <a href="tel:+420733616012">733 616 012</a>
        </p>
      </div>
      <div className="col-md-4 col-lg-4 footerItem">
        <h4>Internet</h4>
        <p>
          Mail: <a href={`mailto:${data.eMail}`}>{data.eMail}</a><br />
          Web: <a href="/">{data.url}</a><br />
          Facebook: <a href={`https://www.facebook.com/${data.facebook}`}>fb.me/{data.facebook}</a>
        </p>
      </div>
      <div className="col-md-4 col-lg-4 footerItem">
        <h4>Adresa</h4>
        <p>
          Koněvova 54<br />
          Praha 3-Žižkov<br />
          <a href={data.mapLink} target="__blank">mapa</a>
        </p>
      </div>
    </div>
    <div className="container text-center">
      <div className="col-md-2 col-lg-2">
      </div>
      <div className="col-md-8 col-lg-8">
        <hr /><br /><span className="dimmedColor">{data.footer}</span>
      </div>
      <div className="col-md-2 col-lg-2">
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  data: PropTypes.object
};
