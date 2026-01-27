import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { quickActions } from '../constants/navigation';

export const QuickActions: React.FC = () => {
    const router = useRouter();

    return (
        <View>
            <View className="flex-row items-center justify-between mb-4 px-1">
                <Text className="text-lg font-semibold text-slate-900">Quick Actions</Text>
            </View>

            <View className="flex-row flex-wrap justify-between gap-y-4">
                {quickActions.map(action => {
                    const Icon = action.icon;
                    const isEmergency = action.id === 'emergency';

                    return (
                        <TouchableOpacity
                            key={action.id}
                            onPress={() => router.push(action.route as any)}
                            className={`w-[48%] p-4 rounded-2xl border shadow-sm items-start gap-3
                                ${isEmergency
                                    ? 'bg-red-50 border-red-100'
                                    : 'bg-white border-slate-100'
                                }`}
                        >
                            <View className={`w-10 h-10 rounded-full items-center justify-center
                                ${isEmergency
                                    ? 'bg-red-100'
                                    : 'bg-blue-50'
                                }`}>
                                <Icon size={20} color={isEmergency ? '#DC2626' : '#2563EB'} />
                            </View>

                            <Text className={`font-medium text-[15px]
                                ${isEmergency
                                    ? 'text-red-900'
                                    : 'text-slate-700'
                                }`}>
                                {action.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};
