import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  StyleSheet, 
  StatusBar,
  Alert,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// 🔥 Firebase
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/config/firebase';

/* =====================
   ALERT UNIVERSAL
===================== */
const showAlert = (
  title: string,
  message: string,
  onPress?: () => void
) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
    onPress?.();
  } else {
    Alert.alert(title, message, onPress ? [{ text: 'OK', onPress }] : undefined);
  }
};

export default function RecuperarContrasenaScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      showAlert('Error', 'Ingresa tu correo electrónico');
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email);

      // 🔐 MENSAJE NEUTRO (FORMA CORRECTA)
      showAlert(
        'Revisa tu correo 📩',
        'Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña.',
        () => router.replace('/auth/login')
      );
    } catch (error: any) {
      // ⚠️ Solo errores reales (conexión, formato inválido, etc.)
      let message = 'Ocurrió un error al enviar el correo';

      if (error.code === 'auth/invalid-email') {
        message = 'Correo electrónico inválido';
      }

      showAlert('Error', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={['#2D1B4E', '#000000']}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.content}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Recuperar contraseña</Text>
          <Text style={styles.description}>
            Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu cuenta.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="correo@ejemplo.com"
              placeholderTextColor="#999"
            />
          </View>

          <Pressable 
            style={styles.actionButton} 
            onPress={handleResetPassword}
            disabled={loading}
          >
            <Text style={styles.actionButtonText}>
              {loading ? 'Enviando...' : 'Enviar instrucciones'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/* =====================
   ESTILOS
===================== */
const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginLeft: -5,
  },
  backText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 4,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -100,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#CCC',
    marginBottom: 30,
    lineHeight: 20,
  },
  inputGroup: { marginBottom: 24 },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: '#000',
  },
  actionButton: {
    backgroundColor: '#0095FF',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
