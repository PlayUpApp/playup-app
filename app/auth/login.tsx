import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  StatusBar,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';

import { useRouter } from 'expo-router';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

/* =====================
   ALERT UNIVERSAL
===================== */
const showAlert = (title: string, message: string, onPress?: () => void) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
    onPress?.();
  } else {
    Alert.alert(title, message, onPress ? [{ text: 'OK', onPress }] : [{ text: 'OK' }]);
  }
};

/* =====================
   ERRORES FIREBASE
===================== */
const getFirebaseErrorMessage = (code?: string) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'No existe una cuenta con este correo';
    case 'auth/wrong-password':
      return 'Contraseña incorrecta';
    case 'auth/invalid-email':
      return 'Correo electrónico inválido';
    case 'auth/too-many-requests':
      return 'Demasiados intentos. Intenta más tarde';
    default:
      return 'Ocurrió un error al iniciar sesión';
  }
};

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      showAlert('Error', 'Completa todos los campos');
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      showAlert('Bienvenido 🎉', 'Inicio de sesión exitoso', () => router.replace('/(tabs)'));
    } catch (error: any) {
      showAlert('Error', getFirebaseErrorMessage(error?.code || ''));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#2D1B4E', '#000000']} style={StyleSheet.absoluteFill} />

      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            PU <Text style={{ fontWeight: 'normal' }}>PlayUp</Text>
          </Text>
        </View>

        <Text style={styles.subtitle}>Iniciar sesión</Text>
        <Text style={styles.description}>
          Ingresa tu correo y contraseña para continuar
        </Text>

        {/* INPUT EMAIL */}
        <TextInput
          placeholder="correo@dominio.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        {/* INPUT CONTRASEÑA CON MOSTRAR/OCULTAR */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { flex: 1 }]}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#999" />
          </Pressable>
        </View>

        <Pressable
          style={styles.socialButton}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.socialButtonText}>
            {loading ? 'Ingresando...' : 'Continuar'}
          </Text>
        </Pressable>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>o</Text>
          <View style={styles.line} />
        </View>

        <Pressable style={styles.socialButton}>
          <AntDesign name="google" size={20} color="black" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continuar con Google</Text>
        </Pressable>

        <Pressable style={styles.socialButton}>
          <FontAwesome name="apple" size={20} color="black" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continuar con Apple</Text>
        </Pressable>

        <Text
          style={styles.footerText}
          onPress={() => router.push('/auth/registro')}
        >
          ¿No tienes cuenta? <Text style={styles.boldText}>Regístrate</Text>
        </Text>

        <Text
          style={styles.footerText}
          onPress={() => router.push('/auth/recuperar-contrasena')}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingHorizontal: 30, justifyContent: 'center', alignItems: 'center', paddingVertical: 60 },
  logoContainer: { marginBottom: 40, alignItems: 'center' },
  logoText: { fontSize: 42, color: '#FFF', fontWeight: 'bold', letterSpacing: 2 },
  subtitle: { fontSize: 18, color: '#FFF', fontWeight: '600', marginBottom: 8 },
  description: { fontSize: 14, color: '#CCC', textAlign: 'center', marginBottom: 30, paddingHorizontal: 20 },
  input: { width: '100%', backgroundColor: '#FFF', borderRadius: 10, padding: 16, marginBottom: 12, fontSize: 16 },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 12 },
  eyeIcon: { padding: 12 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20, width: '100%' },
  line: { flex: 1, height: 1, backgroundColor: '#555' },
  dividerText: { color: '#AAA', paddingHorizontal: 10, fontSize: 14 },
  socialButton: { flexDirection: 'row', backgroundColor: '#FFF', width: '100%', padding: 14, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  socialIcon: { marginRight: 10 },
  socialButtonText: { fontSize: 16, fontWeight: '500', color: '#000' },
  footerText: { color: '#AAA', fontSize: 12, textAlign: 'center', marginTop: 20, lineHeight: 18 },
  boldText: { color: '#FFF', fontWeight: '600' },
});
