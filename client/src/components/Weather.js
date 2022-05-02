import React, { useState, useEffect } from 'react';
import { Accordion, Container, Card, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import Axios from 'axios';

const Weather = () => {

    // let weather = {
    //     "apiKey": "c0b1634fbc04e39a75ae9861dc38ef62",

    //     fetchWeather: function (city) {
    //         fetch(
    //             "https://api.openweathermap.org/data/2.5/weather?q=" +
    //             city +
    //             "&units=metric&appid=" +
    //             this.apiKey
    //         )
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     alert("No weather found.");
    //                     throw new Error("No weather found.");
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => this.displayWeather(data));
    //     },
    //     displayWeather: function (data) {
    //         const { name } = data;
    //         const { icon, description } = data.weather[0];
    //         const { temp, humidity } = data.main;
    //         const { speed } = data.wind;
    //         document.querySelector(".city").innerText = "Weather in " + name;
    //         document.querySelector(".icon").src =
    //             "https://openweathermap.org/img/wn/" + icon + ".png";
    //         document.querySelector(".description").innerText = description;
    //         document.querySelector(".temp").innerText = temp + "°C";
    //         document.querySelector(".humidity").innerText =
    //             "Humidity: " + humidity + "%";
    //         document.querySelector(".wind").innerText =
    //             "Wind speed: " + speed + " km/h";
    //         document.querySelector(".weather").classList.remove("loading");
    //         document.body.style.backgroundImage =
    //             "url('https://source.unsplash.com/1600x900/?" + name + "')";
    //     },
    //     search: function () {
    //         this.fetchWeather(document.querySelector(".search-bar").value);
    //     },
    // };

    // document.querySelector(".search button").addEventListener("click", function () {
    //     weather.search();
    // });

    // document
    //     .querySelector(".search-bar")
    //     .addEventListener("keyup", function (event) {
    //         if (event.key == "Enter") {
    //             weather.search();
    //         }
    //     });

    // console.log(weather.fetchWeather("Denver"));

    const apiKey = "c0b1634fbc04e39a75ae9861dc38ef62";
    const [city, setCity] = useState('Minsk');
    const [weatherData, setWeatherData] = useState({});

    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState("");

    Axios.defaults.withCredentials = false;

    useEffect(() => {
        const doSearch = async () => {

            const { data } = await Axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey);
            console.log(data);
            setWeatherData(data)
            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setIcon("https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
            setDescription(data.weather[0].description);
        }
        doSearch();

    }, [])

    const setAttributtes = async () => {

        const { data } = await Axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey);

        setTemp(data.main.temp);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setIcon("https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
        setDescription(data.weather[0].description);
    }



    return (
        <Container>
            <br></br>
            <br></br>
            <Card>
                <Card.Header as="h5">Weather</Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Location name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={city}
                            onChange={(event) => { setCity(event.target.value); }}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={() => { setAttributtes() }} >
                            Search
                        </Button>
                    </InputGroup>
                    <Row>

                        <Card.Title style={{ fontSize: "40px", padding: "30px 15px" }}>Location: {city}</Card.Title>
                        <Col>
                            <img src={icon}></img>

                            {description}

                        </Col>
                        <Col>
                            <Card.Text>
                                Temperature: {temp + "°C"}
                            </Card.Text>
                            <Card.Text>
                                Humidity: {humidity + "%"}
                            </Card.Text>
                            <Card.Text>
                                Wind speed: {wind + "km/h"}
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <br></br>
            <br></br>
        </Container >
    )
}

export default Weather;


