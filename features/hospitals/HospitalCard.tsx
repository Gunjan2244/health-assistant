import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MapPin } from 'lucide-react-native';

interface Hospital {
    name: string;
    distance: string;
    specialty: string;
    type: 'Government' | 'Private';
    rating: number;
}

interface HospitalCardProps {
    hospital: Hospital;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
    return (
        <View className="bg-white rounded-xl p-5 shadow-sm">
            <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                    <Text className="font-bold text-lg text-gray-800">{hospital.name}</Text>
                    <Text className="text-sm text-gray-500">{hospital.specialty}</Text>
                </View>
                <View className={`px-3 py-1 rounded-full ${hospital.type === 'Government' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                    <Text className={`text-xs font-medium ${hospital.type === 'Government' ? 'text-green-700' : 'text-blue-700'
                        }`}>
                        {hospital.type}
                    </Text>
                </View>
            </View>

            <View className="flex-row items-center gap-4 mb-3">
                <View className="flex-row items-center gap-1">
                    <MapPin size={16} color="#4B5563" />
                    <Text className="text-gray-600 text-sm">{hospital.distance}</Text>
                </View>
                <View className="flex-row items-center gap-1">
                    <Text className="text-sm">⭐ {hospital.rating}</Text>
                </View>
            </View>

            <View className="flex-row gap-2">
                <TouchableOpacity className="flex-1 py-2 bg-blue-500 rounded-lg items-center">
                    <Text className="text-white font-medium text-sm">Get Directions</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 py-2 border border-blue-500 rounded-lg items-center">
                    <Text className="text-blue-500 font-medium text-sm">Call Hospital</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};