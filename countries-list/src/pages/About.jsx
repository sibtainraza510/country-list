import countrydata from "../Api/countrydata.json";
export const About = () =>{
    return(
        <>
            <div style={{backgroundColor:"pink"}} className='flex justify-center items-center pt-12 pb-12'>
            <h1 className='text-2xl text-center'><b>Here are the Interesting Facts we're proud of </b></h1>
            </div>

            <div className="aboutdiv grid grid-cols-3 content-center justify-items-center gap-y-12 pt-12 pb-12">
                {countrydata.map((currelement)=>{
                    return(
                        <div className="rounded-lg border-solid border-black border-2 flex flex-col w-2xs bg-sky-100 gap-y-3 content-center justify-items-center p-6" key = {currelement.id}>
                            <h1 style={{fontSize:"20px"}}><b>{currelement.countryName}</b></h1>
                            <p>Capital : <b>{currelement.capital}</b></p>
                            <p>Population : <b>{currelement.population}</b></p>
                            <p>Interesting Facts  : {currelement.interestingFact}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}