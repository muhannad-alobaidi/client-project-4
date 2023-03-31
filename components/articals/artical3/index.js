import AreticalWithToggle from '../../modules/ArticalWithToggle';
import css from './style.module.scss';
import Spacer from '../../modules/Spacer';

const Artical3 = ({
 
}) => {
  return (
   <AreticalWithToggle
   bgImage= '/images/Markko.jpg'
   heading= 'Perinteiset toimialat voisivat ottaa mallia softabisneksestä - millainen on voittava liiketoimintamalli?'
   paragraph1= 'Mitkä perusasiat yrityksellä tulee olla kunnossa menestyäkseen? Riittävätkö into ja halu kasvaa reseptiksi maailmanvalloitukseen? Markko Vaarnas, kasvuyrittäjä ja hallitusammattilainen avaa meille mietteitään toimivan kasvuyrityskonseptin takana ja kertoo vinkkinsä menestysyhtiöiden tunnistamiseksi.'
   direction= 'rtl'
   id='artical3'
   readingTime='Lukuaika: 3 minuuttia'
   >
    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Suora laskusuhdanne</h3>
        <p>Maailmaa ovat viime aikoina ravistelleet pandemia, ilmastonmuutos, materiaalipula, kriittisten toimialojen lakot ja alati tiukentuvat geopoliittiset tilanteet - puhumattakaan globaalin taloustilanteen heikentymisestä ja inflaatiosta. Ei siis ihme, että myös startup- ja kasvuyritys-kentillä resurssit ovat vähentyneet tai niitä on leikattu reippaasti.</p>
      </div>
      <div className={css.colTwo}>
        <p>”Vielä noin vuosi sitten pelikenttä oli erilainen: valuaatiokertoimet olivat isoja ja siksi myös rahoituskierrokset olivat suuria: silloin kasvuyritykset pystyivät näyttämään loistavia potentiaalisen kasvun ennusteita. Nyt tilanne on toinen ja rahoituskierrosten määräkin on pienentynyt”, Markko Vaarnas kuvailee.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>

      <div className={css.quot}>
        <h3>”Pärjätäkseen yrityksillä täytyy olla paketti kasassa.”</h3>
      </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <p>Monet Euroopan tunnetuimmistakin startup-yrityksistä ovat joutuneet pienentämään merkittävästi operatiivisia kulujaan leikkaamalla työvoimastaan ja muista toiminnan resursseista. Aikaisemmin isolla valuaatiolla hankittujen rahoituskierrosten jälkeen raha piti laittaa näkyvään kasvuun. Yleensä tällaisessa tilanteessa rekrytoitiin reippaasti lisää henkilöstöä. Kun rahahanat menevät kiinni ja resursseja leikataan, on henkilöstökuluja tarve nopeasti sopeuttaa ja irtisanomiset väistämättömiä.</p>
      </div>
      <div className={css.colTwo}>
        <p>”Pääomasijoittajat ovat rohkeita ennakoimaan ja ennustamaan tulevaisuuden suuntia ja jopa nokittelevat tällä kentällä keskenään. Kun negatiivisia pilviä leijuu horisontissa, ennakoidaan niihin nopeasti ja vahvasti.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Johda tiedolla ja toista</h3>
        <p>Vaarnas on tekemisissä työnsä puolesta monien erilaisten yritysten kanssa ja auttaa kasvuyrityksiä kehittämään niiden liiketoimintaa. Hän painottaa, että hänen viitekehyksensä yritysmaailmaan tulee erityisesti B2B-puolen ohjelmisto- ja palveluyhtiöistä, joiden kanssa hän on eniten tekemisissä. Millaisten tekijöiden kautta hän arvioi yritysten tulevaisuuden potentiaalia?</p>
      </div>
      <div className={css.colTwo}>
        <p>”Minulle yksi tärkeimpiä merkkejä on se, että yrittäjät ovat oikeasti halukkaita kehittymään ja ottamaan neuvoja vastaan. Sen lisäksi yrityksen vetäjien ja koko tiimin positiivinen energia, korkea ambitiotaso ja halu muuttaa maailmaa ovat minulle tärkeitä tekijöitä”, Vaarnas kertoo.</p>
        <p>Edellä mainittujen piirteiden lisäksi Vaarnas kiinnittää huomiota myös konkreettisimpiin tekijöihin: hän uskoo datavetoiseen johtamiseen. Hän kannattaa mallia, jossa yrityksen taloustiedot sekä operatiivisen toiminnan tiedot tuodaan näkyviksi ja niiden avulla luodaan avainmittarit, jotka palvelevat yhtiön johtamista.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>”Yksi tärkeimpiä merkkejä on se, että yrittäjät ovat oikeasti halukkaita kehittymään ja ottamaan neuvoja vastaan.”</h3>
    </div>

    <Spacer size={2}/>
    <div className={css.content}>
      <div className={css.colOne}>
        <p>Vaarnas kiinnittää sijoittajana luonnollisesti huomiota tunnuslukuihin, kuten myyntikatteen rakenteeseen, kiinteisiin kuluihin suhteessa yhtiön kasvuvaiheeseen sekä kasvun ja asiakashankinnan yksikkökustannuksiin.</p>
        <p>Yhtä asiaa Vaarnas kuitenkin painottaa yli muiden: tärkeintä on saada bisnesmalli toistuvaan muotoon, eli jatkuvaluontoiseksi. Malli, jossa asiakas pysyy asiakkaana vaikkapa viisi tai kymmenenkin vuotta on yritykselle taloudellisesti monin verroin arvokkaampi kuin yksittäisten projektien myynti kerrallaan. Tästä Vaarnas puhuu asiakkuuden elinkaarituottona.</p>
      </div>
      <div className={css.colTwo}>
        <p>Kun asiakastoiminta on jatkuvaluontoista, se tuo samalla myös mahdollisuuden ennakointiin. Niin asiakaspoistuma, liikevaihto kuin katekin on silloin ennustettavampaa. Vielä parempi on, jos tuotteen tai palvelun pystyy monistamaan helposti, jolloin bisnes myös skaalautuu.”</p>
        <p>Kansainvälistyminen sisältää aina riskejä, joiden seuranta ja hallinta on kriittisen tärkeää. Vaarnaksen mukaan yleisin virhe on kansainvälistymisprosessin vaikeuden ja kustannusten aliarviointi.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Voisivatko perinteisemmät toimialat ottaa softabisneksestä mallia?</h3>
        <p>Vaarnaksen vinkkejä summaten toimivan yrityksen takaa löytyy hyvä ja kehitysvalmis tiimi, täsmädataa johtamisen tueksi, jatkuvaluontoinen bisnesmalli ja ennustettavuutta. Riittääkö tämä?</p>
        <p>”Pärjätäkseen yrityksillä täytyy olla paketti kasassa, eli konsepti kunnossa ja testattu tarpeeksi isolla joukolla asiakkaita, bisnes validoitu, pysyvät asiakkaat, toistettavuus löydetty sekä aloitettu toiminnan skaalaaminen luomalla parhaita käytäntöjä ja dokumentoimalla näitä”, Vaarnas selvittää.</p>
      </div>
      <div className={css.colTwo}>
        <p>”Ehkäpä yksi tulevaisuuden trendi yritysmaailmassa voisi olla, että perinteisilläkin toimialoilla voitaisiin kokeilla tätä softabisneksen mallia, jossa tarjooma paketoidaan selkeästi, ja tavoitteena on toistuva ja pitkäaikainen laskutus, eli elinkaarituoton maksimointi. Hyvä tavoite on pyrkiä tekemään tuotteet ja palvelut mahdollisimman monistettaviksi sekä kehittämään yhtiölle liiketoimintamalli, jossa yhtiön asiakashankinnan kustannus on hyvin kohtuullinen suhteessa elinkaarituottoon”, Vaarnas summaa.</p>
      </div>
    </div>
   </AreticalWithToggle>
  );
};

Artical3.propTypes = {

};

Artical3.defaultProps = {


};

export default Artical3;
