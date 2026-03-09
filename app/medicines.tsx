import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Pill, Clock, Plus, Bell, Syringe, Calendar } from 'lucide-react-native';

export default function MedicinesScreen() {

    const schedule = [
        {
            id: '1',
            time: '08:00 AM',
            status: 'upcoming', // upcoming, taken, missed
            medicines: [
                { name: 'Amoxicillin', dosage: '500mg', type: 'capsule', instructions: 'After food' },
                { name: 'Vitamin D', dosage: '1000IU', type: 'tablet', instructions: 'With water' }
            ]
        },
        {
            id: '2',
            time: '01:00 PM',
            status: 'upcoming',
            medicines: [
                { name: 'Paracetamol', dosage: '650mg', type: 'tablet', instructions: 'If fever > 100°F' }
            ]
        },
        {
            id: '3',
            time: '08:00 PM',
            status: 'upcoming',
            medicines: [
                { name: 'Amoxicillin', dosage: '500mg', type: 'capsule', instructions: 'After food' },
                { name: 'Atorvastatin', dosage: '10mg', type: 'tablet', instructions: 'Before sleep' }
            ]
        }
    ];

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>

            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
                <View>
                    <Text className="text-2xl font-bold text-gray-900">Medicines</Text>
                    <Text className="text-gray-500">Track your daily medication</Text>
                </View>
                <TouchableOpacity className="bg-blue-600 p-3 rounded-full shadow-md">
                    <Plus size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Daily Progress */}
            <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <Text className="font-semibold text-gray-800 mb-3">Today's Progress</Text>
                <View className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <View className="h-full bg-green-500 w-[30%]" />
                </View>
                <Text className="text-sm text-gray-500 text-right">2 of 6 doses taken</Text>
            </View>

            {/* Date Strip (Mock) */}
            <View className="flex-row justify-between mb-6">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                    <View key={day} className={`items-center p-2 rounded-xl border ${day === 'Wed' ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-200'} w-[14%]`}>
                        <Text className={`text-xs mb-1 ${day === 'Wed' ? 'text-blue-100' : 'text-gray-500'}`}>{day}</Text>
                        <Text className={`font-bold ${day === 'Wed' ? 'text-white' : 'text-gray-800'}`}>{21 + i}</Text>
                    </View>
                ))}
            </View>

            {/* Schedule List */}
            <Text className="text-lg font-bold text-gray-900 mb-4">Daily Schedule</Text>
            <View className="gap-6 relative">

                {/* Vertical Line */}
                <View className="absolute left-[70px] top-4 bottom-4 w-0.5 bg-gray-200" />

                {schedule.map((slot) => (
                    <View key={slot.id} className="flex-row items-start">
                        {/* Time Column */}
                        <View className="w-[70px] pt-1">
                            <Text className="text-gray-900 font-bold">{slot.time}</Text>
                            <Text className="text-gray-400 text-xs uppercase">{slot.status}</Text>
                        </View>

                        {/* Medicines for this slot */}
                        <View className="flex-1 ml-4 gap-3">
                            {slot.medicines.map((med, idx) => (
                                <View key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-row items-center justify-between">
                                    <View className="flex-row items-center">
                                        <View className="bg-blue-50 p-2 rounded-lg mr-3">
                                            <Pill size={20} color="#3B82F6" />
                                        </View>
                                        <View>
                                            <Text className="font-bold text-gray-800 text-base">{med.name}</Text>
                                            <Text className="text-xs text-gray-500">{med.dosage} • {med.instructions}</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center">
                                        {/* Checkbox state logic would go here */}
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

        </ScrollView>
    );
}
