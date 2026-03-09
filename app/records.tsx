import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FileText, Upload, ChevronRight, Folder } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function RecordsScreen() {
    const router = useRouter();

    const categories = [
        { id: '1', name: 'Lab Reports', count: 12, color: 'bg-blue-100', iconColor: '#3B82F6' },
        { id: '2', name: 'Prescriptions', count: 5, color: 'bg-green-100', iconColor: '#22C55E' },
        { id: '3', name: 'Imaging (X-Ray/MRI)', count: 3, color: 'bg-purple-100', iconColor: '#A855F7' },
        { id: '4', name: 'Vaccinations', count: 2, color: 'bg-orange-100', iconColor: '#F97316' },
    ];

    const recentDocuments = [
        { id: '101', title: 'Blood Test Results', date: 'Oct 24, 2024', type: 'Lab Report', doctor: 'Dr. Sarah Smith' },
        { id: '102', title: 'Viral Fever Prescription', date: 'Sep 15, 2024', type: 'Prescription', doctor: 'Dr. Rajesh Kumar' },
        { id: '103', title: 'Annual Checkup Summary', date: 'Aug 01, 2024', type: 'General', doctor: 'Dr. Sarah Smith' },
    ];

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>

            {/* Header Section */}
            <View className="flex-row justify-between items-center mb-6">
                <View>
                    <Text className="text-2xl font-bold text-gray-900">Medical Records</Text>
                    <Text className="text-gray-500">Manage your health documents</Text>
                </View>
                <TouchableOpacity className="bg-blue-600 p-3 rounded-full shadow-md">
                    <Upload size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Categories Grid */}
            <Text className="text-lg font-semibold text-gray-800 mb-3">Categories</Text>
            <View className="flex-row flex-wrap justify-between gap-y-4 mb-8">
                {categories.map((cat) => (
                    <TouchableOpacity key={cat.id} className="w-[48%] bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <View className={`w-10 h-10 rounded-full ${cat.color} items-center justify-center mb-3`}>
                            <Folder size={20} color={cat.iconColor} />
                        </View>
                        <Text className="font-semibold text-gray-800 text-base">{cat.name}</Text>
                        <Text className="text-gray-500 text-sm">{cat.count} files</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Recent Documents List */}
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-lg font-semibold text-gray-800">Recent Documents</Text>
                <TouchableOpacity>
                    <Text className="text-blue-600 font-medium">See All</Text>
                </TouchableOpacity>
            </View>

            <View className="gap-3">
                {recentDocuments.map((doc) => (
                    <TouchableOpacity key={doc.id} className="bg-white p-4 rounded-xl flex-row items-center shadow-sm border border-gray-100">
                        <View className="bg-gray-100 p-3 rounded-lg mr-4">
                            <FileText size={24} color="#4B5563" />
                        </View>
                        <View className="flex-1">
                            <Text className="font-semibold text-gray-800 text-base">{doc.title}</Text>
                            <Text className="text-gray-500 text-sm">{doc.type} • {doc.date}</Text>
                            <Text className="text-blue-500 text-xs mt-1">{doc.doctor}</Text>
                        </View>
                        <ChevronRight size={20} color="#9CA3AF" />
                    </TouchableOpacity>
                ))}
            </View>

        </ScrollView>
    );
}
