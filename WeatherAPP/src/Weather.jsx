import { useEffect, useState } from "react"
import PropType from "prop-types"
import "./styles/Weather.css"
import cloudyImage from "./assets/cloudyImage2.jpg"
import rainyImage from "./assets/Rainy.jpg"
import sunnyImage from "./assets/sunnyImage2.jpg"
import defaultImage from "./assets/defaultImage2.jpg"
import snowyImage from "./assets/snowyImage.jpg"

function WeatherComponent({ country }) {
    // const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    changeBackground(data)
    useEffect(() => {
        let weatherFetch = async () => {
            setLoading(true)
            console.log("hi");
            if (country != "") {
                let tempData = await fetch(`https://api.weatherapi.com/v1/current.json?key=83e21f410d9542b6a5554847250602&q=${country}&aqi=no`)
                    .then((resp) => {
                        if (resp.status == 200) {
                            return resp.json()
                        }
                    })
                    .then((data1) => data1)
                    .catch((err) => {
                        console.log("Error", err);
                        return (
                            <div>
                                Error
                            </div>
                        )
                    })
                setLoading(false)
                setData(tempData)
            }
        }

        // if(loading){
        //     return <div>Loading</div>
        // }

        weatherFetch()

    }, [country])

    // useEffect(()=>console.log(data), [data]);
    // console.log("Hi");

    if (country == "") {
        document.body.style.backgroundImage = `url(${defaultImage})`
        return (
            <div className="typeSomething">
                Type Something...
            </div>
        )
    }

    let box1 = (
        <div className="box1">
            {
                data != null ? (
                    <>
                        {/* <div id="iconBox">
                            <img src={data ? data.current.condition.icon : null} alt="Image" />
                        </div> */}
                        <div className="tempParameters">
                            <div>
                                {data.location.name} : {data.current.condition.text}
                            </div>
                            <div>
                                Time : {data.location.localtime}
                            </div>
                            <div>
                                Latitude : {data.location.lat}
                            </div>
                            <div>
                                Longitute : {data.location.lon}
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        Your Search doesn&apos;t match any Country/Place
                    </div>
                )
            }
        </div>
    )
    let box2 = (
        <div className="box2">
            Loading...
        </div>
    )
    return (
        <>
            {loading == false ? box1 : box2}
        </>
    )
}


function changeBackground(data) {
    if(data == null){
        document.body.style.backgroundImage = `url(${defaultImage})`
        return
    }
    let str = data.current.condition.text.toLowerCase();
    if(str.includes("cloud")){
        document.body.style.backgroundImage = `url(${cloudyImage})`
    }
    else if(str.includes("sunny")){
        document.body.style.backgroundImage = `url(${sunnyImage})`
    }
    else if(str.includes("rain")){
        document.body.style.backgroundImage = `url(${rainyImage})`
    }
    else if(str.includes("snow")){
        document.body.style.backgroundImage = `url(${snowyImage})`
    }
    else{
        document.body.style.backgroundImage = `url(${defaultImage})`
    }

}


WeatherComponent.propTypes = {
    country: PropType.string
}

export default WeatherComponent