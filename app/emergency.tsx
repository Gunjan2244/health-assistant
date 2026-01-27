import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AlertCircle, Phone, Hospital } from 'lucide-react-native';
import { emergencyContacts } from '../constants/emergencyContacts';

export default function EmergencyScreen() {
    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
            <View className="gap-6">
                <View className="bg-red-600 rounded-xl p-6 shadow-xl">
                    <View className="flex-row items-center gap-3 mb-4">
                        <AlertCircle size={32} color="white" />
                        <Text className="text-2xl font-bold text-white">Emergency Services</Text>
                    </View>
                    <Text className="mb-6 text-white">Quick access to emergency medical services</Text>

                    <View className="gap-3">
                        <TouchableOpacity className="w-full bg-white py-4 rounded-lg flex-row items-center justify-center gap-2">
                            <Phone size={20} color="#DC2626" />
                            <Text className="text-red-600 font-bold text-lg">Call Ambulance (108)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="w-full bg-red-800 py-4 rounded-lg flex-row items-center justify-center gap-2">
                            <Hospital size={20} color="white" />
                            <Text className="text-white font-bold text-lg">Nearest Emergency Room</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="bg-white rounded-xl p-6 shadow-sm">
                    <Text className="font-bold text-lg mb-4 text-gray-800">Emergency Contacts</Text>
                    <View className="gap-3">
                        {emergencyContacts.map((contact, idx) => (
                            <View key={idx} className="flex-row items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <View>
                                    <Text className="font-medium text-gray-800">{contact.name}</Text>
                                    <Text className="text-sm text-gray-500">{contact.type}</Text>
                                </View>
                                <TouchableOpacity className="px-4 py-2 bg-blue-500 rounded-lg flex-row items-center gap-2">
                                    <Phone size={16} color="white" />
                                    <Text className="text-white font-medium">{contact.number}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
