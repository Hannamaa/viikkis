//tänne REST-kutsut, haesanonnat ja luosanonta
import axios from 'axios'
const apiUrl = "http://localhost:8080/api/serveri/"

//hae kaikki Topicit
async function haeTopicit(){
    let res = await axios.get(apiUrl)
    return res.data
}

// // //luo uusi Topic
async function luoTopic(t) {
    await axios.post(apiUrl, t)
    .then (res => {
    return res.data;
    });
}

// // //Poista Topic id:llä
async function poistaTopic(id){
    await axios.delete (apiUrl + id)
    .then(res=> {
    return res.data;
});
}


export {haeTopicit, luoTopic, poistaTopic }
// , 