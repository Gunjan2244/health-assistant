import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Medicine {
    name: string;
    composition: string;
    price: string;
    generic: boolean;
}

interface MedicineCardProps {
    medicine: Medicine;
}

export const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
    return (
        <View className="bg-white rounded-xl p-5 shadow-sm">
            <View className="flex-row items-start justify-between mb-2">
                <View className="flex-1">
                    <Text className="font-bold text-gray-800 mb-1">{medicine.name}</Text>
                    <Text className="text-sm text-gray-500">Composition: {medicine.composition}</Text>
                </View>
                {medicine.generic && (
                    <View className="px-2 py-1 bg-green-100 rounded">
                        <Text className="text-green-700 text-xs font-medium">Generic</Text>
                    </View>
                )}
            </View>
            <View className="flex-row items-center justify-between mt-2">
                <Text className="text-lg font-bold text-blue-600">{medicine.price}</Text>
                <TouchableOpacity className="px-4 py-2 bg-blue-500 rounded-lg">
                    <Text className="text-white text-sm">View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};