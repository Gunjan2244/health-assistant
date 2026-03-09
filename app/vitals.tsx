import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Heart, Activity, Scale, Moon, Plus } from 'lucide-react-native';

export default function VitalsScreen() {
    const vitalsData = [
        {
            id: '1',
            title: 'Heart Rate',
            value: '72',
            unit: 'bpm',
            status: 'Normal',
            statusColor: 'text-green-600',
            icon: Heart,
            iconColor: '#EF4444',
            bg: 'bg-red-50',
            lastUpdated: '10 min ago',
        },
        {
            id: '2',
            title: 'Blood Pressure',
            value: '120/80',
            unit: 'mmHg',
            status: 'Optimal',
            statusColor: 'text-green-600',
            icon: Activity,
            iconColor: '#3B82F6',
            bg: 'bg-blue-50',
            lastUpdated: '2 hours ago',
        },
        {
            id: '3',
            title: 'Weight',
            value: '70.5',
            unit: 'kg',
            status: '+0.5 kg',
            statusColor: 'text-red-500',
            icon: Scale,
            iconColor: '#F59E0B',
            bg: 'bg-orange-50',
            lastUpdated: 'Yesterday',
        },
        {
            id: '4',
            title: 'Sleep',
            value: '7h 30m',
            unit: '',
            status: 'Consistent',
            statusColor: 'text-blue-600',
            icon: Moon,
            iconColor: '#8B5CF6',
            bg: 'bg-purple-50',
            lastUpdated: 'Today',
        },
    ];

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>

            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
                <View>
                    <Text className="text-2xl font-bold text-gray-900">Vitals & Stats</Text>
                    <Text className="text-gray-500">Monitor your health metrics</Text>
                </View>
                <TouchableOpacity className="bg-blue-600 p-3 rounded-full shadow-md">
                    <Plus size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Main Stats Grid */}
            <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
                {vitalsData.map((vital) => (
                    <TouchableOpacity
                        key={vital.id}
                        className="w-[48%] bg-white p-4 rounded-2xl shadow-sm border border-gray-100 justify-between min-h-[160px]"
                    >
                        <View className="flex-row justify-between items-start">
                            <View className={`p-2 rounded-xl ${vital.bg}`}>
                                <vital.icon size={22} color={vital.iconColor} />
                            </View>
                            <Text className={`text-xs font-medium ${vital.statusColor}`}>{vital.status}</Text>
                        </View>

                        <View>
                            <Text className="text-gray-500 font-medium text-sm mb-1">{vital.title}</Text>
                            <View className="flex-row items-end">
                                <Text className="text-2xl font-bold text-gray-900 mr-1">{vital.value}</Text>
                                <Text className="text-gray-500 text-sm mb-1">{vital.unit}</Text>
                            </View>
                        </View>

                        <Text className="text-xs text-gray-400 mt-2">{vital.lastUpdated}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Connectivity Banner */}
            <View className="bg-gray-900 rounded-2xl p-5 mb-6 flex-row items-center justify-between">
                <View className="flex-1 mr-4">
                    <Text className="text-white font-bold text-lg mb-1">Connect Device</Text>
                    <Text className="text-gray-400 text-sm">Sync your smartwatch or health band for real-time tracking.</Text>
                </View>
                <TouchableOpacity className="bg-white px-4 py-2 rounded-lg">
                    <Text className="text-gray-900 font-bold">Connect</Text>
                </TouchableOpacity>
            </View>

            {/* Weekly Trends (Mock) */}
            <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <Text className="text-lg font-bold text-gray-900 mb-4">Weekly Heart Rate</Text>
                {/* Simple Visual Mock for Graph */}
                <View className="flex-row justify-between items-end h-32 px-2">
                    <View className="w-8 bg-blue-100 h-[40%] rounded-t-sm" />
                    <View className="w-8 bg-blue-100 h-[60%] rounded-t-sm" />
                    <View className="w-8 bg-blue-100 h-[50%] rounded-t-sm" />
                    <View className="w-8 bg-blue-500 h-[80%] rounded-t-sm shadow-sm" />
                    <View className="w-8 bg-blue-100 h-[70%] rounded-t-sm" />
                    <View className="w-8 bg-blue-100 h-[65%] rounded-t-sm" />
                    <View className="w-8 bg-blue-100 h-[75%] rounded-t-sm" />
                </View>
                <View className="flex-row justify-between mt-2 px-2">
                    <Text className="text-xs text-gray-400">Mon</Text>
                    <Text className="text-xs text-gray-400">Tue</Text>
                    <Text className="text-xs text-gray-400">Wed</Text>
                    <Text className="text-xs text-gray-900 font-bold">Thu</Text>
                    <Text className="text-xs text-gray-400">Fri</Text>
                    <Text className="text-xs text-gray-400">Sat</Text>
                    <Text className="text-xs text-gray-400">Sun</Text>
                </View>
            </View>

        </ScrollView>
    );
}
