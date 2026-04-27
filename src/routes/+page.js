import { error } from '@sveltejs/kit';

export const ssr = false;
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=63.8284&longitude=20.2597&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,precipitation_probability_max&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=Europe%2FBerlin&past_days=0&forecast_days=7', {
        method: 'GET',
    });
    
    if (response.status != 200) {
        throw error(response.status, {   message: response.statusText })
    }
    
    let data = await response.json(); 
    
    return { params, response_weather: data }; 
}