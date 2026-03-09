import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    Modal,
    StyleSheet,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { X, Mic, MicOff, Sparkles, SendHorizontal, Zap } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

const { height, width } = Dimensions.get('window');

interface AISystemOverlayProps {
    visible: boolean;
    onClose: () => void;
}

export const AISystemOverlay: React.FC<AISystemOverlayProps> = ({ visible, onClose }) => {
    const [isListening, setIsListening] = useState(true);
    const [inputText, setInputText] = useState('');

    // Animations
    const slideAnim = useRef(new Animated.Value(height)).current;
    const backdropAnim = useRef(new Animated.Value(0)).current;
    const visualizerScale = useRef(new Animated.Value(0.8)).current;
    const visualizerOpacity = useRef(new Animated.Value(0)).current;

    // Pulse rings animation
    const pulse1 = useRef(new Animated.Value(1)).current;
    const pulse2 = useRef(new Animated.Value(1)).current;
    const pulse3 = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (visible) {
            // Entrance animation
            Animated.parallel([
                Animated.spring(slideAnim, {
                    toValue: 0,
                    useNativeDriver: true,
                    tension: 50,
                    friction: 12,
                }),
                Animated.timing(backdropAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(visualizerOpacity, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.spring(visualizerScale, {
                    toValue: 1,
                    tension: 40,
                    friction: 8,
                    useNativeDriver: true,
                }),
            ]).start();

            // Continuous pulse animation
            startPulseAnimation();
        } else {
            // Exit animation
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: height,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(backdropAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible]);

    const startPulseAnimation = () => {
        const createPulse = (anim: Animated.Value, delay: number) => {
            return Animated.loop(
                Animated.sequence([
                    Animated.delay(delay),
                    Animated.parallel([
                        Animated.timing(anim, {
                            toValue: 1.5,
                            duration: 2000,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.timing(anim, {
                        toValue: 1,
                        duration: 0,
                        useNativeDriver: true,
                    }),
                ])
            );
        };

        createPulse(pulse1, 0).start();
        createPulse(pulse2, 666).start();
        createPulse(pulse3, 1333).start();
    };

    if (!visible) return null;

    return (
        <Modal
            transparent
            visible={visible}
            animationType="none"
            statusBarTranslucent
            onRequestClose={onClose}
        >
            {/* Full-screen backdrop with blur */}
            <Animated.View
                style={[
                    styles.backdrop,
                    {
                        opacity: backdropAnim,
                    },
                ]}
            >
                {/* System-level dimming */}
                <View style={styles.dimOverlay} />

                {/* Main overlay container */}
                <Animated.View
                    style={[
                        styles.overlayContainer,
                        {
                            transform: [{ translateY: slideAnim }],
                        },
                    ]}
                >
                    {/* Status bar spacer */}
                    <View style={styles.statusBarSpacer} />

                    {/* Header - minimalist close button */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.closeButton}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <View style={styles.closeButtonInner}>
                                <X size={20} color="#9CA3AF" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Immersive visualizer area */}
                    <Animated.View
                        style={[
                            styles.visualizerContainer,
                            {
                                opacity: visualizerOpacity,
                                transform: [{ scale: visualizerScale }],
                            },
                        ]}
                    >
                        {/* Pulse rings */}
                        <Animated.View
                            style={[
                                styles.pulseRing,
                                styles.pulseRing1,
                                {
                                    transform: [{ scale: pulse1 }],
                                    opacity: pulse1.interpolate({
                                        inputRange: [1, 1.5],
                                        outputRange: [0.4, 0],
                                    }),
                                },
                            ]}
                        />
                        <Animated.View
                            style={[
                                styles.pulseRing,
                                styles.pulseRing2,
                                {
                                    transform: [{ scale: pulse2 }],
                                    opacity: pulse2.interpolate({
                                        inputRange: [1, 1.5],
                                        outputRange: [0.35, 0],
                                    }),
                                },
                            ]}
                        />
                        <Animated.View
                            style={[
                                styles.pulseRing,
                                styles.pulseRing3,
                                {
                                    transform: [{ scale: pulse3 }],
                                    opacity: pulse3.interpolate({
                                        inputRange: [1, 1.5],
                                        outputRange: [0.3, 0],
                                    }),
                                },
                            ]}
                        />

                        {/* Central orb */}
                        {/* <View style={styles.orbContainer}>
                            <View style={styles.orbGlow} />
                            <View style={styles.orb}>
                                <View style={styles.orbInner}>
                                    {isListening ? (
                                        <Mic size={40} color="white" strokeWidth={2} />
                                    ) : (
                                        <Sparkles size={40} color="white" fill="white" />
                                    )}
                                </View>
                            </View>
                        </View> */}

                        {/* AI Status text */}
                        <View style={styles.statusTextContainer}>
                            <Text style={styles.statusTitle}>
                                {isListening ? 'Listening...' : 'AI Assistant'}
                            </Text>
                            <Text style={styles.statusSubtitle}>
                                {isListening
                                    ? 'Speak naturally or tap to type'
                                    : 'How can I help you today?'}
                            </Text>
                        </View>

                        {/* Voice level indicator (when listening) */}
                        {isListening && (
                            <View style={styles.voiceLevelContainer}>
                                <View style={styles.voiceLevel} />
                            </View>
                        )}
                    </Animated.View>

                    {/* Suggestions chips */}
                    <View style={styles.suggestionsContainer}>
                        {['Check symptoms', 'Find hospital', 'Book appointment'].map((suggestion) => (
                            <TouchableOpacity
                                key={suggestion}
                                style={styles.suggestionChip}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.suggestionText}>{suggestion}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Bottom input area */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.bottomContainer}
                    >
                        <View style={styles.inputContainer}>
                            {/* Mic toggle */}
                            <TouchableOpacity
                                onPress={() => setIsListening(!isListening)}
                                style={styles.micButton}
                            >
                                {isListening ? (
                                    <MicOff size={24} color="#DC2626" />
                                ) : (
                                    <Mic size={24} color="#4B5563" />
                                )}
                            </TouchableOpacity>

                            {/* Text input */}
                            <View style={styles.textInputWrapper}>
                                <TextInput
                                    placeholder="Type your message..."
                                    placeholderTextColor="#9CA3AF"
                                    value={inputText}
                                    onChangeText={setInputText}
                                    style={styles.textInput}
                                    multiline
                                />
                            </View>

                            {/* Send button */}
                            <TouchableOpacity
                                style={[
                                    styles.sendButton,
                                    inputText.length > 0 && styles.sendButtonActive,
                                ]}
                                disabled={inputText.length === 0}
                            >
                                <SendHorizontal
                                    size={20}
                                    color={inputText.length > 0 ? 'white' : '#9CA3AF'}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Safety disclaimer */}
                        <Text style={styles.disclaimer}>
                            AI can make mistakes. Verify important health information.
                        </Text>
                    </KeyboardAvoidingView>
                </Animated.View>
            </Animated.View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.85)', // Deep dim
    },
    dimOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    statusBarSpacer: {
        height: StatusBar.currentHeight || 44,
        backgroundColor: 'transparent',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 16,
        alignItems: 'flex-start',
    },
    closeButton: {
        padding: 4,
    },
    closeButtonInner: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    visualizerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    pulseRing: {
        position: 'absolute',
        borderRadius: 9999,
        backgroundColor: '#DC2626',
    },
    pulseRing1: {
        width: 280,
        height: 280,
    },
    pulseRing2: {
        width: 220,
        height: 220,
    },
    pulseRing3: {
        width: 160,
        height: 160,
    },
    orbContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    orbGlow: {
        position: 'absolute',
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: '#DC2626',
        opacity: 0.2,
    },
    orb: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#DC2626',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#DC2626',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 12,
    },
    orbInner: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusTextContainer: {
        marginTop: 48,
        alignItems: 'center',
    },
    statusTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8,
        letterSpacing: -0.5,
    },
    statusSubtitle: {
        fontSize: 15,
        color: '#6B7280',
        textAlign: 'center',
    },
    voiceLevelContainer: {
        marginTop: 32,
        width: 200,
        height: 4,
        backgroundColor: '#F3F4F6',
        borderRadius: 2,
        overflow: 'hidden',
    },
    voiceLevel: {
        height: '100%',
        width: '60%',
        backgroundColor: '#DC2626',
        borderRadius: 2,
    },
    suggestionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        paddingHorizontal: 20,
        paddingBottom: 24,
        flexWrap: 'wrap',
    },
    suggestionChip: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F9FAFB',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    suggestionText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#374151',
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 12,
        backgroundColor: '#F9FAFB',
        borderRadius: 24,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    micButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    textInputWrapper: {
        flex: 1,
        maxHeight: 100,
    },
    textInput: {
        fontSize: 15,
        color: '#111827',
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonActive: {
        backgroundColor: '#DC2626',
    },
    disclaimer: {
        fontSize: 11,
        color: '#9CA3AF',
        textAlign: 'center',
        marginTop: 12,
    },
});
