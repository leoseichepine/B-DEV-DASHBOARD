import React from 'react';
import UserActivity from '../components/Widget/userActivity/userActivity';
import UserActivitySetting from '../components/Widget/userActivity/userActivitySetting';
import ReactWeather from "../components/Widget/weather/js/ReactWeather";
import WeatherSetting from "../components/Widget/weather/js/weatherSetting";
import CatBreedImage from "../components/Widget/cat-service/js/CatBreedImage";
import ForecastWeather from "../components/Widget/weather/js/ForecastWeather";
import SunsetSunrise from "../components/Widget/weather/js/SunsetSunrise";
import ShareSetting from "../components/Widget/exchange/js/ShareSetting";
import Share from "../components/Widget/exchange/js/Share";
import Currency from "../components/Widget/exchange/js/Currency";
import CurrencySetting from "../components/Widget/exchange/js/CurrencySetting";
import SectorPerformance from "../components/Widget/exchange/js/SectorPerformance";
import SectorPerformanceSetting from "../components/Widget/exchange/js/SectorPerformanceSetting";
import CatBreedSetting from "../components/Widget/cat-service/js/CatBreedSetting";
import CatCategoryImage from "../components/Widget/cat-service/js/CatCategoryImage";
import CatCategorySetting from "../components/Widget/cat-service/js/CatCategorySetting";
import CatInfo from "../components/Widget/cat-service/js/CatInfo";

export function GetWidgets(){
	return [
		// Weather
		{
			key : "city_temperature",
			title: "City temperature",
			author : "Léo & Lucien",
			desc : "Display temperature for a city",
			variables : ["WEATHER"],
			icon : "weather_icon.png",
			content: <ReactWeather/>,
			setting: <WeatherSetting/>,
			settingTitle : "Configuration",
			footer : "test footer",
		},
		{
			key : "city_forecast_temperature",
			title: "City forecast temperature",
			author : "Léo & Lucien",
			desc : "Display forecast temperature for a city",
			variables : ["WEATHER"],
			icon : "weather_icon.png",
			content: <ForecastWeather/>,
			setting: <WeatherSetting/>,
			settingTitle : "Configuration",
			footer : "test footer",
		},
		{
			key : "city_sunset",
			title: "Sunset & Sunrise",
			author : "Léo & Lucien",
			desc : "Display sunrise and sunset times",
			variables : ["WEATHER"],
			icon : "weather_icon.png",
			content: <SunsetSunrise />,
			setting: <WeatherSetting />,
			settingTitle : "Configuration",
			footer : "test footer",
		},

		// Cat
		{
			key : "image_cat_breed",
			title: "Image cat breed",
			author : "Léo & Lucien",
			desc : "Displays the image of a cat according to its breed",
			variables : ["CAT"],
			icon : "cat_icon.png",
			content: <CatBreedImage/>,
			setting: <CatBreedSetting/>,
			settingTitle : "Breed",
			footer : "test footer",
		},
		{
			key : "image_cat_category",
			title: "Image cat category",
			author : "Léo & Lucien",
			desc : "Displays the image of a cat according to its category",
			variables : ["CAT"],
			icon : "cat_icon.png",
			content: <CatCategoryImage/>,
			setting: <CatCategorySetting/>,
			settingTitle : "Category",
			footer : "test footer",
		},
		{
			key : "info_cat_breed",
			title: "Info cat breed",
			author : "Léo & Lucien",
			desc : "Displays information about the breed of a cat",
			variables : ["CAT"],
			icon : "cat_icon.png",
			content: <CatInfo/>,
			setting: <CatBreedSetting/>,
			settingTitle : "Breed",
			footer : "test footer",
		},

		// Exchange
		{
			key : "exchange_rate",
			title: "Exchange rate",
			author : "Léo & Lucien",
			desc : "Display the exchange rate of a currency pair",
			variables : ["EXCHANGE"],
			icon : "exchange_icon.png",
			content: <Currency/>,
			setting: <CurrencySetting/>,
			settingTitle : "Currency pair",
			footer : "test footer",
		},
		{
			key : "share_price_evolution",
			title: "Share price evolution",
			author : "Léo & Lucien",
			desc : "Display the evolution of a share price",
			variables : ["EXCHANGE"],
			icon : "exchange_icon.png",
			content: <Share/>,
			setting: <ShareSetting/>,
			settingTitle : "Share price evolution",
			footer : "test footer",
		},
		{
			key : "sector_performance",
			title: "Sector performance",
			author : "Léo & Lucien",
			desc : "Displays the performance of a sector",
			variables : ["EXCHANGE"],
			icon : "exchange_icon.png",
			content: <SectorPerformance/>,
			setting: <SectorPerformanceSetting/>,
			settingTitle : "Rank",
			footer : "test footer",
		},

		// Spotify
		{
			key : "user_playlists",
			title: "Spotify user playlists",
			author : "Léo & Lucien",
			desc : "Displays the user's playlists.",
			variables : ["SPOTIFY"],
			icon : "spotify_icon.png",
			content: <span>"User playlists"</span>,
			setting: <span>"User playlists"</span>,
			settingTitle : "Playlist",
			footer : "test footer",
		},
		{
			key : "user_saved_albums",
			title: "Spotify user albums",
			author : "Léo & Lucien",
			desc : "Displays the user's saved albums.",
			variables : ["SPOTIFY"],
			icon : "spotify_icon.png",
			content: <span>"User albums"</span>,
			setting: <span>"User albums"</span>,
			settingTitle : "Playlist",
			footer : "test footer",
		},

		// TEST
		// {
		// 	key : "UserActivity",
		// 	title: "User activity",
		// 	author : "Time Doctor",
		// 	desc : "Users who worked more or less than their minimum hours required in daily, weekly, and monthly.",
		// 	variables : ["USERS", "WEBSITES", "APPS", "TIME", "DATE"],
		// 	icon : "ICON",
		// 	content: <UserActivity activity={GetUserActivity()}/>,
		// 	setting: <UserActivitySetting />,
		// 	settingTitle : "Top Highest percentage of Mobile Users",
		// 	footer : "test footer",
		// },
	]
}

