import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Clock } from 'lucide-react-native';

export default function AmbulanceScreen() {
    const [bookingType, setBookingType] = useState<'emergency' | 'scheduled'>('emergency');

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
            <View className="gap-6">
                <View className="bg-white rounded-xl p-6 shadow-sm">
                    <Text className="text-2xl font-bold text-gray-800 mb-4">Book Ambulance</Text>

                    <View className="flex-row gap-2 mb-6">
                        <TouchableOpacity
                            onPress={() => setBookingType('emergency')}
                            className={`flex-1 py-3 rounded-lg items-center ${bookingType === 'emergency' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                        >
                            <Text className={`font-medium ${bookingType === 'emergency' ? 'text-white' : 'text-gray-700'
                                }`}>
                                Emergency
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setBookingType('scheduled')}
                            className={`flex-1 py-3 rounded-lg items-center ${bookingType === 'scheduled' ? 'bg-blue-500' : 'bg-gray-100'
                                }`}
                        >
                            <Text className={`font-medium ${bookingType === 'scheduled' ? 'text-white' : 'text-gray-700'
                                }`}>
                                Scheduled
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View className="gap-4">
                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Pickup Location</Text>
                            <TextInput
                                placeholder="Enter pickup address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Drop Location</Text>
                            <TextInput
                                placeholder="Enter hospital or destination"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Ambulance Type</Text>
                            <View className="p-3 border border-gray-300 rounded-lg bg-gray-50">
                                <Text className="text-gray-700">Basic Life Support (BLS)</Text>
                            </View>
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Patient Condition</Text>
                            <TextInput
                                multiline
                                numberOfLines={3}
                                placeholder="Brief description of patient condition"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                textAlignVertical="top"
                            />
                        </View>

                        <TouchableOpacity className="w-full py-4 bg-red-500 rounded-lg items-center shadow-lg">
                            <Text className="text-white font-bold text-lg">Book Ambulance Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <View className="flex-row items-center gap-3">
                        <Clock size={20} color="#2563EB" />
                        <View className="flex-1">
                            <Text className="font-medium text-blue-900">Estimated Arrival Time</Text>
                            <Text className="text-sm text-blue-700">
                                Ambulance will arrive in approximately 8-12 minutes
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}