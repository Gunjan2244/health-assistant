import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { User, FileText, Heart, Calendar, Pill, Settings, ChevronRight } from 'lucide-react-native';

const profileMenuItems = [
    { icon: FileText, label: 'Medical History', color: '#2563EB' },
    { icon: Heart, label: 'Health Records', color: '#DC2626' },
    { icon: Calendar, label: 'Appointment History', color: '#16A34A' },
    { icon: Pill, label: 'Prescriptions', color: '#9333EA' },
    { icon: Settings, label: 'Settings', color: '#4B5563' },
];

export default function ProfileScreen() {
    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
            <View className="gap-6">
                <View className="bg-purple-600 rounded-xl p-6 shadow-xl">
                    <View className="flex-row items-center gap-4 mb-4">
                        <View className="w-20 h-20 bg-white rounded-full items-center justify-center">
                            <User size={40} color="#9333EA" />
                        </View>
                        <View>
                            <Text className="text-2xl font-bold text-white">Rahul Kumar</Text>
                            <Text className="text-purple-100">+91 98765 43210</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="w-full bg-white/20 py-2 rounded-lg items-center">
                        <Text className="text-white font-medium">Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                <View className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {profileMenuItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <TouchableOpacity
                                key={idx}
                                className="w-full flex-row items-center justify-between p-5 border-b border-gray-100 last:border-b-0"
                            >
                                <View className="flex-row items-center gap-3">
                                    <Icon size={24} color={item.color} />
                                    <Text className="font-medium text-gray-800">{item.label}</Text>
                                </View>
                                <ChevronRight size={20} color="#9CA3AF" />
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <TouchableOpacity className="w-full py-3 bg-red-50 rounded-lg items-center">
                    <Text className="text-red-600 font-medium">Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}