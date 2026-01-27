import React from 'react';
import { ScrollView, View } from 'react-native';
import { AIHeroCard } from '../components/AIHeroCard';
import { EmergencySection } from '../components/EmergencySection';
import { HealthSummary } from '../components/HealthSummary';
import { SmartTools } from '../components/SmartTools';
import { Reminders } from '../components/Reminders';
// QuickActions and HealthTipCard are replaced by the new comprehensive layout

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ padding: 16, paddingBottom: 120 }} // Extra padding for Docked AI Bar
      showsVerticalScrollIndicator={false}
    >
      <AIHeroCard onPressMic={() => { }} />
      <EmergencySection />
      <HealthSummary />
      <SmartTools />
      <Reminders />
    </ScrollView>
  );
}
