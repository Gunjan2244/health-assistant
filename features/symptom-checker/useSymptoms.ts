import { useState, useCallback } from 'react';

export type Severity = 'emergency' | 'consult' | 'monitor' | null;

export const commonSymptoms = [
    'Fever', 'Headache', 'Cough', 'Fatigue', 'Nausea', 'Dizziness',
    'Chest Pain', 'Shortness of Breath', 'Body Ache', 'Sore Throat'
] as const;

export const useSymptoms = () => {
    const [symptoms, setSymptoms] = useState<string[]>([]);
    const [severity, setSeverity] = useState<Severity>(null);

    const addSymptom = useCallback((symptom: string) => {
        setSymptoms(prev => prev.includes(symptom) ? prev : [...prev, symptom]);
    }, []);

    const removeSymptom = useCallback((symptom: string) => {
        setSymptoms(prev => prev.filter(s => s !== symptom));
    }, []);

    const analyzeSymptoms = useCallback(() => {
        if (symptoms.some(s => s.includes('Chest Pain') || s.includes('Shortness of Breath'))) {
            setSeverity('emergency');
        } else if (symptoms.length >= 3) {
            setSeverity('consult');
        } else if (symptoms.length > 0) {
            setSeverity('monitor');
        }
    }, [symptoms]);

    const clearSymptoms = useCallback(() => {
        setSymptoms([]);
        setSeverity(null);
    }, []);

    return {
        symptoms,
        severity,
        addSymptom,
        removeSymptom,
        analyzeSymptoms,
        clearSymptoms,
    };
};