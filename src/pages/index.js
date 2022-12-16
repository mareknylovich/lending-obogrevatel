import React from 'react';
import Head from 'next/head';

import { PaymentForm } from '../containers';

const HomePage = () => {
  return (
    <React.Fragment>
      {/* <Head>
        <link rel="stylesheet" href="/style/app.css?v=3" />
      </Head> */}

      <div className="icon-teaser light-primary">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-12 pb-5">
              <h2>
                <span>Die Vorteile</span> Ihrer mobilen Heizung
              </h2>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img src="inhalte/Icons/ASOS_icon_leichtbauweise-02.svg" alt="Leistungsbauweise" />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    Ultra
                    <br />
                    Leichtbauweise
                  </h3>
                  <p>Nur 32 kg – Leicht von einer Person zu transportieren und zu installieren.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img src="inhalte/Icons/ASOS_icon_leistungsanpassung-03.svg" alt="Leistungsanpassung" />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    Vollautomatische
                    <br />
                    Leistungs­anpassung
                  </h3>
                  <p>Intelligente Leistungs­steuerung in 6 modulierenden Stufen.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img
                    className="icon-toggle"
                    src="inhalte/Icons/ASOS_icon_leistungsaufnahme-04.svg"
                    alt="Leistungseinstellung"
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    Regelbare
                    <br />
                    Leistungs­aufnahme
                  </h3>
                  <p>Einfach zwischen 32A und 16A umschaltbar.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img src="inhalte/Icons/ASOS_icon_abgasfrei-05.svg" alt="Abgasfreies arbeiten" />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    Vollkommen
                    <br />
                    Abgasfrei
                  </h3>
                  <p>
                    Durch den Strombetrieb ist die Nutzung der mobilen Heizung in geschlossenen Räumen
                    möglich.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img
                    className="icon-bedienung"
                    src="inhalte/Icons/ASOS_icon_bedienung-06.svg"
                    alt="Einfache Bedienung"
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    Einfache
                    <br />
                    Bedienung
                  </h3>
                  <p>Intuitive Nutzerführung und übersichtliche Darstellung auf einem 10“ Touchdisplay.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img
                    className="verbrauch"
                    src="inhalte/Icons/ASOS_icon_verbrauch-07.svg"
                    alt="Geringer Verbrauch"
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    Geringer
                    <br />
                    Verbrauch
                  </h3>
                  <p>Bis zu 20% weniger Verbrauch</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img
                    className="heizung"
                    src="inhalte/Icons/ASOS_icon_aufheizprogramm-08.svg"
                    alt="Estrich Aufheizprogramm"
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    Estrich
                    <br />
                    Aufheiz­programm
                  </h3>
                  <p>
                    Vollautomatisches Heizprogramm nach DIN EN 1264-4, sowie individuelle Programmierung bis
                    zu 60 Tage
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img className="usb" src="inhalte/Icons/ASOS_icon_usb-09.svg" alt="UB Schnittstelle" />
                </div>
                <div className="col-12 col-lg-9">
                  <h3>
                    USB
                    <br />
                    Schnittstelle
                  </h3>
                  <p>Laden Sie die Aufheiz­protokolle der mobilen Heizzentrale zur Dokumentation herunter.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 pb-5 mobile-center">
              <div className="row icon-teaser">
                <div className="col-12 col-lg-3">
                  <img
                    className="sicherheit"
                    src="inhalte/Icons/ASOS_icon_sicherheit-10.svg"
                    alt="Sicherheit"
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <h3 className="einzeilig">Sicherheit</h3>
                  <p>Gesicherte Verbindung zur Heizzentrale und Sicherung der Anlage..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stoerer-konfigurator">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2>
                <span>Finden Sie Ihre</span>
                <br />
                Optimale Heizungsanlage
              </h2>
            </div>
            <div className="col-12 col-lg-6 mobile-center">
              <img src="inhalte/img/ASOS_image_heizanlage_teaser.png" alt="Heizungsanlage" />
              <a className="btn smoothScroll" href="#mieten_kaufen" title="PRODUKT-KONFIGURATOR">
                Jetzt kaufen
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="stoerer-pdf">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 pb-2">
              <h4>
                Unsere Mobile Heizung ASOS Classic 24e PLUS WiFi
                <br /> im Heizungs­Journal
              </h4>
            </div>
            <div className="col-12 col-sm-3">
              <a href="inhalte/pdf/HeizungsJournal-Beitrag-ASOSmobil-2019.pdf" target="_blank">
                <img src="inhalte/img/pdf_bild.jpg" alt="Broschüre" />
              </a>
            </div>
            <div className="col-12 col-sm-6 text-left justify-content-center align-self-center">
              <p>
                <strong>Ausgabe 12/2019</strong>
              </p>
              <p>
                <strong>Seite:</strong>
                <br />
                <strong>Verlag:</strong> Heizungs-Journal Verlags-GmbH, Winnenden
              </p>
              <hr />
              <div className="row">
                <div className="col-12 col-lg-6">
                  <a
                    className="download-link"
                    href="inhalte/pdf/HeizungsJournal-Beitrag-ASOSmobil-2019.pdf"
                    target="_blank"
                    download
                  >
                    Download
                  </a>
                </div>
                <div className="col-12 col-lg-6">
                  <a
                    className="online-link"
                    href="https://www.heizungsjournal.de/mobile-heizzentralen-neu-gedacht_14925?nl=1"
                    target="_blank"
                  >
                    Zum Onlineartikel
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 text-left" />
          </div>
        </div>
      </div>
      <div className="produkt-detail grey-primary" id="produkte-entdecken">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center pb-3">
              <p className="subheadline">Die mobile Heizung - Unser Premiumprodukt</p>
              <h2>ASOSmobil 21e WiFi</h2>
            </div>
            <div className="col-12 col-lg-6 pb-5">
              <h3>
                Jederzeit <span>Smarte</span>
                <br /> Steuerung &amp; Kontrolle
              </h3>
              <p>
                Das intuitiv geführte Menü ermöglicht die schnelle und einfache Einstellung der gewünschten
                Parameter. Die Überprüfung des korrekten Betriebs der Heizungsanlage ist bei Bedarf auch aus
                der Ferne möglich.
              </p>
              <img className="linie1" src="inhalte/img/ASOSMOBIL_linie_01.png" alt="Asos mobil" />
              <p className="pt-5">&nbsp;</p>
            </div>
            <div className="col-12 col-lg-6 pb-5">
              <img src="inhalte/img/image_03.png" alt="Heizzentrale" />
            </div>
          </div>
        </div>
      </div>
      <div className="produkt-detail light-primary">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6 pb-5 pt-5">
              <div className="desktob-version">
                <img src="inhalte/img/image_04_neu.png" alt="Heizzentrale" />
              </div>
              <div className="mobile-version">
                <h3>
                  <span>Kompatibel</span> für alle
                  <br /> Heizungsanlagen
                </h3>
                <p>
                  Neben der digitalen Anzeige können Druck, Vor- &amp; Rücklauftemperatur auch analog
                  abgelesen werden. Für größere Objekte kann zusätzlich ein externes Ausdehnungsgefäß
                  angeschlossen werden.{' '}
                </p>
                <img className="linie2" src="inhalte/img/ASOS_linie_orange.png" alt="Asos mobil" />
                <p className="pt-5">&nbsp;</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-5 pt-5 mt_headline">
              <div className="mobile-version">
                <img src="inhalte/img/image_04_neu.png" alt="Heizzentrale" />
              </div>
              <div className="desktob-version">
                <h3>
                  <span>Kompatibel</span> für alle
                  <br /> Heizungsanlagen
                </h3>
                <p>
                  Neben der digitalen Anzeige können Druck, Vor- &amp; Rücklauftemperatur auch analog
                  abgelesen werden. Für größere Objekte kann zusätzlich ein externes Ausdehnungsgefäß
                  angeschlossen werden.{' '}
                </p>
                <img className="linie2" src="inhalte/img/ASOS_linie_orange.png" alt="Asos mobil" />
                <p className="pt-5">&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="produkt-detail grey-primary">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6 pb-5 pt-5">
              <h3>
                <span>Ultraleicht</span> und <br />
                sehr flexibel
              </h3>
              <p>
                Mit einem Leichtgewicht von nur 32 kg und pannenfreien PU-Rädern immer und überall
                einsatzbereit und von nur einer Person problemlos zu transportieren und installieren.
              </p>
              <img className="linie3" src="inhalte/img/ASOSMOBIL_linie_03.png" alt="Asos mobil" />
              <p className="pt-5">&nbsp;</p>
            </div>
            <div className="col-12 col-lg-6 pb-5 pt-5">
              <img src="inhalte/img/image_05.png" alt="Heizzentrale" />
            </div>
          </div>
        </div>
      </div>
      <PaymentForm />
      <div className="dark-background-primary">
        <div className="container py-5 container-breiter">
          <div className="row">
            <div className="col-12 text-center">
              <h3>
                So hast du deine Mobile Heizung <span>jederzeit im Blick</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 mx-auto mobile-grid-abstand">
              <h4>Parameter Vorschau</h4>
              <img className="linie4" src="inhalte/img/ASOSMOBIL_linie_04.png" alt="Asos mobil" />
              <p>
                Darstellung der Eingangs-, Ausgangs- und Soll-Temperatur sowie weiterer Live-Betriebsparameter
                in tabellarischer oder grafisch aufbereiter Form.
              </p>
            </div>
            <div className="col-12 col-lg-8 text-center mobile-grid-abstand">
              <div className="desktob-version">
                <img className="einstellung1" src="inhalte/img/ASOSMOBIL_handy_02.png" alt="Asos mobil" />
              </div>
              <div className="mobile-version">
                <img src="inhalte/img/ASOSMOBIL_handy_02.png" alt="Asos mobil" />
              </div>
            </div>
            <div className="col-12 col-lg-4 mx-auto mobile-grid-abstand">
              <h4>Einstellungen</h4>
              <img className="linie4" src="inhalte/img/ASOSMOBIL_linie_04.png" alt="Asos mobil" />
              <p>
                Vielfältige Einstellungsmöglichkeiten können einfach per Menü vorgenommen werden. Eine
                aufwändige Programmierung per Tasten entfällt.
              </p>
            </div>
            <div className="col-12 col-lg-8 text-center mobile-grid-abstand">
              <img src="inhalte/img/ASOSMOBIL_handy_01.png" alt="Asos mobil" />
            </div>
            <div className="col-12 col-lg-4 mx-auto mobile-grid-abstand">
              <h4>Vorkonfigurierte Programme</h4>
              <img className="linie4" src="inhalte/img/ASOSMOBIL_linie_04.png" alt="Asos mobil" />
              <p>
                Es stehen mehrere Betriebsmodi bereit und können direkt ohne weitere Anpassungen genutzt
                werden (z.B. Estrichaufheizprogramm).
              </p>
            </div>
            <div className="col-12 col-lg-8 text-center mobile-grid-abstand">
              <div className="desktob-version">
                <img className="einstellung1" src="inhalte/img/ASOSMOBIL_handy_03.png" alt="Asos mobil" />
              </div>
              <div className="mobile-version">
                <img src="inhalte/img/ASOSMOBIL_handy_03.png" alt="Asos mobil" />
              </div>
            </div>
            <div className="col-12 col-lg-4 mx-auto mobile-grid-abstand">
              {/*
                <h4>Heizen</h4>
                <img class="linie4" src="0_landingpage/img/ASOSMOBIL_linie_04.png" alt="Asos mobil">
                <p>Tem qui volo bla nihit etus sinulle cearum quis et quatusapiet vel imusapedi nosanitem sit perumen- da nobis et molendunt expliquam venisti animin nienim re cus, odi destorrore.</p>
                */}
            </div>
            <div className="col-12 col-lg-8 text-center mobile-grid-abstand">
              <div className="desktob-version">
                <img className="einstellung4" src="inhalte/img/ASOSMOBIL_handy_04.png" alt="Asos mobil" />
              </div>
              <div className="mobile-version">
                <img src="inhalte/img/ASOSMOBIL_handy_04.png" alt="Asos mobil" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-background-two-primary">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h3>
                <span>Technische Daten</span> <br />
                und Informationen Ihrer mobilen Heizzentrale
              </h3>
            </div>
            <div className="col-12 col-lg-6">
              <ul>
                <li>Die Stromversorgung erfolgt über ein CEE Stecker 32A</li>
                <li>Wassertemperaturbereich in der Heizanlage: 20°C – 80°C</li>
                <li>Estrichaufheizprogramm nach DIN, oder frei programmierbar bis 60 Tage</li>
                <li>Komplett mit 6l Ausdehnungsgefäß</li>
                <li>
                  Durch unterschiedliche Heizleistungen und Anschlussspannungen einfach den Bedürfnissen
                  anpassbar
                </li>
                <li>Mikroprozessor gesteuerte Leistung</li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <ul>
                <li>Automatische Leistungseinstellung mit 6-Leistungsstufen</li>
                <li>Steuerung der Umwälzpumpe</li>
                <li>Automatische Einstellung der Arbeitsparameter</li>
                <li>Inklusive magnetischem Siebfilter</li>
                <li>Druckfest bis 6 bar</li>
                <li>Schutzart IP24</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
