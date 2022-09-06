import "../styles/CityDetails.css"
import { Link as LinkRouter } from 'react-router-dom'
import axios from "axios"
import Itinerary from "./Itinerary/Itinerary"
import { useEffect } from "react"
import { useState } from "react"
function Details(props) {
    const city = props.data
    const id = props.cityId
    const [itineraries, setItineraries] = useState([])
    let newDate = new Date(city.fundation)
    let year = newDate.getFullYear()
    useEffect(() => {
        axios.get(`http://localhost:4000/itineraries/?city=${id}`)
            .then(res => {
                setItineraries(res.data.response)
            })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div className="Details-container">
            <div className="Details-item" style={{ backgroundImage: `url(${city.photo})` }}>
                <p className="Details-item-title">{city.city}</p>
            </div>
            <div className="Details-p-div">
                <div className="details-p-innerdiv">
                <p className="Details-innerp"><span className="details-p-span">Country:</span> {city.country}.</p>
                    <p className="Details-innerp" ><span className="details-p-span">Fundation:</span> {year}.</p>
                    <p className="Details-innerp" ><span className="details-p-span"> Population:</span> {city.population}.</p>
                </div>
                <p className="Details-p" >{city.description}</p>
                {itineraries.length? null:<h3 className="Details-subtitle"> We don't have any itineraries here right now...</h3>}
            </div>
                {itineraries.length? itineraries.map(itinerary => {
                    return (
                        <Itinerary data={itinerary} key={itinerary._id} />
                        )
                    }):null
                }
            <div className="Details-btns">
                    <LinkRouter to={`/`} className="Details-btn">Back to Home</LinkRouter>
                    <LinkRouter to={`/cities`}className="Details-btn">Back to Cities</LinkRouter>
                    <LinkRouter to={`/edit-city/${id}`}className="Details-btn">Edit</LinkRouter>
            </div>
        </div>
    )

}

export default Details