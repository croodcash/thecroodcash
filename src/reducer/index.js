import tailwindConfig from '../static/tailwind.config';
import {about} from '../static/data';
import {backend} from '../static/routes';
import axios from 'axios'

const DARK_MODE = "DARK_MODE";
const SHOW = "SHOW";
const FETCH = "FETCH";
const SEND = "SEND";

const BG_COLOR= tailwindConfig.colors.react;
const TEXT_COLOR= tailwindConfig.colors.white;

const INITIAL_STATE ={
  bgColor: BG_COLOR,
  textColor: TEXT_COLOR,
  isLightMode: false,
  showNavbar: false,
  active:'summary',
  contentDetail: about.summary.detailSum,
  contentList:about.summary.detailList,
  errorMessage:''
};

export default function reducer (state = INITIAL_STATE, action={}) {
  switch (action.type) {
    case DARK_MODE:
      return action.payload ;
    case SHOW:
      return action.payload ;
    case FETCH:
      return action.payload ;
    case SEND:
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

export function sendEmailData(resultData) {
  return {
    type: SEND,
    payload: resultData 
  };
};

export const switchTheme=()=>(dispatch,getState)=>{
  const state = Object.assign({},getState());
  //console.log(state);
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
  //console.log(state);
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

export const sendMessage=({name,email,message})=>(dispatch,getState)=>{
  const state = Object.assign({},getState());
  const re = /\S+@\S+\.\S+/;
  //console.log(name,email,message);
  if(name.length<3 || !re.test(String(email).toLowerCase()) || message.length<3){
    state.errorMessage='Invalid Name or Email or Message';
    return dispatch(sendEmailData(state));
  }
  axios.post(backend.sendEmail, {
    name,
    email,
    message
  }).then(response => {
    //console.log(response);
    if(response.data.response.id.length>3){
      state.errorMessage='Success Send Message! Thank you!'
    }else{
      state.errorMessage='Fail to Send Message. Please kindly try again later'
    }
    dispatch(sendEmailData(state));
  })
  .catch(error => {
    //console.log(error);
    state.errorMessage='Fail to Send Message. Please kindly try again later'
    dispatch(sendEmailData(state));
  })
};
