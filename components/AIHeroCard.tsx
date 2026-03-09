import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Brain, Search, Mic, SendHorizontal } from 'lucide-react-native';

const conversationSuggestions = [
    "What are the symptoms of fever?",
    "Find doctors near me",
    "Remind me to take medicine",
    "Book an appointment"
];

interface AIHeroCardProps {
    onPressMic: () => void;
}

export const AIHeroCard: React.FC<AIHeroCardProps> = ({ onPressMic }) => {
    return (
        <View className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <View className="bg-blue-600 p-6">
                {/* Avatar & Greeting */}
                <View className="flex-row items-start gap-4 mb-6">
                    <View>
                        <View className="w-14 h-14 bg-white/10 rounded-full items-center justify-center border-2 border-white/30">
                            <Brain size={28} color="white" />
                        </View>
                        <View className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-blue-600 items-center justify-center">
                            <View className="w-1.5 h-1.5 bg-white rounded-full" />
                        </View>
                    </View>

                    <View className="flex-1">
                        <View className="flex-row items-center gap-2 mb-1">
                            <Text className="text-lg font-bold text-white">AI Health Assistant</Text>
                            <View className="bg-white/20 px-2 py-0.5 rounded-full flex-row items-center gap-1">
                                <View className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                <Text className="text-[10px] text-white font-medium">Online</Text>
                            </View>
                        </View>
                        <Text className="text-blue-100 text-sm">Hi Gunjan! How can I help with your health today?</Text>
                    </View>
                </View>

                {/* Search Bar */}
                <View className="bg-white rounded-2xl shadow-lg p-2.5 flex-row items-center gap-3">
                    <Search size={20} color="#9CA3AF" className="ml-1" />
                    <TextInput
                        placeholder="Ask me anything..."
                        placeholderTextColor="#9CA3AF"
                        className="flex-1 text-gray-900 text-sm h-10"
                    />
                    <TouchableOpacity
                        onPress={onPressMic}
                        className="w-10 h-10 bg-gray-100 rounded-xl items-center justify-center"
                    >
                        <Mic size={20} color="#4B5563" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-10 h-10 bg-blue-600 rounded-xl items-center justify-center">
                        <SendHorizontal size={16} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Quick Suggestions */}
            <View className="p-4 bg-gray-50 border-t border-gray-100">
                <Text className="text-gray-500 text-xs font-medium mb-3">Quick suggestions:</Text>
                <View className="flex-row flex-wrap gap-2">
                    {conversationSuggestions.map((suggestion, idx) => (
                        <TouchableOpacity
                            key={idx}
                            className="w-[48%] px-3 py-2.5 bg-white border border-gray-200 rounded-xl"
                        >
                            <Text className="text-gray-700 text-xs">{suggestion}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};
