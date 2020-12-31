import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userAction';


const Register = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.User.userInfo);

    const submitHandler = () => {
        dispatch(register(name, email, password))
        // console.warn("Name is: " + userData.name );
        // console.warn("Name is: " + userData.email);
        // console.warn("Name is: " + userData.password);

        navigation.navigate("Details")
    }

    return (
        <SafeAreaView style={styles.maincontainer}>
            <View >
                <ScrollView><View style={styles.subContainer}>
                    <Text style={styles.logintxt}>Sign In</Text>
                    <View>
                        <Text style={styles.txtInputBox}>Username</Text>
                        <TextInput
                            value={name}
                            style={styles.txtInput} value={name}
                            onChangeText={(data) => setName(data)
                            }
                        />
                        <Text style={styles.txtInputBox}>Email</Text>
                        <TextInput
                            style={styles.txtInput}
                            value={email}
                            onChangeText={(data) => setEmail(data)} />
                        <Text style={styles.txtInputBox}>Password</Text>

                        <TextInput
                            style={styles.txtInput}
                            value={password}
                            onChangeText={(data) => setPass(data)} />
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => submitHandler()}>
                        <Text style={styles.txt}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
};
export default Register;

const styles = StyleSheet.create({
    maincontainer: {

        height: '100%',
        backgroundColor: '#FFF',
        flex: 1
    },
    subContainer: {
        marginTop: 60
    },
    btn: {
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 40

    },
    txt: {
        textAlign: "center"
        , fontSize: 20
        , color: '#FFF'
    },
    logintxt: {
        fontSize: 30,
        color: '#000',
        textAlign: 'center'
        , fontWeight: 'bold'
        , marginBottom: 50
    },
    txtInput: {
        borderWidth: 1
        , borderColor: "#000"
        , padding: 10
        , marginHorizontal: 10
    },
    txtInputBox: {
        textAlign: 'center',
        marginTop: 10
    }
});