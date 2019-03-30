/**
 * @format
 */
import React from 'react';
import {View} from 'react-native'
import { AppRegistry } from 'react-native';
import DemoRedux from './DemoRedux';
import { name as appName } from './app.json';



AppRegistry.registerComponent(appName, () => DemoRedux);
