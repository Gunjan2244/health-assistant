import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AlertCircle, Ambulance, Navigation, PhoneCall } from 'lucide-react-native';

const emergencyFeatures = [
    {
        id: 'sos',
        label: 'Emergency SOS',
        icon: AlertCircle,
        action: 'Call 108',
        color: 'bg-red-500',
        gradient: 'from-red-500 to-red-600',
    },
    {
        id: 'ambulance',
        label: 'Ambulance',
        icon: Ambulance,
        action: 'Book Now',
        color: 'bg-orange-500',
        gradient: 'from-orange-500 to-orange-600',
    },
    {
        id: 'nearby',
        label: 'Nearest Hospital',
        icon: Navigation,
        action: 'Navigate',
        color: 'bg-blue-500',
        gradient: 'from-blue-500 to-blue-600',
    },
];

export const EmergencySection: React.FC = () => {
    return (
        <View className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <View className="bg-red-50 border-b border-red-100 px-5 py-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                    <View className="w-10 h-10 bg-red-500 rounded-xl items-center justify-center shadow-sm">
                        <AlertCircle size={20} color="white" />
                    </View>
                    <View>
                        <Text className="text-base font-bold text-gray-900">Emergency Services</Text>
                        <Text className="text-xs text-gray-600">Available 24/7</Text>
                    </View>
                </View>
                <View className="bg-emerald-100 px-3 py-1 rounded-full flex-row items-center gap-1.5 border border-emerald-200">
                    <View className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    <Text className="text-[10px] text-emerald-800 font-bold uppercase tracking-wide">Active</Text>
                </View>
            </View>

            <View className="p-5">
                <View className="flex-row justify-between gap-3 mb-5">
                    {emergencyFeatures.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <TouchableOpacity
                                key={feature.id}
                                className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex-1 items-center"
                            >
                                <View className={`w-12 h-12 ${feature.color} rounded-xl items-center justify-center mb-2 shadow-sm`}>
                                    <Icon size={24} color="white" />
                                </View>
                                <Text className="font-semibold text-gray-900 text-xs mb-1 text-center">{feature.label}</Text>
                                <Text className="text-[10px] text-gray-500 font-medium">{feature.action}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View className="pt-4 border-t border-gray-100 flex-row items-center justify-between">
                    <Text className="text-gray-600 text-xs font-semibold">Emergency Hotlines:</Text>
                    <View className="flex-row gap-2">
                        <TouchableOpacity className="px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg flex-row items-center gap-1.5">
                            <PhoneCall size={12} color="#DC2626" />
                            <Text className="text-red-700 text-xs font-bold">108</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg flex-row items-center gap-1.5">
                            <PhoneCall size={12} color="#2563EB" />
                            <Text className="text-blue-700 text-xs font-bold">100</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
