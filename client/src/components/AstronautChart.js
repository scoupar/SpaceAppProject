import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const AstronautChart = ({allAstronauts}) => {

    const options = {
        chart:{
            type: 'pie',
            backgroundColor:'rgba(0,0,0,0)'
        }, 
        title: {
            style: {
                color:"#F7F8FA",
                backgroundColor:"black"
            },
            text:'WHICH COUNTRIES DO ASTRONAUTS COME FROM?'
        },
        series:[
            {   
                data:[
                    ['American', 52],
                    ['Russian', 13],
                    ['Chinese', 11],
                    ['Earthling', 5],
                    ['Japanese', 7],
                    ['French', 2],
                    ['Canadian', 2],
                    ['British', 1],
                    ['German', 1],
                    ['Brazilian', 1],
                    ['Emirati', 1],
                    ['Swedish', 1],
                    ['Danish', 1],
                    ['Malaysian', 1],
                    ['Italian', 1]

                ]
            }
        ]
    }
    const filteredAstronauts = allAstronauts.map((astronaut) => {
        return astronaut.nationality
    })
    const uniqueNationalities = [...new Set(filteredAstronauts)]
    
    
    
    
       
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
    
    
    const space = list.forEach((nationality) => {
        calculateCount(arr, nationality);
        console.log(nationality)

    })
    
    console.log(filteredAstronauts);
    
    
    console.log(calculateCount(arr, "Swedish"));
    
    const finalList = [... new Set(space)];
    console.log(finalList);

    return(
        <div className= "chart">
            
            <HighchartsReact highcharts = {Highcharts} options = {options}/>
          
        </div>
    )
    
}


    



export default AstronautChart;