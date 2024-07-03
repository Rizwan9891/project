import { getCurrentLocationWeather, getHourlyForecast, getDailyForecast, getClimateForecast } from '../_controllers/weather.controller.js';

export default (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        res.header('Cache-Control', 'no-cache');
        res.header('Content-Type', 'application/json; charset=utf-8');
        next();
    });
    app.get('/api/get/current/location/weather', getCurrentLocationWeather);
    app.get('/api/get/hourly/forecast', getHourlyForecast);
    app.get('/api/get/daily/forecast', getDailyForecast);
    app.get('/api/get/climate/forecast', getClimateForecast);
};
