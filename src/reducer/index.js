import tailwindConfig from '../static/tailwind.config';

const DARK_MODE = "DARK_MODE";
const SHOW = "SHOW";

const BG_COLOR= tailwindConfig.colors.white;
const TEXT_COLOR= tailwindConfig.colors.react;

const INITIAL_STATE ={
  bgColor: BG_COLOR,
  textColor: TEXT_COLOR,
  isLightMode: true,
  showNavbar: false
};

export default function reducer (state = INITIAL_STATE, action={}) {
  switch (action.type) {
    case DARK_MODE:
      return action.payload ;
    case SHOW:
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
