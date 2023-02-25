import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SkeletonLoading = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, [animation]);

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.2, 1],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.skeleton, { opacity }]} />
            <Animated.View style={[styles.skeleton, { opacity }]} />
            <Animated.View style={[styles.skeleton, { opacity }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    skeleton: {
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        width: 250,
        height: 20,
        marginVertical: 5,
    },
});

export default SkeletonLoading;
