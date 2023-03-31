/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import AreticalWithToggle from '../../../modules/ArticalWithToggle';
import css from './style.module.scss';
import Spacer from '../../../modules/Spacer';
const Artical1En = ({
 
}) => {
  return (
   <AreticalWithToggle
   bgImage= '/images/Valli_Katriina_006_RGB.jpg'
   heading= 'AI: friend or foe? –Expert busts five myths about AI '
   paragraph1= 'AI makes work more efficient, but it also raises fears and prejudices. How should companies approach AI? Do we need massive resources to support its deployment? Katriina Valli, the founder of AI4value, a company that develops AI solutions, dissects myths that prevent companies from adopting AI to support their operations.'
   direction= 'rtl'
   id='artical1'
   readingTime='Reading time: 4 minutes'
   >
    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Finland bets big on AI development</h3>
        <p>Artificial intelligence (AI), in simple terms, is the ability of a computer or software to make intelligent decisions. A more precise definition is difficult to give because defining intelligence is challenging. Deploying AI in a business context has been around for a long time. It can be used in any industry as long as a sufficient amount of quality data can be collected. </p>
      </div>
      <div className={css.colTwo}>
        <p>According to AI expert Katriina Valli, there are around 400 AI providers in Finland. At a national level, Finland is well on track with AI – and ahead of other Nordic countries.</p>
        <p>In the public sector, for example, Helsinki and Uusimaa Hospital District uses advanced solutions, as do the financial and insurance industries. In insurance companies, for example, decisions on compensation for minor injuries can already be made entirely without a human touch. Many industrial companies are still in their infancy, and the use and capabilities of AI in SMEs vary widely.  </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>“Artificial intelligence walks and talks on data. Most time is usually spent on collecting and delivering the data.” </h3>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <p>Many industrial companies are still in their infancy, and the use and capabilities of AI in SMEs vary widely. </p>
        <p>“Often, early adopters of new technologies lose interest after the initial enthusiasm. Many projects are precision tools, but the broader strategic view of AI use is limited,” says Valli. </p>
      </div>
      <div className={css.colTwo}>
        <p>Valli´s own company, AI4Value, focuses on services such as natural language interpretation and analysis, i.e., neuro-linguistic programming, NLP. An application developed by the company interprets customer feedback and develops answers to the most frequently asked questions.</p>
        <p>“It can also interpret the answers and modify the tone of the answers according to how angry the customer is,” says Valli.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Artificial intelligence is true, but many beliefs surrounding it are myths</h3>
        <p>So what prevents companies from seizing the potential of AI? According to a <a href='https://advisory.kpmg.us/content/dam/advisory/en/pdfs/2021/thrivingai2021.pdf' target='blanck'>KPMG study </a> security, privacy, and ethics are the main concerns in the context of AI. Up to 69 per cent of survey respondents also found it challenging to keep up with the constantly evolving AI landscape. In this light, it is no wonder that all sorts of unsubstantiated beliefs about AI abound. </p>
      </div>
      <div className={css.colTwo}>
        <p>Valli encourages people to explore the possibilities of AI bravely.   </p>
        <p>“Learning about the essence of AI is much more effective by experimenting than by sitting in seminars and training sessions, so go for it!”</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>Five myths about artificial intelligence:</h3>
    </div>

    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>1. Only large international companies can use AI</h3>
        <p>AI has been made to sound more complex than it is. Stories about AI are about world peace or, at the wildest, about a Terminator strike against humanity. Even on a smaller scale, the buzz around AI is saturated with the fear of a heavy, complicated, complex and expensive endeavour that is not worth embarking on at this stage – if at all.</p>
        <p>“The goal of AI is usually to make operations more efficient and deliver business benefits. In a way, it's a hammer that always hits the nail, not the thumb. It benefits businesses of all sizes,” Valli says.</p>
      </div>
      <div className={css.colTwo}>
        <p>But it's good to be careful when choosing a service provider. AI-washing, i.e. operators selling AI who do not offer AI or know how to implement the required projects, has also entered the industry.</p>
        <p>“There are players in the industry who think that if someone wants to buy, they will be sold – something. But there is research evidence that specialised players can provide the best solutions for AI projects,” Valli says.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>2. AI requires skills and people</h3>
        <p>According to Valli, an employee with the right background and personality will be transformed into an AI expert in a company within two months. It's all about solving everyday problems.</p>
        <p>“A person interested in mathematics and statistics is well suited to machine learning. Computer linguists can easily be turned into AI specialists. If you also have the enthusiasm for code, it doesn't take much else,” Valli says.</p>
      </div>
      <div className={css.colTwo}>
        <p>In two months, the employee will learn what AI is, what solutions exist, how to code and how to do practice runs. </p>
        <p>“I know of a public sector organisation that turned summer interns into effective data analysts and AI coders within a short training period,” Valli says. </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>3. AI is a substantial financial and time investment   </h3>
        <p>With current agile approaches, a company can outsource the building of AI-intensive functions. It takes a few hours of your own organisation's time. If you have a computing power of a decent laptop and a well-functioning network, you have all the necessary tools for data processing.</p>
        <p>Valli states that with an agile approach, the timeframe could look like this: a two-hour start-up session, plus a person with some time to answer questions, and weekly half-hour Scrum sessions to ensure that the solution is moving in the right direction all the time.    </p>
      </div>
      <div className={css.colTwo}>
        <p>“AI walks and talks on data. Most time is usually spent collecting and delivering the data,” she says.</p>
        <p>To ensure that AI serves a company's operations and goals, the company needs to define the need: what the AI will take care of and why. What is the successful outcome? What is the environment in which the AI will operate? How quickly can the data be made available? </p>
        <p>“The worst situation for an AI provider is if a customer wants AI because the other guys have it. They haven't defined the need, and the service provider has to make something out of thin air or refuse to take up the assignment. It's worth remembering that AI procurement is not a project for the IT department but a business-driven activity,” Valli says.    </p>
      </div>
    </div>
    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>4. AI needs a lot of structured data </h3>
        <p>“Many companies are ashamed that their data is scattered here and there, in galaxies far, far away. That shame is unnecessary. It doesn't have to be perfect,” Valli consoles.</p>
      </div>
      <div className={css.colTwo}>
        <p>“You don't have to go crazy defining and classifying data. Artificial intelligence does the classifications to a very high level. I did encounter one unsurpassable hurdle in my work once. No AI can reliably read scanned post-it notes with scribbled on with bad handwriting,” she says.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>5. AI becomes too autonomous</h3>
        <p>In AI mythology, the AI becomes too clever, takes on human-like characteristics and turns against its developer. There is a lot of talking about the singularity of AI, but according to Valli, in expert scenarios, AI does not take over and start destroying the world on its own. </p>
      </div>
      <div className={css.colTwo}>
        <p>“They're not built to be death machines. AI learns from what data it's fed. AI is a servant, not a master,” Valli says.</p>
      </div>
    </div>

   </AreticalWithToggle>
  );
};

Artical1En.propTypes = {

};

Artical1En.defaultProps = {


};

export default Artical1En;
