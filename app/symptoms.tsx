import React from 'react';
import { ScrollView } from 'react-native';
import { SymptomChecker } from '../features/symptom-checker/SymptomChecker';

export default function SymptomsScreen() {
    return (
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
            <SymptomChecker />
        </ScrollView>
    );
}