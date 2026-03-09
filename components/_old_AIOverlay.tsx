import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, Modal } from 'react-native';
import { X, Mic, SendHorizontal, Keyboard } from 'lucide-react-native';

const { height } = Dimensions.get('window');

interface AIOverlayProps {
    visible: boolean;
    onClose: () => void;
}

export const AIOverlay: React.FC<AIOverlayProps> = ({ visible, onClose }) => {
    const slideAnim = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        if (visible) {
            Animated.spring(slideAnim, {
                toValue: 0,
                useNativeDriver: true,
                tension: 65,
                friction: 11
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 250,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <Modal transparent visible={visible} animationType="none">
            {/* Backdrop Blur/Dim */}
            <View className="flex-1 bg-black/30">
                <Animated.View
                    style={{ transform: [{ translateY: slideAnim }] }}
                    className="flex-1 mt-10 bg-white rounded-t-[32px] overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <View className="flex-row items-center justify-between px-6 py-5 border-b border-gray-100">
                        <View>
                            <Text className="text-xl font-bold text-gray-900">AI Assistant</Text>
                            <Text className="text-sm text-gray-500">Listening...</Text>
                        </View>
                        <TouchableOpacity
                            onPress={onClose}
                            className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
                        >
                            <X size={20} color="#374151" />
                        </TouchableOpacity>
                    </View>

                    {/* Immersive Visualizer Area */}
                    <View className="flex-1 items-center justify-center bg-blue-50/50">
                        {/* Breathing Animation Placeholder */}
                        <View className="w-48 h-48 bg-blue-500/10 rounded-full items-center justify-center animate-pulse">
                            <View className="w-32 h-32 bg-blue-500/20 rounded-full items-center justify-center">
                                <View className="w-20 h-20 bg-blue-600 rounded-full items-center justify-center shadow-lg shadow-blue-500/40">
                                    <Mic size={32} color="white" />
                                </View>
                            </View>
                        </View>

                        <Text className="mt-8 text-2xl font-semibold text-gray-900 text-center px-8">
                            "How can I help you today?"
                        </Text>
                        <Text className="mt-2 text-gray-500 text-center">Try "Check my symptoms" or "Find a doctor"</Text>
                    </View>

                    {/* Bottom Controls */}
                    <View className="p-6 bg-white border-t border-gray-100 pb-10">
                        <View className="flex-row gap-4 mb-6 justify-center">
                            {['Find Hospital', 'Check Symptoms', 'Call 108'].map((suggestion) => (
                                <TouchableOpacity key={suggestion} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
                                    <Text className="text-xs font-semibold text-gray-700">{suggestion}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View className="flex-row items-center gap-3">
                            <TouchableOpacity className="p-3 bg-gray-100 rounded-xl">
                                <Keyboard size={24} color="#4B5563" />
                            </TouchableOpacity>
                            <View className="flex-1 h-12 bg-gray-50 rounded-xl border border-gray-200 justify-center px-4">
                                <Text className="text-gray-400">Type a message...</Text>
                            </View>
                            <TouchableOpacity className="w-12 h-12 bg-blue-600 rounded-xl items-center justify-center shadow-lg shadow-blue-500/30">
                                <SendHorizontal size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};
