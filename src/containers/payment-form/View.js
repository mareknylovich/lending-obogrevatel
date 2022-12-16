import React from 'react';

export const PaymentFormView = ({ handleSubmit, handleChangePurchaseType, priceText }) => (
  <div className="orange-primary" id="mieten_kaufen">
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-4 text-center model-bild">
          <img className="product-image" src="inhalte/img/image_06_neu.png" alt="Heizzentrale" />
        </div>
        <div className="col-12 col-lg-8 model-tabs">
          <h3>Wählen Sie Ihre mobile Heizzentrale aus*:</h3>
          <form className="angebot" id="formMietKaufen" name="formMietKaufen" onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <select className="form-control" id="select-modul" name="model" required>
                <option value>Bitte wählen Sie ihr Modell aus.</option>
                <option
                  onselect="gtag('event', 'Öffnen', {'event_category' : 'Tab','event_label' : 'ASOSmobil 21E WIFI'});"
                  value="ASOSmobil 21E WIFI"
                >
                  ASOSmobil 21E WIFI
                </option>
                <option
                  onselect="gtag('event', 'Öffnen', {'event_category' : 'Tab','event_label' : 'ASOSmobil 21E PLUS'});"
                  value="ASOSmobil 21E PLUS"
                >
                  ASOSmobil 21E PLUS
                </option>
                <option
                  onselect="gtag('event', 'Öffnen', {'event_category' : 'Tab','event_label' : 'ASOSmobil 21E CLASSIC'});"
                  value="ASOSmobil 21E CLASSIC"
                >
                  ASOSmobil 21E CLASSIC
                </option>
                <option
                  onselect="gtag('event', 'Öffnen', {'event_category' : 'Tab','event_label' : 'ASOSmobil 36e Plus'});"
                  value="ASOSmobil 36e Plus"
                >
                  ASOSmobil 36e Plus
                </option>
                <option
                  onselect="gtag('event', 'Öffnen', {'event_category' : 'Tab','event_label' : 'ASOSmobil 36e WiFi'});"
                  value="ASOSmobil 36e WiFi"
                >
                  ASOSmobil 36e WiFi
                </option>
              </select>
            </div>
            {/* <div
              className="info-list-wrapper mb-5"
              data-product="ASOSmobil 21E WIFI"
              style={{ display: 'none' }}
            >
              <ul>
                <li># nur 31,2kg leicht</li>
                <li># umschaltbar 15,2A/30,3A</li>
                <li># vollelektronische Leistungsregulierung</li>
                <li># 60 Tage programmierbar</li>
                <li># Estrichaufheizprogramm inklusive</li>
                <li># Menüsprache DE, ENG, FR</li>
                <li># USB Port zum Download Heizprotokoll</li>
                <li># einfache Bedienung über Touchdisplay</li>
                <li>
                  # Fernzugriff via Handy, Tablett und PC + WLAN und 4G* fähig (*Bedarf eines zusätzlichen
                  Mobilfunkvertrags)
                </li>
              </ul>
            </div> 
            <div
              className="info-list-wrapper mb-5"
              data-product="ASOSmobil 21E PLUS"
              style={{ display: 'none' }}
            >
              <ul>
                <li># nur 31,2kg leicht</li>
                <li># umschaltbar 15,2A/30,3A</li>
                <li># vollelektronische Leistungsregulierung</li>
                <li># 60 Tage programmierbar</li>
                <li># Estrichaufheizprogramm inklusive</li>
                <li># USB Port zum Download Heizprotokoll</li>
                <li># einfache Bedienung über Touchdisplay</li>
                <li># Menüsprache DE, ENG, FR</li>
              </ul>
            </div>
            <div
              className="info-list-wrapper mb-5"
              data-product="ASOSmobil 21E CLASSIC"
              style={{ display: 'none' }}
            >
              <ul>
                <li># Die Stromversorgung erfolgt über ein CEE Stecker 32A</li>
                <li># Wassertemperaturbereich in der Heizanlage: 20°C – 80°C</li>
                <li># Komplett mit 6l Ausdehnungsgefäß</li>
                <li># Durch unterschiedliche Heizleistungen einfach den Bedürfnissen anpassbar</li>
                <li># Anschluss (Sicherung (bei 21kW): 15,2 – 30,3 A)</li>
                <li># Mikroprozessor gesteuerte Leistung</li>
                <li># Automatische Leistungseinstellung mit 6-Leistungsstufen</li>
                <li># Steuerung der Umwälzpumpe</li>
                <li># Automatische Einstellung der Arbeitsparameter</li>
                <li># Inklusive magnetischem Siebfilter</li>
                <li># Druckfest bis 6 bar</li>
                <li># Schutzart IP24</li>
              </ul>
            </div>
            <div
              className="info-list-wrapper mb-5"
              data-product="ASOSmobil 36e Plus"
              style={{ display: 'none' }}
            >
              <ul>
                <li># nur 31,9kg leicht</li>
                <li># umschaltbar 32A / 63A (18kW / 36kW)</li>
                <li># vollelektronische Leistungsregulierung</li>
                <li># 60 Tage programmierbar</li>
                <li># Estrichaufheizprogramm inklusive</li>
                <li># USB Port zum Download Heizprotokoll</li>
                <li># einfache Bedienung über Touchdisplay</li>
                <li># Menüsprache DE, ENG, FR</li>
              </ul>
            </div>
            <div
              className="info-list-wrapper mb-5"
              data-product="ASOSmobil 36e WiFi"
              style={{ display: 'none' }}
            >
              <ul>
                <li># nur 31,9kg leicht</li>
                <li># umschaltbar 32A / 63A (18kW / 36kW)</li>
                <li># vollelektronische Leistungsregulierung</li>
                <li># 60 Tage programmierbar</li>
                <li># Estrichaufheizprogramm inklusive</li>
                <li># Menüsprache DE, ENG, FR</li>
                <li># USB Port zum Download Heizprotokoll</li>
                <li># einfache Bedienung über Touchdisplay</li>
                <li>
                  # Fernzugriff via Handy, Tablett und PC + WLAN und 4G* fähig (*Bedarf eines zusätzlichen
                  Mobilfunkvertrags)
                </li>
              </ul>
            </div>
             */}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                        .info-list-wrapper ul li{\n                            color: #212529;\n                        }\n                    ',
              }}
            />
            <div className="tab-content" id="myTabContent">
              <input type="hidden" name="formsent" />
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Sie möchten?*</label>
              </div>
              <div className="form-group pb-3">
                <div className="form-check">
                  <input
                    className="form-check-input input_art"
                    type="radio"
                    name="mietenkaufen_typ"
                    defaultValue="mieten"
                    id="art00"
                    required
                    onChange={handleChangePurchaseType}
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="art00">
                    Testzeitraum
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input input_art"
                    type="radio"
                    name="mietenkaufen_typ"
                    defaultValue="kaufen"
                    id="art01"
                    required
                    onChange={handleChangePurchaseType}
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="art01">
                    Kaufen
                  </label>
                </div>
              </div>
              <div className="form-group pb-3 input_miete" style={{ display: 'none' }}>
                <div className="form-group">
                  <label htmlFor="inputAbWann">Ab wann?*</label>
                  <input className="form-control" type="text" name="ab_wann" id="inputAbWann" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputWieLange">Wie lange?*</label>
                  <input className="form-control" type="text" name="wie_lange" id="inputWieLange" />
                </div>
              </div>
              <h4>
                <strong>Zubehör:</strong>
              </h4>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Schlauchpaket*</label>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="schlauch"
                    defaultValue="Ohne Schlauchset"
                    id="schlauch00"
                    required
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="schlauch00">
                    Ohne Schlauchset
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="schlauch"
                    defaultValue="Schlauch 3 Meter"
                    id="schlauch01"
                    required
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="schlauch01">
                    3 Meter (2 Schläuche mit GEKA plus Schnellkupplung)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="schlauch"
                    defaultValue="Schlauch 5 Meter"
                    id="schlauch02"
                    required
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="schlauch02">
                    5 Meter (2 Schläuche mit GEKA plus Schnellkupplung)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="schlauch"
                    defaultValue="Schlauch 10 Meter"
                    id="schlauch03"
                    required
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="schlauch03">
                    10 Meter (2 Schläuche mit GEKA plus Schnellkupplung)
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="label-adapter">
                  Adapterstecker*
                </label>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="adapterstecker"
                    defaultValue="Ohne Adapterstecker"
                    id="adapter02"
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="adapter02">
                    Ohne Adapterstecker
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="adapterstecker"
                    defaultValue="Adapterstecker 32A/16A"
                    id="adapter01"
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="adapter01">
                    32A/16A
                  </label>
                </div>
              </div>
              <h5 className="modal-title" id="exampleModalLabel">
                Ihre Kontaktdaten
              </h5>
              <div className="form-group">
                <label>Firma</label>
                <input type="text" name="firma" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="label-adapter">
                  Nutzung*:
                </label>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="nutzung"
                    defaultValue="Privat"
                    id="nutzung02"
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="nutzung02">
                    Privat
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="nutzung"
                    defaultValue="Gewerblich"
                    id="nutzung01"
                  />
                  <label className="form-check-label radio-auswahl" htmlFor="nutzung01">
                    Gewerblich
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Name*</label>
                <input type="text" name="name" className="form-control" required />
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="form-group">
                    <label>Straße*</label>
                    <input type="text" name="street" className="form-control" required />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label>Hausnummer*</label>
                    <input type="text" name="hnr" className="form-control" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label>PLZ*</label>
                    <input type="text" name="plz" className="form-control" required />
                  </div>
                </div>
                <div className="col-8">
                  <div className="form-group">
                    <label>Ort*</label>
                    <input type="text" name="ort" className="form-control" required />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Telefon*</label>
                <input type="text" name="telefon" className="form-control" required />
              </div>
              <div className="form-group">
                <label>E-Mail*</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Nachricht</label>
                <textarea name="nachricht" className="form-control" defaultValue={''} />
              </div>
              <div className="form-group">
                <input
                  name="datenschutz"
                  type="checkbox"
                  defaultValue={1}
                  id="datenschutz"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label datenschutz" htmlFor="datenschutz">
                  Ja, ich habe die{' '}
                  <a
                    target="_blank"
                    href="https://www.asosmobil.de/datenschutz.html"
                    title="Datenschutz lesen"
                    style={{ color: '#2aa737' }}
                  >
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und akzeptiert.*
                </label>
              </div>
              <div className="form-group">
                <input type="hidden" className="g-recaptcha" name="recaptchasymbol" />
                <input type="hidden" name="token" id="token" />
                <button
                  className="senden w-100"
                  name="submit"
                  type="submit"
                  data-callback="onSubmit"
                  data-action="submit"
                >
                  Angebot erhalten
                </button>

                {priceText && (
                  <p style={{ marginTop: '14px', fontSize: '20px', textAlign: 'center' }}>
                    Gesamtbetrag: {priceText}
                  </p>
                )}
              </div>
              <div className="row mt-2">
                <div className="col-12 col-lg-12 pb-5">
                  <p className="icon-support">Kostenloser Telefonischer Inbetriebnahme Support</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
