import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const AstronautChart = ({allAstronauts}) => {

    
    const filteredAstronauts = allAstronauts.map((astronaut) => {
            return astronaut.nationality
    })
    const uniqueNationalities = [...new Set(filteredAstronauts)]

    // const list = uniqueNationalities.map((nationality, index) => {
    //     return (
    //         <li className = "nationality-list">{nationality}</li>
    //      )
    // })
           
    const newFilteredAstronauts = allAstronauts.filter((astronaut) => {
        return astronaut.nationality
    })
    const nationalities = newFilteredAstronauts.map((astronaut, index) => {
        return astronaut.nationality
    })


    const arr = nationalities
        const calculateCount = (arr, query) => {
           let count = 0;
           for(let i = 0; i < arr.length; i++){
              if(arr[i] === query){
                 count++;
                 continue;
           };
           if(Array.isArray(arr[i])){
              count += calculateCount(arr[i], query);
           }
        };
        return count;
     };
    
    const list = uniqueNationalities.map((nationality, index) => {
        for (nationality of uniqueNationalities){
            calculateCount(arr,nationality)
        }
         
    })
    const newFinalList = [... new Set(list)] 
         console.log(newFinalList)
    //  const space = list.forEach((nationality) => {
    //     calculateCount(arr, nationality);
    //     // console.log(nationality)

        
    
    //  console.log(calculateCount(arr, "Earthling"));

    //  const finalList = [... new Set(space)];
    //  console.log(finalList);

    const options = {
        chart:{
            type: 'pie'
        }, 
        title: {
            text:'Astronaut Data'
        },
        series:[
            {   
                data:[
                    ['American', 50],
                    ['Russian', 25],
                    ['Chinese', 10],
                    ['Earthling', 15]
                ]
            }
        ]
    }
    return(
        <div>
            <HighchartsReact highcharts = {Highcharts} options = {options}/>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default AstronautChart;

