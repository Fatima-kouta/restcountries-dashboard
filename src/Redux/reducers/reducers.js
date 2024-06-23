import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  APPLY_FILTERS,
  SET_REGION_FILTER,
  SET_NAME_FILTER,
} from "../actions/actions";

const initialState = {
  data: [],
  filteredData: [],
  loading: false,
  error: null,
  nameFilter: "",
  regionFilter: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        filteredData: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_NAME_FILTER:
      return {
        ...state,
        nameFilter: action.payload,
      };
    case SET_REGION_FILTER:
      return {
        ...state,
        regionFilter: action.payload,
      };
    case APPLY_FILTERS:
      const { nameFilter, regionFilter } = action.payload;
      const filteredData = state.data.filter((item) => {
        const matchesName =
          !nameFilter ||
          item.name.common.toLowerCase().includes(nameFilter.toLowerCase());
        const matchesRegion =
          !regionFilter || regionFilter === "" || item.region === regionFilter;

        return matchesName && matchesRegion;
      })
      return {
        ...state,
        filteredData,
      };
    default:
      return state;
  }
};

export default reducers;
