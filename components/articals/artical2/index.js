import AreticalWithToggle from '../../modules/ArticalWithToggle';
import css from './style.module.scss';
import Spacer from '../../modules/Spacer';

const Artical2 = ({
 
}) => {
  return (
   <AreticalWithToggle
   bgImage= '/images/artical2.jpg'
   heading= 'Voisiko vastaus energiakriisiin löytyä koulutuksesta – digistä ja datasta saa lisäapua'
   paragraph1= 'Yrityksiä ja talouksia ravisteleva energiakriisi ei ratkea pikaratkaisuilla. Sähköalan työvoiman tehostaminen ja kattavampi käyttödatan hyödyntäminen saattavat kuitenkin tarjota uusia ratkaisun avaimia, toteaa Sähköteknisen kaupan liiton Sallamaari Muhonen.'
   direction= 'rtl'
   id='artical2'
   readingTime='Lukuaika: 3 minuuttia'
   >
    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Yltäkylläisyyden aika on ohi – nyt on aika optimoida</h3>
        <p>Halvan sähkön aikana yritysten tai kuluttajien ei ole tarvinnut juuri murehtia, miten paljon energiaa kuluu. Mikään vahva tai heikko trendi ei osoittanut viitteitä näin nopeasti ja totaalisesti kriisiytyvään energian saatavuuteen ja hinnannousuun. Nyt jokainen sähkölaskun avaus nostaa hien otsalle.</p>
      </div>
      <div className={css.colTwo}>
        <p>Energiankäyttöä on toki tarkasteltu ja pitkään: isot terässulattamot ja vastaavat teollisuuslaitokset ovat energian suursyömäreinä optimoineet kulutustaan jo aikaisemmin, sillä pienikin viilaus on merkinnyt isoa kustannusetua. Nyt energiakriisi pakottaa optimoimaan kaikkien yritysten energiankäyttöä – sama koskee myös kuluttajia.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Halpa energia on hidastanut älykotien kehittymistä: tilanne on jopa kismittävä</h3>
        <p>Lukuisat tahot ovat muistuttaneet kotitalouksia, miten valaistus, laitteiden herätevirrat ja etenkin sähkökiukaat ja sähköiset lattialämmitykset kuluttavat, mikä maksaa nykyisillä hinnoilla hurjasti enemmän kuin halvan energian aikana.</p>
        <p>Sähköteknisen kaupan liitto ry:n toimitusjohtaja Sallamaari Muhonen ei halua työntyä kovin syvälle kuluttajien neuvontaan, koska etujärjestön leipälaji on tekninen tukkukauppa, valmistus ja maahantuonti.</p>
      </div>
      <div className={css.colTwo}>
        <p>”Älykodin ratkaisut auttavat pitämään yllä elämänlaatua, mutta tekevät sen järkevällä energiankulutuksella. Uskon, että taloyhtiöissä ja kodeissa haluttaisiin tehdä enemmänkin, jos vain olisi helppoja ja automaattisia työkaluja jälkikäteen asennettaviksi. Kun energia on ollut halpaa, ei varmaan ole ollut kysyntää luoda tällaisia ohjelmistoja ja laitteita, joilla data sähkön huomisesta hinnasta yhdistyisi automaattisesti sähkönkulutuksen seurantaan ja sen optimointiin”.</p>
        <p>Tämä on Muhosen mukaan harmillista ja melkein noloa, kun hintadata on avoimena saatavissa ja toisaalta automaatioteknologiaa on kauan ollut olemassa. Oman elämänsä pellepelottomat joutuvat nyt itse koodailemaan ohjelmistonpätkiä, koska valmistuotteita hintaseurannan mukaiseen ohjaukseen ei ole.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Sähköammattilaisille olisi töitä – pullonkaulana erityisesti koulutus</h3>
        <p>Energiamurros tietää paljon töitä sähköalan ammattilaisille. Kysyntää olisi etenkin sähköasentajille, jotka hallitsevat digitalisoituvan talotekniikan ja ymmärtävät rakennusautomaation mahdollisuudet energiansäästöön. </p>
        <p>”Trendit, sijoittajat ja uudet laitkin ohjaavat digitaalisen murroksen suuntaan myös talotekniikassa, ja siellä olisi liiketoiminnankin kannalta paljon otettavaa. Huolena on, jumittuuko suotuisa kehitys osaajapulan pullonkaulaan”, Muhonen pohtii.</p>
      </div>
      <div className={css.colTwo}>
        <p>Ammatillisissa oppilaitoksissa sähkö- ja automaatiolinjoille on riittänyt hakijoita, mutta nelivuotinen perustutkintokoulutus ei tuo nopeaa apua tämänhetkiseen kysyntään. Toimialaa huolestuttaa myös koulutuksensa kesken jättävien määrä. Muhosen mielestä lähiopetusta ja opettajavakansseja tulisi määrätietoisesti lisätä ammatillisissa oppilaitoksissa.</p>
        <p>”Oppisopimuskoulutus tuskin on yksin ratkaisu, sillä talotekniikka-alalla melkein kolmasosa on 1–3 henkilön pk-yrityksiä. Sellaisissa harvoin on väljyyttä tai aina pedagogisia taitojakaan kouluttaa vasta-alkajista ammattilaisia.”</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>”Älykodin ratkaisut auttavat pitämään yllä elämänlaatua, mutta tekevät sen järkevällä energiankulutuksella.”</h3>
    </div>

    <Spacer size={2}/>
    <div className={css.content}>
      <div className={css.colOne}>
        <p>Muhonen mainitsee yhtenä keinona myös työperäisen maahanmuuton.</p>
        <p>”Energiamurroksen kasvattaman kysynnän ohella meillä on myös eläköityvien ikäluokkien sähköammattilaiset korvattavina. Ilman kaikkia näitä osaajien määrää lisääviä keinoja on aito uhka, että teolliseen mittakaavaan asti skaalautuvia energiansäästöratkaisuja ei saada käyttöön asti riittävän vauhdikkaasti.”</p>
      </div>
      <div className={css.colTwo}>
        <p>Ei niin pahaa, ettei jotain hyvääkin.</p>
        <p>”Nyt kaikki yritykset ovat kiinnostuneita selvittämään, missä on ollut löysää energiankäytön suhteen ja miten omaa toimintaa voisi optimoida. Se on positiivista yrittäjän, rahoittajan, Suomen energiaitsenäisyyden ja ilmastonkin kannalta”, Muhonen sanoo.</p>
        <p>Haasteena optimoinnin kautta saavutettavissa säästöissä on, ettei ole olemassa kaiken kerralla ratkaisevaa hopealuotia. Energiansäästö on haettava lukuisista pienistä muutosten puroista.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Väärä aika ja paikka syövät hurjasti energiaa – eli parannettavaa vielä riittää</h3>
        <p>Vihreää siirtymää ja Venäjän energiasta irtautumista vauhdittaisi myös logistiikan digitaalisuuden kehittäminen, mikä ei välttämättä tule ensimmäisenä mieleen energiatehokkuutta miettiessä.</p>
      </div>
      <div className={css.colTwo}>
        <p>Muhosella on esimerkki rakennushankkeiden arjesta:</p>
        <p>”Toimiala on tutkinut yhdessä Aalto-yliopiston kanssa sähköasentajien työpäivää rakennustyömaalla kypäräkameran kanssa. Vain noin 25 prosenttia työajasta päästään käyttämään asentamiseen, sillä suurin osa tuhlaantuu ennakkosuunnittelun ja logistiikan puutteisiin: ratkaisuja haetaan porukalla paikan päällä ja asennettavat tavarat liikkuvat vääriin aikoihin vääriin paikkoihin ja ovat toinen toistensa ammattilaisten työskentelyn edessä”.</p>
        <p>Digitalisoitumisella haetaan ratkaisuja tähänkin ongelmaan.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>”Nyt tarvitaan tahtotila ja työntekijöitä.”</h3>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <p>Tahtituotanto yleistyy hiljakseen rakentamisessa. Siinä rakennettava talo jaetaan prosessin tehostamiseksi tahtialueisiin, ja työvaiheet aikataulutetaan vastaavasti kulkemaan oikeassa tahdissa alueelta toiselle. Se tuo sujuvuutta ja vähentää turhaa työtä.</p>
        <p>”Tahtituotannon pohjana toimii koneluettava data ja digitaaliset tuotetiedot. Niitä STK ylläpitää sähkötuotteista. Osaltaan ne auttavat vähentämään hukkaa ja haahuilua”, Muhonen sanoo toiveikkaana.</p>
      </div>
      <div className={css.colTwo}>
        <p>Energiakriisiin ei siis ole yhtä tai kahta pikaratkaisua, sillä ongelmia löytyy koulutuksen houkuttelemattomuudesta alkaen aina työtapojen ja logistiikan syvärakenteisiin. Positiivisia kehityssuuntia silti löytyy. Useimpien niistä taustalla on ajalle tuttuun tapaan digitalisointi, mikä puolestaan nojaa datan hyödyntämiseen. </p>
        <p>”Teknologiaa ja tuotteita on, nyt tarvitaan tahtotila ja tekijöitä, jotta energiatehokkuus saadaan todella hyödyksemme”, Muhonen kiteyttää lopuksi.</p>
      </div>
    </div>

   </AreticalWithToggle>
  );
};

Artical2.propTypes = {

};

Artical2.defaultProps = {


};

export default Artical2;
