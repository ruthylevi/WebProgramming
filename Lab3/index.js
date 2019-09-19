const axios = require('axios');

async function getPersonById(id){
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        return (data[id]);
        // return data // this will be the array of people
      } catch (error) {
          console.error(error);
      }
    }
    

  async function lexIndex(index){
    try {

    } catch (error) {
        console.error(error);
    }
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data // this will be the array of people
  }


  async function firstNameMetrics(){
    try {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        return data // this will be the array of people
    } catch (error) {
        console.error(error);
    }
}
 

  async function shouldTheyGoOutside(firstName, lastName){
    try {

    } catch (error) {
        console.error(error);
    }   const { peopledata } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    const { weatherdata } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    return peopledata, weatherdata // this will be the array of people and weather, respectively
  }


  async function whereDoTheyWork(firstName, lastName){
    try {

    } catch (error) {
        console.error(error);
    }  
const { peopledata } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
const { workdata } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    return peopledata, workdata // this will be the array of people and work, respectively
  }


  async function findTheHacker(ip){
    try {
        const { peopledata } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        const { workdata } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
        return peopledata, workdata // this will be the array of people and work, respectively
    } catch (error) {
        console.error(error);
    }
}


  module.export = {
      getPersonById: getPersonById,
      lexIndex: lexIndex,
      firstNameMetrics: firstNameMetrics,
      shouldTheyGoOutside: shouldTheyGoOutside,
      whereDoTheyWork: whereDoTheyWork,
      findTheHacker: findTheHacker
  }