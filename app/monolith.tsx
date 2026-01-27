import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    SafeAreaView,
    StatusBar,
    Modal
} from 'react-native';
import {
    Camera, Mic, MicOff, Phone, Hospital, Pill, Calendar,
    AlertCircle, MapPin, Clock, ChevronRight, Menu, X,
    Heart, Activity, MessageSquare, Search, User, Settings,
    Ambulance, Bell, Home, FileText, Shield, Zap
} from 'lucide-react-native';
import { Link } from 'expo-router';

// Main App Component
const HealthAssistantApp = () => {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [isListening, setIsListening] = useState(false);
    const [voiceCommand, setVoiceCommand] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    // Simulated voice recognition
    const toggleVoiceRecognition = () => {
        setIsListening(!isListening);
        if (!isListening) {
            setTimeout(() => {
                setVoiceCommand("Navigating to symptom checker...");
                setTimeout(() => {
                    setVoiceCommand('');
                    setIsListening(false);
                }, 2000);
            }, 1500);
        }
    };

    const navigationItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'symptoms', label: 'Symptom Checker', icon: Activity },
        { id: 'emergency', label: 'Emergency', icon: AlertCircle },
        { id: 'hospitals', label: 'Find Hospitals', icon: Hospital },
        { id: 'ambulance', label: 'Book Ambulance', icon: Ambulance },
        { id: 'medicines', label: 'Medicines', icon: Pill },
        { id: 'appointments', label: 'Appointments', icon: Calendar },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    const renderScreen = () => {
        switch (currentScreen) {
            case 'home': return <HomeScreen setCurrentScreen={setCurrentScreen} />;
            case 'symptoms': return <SymptomChecker />;
            case 'emergency': return <EmergencyScreen />;
            case 'hospitals': return <HospitalFinder />;
            case 'ambulance': return <AmbulanceBooking />;
            case 'medicines': return <MedicineSearch />;
            case 'appointments': return <AppointmentBooking />;
            case 'profile': return <ProfileScreen />;
            default: return <HomeScreen setCurrentScreen={setCurrentScreen} />;
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />
            <View className="flex-1 bg-slate-50">
                {/* Header */}
                <View className="bg-white shadow-sm z-50">
                    <View className="flex-row items-center justify-between px-4 py-4">
                        <View className="flex-row items-center gap-3">
                            <View className="w-10 h-10 bg-blue-600 rounded-xl items-center justify-center">
                                <Heart size={24} color="white" />
                            </View>
                            <View>
                                <Text className="text-xl font-bold text-gray-800">Health Assistant</Text>
                                <Text className="text-xs text-gray-500">AI-Powered Care</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => setMenuOpen(!menuOpen)}
                            className="p-2 bg-gray-50 rounded-lg"
                        >
                            {menuOpen ? <X size={24} color="#374151" /> : <Menu size={24} color="#374151" />}
                        </TouchableOpacity>
                    </View>

                    {/* Voice Command Indicator */}
                    {isListening && (
                        <View className="bg-blue-500 px-4 py-2 flex-row items-center gap-2">
                            <Mic size={16} color="white" />
                            <Text className="text-white text-sm font-medium">{voiceCommand || "Listening..."}</Text>
                        </View>
                    )}
                </View>

                {/* Side Menu */}
                {menuOpen && (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setMenuOpen(false)}
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
                                    return (
                                        <TouchableOpacity
                                            key={item.id}
                                            onPress={() => {
                                                setCurrentScreen(item.id);
                                                setMenuOpen(false);
                                            }}
                                            className={`flex-row items-center gap-3 px-4 py-3 rounded-lg ${currentScreen === item.id
                                                ? 'bg-blue-500'
                                                : 'bg-transparent'
                                                }`}
                                        >
                                            <Icon size={20} color={currentScreen === item.id ? "white" : "#374151"} />
                                            <Text className={`font-medium ${currentScreen === item.id ? 'text-white' : 'text-gray-700'
                                                }`}>{item.label}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}

                {/* Main Content */}
                <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
                    {renderScreen()}
                </ScrollView>

                {/* Voice Assistant FAB */}
                <TouchableOpacity
                    onPress={toggleVoiceRecognition}
                    className={`absolute bottom-6 right-6 w-16 h-16 rounded-full items-center justify-center shadow-lg ${isListening
                        ? 'bg-red-500'
                        : 'bg-blue-600'
                        }`}
                >
                    {isListening ? <MicOff size={28} color="white" /> : <Mic size={28} color="white" />}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// Home Screen Component
const HomeScreen = ({ setCurrentScreen }: { setCurrentScreen: (screen: string) => void }) => {
    const quickActions = [
        { id: 'symptoms', label: 'Check Symptoms', icon: Activity, color: 'bg-blue-500', screen: 'symptoms' },
        { id: 'emergency', label: 'Emergency', icon: AlertCircle, color: 'bg-red-500', screen: 'emergency' },
        { id: 'hospitals', label: 'Find Hospital', icon: Hospital, color: 'bg-green-500', screen: 'hospitals' },
        { id: 'ambulance', label: 'Book Ambulance', icon: Ambulance, color: 'bg-orange-500', screen: 'ambulance' },
        { id: 'medicines', label: 'Find Medicine', icon: Pill, color: 'bg-purple-500', screen: 'medicines' },
        { id: 'appointments', label: 'Book Appointment', icon: Calendar, color: 'bg-pink-500', screen: 'appointments' },
    ];

    return (
        <View className="gap-6">
            {/* Welcome Card */}
            <View className="bg-blue-600 rounded-2xl p-6">
                <Text className="text-2xl font-bold mb-2 text-white">Welcome Back!</Text>
                <Text className="text-blue-100 mb-4">How can I assist you today?</Text>
                <View className="flex-row items-center gap-2 bg-white/20 rounded-lg px-4 py-2 self-start">
                    <Shield size={20} color="white" />
                    <Text className="text-sm font-medium text-white">AI-Powered Healthcare</Text>
                </View>
            </View>

            {/* Quick Actions Grid */}
            <View>
                <Text className="text-lg font-bold text-gray-800 mb-4">Quick Actions</Text>
                <View className="flex-row flex-wrap gap-4">
                    {quickActions.map(action => {
                        const Icon = action.icon;
                        return (
                            <TouchableOpacity
                                key={action.id}
                                onPress={() => setCurrentScreen(action.screen)}
                                className="bg-white rounded-xl p-4 shadow-sm w-[30%] items-center"
                                style={{ flexGrow: 1 }}
                            >
                                <View className={`${action.color} w-12 h-12 rounded-xl items-center justify-center mb-3`}>
                                    <Icon size={24} color="white" />
                                </View>
                                <Text className="font-semibold text-gray-800 text-xs text-center">{action.label}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>

            {/* Health Tips */}
            <View className="bg-white rounded-xl p-6 shadow-sm">
                <View className="flex-row items-center gap-2 mb-4">
                    <Zap size={20} color="#EAB308" />
                    <Text className="text-lg font-bold text-gray-800">Today's Health Tip</Text>
                </View>
                <Text className="text-gray-600 leading-5">Stay hydrated! Drink at least 8 glasses of water daily to maintain optimal health and energy levels.</Text>
            </View>
        </View>
    );
};

// Symptom Checker Component
const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [severity, setSeverity] = useState<string | null>(null);

    const commonSymptoms = [
        'Fever', 'Headache', 'Cough', 'Fatigue', 'Nausea', 'Dizziness',
        'Chest Pain', 'Shortness of Breath', 'Body Ache', 'Sore Throat'
    ];

    const addSymptom = (symptom: string): void => {
        if (!symptoms.includes(symptom)) {
            setSymptoms([...symptoms, symptom]);
        }
    };

    const analyzeSymptoms = () => {
        if (symptoms.some(s => s.includes('Chest Pain') || s.includes('Shortness of Breath'))) {
            setSeverity('emergency');
        } else if (symptoms.length >= 3) {
            setSeverity('consult');
        } else {
            setSeverity('monitor');
        }
    };

    return (
        <View className="gap-6">
            <View className="bg-white rounded-xl p-6 shadow-sm">
                <Text className="text-2xl font-bold text-gray-800 mb-4">Symptom Checker</Text>

                <View className="relative mb-4">
                    <View className="absolute left-3 top-3 z-10">
                        <Search size={20} color="#9CA3AF" />
                    </View>
                    <TextInput
                        placeholder="Search symptoms..."
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-sm text-gray-600 mb-2">Common symptoms:</Text>
                    <View className="flex-row flex-wrap gap-2">
                        {commonSymptoms.map(symptom => (
                            <TouchableOpacity
                                key={symptom}
                                onPress={() => addSymptom(symptom)}
                                className="px-3 py-1 bg-blue-50 rounded-full"
                            >
                                <Text className="text-blue-700 text-sm">{'+ ' + symptom}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {symptoms.length > 0 && (
                    <View className="mb-4">
                        <Text className="text-sm font-medium text-gray-700 mb-2">Selected symptoms:</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {symptoms.map((symptom, idx) => (
                                <View key={idx} className="px-3 py-1 bg-purple-100 rounded-full flex-row items-center gap-2">
                                    <Text className="text-purple-700 text-sm">{symptom}</Text>
                                    <TouchableOpacity onPress={() => setSymptoms(symptoms.filter(s => s !== symptom))}>
                                        <Text className="text-purple-900 font-bold">×</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    onPress={analyzeSymptoms}
                    disabled={symptoms.length === 0}
                    className={`w-full py-3 rounded-lg items-center ${symptoms.length === 0 ? 'bg-blue-300' : 'bg-blue-600'
                        }`}
                >
                    <Text className="text-white font-medium text-lg">Analyze Symptoms</Text>
                </TouchableOpacity>
            </View>

            {severity && (
                <View className={`rounded-xl p-6 border-l-4 shadow-sm ${severity === 'emergency' ? 'bg-red-50 border-red-500' :
                    severity === 'consult' ? 'bg-yellow-50 border-yellow-500' :
                        'bg-green-50 border-green-500'
                    }`}>
                    <View className="flex-row items-start gap-3">
                        <AlertCircle size={24} color={
                            severity === 'emergency' ? '#DC2626' :
                                severity === 'consult' ? '#CA8A04' :
                                    '#16A34A'
                        } />
                        <View className="flex-1">
                            <Text className="font-bold text-lg mb-2 text-gray-900">
                                {severity === 'emergency' ? 'Seek Immediate Medical Attention' :
                                    severity === 'consult' ? 'Consult a Doctor Soon' :
                                        'Monitor Your Symptoms'}
                            </Text>
                            <Text className="text-gray-700 leading-5">
                                {severity === 'emergency' ? 'Your symptoms indicate a potential emergency. Please call an ambulance or visit the nearest emergency room immediately.' :
                                    severity === 'consult' ? 'Your symptoms suggest you should consult with a healthcare provider within the next 24-48 hours.' :
                                        'Continue monitoring your symptoms. If they worsen, seek medical advice.'}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

// Emergency Screen Component
const EmergencyScreen = () => {
    return (
        <View className="gap-6">
            <View className="bg-red-600 rounded-xl p-6 shadow-xl">
                <View className="flex-row items-center gap-3 mb-4">
                    <AlertCircle size={32} color="white" />
                    <Text className="text-2xl font-bold text-white">Emergency Services</Text>
                </View>
                <Text className="mb-6 text-white">Quick access to emergency medical services</Text>

                <View className="gap-3">
                    <TouchableOpacity className="w-full bg-white py-4 rounded-lg flex-row items-center justify-center gap-2">
                        <Phone size={20} color="#DC2626" />
                        <Text className="text-red-600 font-bold text-lg">Call Ambulance (108)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-full bg-red-800 py-4 rounded-lg flex-row items-center justify-center gap-2">
                        <Hospital size={20} color="white" />
                        <Text className="text-white font-bold text-lg">Nearest Emergency Room</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-white rounded-xl p-6 shadow-sm">
                <Text className="font-bold text-lg mb-4 text-gray-800">Emergency Contacts</Text>
                <View className="gap-3">
                    {[
                        { name: 'National Ambulance', number: '108', type: 'Emergency' },
                        { name: 'Police', number: '100', type: 'Law Enforcement' },
                        { name: 'Fire Service', number: '101', type: 'Fire Emergency' },
                        { name: 'Women Helpline', number: '1091', type: 'Support' },
                    ].map((contact, idx) => (
                        <View key={idx} className="flex-row items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <View>
                                <Text className="font-medium text-gray-800">{contact.name}</Text>
                                <Text className="text-sm text-gray-500">{contact.type}</Text>
                            </View>
                            <TouchableOpacity className="px-4 py-2 bg-blue-500 rounded-lg flex-row items-center gap-2">
                                <Phone size={16} color="white" />
                                <Text className="text-white font-medium">{contact.number}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

// Hospital Finder Component
const HospitalFinder = () => {
    const hospitals = [
        { name: 'City General Hospital', distance: '2.3 km', specialty: 'Multi-specialty', type: 'Government', rating: 4.5 },
        { name: 'Apollo Hospital', distance: '4.1 km', specialty: 'Cardiac Care', type: 'Private', rating: 4.8 },
        { name: 'Max Healthcare', distance: '5.7 km', specialty: 'Orthopedics', type: 'Private', rating: 4.6 },
        { name: 'AIIMS', distance: '8.2 km', specialty: 'Multi-specialty', type: 'Government', rating: 4.9 },
    ];

    return (
        <View className="gap-6">
            <View className="bg-white rounded-xl p-6 shadow-sm">
                <Text className="text-2xl font-bold text-gray-800 mb-4">Find Hospitals</Text>

                <View className="relative mb-4">
                    <View className="absolute left-3 top-3 z-10">
                        <MapPin size={20} color="#9CA3AF" />
                    </View>
                    <TextInput
                        placeholder="Enter location or use current location"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                    />
                </View>

                <View className="flex-row gap-2">
                    <TouchableOpacity className="px-4 py-2 bg-blue-500 rounded-lg">
                        <Text className="text-white text-sm">All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-4 py-2 bg-gray-100 rounded-lg">
                        <Text className="text-gray-700 text-sm">Government</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-4 py-2 bg-gray-100 rounded-lg">
                        <Text className="text-gray-700 text-sm">Private</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="gap-4">
                {hospitals.map((hospital, idx) => (
                    <View key={idx} className="bg-white rounded-xl p-5 shadow-sm">
                        <View className="flex-row items-start justify-between mb-3">
                            <View>
                                <Text className="font-bold text-lg text-gray-800">{hospital.name}</Text>
                                <Text className="text-sm text-gray-500">{hospital.specialty}</Text>
                            </View>
                            <View className={`px-3 py-1 rounded-full ${hospital.type === 'Government' ? 'bg-green-100' : 'bg-blue-100'
                                }`}>
                                <Text className={`text-xs font-medium ${hospital.type === 'Government' ? 'text-green-700' : 'text-blue-700'
                                    }`}>
                                    {hospital.type}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row items-center gap-4 mb-3">
                            <View className="flex-row items-center gap-1">
                                <MapPin size={16} color="#4B5563" />
                                <Text className="text-gray-600 text-sm">{hospital.distance}</Text>
                            </View>
                            <View className="flex-row items-center gap-1">
                                <Text className="text-sm">⭐ {hospital.rating}</Text>
                            </View>
                        </View>

                        <View className="flex-row gap-2">
                            <TouchableOpacity className="flex-1 py-2 bg-blue-500 rounded-lg items-center">
                                <Text className="text-white font-medium text-sm">Get Directions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1 py-2 border border-blue-500 rounded-lg items-center">
                                <Text className="text-blue-500 font-medium text-sm">Call Hospital</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

// Ambulance Booking Component
const AmbulanceBooking = () => {
    const [bookingType, setBookingType] = useState('emergency');

    return (
        <View className="gap-6">
            <View className="bg-white rounded-xl p-6 shadow-sm">
                <Text className="text-2xl font-bold text-gray-800 mb-4">Book Ambulance</Text>

                <View className="flex-row gap-2 mb-6">
                    <TouchableOpacity
                        onPress={() => setBookingType('emergency')}
                        className={`flex-1 py-3 rounded-lg items-center ${bookingType === 'emergency'
                            ? 'bg-red-500'
                            : 'bg-gray-100'
                            }`}
                    >
                        <Text className={`font-medium ${bookingType === 'emergency' ? 'text-white' : 'text-gray-700'
                            }`}>Emergency</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setBookingType('scheduled')}
                        className={`flex-1 py-3 rounded-lg items-center ${bookingType === 'scheduled'
                            ? 'bg-blue-500'
                            : 'bg-gray-100'
                            }`}
                    >
                        <Text className={`font-medium ${bookingType === 'scheduled' ? 'text-white' : 'text-gray-700'
                            }`}>Scheduled</Text>
                    </TouchableOpacity>
                </View>

                <View className="gap-4">
                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Pickup Location</Text>
                        <TextInput
                            placeholder="Enter pickup address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Drop Location</Text>
                        <TextInput
                            placeholder="Enter hospital or destination"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </View>

                    {/* Simplified Select */}
                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Ambulance Type</Text>
                        <View className="p-3 border border-gray-300 rounded-lg bg-gray-50">
                            <Text className="text-gray-700">Basic Life Support (BLS)</Text>
                        </View>
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Patient Condition</Text>
                        <TextInput
                            multiline
                            numberOfLines={3}
                            placeholder="Brief description of patient condition"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            textAlignVertical="top"
                        />
                    </View>

                    <TouchableOpacity className="w-full py-4 bg-red-500 rounded-lg items-center shadow-lg">
                        <Text className="text-white font-bold text-lg">Book Ambulance Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <View className="flex-row items-center gap-3">
                    <Clock size={20} color="#2563EB" />
                    <View>
                        <Text className="font-medium text-blue-900">Estimated Arrival Time</Text>
                        <Text className="text-sm text-blue-700">Ambulance will arrive in approximately 8-12 minutes</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

// Medicine Search Component
const MedicineSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const medicines = [
        { name: 'Paracetamol 500mg', composition: 'Paracetamol', price: '₹15', generic: true },
        { name: 'Dolo 650', composition: 'Paracetamol', price: '₹30', generic: false },
        { name: 'Calpol 500', composition: 'Paracetamol', price: '₹25', generic: false },
        { name: 'Metacin', composition: 'Paracetamol', price: '₹12', generic: true },
    ];

    return (
        <View className="gap-6">
            <View className="bg-white rounded-xl p-6 shadow-sm">
                <Text className="text-2xl font-bold text-gray-800 mb-4">Find Medicines</Text>

                <View className="relative mb-4">
                    <View className="absolute left-3 top-3 z-10">
                        <Search size={20} color="#9CA3AF" />
                    </View>
                    <TextInput
                        placeholder="Search by medicine name or composition"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                    />
                </View>

                <View className="flex-row gap-2">
                    <TouchableOpacity className="px-4 py-2 bg-green-100 rounded-lg">
                        <Text className="text-green-700 text-sm font-medium">Generic Only</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-4 py-2 bg-gray-100 rounded-lg">
                        <Text className="text-gray-700 text-sm">All Medicines</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="gap-3">
                {medicines.map((medicine, idx) => (
                    <View key={idx} className="bg-white rounded-xl p-5 shadow-sm">
                        <View className="flex-row items-start justify-between mb-2">
                            <View>
                                <Text className="font-bold text-gray-800 mb-1">{medicine.name}</Text>
                                <Text className="text-sm text-gray-500">Composition: {medicine.composition}</Text>
                            </View>
                            {medicine.generic && (
                                <View className="px-2 py-1 bg-green-100 rounded">
                                    <Text className="text-green-700 text-xs font-medium">Generic</Text>
                                </View>
                            )}
                        </View>
                        <View className="flex-row items-center justify-between mt-2">
                            <Text className="text-lg font-bold text-blue-600">{medicine.price}</Text>
                            <TouchableOpacity className="px-4 py-2 bg-blue-500 rounded-lg">
                                <Text className="text-white text-sm">View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

// Appointment Booking Component
const AppointmentBooking = () => {
    return (
        <View className="gap-6">
            <View className="bg-white rounded-xl p-6 shadow-sm">
                <Text className="text-2xl font-bold text-gray-800 mb-4">Book Appointment</Text>

                <View className="gap-4">
                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Select Specialty</Text>
                        {/* Simulated Select */}
                        <View className="p-3 border border-gray-300 rounded-lg bg-gray-50">
                            <Text className="text-gray-700">General Physician</Text>
                        </View>
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Select Doctor</Text>
                        {/* Simulated Select */}
                        <View className="p-3 border border-gray-300 rounded-lg bg-gray-50">
                            <Text className="text-gray-700">Dr. Rajesh Kumar (4.8★)</Text>
                        </View>
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Appointment Date</Text>
                        <TextInput
                            placeholder="YYYY-MM-DD"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'].map(time => (
                                <TouchableOpacity key={time} className="py-2 px-3 border border-gray-300 rounded-lg w-[30%] items-center">
                                    <Text className="text-sm text-gray-700">{time}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-gray-700 mb-2">Consultation Type</Text>
                        <View className="flex-row gap-2">
                            <TouchableOpacity className="flex-1 py-3 bg-blue-500 rounded-lg items-center">
                                <Text className="text-white font-medium">In-Person</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1 py-3 bg-gray-100 rounded-lg items-center">
                                <Text className="text-gray-700 font-medium">Video Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="bg-gray-50 rounded-lg p-4">
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600">Consultation Fee</Text>
                            <Text className="font-bold text-gray-800">₹500</Text>
                        </View>
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600">Platform Fee</Text>
                            <Text className="font-bold text-gray-800">₹50</Text>
                        </View>
                        <View className="border-t border-gray-300 mt-2 pt-2 flex-row justify-between">
                            <Text className="font-bold text-gray-800">Total</Text>
                            <Text className="font-bold text-blue-600 text-lg">₹550</Text>
                        </View>
                    </View>

                    <TouchableOpacity className="w-full py-4 bg-blue-600 rounded-lg items-center shadow-lg">
                        <Text className="text-white font-bold text-lg">Confirm Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <View className="flex-row items-center gap-3">
                    <Bell size={20} color="#9333EA" />
                    <View style={{ flex: 1 }}>
                        <Text className="font-medium text-purple-900">Appointment Reminder</Text>
                        <Text className="text-sm text-purple-700">You'll receive SMS and WhatsApp notifications before your appointment</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

// Profile Screen Component
const ProfileScreen = () => {
    return (
        <View className="gap-6">
            <View className="bg-purple-600 rounded-xl p-6 shadow-xl">
                <View className="flex-row items-center gap-4 mb-4">
                    <View className="w-20 h-20 bg-white rounded-full items-center justify-center">
                        <User size={40} color="#9333EA" />
                    </View>
                    <View>
                        <Text className="text-2xl font-bold text-white">Rahul Kumar</Text>
                        <Text className="text-purple-100">+91 98765 43210</Text>
                    </View>
                </View>
                <TouchableOpacity className="w-full bg-white/20 py-2 rounded-lg items-center">
                    <Text className="text-white font-medium">Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View className="bg-white rounded-xl shadow-sm">
                {[
                    { icon: FileText, label: 'Medical History', color: '#2563EB' },
                    { icon: Heart, label: 'Health Records', color: '#DC2626' },
                    { icon: Calendar, label: 'Appointment History', color: '#16A34A' },
                    { icon: Pill, label: 'Prescriptions', color: '#9333EA' },
                    { icon: Settings, label: 'Settings', color: '#4B5563' },
                ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <TouchableOpacity key={idx} className="w-full flex-row items-center justify-between p-5 border-b border-gray-100 last:border-b-0">
                            <View className="flex-row items-center gap-3">
                                <Icon size={24} color={item.color} />
                                <Text className="font-medium text-gray-800">{item.label}</Text>
                            </View>
                            <ChevronRight size={20} color="#9CA3AF" />
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TouchableOpacity className="w-full py-3 bg-red-50 rounded-lg items-center mb-6">
                <Text className="text-red-600 font-medium">Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HealthAssistantApp;      