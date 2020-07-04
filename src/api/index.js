import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

function tester(value){
    console.log(value);
}

export const fetchData = async () =>{
    try{
        const response = await axios.get(url);
        tester(response);
        return response;

    }catch(error){

    }
}


