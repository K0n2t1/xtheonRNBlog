import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    Dimensions,
    View,
    Button,
} from 'react-native';

import MyFirstAnimation from './examples/MyFirstAnimation';

class Start extends Component {

    state = {
        view: 'overview',
    }

    renderContent = () => {
        switch (this.state.view) {
            case 'overview':
                return (<View>{
                        this.renderOverview()
                    }
                    </View>
                );
            case 'myFirstAnimation':
                return (
                    <MyFirstAnimation />
                );
            default:
                return (<View />);

        }
    }

    renderOverview = () => {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.setState({view: 'myFirstAnimation'})}
                        title="My first animation"
                    />
                </View>
            </View>
        );
    }


    render() {
        return (
            <View>
                <StatusBar
                    hidden={true}
                />
                <View style = {styles.topContainer}>
                    <Button
                        style = {styles.backButton}
                        onPress= {() => this.setState({view: 'overview'})}
                        title= "Back" />
                </View>
                {
                    this.renderContent()
                }
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: '#aaa',
    },
    topContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 1/10 * Dimensions.get('window').height,
    },
    backButton: {
        color: '#000',
    }
})

module.exports = Start;
