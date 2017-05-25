import { createStore, applyMiddleware, combineReducers } from 'redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import {
  teal500,
  teal700,
  teal900,
  amber500,
  amber700,
  amber900,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors';

import Immutable from 'seamless-immutable';
import { routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as reducers from './redux/index';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
export const store = createStoreWithMiddleware(reducer);
//import DataService from './shared/DataService';
//let createStoreWithMiddleware = applyMiddleware(DataService)(createStore)

export const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto',
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: teal900,
    accent1Color:  amber500,
    accent2Color:  amber700,
    accent3Color:  amber900,
    textColor: darkBlack,

    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: fullBlack,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});
