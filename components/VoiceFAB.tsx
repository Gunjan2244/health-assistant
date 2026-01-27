import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Mic, MicOff } from 'lucide-react-native';

interface VoiceFABProps {
    isListening: boolean;
    onPress: () => void;
}

export const VoiceFAB: React.FC<VoiceFABProps> = ({ isListening, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="absolute bottom-8 right-6 shadow-xl shadow-blue-900/20"
            accessibilityLabel={isListening ? "Stop listening" : "Start voice assistant"}
        >
            <View className={`w-16 h-16 rounded-full items-center justify-center ${isListening ? 'bg-red-500' : 'bg-blue-600'
                }`}>
                {isListening ? <MicOff size={28} color="white" /> : <Mic size={28} color="white" />}
            </View>

            {/* Pulse effect ring (simulated with border/opacity if needed, or just kept clean) */}
            {!isListening && (
                <View className="absolute -z-10 w-full h-full rounded-full bg-blue-400 opacity-20 scale-125" />
            )}
        </TouchableOpacity>
    );
};