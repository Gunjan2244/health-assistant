import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Menu, X, Mic } from 'lucide-react-native';

interface HeaderProps {
    menuOpen: boolean;
    toggleMenu: () => void;
    isListening: boolean;
    voiceCommand: string;
}

export const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu, isListening, voiceCommand }) => {
    return (
        <View className="bg-white border-b border-slate-100 z-50">
            <View className="flex-row items-center justify-between px-6 py-4">
                <View className="flex-row items-center gap-3">
                    <Text className="text-xl font-semibold text-slate-900 tracking-tight">Health Assistant</Text>
                    <View className="bg-blue-50 px-2 py-0.5 rounded-full">
                        <Text className="text-[10px] font-medium text-blue-600 uppercase tracking-wider">AI Care</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={toggleMenu}
                    className="p-2"
                    accessibilityLabel={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <X size={24} color="#0F172A" /> : <Menu size={24} color="#0F172A" />}
                </TouchableOpacity>
            </View>

            {isListening && (
                <View className="bg-blue-600 px-4 py-2 flex-row items-center justify-center gap-2">
                    <Mic size={16} color="white" className="animate-pulse" />
                    <Text className="text-white text-sm font-medium">{voiceCommand || "Listening..."}</Text>
                </View>
            )}
        </View>
    );
};