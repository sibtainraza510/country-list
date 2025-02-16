import axios from "axios";
const api = axios.create({
    baseURL : "https://restcountries.com/v3.1"
});

export function getcountrydata(){
    return (
        api.get("/all?fields=name,population,region,capital,flags")
    )
};



// HTTP GET METHOD fro the indvi. country name
export const getcountryinddata = (name) => {
    return( api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    ));
  };