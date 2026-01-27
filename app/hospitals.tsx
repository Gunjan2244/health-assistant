import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { HospitalCard } from '../features/hospitals/HospitalCard';

const hospitals = [
    { name: 'City General Hospital', distance: '2.3 km', specialty: 'Multi-specialty', type: 'Government' as const, rating: 4.5 },
    { name: 'Apollo Hospital', distance: '4.1 km', specialty: 'Cardiac Care', type: 'Private' as const, rating: 4.8 },
    { name: 'Max Healthcare', distance: '5.7 km', specialty: 'Orthopedics', type: 'Private' as const, rating: 4.6 },
    { name: 'AIIMS', distance: '8.2 km', specialty: 'Multi-specialty', type: 'Government' as const, rating: 4.9 },
];

export default function HospitalsScreen() {
    const [filter, setFilter] = useState<'all' | 'government' | 'private'>('all');

    const filteredHospitals = filter === 'all'
        ? hospitals
        : hospitals.filter(h => h.type.toLowerCase() === filter);

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
            <View className="gap-6">
                <View className="bg-white rounded-xl p-6 shadow-sm">
                    <Text className="text-2xl font-bold text-gray-800 mb-4">Find Hospitals</Text>

                    <View className="relative mb-4">
                        <View className="absolute left-3 top-3 z-10">
                            <MapPin size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            placeholder="Enter location or use current location"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </View>

                    <View className="flex-row gap-2">
                        {(['all', 'government', 'private'] as const).map(type => (
                            <TouchableOpacity
                                key={type}
                                onPress={() => setFilter(type)}
                                className={`px-4 py-2 rounded-lg ${filter === type ? 'bg-blue-500' : 'bg-gray-100'}`}
                            >
                                <Text className={`text-sm capitalize ${filter === type ? 'text-white' : 'text-gray-700'}`}>
                                    {type}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View className="gap-4">
                    {filteredHospitals.map((hospital, idx) => (
                        <HospitalCard key={idx} hospital={hospital} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
