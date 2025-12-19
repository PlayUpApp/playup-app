import { Redirect } from 'expo-router';

export default function Index() {
  // Redirige automáticamente al login
  return <Redirect href="/auth/login" />;
}
