import React from 'react';

const AGBPage = () => {
  return (
    <React.Fragment>
      <div className="kontakt-stoerer">
        <div className="kontakt-person">
          <img src="inhalte/img/kontakt_women.jpg" alt="Kontakt" />
        </div>
        <div className="kontakt-text">
          <h3>Du benötigst Hilfe?</h3>
          <p>Wir stehen dir gerne zur Verfügung</p>
          <a
            onclick=" gtag('event', 'Klick', {'event_category' : 'Link','event_label' : 'E-Mail Link'}); "
            className="kontakt-widget-email"
            href="mailto:kontakt@asosmobil.de"
            title="Kontaktieren Sie uns"
          >
            kontakt@asosmobil.de
          </a>
          <br />
          <a
            onclick=" gtag('event', 'Klick', {'event_category' : 'Link','event_label' : 'Telefon Link'}); "
            className="kontakt-widget-telefon"
            href="tel:+4938145825900"
            title="Kontaktieren Sie uns"
          >
            +49 (0) 381 458 289 00
          </a>
        </div>
      </div>
      <div className="container py-5 light-primary content-inhalt">
        <div className="row">
          <div className="col-12">
            <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
            <h2>von ASOSmobil</h2>
            <p>
              Um die Geschäftsbeziehung zwischen Ihnen (zukünftig Kunde genannt) und ASOSmobil (zukünftig
              Verkäufer genannt) zu regeln, gelten im Geschäftsverkehr mit ASOSmobil grundsätzlich die
              folgenden allgemeinen Geschäftsbedingungen:
            </p>
            <h3>§ 1 Geltungsbereich</h3>
            <ol>
              <li>
                Die AGB des Verkäufers gelten für alle Verkäufe, Lieferungen und Leistungen von beweglichen
                Sachen nach Maßgaben eines geschlossenen Vertrages bzw. eines verbindlichen Auftrages.
              </li>
              <li>
                Etwaige von diesen AGB abweichende Vereinbarungen werden vom Verkäufer grundsätzlich erst
                einmal abgelehnt. Gültigkeit erhalten abweichende Vereinbarungen erst nach schriftlicher
                Bestätigung durch des Verkäufers.
              </li>
              <li>
                Diese AGB gelten sowohl gegenüber Endverbrauchern als Kunden (zukünftig Endverbraucher als
                Kunde genannt) als auch gegenüber Unternehmern, juristischen Personen des öffentlichen Rechts
                und öffentlich-rechtlichen Sondervermögen im Sinne des § 310 Absatz 1 BGB (zukünftig
                Unternehmer als Kunde genannt) als Kunden soweit in dem betreffenden Paragraphen eine
                eindeutige Differenzierung vorgenommen wird.
              </li>
            </ol>
            <h3>§ 2 Angebot, Vertragsabschluss</h3>
            <ol>
              <li>
                lle versandten Angebote des Verkäufers sind freibleibend und haben eine Gültigkeit von 6
                Wochen ab Eingang des Angebots beim Kunden.
              </li>
              <li>
                Sofern eine Bestellung von einem Unternehmer als Kunden als Angebot gem. § 145 BGB anzusehen
                ist, kann der Verkäufer dieses innerhalb von 2 Wochen annehmen.
              </li>
              <li>
                Die vom Endverbraucher als Kunden unterzeichnete Bestellung ist ein bindendes Angebot. Der
                Verkäufer kann dieses Angebot innerhalb von 2 Wochen durch Zusendung einer Auftragsbestätigung
                annehmen oder innerhalb dieser Frist die bestellte Ware zusenden.
              </li>
            </ol>
            <h3>§ 3 Überlassene Unterlagen</h3>
            <ol>
              <li>
                An allen mit dem Angebot zusammenhängenden Informationen / Daten / Unterlagen / Bildmaterial /
                Zeichnungen ob in Papier- oder elektronischer Form behält sich der Verkäufer Eigentum,
                Urheberrechte und sonstige Rechte vor. Diese dürfen Dritten weder zugänglich noch weiter
                gegeben werden ohne schriftliche Zustimmung des Verkäufers.
              </li>
              <li>
                Soweit das Angebot nicht innerhalb der Frist von § 2 Abs. 2 bzw. 3 angenommen wird, sind die
                überlassenen Unterlagen zeitnah zurück zu senden.
              </li>
            </ol>
            <h3>§ 4 Preise, Zahlungsverpflichtungen, Zahlungsbedingungen</h3>
            <ol>
              <li>
                Es gelten die Preise gem. der aktuellen Preisliste zuzüglich Versandkosten. Hiervon
                abweichende Preise sind etwaigen Aktionsangeboten zu entnehmen bzw. bedürfen einer gesonderten
                schriftlichen Vereinbarung mit dem Verkäufer.
              </li>
              <li>
                Alle Preise verstehen sich grundsätzlich netto zuzüglich Mehrwertsteuer und werden jeweils in
                der in Deutschland gültigen Währung (aktuell = Euro) ausgewiesen.
              </li>
              <li>
                Die Zahlung des Kaufpreises hat ausschließlich auf das/die gem. Kaufvertrag vereinbarte/n
                Bankverbindung/en bzw. gem. der auf der Rechnung ausgewiesene/n Bankverbindung/en zu erfolgen.
                Ein Abzug von Skonto ist nur bei Ausweis auf der Rechnung und/oder anderer schriftlicher
                gesonderter Vereinbarung zulässig.
              </li>
              <li>
                Sofern nichts anderes vereinbart bzw. vermerkt wird, ist der Kaufpreis innerhalb von 10 Tagen
                nach Lieferung zu zahlen. Verzugszinsen werden in Höhe von 5 % bei Endverbrauchern als Kunden
                und 8 % für Unternehmer als Kunden über dem jeweiligen Basiszins p. a. berechnet. Die
                Geltendmachung eines Verzugsschadens bleibt im Einzelfall vorbehalten.
              </li>
              <li>
                Sofern keine Festpreisabrede getroffen wurde, bleiben angemessene Preisänderungen wegen
                veränderter Lohn-, Material- und Vertriebskosten für Lieferungen, die 3 Monate oder später
                nach Vertragsabschluss erfolgen, vorbehalten.
              </li>
            </ol>
            <h3>§ 5 Aufrechnungs- und Zurückbehaltungsrechte</h3>
            <p>
              Dem Kunden steht das Recht zur Aufrechnung nur zu, wenn seine Gegenansprüche rechtskräftig
              festgestellt, entscheidungsreif oder unbestritten sind. Zur Ausübung eines
              Zurückbehaltungsrechts ist der Kunde nur insoweit befugt, als sein Gegenanspruch auf dem
              gleichen Vertragsverhältnis beruht.
            </p>
            <h3>§ 6 Lieferzeit</h3>
            <ol>
              <li>
                Der Beginn der von uns angegebenen Lieferzeit setzt die rechtzeitige und ordnungsgemäße
                Erfüllung der Verpflichtungen des Kunden voraus. Eine Einrede des nicht erfüllten Vertrages
                bleibt vorbehalten
              </li>
              <li>
                Soweit Ausführungsfristen vereinbart bzw. Grundlage für die Auftragserteilung waren,
                verlängert sich eine solche Frist bei Streik und in Fällen höherer Gewalt, und zwar um die
                Dauer der Verzögerung.
              </li>
              <li>
                Kommt der Unternehmer als Kunde in Annahmeverzug oder verletzt er schuldhaft sonstige
                Mitwirkungspflichten, so ist der Verkäufer berechtigt, den ihm insoweit entstanden Schaden,
                einschließlich etwaiger Mehraufwendungen ersetzt zu verlangen. Weitergehende Ansprüche bleiben
                vorbehalten. Sofern vorstehende Voraussetzungen vorliegen, geht die Gefahr eines zufälligen
                Untergangs oder einer zufälligen Verschlechterung der Kaufsache in dem Zeitpunkt auf den
                Unternehmer als Kunden über, in dem dieser in Annahme- oder Schuldnerverzug geraten ist.
              </li>
              <li>
                Kommt der Endverbraucher als Kunde in Annahmeverzug oder verletzt er schuldhaft sonstige
                Mitwirkungspflichten, so ist der Verkäufer berechtigt, den ihm hierdurch entstandenen Schaden,
                einschließlich etwaiger Mehraufwendungen ersetzt zu verlangen. Weitergehende Ansprüche bleiben
                vorbehalten. Dem Endverbraucher als Kunden bleibt seinerseits vorbehalten nachzuweisen, dass
                ein Schaden in der verlangten Höhe überhaupt nicht oder zumindest wesentlich niedriger
                entstanden ist. Die Gefahr eines zufälligen Untergangs oder einer zufälligen Verschlechterung
                der Kaufsache geht in dem Zeitpunkt auf den Endverbraucher als Kunden über, in dem dieser in
                Annahme- oder Schuldnerverzug gerät.
              </li>
              <li>
                Wir haften im Fall des von uns nicht vorsätzlich oder grob fahrlässig herbeigeführten
                Lieferverzuges für jede vollendete Woche Verzug im Rahmen einer pauschalierten
                Verzugsentschädigung i. H. v. 3 % des Lieferwertes, maximal jedoch nicht mehr als 15 % des
                Lieferwertes.
              </li>
              <li>
                Weitere gesetzlichen Ansprüche und Rechte des Kunden wegen eines Lieferverzuges bleiben
                unberührt.
              </li>
            </ol>
            <h3>§ 7 Gefahrenübergang bei Versendung</h3>
            <p>
              Wird die Ware an den Kunden versandt, so geht mit der Absendung an den Kunden, spätestens mit
              Verlassen des Lagers/Werks die Gefahr des zufälligen Untergangs oder der zufälligen
              Verschlechterung der Kaufware auf den Kunden über. Dies gilt unabhängig davon, ob die Versendung
              der Kaufware vom Erfüllungsort erfolgt oder wer die Frachtkosten trägt.
            </p>
            <h3>§ 8 Eigentumsvorbehalt</h3>
            <ol>
              <li>
                Der Verkäufer behält sich das Eigentum an der dem Kunden gelieferten Kaufsache bis zur
                vollständigen Zahlung sämtlicher Forderungen aus dem Liefer-/Kaufvertrag vor. Des Weiteren
                gilt für Unternehmer als Besteller dies auch für alle zukünftigen Lieferungen, auch wenn nicht
                ausdrücklich hierauf berufen. Der Verkäufer ist berechtigt, die Kaufsache zurück zu nehmen,
                wenn der Unternehmer als Kunde sich vertragswidrig verhält.
              </li>
              <li>
                Der Kunde ist verpflichtet, solange das Eigentum noch nicht auf ihn übergegangen ist, die
                Kaufsache pfleglich zu behandeln und diese gegen Diebstahl-, Feuer- und Wasserschäden
                ausreichend schützen. Müssen Wartungs- und Inspektionsarbeiten durchgeführt werden, hat der
                Kunde diese auf seine eigenen Kosten rechtzeitig auszuführen. Solange das Eigentum noch nicht
                übergegangen ist, hat der Kunde den Verkäufer unverzüglich schriftlich zu benachrichtigten,
                wenn die gelieferte Kaufsache gepfändet oder sonstigen Eingriffen Dritter ausgesetzt ist.
                Soweit der Dritte nicht in der Lage ist, dem Verkäufer die gerichtlichen und
                außergerichtlichen Kosten einer erfolgreichen Klage gem. § 771 ZPO zu erstatten, haftet der
                Kunde für den dem Verkäufer entstandenen Ausfall.
              </li>
              <li>
                Die Be- und Verarbeitung oder Umbildung der Kaufsache durch den Kunden erfolgt stets Namens
                und im Auftrag des Verkäufers. In diesem Fall setzt sich das Anwartschaftsrecht des Kunden an
                der Kaufsache an der umgebildeten Sache fort. Sofern die Kaufsache mit anderen, dem Verkäufer
                nicht gehörenden Gegenständen verarbeitet wird, erwirbt der Verkäufer das Miteigentum an der
                neuen Sache im Verhältnis des objektiven Wertes der Kaufsache zu den anderen bearbeiteten
                Gegenständen zur Zeit der Verarbeitung. Dasselbe gilt für den Fall der Vermischung. Sofern die
                Vermischung in der Weise erfolgt, dass die Sache des Kunden als Hauptsache anzusehen ist. Gilt
                als vereinbart, dass der Kunde dem Verkäufer anteilsmäßig Miteigentum überträgt und das so
                entstandene Alleineigentum oder Miteigentum für den Verkäufer verwahrt. Zur Sicherung der
                Forderungen des Verkäufers gegen den Kunden tritt der Kunde auch solche Forderungen an den
                Verkäufer ab, die ihm durch die Verbindung der Vorbehaltsware mit einem Grundstück gegen einen
                Dritten erwachsen; der Verkäufer nimmt diese Abtretung schon jetzt an.
              </li>
              <li>
                Soweit Sicherheiten vereinbart wurden, verpflichtet sich der Verkäufer, die ihm zustehenden
                Sicherheiten auf Verlangen des Kunden freizugeben, soweit ihr Wert die zu sichernden
                Forderungen um mehr als 20% übersteigt.
              </li>
            </ol>
            <h3>§ 9 Gewährleistung und Mängelrüge sowie Rückgriff/Herstellerregress</h3>
            <p>Soweit der Kunde Unternehmer ist gilt folgendes:</p>
            <br />
            <ol>
              <li>
                Gewährleistungsrechte des Kunden setzen voraus, dass dieser seinen nach § 377 HGB geschuldeten
                Untersuchungs- und Rügeobliegenheiten ordnungsgemäß nachgekommen ist.
              </li>
              <li>
                Mängelansprüche verjähren bei Neuware in 12 Monaten und bei gebrauchter Ware nach 3 Monaten
                nach erfolgter Ablieferung der von uns gelieferten Ware beim Kunden. Vorstehende Bestimmungen
                gelten nicht, soweit das Gesetz gem. § 438 Abs. 1 Nr. 2 BGB (Bauwerke und Sachen für
                Bauwerke), § 479 Absatz 1 BGB (Rückgriffsanspruch und § 634a Abs. 1 BGB (Baumängel)) längere
                Fristen zwingende vorschreibt. Vor etwaiger Rücksendung der Ware ist unsere Zustimmung
                einzuholen.
              </li>
              <li>
                Solle trotz aller aufgewendeter Sorgfalt die gelieferte Ware einen Mangel aufweisen, der
                bereits zum Zeitpunkt des Gefahrenübergangs vorlag, so werden wir die Ware, vorbehaltlich
                fristgerechter Mängelrüge nach unserer Wahl nachbessern oder Ersatzware liefern. Es ist uns
                stets Gelegenheit zur Nacherfüllung innerhalb angemessener Frist zu geben. Rückgriffsansprüche
                bleiben von vorstehender Regelung ohne Einschränkung unberührt.
              </li>
              <li>
                Schlägt die Nacherfüllung fehl, kann der Kunde – unbeschadet etwaiger Schadenersatzansprüche –
                vom Vertrag zurück treten oder die Vergütung mindern.
              </li>
              <li>
                Mängelansprüche bestehen nicht, bei nur unerheblicher Abweichung von der vereinbarten
                Beschaffenheit, bei nur unerheblicher Beeinträchtigung der Brauchbarkeit, bei natürlicher
                Abnutzung oder Verschleiß wie bei Schäden, die nach dem Gefahrübergang infolge fehlerhafter
                oder nachlässiger Behandlung, übermäßiger Beanspruchung, ungeeigneter Betriebsmittel oder auf
                Grund besonderer äußerer Einflüsse entstehen, die nach dem Vertrag nicht vorausgesetzt sind.
                Werden vom Kunden oder Dritten unsachgemäß Instandsetzungsarbeiten oder Änderungen
                vorgenommen, so bestehen für diese und die daraus entstehenden Folgen ebenfalls keine
                Mängelansprüche.
              </li>
              <li>
                Ansprüche des Kunden wegen der zum Zweck der Nacherfüllung erforderlichen Aufwendungen,
                insbesondere Transport, Wege-, Arbeits- und Materialkosten, sind ausgeschlossen, soweit die
                Aufwendungen sich erhöhen, weil die von uns gelieferte Ware nachträglich an einen anderen Ort
                als die Niederlassung des Kunden verbracht worden ist, es sei denn, die Verbringung entspricht
                ihrem bestimmungsgemäßen Gebrauch.
              </li>
              <li>
                Rückgriffsansprüche des Kunden gegen uns bestehen nur insoweit, als der Kunde mit seinem
                Abnehmer keine über die gesetzlich zwingenden Mängelansprüche hinausgehende Vereinbarungen
                getroffen hat. Für den Umfang des Rückgriffsanspruches des Kunden gegen den Verkäufers gilt
                ferner Absatz 6 entsprechend.
              </li>
              <li>
                Im Falle des arglistigen Verschweigens eines Mangels oder im Falle der Übernahme einer
                Garantie für die Beschaffenheit der Ware zum Zeitpunkt des Gefahrenübergangs im Sinne von §
                444 BGB (Erklärung des Verkäufers, dass der Kaufgegenstand bei Gefahrübergang eine bestimmte
                Eigenschaft hat und dass der Verkäufer verschuldensunabhängig für alle Folgen ihres Fehlens
                einstehen will) richten sich die Rechte des Kunden ausschließlich nach den gesetzlichen
                Bestimmungen.
              </li>
            </ol>
            <br />
            <p>Soweit der Kunde Endverbraucher ist gilt folgendes:</p>
            <br />
            <ol>
              <li>
                Im Fall von Mängeln hat der Kunde zunächst die Wahl, ob die Nacherfüllung durch Nachbesserung
                oder Ersatzlieferung erfolgen soll. Wir sind jedoch berechtigt, die vom Kunden gewählte Art
                der Nacherfüllung zu verweigern, wenn sie nur mit unverhältnismäßigen Kosten möglich ist und
                die andere Art der Nacherfüllung ohne erhebliche Nachteile für den Kunden bleibt. Während der
                Nacherfüllung sind die Herabsetzung des Kaufpreises oder der Rücktritt vom Vertrag durch den
                Kunden ausgeschlossen. Eine Nachbesserung gilt mit dem erfolglosen zweiten Versuch als
                fehlgeschlagen, wenn sich nicht insbesondere aus der Art der Sache oder des Mangels oder den
                sonstigen Umständen etwas anders ergibt. Ist die Nacherfüllung fehlgeschlagen oder haben wir
                die Nacherfüllung insgesamt verweigert, kann der Kunde nach seiner Wahl Herabsetzung des
                Kaufpreises (Minderung) verlangen oder den Rücktritt vom Vertrag erklären.
              </li>
              <li>
                Schadenersatzansprüche zu den nachfolgenden Bedingungen wegen des Mangels kann der Kunde erst
                geltend machen, wenn die Nacherfüllung fehlgeschlagen ist oder wir die Nacherfüllung
                verweigert haben. Das Recht des Kunden zur Geltendmachung von weitergehenden
                Schadenersatzansprüchen zu den nachfolgenden Bedingungen bleibt davon unberührt.
              </li>
              <li>
                Wir haften unbeschadet vorstehender Regelung und der nachfolgenden Haftungsbeschränkungen
                uneingeschränkt für Schäden an Leben, Körper und Gesundheit, die auf einer fahrlässigen oder
                vorsätzlichen Pflichtverletzung unserer gesetzlichen Vertreter oder unserer Erfüllungsgehilfen
                beruhen, sowie für alle Schäden, die auf vorsätzlichen oder grob fahrlässigen
                Vertragsverletzungen sowie Arglist, unserer gesetzlichen Vertreter oder unserer
                Erfüllungsgehilfen beruhen. Soweit wir bezüglich der Ware oder Teile derselben eine
                Beschaffenheits- und/oder Haltbarkeitsgarantie abgegeben haben, haften wir auch im Rahmen
                dieser Garantie. Für Schäden, die auf dem Fehlen der garantierten Beschaffenheit oder
                Haltbarkeit beruhen, aber nicht unmittelbar an der Ware eintreten, haben wir allerdings nur
                dann, wenn das Risiko eines solchen Schadens ersichtlich von der Beschaffenheits- und
                Haltbarkeitsgarantie erfasst ist.
              </li>
              <li>
                Wir haften auch für Schäden die durch einfache Fahrlässigkeit verursacht werden, soweit diese
                Fahrlässigkeit die Verletzung solcher Vertragspflichten betrifft, deren Einhaltung für die
                Erreichung des Vertragszwecks von besonderer Bedeutung ist (Kardinalspflichten). Wir haften
                jedoch nur, soweit die Schäden in typischer Weise mit dem Vertrag verbunden und vorhersehbar
                sind. Bei einfacher fahrlässigen Verletzungen, nicht vertragswesentlicher Nebenpflichten,
                haften wir im Übrigen nicht. Die in den Sätzen 1-3 enthaltenen Haftungsbeschränkungen gelten
                auch, soweit die Haftung für die gesetzlichen Vertreter, leitenden Angestellten und sonstigen
                Erfüllungsgehilfen betroffen ist.
              </li>
              <li>
                Eine weitergehende Haftung ist ohne Rücksicht auf die Rechtsnatur des geltend gemachten
                Anspruchs ausgeschlossen. Soweit unsere Haftung ausgeschlossen oder beschränkt ist, gilt dies
                auch für die persönliche Haftung unserer Angestellten, Arbeitnehmer, Mitarbeiter, Vertreter
                und Erfüllungsgehilfen.
              </li>
            </ol>
            <h3>§ 10 Widerrufsbelehrungen für den Fernabsatz</h3>
            <p>Widerrufsrecht</p>
            <br />
            <p>
              Ist der Kunde Unternehmer (§ 14 BGB), so hat er kein Widerrufs- und Rückgaberecht gem. § 312d
              BGB i. V. m. §§ 355, 356 BGB.
            </p>
            <br />
            <p>
              Sie können Ihre Vertragserklärung innerhalb von 14 Tagen ohne Angabe von Gründen in Textform (z.
              B. Brief, Fax, E-Mail) oder – wenn Ihnen die Sache vor Fristablauf überlassen wird – auch durch
              Rücksendung der Sache widerrufen. Die Frist beginnt nach Erhalt dieser Belehrung in Textform,
              jedoch nicht vor Eingang der Ware beim Empfänger (bei der wiederkehrenden Lieferung
              gleichartiger Waren nicht vor Eingang der ersten Teillieferung) und auch nicht vor Erfüllung
              unserer Informationspflichten gemäß Artikel 246 § 2 in Verbindung mit § 1 Absatz 1 und 2 EGBGB
              sowie unserer Pflichten gemäß § 312g Absatz 1 Satz 1 BGB in Verbindung mit Artikel 246 § 3
              EGBGB.
            </p>
            <br />
            <p>
              Zur Wahrung der Widerrufsfrist genügt die rechtzeitige Absendung des Widerrufs oder der Sache.
              Der Widerruf ist zu richten an:
            </p>
            <br />
            <p>
              Internet:{' '}
              <a href="www.asosmobil.de" target="_blank" title="www.asosmobil.de">
                www.asosmobil.de
              </a>
              <br />
              Mail: <a href="mailto:info@asosmobil.de">info@asosmobil.de</a>
            </p>
            <br />
            <p>Widerrufsfolgen</p>
            <br />
            <p>
              Im Falle eines wirksamen Widerrufs sind die beiderseits empfangener Leistungen zurück zu
              gewähren und ggf. gezogene Nutzungen (z.B. Zinsen) herauszugeben. Können Sie uns die empfangene
              Leistung sowie Nutzungen (z.B. Gebrauchsvorteile) nicht oder teilweise nicht oder nur in
              verschlechtertem Zustand zurück gewähren beziehungsweise herausgeben, müssen Sie uns insoweit
              Wertersatz leisten. Für die Verschlechterung der Sache und für gezogene Nutzungen müssen Sie
              Wertersatz nur leisten, soweit die Nutzungen oder die Verschlechterung auf einen Umgang mit der
              Sache zurückzuführen ist, der über die Prüfung der Eigenschaften und der Funktionsweise
              hinausgeht. Unter “Prüfung der Eigenschaften und der Funktionsweise” versteht man das Testen und
              Ausprobieren der jeweiligen Ware, wie es etwa im Ladengeschäft möglich und üblich ist.
              Paketversandfähige Sachen sind auf unsere Gefahr zurückzusenden. Sie haben die regelmäßigen
              Kosten der Rücksendung zu tragen, wenn die gelieferte Ware der bestellten entspricht und wenn
              der Preis der zurückzusendenden Sache einen Betrag von 40 Euro nicht übersteigt oder wenn Sie
              bei einem höheren Preis der Sache zum Zeitpunkt des Widerrufs noch nicht die Gegenleistung oder
              eine vertraglich vereinbarte Teilzahlung erbracht haben. Andernfalls ist die Rücksendung für Sie
              kostenfrei. Nicht paketversandfähige Sachen werden bei Ihnen abgeholt. Verpflichtungen zur
              Erstattung von Zahlungen müssen innerhalb von 30 Tagen erfüllt werden. Die Frist beginnt für Sie
              mit der Absendung Ihrer Widerrufserklärung oder der Sache, für uns mit deren Empfang.
            </p>
            <br />
            <p>Ende der Widerrufsbelehrung</p>
            <h3>§ 11 Datenschutz</h3>
            <p>
              Die Verarbeitung der Daten erfolgt nach Maßgabe des geltenden Bundesdatenschutzgesetzes (BDSG)
              sowie des Teledienstdatenschutzgesetz (TDDSG).
            </p>
            <br />
            <p>
              Alle von Ihnen erhalten Daten werden erhoben, verarbeitet, genutzt und an beauftragte Partner
              weitergegeben, soweit dies für die Durchführung des Liefer-/Kaufvertrages und der weiteren
              Geschäftsbeziehung zwischen Ihnen und uns notwendig ist.
            </p>
            <h3>§ 12 Sonstiges</h3>
            <ol>
              <li>
                Dieser Vertrag und die gesamten Rechtsbeziehungen der Parteien unterliegen dem Recht der
                Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
              </li>
              <li>
                Bei Unternehmer als Kunde ist Erfüllungs-/Zahlungsort und ausschließlicher Gerichtsstand für
                alle Streitigkeiten aus dem Vertrag der Geschäftssitz des Verkäufers, sofern sich aus der
                Auftragsbestätigung nichts anderes ergibt. Bei Verträgen mit Endnutzern als Kunden ist
                ausschließlicher Gerichtsstand für sämtliche Streitigkeiten aus dem Vertrag der Geschäftssitz
                des Verkäufers, wenn der Endnutzer als Kunde keinen allgemeinen Gerichtsstand in der
                Bundesrepublik Deutschland oder in einem anderen EU-Mitgliedstaat hat.
              </li>
              <li>
                Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform. Dies gilt auch für
                Änderungen dieser Schriftformklausel. Mündliche Nebenabreden wurden nicht getroffen.
              </li>
              <li>
                ollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden oder eine Lücke
                enthalten, so bleiben die übrigen Bestimmungen hiervon unberührt. Bei Unternehmer als Kunden
                verpflichten sich die Parteien, anstelle der unwirksamen Regelung eine solche gesetzlich
                zulässige Regelung zu treffen, die dem wirtschaftlichen Zweck der unwirksamen Regelung am
                nächsten kommt, bzw. diese Lücke ausfüllt.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AGBPage;
