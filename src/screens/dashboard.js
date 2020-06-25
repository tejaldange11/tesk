import React, {Component} from 'react';
import {
    View,Text,Image,ImageBackground,ScrollView,
    StyleSheet,TextInput,TouchableOpacity
}
    from 'react-native';
import {Column as Col, Row} from "react-native-flexbox-grid";
import {scale} from "../constants/scales";
import * as types from '../constants/actions'
import TabBar from '../components/tabBar';





class Dashboard extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex:1}}>
                <View  style={{marginTop: scale(5)}}>

                    <View style={{
                        margin: scale(5),
                        borderRadius: scale(10), alignItems: 'center', marginTop: scale(5),backgroundColor:'#35CCFF',height:scale(50)
                    }}>
                        <Text
                            style={{
                                color: "#000", fontWeight: 'normal',
                                fontSize: scale(20),
                            }}>
                            Dashboard
                        </Text>

                    </View>
                </View>

                <ScrollView style={{flex:1}}>

                    <Row size={12}
                         style={{alignItems:'center',marginTop:scale(0),
                         }}>

                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(15),
                            }}>

                                <TouchableOpacity
                                    style={[styles.folder,{ backgroundColor: '#35CCFF',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('Fees')}
                                >
                                    <View style={ {borderBottomWidth:scale(1),width:scale(140),
                                        borderBottomColor:'#999999',alignItems: 'center',
                                        marginTop: scale(10),}}>

                                        <Image source={require('../images/welcome3.png')}
                                               resizeMode='contain'
                                               style={{width:scale(60),height:scale(60)}}

                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>FEES</Text>

                                </TouchableOpacity>

                            </View>
                        </Col>

                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(0),
                            }}>
                                <Text style={{marginTop:scale(1),color:'#070706'}}>NOTICE BOARD</Text>

                                <TouchableOpacity
                                    style={[styles.fol,{ backgroundColor: '#35CCFF',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('Ebook')}
                                >
                                    <View style={ {borderBottomWidth:scale(1),width:scale(140),
                                        borderBottomColor:'#999999',alignItems: 'center',
                                        marginTop: scale(-6),}}>
                                        <Image source={require('../images/welcome1.png')}
                                               resizeMode='contain'
                                               style={{width:scale(80),height:scale(80)}}


                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>HOMEWORK</Text>

                                </TouchableOpacity>

                            </View>
                        </Col>


                    </Row>
                    <Row size={12}
                         style={{alignItems:'center',marginTop:scale(5)}}>

                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(15),
                            }}>

                                <TouchableOpacity
                                    style={[styles.Folder,{ backgroundColor: '#DA251D',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('CardView')}
                                >

                                    <View style={styles.View}>

                                        <Image source={require('../images/syllabus.png')}
                                               resizeMode='contain'
                                               style={styles.FolderIcon}

                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>SYLLABUS</Text>

                                </TouchableOpacity>

                            </View>
                        </Col>

                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(15),
                            }}>
                                <TouchableOpacity
                                    style={[styles.Folder,{ backgroundColor: '#CC7400',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('Ebook')}
                                >
                                    <View style={styles.View}>
                                        <Image source={require('../images/ebook.png')}
                                               resizeMode='contain'
                                               style={styles.FolderIcon}

                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>EBOOK</Text>
                                </TouchableOpacity>

                            </View>
                        </Col>


                    </Row>



                    <Row size={12}
                         style={{alignItems:'center',marginTop:scale(5),
                         }}>

                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(15),
                            }}>

                                <TouchableOpacity
                                    style={[styles.folder,{ backgroundColor: '#35CCFF',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('Login')}
                                >

 <View style={ {borderBottomWidth:scale(1),width:scale(140),
                                        borderBottomColor:'#999999',alignItems: 'center',
                                        marginTop: scale(-6),}}>
                                        <Image source={require('../images/homework.gif')}
                                               resizeMode='contain'
                                               style={{width:scale(80),height:scale(80)}}

                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>HOMEWORK</Text>

                                </TouchableOpacity>

                            </View>
                        </Col>

                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(15),
                            }}>
                                <TouchableOpacity
                                    style={[styles.fol,{ backgroundColor: '#35CCFF',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('CardView')}
                                >
                                    <View style={ {borderBottomWidth:scale(1),width:scale(140),
                                        borderBottomColor:'#999999',alignItems: 'center',
                                        marginTop: scale(-6),}}>
                                        <Image source={require('../images/noticeBoard.png')}
                                               resizeMode='contain'
                                               style={{width:scale(80),height:scale(80)}}

                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>NOTICE BOARD</Text>
                                </TouchableOpacity>

                            </View>
                        </Col>


                    </Row>


                    <Row size={12}

                         style={{alignItems:'center',marginTop:scale(5)}}>


                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(15),
                            }}>

                                <TouchableOpacity
                                    style={[styles.Folder,{ backgroundColor: '#27CD2F',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('Events')}
                                >
                                    <View style={styles.View}>

                                  <Image source={require('../images/events.png')}
                                               resizeMode='contain'
                                               style={styles.FolderIcon}

                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>EVENTS</Text>

                                </TouchableOpacity>

                            </View>
                        </Col>

                        <Col sm={6} md={6} lg={6}>

                            <View style={{alignItems: 'center', marginTop: scale(15),
                            }}>
                                <TouchableOpacity
                                    style={[styles.Folder,{ backgroundColor: '#F27E97',}]}
                                    onPress={ () =>
                                        this.props.navigation.navigate('Calendar')}
                                >
                                    <View style={styles.View}>
                                        <Image source={require('../images/calender.png')}
                                               resizeMode='contain'
                                               style={styles.FolderIcon}

                                        />
                                    </View>
                                    <Text style={{marginTop:scale(3),color:'#070706'}}>CALENDER</Text>
                                </TouchableOpacity>

                            </View>
                        </Col>


                    </Row>

                </ScrollView>
                <View style={{justifyContent:'flex-end',flexDirection:'row',alignItems:'flex-end',
                }}>

                    <TabBar />

                </View>
            </View>
        )
    }
}
export default Dashboard;



const styles = StyleSheet.create({


        FolderIcon: {

            height: scale(100),
            width: scale(100),
            margin: Platform.OS == 'ios' ? scale(10) : 0
        },

        Folder: {
            alignItems: 'center',
            height: scale(140),
            width: scale(140),
            borderRadius: 18,

        },
    folder: {
        alignItems: 'center',
        height: scale(100),
        width: scale(160),
        borderRadius: 18,
        marginLeft:scale(15)

    },
    fol: {
        alignItems: 'center',
        height: scale(100),
        width: scale(150),
        borderRadius: 18,

    },

        View:{
            borderBottomWidth:scale(1),width:scale(140),
            borderBottomColor:'#999999',alignItems: 'center',
            marginTop: scale(5),
        },
    }
);



