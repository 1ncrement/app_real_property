/**
 * Created by Increment on 27.11.2016.
 */
import '../scss/index.scss'

import React from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import Root from './containers/Root'

const store = configureStore();

render(
	<Provider store={store}>
		<Root />
	</Provider>
	,
	document.querySelector('#root')
);