/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import css from './style.module.scss';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from 'react';
import { updateSliderData, updateChoicesData, getSliderData, getMiltiChoiceData } from '../../../util/API/fireBase';
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer
} from "recharts";

import {motion, MotionConfig, AnimatePresence} from "framer-motion";
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';



const Quiz = ({
  questionNumber,
  question1,
  q1answer1,
  q1answer2,
  q1answer3,
  q1answer4,
  q1answer5,
  question2,
  q2answer1,
  q2answer2,
  q2answer3,
  q2answer4,
  q2answer5,
  submitBtn,
  insetructions,
  maxwidth,
  paragraphMaxwidth,
  headTextColor,
  chartHeadlin,
  id,
  className,
}) => {

  // getting the slider results from firebase 
  const getSliderResultArray = async () => {
    await getSliderData(questionNumber).then((res) => {

        setSliderData([
          {
            name: q1answer1,
            pv: res[0],
          },
          {
            name: q1answer2,
            pv: res[1],
          },
          {
            name: q1answer3,
            pv: res[2],
          },
          {
            name: q1answer4,
            pv: res[3],
          },
          {
            name: q1answer5,
            pv: res[4],
          },
        ]) ;
        console.log(res);
    });
  };


  const getMiltiChoiceResultArray = async () => {
    await getMiltiChoiceData(questionNumber).then((res) => {

      setMiltiChoiceData([
          {
            name: q2answer1,
            pv:  Math.round((res[0] * 100) / res.reduce((a, b) => a + b, 0)),
          },
          {
            name: q2answer2,
            pv: Math.round((res[1] * 100) / res.reduce((a, b) => a + b, 0)),
          },
          {
            name: q2answer3,
            pv: Math.round((res[2] * 100) / res.reduce((a, b) => a + b, 0)),
          },
          {
            name: q2answer4,
            pv: Math.round((res[3] * 100) / res.reduce((a, b) => a + b, 0)),
          },
          {
            name: q2answer5,
            pv: Math.round((res[4] * 100) / res.reduce((a, b) => a + b, 0)),
          },
        ]) ;
    });
  };

  const [sliderValue, setSliderValue] = useState(3);
  const [sliderData, setSliderData] = useState([]);
  const [miltiChoiceData, setMiltiChoiceData] = useState([
    {
      name: q2answer1,
      pv: 1,
    },
    {
      name: q2answer2,
      pv: 1,
    },
    {
      name: q2answer3,
      pv: 1,
    },
    {
      name: q2answer4,
      pv: 1,
    },
    {
      name: q2answer5,
      pv: 1,
    },
  ]);

  const [sliderAnswer, setSliderAnswer] = useState();
  const [miltiChoiceValue, setMiltiChoiceValue] = useState(1);
  const [displayChart, setDisplayChart] = useState(false);
  const [ismobile, setIsmobile] = useState(false);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [btn5, setBtn5] = useState(false);
  const router = useRouter();

  
  const handelMiltiChoiceChange =  (event) => {
    setMiltiChoiceValue(event.target.value);
    
    switch (event.target.value) {
      case "1":
        setBtn1(true);
        setBtn2(false);
        setBtn3(false);
        setBtn4(false);
        setBtn5(false);
        break;
      case "2":
        setBtn1(false);
        setBtn2(true);
        setBtn3(false);
        setBtn4(false);
        setBtn5(false);
        break;
      case "3":
        setBtn1(false);
        setBtn2(false);
        setBtn3(true);
        setBtn4(false);
        setBtn5(false);
        break;
      case "4":
        setBtn1(false);
        setBtn2(false);
        setBtn3(false);
        setBtn4(true);
        setBtn5(false);
        break;
      case "5":
        setBtn1(false);
        setBtn2(false);
        setBtn3(false);
        setBtn4(false);
        setBtn5(true);
        break;
    
      default:
        break;
    }
  };

  const handelsubmit = async  () => {
    await updateSliderData(questionNumber, sliderValue);
    await updateChoicesData(questionNumber, miltiChoiceValue);
    setDisplayChart(true);
    getSliderResultArray();
    getMiltiChoiceResultArray();
    const mainPath = router.asPath.split('#')[0];
    router.replace(`${mainPath}#${id}`);
  };


  const handleSlideChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    if(sliderValue === 1) {
      setSliderAnswer(q1answer1);
    }
    if(sliderValue === 2) {
      setSliderAnswer(q1answer2);
    }
    if(sliderValue === 3) {
      setSliderAnswer(q1answer3);
    }
    if(sliderValue === 4) {
      setSliderAnswer(q1answer4);
    }
    if(sliderValue === 5) {
      setSliderAnswer(q1answer5);
    }
  }, [sliderValue]);


  useEffect(() => {
    if(isMobile){
      setIsmobile(true);
    }
  }, []);


  return (
    <div id={id} className={css.quiz} style={!displayChart ? {background: '#DA0070' } : {background: '#fff'} }>
      <div className={`${css.inner} ${className}`} style={!!maxwidth ? {maxWidth: maxwidth} : null }>
      <AnimatePresence>
        {!displayChart ?  
        
        <motion.div    
        key={1}      
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }} 
        className={css.quizContainer}>

          <div className={css.firstQuestionContainer} style={!!paragraphMaxwidth ? {maxWidth: paragraphMaxwidth} : null }>
            <div className={css.question}>
              <h2 style={!!headTextColor ? {color: headTextColor} : null }>{question1}</h2>
            </div>
            <div className={css.slider}>
            <Slider
              value={sliderValue}
              aria-label="Temperature"
              defaultValue={sliderValue}
              step={1}
              marks
              onChange={handleSlideChange}
              min={1}
              max={!!q1answer5 ? 5 : 4}
              sx={{
                height: 8,
                padding: '4em 0 1em 0',
                minWidth: 250,
                width: '80%',
                color: '#FFFFFF',
                '& .MuiSlider-thumb': {
                  width: 40,
                  height: 40,
                },
                '& .css-14pt78w-MuiSlider-rail':{
                  opacity: 1,
                },
                '& .css-b04pc9':{
                  opacity: 1,
                }
              }}
              />
            </div>
            
            <div>
              {!ismobile ? <div className={css.sliderAnswers}>

                <div>
                  <p>{q1answer1}</p>
                </div>
                <div>
                  <p>{q1answer2}</p>
                </div>
                <div>
                  <p>{q1answer3}</p>
                </div>
                <div>
                  <p>{q1answer4}</p>
                </div>
                { !!q1answer5 && 
                  <div>
                  <p>{q1answer5}</p>
                  </div>
                }

              </div> :  <div><p>{sliderAnswer}</p></div>   
              }

            </div>
          </div>

          <div className={css.breakLine}>
          </div>

          <div className={css.secondQuestionContainer} style={!!paragraphMaxwidth ? {maxWidth: paragraphMaxwidth} : null }>
            <div className={css.question}> 
              <h2 style={!!headTextColor ? {color: headTextColor} : null }>{question2}</h2>
            </div>
            <div className={css.seeWhatOtherAnswer}>
              <h4>{insetructions}</h4>
            </div>
            <div className={css.muiltyChoiceAnswers}>
              <motion.button whileHover={{scale: 1.03, transition: { duration: .4 }}} className={btn1 ? css.btnActive : undefined} onClick={handelMiltiChoiceChange} value={1}>{q2answer1}</motion.button>
              <motion.button whileHover={{scale: 1.03, transition: { duration: .4 }}} className={btn2 ? css.btnActive : undefined} onClick={handelMiltiChoiceChange} value={2}>{q2answer2}</motion.button>
              <motion.button whileHover={{scale: 1.03, transition: { duration: .4 }}} className={btn3 ? css.btnActive : undefined} onClick={handelMiltiChoiceChange} value={3}>{q2answer3}</motion.button>
              <motion.button whileHover={{scale: 1.03, transition: { duration: .4 }}} className={btn4 ? css.btnActive : undefined} onClick={handelMiltiChoiceChange} value={4}>{q2answer4}</motion.button>
              {!!q2answer5 && <motion.button whileHover={{scale: 1.03, transition: { duration: .4 }}} className={btn5 ? css.btnActive : undefined} onClick={handelMiltiChoiceChange} value={5}>{q2answer5}</motion.button>}
            </div>
          
          </div>
          <div>
          <motion.button whileHover={{scale: 1.03, transition: { duration: .4 }}} className={css.submitBtn} onClick={handelsubmit}>{submitBtn}</motion.button>
          </div>
        </motion.div>  :
         
         <motion.div    
         key={2}      
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { duration: 1 }}}
         exit={{ opacity: 0 }}      
         className={css.charts}  
         style={displayChart && {color: '#000'}  }>

          <div className={css.chartTitle}>
            <h2>{chartHeadlin}</h2>
          </div>
          <div className={css.questionChart}>
            <p>{question1}</p>
          </div>
          <div className={css.areaCharts}>
          <ResponsiveContainer width="100%" height="80%">
              <AreaChart
                  width={500}
                  height={300}
                  data={sliderData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 40
                  }}
                >
                <defs>
                    <linearGradient gradientTransform="rotate(270)" id="colorUv" x1="0%" y1="80%" x2="0%" y2="0%" >
                      <stop offset="-1.17%" stopColor="#DA0070" stopOpacity={1} />
                      <stop offset="35.81%" stopColor="#E772AE" stopOpacity={1} />
                      <stop offset="98.83%" stopColor="#F5F5F5" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <XAxis axisLine={false} tickLine={false} tick={{ transform: 'translate(0, 30)' }} interval="preserveStartEnd" dataKey="name"  />
                  <Area dataKey="pv" fill="url(#colorUv)" stroke="none" fillOpacity={1} minPointSize={5}>
                  </Area>
                </AreaChart>
          </ResponsiveContainer>

          </div>
        <MotionConfig transition={{duration: 1 }}>
          <div className={css.questionChart}>
            <p>{question2}</p>
          </div>
          <div className={css.barChartContainer}>
                    <div className={css.barAndTextContainer}>
                      <div className={css.barText}>
                        <p>{q2answer1}</p>
                      </div>
                      <div className={css.barContainer}>
                        <motion.div animate={{width: `${miltiChoiceData[0].pv}%`}} className={css.bar} style={{width: `${miltiChoiceData[0].pv}%`} }>

                        </motion.div>
                        <div className={css.barPrecentage}>
                          {`${miltiChoiceData[0].pv}%`}
                        </div>
                      </div>
                    </div>
                    <div className={css.barAndTextContainer}>
                      <div className={css.barText}>
                        <p>{q2answer2}</p>
                      </div>
                      <div className={css.barContainer}>
                        <motion.div animate={{width: `${miltiChoiceData[1].pv}%`}} className={css.bar} style={{width: `${miltiChoiceData[1].pv}%`} }>

                        </motion.div>
                        <div className={css.barPrecentage}>
                          {`${miltiChoiceData[1].pv}%`}
                        </div>

                      </div>
                    </div>
                    <div className={css.barAndTextContainer}>
                      <div className={css.barText}>
                        <p>{q2answer3}</p>
                      </div>
                      <div className={css.barContainer}>
                        <motion.div animate={{width: `${miltiChoiceData[2].pv}%`}} className={css.bar} style={{width: `${miltiChoiceData[2].pv}%`} }>

                        </motion.div>
                        <div className={css.barPrecentage}>
                          {`${miltiChoiceData[2].pv}%`}
                        </div>

                      </div>
                    </div>
                    <div className={css.barAndTextContainer}>
                      <div className={css.barText}>
                        <p>{q2answer4}</p>
                      </div>
                      <div className={css.barContainer}>
                        <motion.div animate={{width: `${miltiChoiceData[3].pv}%`}} className={css.bar} style={{width: `${miltiChoiceData[3].pv}%`} }>

                        </motion.div>
                        <div className={css.barPrecentage}>
                          {`${miltiChoiceData[3].pv}%`}
                        </div>
                      </div>

                    </div>
                    {!!q2answer5 &&  <div className={css.barAndTextContainer}>
                      <div className={css.barText}>
                        <p>{q2answer5}</p>
                      </div>
                      <div className={css.barContainer}>
                        <motion.div animate={{width: `${miltiChoiceData[4].pv}%`}} className={css.bar} style={{width: `${miltiChoiceData[4].pv}%`} }>

                        </motion.div>
                        <div className={css.barPrecentage}>
                          {`${miltiChoiceData[4].pv}%`}
                        </div>
                        </div>
                        </div>
                        
                         }
                         
          </div>
          </MotionConfig>
         </motion.div>
        
        }
       
       </AnimatePresence>
      </div>
    </div>
  );
};

