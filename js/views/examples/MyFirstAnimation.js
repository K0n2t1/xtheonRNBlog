import React, {Component} from 'react';
import {
    Animated,
    StyleSheet,
    Dimensions,
    View,
    Text,
} from 'react-native';


class MyFirstAnimation extends Component {

    state = {
        translateY: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(this.state.translateY, {
            toValue: Dimensions.get('window').height / 2,
            duration: 3000,
        }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={[ styles.text,{ transform: [{translateY: this.state.translateY}]}]}>
                    Hello world!
                </Animated.Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 1/10 * Dimensions.get('window').height,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    text: {
        top: 0,
        width: Dimensions.get('window').width,
        textAlign: 'center',
    }

})

module.exports = MyFirstAnimation;