// TEST

export function GetUserActivity(){
	return {
			  "company": 123,
			  "start_time": "2017-05-01 15:20:17",
			  "end_time": "2017-06-01 15:40:17",
			  "users": [
			    {
			      "id": "194887",
			      "lastname": "Doe",
			      "name": "Jane"
			    },
			    {
			      "id": "194888",
			      "lastname": "Barret",
			      "name": "Samuel"
			    },
			    {
			      "id": "194889",
			      "lastname": "Love",
			      "name": "Scott"
			    },
			    {
			      "id": "194890",
			      "lastname": "McDaniel",
			      "name": "Michael"
			    },
			    {
			      "id": "194891",
			      "lastname": "Wilkerson",
			      "name": "Alejandro"
			    },
			    {
			      "id": "194892",
			      "lastname": "Fowler",
			      "name": "Ivan"
			    },
			    {
			      "id": "194893",
			      "lastname": "Doe",
			      "name": "John"
			    }
			  ],
			  "daily": {
			    "194887": 10.123,
			    "194888": 68.23,
			    "194889": 78.4,

			    "194890": 20.8,
			    "194891": 7.92,
			    "194892": 88.02,
			    "194893": 78.23
			  },
			  "weekly": {
			    "194887": 60.123,
			    "194888": 98.23,
			    "194889": 88.4,

			    "194890": 80.8,
			    "194891": 77.92,
			    "194892": 71.02,
			    "194893": 14.23
			  },
			  "monthly": {
			    "194887": 50.123,
			    "194888": 88.23,
			    "194889": 78.4,

			    "194890": 70.8,
			    "194891": 67.92,
			    "194892": 61.02,
			    "194893": 4.23
			  }
			}
}