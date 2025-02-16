import {useParams, NavLink} from "react-router-dom"
import {Loading} from "../Layout/Loader";
import { useEffect, useTransition, useState } from "react";
import { getcountryinddata } from "../Api/Image";
export const Countrydetails = ()=>{
    const params = useParams();
    // console.log(params);


    const[ispending, starttransition] = useTransition();
        const[country, setcountry] = useState();
        useEffect(()=>{
            starttransition(async()=>{
                const res = await getcountryinddata(params.id);
                // console.log(res);
                // console.log(res.data);
                if(res.status == 200){
                    setcountry(res.data[0])
                }
            })
        }, [])
    
        if(ispending){
            return(
                <Loading/>
            )
        }

    return(
        <div>
            {country &&(
            <div style={{backgroundColor:"pink"}} className="carddetails grid grid-cols-2 pt-16 pb-12 ">
                <div className="flex justify-center items-center">
                    <img style={{height:"80%"}} src={country.flags.png}/>
                </div>
                <div className="carddetailscontent flex flex-col pt-6 pl-50 text-start gap-2">
                    
                    <p><b>{country.name.common}</b></p>
                    <p>Region : <b>{country.region}</b></p>
                    <p>Population : <b>{country.population}</b></p>
                    <p> Languages :  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                    </p>
                    <p>Currencies : {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                    </p>
                    <p>Top Level Domain : {country.tld[0]}
                    </p>
                    <p>Sub Region: {country.subregion}
                    </p>
                    <p> Capital : {country.capital}
                    </p>
                    <p> Native Names : {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                    </p>

                </div>

            </div>
            )}

            <div style={{textAlign:"center", backgroundColor:"pink" , paddingBottom:"15px"}}>
                <NavLink to="/Country">
                <button style={{border:"2px solid black", cursor:"pointer", borderRadius:"4px", width:"20%"}}>GO Back !</button>
                </NavLink>

            </div>
        </div>
    )
}