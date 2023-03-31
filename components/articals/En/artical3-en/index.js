/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import AreticalWithToggle from '../../../modules/ArticalWithToggle';
import css from './style.module.scss';
import Spacer from '../../../modules/Spacer';


const Artical3En = ({
 
}) => {
  return (
   <AreticalWithToggle
   bgImage= '/images/Markko.jpg'
   heading= 'Traditional industries could take a page from the book of software businesses – the anatomy of a winning business model '
   paragraph1= 'Which fundamentals must a company master to be successful? Are passion and the desire to grow enough for a recipe for world conquest? Markko Vaarnas, growth entrepreneur and board professional, shares his thoughts on the functional growth company concept and shares his tips for identifying successful companies. '
   direction= 'rtl'
   id='artical3'
   readingTime='Reading time: 3 minutes'
   >
    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Descension fuels descension</h3>
        <p>In recent times the world has been shaken by a pandemic, climate change, material shortages, strikes hitting critical industries, and inflamed geopolitical situations – not to mention the weakened state of global economics, and inflation. So, it's no wonder resources in the startup and growth company fields have also decreased or experienced dramatic cuts.</p>
      </div>
      <div className={css.colTwo}>
        <p>“Until about a year ago, the playing field was very different: the valuation coefficients were large, and therefore financing rounds were also large-scale: at the time, startups showed excellent growth potential. Now the situation is different, and the number of funding rounds has also decreased," describes Markko Vaarnas.</p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>

    <Spacer size={2}/>

      <div className={css.quot}>
        <h3>“To succeed, companies must have their stuff together.” </h3>
      </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <p>Many of Europe's most well-known startup companies have had to significantly reduce operational expenses by cutting their workforce and other operational resources. After acquiring high valuation funding, companies needed to show distinct signs of returns. Usually in these situations more personnel would’ve been swiftly recruited. However, when funds run dry and resources need to be cut, personnel costs will be adjusted accordingly, and layoffs are inevitable.  </p>
      </div>
      <div className={css.colTwo}>
        <p>“Capital investors are bold in trying to anticipate and predict future directions, and even to play the field against one another. When dark clouds loom on the horizon, they will also be met with swift decisiveness.” </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Lead with data – and repeat</h3>
        <p>Vaarnas deals with many companies and helps growth companies develop their business. He emphasizes that his frame of reference for the business world comes from software and service-based companies on the B2B side, with which he deals the most. Through which factors does he evaluate the companies' future potential?</p>
      </div>
      <div className={css.colTwo}>
        <p>“One of the most important signs is that entrepreneurs are willing to develop their business and take advice to heart. Additionally, important factors for me are positivity from the company's leaders through to the entire team, high levels of ambition and a desire to change the world,” says Vaarnas.  </p>
        <p>In addition to aforementioned features, Vaarnas also pays attention to the most concrete factors: he believes in data-driven management. He supports a model in which the company's financial and operational activity data are visible. This enables the creation of key metrics that enable better company management. </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.quot}>
      <h3>“One of the most important signs is that entrepreneurs are willing to develop their business and take advice to heart.” </h3>
    </div>

    <Spacer size={2}/>
    <div className={css.content}>
      <div className={css.colOne}>
        <p>As an investor, Vaarnas naturally pays attention to key figures, such as the structure of the sales margin, fixed costs in relation to the company's growth stage, and the unit costs of growth and customer acquisition. </p>
        <p>However, Vaarnas emphasizes one thing above all others: the most important thing is to form a reproducable business model, continuous in nature. A model where the customer remains in business with the company for five or ten years is financially more valuable than individual project sales. This is what Vaarnas calls the customer's lifetime value. </p>
      </div>
      <div className={css.colTwo}>
        <p>“When customer activity is continuous, it also yields opportunities for foresight. Customer churn, turnover and margins become more predictable. It is even better if the product or service can be reproduced easily, in which case the business is more easily scalable.”</p>
        <p>Broadening to international commerce always involves risks, the monitoring and management of which are critically important. According to Vaarnas, the most common mistake is underestimating the difficulty and costs of the internationalization process. </p>
      </div>
    </div>

    <Spacer size={2}/>

    <div className={css.breakLineContainer}>
      <div className={css.breakline}></div>
    </div>
    
    <Spacer size={2}/>

    <div className={css.content}>
      <div className={css.colOne}>
        <h3>Could more traditional industries take a look at the software business? </h3>
        <p>To sum up Vaarna's tips, behind every well-groomed company is an excellent and development-ready team, accurate data to support management, a continuous business model and foresight. Is this enough? </p>
        <p>“To succeed, companies must have their stuff together: the concept is fully-formed and tested with a large enough number of customers, the business has been validated, client retention has been established, reproduceable avenues have been located, and the scaling of operations is underway via creating best practices and documenting them,” explains Vaarnas. </p>
      </div>
      <div className={css.colTwo}>
        <p>“One future trend in the business world could be that traditional industries could try the software business model, whereby the goods are offered as a package, and the goal is frequent and long-term billing, resulting in maximizing the life cycle income. A good plan is to try to make the products and services as replicable as possible, and to develop a business model for the company where the cost of acquiring customers is very reasonable concerning the life cycle return,” Vaarnas sums up. </p>
      </div>
    </div>
   </AreticalWithToggle>
  );
};

Artical3En.propTypes = {

};

Artical3En.defaultProps = {


};

export default Artical3En;
