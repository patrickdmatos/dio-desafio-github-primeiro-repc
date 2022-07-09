const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CATBTN = document.getElementById('change-cat')
const CATIMG = document.getElementById('cat')

const getCats = async() => {
    try{
        const DATA = await fetch(BASE_URL);
        const JSON = await DATA.JSON();

        return JSON.webpurl;
    }
    catch (e){
        console.log(e.message);
        }
    };

const loading = async() => {
    CATIMG.src = await getCats();
}

CATBTN.addEventListener('click', loading);

loading();