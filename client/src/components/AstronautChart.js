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
   

    return(
        <div className= "chart">
            
            <HighchartsReact highcharts = {Highcharts} options = {options}/>
          
        </div>
    )
    
}


    



export default AstronautChart;