import tailwindConfig from '../static/tailwind.config';

const DARK_MODE = "DARK_MODE";

const BG_COLOR= tailwindConfig.colors.white;
const TEXT_COLOR= tailwindConfig.colors.react;

const INITIAL_STATE ={
  bgColor: BG_COLOR,
  textColor: TEXT_COLOR,
  isLigthMode: true
};

export default function reducer (state = INITIAL_STATE, action={}) {
  switch (action.type) {
    case DARK_MODE:
      return {...action.payload };
    default:
      return {...state };
  }
};
export function switchThemePayload(newTheme) {
  return {
    type: DARK_MODE,
    payload: { ...newTheme }
  };
}
export const switchTheme=()=>(dispatch,getState)=>{
  const state = Object.assign({},getState());
  const { bgColor,textColor } = state;
  state.bgColor = textColor;
  state.textColor = bgColor;
  state.isLightMode = !state.isLightMode;
  dispatch(switchThemePayload(state));
};
