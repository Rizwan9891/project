import weather from '../_models/weather.model.js'
import { APIRequest } from '../_helpers/apiRequest.helper.js'
import { config } from '../_configs/config.js';

export const getCurrentLocationWeather = (req, res) => {
    const requiredFields = ['lat', 'lon'];
    for (const field of requiredFields) {
        if (!req.query[field]) {
            return res.status(400).json({ error: true, message: `${field} is required.` });
        }
    }
    const { lon, lat } = req.query;
    const queryParams = new URLSearchParams({
        lon: lon,
        lat: lat,
        appid: config.apiKey,
    }).toString();
    let configData = {
        url: `${config.baseURL}weather/?${queryParams}`,
        method: "get",
    }
    APIRequest(configData).then((response) => {
        res.status(200).json({ error: true, message: "Data found successfully.", data: response });
    }).catch((error) => {
        res.status(500).json({ error: true, message: "Internal server error", error: error });
    });
}
export const getHourlyForecast = (req, res) => {
    const requiredFields = ['lat', 'lon'];
    for (const field of requiredFields) {
        if (!req.query[field]) {
            return res.status(400).json({ error: true, message: `${field} is required.` });
        }
    }
    const { lon, lat } = req.query;
    const queryParams = new URLSearchParams({
        lat: lat,
        lon: lon,
        appid: config.apiKey,
    }).toString();
    let configData = {
        url: `${config.baseURL}forecast/hourly?${queryParams}`,
        method: "get",
    }
    APIRequest(configData).then((response) => {
        res.status(200).json({ error: true, message: "Data found successfully.", data: response });
    }).catch((error) => {
        res.status(500).json({ error: true, message: "Internal server error", error: error });
    });
}
export const getDailyForecast = (req, res) => {
    const requiredFields = ['lat', 'lon'];
    for (const field of requiredFields) {
        if (!req.query[field]) {
            return res.status(400).json({ error: true, message: `${field} is required.` });
        }
    }
    const { lon, lat } = req.query;
    const queryParams = new URLSearchParams({
        lat: lat,
        lon: lon,
        appid: config.apiKey,
    }).toString();
    let configData = {
        url: `${config.baseURL}forecast/daily?${queryParams}`,
        method: "get",
    }
    APIRequest(configData).then((response) => {
        res.status(200).json({ error: true, message: "Data found successfully.", data: response });
    }).catch((error) => {
        res.status(500).json({ error: true, message: "Internal server error", error: error });
    });
}