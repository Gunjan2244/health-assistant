import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Search, AlertCircle } from 'lucide-react-native';
import { useSymptoms, commonSymptoms } from './useSymptoms';

export const SymptomChecker: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { symptoms, severity, addSymptom, removeSymptom, analyzeSymptoms } = useSymptoms();

    const getSeverityConfig = () => {
        switch (severity) {
            case 'emergency':
                return {
                    bg: 'bg-red-50',
                    border: 'border-red-500',
                    color: '#DC2626',
                    title: 'Seek Immediate Medical Attention',
                    message: 'Your symptoms indicate a potential emergency. Please call an ambulance or visit the nearest emergency room immediately.'
                };
            case 'consult':
                return {
                    bg: 'bg-yellow-50',
                    border: 'border-yellow-500',
                    color: '#CA8A04',
                    title: 'Consult a Doctor Soon',
                    message: 'Your symptoms suggest you should consult with a healthcare provider within the next 24-48 hours.'
                };
            case 'monitor':
                return {
                    bg: 'bg-green-50',
                    border: 'border-green-500',
                    color: '#16A34A',
                    title: 'Monitor Your Symptoms',
                    message: 'Continue monitoring your symptoms. If they worsen, seek medical advice.'
                };
            default:
                return null;
        }
    };

    const severityConfig = getSeverityConfig();

    return (
        <View className="gap-6">
            <View className="bg-white rounded-xl p-6 shadow-sm">
                <Text className="text-2xl font-bold text-gray-800 mb-4">Symptom Checker</Text>

                <View className="relative mb-4">
                    <View className="absolute left-3 top-3 z-10">
                        <Search size={20} color="#9CA3AF" />
                    </View>
                    <TextInput
                        placeholder="Search symptoms..."
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-sm text-gray-600 mb-2">Common symptoms:</Text>
                    <View className="flex-row flex-wrap gap-2">
                        {commonSymptoms.map(symptom => (
                            <TouchableOpacity
                                key={symptom}
                                onPress={() => addSymptom(symptom)}
                                className="px-3 py-1 bg-blue-50 rounded-full"
                                disabled={symptoms.includes(symptom)}
                            >
                                <Text className="text-blue-700 text-sm">+ {symptom}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {symptoms.length > 0 && (
                    <View className="mb-4">
                        <Text className="text-sm font-medium text-gray-700 mb-2">Selected symptoms:</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {symptoms.map((symptom, idx) => (
                                <View key={idx} className="px-3 py-1 bg-purple-100 rounded-full flex-row items-center gap-2">
                                    <Text className="text-purple-700 text-sm">{symptom}</Text>
                                    <TouchableOpacity onPress={() => removeSymptom(symptom)}>
                                        <Text className="text-purple-900 font-bold">×</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    onPress={analyzeSymptoms}
                    disabled={symptoms.length === 0}
                    className={`w-full py-3 rounded-lg items-center ${symptoms.length === 0 ? 'bg-blue-300' : 'bg-blue-600'
                        }`}
                >
                    <Text className="text-white font-medium text-lg">Analyze Symptoms</Text>
                </TouchableOpacity>
            </View>

            {severityConfig && (
                <View className={`rounded-xl p-6 border-l-4 shadow-sm ${severityConfig.bg} ${severityConfig.border}`}>
                    <View className="flex-row items-start gap-3">
                        <AlertCircle size={24} color={severityConfig.color} />
                        <View className="flex-1">
                            <Text className="font-bold text-lg mb-2 text-gray-900">{severityConfig.title}</Text>
                            <Text className="text-gray-700 leading-5">{severityConfig.message}</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};