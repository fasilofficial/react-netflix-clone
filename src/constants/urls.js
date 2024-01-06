import { apiKey } from "./constants";

export const originals = `/discover/tv?api_key=${apiKey}&with_networks=213`;
export const trendings = `/trending/all/week?api_key=${apiKey}&language=en-US`;
export const action = `/discover/movie?api_key=${apiKey}&with_genres=28`;
export const documentries = `/discover/movie?api_key=${apiKey}&with_genres=99`;
export const horror = `/discover/movie?api_key=${apiKey}&with_genres=27`;
export const comedy = `/discover/movie?api_key=${apiKey}&with_genres=35`;
