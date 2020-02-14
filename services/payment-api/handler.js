//Load libs from ROOT package.json
const moment = require('moment');

//Load common libraries.
const {
  fnB1,
  fnB2
} = require('../../libs/libB.js');

//Load a module defined only for this services.
const giveMeAJoke = require('give-me-a-joke');
  
//Use service module.
const getJoke = () => new Promise((resolve,_) => giveMeAJoke.getRandomDadJoke ((joke)=> resolve(joke)));

//Run
const run = async ()=>{

  const today  = moment().format('MMMM Do YYYY, h:mm:ss a');
  const result = fnB1()+fnB2();
  const joke   = await getJoke();

  console.log('Loan api', result);
  console.log('Today is', today);
  console.log('The joke is',  joke);

  return result;

}

exports.handler = run;