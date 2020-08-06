

import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native';
import styles from './style'

export default class Profile extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <ImageBackground source={require('../../assets/Rectangle.png')} style={styles.backGroundImg}>
                        <View style={styles.header}>
                            <Image source={require("../../assets/Vector.png")} style={styles.backImg}>


                            </Image>
                            <Text style={styles.headerTxt}>CIRCLES</Text>
                            <Image source={require("../../assets/setting.png")} style={styles.settingImg}>


                            </Image>
                        </View>



                    </ImageBackground>
                    <View style={styles.mainView}>
                        <Image source={require("../../assets/user.png")} style={styles.userImg}>


                        </Image>
                        <Image source={require("../../assets/title.png")} style={styles.title}>


                        </Image>
                        <Text style={styles.countryTxt}>Brellin, Gremany</Text>
                        <Text style={styles.sorelAnswer}>SOREL'S ANSWERS</Text>
                        <Text style={styles.questionTxt}>Do you still love me or not?</Text>
                        <Text style={styles.answerTxt}>{"Of course i still love you.You are so\npretty and funny.I will forever love you. "}</Text>
                        <Text style={styles.subQuestionTxt}>How often do you think of me?</Text>
                        <Text style={styles.answerTxt}>{"At least three times per day because you\nare so fucking pretty its's not fair. "}</Text>
                        <Text style={styles.subQuestionTxt}>Do you still love me or not?</Text>
                        <Text style={styles.answerTxt}>{"Of course i still love you.You are so\npretty and funny.I will forever love you. "}</Text>
                    </View>


                </ScrollView>
            </View >
        )
    }
}
