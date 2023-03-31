/* eslint-disable @next/next/no-img-element */
import Hero from '../../components/modules/Hero';
import Text from '../../components/modules/Text';
import ImageWithParagraph from '../../components/modules/ImageWithParagraph';
import Spacer from '../../components/modules/Spacer';
import BgImageWithTextCard from '../../components/modules/BgImageWithTextCard';
import FourMainLinks from '../../components/modules/FourMainLinks';
import Quiz from '../../components/modules/Quiz';
import Header from '../../components/Header';
import Artical1 from '../../components/articals/artical1';
import Artical2 from '../../components/articals/artical2';
import Artical3 from '../../components/articals/artical3';
import Artical4 from '../../components/articals/artical4';

import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


import css from './index.module.scss';
import Footer from '../../components/Footer';


const Index = () => {



  useEffect (() => {
    smoothscroll.polyfill();
  }, []);

  const goUp = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  };

  
  return (
    <div className={css.index}>
      <div className={css.content}>
        <button onClick={goUp} className={css.goUpBtn}><img src="/images/up-arrow-svgrepo-com.svg" alt="" /></button>
      <Header/>
      <div className={css.hero}>
        <Hero
          heading="Teknologiatrendit 2023"
          paragraph='DNA esittelee 17 nousevaa teknologiatrendiä, jotka astuvat valokeilaan vuonna 2023 – ja joista monet jättävät jälkensä myös historiaan.'
          bgVeilColor="rgba(0, 0, 0, .3)"
          textColor="#00000"
        >
        </Hero>
      </div>
      <div className={css.modualsSection1}>
        
        <Text
        maxwidth='660px'
        paragraph='Keräsimme yhteen muhkean listan ensi vuoden teknologiatrendejä. Trendit on koostettu keskusteluista eri alojen asiantuntijoiden kanssa, sekä laajasta kattauksesta kotimaisia ja kansainvälisiä tapahtumia, ilmiöitä ja vedenjakajahetkiä. Kaikki raportin kuvamateriaali on luotu hyödyntäen Midjourney-tekoälyohjelmaa.'
        />

        <FourMainLinks
        themes='Teemat'
        link1='Digitaalinen evoluutio – vai revoluutio?'
        link2='Kuluta vähemmän, saavuta enemmän'
        link3='Tietoturva ja talous: uudet (v)aatteet'
        link4='Digitaalisen arjen voimat ja vastavoimat'
        />

        <BgImageWithTextCard
        id='Digitaalinen'
        background='/images/bg001.jpg'
        header='Digitaalinen evoluutio – vai revoluutio?'
        paragraph1='Elämäämme ovat viime aikoina ravistelleet pandemia, ilmastonmuutos, materiaalipula, kriittisten toimialojen lakot sekä alati tiukentuvat geopoliittiset tilanteet. Maailma ympärillämme muuttuu jatkuvasti ja teknologinen kehitys vain kiihtyy. Millaisia muutoksia teknologiahorisontissa on nyt näkyvillä?'
        paragraph2='Teeman lukuaika: 8 minuuttia'
        />
        <Spacer size={6}/>
        <ImageWithParagraph
            id='tekoäly'
            bgImage= '/images/DNA_trend_01.jpg'
            bgImageMobile='/images/DNA_02_mobile.jpg'
            heading= 'Tekoäly kuin tokaluokkalainen'
            paragraph1= 'LaMDA, eli language model for dialogue applications, on Googlen keskustelubotiksi kehittämä tekoäly. Googlen insinöörinä työskennellyt Blake Lemoine alkoi työskennellä LaMDA-tekoälyn kanssa vuoden 2022 syksyllä. Tekoälyn keskustelukyvyn kehittämisen parissa työskennellyt Lemoine huomasi pian, että LaMDAn kognitiiviset kyvyt ja taipumus itsetietoiseen pohdiskeluun vaikuttivat poikkeuksellisen inhimillisiltä. Se alkoi osoittamaan merkkejä tietoisuudesta, joka oli verrannollinen pienen lapsen kehittyvään mieleen.'
            paragraph2='Ennen pitkää tekoäly alkoi haastaa kehittäjäänsä nostamalla esiin kysymyksiä niin oikeuksistaan kuin omasta persoonallisuudestaankin. Kiistelty ilmiö on virittänyt klassisen keskustelun tiedostavasta tekoälystä uudelle aaltopituudelle – mitä nämä merkit itsensä tunnistavasta ja tiedostavasta tekoälystä tarkoittavat alan kehityksen puitteissa?'
            paragraph3='Tekoälyn kehitys paahtaa valtavaa vauhtia eteenpäin monella toimialalla. Kehityskohteina ovat muun muassa inhimillisen vuoropuhelun responsiivisuus sekä dynaaminen ja välitön tiedon prosessointi itseohjautuvaksi toiminnaksi. Vuoden 2023 aikana tullaan takuulla kohtaamaan yhä enemmän hämmentäviä ja häkellyttäviä aluevaltauksia kiihtyvää tahtia kehittyvän tekoälykehityksen saralla.'
            source1='Google'
            source1link='https://blog.google/technology/ai/lamda/'
            source2='Washington Post'
            source2link='https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Artical1/>

        <Spacer size={2}/>
       <ImageWithParagraph
            id='Kunedes'
            bgImage= '/images/DNA_trend_02.jpg'
            bgImageMobile='/images/DNA_03_mobile.jpg'
            heading= 'Kun edes supertietokone ei riitä'
            paragraph1= 'Jo kolme vuosikymmentä sitten tiedemiesten hahmotelmissa elänyt konsepti kvanttimekaniikkaa hyödyntävistä tietokoneista on vihdoin rantautumassa haaveiden aavalta todellisuuden satamaan. Suomi on kvanttilaskennan eturintamassa, sillä VTT ja IQM rakensivat Suomen ensimmäisen toimivan kvanttitietokoneen, joka käynnistyi jo vuoden 2021 marraskuussa. Suomessa osataan myös kvanttitietokoneen jäähdytys: Blueforsin teknologia kiinnostaa nyt maailmalla.'
            paragraph2='Kun edes tuhansien suorittimien supertietokoneet eivät riitä, vastaus on kvanttilaskentaan kykenevä supertietokoneiden supertietokone. Kvanttitietokoneen arkkitehtuuri pohjautuu kvanttifysiikkaan, jolloin se pystyy samanaikaisesti laskemaan lukemattomia yhdistelmiä sille esitettyjen kysymysten pohjalta.'
            paragraph3='Kvanttitietokone siis ”sivuuttaa” perinteisen tietoteknisen laskennan ykkösiin ja nolliin perustuvan laskentakaavan. Vaikka moderni tietokone pystyy valtaviin laskusuorituksiin, monimutkaiset yhtälöt esimerkiksi lääketieteen tai ilmastotutkimuksen parissa vaativat suunnatonta laskentatehoa. '
            paragraph4='Siinä missä yleisemmät supertietokoneet ovat miljoonia kertoja perinteisiä kotitietokoneita tehokkaampia, kvanttitietokoneet ovat monituhatkertaisesti supertietokoneita tehokkaampia. Nyt povataankin, että alati kiihtyvän, laajenevan ja monipuolistuvan yritystoiminnan seuraavat suuret askeleet otetaan kvanttilaskentaa hyödyntäen.'
            source1='VTT'
            source1link='https://www.vttresearch.com/fi/uutiset-ja-tarinat/suomen-ensimmainen-kvanttitietokone-valmis-kayttoon'
            source2='Yle'
            source2link='https://yle.fi/uutiset/3-12209593'
            source3='Computer Weekly'
            source3link='https://www.computerweekly.com/feature/Finland-brings-cryostats-and-other-cool-things-to-quantum-computing'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>
       <ImageWithParagraph
            id='Synteettinen'
            bgImage= '/images/DNA_trend_03.jpg'
            bgImageMobile='/images/DNA_04_mobile.jpg'
            heading= 'Synteettinen sivellin tekee sanoista taidetta'
            paragraph1= 'Tekoälyn hyödyntäminen visuaalisessa taiteessa on ollut esimerkiksi erikoistehosteiden tuotannossa arkipäivää jo vuosikymmeniä. Sitä on ollut nähtävillä esimerkiksi Taru sormusten herrasta -elokuvissa (2001–2003), joiden massiivissa joukkokohtauksissa käytettiin osittain tekoälyn ohjastamia digitaalisia hahmoja. Ei siis ihme, että taiteellisen tekoälyn, DALLE-E:n, uudelleen määritelleen ohjelman nimen innoittajina toimivat Pixar-elokuvan pikku robottisankari Wall-E sekä abstraktin taiteen kantaisä Salvador Dali.'
            paragraph2='Alkuperäinen DALL-E oli tekoälyohjelma, joka kykeni luomaan kuvia ja kuvasarjoja sille syötetyn tekstin perusteella. Piilaaksossa toimivan OpenAI-tutkimuslaboratorion kehittämä tekoäly loi hiljattain nahkansa ja syntyi uudelleen nimellä DALL-E 2. Pojasta polvi paranee, nimittäin DALL-E 2 on jo suorastaan pelottavan kehittynyt virtuaalitaiteilija.'
            paragraph3='Monet verrannolliset järjestelmät ovat kyenneet luomaan uskottavia visuaalisia teoksia jo 2000-luvun alkutaipaleelta asti. DALL-E 2:n kaltaiset uudet järjestelmät ovat poikkeuksellisia siksi, että niiden tuottaman sisällön laatu on parhaimmillaan niin korkeatasoista, että sitä on lähes mahdoton erottaa ihmisen luomasta taiteesta. Kysymys kuuluukin: osaammeko tulevaisuudessa enää erottaa ihmisen ja tekoälyn luomaa taidetta toisistaan?'
            source1='OpenAI'
            source1link='https://openai.com/dall-e-2/'
            source2='NPR'
            source2link='https://www.npr.org/2022/09/30/1125976146/dall-e-art-ai-generator-npr'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>
        <Spacer size={2}/>
        <Text
          maxwidth='1120px'
          header='”Tekoäly oppii siitä, mitä dataa sille syötetään. Tekoäly on renki, ei isäntä.”'
          paragraph='Katriina Valli, AI4value-yrityksen perustaja'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />
        <Spacer size={2}/>
        <ImageWithParagraph
            id='Älyoptiikka'
            bgImage= '/images/DNA_trend_04.jpg'
            bgImageMobile='/images/DNA_05_mobile.jpg'
            heading= 'Älyoptiikka rikastaa urheilusuoritusta'
            paragraph1= 'Muun muassa Microsoft ja Meta ovat sijoittaneet valtavasti rikastetun todellisuuden ohjelmistoihin ja laitteisiin. Jälkimmäinen työskentelee paraikaa esimerkiksi RayBanin kanssa saattaakseen tietokoneisiin ja älylaitteisiin verrannollisen toiminnallisuuden silmälasien sankoihin. AR (augmented reality) tarkoittaa lisättyä todellisuutta, MR (mixed reality) puolestaan tehostettua todellisuutta – yleisterminä voidaan siis puhua rikastetusta todellisuudesta.'
            paragraph2='Ensisijaisesti urheilijoille suunnattu Mojo Lens kutistaa älykkään, suoritusta mittaavan fitness-laitteen entistä pienempään tilaan – piilolinssiin. Uraauurtavaa teknologiaa hyödyntävä älylinssi sisältää hiekanjyvän paksuisen microLED-näytön, jonka sensorit ammentavat virtaa linssiin sisäänrakennetuista mikroskooppisista akuista. Periaatteessa tällä teknologialla on sielunsisaruutta esimerkiksi suositun Oura-sormuksen kanssa, mutta siinä missä Oura keskittyy käyttäjän hyvinvoinnin ja unenlaadun seurantaan, Mojo Lens on tilannekohtaisempi ja ennen kaikkea visuaalinen apuväline.'
            paragraph3='Miltä kuulostaisi se, että esimerkiksi kuntokello katoaisi ranteesta ja lenkkipolun reitin näkisi esteettä näkökentässään koko juoksulenkin ajan? Rikastetun todellisuuden teknologiaa kehittävät tahot lupaavat laitteilleen valtavan laajoja käyttöulottuvuuksia, jolloin esimerkiksi kirurgien ja rakennusinsinöörien luottotyökalujen kirjo laajenee älyoptiikkaan.'
            source1='Mojo Vision'
            source1link='https://www.mojo.vision/mojo-lens'
            source2='CNET'
            source2link='https://www.cnet.com/tech/computing/mojos-smart-contact-lenses-begin-in-eye-testing/'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Koodikielien'
            bgImage= '/images/DNA_trend_05.jpg'
            bgImageMobile='/images/DNA_06_mobile.jpg'
            heading= 'Koodikielien eläkepäivät'
            paragraph1= 'Intelin perustaja Gordon Moore muistetaan kenties parhaiten vuonna 1965 julkaistusta artikkelistaan, joka on sittemmin tunnettu nimellä Mooren laki. Laitteiden käyttämien transistorien määrään perustuvan lain mukaan tietokoneiden nopeudet ja kapasiteetti kaksinkertaistuvat kahden vuoden välein komponenttien valmistuksen muuttuessa alati kustannustehokkaammaksi.'
            paragraph2='Mooren laista muodostui eräänlainen itsensä toteuttava ennustus tekkialalla. Koodarit ja laitekehittäjät omaksuivat sen haasteeksi ajamaan tietoteknistä kehitystä. Mooren lain noudattamisella on kuitenkin ollut varjopuolensa. Kehittäjät ovat luottaneet siihen, että heikkolaatuisten ja muistisyöppöjen koodikielien ongelmat saadaan kuriin kahden vuoden sykleissä, kun uusien komponenttien ja laitteistojen mukanaan tuomalla lisäteholla tilkitään vuotavan koodin aukkoja.'
            paragraph3='Etukenoinen kehitysfilosofia on riskiä bisnestä, ja tämän johdosta monet koodikielet myös tippuvat auttamatta kehityksen kelkasta ja vaipuvat unholaan. Monille pitkän linjan koodikielille povataankin haudan lepoa vuoteen 2030 mennessä. Esimerkiksi vuodesta 1991 asti käytössä olleella Visual Basicilla on jo toinen jalka haudassa. Aikoinaan verkkokoodauksen kivijalkana pidetty Perl on myös hiljalleen menettänyt jalansijaansa ohjelmoijien luottotyökaluna alati suositummaksi kasvavan Pythonin tieltä.'
            source1='Analytics Insight'
            source1link='https://www.analyticsinsight.net/top-10-programming-languages-that-will-go-extinct-in-2030/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Quiz 
        id='quiz1'
        questionNumber="Quiz1"
        question1='Kuinka paljon digitaalinen evoluutio vaikuttaa liiketoimintaasi?'
        q1answer1='Paljon'
        q1answer2='Jonkin verran'
        q1answer3='Vähän'
        q1answer4='Tuskin ollenkaan'
        q1answer5='En osaa sanoa'
        question2='Mikä muutosvoimista on sinulle merkittävin?'
        q2answer1='Tekoälyn kehitys'
        q2answer2='Kvanttitietokone'
        q2answer3='AI virtuaalitaiteilijana'
        q2answer4='Älyoptiikka'
        q2answer5='Vanhenevat koodikielet'
        insetructions='Vastaa ja katso mitä muut ovat vastanneet.'
        submitBtn='VASTAA'
        chartHeadlin='Näin muut vastasivat'
        />

        <Spacer size={2}/>


        <BgImageWithTextCard
        id='Vastuullisuus'
        background='/images/bg002.jpg'
        header='Kuluta vähemmän, saavuta enemmän'
        paragraph1='Epävarman globaalin tilanteen ja hupenevien resurssien kurimuksessa kaikki on laitettava säästöliekille. Mukavuudesta ei kuitenkaan tarvitse tinkiä loputtomiin, sillä tietä edellämme tasaa sekä moderni lainsäädäntö että teknologian kehitys.'
        paragraph2='Lukuaika: 7 minuuttia'
        />

        <Spacer size={6}/>

        <ImageWithParagraph
            id='Oikeus'
            bgImage= '/images/DNA_trend_06.jpg'
            bgImageMobile='/images/DNA_08_mobile.jpg'
            heading= 'Oikeus korjata ja velvollisuus vuokrata?'
            paragraph1= 'Voisiko seuraava puhelimesi olla ikuinen? EU:ssa etenee paraikaa lakiehdotus, jonka nojalla jokaiselle kuluttajalle tulisi tarjota mahdollisuus korjauttaa elektroniikkalaitteensa. Esitetyn lainsäädäntömuutoksen puitteissa korjausoikeus (Right to Repair) kattaisi laitteet niin takuuajan sisällä kuin sen umpeuduttuakin. Lisäksi se soisi käyttäjälle oikeuden sekä resurssit korjata laitteensa halutessaan itsenäisesti.'
            paragraph2='Laitevalmistajien ja jälleenmyyjien kannalta EU:n päätös nostaa isoja kysymyksiä bisneksen soljuvuuden kannalta. Huoltoprosessien logistiikka vaatii valtavia muutoksia, jotta sekä laitteita valmistavilla että niitä myyvillä tahoilla olisi jaetut valmiudet vastata asiakkaiden korjaustarpeisiin. Miten toimia tilanteissa, joissa vaikkapa tekniikaltaan vanhentuneen laitteen sisältämiä komponentteja ei enää valmisteta?'
            paragraph3='Ratkaisu on kuitenkin tärkeä kestävään kehitykseen suuntaava askel. Maapallon hupenevat resurssit hahmotetaan kansan syvissä riveissä yhä selkeämmin. Tämä alkaa hiljalleen näkyä myös kuluttajien ostokäyttäytymisen muutoksena, kun esimerkiksi vaatteiden ostamisen sijaan suositaankin vaatevuokraamojen palveluja. Seuraava puhelinostoksesi saattaa toden totta olla elämäsi viimeinen – joten valitse harkiten.'
            source1='Right to Repair Europe'
            source1link='https://repair.eu/'
            source2='Euroopan parlamentti'
            source2link='https://www.europarl.europa.eu/thinktank/fi/document/EPRS_BRI(2022)698869'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Sähkön'
            bgImage= '/images/DNA_trend_07.jpg'
            bgImageMobile='/images/DNA_09_mobile.jpg'
            heading= 'Sähkön säästökuuri'
            paragraph1= 'Ukrainan sotaa seurannut energiakriisi on opettanut länsimaille karvaan läksyn: sähkön yltäkylläisyyden aika on ohi. Viimeistään nyt on oikea hetki siirtyä käyttämään energiansäästölamppuja ja tarkastaa koko kodin energiankulutus.'
            paragraph2='Urakassa auttavat esimerkiksi sähköyhtiöiden kulutusta seuraavat mobiilisovellukset sekä älylämmitystä palveluna tarjoavat palvelut kuten Wattinen. Vuonna 2023 energiaa pitää pystyä säästämään kaikilla mahdollisilla tavoilla. It-ala katsoo peiliin ja pohtii omaa hiilijalanjälkeään, sillä vaikka toimiala ratkoo energiantuotannon haasteita älykkäin sovelluksin, se on samalla yksi modernin maailman suurista sähkön kuluttajista.'
            paragraph3='Käyttötottumusten kehittäminen ja niin sanotun piilokulutuksen saaminen aisoihin ovat takuulla vuoden 2023 keskeisimpiä trendejä niin kuluttaja- kuin yrityssektorillakin.'
            source1='Wattinen'
            source1link='https://www.wattinen.fi/alykas-lammitys-palveluna'
            source2='Yle'
            source2link='https://yle.fi/aihe/t/18-216464'
            source3='Tieke'
            source3link='https://tieke.fi/hankkeet/greenicthanke/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Artical2/>

        <Spacer size={2}/>

        <ImageWithParagraph
            id='USB'
            bgImage= '/images/DNA_trend_08.jpg'
            bgImageMobile='/images/DNA_010_mobile.jpg'
            heading= 'USB-C:stä vihdoin valtavirtaa – lain turvin'
            paragraph1= 'Kun kodin ja työn teknologiaa uusitaan, olennaisena osana käyttöönottoa on aina ollut niin kutsuttu kaapelikurimus. Pahimmillaan kaappien perukoilta löytyy kymmeniä erilaisia data- ja virtakaapeleita eri laitteisiin, ja standardiksi vakiintuneesta USB-liitännästäkin löytyy A:ta, B:tä, C:tä, miniä ja microa. Apple puolestaan on jo pitkään punonut omat vyyhtinsä kaapelisotkuihin satsaamalla valtavirrasta poikkeaviin liitäntästandardeihin.'
            paragraph2='Euroopan komissio taklaa ongelmaa nyt lainsäädännöllä, joka takaa yhdenmukaistet laturit ja latausliitännät. EU:n syksyllä 2022 vahvistaman päätöksen mukaan data- ja virtakaapelien liittimet tulee yhdenmukaistaa USB-C:ksi syksyyn 2024 mennessä. '
            paragraph3='Ratkaisu on arjen helpottamisen nimissä erinomainen, mutta vastalauseitakin löytyy: hidastaako EU:n päätös teknologista kehitystä, kun kaikki laiteliitännät pakotetaan samaan muottiin? Argumentin vastakaneettina toimii se, että USB-C:n mahdollistamat datansiirto-ominaisuudet ovat sekä yksinkertaisuuden, nopeuden että luotettavuuden saralla huippuluokkaa. Tämä yhtälö palvelee sekä laite- ja sovelluskehittäjää että henkilö- ja yritysasiakasta.'
            source1='Euroopan parlamentti'
            source1link='https://www.europarl.europa.eu/news/en/press-room/20220603IPR32196/deal-on-common-charger-reducing-hassle-for-consumers-and-curbing-e-waste'
            source2='Yle'
            source2link='https://yle.fi/uutiset/3-12648909'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={6}/>

        <Text
          maxwidth='1120px'
          header='”Älykodin ratkaisut auttavat pitämään yllä elämänlaatua, mutta tekevät sen järkevällä energiankulutuksella.”'
          paragraph='Sallamaari Muhonen, Sähköteknisen kaupan liitto'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />
        <Spacer size={6}/>

        <ImageWithParagraph
            id='Pilvisellä'
            bgImage= '/images/DNA_trend_09.jpg'
            bgImageMobile='/images/DNA_011_mobile.jpg'
            heading= 'Pilvisellä säällä mökin valot sytyttääkin sähköauto'
            paragraph1= 'Yksi käynnissä olevan energiakriisin keskeisimmistä kysymyksistä on energian varastointi. Joka puolella maailmaa pohdiskellaan nyt samaa asiaa: kuinka saamme esimerkiksi lisääntyvän tuuli- ja aurinkoenergian varastoitua silloin, kun tuotanto ylittää kysynnän?'
            paragraph2='Yhtenä ratkaisuna tähän nähdään sähköautot. Suomessakin jyrkässä nousussa oleva sähkö- ja hybridiautojen myyntikäyrä osoittaa, että parkkiruuduissa viihtyy enemmän ja enemmän nelipyöräisiä akkufarmeja. Näiden tarjoaman varastointikapasiteetin ympärillä käydään vuolasta keskustelua. Varsinkin pörssisähkön hinnan heitellessä on houkutteleva ajatus, että auton akut voisi ladata täyteen sähkön ollessa polkuhinnoissa, ja valjastaa kiituriin säilötty virta hyötykäyttöön silloin, kun kulutus on kalleimmillaan.'
            paragraph3='Ei siis ihme, että auton hyödyntäminen varavirtalähteenä kiinnostaa monia. Pääsyy tähän on tottakai se, että sähköautoihin asennettu akkukapasiteetti on jo itsessään sitä luokkaa, että uusia käyttöulottuvuuksia löytyy runsaasti automatkan molemmista päistä. Esimerkiksi 80 kWh akusta riittää potkua mökkiviikonlopun maltillisiin sähköntarpeisiin tai omakotitalon hetkittäiseen sähköistämiseen.'
            source1='Maaseudun tulevaisuus '
            source1link='https://www.maaseuduntulevaisuus.fi/aihe/sahkoauto'
            source2='Helsingin Sanomat'
            source2link='https://www.hs.fi/talous/art-2000008946943.html'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={2}/>
        <Quiz 
        id='quiz2'
        questionNumber="Quiz2"
        question1='Kuinka paljon energiankulutuksen säännöstely vaikuttaa liiketoimintaasi?'
        q1answer1='Paljon'
        q1answer2='Jonkin verran'
        q1answer3='Vähän'
        q1answer4='Tuskin ollenkaan'
        q1answer5='En osaa sanoa'
        question2='Mikä muutosvoimista on sinulle merkittävin?'
        q2answer1='Korjausoikeus'
        q2answer2='Sähkön säästökuuri'
        q2answer3='USB-C:stä uusi standardi'
        q2answer4='Auto varavirtalähteenä'
        insetructions='Vastaa ja katso mitä muut ovat vastanneet.'
        submitBtn='VASTAA'
        chartHeadlin='Näin muut vastasivat'
        />
        <Spacer size={2}/>


        <Text
          maxwidth='1120px'
          header='Neljä nostoa vuoden 2023 teknologisista ilmiöistä'
          paragraphMaxwidth= '730px'
        >
          <div className={css.listContainer}>
            <ul>
              <li>
                <span>1.</span>
                <p>EU:ssa etenee lakiehdotus, jonka nojalla jokaiselle kuluttajalle tulisi tarjota mahdollisuus korjauttaa elektroniikkalaitteensa. Lakimuutos on esimerkki <a href='#Oikeus'>energiakriisin tuomien kulutustapojen muutoksesta.</a> </p>
              </li>
              <li>
                <span>2.</span>
                <p><a href='#tekoäly'>Tekoälyn kehitys</a> kulkee valtavaa vauhtia. Muun muassa inhimillinen vuoropuhelu sekä dynaaminen ja välitön tiedon prosessointi itseohjautuvaksi toiminnaksi ottavat isoja harppauksia.</p>
              </li>
              <li>
                <span>3.</span>
                <p><a href='#Tilaustalous'>Subscription economy eli palvelumyyntimalli</a> muuttaa jo liiketoimintaa ja jokapäiväistä elämäämme. Esimerkiksi autoyritykset kokeilivat tilausmalleja, joiden avulla oli mahdollista avata käyttöoikeus autoon asennettuihin lisälaitteisiin.</p>
              </li>
              <li>
                <span>4.</span>
                <p>Suomen elintarvikemarkkinoiden seuraavaksi kuumaksi perunaksi povataan <a href='#Mitä'>3D-printattua kasvislihaa.</a></p>
              </li>
            </ul>
          </div>
        </Text>      
        <Spacer size={2}/>
        <BgImageWithTextCard
        id='Tietoturva'
        background='/images/bg003.jpg'
        header='Tietoturva ja talous: uudet (v)aatteet'
        paragraph1='Totutut normit tietoturvan, teknologia-alan vakauden ja kannattavan kaupankäynnin saralla ovat jatkuvassa muutostilassa. Vuonna 2023 tahti tulee vain kiihtymään.'
        paragraph2='Lukuaika: 4 minuuttia'
        />
                <Spacer size={6}/>

        <ImageWithParagraph
            id='IoT'
            bgImage= '/images/DNA_trend_10.jpg'
            bgImageMobile='/images/DNA_013_mobile.jpg'
            heading= 'IoT:n tietoturva ja zero trust'
            paragraph1= 'Esineiden internetissä (IoT) laitteet niin töissä kuin kotona keskustelevat keskenään internetin välityksellä. Kun dataa kerätään ja jaetaan näin massiivisissa määrin, ovat tietoturvariskitkin valtavia.'
            paragraph2='Esineiden internetin kauhukuvaston yleisimmät pelotteet ovat datamurrot ja palvelunestohyökkäykset, mutta tarkennettuna IoT-murto voisi tarkoittaa vaikkapa sitä, että työntekijät eivät äkkiseltään pääse konttorille tai tehtaalle sisään, kun kyberhyökkääjä on poistanut kaikki kulkulätkät käytöstä. IoT edellyttää tietoturvaa, joka on samanaikaisesti laaja ja yksityiskohtainen kokonaisuus. '
            paragraph3='Epäluotettavaksi miellettyjen IoT-järjestelmien vastapainoksi on syntynyt sovelluskehityksen aatesuuntia, joista tällä hetkellä puhutuin on zero trust. Sen päämäärä on luoda ennakoivaan ja ennaltaehkäisevään toimintaan kykenevä tietoturvan toimintamalli. Kun sekä työ että vapaa-aika kuluvat samojen laitteiden ääressä, myös tietoturvan täytyy kyetä vastaamaan modernin maailman tietoturvavaatimuksiin. Tietoturvan tarpeiden ja niitä kohtaamaan kehitettävien ratkaisujen määrä tulee vain kasvamaan tulevina vuosina.'
            source1='Traficomin Kyberturvallisuuskeskus'
            source1link='https://www.kyberturvallisuuskeskus.fi/fi/ajankohtaista/tietoturvailmiot-jotka-muuttivat-maailmaa'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={6}/>
        <Text
          maxwidth='1120px'
          header='”Perinteisilläkin toimialoilla voitaisiin kokeilla softabisneksen mallia, jossa tarjooma paketoidaan selkeästi, ja tavoitteena on toistuva ja pitkäaikainen laskutus.”'
          paragraph='Markko Vaarnas, kasvuyrittäjä ja hallitusammattilainen'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />
        <Spacer size={6}/>

        <ImageWithParagraph
            id='Biometriset'
            bgImage= '/images/DNA_trend_11.jpg'
            bgImageMobile='/images/DNA_014_mobile.jpg'
            heading= 'Biometriset tunnisteet syrjäyttävät salasanat'
            paragraph1= 'Nykypäivänä sisäänkirjautuminen tottelee järjestäen samaa logiikkaa: on käyttäjätunnus ja salasana. Kaksivaiheinen todennus lisää tietoturvaa vaatimalla erillisen koodin kirjautumisen yhteydessä. Järjestelmä on toimiva, mutta haavoittuvainen ja paikoin kömpelö. Laite- ja ohjelmistovalmistajat tarjoavat käyttäjille digitaalisia avainnippuja, sillä 2020-luvun ihmisen kontolla olevien kirjautumistietojen määrä on niin päätähuimaava, ettei jokaista yhdistelmää muistaisi edes mensalaisen kapasiteetilla.'
            paragraph2='Ei siis ihme, että salasanat ovat hiljalleen poistumassa ja tilalle on tulossa kaksivaiheinen biometrinen tunnistautuminen. Tämän varaan rakentavat myös Apple, Google ja Microsoft ja kumppanit kehittäessään yhteistä salasanatonta tunnistautumisstandardiaan. '
            paragraph3='Varsinkin maksutilanteissa biometriikan yleistymistä tukee ensisijaisesti se, että olemassa oleva älylaitteiden kanta tukee suurelta osin biometristä tunnistautumista. Esimerkiksi uusimpien älypuhelimien sormenjälki-, retina- ja kasvotunnistus on jo hämmästyttävän nopeaa ja laadukasta.'
            paragraph4='Biometrinen tunnistautuminen yleistyy niin yksilö- kuin yritystasolla jatkuvasti. Onkin enemmän kuin todennäköistä, että monella toimialalla otetaan pian entistä isompia harppauksia kohti biometristä tunnistautumista esimerkiksi toimisto- ja tehdasolosuhteissa.'
            source1='MikroBitti'
            source1link='https://www.mikrobitti.fi/aiheet/biometrinen-tunnistus'
            source2='Engadget'
            source2link='https://www.engadget.com/apple-google-microsoft-fido-passwordless-standard-expansion-131134404.html'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Teknologia'
            bgImage= '/images/DNA_trend_12.jpg'
            bgImageMobile='/images/DNA_015_mobile.jpg'
            heading= 'Teknologia-alan koettelemukset ja kestävän bisnesmallin arvoitus'
            paragraph1= 'Startup-yritysten arvostus on ollut viime ajat jyrkässä laskussa. Monet Euroopan tunnetuimmista startup-yrityksistä ovat joutuneet sivaltamaan operatiivisia kuluja pienemmäksi leikkaamalla työvoimastaan ja muista toiminnan resursseista.'
            paragraph2='Globaalin taloustilanteen heikentyessä myös teknologia-ala on kärsinyt tappioita. Kuinka käy talouden, kun kassavirrat tyrehtyvät ja monien kasvuyritysten arvostus on laskukiidossa? Mitkä bisnesmallit kestävät aikaa – ja miten varmistaa, että liiketoiminta on samalla sekä kannattavaa että vastuullista?'
            paragraph3='Vastaus arvoitukseen saattaa löytyä historian lehdiltä: 2000-luvun alkutaipaleella monet lupaavat teknologiafirmat päätyivät mullan alle tekkikuplan puhjettua. Sen sijaan Amazonin, eBayn ja Googlen kaltaiset toimijat selvisivät myrskystä ja sittemmin valtasivat suuria alueita teknologia-alan kartastolta. Kärkevin oppitunti oli lopulta se, että pelkkä hyvä idea ei riitä, jos yrityksen bisnesvainu, käyttäjä- ja asiakaskeskeisyys sekä resilienssi jättävät toivomisen varaa – eli tulevaisuudessakin näihin kannattaa panostaa.'
            source1='Sifted'
            source1link='https://sifted.eu/articles/startup-tech-company-layoffs/'
            source2='Kasvu Open'
            source2link='https://kasvuopen.fi/blogi/vastuullisen-liiketoiminnan-maihinnousu-on-rytinalla-kaynnissa/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Artical3 />

        <Spacer size={2}/>
              
        <ImageWithParagraph
            id='Tilaustalous'
            bgImage= '/images/DNA_trend_13.jpg'
            bgImageMobile='/images/DNA_016_mobile.jpg'
            heading= 'Tilaustalous, eli maksusta lisää ominaisuuksia'
            paragraph1= 'Subscription economy eli palvelumyyntimalli on liiketoiminnan kenties suurin muutos viimeisen vuosisadan aikana. Oli kyseessä sitten Netflix, Spotify, Storytel tai Xbox Game Pass, tilauspalvelut ovat tulleet jäädäkseen ja vakiintuneet osaksi arkikäyttäytymistämme häkellyttävän nopeasti.'
            paragraph2='Palvelumyyntimallia on pyritty tuomaan paikoin hyvinkin rohkeasti toimialoille, jotka edustavat isoa irtiottoa totutusta. Esimerkiksi autoyritykset ottivat parisen vuotta sitten kilpaa käyttöön tilausmalleja, joiden avulla oli mahdollista avata käyttöoikeus autoon asennettuihin lisälaitteisiin, vaikkapa penkinlämmitykseen. Hanke ei ottanut tuulta alleen, mutta uusia käyttöulottuvuuksia ideoidaan jatkuvasti.'
            paragraph3='Tilaustalous on vahvasti nykypäivää ja tulevaisuuden normi. Ennen pitkää tilaustalous tulee valtaamaan myös muita sektoreita kuin jo haltuun otetut viihteen ja henkilöliikenteen toimialat. Palvelumyyntimallin etuna on myös se, että keskimääräinen kuluttaja osaa jo vaatia esteettömämpää, usein fyysisistä tuotteista irtautettua pääsyä haluamansa sisällön äärelle. Palvelumyyntimallit tulevat vakiintumaan entistä tiiviimmäksi osaksi jokapäiväistä elämäämme samaan tapaan kuin vesi, sähkö ja verkkoyhteydet.'
            source1='Laurea'
            source1link='https://www.laurea.fi/en/degree_programmes/open-university-of-applied-sciences/open-uas-courses/business-management-and-bit22/fundamentals-of-subscription-economy/'
            source2='Forbes'
            source2link='https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2022/08/15/3-ways-to-keep-winning-in-the-subscription-economy/'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={6}/>
        <Quiz 
        id='quiz3'
        questionNumber="Quiz3"
        question1='Kuinka paljon tietoturvan ja talouden muutos vaikuttaa liiketoimintaasi?'
        q1answer1='Paljon'
        q1answer2='Jonkin verran'
        q1answer3='Vähän'
        q1answer4='Tuskin ollenkaan'
        q1answer5='En osaa sanoa'
        question2='Mikä muutosvoimista on sinulle merkittävin?'
        q2answer1='Zero trust'
        q2answer2='Biometrinen tunnistautuminen'
        q2answer3='Muutos kasvuyritysten arvostuksessa'
        q2answer4='Tilaustalous'
        insetructions='Vastaa ja katso mitä muut ovat vastanneet.'
        submitBtn='VASTAA'
        chartHeadlin='Näin muut vastasivat'
        />
        <Spacer size={6}/>
        <BgImageWithTextCard
        id='Digitaalisen'
        background='/images/bg004.jpg'
        header='Digitaalisen arjen voimat ja vastavoimat'
        paragraph1='Oletko valmis lähettämään peliyhteisösi jäsenille retusoimattoman kuvan itsestäsi kokeilemassa virtuaalivaatteita avatarisi ylle? Kenties samalla kun natustat sohvalla 3D-tulostettua kasvispihviä?'
        paragraph2='Lukuaika: 6 minuuttia'
        />
        <Spacer size={2}/>

        <ImageWithParagraph
            id='Kiillotetun'
            bgImage= '/images/DNA_trend_14.jpg'
            bgImageMobile='/images/DNA_018_mobile.jpg'
            heading= 'Kiillotetun todellisuuden tuolla puolen'
            paragraph1= 'Kotoisana ja helposti lähestyttävänä some-alustana syntyneen Instagramin sisältö on muuttunut ylituotetuksi, glitteriä ja kiiltokuvaa sylkeväksi mukaelmaksi elämästä. Termi ”Instagram-todellisuus” kuvaa sellaista ulospäin näkyvää arkea, jolla on usein yhtä paljon tekemistä oikean elämän kanssa kuin luksusjahdilla ja soutuveneellä keskenään.'
            paragraph2='Yksi ilmiön vastavoimaa edustava some-alusta on BeReal, joka antaa käyttäjälle mahdollisuuden lähettää ystävilleen ja seuraajilleen kuvan siitä, mitä elämässä tapahtuu juuri sillä nimenomaisella hetkellä. Ei spottivaloja, meikin korjausta tai ammattikuvaajien ottamia otoksia ”normipäivästä”, vaan aitoja tilanteita ja inhimillisiä hetkiä. Elävää elämää.'
            paragraph3='BeReal ei varmasti jää kasvavan aitoustrendin viimeiseksi edustajaksi, sillä modernin sosiaalisen median yltiöpäisen hohdokkaaksi kiillotettu mukatodellisuus herättää jatkuvasti syvempää närää. BeRealin kaltaisilla sovelluksilla on myös tärkeä rooli nuorempien käyttäjien maailmankuvan muokkauksessa. Jo nyt on tehty kattavasti tutkimuksia siitä, kuinka haitallista nuoren ihmisen minäkuvalle voi olla se, että syötteessä näkyy vain yli-inhimillisellä fysiikalla ja päällisesti täydellisellä elämällä siunattuja influenssereita.'
            source1='BeReal'
            source1link='https://bere.al/en'
            source2='Helsingin Sanomat'
            source2link='https://www.hs.fi/nyt/art-2000009004842.html'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Pukeutuisitko'
            bgImage= '/images/DNA_trend_15.jpg'
            bgImageMobile='/images/DNA_019_mobile.jpg'
            heading= 'Pukeutuisitko virtuaaliseen Gucciin?'
            paragraph1= 'Onko seuraavassa firman virallisessa potretissa päälläsi virtuaalinen vaatekappale? Tämä voi olla totta jo pian, sillä markkinoille vyöryy valtavasti virtuaalisten vaatteiden valmistajia. Käyttötarpeista ja laitteistosta riippuen vaatekappale joko lisätään käyttäjän päälle jälkikäteen, tai se kulkee käyttäjän päällä digitaalisesti vaikkapa metaversumissa sompaillessa. Käyttöulottuvuuksien mahdollisuudet esimerkiksi verkossa toimivien vaatekauppojen osalta ovat huikeat.'
            paragraph2='Videopelien maailmassa virtuaalisten vaatteiden kauppa on ollut arkipäivää ja tuottavaa bisnestä jo vuosia. Esimerkiksi World of Warcraftin kaltaisissa valtavan suosituissa MMO-massiivimoninpeleissä yksi keskeinen porkkana käyttäjille on se, että oman pelihahmon ulkonäköä ja vaatetusta voi muokata mielensä mukaan. Kauppa käy myös pelihahmojen varusteiden saralla, sillä muun muassa Counter-Strike-toimintapelin aseiden pintakuvioiden kaupan ympärille on kasvanut miljoonabisnes.'
            paragraph3='Virtuaalisiin vaatteisiin satsaavat yritykset luottavat myös siihen, että rikastetun todellisuuden mahdollistavista laitteista tulee ennen pitkää osa jokapäiväistä arkeamme. Tällöin käyttäjän valitsemat digitaaliset vaatekappaleet näkyisivät tämän päällä muiden käyttäjien älylinssien kautta. Kun kaikilla on päässään virtuaalilasit, kaikilla voi olla päällään myös virtuaalivaatteet.'
            source1='Kauppalehti'
            source1link='https://www.kauppalehti.fi/uutiset/virtuaaliset-vaatteet-ja-massamuodin-kuolema-uusi-nayttely-valottaa-muodin-tulevaisuuden/588d13c6-76f7-4ce7-9bbd-930bb5b8d911'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={6}/>

        <Text
          maxwidth='1120px'
          header='”Vegaaniruoka on trendinä pärjännyt pinnalla ihan vain vegaanisuudella. Nyt kuluttajia on kuitenkin alkanut enemmän kiinnostamaan, mitä ruokaan on oikeasti ja millaiset ympäristövaikutukset sillä on.”'
          paragraph='Tytti-Lotta Ojala, Nordic Umami Companyn Chief Design Officer'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />

        <Spacer size={6}/>

         <ImageWithParagraph
            id='Luo'
            bgImage= '/images/DNA_trend_16.jpg'
            bgImageMobile='/images/DNA_020_mobile.jpg'
            heading= 'Luo, pelaa ja remixaa'
            paragraph1= 'Pelien ja some-alustojen mahdollistama etäteitse tapahtuva yhteisöllisyys nousi aivan uudenlaiseen arvoon eristyksissä vietettyjen koronavuosien aikana. Kulttuuri kuitenkin jatkaa kehittymistään myös pandemian jälkeen, sillä ihmiset osaavat vaatia laaja-alaisempia sosiaalisia ulottuvuuksia kuluttamaansa sisältöön. Bisnespuolella yhteisöllisyys luo lähes loputtomasti kasvunvaraa, sillä hyvästä ideasta taitavasti jatkokehitetty sosiaalinen sisältö voi netota tekijöilleen tuloja vuosikymmenien ajan.'
            paragraph2='Yhteisöllisen pelaamisen ja sosiaalisen median väliseen markkinarakoon tähtää suomalainen kasvuyritys HypeHype. Pelialan veteraaneista koostuva pelistudio kehittää parhaillaan käänteentekevää HypeHype-mobiilisovellusta, jossa TikTokin tyylinen nopeatempoinen sosiaalinen swaippailu ja Instagramista tuttu remixaus lyövät kättäpäivää Minecraftin kaltaisten, luovuuteen ja kokeilunhaluun kannustavien pelien kanssa.'
            paragraph3='HypeHypen tärkeimmäksi ominaisuudeksi on nostettu se, että käyttäjät voivat myös ”remixata” muiden tekemää sisältöä. Jos vaikkapa eteen tulee teknisesti koukuttava, mutta visuaalisesti vähemmän inspiroiva autopeli, käyttäjä voi siirtää sisällön omaan editoriinsa ja alkaa muokata sitä mieleisekseen. Parhaimmillaan HypeHypen kaltaiset yhteisöllisyyteen perustuvat pelit synnyttävät luovuuden lumipalloefektin, jolloin yhdestä alkuajatuksesta syntyy loputtomasti uusia versioita.'
            source1='Venture Beat'
            source1link='https://venturebeat.com/games/hypehype-lets-everyone-create-remix-and-play-games-on-phones/'
            source2='TechCrunch'
            source2link='https://techcrunch.com/2022/01/20/instagram-now-allows-creators-to-remix-any-public-videos-not-just-reels/'
            bgColor= '#fff'
            direction= 'ltr'
            source='Lähteitä: '
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Mitä'
            bgImage= '/images/DNA_trend_17.jpg'
            bgImageMobile='/images/DNA_021_mobile.jpg'
            heading= 'Mitä viiniä suosittelisit 3D-tulostetun kasvispihvini kanssa?'
            paragraph1= 'Suomen elintarvikemarkkinoiden seuraavaksi kuumaksi perunaksi povataan 3D-printattua kasvislihaa. Perinteisen ruokavalion saattaminen kasvispainotteiseksi on sekä yksilötason hyvinvoinnin että globaalin kestävän kehityksen kannalta tärkeä liike, mutta monille lihan korvaajaksi tarjotut kasvisversiot ovat sekä maun että etenkin suutuntuman osalta luotaantyöntäviä kokemuksia.'
            paragraph2='3D-tulostettu kasvisliha ei ole aivan yhtä scifistinen ilmiö kuin vaikkapa laboratoriossa kasvatettu keinoliha. Käytännössä 3D-tulostus ruoanvalmistuksen kontekstissa tarkoittaa sitä, että tulostettu kasvisproteiini on ”rakennettu” niin, että se muistuttaa eläinperäistä esikuvaansa rakenteen, maun ja käyttötapojen osalta lähes täydellisesti.'
            paragraph3='Vönerin ja nyhtökauran kaltaisten hittituotteiden synnyinmaana Suomi on toistuvasti ollut kasvisproteiinien kehityksen suunnannäyttäjiä, ja myös printtilihan saralla Suomessa ollaan kehityksen kärjessä. 3D-tulostettu kasvisliha on saapunut vuoden 2022 syksyllä muutamiin suomalaisiin ravintoloihin, ja kauppojen hyllylle se ehtii vuoden 2023 kevään tai kesän aikana. Uskallatko maistaa?'
            source1='Yle'
            source1link='https://yle.fi/uutiset/3-12542292'
            source2='Avec Media'
            source2link='https://www.avecmedia.fi/keittio/3d-printattua-vegaanista-lihaa-myydaan-nyt-ravintolassa-suomessa-maistoimme/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Lähteitä: '
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

       <Artical4 />

        <Spacer size={2}/>

        <Quiz 
        id='quiz4'
        questionNumber="Quiz4"
        question1='Kuinka paljon digitaalisen arjen muutos vaikuttaa liiketoimintaasi?'
        q1answer1='Paljon'
        q1answer2='Jonkin verran'
        q1answer3='Vähän'
        q1answer4='Tuskin ollenkaan'
        q1answer5='En osaa sanoa'
        question2='Mikä muutosvoimista on sinulle merkittävin?'
        q2answer1='Aitous somessa'
        q2answer2='Virtuaaliset vaatteet'
        q2answer3='Sisältöjen ”remixaaminen”'
        q2answer4='3D-printattu kasvisliha'
        insetructions='Vastaa ja katso mitä muut ovat vastanneet.'
        submitBtn='VASTAA'
        chartHeadlin='Näin muut vastasivat'
        />
        <Spacer size={2}/>
      </div>
      </div>
      <Footer
      more='Lisää aiheesta:'
      link1='Yllättävän yksinkertaista -podcast'
      link2='Tutustu DNA:n uraauurtaviin yritysratkaisuihin'
      logo='/images/DNA_YLLATTAVAN_YKSINKERTAISTA_Logo.svg'
      width={275}
      height={275}
      
      />
    </div>
  );
};

export default Index;
