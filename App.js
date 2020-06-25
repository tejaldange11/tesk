/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
    StyleSheet, TextInput,
    View, ImageBackground,
    Text, TouchableOpacity, Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Column as Col, Row} from 'react-native-flexbox-grid';
/*
import Login  from './src/screens/login'
*/

class App extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor(props) {
        super(props);

        this.state = {
           showFirst:true
        };
    }
    _next() {

        this.setState({
            showFirst:false,
            isWelcome:false,

            fName: '',
            lName: '',
            emailId:'',
            password: '',
            cPassword: '',


        })
    }
    render() {
        return (

            <View style={{flex: 1, marginTop: 30,}}>
                <View style={{alignItems: 'flex-start', marginLeft: '5%'}}>

                    <Text style={{
                        fontSize: 30, fontWeight: 'bold',
                        paddingLeft: 15, marginTop: 40, color: 'rgba(105,49,139,0.79)'
                    }}>Create Account
                    </Text>
                </View>

                {this.state.showFirst?

                    <View style={{alignItems: 'center', marginTop: 35}}>

                        <Row size={12}>
                            <Col sm={6} md={6} lg={6} style={{alignItems: 'center'}}>
                                <TextInput
                                    value={this.state.fName}
                                    onChangeText={(fName) => this.setState({ fName })}
                                    placeholder="First Name"
                                    placeholderTextColor='#808080'
                                    label='First Name'
                                    style={{
                                        width: '70%',
                                        height: 44,
                                        fontSize: 14,
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderColor: 'black',
                                        marginBottom: 10,
                                    }}
                                />
                            </Col>
                            <Col sm={6} md={6} lg={6} style={{alignItems: 'center'}}>
                                <TextInput
                                    value={this.state.lName}
                                    onChangeText={(lName) => this.setState({ lName })}
                                    placeholder="Last Name"
                                    placeholderTextColor='#808080'
                                    label='Last Name'
                                    style={{
                                        width: '70%',
                                        height: 44,
                                        fontSize: 14,
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderColor: 'black',
                                        marginBottom: 10,
                                    }}

                                />
                            </Col>
                        </Row>


                        <TextInput
                            value={this.state.emailId}
                            onChangeText={(emailId) => this.setState({ emailId })}
                            placeholder="Email ID"
                            placeholderTextColor='#808080'
                            label='Email ID'
                            style={[styles.input, {marginTop: 30}]}
                        />

                        <TouchableOpacity
                            style={styles.button}
                           onPress={()=>this._next()}
                        >
                            <Text style={{
                                color: '#fff',
                                fontSize: 20, fontWeight: 'bold'
                            }}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                            style={{
                                marginTop: 40,
                                alignItems: "center",
                                backgroundColor: 'rgba(245,242,246,0.79)',
                                padding: 10,
                                width: '50%',
                                paddingBottom:15,
                                paddingTop:15,
                                borderRadius: 25,

                            }}
                        >
                            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 17, fontWeight: 'bold',
                                    paddingRight:20,
                                }}>Sign in with</Text>
                                <Image
                                    style={{height:20,width:20}}
                                    source={require('./src/images/google.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    :
                    <View style={{alignItems: 'center', marginTop: 30}}>


                        <TextInput
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor='#808080'
                            label='Password'
                            style={styles.input}
                        />

                        <TextInput
                            value={this.state.cPassword}
                            onChangeText={(cPassword) => this.setState({ cPassword })}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            placeholderTextColor='#808080'
                            label='Confirm Password'
                            style={[styles.input, {marginTop: 20}]}
                        />
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('Login')
                            }


                            style={styles.button}
                        >
                            <Text style={{
                                color: '#fff',
                                fontSize: 20, fontWeight: 'bold'
                            }}>Sign up</Text>
                        </TouchableOpacity>

                    </View>

                }
                <View style={styles.bottomView}>
                    <Text style={styles.textStyle}>Already have an account? Log In</Text>
                </View>

            </View>
            /* <ImageBackground source={require('./src/images/bi.png')} style={styles.image}>
              </ImageBackground>*/
        );
    }
}




class Login extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {

        return (
    <View>
    <Text>dvkbj</Text>
   </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop:40,
        alignItems: "center",
        backgroundColor: 'rgba(106,50,139,0.79)',
        padding: 10,
        width:'45%',
        borderRadius:12,

    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(106,50,139,0.79)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    textStyle: {
        color: '#fff',
        fontSize: 15,
    },
    input: {
        width: '80%',
        height: 44,
        fontSize:14,
        padding: 10,
        borderBottomWidth:1,
        borderColor: 'black',
        marginBottom: 10,
    },
});

export default App;
