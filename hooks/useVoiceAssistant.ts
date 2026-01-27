import { useState } from 'react';

export const useVoiceAssistant = () => {
    const [isListening, setIsListening] = useState(false);
    const [voiceCommand, setVoiceCommand] = useState('');

    const toggleVoiceRecognition = () => {
        const newState = !isListening;
        setIsListening(newState);

        if (newState) {
            setTimeout(() => {
                setVoiceCommand("Navigating to symptom checker...");
                setTimeout(() => {
                    setVoiceCommand('');
                    setIsListening(false);
                }, 2000);
            }, 1500);
        } else {
            setVoiceCommand('');
        }
    };

    return { isListening, voiceCommand, toggleVoiceRecognition };
};