import axios from "axios";
import {
  fetchCountriesFailure,
  fetchCountriesRequest,
  fetchCountriesSuccess,
} from "../actions/actions";



export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await axios.get("https://restcountries.com/v3.1/all");
      dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCountriesFailure(error.message));
    }
  };
};
export const getSingleCountry = (name) => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCountriesFailure(error.message));
    }
  };
};

