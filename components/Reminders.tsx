import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bell, Pill, Calendar } from 'lucide-react-native';

const aiInsights = [
    {
        type: 'warning',
        title: 'Medicine Reminder',
        message: 'Time to take your evening medication - Paracetamol 500mg',
        icon: Pill,
        color: 'amber',
        hex: '#D97706',
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        time: 'Now',
        action: 'Mark as Taken'
    },
    {
        type: 'info',
        title: 'Appointment Tomorrow',
        message: 'Dr. Rajesh Kumar at 10:00 AM - City Hospital',
        icon: Calendar,
        color: 'blue',
        hex: '#2563EB',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        time: '18 hours',
        action: 'View Details'
    },
];

export const Reminders: React.FC = () => {
    return (
        <View className="mb-24">
            <View className="flex-row items-center gap-2 mb-4 px-1">
                <Bell size={20} color="#F59E0B" />
                <Text className="text-lg font-bold text-gray-900">Reminders & Alerts</Text>
            </View>

            <View className="gap-3">
                {aiInsights.map((insight, idx) => {
                    const Icon = insight.icon;
                    return (
                        <View key={idx} className={`bg-white border ${insight.border} rounded-2xl p-4`}>
                            <View className="flex-row items-start gap-4">
                                <View className={`w-12 h-12 ${insight.bg} rounded-xl items-center justify-center`}>
                                    <Icon size={22} color={insight.hex} />
                                </View>
                                <View className="flex-1">
                                    <View className="flex-row items-center justify-between mb-1">
                                        <Text className="font-semibold text-gray-900 text-sm">{insight.title}</Text>
                                        <Text className="text-xs text-gray-500 font-medium">{insight.time}</Text>
                                    </View>
                                    <Text className="text-xs text-gray-600 mb-3 leading-5">{insight.message}</Text>
                                    <TouchableOpacity className={`px-4 py-2 ${insight.bg} border ${insight.border} rounded-lg self-start`}>
                                        <Text className={`text-xs ${insight.text} font-bold`}>{insight.action}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