Quiz.propTypes = {
  children: PropTypes.any,
  headTextColor: PropTypes.string,
  questionNumber: PropTypes.string,
  question1: PropTypes.string,
  q1answer1: PropTypes.string,
  q1answer2: PropTypes.string,
  q1answer3: PropTypes.string,
  q1answer4: PropTypes.string,
  q1answer5: PropTypes.string,
  question2: PropTypes.string,
  q2answer1: PropTypes.string,
  q2answer2: PropTypes.string,
  q2answer3: PropTypes.string,
  q2answer4: PropTypes.string,
  q2answer5: PropTypes.string,
  submitBtn: PropTypes.string,
  chartHeadlin: PropTypes.string,
  insetructions: PropTypes.string,
  maxwidth: PropTypes.string,
  paragraphMaxwidth: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

Quiz.defaultProps = {
  children: null,
  headTextColor: null,
  paragraphMaxwidth: null,
  questionNumber: null,
  question1: null,
  q1answer1: null,
  q1answer2: null,
  q1answer3: null,
  q1answer4: null,
  q1answer5: null,
  question2: null,
  q2answer1: null,
  q2answer2: null,
  q2answer3: null,
  q2answer4: null,
  q2answer5: null,
  submitBtn: null,
  chartHeadlin: null,
  insetructions: null,
  maxwidth: null,
  id: null,
  className: null,

};

export default Quiz;
