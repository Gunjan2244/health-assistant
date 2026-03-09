import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { User, Settings, Bell, Shield, Heart, Smartphone, LogOut, ChevronRight, CircleUser, Phone } from 'lucide-react-native';

export default function ProfileScreen() {
    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
                <Text className="text-2xl font-bold text-gray-900">Profile</Text>
                <TouchableOpacity>
                    <Settings size={24} color="#374151" />
                </TouchableOpacity>
            </View>

            {/* Profile Card */}
            <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-row items-center mb-6">
                <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center mr-4">
                    <CircleUser size={40} color="#3B82F6" />
                </View>
                <View className="flex-1">
                    <Text className="text-lg font-bold text-gray-900">Alex Johnston</Text>
                    <Text className="text-gray-500 text-sm">alex.johnston@example.com</Text>
                    <TouchableOpacity className="mt-2">
                        <Text className="text-blue-600 font-medium text-sm">Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Premium Banner */}
            <View className="bg-purple-900 rounded-2xl p-4 mb-6 relative overflow-hidden">
                <View className="relative z-10 flex-row items-center justify-between">
                    <View>
                        <Text className="text-white font-bold text-lg">Health+ Premium</Text>
                        <Text className="text-purple-200 text-sm">Unlock advanced AI analysis</Text>
                    </View>
                    <TouchableOpacity className="bg-white px-3 py-2 rounded-lg">
                        <Text className="text-purple-900 font-bold text-sm">Upgrade</Text>
                    </TouchableOpacity>
                </View>
                {/* Decoration */}
                <View className="absolute -right-6 -bottom-10 w-32 h-32 bg-purple-700 rounded-full opacity-50" />
            </View>

            {/* Settings Groups */}
            <View className="gap-6">

                {/* Account & Security */}
                <View>
                    <Text className="text-sm font-bold text-gray-500 uppercase mb-2 ml-1">Account</Text>
                    <View className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <SettingsItem icon={User} title="Personal Details" />
                        <Divider />
                        <SettingsItem icon={Shield} title="Privacy & Security" />
                        <Divider />
                        <SettingsItem icon={Bell} title="Notifications" badge="2" />
                    </View>
                </View>

                {/* Health & Devices */}
                <View>
                    <Text className="text-sm font-bold text-gray-500 uppercase mb-2 ml-1">Health Configuration</Text>
                    <View className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <SettingsItem icon={Heart} title="Health Profile" subtitle="Age, Blood Group, Height" />
                        <Divider />
                        <SettingsItem icon={Smartphone} title="My Devices" subtitle="Watch Series 8 connected" />
                        <Divider />
                        <SettingsItem icon={Phone} title="Emergency Contacts" />
                    </View>
                </View>

                {/* Support */}
                <View>
                    <Text className="text-sm font-bold text-gray-500 uppercase mb-2 ml-1">More</Text>
                    <View className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <SettingsItem icon={Settings} title="App Settings" />
                        <Divider />
                        <TouchableOpacity className="flex-row items-center justify-between p-4 active:bg-gray-50">
                            <View className="flex-row items-center">
                                <View className="p-2 rounded-lg bg-red-50 mr-3">
                                    <LogOut size={20} color="#EF4444" />
                                </View>
                                <Text className="font-medium text-red-600 text-base">Log Out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

// Helper Components
function SettingsItem({ icon: Icon, title, subtitle, badge, onPress }: any) {
    return (
        <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between p-4 active:bg-gray-50">
            <View className="flex-row items-center flex-1">
                <View className="p-2 rounded-lg bg-gray-50 mr-3">
                    <Icon size={20} color="#4B5563" />
                </View>
                <View>
                    <Text className="font-medium text-gray-800 text-base">{title}</Text>
                    {subtitle && <Text className="text-gray-400 text-xs mt-0.5">{subtitle}</Text>}
                </View>
            </View>
            <View className="flex-row items-center">
                {badge && (
                    <View className="bg-red-500 px-2 py-0.5 rounded-full mr-2">
                        <Text className="text-white text-xs font-bold">{badge}</Text>
                    </View>
                )}
                <ChevronRight size={20} color="#D1D5DB" />
            </View>
        </TouchableOpacity>
    );
}

function Divider() {
    return <View className="h-[1px] bg-gray-100 ml-14" />;
}