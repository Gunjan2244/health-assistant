import React from 'react';
import { View, Text } from 'react-native';
import { MessageSquare, Sparkles } from 'lucide-react-native';

export const HealthTipCard: React.FC = () => {
    return (
        <View className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-blue-100/50">
            <View className="flex-row gap-3 mb-2">
                <View className="bg-white p-2 rounded-full self-start shadow-sm">
                    <Sparkles size={18} color="#7C3AED" />
                </View>
            </View>

            <Text className="text-[15px] text-slate-700 leading-6 font-medium">
                "Stay hydrated! Drinking water boosts energy and brain function. Aim for steady intake throughout the day."
            </Text>

            <Text className="text-slate-400 text-xs font-medium mt-3 uppercase tracking-wider">
                Daily Wellness Tip
            </Text>
        </View>
    );
};