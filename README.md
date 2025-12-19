# PlayUp: Tu Cancha de Encuentros Deportivos ⚽🏀🏐

¡Bienvenido al repositorio oficial de **PlayUp**! Esta es una aplicación móvil multiplataforma diseñada para transformar la cultura del deporte amateur, permitiendo a los usuarios conectar, organizar y jugar partidos de forma eficiente y profesional.

---

## 🚀 Visión General
**PlayUp** es una solución integral desarrollada con **Expo (React Native)** y **Firebase**. Nuestra plataforma resuelve problemas críticos como la falta de jugadores, la desorganización logística y la dificultad para encontrar rivales en entornos urbanos y periurbanos.

La arquitectura actual está centrada en fútbol, pero está diseñada para ser escalable hacia múltiples disciplinas como vóley y básquet, integrando una comunidad activa mediante perfiles y mensajería social.

---

## ✨ Identidad y Valor de Marca
Nos regimos por lineamientos de marca estrictos para garantizar una experiencia de usuario coherente y confiable:

* **Misión**: Facilitar la organización de encuentros deportivos conectando personas y equipos para que puedan jugar sin depender de tener el grupo completo.
* **Público Objetivo**: Personas activas de 16 a 40 años en zonas urbanas y periurbanas.
* **Valores**: Conexión, Accesibilidad, Confianza, Activación e Inclusión.
* **Personalidad**: Un equilibrio entre lo social y cercano (arquetipo de "El Amigo") y lo profesional y estructurado (arquetipo de "El Organizador").
* **Voz y Tono**: Tono formal, claro, directo, respetuoso, motivador y profesional.

---

## 🛠️ Stack Tecnológico y Diseño

* **Framework:** Expo (React Native) con Expo Router (File-based routing).
* **Lenguaje:** TypeScript.
* **Backend & Auth:** Firebase (Firebase Auth v10+).

### 🎨 Diseño y Estética Visual
Todos los componentes deben respetar los siguientes lineamientos visuales:

* **Tipografía de Impacto (Poppins):** Utilizada para títulos y jerarquías altas.
* **Tipografía de Lectura (Inter):** Aplicada en cuerpos de texto y descripciones.
* **Identidad Cromática**: 
    * **Primarios**: Violetas y azules eléctricos (#170055, #3E00FF, #AE00FB).
    * **Secundarios**: Tonos cian y pasteles para detalles (#7900FF, #548CFF, #93FFD8, #CFFFDC).

> **💡 TIP DE RECURSOS:** El proyecto ya incluye las fuentes oficiales (**Poppins** e **Inter**) en las dependencias. Al ejecutar `npm install`, se sincronizarán automáticamente en tu entorno local.

---

## 🔥 Autenticación y Firebase
Actualmente, el módulo de **Firebase Auth** se encuentra implementado y funcional.

### Flujos de Usuario Disponibles:
1.  **Registro:** Creación de nuevas cuentas mediante correo y contraseña.
2.  **Login:** Acceso seguro con validación de credenciales.
3.  **Recuperación de Contraseña:** Flujo automatizado donde el sistema envía un correo de restablecimiento real a la dirección del usuario.

> **📌 NOTA SOBRE PERSISTENCIA DE SESIÓN**
> La aplicación gestiona la persistencia de la sesión de forma nativa a través del SDK de Firebase, asegurando que el estado del usuario se mantenga activo entre reinicios de la app.

> **⚠️ PROYECTO FIREBASE COMPARTIDO (IMPORTANTE)**
> Como equipo de desarrollo, utilizamos un único proyecto centralizado en Firebase. **No modifiques** la configuración en `config/firebase.ts` ni crees proyectos individuales para este repositorio. Solicita las credenciales del archivo `.env` al administrador para asegurar que todos trabajemos sobre la misma base de datos y autenticación.

---

## 📂 Estructura del Proyecto
La organización actual del repositorio es la siguiente:

| Directorio / Archivo | Función |
| :--- | :--- |
| `app/` | Contiene las pantallas y la lógica de navegación (File-based routing). |
| `assets/images/` | Almacena los recursos gráficos y visuales de la marca. |
| `components/` | Componentes de UI reutilizables. |
| `config/` | Configuración técnica de servicios externos. |
| `constants/` | Valores constantes como colores corporativos y configuraciones globales. |
| `hooks/` | Hooks personalizados de React para lógica compartida. |
| `scripts/` | Scripts de utilidad para el desarrollo. |
| `.vscode/` | Configuración del entorno de trabajo para el editor. |
| `eslint.config.js` | Configuración de reglas de calidad y estilo de código. |
| `tsconfig.json` | Configuración del motor de TypeScript. |

---

## 📝 Guía de Inicio

### 1. Requisitos Previos
Si aún no tienes configurado tu entorno de desarrollo, asegúrate de instalar:
* [Node.js](https://nodejs.org/) (Versión LTS recomendada).
* **npm** (Viene incluido con Node.js) o **yarn**.
* **Expo Go** instalado en tu dispositivo móvil o un emulador configurado.

### 2. Instalación y Configuración local
Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/PlayUpApp/playup-app.git
cd playup-app
npm install
```

### 3. Configuración de Firebase y Variables de Entorno
Para que la autenticación funcione, debes crear un archivo .env en la raíz del proyecto. Crea un proyecto en Firebase Console y copia los siguientes valores:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=tu_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=tu_app_id
```

> **Nota:** El archivo `config/firebase.ts` ya está preparado para leer estas variables.

### 4. Ejecución
Inicia el servidor de desarrollo de Expo con el siguiente comando:

```bash
npx expo start
```

### 5. Prueba de la App
Para visualizar y probar los cambios en tiempo real, utiliza la app **Expo Go** en tu dispositivo físico o un emulador/simulador configurado:

* **Dispositivo Físico:** Escanea el código QR que aparece en la terminal al iniciar el servidor con la cámara de tu celular (iOS) o desde la app **Expo Go** (Android).
* **Emuladores:**
    * Presiona **a** para abrir el emulador de Android.
    * Presiona **i** para abrir el simulador de iOS.

---

## 🤝 Flujo de Contribución
¡Agradecemos tu colaboración en PlayUp! Para mantener la calidad y escalabilidad del código, sigue este estándar:

1. **Fork y Ramas:** Haz un **Fork** del proyecto y crea una nueva rama descriptiva:
   * `git checkout -b feat/nombre-funcionalidad`
   * `git checkout -b fix/descripcion-error`
2. **Commits Semánticos:** Utiliza prefijos para identificar el tipo de cambio:
   * `feat:` para nuevas funcionalidades.
   * `fix:` para corrección de errores.
   * `docs:` cambios en documentación.
   * `style:` cambios de diseño que no afectan la lógica.
3. **Lineamientos de Diseño:** Desarrolla siguiendo el **Manual de Marca** (uso de tipografías y colores corporativos). Es obligatorio respetar el **área de protección** y los usos correctos del logotipo en la interfaz.
4. **Pull Request:** Envía un **Pull Request** detallando tus cambios y adjunta capturas si hubo modificaciones en la UI. Asegúrate de que el código no rompa la navegación de **Expo Router**.

---

## ⚠️ Nota para Colaboradores
Si deseas comenzar con una estructura limpia o mover el código de ejemplo que se incluye por defecto en Expo, puedes ejecutar el siguiente comando en tu terminal:

```bash
npm run reset-project
