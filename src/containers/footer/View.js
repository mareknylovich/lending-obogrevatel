import React from 'react';

export const FooterView = () => {
  return (
    <React.Fragment>
      <div className="black-primary newsletter py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3>
                Du willst noch mehr über mobile Heizungen Erfahren?
                <br />
                Registriere dich für unseren
                <br />
                <span>Kostenfreien Newsletter</span>
              </h3>
            </div>
            {/* <div className="col-12 col-lg-6">
              <iframe
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                width="100%"
                height={200}
                allowTransparency="true"
                src="https://t207a6bc3.emailsys1a.net/139/3685/a2d9f786e0/subscribe/form.html"
              />
            </div> */}
          </div>
          <hr />
          <div className="col-12 text-center">
            <a href="impressum" title="Impressum">
              Impressum
            </a>
            <a href="datenschutz" title="Datenschutz">
              Datenschutz
            </a>
            <a href="agb" title="AGB">
              AGB
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
