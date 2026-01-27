import { Home, Activity, AlertCircle, Hospital, Ambulance, Pill, Calendar, User } from 'lucide-react-native';

export const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, route: '/' },
    { id: 'symptoms', label: 'Symptom Checker', icon: Activity, route: '/symptoms' },
    { id: 'emergency', label: 'Emergency', icon: AlertCircle, route: '/emergency' },
    { id: 'hospitals', label: 'Find Hospitals', icon: Hospital, route: '/hospitals' },
    { id: 'ambulance', label: 'Book Ambulance', icon: Ambulance, route: '/ambulance' },
    { id: 'medicines', label: 'Medicines', icon: Pill, route: '/medicines' },
    { id: 'appointments', label: 'Appointments', icon: Calendar, route: '/appointments' },
    { id: 'profile', label: 'Profile', icon: User, route: '/profile' },
] as const;

export const quickActions = [
    { id: 'symptoms', label: 'Check Symptoms', icon: Activity, color: 'bg-blue-500', route: '/symptoms' },
    { id: 'emergency', label: 'Emergency', icon: AlertCircle, color: 'bg-red-500', route: '/emergency' },
    { id: 'hospitals', label: 'Find Hospital', icon: Hospital, color: 'bg-green-500', route: '/hospitals' },
    { id: 'ambulance', label: 'Book Ambulance', icon: Ambulance, color: 'bg-orange-500', route: '/ambulance' },
    { id: 'medicines', label: 'Find Medicine', icon: Pill, color: 'bg-purple-500', route: '/medicines' },
    { id: 'appointments', label: 'Book Appointment', icon: Calendar, color: 'bg-pink-500', route: '/appointments' },
] as const;