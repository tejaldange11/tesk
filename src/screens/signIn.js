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

class SignIn extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor(props) {
        super(props);

        this.state = {
            showFirst:true,

            fName: '',
            lName: '',
            emailId:'',

            errorfName:'',
            errorlName:'',
            erroremailId:'',

            password: '',
            cPassword: '',

            errorcPassword:'',
            errorPassword:''
        };
    }
    _next() {

        this.setState({
        })
    }

    validation(){
        if(this.state.fName == undefined || this.state.fName === null ||  this.state.fName == ""){
            this.setState({
                errorfName:"enter first name"
            })
        }
        else if(this.state.lName == undefined || this.state.lName === null ||  this.state.lName == ""){
            this.setState({
                errorlName:"enter last name"
            })
        }
        else if(this.state.emailId == undefined || this.state.emailId === null ||  this.state.emailId == ""){
            this.setState({
                erroremailId:"enter emailID"
            })
        }
        else {
            this.setState({
                showFirst: false,
            })
       }

    }
    validation_next(){
        if(this.state.password == undefined || this.state.password === null ||  this.state.password == ""){
            this.setState({
                errorPassword:"enter password"
            })
        }
        else if(this.state.cPassword == undefined || this.state.cPassword === null ||  this.state.cPassword == ""){
            this.setState({
                errorcPassword:"enter confirm password"
            })
        }

        else
        {
            this.props.navigation.navigate('Login',{
                email: this.state.emailId,
                password: this.state.password,
        })
        }

    }
    render() {
        return (
            <ImageBackground source={require('../images/login12.png')}
                             style={{flex: 1, }}>
            <View style={{flex: 1, marginTop: 20,}}>
                <View style={{alignItems: 'flex-start', marginLeft: '5%'}}>

                    <Text style={{
                        fontSize: 30, fontWeight: 'bold',
                        paddingLeft: 15, marginTop: 20, color: 'rgba(75,10,113,0.79)'
                    }}>Create Account
                    </Text>
                </View>

                {this.state.showFirst?

                    <View style={{marginTop: 35}}>

                        <View style={{alignItems: 'center',}}>
                        <Row size={12}>
                            <Col sm={6} md={6} lg={6} style={{alignItems: 'center'}}>
                                <TextInput
                                    value={this.state.fName}
                                    onChangeText={(fName) => this.setState({ fName })}
                                    placeholder="First Name"
                                    placeholderTextColor='#808080'
                                    label='First Name'
                                    style={{
                                        width: '75%',
                                        height: 44,
                                        fontSize: 15,
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderColor: 'black',
                                        marginBottom: 5,
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
                                        width: '75%',
                                        height: 44,
                                        fontSize: 15,
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderColor: 'black',
                                        marginBottom: 5,
                                    }}

                                />
                            </Col>
                        </Row>
                        <Row size={12}>
                            <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                                <Text style={{paddingLeft:25,color:'#d70101',
                                fontSize:11}}>{this.state.errorfName}</Text>
                            </Col>
                            <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                                <Text style={{paddingLeft:25,color:'#d70101',
                                    fontSize:11}}>{this.state.errorlName}</Text>
                            </Col>
                        </Row>
                        </View>
                        <View style={{alignItems: 'center',}}>
                        <TextInput
                            value={this.state.emailId}
                            onChangeText={(emailId) => this.setState({ emailId })}
                            placeholder="Email ID"
                            placeholderTextColor='#808080'
                            label='Email ID'
                            style={[styles.input, {marginTop: 15}]}
                        />
                        </View>
                        <Row size={12}>
                            <Col sm={5} md={5} lg={5} style={{alignItems: 'center',}}>
                                <Text style={{paddingLeft:13,color:'#d70101',
                                    fontSize:11}}>{this.state.erroremailId}</Text>
                            </Col>
                        </Row>
                        <View style={{alignItems: 'center',}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>
                                this.validation()
                            }
                        >
                            <Text style={{
                                color: '#fff',
                                fontSize: 20, fontWeight: 'bold'
                            }}>Next</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={{alignItems: 'center',}}>
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
                                borderWidth:0.2,
                                borderColor:'#a39898'
                            }}
                        >
                            <View style={{justifyContent:'space-between',flexDirection:'row',
                           }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 17, fontWeight: 'bold',
                                    paddingRight:20,
                                }}>Sign in with</Text>
                                <Image
                                    style={{height:20,width:20}}
                                    source={require('../images/google.png')}/>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>

                    :
                    <View style={{ marginTop: 30}}>

                    <View style={{alignItems:'center'}}>
                        <TextInput
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor='#808080'
                            label='Password'
                            style={styles.input}
                        />
                        </View>

                        <Row size={12}>
                        <Col sm={5} md={5} lg={5} style={{alignItems: 'center',}}>
                        <Text style={{paddingLeft:13,color:'#d70101',
                            fontSize:11}}>{this.state.errorPassword}</Text>
                        </Col>
                        </Row>

                        <View style={{alignItems:'center'}}>
                            <TextInput
                            value={this.state.cPassword}
                            onChangeText={(cPassword) => this.setState({ cPassword })}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            placeholderTextColor='#808080'
                            label='Confirm Password'
                            style={[styles.input, {marginTop: 20}]}
                        />
                    </View>
                        <Row size={12}>
                            <Col sm={6} md={6} lg={6} style={{alignItems: 'center',}}>
                                <Text style={{paddingLeft:15,color:'#d70101',
                                    fontSize:11}}>{this.state.errorcPassword}</Text>
                            </Col>
                        </Row>

                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity
                            onPress={() =>
                                this.validation_next()
                            }


                            style={styles.button}
                        >
                            <Text style={{
                                color: '#fff',
                                fontSize: 20, fontWeight: 'bold'
                            }}>Sign up</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                }
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('Login')
                        }>
                    <Text style={styles.textStyle}>Already have an account? Log In</Text>
                    </TouchableOpacity>
                </View>

            </View>
              </ImageBackground>
        );
    }
}




const styles = StyleSheet.create({
    button: {
        marginTop:40,
        alignItems: "center",
        backgroundColor: 'rgba(75,10,113,0.79)',
        padding: 10,
        width:'45%',
        borderRadius:12,

    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(75,10,113,0.79)',
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
        fontSize:15,
        padding: 10,
        borderBottomWidth:1,
        borderColor: 'black',
        marginBottom: 5,
    },
});

export default SignIn;
