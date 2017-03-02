import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import Start from './views/Start';

class App extends Component {
    render() {
        return(
            <Start />
        )
    }
}

module.exports = App;

AppRegistry.registerComponent('xtheonRNBlog', () => App);