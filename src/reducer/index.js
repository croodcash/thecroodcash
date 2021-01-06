import tailwindConfig from '../static/tailwind.config';
import {about} from '../static/data';

const DARK_MODE = "DARK_MODE";
const SHOW = "SHOW";
const FETCH = "FETCH";

const BG_COLOR= tailwindConfig.colors.white;
const TEXT_COLOR= tailwindConfig.colors.react;

const INITIAL_STATE ={
  bgColor: BG_COLOR,
  textColor: TEXT_COLOR,
  isLightMode: true,
  showNavbar: false,
  active:'summary',
  contentDetail: about.summary.detailSum,
  contentList:about.summary.detailList
};

export default function reducer (state = INITIAL_STATE, action={}) {
  switch (action.type) {
    case DARK_MODE:
      return action.payload ;
    case SHOW:
      return action.payload ;
    case FETCH:
      return action.payload ;
    default:
      return state;
  }
};

export function switchThemePayload(newTheme) {
  return {
    type: DARK_MODE,
    payload: newTheme 
  };
};

export function showNavbarPayload(newState) {
  return {
    type: SHOW,
    payload: newState 
  };
};

export function fetchContentData(newData) {
  return {
    type: FETCH,
    payload: newData 
  };
};

export const switchTheme=()=>(dispatch,getState)=>{
  const state = Object.assign({},getState());
  console.log(state);
  const { bgColor,textColor,isLightMode } = state;
  state.bgColor = textColor;
  state.textColor = bgColor;
  state.isLightMode = !isLightMode;
  dispatch(switchThemePayload(state));
};

export const showNavbar=()=>(dispatch,getState)=>{
  const state = Object.assign({},getState()); 
  
  state.showNavbar = !state.showNavbar;
  dispatch(showNavbarPayload(state));
};

export const showContent=(item)=>(dispatch,getState)=>{
  const state = Object.assign({},getState());
  state.active = item;
  console.log(state);
  switch (item) {
    case 'education':
      state.contentDetail=about.education.detailSum;
      state.contentList=about.education.detailList;
      break;
    case 'experience':
      state.contentDetail=about.experience.detailSum;
      state.contentList=about.experience.detailList;
      break;
    default:
      state.contentDetail=about.summary.detailSum;
      state.contentList=about.summary.detailList;
  }
  dispatch(fetchContentData(state));
};
