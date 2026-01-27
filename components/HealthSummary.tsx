import React from 'react';
import { View, Text } from 'react-native';
import { Heart, Pill, Calendar } from 'lucide-react-native';

const healthMetrics = [
    {
        label: 'Last Checkup',
        value: '15',
        unit: 'days ago',
        icon: Heart,
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        trend: 'Schedule next'
    },
    {
        label: 'Medicines',
        value: '3',
        unit: 'active',
        icon: Pill,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        trend: 'On time'
    },
    {
        label: 'Appointments',
        value: '2',
        unit: 'upcoming',
        icon: Calendar,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        trend: 'This week'
    },
];

export const HealthSummary: React.FC = () => {
    return (
        <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4 px-1">
                <Text className="text-lg font-bold text-gray-900">Health Summary</Text>
                <Text className="text-xs text-gray-500 font-medium">Updated today</Text>
            </View>

            <View className="flex-row justify-between gap-3">
                {healthMetrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                        <View key={idx} className={`bg-white border ${metric.border || 'border-gray-200'} rounded-2xl p-3 flex-1 shadow-sm`}>
                            <View className={`w-10 h-10 ${metric.bg} rounded-xl items-center justify-center mb-3`}>
                                <Icon size={20} className={metric.color} style={{ color: metric.color.replace('text-', '').replace('-600', '') === 'rose' ? '#E11D48' : metric.color.replace('text-', '').replace('-600', '') === 'blue' ? '#2563EB' : '#4F46E5' } as any} color={metric.color.includes('rose') ? '#E11D48' : metric.color.includes('blue') ? '#2563EB' : '#4F46E5'} />
                            </View>
                            <Text className="text-xs text-gray-600 mb-1 font-medium">{metric.label}</Text>
                            <View className="flex-row items-baseline gap-1 mb-1">
                                <Text className="text-xl font-bold text-gray-900">{metric.value}</Text>
                                <Text className="text-[10px] text-gray-500">{metric.unit}</Text>
                            </View>
                            <Text className="text-[10px] text-gray-400 font-medium">{metric.trend}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
