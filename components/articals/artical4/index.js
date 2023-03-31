import AreticalWithToggle from '../../modules/ArticalWithToggle';
import css from './style.module.scss';
import Spacer from '../../modules/Spacer';

const Artical4 = ({
 
}) => {
  return (
   <AreticalWithToggle
    bgImage= '/images/artical4.jpg'
    heading= 'Ruoka herättää intohimoja – ja uusia innovaatioita'
    paragraph1= 'Ruokalautasemme näyttää tulevaisuudessa erilaiselta kuin tänä päivänä. Ympäristö ei kestä ihmisten elämäntyyliä, jossa kaikkea saa joka puolelta maailmaa ympäri vuoden. Lihan syöntiä pitää vähentää, mutta kaikki vegaanituotteetkaan eivät ole ongelmattomia. Ruokainnovaatioille on valtava kysyntä, jotta voisimme nauttia ravitsevaa ruokaa laadusta ja mausta tinkimättä, kertoo Nordic Umami Companyn Chief Design Officer, Tytti-Lotta Ojala.'
    direction= 'rtl'
    id='artical4'
    readingTime='Lukuaika: 2 minuuttia'
  >
    <div className={css.content}>
      <div className={css.colOne}>
        <p>
          Ruoka kuuluu jokaisen ihmisen elämään jollain tasolla. Sillä on niin suuri merkitys, että se koetaan usein hyvinkin henkilökohtaisena asiana – joten ei ole ihme, että se herättää suuriakin tunteita. Ruoka on myös kulttuurisidonnaista: maut ja tavat nauttia siitä vaihtelevat suuresti. Se on välttämätön perustarve, jota jokainen hengittävä olento jossain muodossa tarvitsee.
        </p>
        <p>
          Koska ruoka maustaa jokaisen elämää, on se myös erittäin suuri bisnes. Koska ruualla on suuri vaikutus myös terveyden kannalta, on erilaisten ruokavalioiden kirjo laaja.
        </p>
      </div>
      <div className={css.colTwo}>
        <p>
          Ruokateollisuus haluaa luonnollisesti olla trendien aallonharjalla ja mukana kehityksessä Tasaisin väliajoin syntyy uusia ruokatrendejä, jotka nivoutuvat vahvasti ajankohtaisiin ilmiöihin: vuustot, vönerit ja kaurasta tehdyt maitotuoteimitaatiot vastaavat veganismin nousuun. Yhä useammin ruoka heijastaa myös arvoja.
        </p>
        <p>
          Ruokatrendeissä etenkin ympäristönäkökulma on enemmän kuin ajankohtaista. Ympäristö ei enää kestä nykyisiä kulutustottumuksiamme, ja ruokateollisuuden uskotaan olevan yksi ratkaisu tähän.
        </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Ruokainnovaatiot ratkovat ongelmia</h3>
        <p>
          Tutkimusten mukaan ympäristön kannalta kestävämpi ruokavalio on vahvasti kasvispainotteinen. On kuitenkin tärkeää muistaa myös, että kaikki kasviperäiset proteiinit eivät ole automaattisesti ympäristöystävällisiä.
        </p>
        <p>
          Erilaiset ruokatrendit ovat synnyttäneet lukuisia uusia ruokainnovaatioita, joissa keskeisessä osassa on ruokateknologia. Tutuimpia innovaatioita ovat esimerkiksi maidottomat juustot ja lihattomat kasviproteiinit. Kun tutut tuotteet eivät ole ympäristön kannalta kestäviä, voidaan ruokateknologian avulla kehittää uusia tuotantotapoja, jotka ratkovat ongelmia – tutuista suosikkimauista tinkimättä. 
        </p>      
      </div>
      <div className={css.colTwo}>
        <p>
          Nordic Umami Company on yritys, joka haluaa toiminnallaan kehittää ruokateollisuutta ja vaikuttaa kuluttajien valintoihin.
        </p>
        <p>
          ”Meillä on itseämme isompi missio ja haluamme olla mukana kehittämässä kestävämpää ruokaekosysteemiä. Näemme, että meillä on siinä kaksiosainen rooli. Vastaanotamme muun ruokateollisuuden kasviperäisiä sivuvirtoja, joita muut eivät välttämättä pysty enää hyödyntämään. Näistä tuotamme umamia, jonka voimme palauttaa muun ruokateollisuuden käyttöön”, kertoo Nordic Umami Companyn Chief Design Officer, Tytti-Lotta Ojala.
        </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>


    <div className={css.quot}>
      <h3>”Vegaaniruoka on trendinä pärjännyt pinnalla pitkään ihan vain vegaanisuudella. Nyt kuluttajia on kuitenkin alkanut enemmän kiinnostamaan, mitä ruokaan on oikeasti ja millaiset ympäristövaikutukset sillä on.”</h3>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>


    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Umami on piste i:n päälle</h3>
        <p>
          Ruokailu on harvalle vain pakollinen tankkaushetki energiantarpeen täyttämiseksi: ruokailuun ladataankin myös paljon odotuksia ja tunteita. Ruokailu on monelle nautinnollinen hetki, johon kuuluvat aromikkaat tuoksut, herkullisen näköiset raaka-aineet ja suussa sulava maku. 
        </p>
        <p>
          Suomalaisessa ruokakulttuurissa lihatuotteet eivät ole aina olleet arkipäivää, mutta yleisen elintason kasvun myötä, liha on kuulunut lähes jokaiseen ruokapöytään. Näin ollen lihan makuun on totuttu ja sen täyteläisyyttä moni hakeekin ruokailuelämyksissään. 
        </p>
      </div>
      <div className={css.colTwo}>
        <p>
          ”Lihan ominaismaun erottaa kasviruoista vahva umamin maku. Umami on suolaisen, makean, happaman ja karvaan ohella ihmisen aistima perusmaku. Umamia esiintyy luonnollisesti erityisesti lihassa, mutta myös kasviksissa kuten sienissä, tomaatissa ja valkosipulissa. Umami on myös maku, joka ei toimi yksinään. Se tarvitsee kaverikseen suolaa, jotta ihminen voi maistaa sen. Umami korostaa myös suolan makua, joten sen ansiosta suolan määrää voidaan myös vähentää”, Ojala kertoo. 
        </p>
        <p>
          Kun vannoutuneita lihansyöjiä, jotka kertovat nauttivansa lihasta juuri maun takia, pitäisi kannustaa syömään kasviksia, niin helpointa on suosia tuttuja käyttöliittymiä. Kalaton kastike, lihaton liemi. Näitä kuka vain voi hyödyntää – kuin mummo klassikkoja valmistaessaan. 
        </p>
      </div>
    </div>
            
    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>


    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Ajatus kasviperäisestä umamista syntyi sivutuotteena</h3>
        
        <p>
          Idea Nordic Umami Companyn taustalla syntyi lähes vahingossa. Ojala kertoo, että alun perin ajatuksena oli kokeilla voisiko kaurasta saada valmistettua ympäristön kannalta kestävästi soijakastiketta. Pian tiimille valkeni, että pelkkä ympäristön kannalta kestävästi tuotettu soijaton soijakastike ei ole ainoa mitä tarvitaan, vaan ylipäätään kestävästi tuotetulle umamille on kysyntää. 
        </p>
        
        <p>
          Umamia voidaan käyttää moneen kasviperäiseen ruokaan tuomaan makua. Usein maku tuotetaan soijakastikkeella, mutta soija ei ole ympäristönäkökulmasta ongelmaton. 
        </p>

        <p>
          ”Tuottamallamme umamilla saadaan kasvisruokien täyteläinen maku ja tuttujen ruokatuotteiden helppous yhdistettyä keittiössä. Mitä tutumpi tuote, sitä helpommin siihen tartutaan”, Ojala sanoo. 
        </p>
      </div>

      <div className={css.colTwo}>
        <p>
          Nordic Umami Companyn umamin valmistusprosessi perustuu fermentointiin. Prosessissa mikrobit tekevät työtä, minkä yhteydessä syntyy nestemäinen umami. Tästä taas edelleen valmistetaan keittiössä helposti käytettävät lihattomat liemet ja soijattomat kastikkeet.
        </p>
        
        <p>
          Umamin valmistusprosessissa syntyy myös umamisuolaa, jota voidaan hyödyntää kuin tavallista pöytäsuolaa. Kun prosessista syntyvää nestemäistä umamia ja umamisuola hyödynnetään, ei valmistuksessa synny ylimääräisiä sivuvirtoja, vaan kaikki saadaan käyttöön ilman hävikkiä. 
        </p>

      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Hyvä paha ruoka</h3>
        <p>
          Viime aikoina useat tutkimukset ovat osoittaneet, että yksi suurimmista ympäristöä kuormittavista tekijöistä on nimenomaan ihmisten ruoka. Sen tuottamiseen kuluu paljon maa-alaa, energiaa ja luonnonvaroja. Sen tuottamat hiilidioksidipäästöt ovat myös mittavia.
        </p>
      </div>
      <div className={css.colTwo}>
        <p>
          Ojala uskoo, että tulevaisuuden ruokatrendeissä terveellisyys ja ympäristö ovat yhä kasvavia trendejä.
        </p>
        <p>
          ”Vegaaniruoka on trendinä pärjännyt pinnalla pitkään ihan vain vegaanisuudella. Nyt kuluttajia on kuitenkin alkanut enemmän kiinnostamaan, mitä ruokaan on oikeasti ja millaiset ympäristövaikutukset sillä on. Esimerkiksi vegaaniruoka ei ole aina ympäristön kannalta kestävin vaihtoehto kuten soijan kanssa voidaan huomata.”
        </p>
      </div>
    </div>

   </AreticalWithToggle>
  );
};

Artical4.propTypes = {};

Artical4.defaultProps = {};

export default Artical4;
