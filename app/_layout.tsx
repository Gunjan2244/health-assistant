import "../global.css";
import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar, View, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HealthHeader } from '../components/HealthHeader';
import { SideMenu } from '../components/SideMenu';
import { AIAssistantHandle } from '../components/AIAssistantHandle';
import { AISystemOverlay } from '../components/AISystemOverlay';
import { useMenu } from '../hooks/useMenu';

export default function RootLayout() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const [isAIActive, setAIActive] = useState(false);

  useEffect(() => {
    const onBackPress = () => {
      if (isAIActive) {
        setAIActive(false);
        return true;
      }
      if (menuOpen) {
        closeMenu();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => subscription.remove();
  }, [menuOpen, closeMenu, isAIActive]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        barStyle={isAIActive ? "light-content" : "dark-content"}
        backgroundColor={isAIActive ? "rgba(0, 0, 0, 0.85)" : "white"}
        translucent
      />
      <View className="flex-1 bg-gray-50">
        {/* App header - hidden when AI is active */}
        {!isAIActive && (
          <HealthHeader
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
          />
        )}

        <SideMenu menuOpen={menuOpen} closeMenu={closeMenu} />

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#F9FAFB' },
          }}
        />

        {/* Edge-anchored AI handle - always visible */}
        {!isAIActive && (
          <AIAssistantHandle onPress={() => setAIActive(true)} />
        )}

        {/* System-level AI overlay */}
        <AISystemOverlay
          visible={isAIActive}
          onClose={() => setAIActive(false)}
        />
      </View>
    </SafeAreaView>
  );
}