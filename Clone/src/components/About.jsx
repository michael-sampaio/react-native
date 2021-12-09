import React from "react";
import { ScrollView, Text, View } from "react-native";
import { style } from './componentStyles';

const About = () => {
    return (
        <View style={style.about}>
            <ScrollView nestedScrollEnabled={true}>
                <Text style={style.aboutTitle}>
                    Official Online Store of the Baltimore Ravens
                </Text>
                <Text style={style.aboutText}>
                    The Ravens have drafted Rashod Bateman in the first round of the 2021 draft,
                    so snatch up new Rashod Bateman Ravens jerseys to support the new player.
                    Shop the largest selection of Baltimore Ravens merchandise at the Official Online
                    Store of the Ravens! We carry officially licensed Baltimore Ravens apparel for fans,
                    featuring Ravens t-shirts, jerseys, sweatshirts, snapbacks, Ravens coaches polos and
                    so much more. Check out the newest Ravens tailgating gear for all your parties this
                    season. We have sportswear for any occasion, from tailgating at the stadium to
                    watching the big game at home. You can also decorate your home in a Ravens theme,
                    from Ravens banners and flags to garden gnomes for your front yard! The Official Ravens
                    Shop has everything for your family including spring apparel and Pro Line gear for all your
                    die-hard Ravens fans that you can't get anywhere else.
                </Text>
            </ScrollView>
        </View>
    )
}

export default About;