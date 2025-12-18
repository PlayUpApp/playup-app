import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// 🔥 Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';

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
    case 'auth/email-already-in-use':
      return 'Este correo ya está registrado';
    case 'auth/invalid-email':
      return 'Correo electrónico inválido';
    case 'auth/weak-password':
      return 'La contraseña debe tener al menos 6 caracteres';
    default:
      return 'Ocurrió un error al crear la cuenta';
  }
};

export default function RegistroScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    const { nombre, apellido, email, password, confirmPassword } = form;

    if (!nombre || !apellido || !email || !password || !confirmPassword) {
      showAlert('Error', 'Completa todos los campos');
      return;
    }

    if (password.length < 6) {
      showAlert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);

      showAlert(
        'Registro exitoso 🎉',
        'Tu cuenta fue creada correctamente',
        () => router.replace('/auth/login')
      );
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

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        <Text style={styles.title}>Crea tu cuenta</Text>

        {/* NOMBRE */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={form.nombre}
            onChangeText={(text) => setForm({ ...form, nombre: text })}
            placeholder="Tu nombre"
            placeholderTextColor="#999"
          />
        </View>

        {/* APELLIDO */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.input}
            value={form.apellido}
            onChangeText={(text) => setForm({ ...form, apellido: text })}
            placeholder="Tu apellido"
            placeholderTextColor="#999"
          />
        </View>

        {/* EMAIL */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="correo@ejemplo.com"
            placeholderTextColor="#999"
          />
        </View>

        {/* PASSWORD */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              secureTextEntry={!showPassword}
              placeholder="••••••••"
              placeholderTextColor="#999"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={22}
                color="#999"
              />
            </Pressable>
          </View>
        </View>

        {/* CONFIRM PASSWORD */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Repite la contraseña</Text>
          <TextInput
            style={styles.input}
            value={form.confirmPassword}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            secureTextEntry={!showPassword}
            placeholder="••••••••"
            placeholderTextColor="#999"
          />
        </View>

        <Pressable
          style={styles.registerButton}
          onPress={handleRegister}
          disabled={loading}
        >
          <Text style={styles.registerButtonText}>
            {loading ? 'Creando cuenta...' : 'Registrarme'}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

/* =====================
   ESTILOS
===================== */
const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: -5,
  },
  backText: { color: '#FFF', fontSize: 16, marginLeft: 4 },
  title: { fontSize: 28, fontWeight: '700', color: '#FFF', marginBottom: 30 },
  inputGroup: { marginBottom: 20 },
  label: { color: '#FFF', fontSize: 16, marginBottom: 8, fontWeight: '500' },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: { flexDirection: 'row', alignItems: 'center' },
  eyeIcon: { paddingHorizontal: 12 },
  registerButton: {
    backgroundColor: '#0095FF',
    padding: 18,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 5,
  },
  registerButtonText: { color: '#FFF', fontWeight: '700', fontSize: 18 },
});
