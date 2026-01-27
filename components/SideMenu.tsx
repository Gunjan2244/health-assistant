import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { navigationItems } from '../constants/navigation';

interface SideMenuProps {
    menuOpen: boolean;
    closeMenu: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ menuOpen, closeMenu }) => {
    const router = useRouter();
    const pathname = usePathname();

    if (!menuOpen) return null;

    const handleNavigation = (route: string) => {
        router.push(route as any);
        closeMenu();
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={closeMenu}
            className="absolute inset-0 bg-black/50 z-40"
        >
            <View
                className="absolute right-0 top-0 bottom-0 w-72 bg-white z-50 p-6"
                onStartShouldSetResponder={() => true}
            >
                <Text className="text-lg font-bold mb-6 text-gray-800">Navigation</Text>
                <View className="gap-2">
                    {navigationItems.map(item => {
                        const Icon = item.icon;
                        const isActive = pathname === item.route;

                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => handleNavigation(item.route)}
                                className={`flex-row items-center gap-3 px-4 py-3 rounded-lg ${isActive ? 'bg-blue-500' : 'bg-transparent'
                                    }`}
                            >
                                <Icon size={20} color={isActive ? "white" : "#374151"} />
                                <Text className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </TouchableOpacity>
    );
};
