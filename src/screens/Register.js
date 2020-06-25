
import  React, {Component} from  'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Platform,
    Picker,
    Alert,
    Button,
    ScrollView,
    AsyncStorage
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            phoneno: '',
            email: '',
            password: '',
            confirmpassword: '',
            date: "2019-05-15",
            address: '',
            pickerValue: '',
            username: '',
            password1: '',


            show: true,

            cardData: [],

            cardData002: []


        };
    }


    validation() {
        if (this.state.firstname == undefined || this.state.firstname == null || this.state.firstname == "") {
            alert("PLEASE, ENTER YOUR FIRST NAME !!!")
        } else if (this.state.lastname == undefined || this.state.lastname == null || this.state.lastname == "") {
            alert("PLEASE, ENTER YOUR LAST NAME!!!")
        } else if (this.state.phoneno == undefined || this.state.phoneno == null || this.state.phoneno == "") {
            alert("PLEASE, ENTER A PHONE NO. !!!")
        } else if (this.state.email == undefined || this.state.email == null || this.state.email == "") {
            alert("PLEASE, ENTER EMAIL ADDRESS !!!")
        } else if (this.state.password == undefined || this.state.password == null || this.state.password == "") {
            alert("PLEASE, ENTER YOUR  PASSWORD !!!")
        } else if (this.state.confirmpassword == undefined || this.state.confirmpassword == null || this.state.confirmpassword == "") {
            alert("PLEASE, ENTER YOUR  CONFIRM PASSWORD !!!")
        } else if (this.state.date == undefined || this.state.date == null || this.state.date == "") {
            alert("PLEASE, ENTER YOUR DATE OF BIRTH !!!")
        } else if (this.state.address == undefined || this.state.address == null || this.state.address == "") {
            alert("PLEASE, ENTER YOUR  ADDRESS !!!")
        } else if (this.state.pickerValue == undefined || this.state.pickerValue == null || this.state.pickerValue == "") {
            alert("PLEASE,ENTER YOUR CITY !!!")
        }

        else {
            alert(" CONGRATULATIONS !!! YOU HAVE BEEN REGISTERED SUCCESSFULLY... ")
        }
        let o = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            phoneno : this.state.phoneno,
            password : this.state.password,
            confirmpassword : this.state.confirmpassword,
            date:this.state.date,
            address:this.state.address,
            pickerValue : this.state.pickerValue,

        }

        let t = this.state.cardData
        t.push(o)

        this.setState({
            cardData : t
        })


    }

    validation002() {
        if (this.state.username == undefined ||
            this.state.username == null || this.state.username == "") {
            alert("PLEASE, ENTER YOUR USERNAME !!!")
        } else if (this.state.password1 == undefined || this.state.password1 == null || this.state.password1 == "") {
            alert("PLEASE, ENTER YOUR PASSWORD1!!!")
        } else {
            alert(" CONGRATULATIONS !!! YOU HAVE BEEN LOGGED IN SUCCESSFULLY... ")
        }
        let o = {
            username : this.state.username,
            password1 : this.state.password1,

        }

        let t = this.state.cardData002
        t.push(o)

        this.setState({
            cardData002 : t
        })



    }

    saveData = () => {
        const {firstname, lastname, email, phoneno, password, confirmpassword, date, pickerValue, address} = this.state;
        let myarray = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneno: phoneno,
            password: password,
            confirmpassword: confirmpassword,
            date: date,
            pickerValue: pickerValue,
            address: address,
        }
        AsyncStorage.setItem('myarray', JSON.stringify(myarray));

        alert(firstname + ' ' + lastname + ' ' + email + '' + phoneno + '' + password + '' + confirmpassword + '' + date + '' + pickerValue + '' + address + 'YOUR DATA SAVED  SUCCESSFULLY');



    }

    showData=async ()=>{
        let  myarray=await  AsyncStorage.getItem('myarray');

        let a =JSON.parse(myarray);
        alert(a.firstname + ' ' + a.lastname + ' ' + a.email + '' + a.phoneno + '' +a. password + '' +a. confirmpassword + '' + a.date + '' +a.address );


    }



    render() {
        const {show} = this.state

        return (
            <ScrollView>

                <View style={styles.container}>

                    { show ?

                        <View>



                            <View
                                style={{
                                    flex: 0.15,
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    marginBottom: 30
                                }}>
                                <Text
                                    style={{
                                        color: 'red',
                                        fontWeight: 'bold',
                                        fontSize: 30,
                                        marginLeft: 30
                                    }}>
                                    REGISTRATION FORM {'\n'}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <Text
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: 26,
                                        marginLeft: 5,
                                        marginBottom: 10
                                    }}>
                                    FIRST NAME  {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.firstname}
                                    onChangeText={firstname => this.setState({ firstname })}
                                    placeholder={'ENTER YOUR FIRST NAME'}
                                    style={styles.input}
                                />
                            </View>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>

                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        marginBottom: 10
                                    }}>
                                    LASTNAME {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.lastname}
                                    onChangeText={lastname => this.setState({ lastname })}
                                    placeholder={'ENTER YOUR LASTNAME'}
                                    style={styles.input}
                                />

                            </View>



                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: 26,
                                        marginLeft: 5,
                                        marginBottom:10
                                    }}>
                                    PHONE NO  {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.phoneno}
                                    onChangeText={phoneno => this.setState({ phoneno })}
                                    placeholder={'ENTER YOUR PHONE NO'}
                                    style={styles.input}
                                />
                            </View>



                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: 26,
                                        marginLeft: 5,
                                        marginBottom:10
                                    }}>
                                    EMAIL  {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.email}
                                    onChangeText={email => this.setState({ email })}
                                    placeholder={'abc@gmail.com'}
                                    style={styles.input}
                                />
                            </View>



                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        marginBottom: 10
                                    }}>
                                    PASSWORD  {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    placeholder={'ENTER A PASSWORD'}
                                    style={styles.input}
                                />

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: 26,
                                        marginLeft: 5,
                                        marginBottom: 10
                                    }}>
                                    CONFIRM PASSWORD  {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.confirmpassword}
                                    onChangeText={confirmpassword => this.setState({ confirmpassword })}
                                    placeholder={'CONFIRM PASSWORD'}
                                    style={styles.input}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        marginBottom: 10
                                    }}>
                                    DATE OF BIRTH {'\n'}
                                </Text>
                                <DatePicker style={{width:200}}
                                            date={this.state.date}
                                            mode="date"
                                            placeholder="select date"
                                            format="yyyy-MM-DD"
                                            minDate="2019-06-01"
                                            maxDate="2019-07-01"
                                            confirmBtnText="confirm"
                                            cancelBtnText="cancel"
                                            customStyles={{
                                                dateIcon:{
                                                    position:'absolute',

                                                },
                                                dateInput:{
                                                    marginLeft:36
                                                }
                                            }}

                                            onDateChange={(date)=>{this.setState({date:date})}}/>
                                <TextInput
                                    value={this.state.dateofbirth}
                                    onChangeText={dateofbirth => this.setState({ dateofbirth })}
                                    placeholder={'DATE OF BIRTH'}
                                    style={styles.input}
                                />
                            </View>
                            <Text style=
                                      {{
                                          marginLeft: 5,
                                          marginBottom: 10,
                                          fontWeight:'bold',
                                          fontSize:26,
                                          color:'black'
                                      }}>
                                CITY{'\n'}
                            </Text>

                            <Picker
                                style={{marginTop: -25,}}

                                selectedValue={this.state.pickerValue}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({pickerValue: itemValue })
                                }>
                                <Picker.Item label="select a option" value=" " />
                                <Picker.Item label="Vidisha" value="Vidisha" />
                                <Picker.Item label="Bhopal" value="Bhopal" />
                                <Picker.Item label="Indore" value="Indore" />
                                <Picker.Item label="Jabalpur" value="Jabalpur" />
                            </Picker>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        marginBottom: 10
                                    }}>
                                    ADDRESS {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.address}
                                    onChangeText={address => this.setState({ address })}
                                    placeholder={'ENTER YOUR ADDRESS'}
                                    style={styles.input}
                                />
                            </View>


                            <Button
                                title="Reset"
                                onPress={() => {
                                    this.setState({firstname: '',
                                        lastname: '',
                                        email: '',
                                        phoneno: '',
                                        password: '',
                                        confirmpassword: '',
                                        date: '',
                                        pickerValue: '',
                                        address:'',
                                    })
                                }}
                            />
                            <Button
                                title={'REGISTER'}
                                style={styles.input}
                                onPress = {this.validation.bind(this)}
                            />
                            <Button
                                title="Save Data"
                                onPress={this.saveData}color='green'
                            />
                            <Button
                                title="Show Data"
                                onPress={this.showData}color='magenta'

                            />

                            <Button
                                title={'LOGIN FORM'}
                                style={styles.input}
                                onPress = {() => {
                                    this.setState({
                                        show : false
                                    });
                                }}
                            />


                            <View style={{marginTop : -10}}>
                                {this.state.cardData.map((records, index) => (
                                    <View
                                        style={{
                                            backgroundColor: 'red',
                                            marginTop: index === 0 ? 32 : 5,
                                            padding: 10,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}>

                                        <Text style={styles.textColor}>
                                            FIRST NAME :{records.firstname}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            LASTNAME :{records.lastname}
                                        </Text>




                                        <Text style={styles.textColor}>
                                            PHONE No :{records.phoneno}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            EMAIL :{records.email}
                                        </Text>



                                        <Text style={styles.textColor}>
                                            PASSWORD :{records.password}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            CONFIRM PASSWORD. :{records.confirmpassword}
                                        </Text>


                                        <Text style={styles.textColor}>
                                            DATE OF BIRTH:{records.date}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            CITY :{records.pickerValue}
                                        </Text>

                                        <Text style={styles.textColor}>
                                            ADDRESS :{records.address}
                                        </Text>



                                    </View>
                                ))}
                            </View>


                        </View>

                        :

                        <View>
                            <Button
                                title={'LOGIN '}
                                style={styles.input}
                                onPress = {() => {
                                    this.setState({
                                        show : true
                                    });
                                }}
                            />

                            <View
                                style={{
                                    flex: 0.15,
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    marginBottom: 30
                                }}>
                                <Text
                                    style={{
                                        color: 'red',
                                        fontWeight: 'bold',
                                        fontSize: 30,
                                        marginLeft: 35
                                    }}>
                                    LOGIN FORM {'\n'}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: 26,
                                        marginLeft: 20,
                                        marginBottom: 30,
                                    }}>
                                    USERNAME  {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.username}
                                    onChangeText={(username) => this.setState({ username })}
                                    placeholder={'user name'}
                                    style={styles.input}
                                />

                            </View>





                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -15}}>

                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        marginLeft: 20,
                                        marginBottom: 30
                                    }}>
                                    PASSWORD  {'\n'}
                                </Text>

                                <TextInput
                                    value={this.state.password1}
                                    onChangeText={password1 => this.setState({ password1})}
                                    placeholder={'ENTER YOUR PASSWORD'}
                                    style={styles.input}
                                />

                            </View>


                            <Button
                                title={'CREATE ACCOUNT'}
                                style={styles.input}
                                onPress = {this.validation002.bind(this)}
                            />

                            <Button
                                title="RESET"
                                onPress={() => {
                                    this.setState({username: '',
                                        password1: '',

                                    })
                                }}
                            />

                            <View style={{marginTop : -10}}>
                                {this.state.cardData002.map((records, index) => (
                                    <View
                                        style={{
                                            backgroundColor: 'red',
                                            marginTop: 50,
                                            padding: 10,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}>



                                        <Text style={styles.textColor}>
                                            FIRST NAME :{records.firstname}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            LASTNAME:{records.lastname}
                                        </Text>






                                        <Text style={styles.textColor}>
                                            PHONE NO :{records.phoneno}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            EMAIL :{records.email}
                                        </Text>



                                        <Text style={styles.textColor}>
                                            PASSWORD :{records.password}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            CONFIRM PASSWORD :{records.confirmpassword}
                                        </Text>



                                        <Text style={styles.textColor}>
                                            DATE OF BIRTH :{records.date}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            ADDRESS:{records.address}
                                        </Text>



                                        <Text style={styles.textColor}>
                                            CITY:{records.pickerValue}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            USERNAME FOR LOGIN :{records.username}
                                        </Text>
                                        <Text style={styles.textColor}>
                                            PASSWORD1 FOR LOGIN :{records.password1}
                                        </Text>




                                    </View>


                                ))}

                            </View>

                        </View>

                    }


                </View>



            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8
    },
    input: {
        width: 140,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    },
});
