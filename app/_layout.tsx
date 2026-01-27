import "../global.css";
import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar, View, BackHandler } from 'react-native';
import { HealthHeader } from '../components/HealthHeader';
import { SideMenu } from '../components/SideMenu';
import { AIAssistantControl } from '../components/AIAssistantControl';
import { AIOverlay } from '../components/AIOverlay';
import { useMenu } from '../hooks/useMenu';

export default function RootLayout() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const [isAIOverlayVisible, setAIOverlayVisible] = useState(false);

  useEffect(() => {
    const onBackPress = () => {
      if (isAIOverlayVisible) {
        setAIOverlayVisible(false);
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
  }, [menuOpen, closeMenu, isAIOverlayVisible]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View className="flex-1 bg-gray-50">
        <HealthHeader
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
        />

        <SideMenu menuOpen={menuOpen} closeMenu={closeMenu} />

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#F9FAFB' }, // gray-50
          }}
        />

        {/* New AI Interaction Model */}
        {!isAIOverlayVisible && (
          <AIAssistantControl onPress={() => setAIOverlayVisible(true)} />
        )}

        <AIOverlay
          visible={isAIOverlayVisible}
          onClose={() => setAIOverlayVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
}