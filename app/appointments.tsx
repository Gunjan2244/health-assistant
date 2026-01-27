import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Bell } from 'lucide-react-native';

export default function AppointmentsScreen() {
    const [consultationType, setConsultationType] = useState<'in-person' | 'video'>('in-person');
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const timeSlots = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
            <View className="gap-6">
                <View className="bg-white rounded-xl p-6 shadow-sm">
                    <Text className="text-2xl font-bold text-gray-800 mb-4">Book Appointment</Text>

                    <View className="gap-4">
                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Select Specialty</Text>
                            <View className="p-3 border border-gray-300 rounded-lg bg-gray-50">
                                <Text className="text-gray-700">General Physician</Text>
                            </View>
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Select Doctor</Text>
                            <View className="p-3 border border-gray-300 rounded-lg bg-gray-50">
                                <Text className="text-gray-700">Dr. Rajesh Kumar (4.8★)</Text>
                            </View>
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Appointment Date</Text>
                            <TextInput
                                placeholder="YYYY-MM-DD"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            />
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</Text>
                            <View className="flex-row flex-wrap gap-2">
                                {timeSlots.map(time => (
                                    <TouchableOpacity
                                        key={time}
                                        onPress={() => setSelectedTime(time)}
                                        className={`py-2 px-3 rounded-lg flex-1 min-w-[30%] items-center ${selectedTime === time
                                                ? 'bg-blue-500 border-blue-500'
                                                : 'bg-white border-gray-300'
                                            } border`}
                                    >
                                        <Text className={`text-sm ${selectedTime === time ? 'text-white' : 'text-gray-700'}`}>
                                            {time}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-700 mb-2">Consultation Type</Text>
                            <View className="flex-row gap-2">
                                <TouchableOpacity
                                    onPress={() => setConsultationType('in-person')}
                                    className={`flex-1 py-3 rounded-lg items-center ${consultationType === 'in-person' ? 'bg-blue-500' : 'bg-gray-100'
                                        }`}
                                >
                                    <Text className={`font-medium ${consultationType === 'in-person' ? 'text-white' : 'text-gray-700'
                                        }`}>
                                        In-Person
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setConsultationType('video')}
                                    className={`flex-1 py-3 rounded-lg items-center ${consultationType === 'video' ? 'bg-blue-500' : 'bg-gray-100'
                                        }`}
                                >
                                    <Text className={`font-medium ${consultationType === 'video' ? 'text-white' : 'text-gray-700'
                                        }`}>
                                        Video Call
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className="bg-gray-50 rounded-lg p-4">
                            <View className="flex-row justify-between mb-2">
                                <Text className="text-gray-600">Consultation Fee</Text>
                                <Text className="font-bold text-gray-800">₹500</Text>
                            </View>
                            <View className="flex-row justify-between mb-2">
                                <Text className="text-gray-600">Platform Fee</Text>
                                <Text className="font-bold text-gray-800">₹50</Text>
                            </View>
                            <View className="border-t border-gray-300 mt-2 pt-2 flex-row justify-between">
                                <Text className="font-bold text-gray-800">Total</Text>
                                <Text className="font-bold text-blue-600 text-lg">₹550</Text>
                            </View>
                        </View>

                        <TouchableOpacity className="w-full py-4 bg-blue-600 rounded-lg items-center shadow-lg">
                            <Text className="text-white font-bold text-lg">Confirm Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <View className="flex-row items-center gap-3">
                        <Bell size={20} color="#9333EA" />
                        <View className="flex-1">
                            <Text className="font-medium text-purple-900">Appointment Reminder</Text>
                            <Text className="text-sm text-purple-700">
                                You'll receive SMS and WhatsApp notifications before your appointment
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
