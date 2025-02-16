import { useEffect, useTransition, useState } from "react";
import { NavLink } from "react-router-dom";
import {Loading} from "../Layout/Loader";
import { getcountrydata } from "../Api/Image";
import { Searchfilter } from "../Layout/Searchfilter";

export default function Country(){

    const[ispending, starttransition] = useTransition();
    const[countries, setcountries] = useState([])

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");


    useEffect(()=>{
        starttransition(async()=>{
            const res = await getcountrydata();
            // console.log(res.data);
            setcountries(res.data);
        })
    }, [])

    if(ispending){
        return(
            <Loading/>
        )
    }


    const searchCountry = (country) => {
        if (search) {
          return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
      };
    
      const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter;
      };
    
      // here is the main logic
      const filterCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
      );

    // const [loading,setloading] = useState(false);
    // useEffect(() => {
    //     const fetchData = async () => {
    //       setloading(true); 
    //       try {
    //         const response = await axios.get(getcountrydata());
    //         console.log(response);
    //         setData(response.data); 
    //       } catch (error) {
    //         console.log(error);
    //       } finally {
    //         setloading(false); 
    //       }
    //     };
    //     fetchData(); 
    //   }, []);

    //   if(loading){
    //     return(
    //         <Loading/>
    //     )
    //   }


    return(
        <div>

                <Searchfilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countries={countries}
                setcountries={setcountries}
                />

        <div className="carddiv grid grid-cols-4 justify-items-center content-start gap-y-6 pt-12 pb-12">
            
            {filterCountries.map((currcountry, index)=>{
                return(
                <div key={index} style={{ height:"100%", width:"50%" }} className="flex flex-col text-center gap-y-2 rounded-sm border-2 border-black  border-solid bg-sky-100">

                    <img style={{width:"100%", height:"40%"}} src={currcountry.flags.png}/>
                    
                    <h1 style={{fontSize:"18px"}}><b>{currcountry.name.common}</b></h1>
                    <h2>Capital :  <b>{currcountry.capital[0]}</b></h2>
                    <h2>Region : <b>{currcountry.region}</b></h2>
                    <h2>Population : <b>{currcountry.population.toLocaleString()}</b></h2>
                    <hr/>
                    <NavLink to={`/country/${currcountry.name.common}`}>
                    
                    <button style={{border:"2px solid grey", borderRadius:"4px", cursor:"pointer"}}>More details</button>
                    </NavLink>
                </div>
                )
            })}
        </div>
        </div>
    )
}