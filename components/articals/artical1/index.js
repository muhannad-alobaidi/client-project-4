import AreticalWithToggle from '../../modules/ArticalWithToggle';
import css from './style.module.scss';
import Spacer from '../../modules/Spacer';

const Artical1 = ({
 
}) => {
  return (
   <AreticalWithToggle
   bgImage= '/images/Valli_Katriina_006_RGB.jpg'
   heading= 'Tekoäly: ystävä vai vihollinen? – Asiantuntija murtaa viisi myyttiä tekoälystä'
   paragraph1= 'Tekoäly tehostaa työtä, mutta herättää myös pelkoja ja ennakkoluuloja. Miten yritysten tulisi suhtautua tekoälyyn? Tarvitaanko käyttöönoton tueksi massiivinen määrä resursseja? Tekoälyratkaisuja kehittävän AI4value-yrityksen perustaja Katriina Valli avaa myyttejä, jotka estävät yrityksiä ottamasta tekoälyä toimintansa tueksi.'
   direction= 'rtl'
   id='artical1'
   readingTime='Lukuaika: 4 minuuttia'
   >
    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Suomessa satsataan tekoälyyn </h3>
        <p>Tekoäly, tai AI (artificial intelligence), tarkoittaa yksinkertaistettuna tietokoneen tai ohjelmiston kykyä tehdä älykkäitä päätöksiä. Tarkempaa määrittelyä on vaikea antaa, koska älykkyyden määritteleminen on haastavaa. Tekoälyn hyödyntäminen liiketoiminnassa on ollut tapetilla pitkään ja sitä voidaan hyödyntää alalla kuin alalla, kunhan kerättynä on riittävä määrä laadukasta dataa.</p>
      </div>
      <div className={css.colTwo}>
        <p>Tekoälyasiantuntija Katriina Vallin mukaan Suomessa on noin 400 tekoälyä tarjoavaa toimijaa. Kansallisella tasolla Suomi on siis hyvässä vauhdissa tekoälyn suhteen – ja edellä muita Pohjoismaita.</p>
        <p>Julkisella sektorilla esimerkiksi Helsingin ja Uudenmaan Sairaanhoitopiirillä on käytössään edistyneitä ratkaisuja samoin kuin finanssi- ja vakuutusalalla. Esimerkiksi vakuutusyhtiöissä pienimpien haavereiden korvauspäätökset voivat jo nyt syntyä kokonaan ilman ihmissilmää.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>”Tekoäly käy ja kukkuu datalla. Eniten aikaa menee yleensä datan keräämiseen ja toimittamiseen.”</h3>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <p>Monet teollisuusyritykset ovat vielä alkutaipaleella, ja pk-yrityksissä tekoälyn käyttö sekä valmiudet vaihtelevat suuresti.</p>
        <p>”Usein uusien teknologioiden varhaisilla omaksujilla into lässähtää alkuinnostuksen jälkeen. Monet hankkeet ovat täsmätyökaluja, mutta esimerkiksi laajempi tekoälyn käytön strateginen näköpiiri on hatara”, Valli sanoo.</p>
      </div>
      <div className={css.colTwo}>
        <p>Vallin oman yrityksen, AI4Valuen palvelut keskittyvät muun muassa luonnollisen kielen tulkintaan ja analysointiin eli neurolingvistiseen ohjelmointiin, NLP:hen. Yksi yrityksen kehittämä sovellus esimerkiksi tulkitsee asiakaspalautteita ja kehittää useimmin kysyttyihin kysymyksiin vastauksia.</p>
        <p>”Se pystyy myös tulkitsemaan vastauksia ja muokkaamaan vastausten äänensävyä sen mukaan, kuinka vihainen asiakas on”, Valli kertoo.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Tekoäly on totta, mutta monet siihen liittyvä uskomukset tarua</h3>
        <p>Millaiset asiat sitten estävät yrityksiä tarttumasta tekoälyn mahdollisuuksiin? <a href='https://home.kpmg/fi/fi/home/Pinnalla/2021/11/menestyminen-tekoalymaailmassa.html' target='blanck'>KPMG:n tutkimuksen</a> mukaan turvallisuus, yksityisyydensuoja ja eettisyys nousevat tekoälyn yhteydessä suurimmiksi huolenaiheiksi. Tutkimukseen vastanneista jopa 69 prosenttia koki myös vaikeaksi seurata jatkuvasti kehittyvän tekoälyn toimintaympäristöä. Tässä valossa ei ole ihme, että tekoälyn ympärillä velloo kaikenlaisia, paikkansapitämättömiä uskomuksia.</p>
      </div>
      <div className={css.colTwo}>
        <p>Valli kannustaa tutustumaan rohkeasti tekoälyn tarjoamiin mahdollisuuksiin.</p>
        <p>”Tekoälyn sielunelämästä oppii kokeilemalla paljon tehokkaammin kuin istumalla seminaareissa ja koulutuksissa, joten rohkeasti vain hankkeiden kimppuun!”</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>Viisi tekoälyyn liittyvää myyttiä:</h3>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>1. Vain kansainväliset suuryritykset voivat hyödyntää tekoälyä</h3>
        <p>Tekoäly on saatu kuulostamaan monimutkaisemmalta kuin se on. Tarinat tekoälystä käsittelevät maailmanrauhaa tai villeimmillään terminaattorin iskua ihmiskuntaa vastaan. Pienemmässäkin mittakaavassa kuulopuheet on kyllästetty pelolla raskaasta, vaikeasta, monimutkaisesta ja kalliista edesottamuksesta, johon ei kannata vielä tässä vaiheessa lähteä – jos ollenkaan.</p>
        <p>”Tekoälyn tavoite on yleensä tehostaa toimintaa ja tuottaa liiketoimintahyötyä. Se on tavallaan vasara, joka lyö aina naulaan, eikä peukaloon. Siitä hyötyvät kaikenkokoiset yritykset”, Valli sanoo.</p>
      </div>
      <div className={css.colTwo}>
        <p>Palveluntarjoajaa valitessa on kuitenkin hyvä olla tarkkana. Alalle on tullut myös AI-washingia, eli tekoälyä kaupittelevia toimijoita, jotka eivät todellisuudessa tarjoa tekoälyä tai osaa toteuttaa vaadittavia hankkeita.</p>
        <p>”Alalla on toimijoita, jotka ajattelevat, että jos joku haluaa ostaa, heille myydään – jotain. Tutkitusti on kuitenkin näyttöä siitä, että erikoistuneet toimijat pystyvät tarjoamaan parhaita ratkaisuja tekoälyhankkeisiin”, Valli sanoo. </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>2. Tekoäly vaatii osaamista ja tekijöitä</h3>
        <p>Vallin mukaan kahdessa kuukaudessa oikealla taustalla ja persoonalla varustettu työntekijä muuntuu yrityksessä tekoälyosaajaksi. Kysehän on arjen ongelmien ratkomisesta.</p>
        <p>”Koneoppimiseen soveltuu hyvin ihminen, joka on kiinnostunut matematiikasta ja tilastotieteestä. Tietokonelingvistit ovat helposti väännettävissä tekoälyosaajiksi. Jos lisäksi on intoa koodata, ei se paljon muuta vaadi”, Valli toteaa.</p>
      </div>
      <div className={css.colTwo}>
        <p>Kahdessa kuukaudessa tekijä oppii, mitä tekoäly on, mitä ratkaisuja on olemassa, koodaamista sekä tekemään harjoituksia.</p>
        <p>”Tiedän julkisen sektorin organisaation, joka sai kesätyöläisistä itselleen tehokkaita data-analyytikoita ja tekoälykoodareita lyhyellä koulutuksella”, Valli sanoo.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>3. Tekoäly on valtava rahallinen ja ajallinen investointi </h3>
        <p>Nykyisillä ketterillä toimintamalleilla yritys voi ulkoistaa tekoälyä vaativien toimintojen rakentamisen. Oman organisaation aikaa vaaditaan muutamia tunteja. Kun on toimivat verkot ja edes tehokkaan läppärin laskentateho, datan saa kyllä jalostettua.</p>
        <p>Vallin mukaan ketterällä toimintamallilla aikaraami voisi näyttää tältä: kahden tunnin aloitussessio, siihen lisäksi henkilö, jolla on jonkin verran aikaa vastata kysymyksiin, viikottaiset puolen tunnin Scrum-sessiot, joiden tarkoitus on varmistaa, että ratkaisun kehitys menee koko ajan oikeaan suuntaan. </p>
      </div>
      <div className={css.colTwo}>
        <p>”Tekoäly käy ja kukkuu datalla. Eniten aikaa menee yleensä datan keräämiseen ja toimittamiseen”, hän toteaa.</p>
        <p>Jotta tekoäly palvelee yrityksen toimintaa ja tavoitteita, yrityksen täytyy määritellä tarve: mitä tekoälyllä tehdään ja miksi. Mikä on onnistunut lopputulos? Mikä on toimintaympäristö, jossa tekoäly toimii? Miten nopeasti data saadaan käyttöön?</p>
        <p>”Tekoälyä tarjoavalle yritykselle kamalin tilanne on se, jos asiakas haluaa tekoälyä, kun kaverillakin on. Tarvetta ei ole määritelty, ja palveluntarjoajan täytyy nyhjätä tyhjästä tai kieltäytyä toimeksiannosta. On hyvä muistaa, että tekoälyn hankinta ei ole ATK-osaston projekti, vaan bisneslähtöinen kuvio”, Valli sanoo.</p>
      </div>
    </div>
    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>4. Tekoäly tarvitsee paljon jäsenneltyä dataa</h3>
        <p>Monessa yrityksessä hävetään sitä, että data on sen seitsemässä järjestelmässä monen mutkan takana. Häpeä on turhaa. Kaiken ei tarvitse olla loppuun asti kunnossa, Valli lohduttaa.</p>
      </div>
      <div className={css.colTwo}>
        <p>”Dataa ei tarvitse hulluna määritellä ja luokitella. Tekoäly pystyy luokittelemaan sitä todella pitkälle. Sellainen raja on omassa työssäni tullut vastaan, että huonolla käsialalla skannattuja post-it-lappuja ei mikään tekoäly pysty lukemaan luotettavasti”, hän sanoo.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>5. Tekoälystä tulee liian itsenäinen</h3>
        <p>Tekoälyyn liitettävissä tarinoissa tekoäly kehittyy turhan nokkelaksi, saa ihmismäisiä piirteitä ja kääntyy kehittäjäänsä vastaan. Tekoälyn singulariteetista puhutaan paljon, mutta Vallin mukaan asiantuntijaskenaarioissa tekoäly ei ota valtaa ja ala tuhota maailmaa omin päin. </p>
      </div>
      <div className={css.colTwo}>
        <p>”Ei näitä niin rakenneta, kuolemankoneiksi. Tekoäly oppii siitä, mitä dataa sille syötetään. Tekoäly on renki, ei isäntä”, Valli toteaa.</p>
      </div>
    </div>

   </AreticalWithToggle>
  );
};

Artical1.propTypes = {

};

Artical1.defaultProps = {


};

export default Artical1;
