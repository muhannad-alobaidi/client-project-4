/* eslint-disable @next/next/no-img-element */
import Hero from '../../../components/modules/Hero';
import Text from '../../../components/modules/Text';
import ImageWithParagraph from '../../../components/modules/ImageWithParagraph';
import Spacer from '../../../components/modules/Spacer';
import BgImageWithTextCard from '../../../components/modules/BgImageWithTextCard';
import FourMainLinks from '../../../components/modules/FourMainLinks';
import Quiz from '../../../components/modules/Quiz';
import HeaderEn from '../../../components/Header-En';
import Artical1En from '../../../components/articals/En/artical1-en';
import Artical2En from '../../../components/articals/En/artical2-en';
import Artical3En from '../../../components/articals/En/artical3-en';
import Artical4En from '../../../components/articals/En/artical4-en';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';


import css from './index.module.scss';
import Footer from '../../../components/Footer';


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
      <HeaderEn/>
      <div className={css.hero}>
        <Hero
          heading="Tech Trends of 2023"
          paragraph='DNA introduces 17 rising technology trends that will step into the limelight in 2023 – many of which leave their mark on history.'
          bgVeilColor="rgba(0, 0, 0, .3)"
          textColor="#00000"
        >
        </Hero>
      </div>
      <div className={css.modualsSection1}>
        
        <Text
        maxwidth='660px'
        paragraph='We gathered a hefty list of technology trends of the following year from conversations with professionals from multiple industries and a wide range of local and international events, phenomena, and watershed moments. All visual materials in this report were created using the AI software Midjourney.'
        />

        <FourMainLinks
        themes='Sections'
        link1='Digital evolution – or revolution?'
        link2='Consume less, achieve more '
        link3='Cybersecurity and economy: new impetus'
        link4='The forces and counterforces of digital life'
        />

        <BgImageWithTextCard
        id='Digitaalinen'
        background='/images/bg001.jpg'
        header='Digital evolution – or revolution?'
        paragraph1='Our lives are recently shaken by the pandemia, global warming, resource shortages, strikes in critical industries, and constantly tightening geopolitical circumstances. The world around us is in never-ending change, and technological development is not slowing down either. But what kind of shifts do we see on the technology horizon? '
        paragraph2='Section reading time: 8 minutes'
        />
        <Spacer size={6}/>
        <ImageWithParagraph
            id='tekoäly'
            bgImage= '/images/DNA_trend_01.jpg'
            bgImageMobile='/images/DNA_02_mobile.jpg'
            heading= 'AI like a second-grader'
            paragraph1= 'LaMDA, or language model for dialogue applications, is an AI Google developed as a conversational bot. Blake Lemoine, an engineer at Google, started working with LaMDA AI in the Fall of 2022. While working with the conversational abilities of the AI, Lemoine soon noticed that LaMDA’s cognitive skills and the tendency to be self-conscious seemed remarkably humane. It began to show signs of sentience comparable to the developing mind of a small child.'
            paragraph2='Eventually, the AI would challenge its developer by raising questions about its rights and personality. The controversial phenomenon elevated the classic conversation about sentient AI to a new level – what do the signs of self-conscious AI mean in the context of the development of the entire industry? '
            paragraph3='Developing AI is speeding fast in many industries. Development targets include the responsiveness of human-like conversation and dynamic and instant information processing into self-imposed action. In 2023 we will see more exciting and confusing innovations in the evolving field of d.'
            source1='Google'
            source1link='https://blog.google/technology/ai/lamda/'
            source2='Washington Post'
            source2link='https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Artical1En/>

        <Spacer size={2}/>
       <ImageWithParagraph
            id='Kunedes'
            bgImage= '/images/DNA_trend_02.jpg'
            bgImageMobile='/images/DNA_03_mobile.jpg'
            heading= 'When even the supercomputer is not enough'
            paragraph1= 'Three decades ago, scientists were drafting a concept of computers utilizing quantum mechanics, and those early dreams are now becoming a reality. Finland is at the forefront of quantum computing, as VTT and IQM have already built a fully functional quantum computer in 2021 Finland also has the knowledge of cooling such a computer: the technology company Bluefors is now gaining international interest. '
            paragraph2='When even computers equipped with thousands of processors are not enough, the answer lies within the one computer to rule them all, a quantum computing-capable one. The architecture of quantum computers is based on quantum physics, meaning that they can run calculations of countless combinations simultaneously based on the questions it receives.'
            paragraph3='Quantum computer bypasses traditional computing that is based on ones and zeroes. Although a modern computer can run immense calculations, complex medical science or environmental research equations require even more juice. '
            paragraph4='If more common supercomputers are a million times more potent than traditional home laptops, quantum computers are thousands of times more powerful than those supercomputers. The forecast is that the ever-expanding and growing business will also take its next giant leaps utilizing quantum computing.'
            source1='VTT'
            source1link='https://www.vttresearch.com/en/news-and-ideas/finlands-first-5-qubit-quantum-computer-now-operational'
            source2='Yle'
            source2link='https://yle.fi/uutiset/3-12209593'
            source3='Computer Weekly'
            source3link='https://www.computerweekly.com/feature/Finland-brings-cryostats-and-other-cool-things-to-quantum-computing'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>
       <ImageWithParagraph
            id='Synteettinen'
            bgImage= '/images/DNA_trend_03.jpg'
            bgImageMobile='/images/DNA_04_mobile.jpg'
            heading= 'A synthetic brush creates art from words'
            paragraph1= 'Using AI in visual arts is no news for professionals working in special effects – it has been their everyday life for decades. For example, the Lord of The Rings trilogy (2001-2003) utilized AI in massive battle scenes where it would partly rein digital characters. No wonder the tool that redefines artistic AI, DALL-E, draws inspiration from the tiny little robot hero in the Pixar movie Wall-E as much as from the father of abstract art, Salvador Dali.'
            paragraph2='The original DALL-E was an AI software that created images based on text input. The AI, developed by Silicon Valley-based OpenAI research laboratory, recently shed its skin and was born a new, carrying the name DALL-E 2. The second iteration is a highly well-developed AI artist.  '
            paragraph3="Many other systems were able to create credible visual pieces at the beginning of 2000. What makes modern tools, such as DALLE-2, extraordinary is their work – it is so adequate that it's nearly impossible to see the difference from human-made art. The question is, can we separate man-made art from AI in the future?  "
            source1='OpenAI'
            source1link='https://openai.com/dall-e-2/'
            source2='NPR'
            source2link='https://www.npr.org/2022/09/30/1125976146/dall-e-art-ai-generator-npr'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>
        <Spacer size={2}/>
        <Text
          maxwidth='1120px'
          header='“Artificial intelligence learns from the data is fed. It is a servant, not a master.” '
          paragraph='Katriina Valli, the founder of AI4value'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />
        <Spacer size={2}/>
        <ImageWithParagraph
            id='Älyoptiikka'
            bgImage= '/images/DNA_trend_04.jpg'
            bgImageMobile='/images/DNA_05_mobile.jpg'
            heading= 'Smart optics enhance performance in sports'
            paragraph1= 'Microsoft and Meta, among others, have invested vastly in enriched reality software and devices. For example, the latter currently works with RayBan to deliver the functionalities of computers and smart devices into the earpieces of eyeglasses. AR or augmented reality means something is added to the existing reality, whereas MR or mixed reality is more about merging virtual and real life. A general term to refer to both would be enriched reality.'
            paragraph2= "Aimed primarily at athletes, the Mojo Lens shrinks smart, performance-tracking fitness devices into an even tinier package – contact lenses. The smart lens utilizes groundbreaking technology and includes a microLED display as thick as a grain of sand. Its sensors are powered by minuscule batteries built into the lens. This type of technology is the soul sister of the smart ring Oura, which focuses on tracking its users' well-being and sleep quality. But Mojo Lens is more specific and, first of all, meant as a visual aid."
            paragraph3='Imagine seeing the trail path without any barriers, even without a smartwatch. Companies working with enriched reality technologies promise their users vast possibilities for use cases – for example, surgeons and construction engineers can use smart optics in their work, among other tools.'
            source1='Mojo Vision'
            source1link='https://www.mojo.vision/mojo-lens'
            source2='CNET'
            source2link='https://www.cnet.com/tech/computing/mojos-smart-contact-lenses-begin-in-eye-testing/'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Koodikielien'
            bgImage= '/images/DNA_trend_05.jpg'
            bgImageMobile='/images/DNA_06_mobile.jpg'
            heading= 'The retirees of programming languages '
            paragraph1= "The founder of Intel, Gordon Moore, is best known for his article published back in 1965, subsequently known as Moore's law. Based on the number of transistors used by devices, the law claims that the capacity and speed of computers will double every two years as manufacturing components becomes more and more cost-efficient."
            paragraph2= "Eventually, Moore's law turned into a self-fulfilling prophecy. The programmers and device manufacturers adopted it as an external challenge to drive the development of information technology. But obeying Moore's law also came with its dark side. The problems of low-quality and memory-hungry code languages can be overcome quite easily. Many developers, who took the law by heart, used the additional power brought by the new components and hardware in two-year cycles to patch up the gaps in the leaking code."
            paragraph3= "Forward-slanted development is a risky business, which would also lead to many programming languages becoming obsolete or even completely forgotten. So, many long-used languages are expected to retire by the year 2030. Visual Basic, for example, has been used since 1991, but it's already one foot into the grave. Pearl, basically the cornerstone of web programming, has also lost its foothold as a trusty tool as Python is gaining more and more attraction."
            source1='Analytics Insight'
            source1link='https://www.analyticsinsight.net/top-10-programming-languages-that-will-go-extinct-in-2030/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Quiz 
        id='quiz1'
        questionNumber="Quiz1"
        question1='How profoundly is your business impacted by digital evolution?'
        q1answer1='Significantly'
        q1answer2='Somewhat'
        q1answer3='Slightly'
        q1answer4='Barely at all'
        q1answer5='I can’t say'
        question2='Which of these driving forces is most significant to you?'
        q2answer1='AI development'
        q2answer2='Quantum computing'
        q2answer3='AI-powered visuals'
        q2answer4='Smart optics'
        q2answer5='Aging coding scripts'
        insetructions='Find out what others think by submitting your answers.'
        submitBtn='SUBMIT'
        chartHeadlin='This is how others responded'
        />

        <Spacer size={2}/>


        <BgImageWithTextCard
        id='Vastuullisuus'
        background='/images/bg002.jpg'
        header='Consume less, achieve more'
        paragraph1= "In the face of an uncertain global situation and dwindling resources, consumption needs to be minimized. However, there is no need to compromise on comfort indefinitely because the road ahead of us is smoothed by both modern legislation and technological development."
        paragraph2='Section reading time: 7 minutes'
        />

        <Spacer size={6}/>

        <ImageWithParagraph
            id='Oikeus'
            bgImage= '/images/DNA_trend_06.jpg'
            bgImageMobile='/images/DNA_08_mobile.jpg'
            heading= 'The right to repair and the responsibility to rent?'
            paragraph1= "Could your next phone last forever? In the EU, a legal proposal is currently moving forward where every consumer should be offered the opportunity to repair their electronic device. Within the proposed legislative change, the Right to Repair would cover devices within the warranty period and beyond. In addition, it would give the user the right and the resources to repair their device independently if they wish."
            paragraph2= "From the point of view of device manufacturers and retailers, the EU's decision raises important questions regarding business flow. The logistics of the maintenance processes require massive changes: device manufacturers and sellers must be ready to respond to customers' repair needs. How to operate, for example, when the components contained in an outdated device are no longer manufactured?"
            paragraph3= "However, the proportion is an essential step toward sustainable development. People are perceiving earth’s dwindling resources more and more clearly. There are also signs of change in the purchasing behavior of consumers: they increasingly prefer the services of clothing rental companies instead of buying clothes. Your next device purchase may be your last - so choose wisely."
            source1='Right to Repair Europe'
            source1link='https://repair.eu/'
            source2='Euroopan parlamentti'
            source2link='https://www.europarl.europa.eu/thinktank/fi/document/EPRS_BRI(2022)698869'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Sähkön'
            bgImage= '/images/DNA_trend_07.jpg'
            bgImageMobile='/images/DNA_09_mobile.jpg'
            heading= 'Tightening the budget on energy consumption'
            paragraph1= 'The energy crisis following the Ukraine war has taught Western countries a bitter lesson: the time of electricity abundance is over. Now, at last, is the right moment to switch to energy-saving lamps and check the energy consumption of the entire home.'
            paragraph2= "One can do this with others: some applications monitor electricity companies' consumption and services that offer smart heating as services. One example of such is Wattinen."
            paragraph3= "In 2023, energy must be saved in all possible ways. The IT industry needs to consider its own carbon footprint. Even though the industry solves the challenges of energy production with smart applications, it is also one of the significant consumers of electricity in the modern world. Developing usage habits and controlling so-called hidden consumption are the most critical trends in 2023 in both the consumer and business sectors."
            source1='Wattinen'
            source1link='https://www.wattinen.fi/alykas-lammitys-palveluna'
            source2='Yle'
            source2link='https://yle.fi/aihe/t/18-216464'
            source3='Tieke'
            source3link='https://tieke.fi/en/projects/green-ict-project/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Artical2En/>

        <Spacer size={2}/>

        <ImageWithParagraph
            id='USB'
            bgImage= '/images/DNA_trend_08.jpg'
            bgImageMobile='/images/DNA_010_mobile.jpg'
            heading= 'USB-C is finally mainstream – also legally'
            paragraph1= 'When new technology is acquired for the home or office, so-called cable clutter is essential to the implementation. At worst, you can find dozens of different data and power cables for other devices on the shelves of the cabinets. The standard USB connection has various forms: A, B, C, mini and micro. On the other hand, Apple has long entwined its entanglements in cable messes by investing in connection standards that differ from the mainstream.'
            paragraph2= "The European Commission is tackling the problem with legislation that guarantees in-line chargers and charging interfaces. According to the decision confirmed by the EU in autumn 2022, the connectors of data and power cables must be uniform to USB-C by autumn 2024."
            paragraph3= "The solution is excellent in making everyday life easier. Still, there are also objections: will the EU's decision slow down technological development when all device connections are forced into the same mold? On the other hand, the fact that the data transfer features enabled by USB-C are top-notch in terms of simplicity, speed, and reliability serves as a counterpoint to the argument. This equation serves device and application developers and personal and business customers."
            source1='Euroopan parlamentti'
            source1link='https://www.europarl.europa.eu/news/en/press-room/20220930IPR41928/long-awaited-common-charger-for-mobile-devices-will-be-a-reality-in-2024'
            source2='Yle'
            source2link='https://yle.fi/uutiset/3-12648909'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={6}/>

        <Text
          maxwidth='1120px'
          header='“Smart home solutions help to maintain the quality of life, with reasonable energy consumption.”'
          paragraph='Sallamaari Muhonen, CEO of the Finnish Electrotechnical Trade Association'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />
        <Spacer size={6}/>

        <ImageWithParagraph
            id='Pilvisellä'
            bgImage= '/images/DNA_trend_09.jpg'
            bgImageMobile='/images/DNA_011_mobile.jpg'
            heading= 'The electric car could take care of the power needs of your cabin'
            paragraph1= "One of the most central issues of the ongoing energy crisis is energy storage. Every part of the world is now thinking about the same: how can we store the increasing wind and solar energy when production exceeds demand?"
            paragraph2= "Electric cars are seen as one solution to this. Even in Finland, the sales curve of electric and hybrid cars is rising sharply, showing that more and more four-wheeled battery farms are found in parking spaces. There is also a lot of discussion around the storage capacity they offer. Especially when the price of electricity on the stock market is fluctuating, it is an appealing idea to fully charge the car's batteries when electricity is at the lowest market prices and, reciprocally, harness the power stored in the accelerator for practical use when consumption is at its most expensive."
            paragraph3= "So it's no wonder using a car as a backup power source interests many. The battery capacity installed in electric cars is already at  such a level that new dimensions of use can be found at both ends of the car journey. The battery capacity in several electric cars is enough to power the moderate electricity needs of a cottage weekend or the momentary electrification of a detached house."
            source1='Maaseudun tulevaisuus '
            source1link='https://www.maaseuduntulevaisuus.fi/aihe/sahkoauto'
            source2='Helsingin Sanomat'
            source2link='https://www.hs.fi/talous/art-2000008946943.html'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={2}/>
        <Quiz 
        id='quiz2'
        questionNumber="Quiz2"
        question1='How much does energy regulation impact your business?'
        q1answer1='Significantly'
        q1answer2='Somewhat'
        q1answer3='Slightly'
        q1answer4='Barely at all'
        q1answer5='I can’t say'
        question2='Which of these driving forces is most significant to you?'
        q2answer1='Right to repair'
        q2answer2='Tightening energy consumption budgets'
        q2answer3='USB-C is legally mainstream'
        q2answer4='The electric car as a power bank'
        insetructions='Find out what others think by submitting your answers.'
        submitBtn='SUBMIT'
        chartHeadlin='This is how others responded'
        />
        <Spacer size={2}/>


        <Text
          maxwidth='1120px'
          header='Four highlights from 2023’s tech scape:'
          paragraphMaxwidth= '730px'
        >
          <div className={css.listContainer}>
            <ul>
              <li>
                <span>1.</span>
                <p>Proposed new EU legislation introduces broader rights for consumers to have their electronic devices repaired. It is indicative of how <a href='#Oikeus'>the energy crisis is adding momentum to a change in consumer habits</a></p>
              </li>
              <li>
                <span>2.</span>
                <p><a href='#tekoäly'>d </a>is advancing rapidly. Huge leaps are being taken with reciprocal dialogue, as well as turning dynamically and instantly processed data into autonomous actions.</p>
              </li>
              <li>
                <span>3.</span>
                <p><a href='#Tilaustalous'>The subscription economy</a> has transformed business and our everyday lives. For example, the automotive industry has experimented with subscription models which enable the consumer to unlock access to preinstalled peripherals.</p>
              </li>
              <li>
                <span>4.</span>
                <p>The next mouth-watering breakthrough in the Finnish retail market is purported to be <a href='#Mitä'>3D printed veggie meat</a></p>
              </li>
            </ul>
          </div>
        </Text>      
        <Spacer size={2}/>
        <BgImageWithTextCard
        id='Tietoturva'
        background='/images/bg003.jpg'
        header='Cybersecurity and economy: new impetus'
        paragraph1='The “usual” in the field of information security, stability of the technology sector, and profitable trading are in a constant state of change. In 2023, the pace will only accelerate.'
        paragraph2='Section reading time: 4 minutes'
        />
                <Spacer size={6}/>

        <ImageWithParagraph
            id='IoT'
            bgImage= '/images/DNA_trend_10.jpg'
            bgImageMobile='/images/DNA_013_mobile.jpg'
            heading= 'IoT data security and zero trust'
            paragraph1= "In the Internet of Things (IoT), devices at work and home talk to each other via the Internet. When data is collected and shared in such massive amounts, the security risks are high."
            paragraph2= "The most common deterrents in the horror picture of the Internet of Things are data breaches and denial-of-service attacks. More specifically, an IoT breach could mean that employees suddenly cannot enter the office or factory when the attacker has disabled all access points. IoT requires data security, which is a broad and detailed entity simultaneously."
            paragraph3= "As counterweight to IoT systems conceived unreliable, new application development trends have emerged. One of the most talked about solutions at the moment is zero trust. Its goal is to create an information security operating model capable of proactive and preventive action. When both work and free time are spent around the same devices, data security must meet the data security requirements of the modern world. The number of information security needs and solutions developed to meet them will only increase in the coming years."
            source1='Traficomin Kyberturvallisuuskeskus'
            source1link='https://www.kyberturvallisuuskeskus.fi/fi/ajankohtaista/tietoturvailmiot-jotka-muuttivat-maailmaa'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={6} />

        <Text
          maxwidth='1120px'
          header='“Traditional industries could try the software business model, where the offer is easily packaged, and the goal is frequent and long-term billing.”'
          paragraph='Markko Vaarnas, growth entrepreneur and board professional'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />

        <Spacer size={6} />

        <ImageWithParagraph
            id='Biometriset'
            bgImage= '/images/DNA_trend_11.jpg'
            bgImageMobile='/images/DNA_014_mobile.jpg'
            heading= 'Biometric verification to surpass passwords'
            paragraph1= "Today, logging in obeys usually one and only  logic: there is a username and a password. On the other hand, two-step authentication increases data security by requiring a different code when logging in. The system is functional but vulnerable and clumsy. Hardware and software manufacturers offer digital keychains to users since the amount of login information is so dizzying that you wouldn't be able to remember every combination –  even with the memory capacity of a Mensa member."
            paragraph2= "So it's no wonder passwords are slowly being phased out and replaced by two-step biometric identification. Apple, Google, Microsoft, and their partners also build on this when developing their common password-free identification standard."
            paragraph3= "Especially in payment situations, the prevalence of biometrics is primarily supported by the fact that the existing stock of smart devices broadly supports biometric identification. For example, the latest smartphones' fingerprint, retina, and face recognition are already almost amazingly fast and of high quality."
            paragraph4= "Biometric identification is constantly becoming more common at the individual and company levels. Many industries will soon take even more significant strides towards biometric identification in, for example, office and factory settings."
            source1='MikroBitti'
            source1link='https://www.mikrobitti.fi/aiheet/biometrinen-tunnistus'
            source2='Engadget'
            source2link='https://www.engadget.com/apple-google-microsoft-fido-passwordless-standard-expansion-131134404.html'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Teknologia'
            bgImage= '/images/DNA_trend_12.jpg'
            bgImageMobile='/images/DNA_015_mobile.jpg'
            heading= 'Ordeals in the tech industry and the puzzle of a sustainable business model'
            paragraph1= "A bunch of startup companies have been in a sharp decline in the past few years. Many of Europe's best-known startup companies have had to slice operational costs by cutting vast amounts of their workforce and other resources."
            paragraph2= "As the global economic situation has weakened, the technology sector has also suffered losses. How is the economy doing when cash flows are stagnating, and the valuation of many growth companies is plummeting? Which business models last - and how do we ensure that the business is both profitable and responsible simultaneously?"
            paragraph3= "The answer to the riddle may be found in the pages of history: at the beginning of the 2000s, many promising technology companies ended up underground after the tech bubble burst. Instead, players like Amazon, eBay, and Google survived the financial storm and took over large areas of the technology map. In the end, the most important lesson was that more than a good idea is needed if the company's business acumen, user and customer-centricity, and resilience leave much to be desired - so it's worth investing in these in the future as well."
            source1='Sifted'
            source1link='https://sifted.eu/articles/startup-tech-company-layoffs/'
            source2='Kasvu Open'
            source2link='https://kasvuopen.fi/blogi/vastuullisen-liiketoiminnan-maihinnousu-on-rytinalla-kaynnissa/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={2} />

        <Artical3En/>

        <Spacer size={2} />
              
        <ImageWithParagraph
            id='Tilaustalous'
            bgImage= '/images/DNA_trend_13.jpg'
            bgImageMobile='/images/DNA_016_mobile.jpg'
            heading= "Subscription economy: more features for a fee"
            paragraph1= "The subscription economy, meaning the service sales model, is perhaps the most significant change in business in the last century. Whether it's Netflix, Spotify, Storytel, or Xbox Game Pass, subscription services are here to stay and have quickly established themselves as part of our everyday behavior."
            paragraph2= "In some places, the service sales model has been tried to install  to traditional industries in a way that significantly differs from the usual sales models. For example, a couple of years ago, car companies introduced subscription models, which made it possible to unlock access to separate additional devices installed in the car, such as seat heating. The project did not take off, but new use dimensions are constantly being devised."
            paragraph3= "The subscription economy is strongly present and the absolute norm of the future. Before long, the subscription economy will take over also sectors other than the entertainment and passenger transport industries. Another advantage of the service sales model is that the average consumer already knows how to demand more accessible entry to the content they want, often detached from physical products. Service sales models will be established as an even closer part of our everyday life, in the same way as water, electricity, and network connections."
            source1='Laurea'
            source1link='https://www.laurea.fi/en/degree_programmes/open-university-of-applied-sciences/open-uas-courses/business-management-and-bit22/fundamentals-of-subscription-economy/'
            source2='Forbes'
            source2link='https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2022/08/15/3-ways-to-keep-winning-in-the-subscription-economy/'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={6}/>
        <Quiz 
        id='quiz3'
        questionNumber="Quiz3"
        question1='How much do dynamic shifts in cybersecurity and economy impact your business?'
        q1answer1='Significantly'
        q1answer2='Somewhat'
        q1answer3='Slightly'
        q1answer4='Barely at all'
        q1answer5='I can’t say'
        question2='Which of these driving forces is most significant to you?'
        q2answer1='Zero trust'
        q2answer2='Biometric verification'
        q2answer3='Startups declining in value'
        q2answer4='Subscription economy'
        insetructions='Find out what others think by submitting your answers.'
        submitBtn='SUBMIT'
        chartHeadlin='This is how others responded'
        />
        <Spacer size={6}/>
        <BgImageWithTextCard
        id='Digitaalisen'
        background='/images/bg004.jpg'
        header='The forces and counterforces of digital life'
        paragraph1='Are you ready to send your gaming community an unretouched photo of your avatar trying on virtual clothes  while munching on a 3D-printed veggie steak on the couch?'
        paragraph2='Section reading time: 6 minutes'
        />
        <Spacer size={2}/>

        <ImageWithParagraph
            id='Kiillotetun'
            bgImage= '/images/DNA_trend_14.jpg'
            bgImageMobile='/images/DNA_018_mobile.jpg'
            heading= 'Beyond polished reality'
            paragraph1= 'The content of Instagram, which was born as a homely and easily accessible social media platform, has since turned into an overproduced, glittery, and shiny reflection of life. The term "Instagram-reality" describes an outwardly visible everyday life, which often has as much to do with real life as a luxury yacht and a rowing boat.'
            paragraph2= 'One of the social media platforms representing the opposite force of the phenomenon is BeReal, which allows user to send their friends and followers a picture of what is happening in life at that specific moment. No spotlights, make-up correction, or shots of a "normal day" taken by professional photographers, but real situations and human moments. Living life.'
            paragraph3= "BeReal will certainly not be the last representative of the growing trend of authenticity because modern social media's artificial reality, polished to an extravagant glamor, constantly arouses more profound resentment. Applications like BeReal also play an essential role in shaping the worldview of younger users. As extensive research has noted how harmful it can be to a young person's self-image, if only influencers blessed with superhuman physiques and mostly perfect lives can be seen in the feed."
            source1='BeReal'
            source1link='https://bere.al/en'
            source2='Helsingin Sanomat'
            source2link='https://www.hs.fi/nyt/art-2000009004842.html'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Pukeutuisitko'
            bgImage= '/images/DNA_trend_15.jpg'
            bgImageMobile='/images/DNA_019_mobile.jpg'
            heading= 'Would you wear virtual Gucci?'
            paragraph1= "Will you wear a virtual clothing piece in the next official company portrait? This could be our reality soon, as many virtual clothing manufacturers are pouring into the market. Depending on users' needs, the garment can be either added afterward or goes on the user digitally. The possibilities of usage dimensions, for example, online clothing stores, are enormous."
            paragraph2= "In video games, the sale of virtual clothes has been commonplace and a profitable business for years. For example, in popular MMO multiplayer games such as World of Warcraft, one absolute joy for users is that the appearance and clothing of their own game character can be modified to their liking. "
            paragraph3= " There is also trade in character accessories, as the trade in weapon textures for the action game Counter-Strike, for example, has grown into a multi-million-dollar business. Companies investing in virtual clothes are also confident that devices enabling augmented reality will become a part of our everyday life before long. In this case, the digital clothing pieces selected by the user would be visible through the smart lenses of other users. When everyone is wearing virtual glasses, everyone can wear virtual clothes."
            source1='Kauppalehti'
            source1link='https://www.kauppalehti.fi/uutiset/virtuaaliset-vaatteet-ja-massamuodin-kuolema-uusi-nayttely-valottaa-muodin-tulevaisuuden/588d13c6-76f7-4ce7-9bbd-930bb5b8d911'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={6}/>

        <Text
          maxwidth='1120px'
          header='“Vegan food as a trend has survived on the surface for a long time just by being vegan. Now, however, consumers have become more interested in what is in the food and its environmental effects.”'
          paragraph='Tytti-Lotta Ojala, Chief Design Officer, Nordic Umami Company'
          headTextColor='#DA0070'
          paragraphMaxwidth= '730px'
        />

        <Spacer size={6}/>

         <ImageWithParagraph
            id='Luo'
            bgImage= '/images/DNA_trend_16.jpg'
            bgImageMobile='/images/DNA_020_mobile.jpg'
            heading= 'Create, play and remix'
            paragraph1= "The remote community made possible by games and social media platforms rose to a new value during the pandemic years spent in isolation. However, this culture continues to develop even after the pandemic: people know how to demand broader social dimensions in the content they consume. On the business side, commonality creates almost endless room for growth because skillfully developed social content  can bring net income for its creators for decades."
            paragraph2= "The Finnish growth company HypeHype aims at the market niche between social gaming and social media. The game studio, which consists of veterans of the game industry, is currently developing the revolutionary HypeHype mobile application, where TikTok-style fast-paced social swiping and Instagram remixing go hand-in-hand with games like Minecraft that encourage creativity and experimentation."
            paragraph3= 'The most crucial feature of HypeHype is that users can also "remix" content made by others. If, for example, a technically addictive but visually less inspiring car game comes up, the user can transfer the content to their own editor and start modifying it to their liking. At their best, community-based games like HypeHype generate a snowball effect of creativity, whereby endless new versions are born from one initial idea.'
            source1='Venture Beat'
            source1link='https://venturebeat.com/games/hypehype-lets-everyone-create-remix-and-play-games-on-phones/'
            source2='TechCrunch'
            source2link='https://techcrunch.com/2022/01/20/instagram-now-allows-creators-to-remix-any-public-videos-not-just-reels/'
            bgColor= '#fff'
            direction= 'ltr'
            source='Source:'
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            id='Mitä'
            bgImage= '/images/DNA_trend_17.jpg'
            bgImageMobile='/images/DNA_021_mobile.jpg'
            heading= 'What wine would you recommend with my 3D-printed veggie steak?'
            paragraph1= "The next hot potato in the Finnish food market is 3D-printed vegetable meat. Making the traditional diet plant-based is a vital move both from the point of view of individual well-being and global sustainable development.  For many, however, the vegetarian versions offered as a substitute for meat are appalling, both in terms of taste and, especially, mouthfeel."
            paragraph2= '3D-printed vegetable meat is not immensely as sci-fi a phenomenon as, for example, artificial meat grown in a laboratory. In practice, 3D printing in the context of food preparation means that the printed vegetable protein is "constructed" in such a way that it resembles its animal-derived prototype almost perfectly in terms of structure, taste, and forms of use.'
            paragraph3= 'As the birthplace of hit products such as vöner and rolled oats, Finland has repeatedly been a trendsetter in developing vegetable proteins. In the field of printed meat, Finland is also at the forefront of development. The 3D-printed vegetable meat arrived in a few Finnish restaurants in the fall of 2022 and will be on store shelves in the spring or summer of 2023. Do you dare to taste?'
            source1='Yle'
            source1link='https://yle.fi/uutiset/3-12542292'
            source2='Avec Media'
            source2link='https://www.avecmedia.fi/keittio/3d-printattua-vegaanista-lihaa-myydaan-nyt-ravintolassa-suomessa-maistoimme/'
            bgColor= '#fff'
            direction= 'rtl'
            source='Source:'
        >
        </ImageWithParagraph>

        <Spacer size={2}/>

        <Artical4En />

        <Spacer size={2}/>
        <Quiz 
        id='quiz4'
        questionNumber="Quiz4"
        question1='How much do changes in everyday digital life impact your business?'
        q1answer1='Significantly'
        q1answer2='Somewhat'
        q1answer3='Slightly'
        q1answer4='Barely at all'
        q1answer5='I can’t say'
        question2='Which of these driving forces is most significant to you?'
        q2answer1='Keeping it real on social media'
        q2answer2='Virtual wardrobes'
        q2answer3='Remixing content'
        q2answer4='3D printed veggie meat'
        insetructions='Find out what others think by submitting your answers.'
        submitBtn='SUBMIT'
        chartHeadlin='This is how others responded'
        />
        <Spacer size={2}/>
      </div>
      </div>
      <Footer
        more='Explore more:'
        logo='/images/DNA_Business_logo_ENG.svg'
        width={150}
        height={150}
      />
    </div>
  );
};

export default Index;
