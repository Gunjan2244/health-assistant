import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Heart, Bell, Menu, X } from 'lucide-react-native';

interface HealthHeaderProps {
    menuOpen: boolean;
    toggleMenu: () => void;
}

export const HealthHeader: React.FC<HealthHeaderProps> = ({ menuOpen, toggleMenu }) => {
    return (
        <View className="bg-white border-b border-gray-100 px-5 py-3 flex-row items-center justify-between z-50">
            <View className="flex-row items-center gap-3">
                <View>
                    <View className="w-10 h-10 bg-blue-600 rounded-xl items-center justify-center shadow-sm">
                        <Heart size={20} color="white" fill="white" />
                    </View>
                    <View className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                </View>
                <View>
                    <Text className="text-lg font-bold text-gray-900 leading-6">HealthCare+</Text>
                    <Text className="text-xs text-gray-500 font-medium">Your Health Companion</Text>
                </View>
            </View>

            <View className="flex-row items-center gap-2">
                <TouchableOpacity className="p-2.5 bg-gray-50 rounded-xl relative">
                    <Bell size={20} color="#4B5563" />
                    <View className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={toggleMenu}
                    className="p-2.5 bg-gray-50 rounded-xl"
                >
                    {menuOpen ? <X size={20} color="#4B5563" /> : <Menu size={20} color="#4B5563" />}
                </TouchableOpacity>
            </View>
        </View>
    );
};
