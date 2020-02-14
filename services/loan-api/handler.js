//Load libs from ROOT package.json
const moment = require('moment');

//Load common libraries.
const {
  fnA1,
  fnA2,
  fnA3
} = require('../../libs/libA.js');

//Load a module defined only for this services.
const dilbert = require('dilbert');
  
//Use service module.
const getDilbert = () => new Promise((resolve,_) => dilbert.getToday((image) => resolve(image)));

//Run
const run = async ()=>{

  const today  = moment().format('MMMM Do YYYY, h:mm:ss a');
  const result = fnA1()+fnA2()+fnA3();
  const quote  = await getDilbert();

  console.log('Loan api', result);
  console.log('Today is', today);
  console.log('Dilbert',  quote);

  return result;

}

exports.handler = run;