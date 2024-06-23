export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SET_NAME_FILTER = "SET_NAME_FILTER";
export const SET_REGION_FILTER = "SET_REGION_FILTER";
export const APPLY_FILTERS = "APPLY_FILTERS";

export const fetchCountriesRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchCountriesSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchCountriesFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const setNameFilter = (nameFilter) => ({
  type: SET_NAME_FILTER,
  payload: nameFilter,
});

export const setRegionFilter = (regionFilter) => ({
  type: SET_REGION_FILTER,
  payload: regionFilter,
});

export const applyFilters = (nameFilter, regionFilter) => ({
  type: APPLY_FILTERS,
  payload: { nameFilter, regionFilter }
});
