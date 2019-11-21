import React, { Component } from 'react';
import './App.css';
import WeatherDetails from './WeatherDetails';
import ZipForm from './ZipForm';

export default class App extends Component {
  state = {
    zip: ''
  }

  getWeather = e => {
    console.log(e.target.zip.value);

    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${this.state.zip}&units=imperial`)
      .then(response => {
        if (!response.ok) {
          throw Error('Failed to fetch weather');
        }
        return response.json();
      })
      .then(weatherData => {
        /*if (weatherData.cod) {
          this.setState({
            error: weatherData.msg
          });
        }*/
        this.setState({
          weather: {
            location: weatherData.name,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`
          },
          error: null
        });
      })
      .catch(e => {
        this.setState({
          error: e.message,
          weather: null
        });
      });
  }

  handleZipChange = event => {
    this.setState({
      zip: event.target.value
    })
  }

  render() {
    const weather = this.state.weather ?
      <WeatherDetails weather={this.state.weather} /> :
      <h1>Please enter a zip code to see the weather</h1>;

    const error = this.state.error ?
      <h4 style={{ color: 'red' }}>{this.state.error}</h4>
      : null;

    return (
      <>
        <ZipForm zip={this.state.zip} handleZipChange={this.handleZipChange} getWeather={this.getWeather}><h2>The Amazing PCS Weather</h2></ZipForm>
        {weather}
        {error}
      </>
    );
  }
}
