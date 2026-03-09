import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Utensils, Droplet, Flame, Plus, ChevronRight } from 'lucide-react-native';

export default function DietScreen() {
    const meals = [
        { title: 'Breakfast', calories: 450, recommended: 500, items: 'Oatmeal, Banana, Coffee' },
        { title: 'Lunch', calories: 650, recommended: 700, items: 'Grilled Chicken Salad, Apple' },
        { title: 'Snacks', calories: 150, recommended: 200, items: 'Greek Yogurt, Nuts' },
        { title: 'Dinner', calories: 0, recommended: 600, items: 'Not logged yet' },
    ];

    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>

            {/* Header */}
            <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-900">Diet & Nutrition</Text>
                <Text className="text-gray-500">Track your meals and calories</Text>
            </View>

            {/* Calorie Summary Card */}
            <View className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <View className="flex-row justify-between items-center mb-4">
                    <View>
                        <Text className="text-lg font-bold text-gray-900">Summary</Text>
                        <Text className="text-gray-500 text-sm">Today</Text>
                    </View>
                    <View className="bg-orange-50 p-2 rounded-full">
                        <Flame size={24} color="#F97316" />
                    </View>
                </View>

                <View className="flex-row justify-between items-end mb-2">
                    <View>
                        <Text className="text-3xl font-bold text-gray-900">1,250</Text>
                        <Text className="text-gray-500 text-xs">Eaten</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-sm font-bold text-gray-400">2,000</Text>
                        <Text className="text-gray-400 text-xs">Goal</Text>
                    </View>
                    <View className="items-end">
                        <Text className="text-3xl font-bold text-green-600">750</Text>
                        <Text className="text-gray-500 text-xs">Left</Text>
                    </View>
                </View>

                {/* Progress Bar */}
                <View className="h-3 bg-gray-100 rounded-full overflow-hidden mt-2">
                    <View className="h-full bg-orange-500 w-[62%]" />
                </View>
            </View>

            {/* Water Tracker */}
            <View className="bg-blue-50 p-5 rounded-2xl border border-blue-100 mb-6 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <View className="bg-blue-100 p-3 rounded-full mr-4">
                        <Droplet size={24} color="#3B82F6" />
                    </View>
                    <View>
                        <Text className="font-bold text-blue-900 text-lg">Water Intake</Text>
                        <Text className="text-blue-700 text-sm">4 / 8 Glasses</Text>
                    </View>
                </View>
                <TouchableOpacity className="bg-blue-500 w-10 h-10 rounded-full items-center justify-center shadow-sm">
                    <Plus size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Meals List */}
            <View>
                <Text className="text-lg font-bold text-gray-900 mb-3">Today's Meals</Text>
                <View className="gap-3">
                    {meals.map((meal, index) => (
                        <TouchableOpacity key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-row items-center justify-between">
                            <View className="flex-1">
                                <View className="flex-row justify-between mb-1">
                                    <Text className="font-semibold text-gray-800 text-base">{meal.title}</Text>
                                    <Text className="text-gray-500 text-sm font-medium">{meal.calories} / {meal.recommended} kcal</Text>
                                </View>
                                <Text className="text-gray-400 text-sm" numberOfLines={1}>{meal.items}</Text>
                            </View>
                            <View className="ml-3">
                                {meal.calories === 0 ? (
                                    <View className="bg-gray-100 w-8 h-8 rounded-full items-center justify-center">
                                        <Plus size={18} color="#9CA3AF" />
                                    </View>
                                ) : (
                                    <ChevronRight size={20} color="#D1D5DB" />
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

        </ScrollView>
    );
}
