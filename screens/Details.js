import React from 'react'
import {View,Text} from 'react-native'
 import { useSelector } from 'react-redux'
 
const Details = ()=>{
    const userData = useSelector((state) => state.User.userInfo);

    return(
        <View>
            <Text>
                {
                    userData.name
                }

                hello
            </Text>
        </View>
    )
}


export default Details;