# PlayUp: Tu Cancha de Encuentros Deportivos ⚽🏀🏐

## 🚀 Visión General
**PlayUp** es una aplicación móvil multiplataforma desarrollada con **Expo (React Native) y Firebase**. Permite a los usuarios crear, buscar y unirse a partidos, equipos y torneos de forma rápida y organizada. 

La app resuelve problemas comunes como la falta de jugadores, la desorganización y la dificultad para coordinar encuentros deportivos. Aunque inicia con fútbol, su arquitectura permite escalar a otros deportes como vóley y básquet, integrando funciones sociales como perfiles y mensajería.

---

## ✨ Identidad y Propuesta de Valor
Basado en el **Manual de Marca** oficial:

* **Misión**: Facilitar la organización de encuentros deportivos conectando personas y equipos para que puedan jugar sin depender de tener el grupo completo.
* **Público Objetivo**: Personas activas de 16 a 40 años en zonas urbanas y periurbanas.
* **Valores**: Conexión, Accesibilidad, Confianza, Activación e Inclusión.
* **Personalidad**: Un equilibrio entre lo social y cercano (arquetipo de "El Amigo") y lo profesional y estructurado (arquetipo de "El Organizador").
* **Voz y Tono**: Tono formal, claro, directo, respetuoso y motivador.

---

## 🛠️ Tecnologías y Estilo
* **Framework**: Expo (React Native).
* **Lenguaje**: TypeScript y JavaScript.
* **Tipografía**: **Poppins** para títulos/subtítulos y **Inter** para cuerpo de texto.
* **Paleta de Colores Corporativa**: 
    * **Primarios**: #170055, #3E00FF, #AE00FB.
    * **Secundarios**: #7900FF, #548CFF, #93FFD8, #CFFFDC.

---

## 📂 Estructura del Proyecto
La organización actual del repositorio es la siguiente:

| Directorio / Archivo | Función |
| :--- | :--- |
| `app/` | Contiene las pantallas y la lógica de navegación (File-based routing). |
| `assets/images/` | Almacena los recursos gráficos y visuales de la marca. |
| `components/` | Componentes de UI reutilizables. |
| `constants/` | Valores constantes como colores corporativos y configuraciones globales. |
| `hooks/` | Hooks personalizados de React para lógica compartida. |
| `scripts/` | Scripts de utilidad para el desarrollo. |
| `.vscode/` | Configuración del entorno de trabajo para el editor. |
| `eslint.config.js` | Configuración de reglas de calidad y estilo de código. |
| `tsconfig.json` | Configuración del motor de TypeScript. |

---

## 🔥 Configuración de Firebase
Esta aplicación utilizará **Firebase** para la autenticación de usuarios, base de datos y almacenamiento de archivos multimedia.

> **Nota importante**: Por ahora, Firebase no está configurado, ya que el enfoque actual es el desarrollo de las vistas y la interfaz de usuario. Más adelante se agregará la configuración oficial y se explicará cómo conectar el entorno local para probar la funcionalidad completa.

---

## 📝 Guía de Inicio

### Requisitos Previos (Opcional)
Si aún no tienes configurado tu entorno de desarrollo, asegúrate de instalar:
* [Node.js](https://nodejs.org/) (Versión LTS recomendada).
* **npm** (Viene incluido con Node.js).

### Pasos para ejecutar el proyecto:
1.  **Instalar dependencias**:
    ```bash
    npm install
    ```
2.  **Iniciar el entorno**:
    ```bash
    npx expo start
    ```
3.  **Probar la app**: Utiliza la app **Expo Go** en tu dispositivo físico o un emulador/simulador (Android/iOS).

---

## 🤝 Flujo de Contribución
¡Agradecemos tu colaboración en PlayUp! Para contribuir, sigue este flujo:

1.  Haz un **Fork** del proyecto.
2.  Crea una nueva rama para tu funcionalidad: `git checkout -b feature/NuevaFuncionalidad`.
3.  Desarrolla siguiendo los lineamientos del **Manual de Marca** (uso de tipografías y colores corporativos).
4.  Asegúrate de respetar el **área de protección** y los **usos correctos del logotipo** en la interfaz.
5.  Envía un **Pull Request** describiendo detalladamente tus cambios para revisión.

---

## ⚠️ Nota para Colaboradores
Si deseas comenzar con una estructura limpia o mover el código de ejemplo que se incluye por defecto en Expo, puedes ejecutar el siguiente comando:

```bash
npm run reset-project
