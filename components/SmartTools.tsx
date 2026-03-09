import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MessageSquare, Activity, Camera, Pill, Users, FileText } from 'lucide-react-native';

const practicalAIFeatures = [
    {
        id: 'symptoms',
        label: 'Symptom Checker',
        icon: MessageSquare,
        color: 'bg-emerald-500',
        desc: 'AI-powered analysis',
        route: '/symptoms',
    },
    {
        id: 'vitals',
        label: 'Health Tracker',
        icon: Activity,
        color: 'bg-rose-500',
        desc: 'Track vitals daily',
        route: '/vitals',
    },
    {
        id: 'camera',
        label: 'Scan Prescription',
        icon: Camera,
        color: 'bg-violet-500',
        desc: 'OCR text extraction',
        route: '/records', // Assuming camera might lead to records upload for now
    },
    {
        id: 'medicine',
        label: 'Medicine Finder',
        icon: Pill,
        color: 'bg-cyan-500',
        desc: 'Find pharmacies',
        route: '/medicines',
    },
    {
        id: 'doctors',
        label: 'Find Doctors',
        icon: Users,
        color: 'bg-indigo-500',
        desc: 'Book appointments',
        route: '/appointments',
    },
    {
        id: 'records',
        label: 'Health Records',
        icon: FileText,
        color: 'bg-amber-500',
        desc: 'Medical documents',
        route: '/records',
    },
];

import { useRouter } from 'expo-router';

export const SmartTools: React.FC = () => {
    const router = useRouter();

    return (
        <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-4 px-1">Smart Health Tools</Text>

            <View className="flex-row flex-wrap justify-between gap-y-4">
                {practicalAIFeatures.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <TouchableOpacity
                            key={feature.id}
                            onPress={() => router.push(feature.route as any)}
                            className="bg-white border border-gray-200 rounded-2xl p-4 w-[48%] shadow-sm"
                        >
                            <View className={`w-12 h-12 ${feature.color} rounded-xl items-center justify-center mb-3 shadow-sm`}>
                                <Icon size={24} color="white" />
                            </View>
                            <Text className="font-semibold text-gray-900 text-sm mb-1">{feature.label}</Text>
                            <Text className="text-xs text-gray-500">{feature.desc}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};
