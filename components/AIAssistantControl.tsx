import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, Dimensions } from 'react-native';

interface AIAssistantControlProps {
    onPress: () => void;
}

export const AIAssistantControl: React.FC<AIAssistantControlProps> = ({ onPress }) => {
    const pulseAnim = useRef(new Animated.Value(0.4)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const breathe = Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(pulseAnim, {
                        toValue: 0.8,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1.1,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(pulseAnim, {
                        toValue: 0.4,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: true,
                    }),
                ]),
            ])
        );
        breathe.start();
        return () => breathe.stop();
    }, []);

    return (
        <View className="absolute bottom-0 left-0 right-0 items-center justify-end z-50 pointer-events-box-none">
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                className="w-full h-12 items-center justify-end pb-3" // Increased touch area
                style={{ paddingBottom: 12 }}
            >
                {/* Glow Effect */}
                <Animated.View
                    style={{
                        opacity: pulseAnim,
                        transform: [{ scaleX: scaleAnim }, { scaleY: scaleAnim }],
                    }}
                    className="absolute bottom-2 w-48 h-8 bg-red-500/40 rounded-full blur-xl"
                />

                {/* The Handle */}
                <View className="w-24 h-1.5 bg-gray-300 rounded-full shadow-sm" />
            </TouchableOpacity>
        </View>
    );
};
