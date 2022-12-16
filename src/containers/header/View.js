import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTimer } from 'react-timer-hook';

export const HeaderView = ({ isFull }) => {
  const timerDiff = 5400000;
  const { seconds: rawSeconds, minutes: rawMinutes, hours: rawHours } = useTimer({
    expiryTimestamp: localStorage.getItem('counterStart')
      ? new Date(localStorage.getItem('counterStart'))
      : new Date(Date.now() + timerDiff),
  });

  const hours = `${rawHours < 10 ? '0' : ''}${rawHours}`;
  const minutes = `${rawMinutes < 10 ? '0' : ''}${rawMinutes}`;
  const seconds = `${rawSeconds < 10 ? '0' : ''}${rawSeconds}`;

  useEffect(() => {
    if (!localStorage.getItem('counterStart')) {
      localStorage.setItem('counterStart', new Date(Date.now() + timerDiff));
    }
  }, []);

  return (
    <header className="pt-5">
      <div className="container-fluid">
        <div className="row top-navigation">
          <div className="col-6 col-sm-4">
            <div className="logo">
              <a href="/">
                <img src="inhalte/img/ASOSMOBIL_logo.png" alt="ASOS mobil" />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-8 text-right position-none">
            <div className="header-navi">
              <a className="mobile-telefon-header" href title="Kontaktieren Sie uns">
                <img className="icon-telefon" src="inhalte/img/ASOSMOBIL_Telefon_icon.png" alt="Telefon" />
                +49 (0)381 - 458 289 00
              </a>
              <br />
              {/*
                        <button class="navbar-toggler second-button" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                            <div class="animated-icon2"><span></span><span></span><span></span><span></span></div>
                        </button>
                        */}
              <nav className="navbar navbar-expand-lg mainnavigation">
                <button
                  className="navbar-toggler second-button"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div className="animated-icon2">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="heizprodukte.html"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Heizprodukte
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-lg-4">
                            <a className="level-1 produkt-kategorie" style={{ color: '#fff' }}>
                              Heizzentrale 21W
                            </a>
                            <div className="row">
                              <div className="col-4 col-lg-4 produkt-bild">
                                <img src="inhalte/img/image_02.png" alt="Mobile Heizzentrale" />
                              </div>
                              <div className="col-8 col-lg-8 produkte-liste">
                                <ul>
                                  <li>
                                    <a href="asos21.html">ASOSmobil 21E CLASSIC</a>
                                  </li>
                                  <li>
                                    <a href="asos-classic-21e-plus.html">ASOSmobil 21E PLUS</a>
                                  </li>
                                  <li>
                                    <a href="asos-classic-21e-plus-wifi.html">ASOSmobil 21E WIFI</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-sm-12 col-lg-3">
                                                    <a class="level-1 produkt-kategorie" style="color:#fff;">Heizmobile</a>
                                                    <div class="row">
                                                        <div class="col-4 col-lg-4 produkt-bild">
                                                            <img src="inhalte/img/navi-heizzentrale.png" alt="Mobile Heizzentrale">
                                                        </div>
                                                        <div class="col-8 col-lg-8 produkte-liste">
                                                            <ul>
                                                                <li><a href="asos-hz-300.html">ASOS HZ 300</a></li>
                                                                <li><a href="asos-hz-440.html">ASOS HZ 440</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>*/}
                    {/*<div class="col-12 col-sm-12 col-lg-3">
                                                    <a class="level-1 produkt-kategorie" style="color:#fff;">Heizzentrale 24</a>
                                                    <div class="row">
                                                        <div class="col-4 col-lg-4 produkt-bild">
                                                            <img src="inhalte/img/image_02.png" alt="Mobile Heizzentrale">
                                                        </div>
                                                        <div class="col-8 col-lg-8 produkte-liste">
                                                            <ul>
                                                                <li><a href="asos-classic-24e.html">ASOSmobil 24E CLASSIC</a></li>
                                                                <li><a href="asos-classic-24e-plus.html">ASOSmobil 24E PLUS</a></li>
                                                                <li><a href="asos-classic-24e-plus-wifi.html">ASOSmobil 24E WIFI</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                          <div className="col-12 col-sm-12 col-lg-4">
                            <a className="level-1 produkt-kategorie" style={{ color: '#fff' }}>
                              Heizzentrale 36
                            </a>
                            <div className="row">
                              <div className="col-4 col-lg-4 produkt-bild">
                                <img src="inhalte/img/image_02.png" alt="Mobile Heizzentrale" />
                              </div>
                              <div className="col-8 col-lg-8 produkte-liste">
                                <ul>
                                  <li>
                                    <a href="asos-classic-36e-plus.html">ASOSmobil 36E PLUS</a>
                                  </li>
                                  <li>
                                    <a href="asos-classic-36e-plus-wifi.html">ASOSmobil 36E WIFI</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-4">
                            <a className="level-1 produkt-kategorie" style={{ color: '#fff' }}>
                              ASOSmobil Zubehör
                            </a>
                            <div className="row">
                              <div className="col-4 col-lg-4 produkt-bild">
                                <img
                                  src="inhalte/img/asos-nav-zubehoer.png"
                                  alt="POWAIR ONE und ASOS FLOW21"
                                />
                              </div>
                              <div className="col-8 col-lg-8 produkte-liste">
                                <ul>
                                  <li>
                                    <a href="asosmobil-zubehoer.html">ASOSmobil Zubehör</a>
                                  </li>
                                  <li>
                                    <a href="asos-flow-21.html">ASOS Flow 21</a>
                                  </li>
                                  <li>
                                    <a href="asos-powair-one.html">ASOS PowAir ONE</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Anwendungsgebiete
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a
                              className="level-1 produkt-kategorie"
                              href="anwendungsgebiete/estrichtrocknung.html"
                            >
                              Estrichtrocknung
                            </a>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a
                              className="level-1 produkt-kategorie"
                              href="anwendungsgebiete/risikomanagement.html"
                            >
                              Risikomanagement
                            </a>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a
                              className="level-1 produkt-kategorie"
                              href="anwendungsgebiete/heizungssanierung.html"
                            >
                              Heizungssanierung
                            </a>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    {/* <li className="nav-item active">
                      <a className="nav-link" href="/heizprodukte.html">
                        Produktfinder
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link smoothScroll" href="/#mieten_kaufen">
                        Kaufen
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smoothScroll" href="/#mieten_kaufen">
                        Testzeitraum
                      </a>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Über Asosmobil
                      </a>
                      <div className="dropdown-menu small" aria-labelledby="navbarDropdownMenuLink">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a className="level-1 produkt-kategorie" href="ueber-uns.html">
                              Über uns
                            </a>
                            
                                                    <div class="row">
                                                        <div class="col-12 col-lg-12 produkte-liste ohne-bild">
                                                            <ul>
                                                                <li><a href="ueber-uns.html">Über uns</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    
                          </div>
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a className="level-1 produkt-kategorie" href="partner.html">
                              Partner
                            </a>
                          </div>
                          
                                                <div class="col-12 col-sm-4 col-lg-3">
                                                    <a class="level-1 produkt-kategorie" href="kontakt.html">Kontakt</a>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-12 produkte-liste ohne-bild">
                                                            <ul>
                                                                <li><a href="impressum">Impressum</a></li>
                                                                <li><a href="datenschutz.html">Datenschutz</a></li>
                                                                <li><a href="agb.html">AGB</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a className="level-1 produkt-kategorie" href="kontakt.html">
                              Kontakt
                            </a>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a className="level-1 produkt-kategorie" href="impressum">
                              Impressum
                            </a>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a className="level-1 produkt-kategorie" href="datenschutz.html">
                              Datenschutz
                            </a>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-3">
                            <a className="level-1 produkt-kategorie" href="agb.html">
                              AGB
                            </a>
                          </div>
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-12"></div>
        </div>
        {isFull && (
          <div className="row header-gesamt">
            <div className="col-12 col-lg-6 header-stoerer-product">
              <div className="headline">
                <h1>Mobile Heizzentrale - Neu gedacht</h1>
                <h3>Die smarte mobile Heizungsanlage</h3>
              </div>
              <div className="teaser-list">
                <ul>
                  <li>
                    Nur 32 kg – Die mobile Heizung ist leicht für eine Person zu transportieren und zu
                    installieren
                  </li>
                  <li>
                    Intelligente Wärme­bedarfs Steuerung für maximale Energie­ersparnis durch hoch­effiziente
                    Leistungs­anapssung Ihres mobilen Heizungsgerätes
                  </li>
                  <li>Voll­elektronische Leistungs­regulierung</li>
                  <li>
                    Die mobile Heizung ist einfach zu bedienen über 7" Touchdisplay oder aus der Ferne per PC,
                    Handy, Tablet (optional){' '}
                  </li>
                  <li>inkl. Estrich­aufheiz­programm, sowie Möglichkeit der freien Programmierung</li>
                  <li>Download der Heizprotokolle über USB</li>
                  <li>regelbar 32A / 16A </li>
                  <li>Menüsprachen: deutsch, englisch, französich</li>
                </ul>
              </div>
              <div className="row headline">
                <div className="col-12 col-lg-6">
                  <a
                    onclick=" gtag('event', 'Klick', {'event_category' : 'Button','event_label' : 'Jetzt kaufen'}); "
                    className="btn smoothScroll"
                    href="/#mieten_kaufen"
                    title="Jetzt kaufen"
                  >
                    Jetzt kaufen
                  </a>
                </div>
                <div className="col-12 col-lg-6">
                  <a
                    onclick=" gtag('event', 'Klick', {'event_category' : 'Button','event_label' : 'Jetzt mieten'}); "
                    className="btn smoothScroll"
                    href="/#mieten_kaufen"
                    title="Testzeitraum"
                  >
                    Testzeitraum
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-women text-right">
              <div className="stoerer">
                <p>NUR</p>
                <p className="gewicht">32 KG</p>
                <p className="info">
                  <strong>50% leichter</strong> als
                  <br />
                  andere Geräte
                </p>
              </div>
              <Count>
                <CountContainer>
                  <CountType>
                    <CountNumbers>
                      <CountNumber>
                        <CountNumberText key={hours[0]}>{hours[0]}</CountNumberText>
                      </CountNumber>
                      <CountNumber>
                        <CountNumberText key={hours[1]}>{hours[1]}</CountNumberText>
                      </CountNumber>
                    </CountNumbers>
                    <CountInfo>Stunden</CountInfo>
                  </CountType>
                  <CountType>
                    <CountNumbers>
                      <CountNumber>
                        <CountNumberText key={minutes[0]}>{minutes[0]}</CountNumberText>
                      </CountNumber>
                      <CountNumber>
                        <CountNumberText key={minutes[1]}>{minutes[1]}</CountNumberText>
                      </CountNumber>
                    </CountNumbers>
                    <CountInfo>Minuten</CountInfo>
                  </CountType>
                  <CountType>
                    <CountNumbers>
                      <CountNumber>
                        <CountNumberText key={seconds[0]}>{seconds[0]}</CountNumberText>
                      </CountNumber>
                      <CountNumber>
                        <CountNumberText key={seconds[1]}>{seconds[1]}</CountNumberText>
                      </CountNumber>
                    </CountNumbers>
                    <CountInfo>Sekunden</CountInfo>
                  </CountType>
                </CountContainer>
                <CountHeader>
                  <OldPrice>270€</OldPrice>
                  <NewPrice>42€</NewPrice>
                </CountHeader>
              </Count>
              <img className="icon-wlan" src="inhalte/Icons/ASOS_icon_wlan-02.svg" alt="Wlan" />
              <img className="women" src="inhalte/img/ASOS_image_heizanlage_header.png" alt="ASOS mobil" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Count = styled.div`
  position: absolute;
  left: 13%;
  top: 22rem;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  width: 100%;

  @media all and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 600px) {
    grid-gap: 14px;
  }
`;
const CountHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  margin-top: 20px;
  padding: 32px 30px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  width: 100%;
`;
const OldPrice = styled.p`
  color: #3c3c3b;
  font-size: 46px;
  text-decoration: line-through;
  font-weight: 600;
  margin-right: 20px;
`;
const NewPrice = styled.p`
  color: red;
  font-size: 66px;
  font-weight: 600;
  font-style: italic;
  text-decoration: underline;
`;
const CountType = styled.div`
  display: flex;
  flex-direction: column;
`;
const CountNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  margin-bottom: 18px;

  @media all and (max-width: 600px) {
    grid-column-gap: 8px;
    margin-bottom: 14px;
  }
`;
const CountNumber = styled.div`
  background: linear-gradient(90deg, rgba(245, 190, 17, 1) 0%, rgba(242, 222, 11, 1) 100%);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  @media all and (max-width: 900px) {
    height: 120px;
  }
`;
const CountInfo = styled.div`
  border-radius: 10px;
  font-weight: 300;
  font-size: 26px;
  color: #3c3c3b;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  background-color: #fff;

  @media all and (max-width: 600px) {
    height: 40px;
    font-size: 24px;
  }
`;
const CountNumberText = styled.div`
  font-weight: 700;
  font-size: 80px;
  text-align: center;
  color: #3c3c3b;
  animation: appear 0.9s;

  @keyframes appear {
    from {
      scale: 1;
      opacity: 0;
    }

    50% {
      scale: 0.9;
      opacity: 1;
    }

    to {
      scale: 1;
    }
  }

  @media all and (max-width: 900px) {
    font-size: 70px;
  }
`;
