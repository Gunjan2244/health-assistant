import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Search } from 'lucide-react-native';
import { MedicineCard } from '../features/medicines/MedicineCard';

const medicines = [
    { name: 'Paracetamol 500mg', composition: 'Paracetamol', price: '₹15', generic: true },
    { name: 'Dolo 650', composition: 'Paracetamol', price: '₹30', generic: false },
    { name: 'Calpol 500', composition: 'Paracetamol', price: '₹25', generic: false },
    { name: 'Metacin', composition: 'Paracetamol', price: '₹12', generic: true },
];

export default function MedicinesScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'generic'>('all');

    const filteredMedicines = filter === 'generic'
        ? medicines.filter(m => m.generic)
        : medicines;

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
            <View className="gap-6">
                <View className="bg-white rounded-xl p-6 shadow-sm">
                    <Text className="text-2xl font-bold text-gray-800 mb-4">Find Medicines</Text>

                    <View className="relative mb-4">
                        <View className="absolute left-3 top-3 z-10">
                            <Search size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            placeholder="Search by medicine name or composition"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </View>

                    <View className="flex-row gap-2">
                        <TouchableOpacity
                            onPress={() => setFilter('generic')}
                            className={`px-4 py-2 rounded-lg ${filter === 'generic' ? 'bg-green-100' : 'bg-gray-100'}`}
                        >
                            <Text className={`text-sm font-medium ${filter === 'generic' ? 'text-green-700' : 'text-gray-700'}`}>
                                Generic Only
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-100' : 'bg-gray-100'}`}
                        >
                            <Text className={`text-sm ${filter === 'all' ? 'text-blue-700' : 'text-gray-700'}`}>
                                All Medicines
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="gap-3">
                    {filteredMedicines.map((medicine, idx) => (
                        <MedicineCard key={idx} medicine={medicine} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
