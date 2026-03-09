import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Sparkles } from 'lucide-react-native';

interface AIAssistantHandleProps {
    onPress: () => void;
}

export const AIAssistantHandle: React.FC<AIAssistantHandleProps> = ({ onPress }) => {
    // Breathing animation for the glow
    const glowAnim = useRef(new Animated.Value(0.3)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Slow breathing effect (3.5 seconds)
        const breathe = Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(glowAnim, {
                        toValue: 0.7,
                        duration: 1750,
                        useNativeDriver: true,
                    }),
                    Animated.timing(pulseAnim, {
                        toValue: 1.08,
                        duration: 1750,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(glowAnim, {
                        toValue: 0.3,
                        duration: 1750,
                        useNativeDriver: true,
                    }),
                    Animated.timing(pulseAnim, {
                        toValue: 1,
                        duration: 1750,
                        useNativeDriver: true,
                    }),
                ]),
            ])
        );
        breathe.start();
        return () => breathe.stop();
    }, []);

    return (
        <View style={styles.container} pointerEvents="box-none">
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={styles.touchArea}
            >
                {/* Outer glow rings */}
                <Animated.View
                    style={[
                        styles.glowRing,
                        styles.glowRingOuter,
                        {
                            opacity: glowAnim.interpolate({
                                inputRange: [0.3, 0.7],
                                outputRange: [0.15, 0.35],
                            }),
                            transform: [
                                {
                                    scale: pulseAnim.interpolate({
                                        inputRange: [1, 1.08],
                                        outputRange: [1.4, 1.6],
                                    }),
                                },
                            ],
                        },
                    ]}
                />

                <Animated.View
                    style={[
                        styles.glowRing,
                        styles.glowRingMiddle,
                        {
                            opacity: glowAnim.interpolate({
                                inputRange: [0.3, 0.7],
                                outputRange: [0.25, 0.5],
                            }),
                            transform: [
                                {
                                    scale: pulseAnim.interpolate({
                                        inputRange: [1, 1.08],
                                        outputRange: [1.2, 1.35],
                                    }),
                                },
                            ],
                        },
                    ]}
                />
                {/* Bottom ambient screen glow */}
                <Animated.View
                    pointerEvents="none"
                    style={[
                        styles.bottomGlow,
                        {
                            opacity: glowAnim.interpolate({
                                inputRange: [0.3, 0.7],
                                outputRange: [0.25, 0.45],
                            }),
                            transform: [
                                {
                                    scaleY: pulseAnim.interpolate({
                                        inputRange: [1, 1.08],
                                        outputRange: [1, 1.15],
                                    }),
                                },
                            ],
                        },
                    ]}
                />

                {/* Main handle */}
                <Animated.View
                    style={[
                        styles.handle,
                        {
                            transform: [{ scale: pulseAnim }],
                        },
                    ]}
                >
                    {/* Gradient-like layers */}
                    <View style={styles.handleGradientTop} />
                    <View style={styles.handleCore}>
                        <Sparkles size={20} color="white" fill="white" />
                    </View>
                </Animated.View>

                {/* Bottom indicator line */}
                <View style={styles.indicatorLine} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 50,
        height: 80, // Touch area extends upward
    },
    touchArea: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 100,
        height: 80,
        paddingBottom: 8,
    },
    glowRing: {
        position: 'absolute',
        bottom: 16,
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#DC2626', // Red-600
    },
    glowRingOuter: {
        shadowColor: '#DC2626',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 24,
        elevation: 12,
    },
    glowRingMiddle: {
        shadowColor: '#DC2626',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 16,
        elevation: 10,
    },
    bottomGlow: {
        position: 'absolute',
        bottom: -20, // slightly off-screen for realism
        left: -40,
        right: -40,
        height: 120,
        backgroundColor: '#DC2626',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        opacity: 0.35,

        // Soft light falloff
        shadowColor: '#DC2626',
        shadowOffset: { width: 0, height: -12 },
        shadowOpacity: 0.6,
        shadowRadius: 40,
        elevation: 30,
    },

    handle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#DC2626',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#DC2626',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8,
        overflow: 'hidden',
    },
    handleGradientTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '40%',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    handleCore: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicatorLine: {
        width: 32,
        height: 3,
        borderRadius: 1.5,
        backgroundColor: 'rgba(220, 38, 38, 0.3)',
        marginTop: 4,
    },
});
