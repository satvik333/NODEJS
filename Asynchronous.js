setTimeout(async ()=>{
    console.log('TIMEOUT')
},3000)

async function Hii(){
console.log("HIII")
}
Hii()


const axios = require('axios');

(async () => {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    console.log(response.data.url);
    console.log(response.data.title);
  } catch (error) {
    console.log(error.response.body);
  }
})();

