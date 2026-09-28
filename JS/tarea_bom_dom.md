# 🚀 Tarea de fin de semana: Mi panel inteligente del navegador

## 🎯 Objetivo

Crear una pequeña página web interactiva que utilice **JavaScript, BOM y DOM** para mostrar información del navegador y permitir que el usuario interactúe con la página.

La idea es integrar lo aprendido durante la clase en un único proyecto práctico.

---

## 🧩 El desafío

Vas a construir un **"Panel inteligente del navegador"** que muestre información del usuario y permita realizar diferentes acciones utilizando JavaScript.

El resultado debería verse aproximadamente así:

```text
╔══════════════════════════════════════╗
║       🚀 MI PANEL DEL NAVEGADOR      ║
╠══════════════════════════════════════╣
║                                      ║
║  👋 ¡Hola, Pablo!                    ║
║                                      ║
║  🖥️ Información de la ventana        ║
║  Ancho: 1366 px                      ║
║                                      ║
║  🌐 Información del navegador        ║
║  Idioma: es-AR                        ║
║  Estado: 🟢 Conectado                 ║
║                                      ║
║  📍 Ubicación                         ║
║  [ Obtener mi ubicación ]             ║
║                                      ║
║  ┌────────────────────────────────┐  ║
║  │ [ 🌙 Cambiar modo ]            │  ║
║  │ [ 🔄 Recargar página ]         │  ║
║  │ [ ℹ️ Información ]             │  ║
║  └────────────────────────────────┘  ║
╚══════════════════════════════════════╝
```

No es necesario que tenga exactamente este diseño. **Podés crear tu propia interfaz.**

---

# 📌 Requisitos

Tu proyecto debe cumplir con los siguientes puntos.

## 1. 👋 Pedir el nombre del usuario

Cuando se carga la página, utilizando `prompt()`, pedí al usuario su nombre.

Luego mostrale ese nombre dentro de la página utilizando el **DOM**.

Por ejemplo:

```text
¡Hola, Juan! 👋
Bienvenido a tu panel.
```

No alcanza con mostrarlo solamente en la consola.

---

## 2. 🖥️ Mostrar el tamaño de la ventana

Utilizando `window.innerWidth`, mostrale al usuario el ancho actual de la ventana.

Por ejemplo:

```text
Ancho de la ventana: 1366 px
```

Además, cuando el usuario cambie el tamaño de la ventana, el valor debe actualizarse automáticamente.

💡 Pista:

```javascript
window.addEventListener("resize", ...)
```

---

## 3. 🌐 Mostrar información del navegador

Utilizando el objeto `navigator`, mostrale al usuario:

- 🌎 Idioma del navegador.
- 🟢/🔴 Estado de la conexión a Internet.

Por ejemplo:

```text
Idioma: es-AR
Estado de conexión: 🟢 En línea
```

El estado debería actualizarse cuando el usuario pierde o recupera la conexión.

💡 Podés utilizar los eventos:

```javascript
online;
offline;
```

---

## 4. 📍 Obtener la ubicación

Agregá un botón:

```text
📍 Obtener mi ubicación
```

Cuando el usuario haga clic:

- Solicitar la ubicación utilizando `navigator.geolocation`.
- Mostrar la latitud.
- Mostrar la longitud.
- Mostrar la precisión obtenida.

Por ejemplo:

```text
📍 Tu ubicación

Latitud: -26.8083
Longitud: -65.2176
Precisión: aproximadamente 20 metros
```

⚠️ Si el usuario rechaza el permiso, tu aplicación debe mostrar un mensaje indicando que no fue posible obtener la ubicación.

---

## 5. 🌙 Cambiar el modo de la página

Agregá un botón que permita cambiar entre dos modos visuales:

```text
🌙 Modo oscuro
☀️ Modo claro
```

El cambio debe realizarse modificando una clase del elemento `body`.

💡 Pista:

```javascript
document.body.classList.toggle(...)
```

---

## 6. 🔄 Recargar la página

Agregá un botón:

```text
🔄 Recargar página
```

Al hacer clic, la página debe recargarse utilizando el objeto `location`.

💡 Pista:

```javascript
location.reload();
```

---

## 7. ℹ️ Mostrar información del sitio

Agregá un botón:

```text
ℹ️ Información
```

Al hacer clic, mostrale al usuario información obtenida mediante `location`.

Como mínimo:

- URL completa.
- Dominio.
- Ruta actual.

Podés mostrarla mediante un mensaje, pero **intentá que la información aparezca dentro de la página modificando el DOM**.

---

## 8. 👆 Interacción con elementos del DOM

Agregá al menos **un elemento de la página que cambie cuando el usuario interactúe con él**.

Por ejemplo:

- Hacer clic sobre el título y cambiar su tamaño.
- Hacer clic sobre una tarjeta y cambiar su color.
- Hacer clic sobre un texto y modificar su contenido.
- Mostrar/ocultar una sección.
- Cambiar una clase CSS.

La interacción debe utilizar un evento del DOM:

```javascript
addEventListener();
```

---

# ⭐ Desafío extra

Si terminaste todos los puntos anteriores, agregá una funcionalidad extra utilizando algo que hayas visto durante la clase.

Podés elegir una:

### Opción A — Historial

Agregar botones:

```text
⬅️ Atrás
➡️ Adelante
```

Utilizando:

```javascript
history.back();
history.forward();
```

---

### Opción B — Reporte del navegador

Crear un botón:

```text
📋 Generar reporte
```

Al hacer clic, mostrar un pequeño resumen con información obtenida del BOM.

Por ejemplo:

```text
=== REPORTE DEL NAVEGADOR ===

Ancho de ventana: 1366 px
Idioma: es-AR
Conexión: En línea
URL: https://...
```

---

### Opción C — Detectar cambios de conexión

Crear un mensaje visual que aparezca cuando el usuario pierda Internet:

```text
🔴 ¡Perdiste la conexión!
```

Y otro cuando vuelva:

```text
🟢 ¡Conexión restablecida!
```

Intentá que estos mensajes aparezcan **dentro de la página**, utilizando el DOM.

---

# 🧠 Conceptos que deberías utilizar

Tu proyecto debería demostrar que comprendiste la diferencia entre **BOM y DOM**.

### BOM

Deberías utilizar algunos de estos objetos:

- `window`
- `location`
- `navigator`
- `history`

Y, opcionalmente:

- `navigator.geolocation`

### DOM

Deberías utilizar:

- `document`
- `querySelector()`
- `textContent`
- `classList`
- `addEventListener()`
- Manipulación de elementos HTML

---

# 📁 Estructura sugerida

Podés organizar tu proyecto de esta manera:

```text
mi-panel/
│
├── index.html
├── style.css
└── script.js
```

Intentá mantener separado:

- HTML → estructura
- CSS → estilos
- JavaScript → comportamiento

---

# 🎯 ¿Qué se va a evaluar?

No se busca solamente que la página "funcione".

Se va a tener en cuenta:

### 1. Uso del BOM

Que puedas utilizar correctamente objetos como:

```javascript
window;
location;
navigator;
history;
```

### 2. Uso del DOM

Que puedas seleccionar elementos y modificar la interfaz mediante JavaScript.

### 3. Eventos

Que puedas responder a acciones del usuario o del navegador utilizando:

```javascript
addEventListener();
```

### 4. Integración

Que puedas combinar BOM + DOM para resolver un problema concreto.

### 5. Código

Que el código sea:

- Ordenado.
- Comprensible.
- Con nombres de variables claros.
- Sin repetir innecesariamente código.

### 6. Interfaz

No buscamos una página profesional de diseño.

Pero sí que la información sea clara y que resulte fácil interactuar con ella.

---

# 💡 Importante

**No copies literalmente el código visto en clase.**

Podés utilizar los ejemplos de la clase como referencia, pero el objetivo es que puedas resolver el problema utilizando los conceptos aprendidos.

Si algo no recordás, primero intentá investigar y probar.

---

# 🏆 Bonus: modo desafío

Si querés llevar el proyecto un paso más allá, intentá agregar una sección:

## 📊 "Estado de mi navegador"

Que muestre automáticamente:

```text
🖥️ Ventana
1366 × 768

🌎 Idioma
es-AR

🌐 Internet
🟢 Conectado

📄 Página
/index.html
```

Y que los valores se actualicen automáticamente cuando corresponda.

---

## 📤 Entrega

Compartí el proyecto completo mediante un repositorio de GitHub.

El repositorio debería contener:

```text
index.html
style.css
script.js
```

Además, agregá un `README.md` breve explicando:

1. ¿Qué hace tu proyecto?
2. ¿Qué funcionalidades implementaste?
3. ¿Qué conceptos de BOM utilizaste?
4. ¿Qué conceptos de DOM utilizaste?
5. ¿Qué funcionalidad extra agregaste, si corresponde?
6. ¿Qué fue lo que más te costó resolver?

---

### 🚀 Objetivo final

Al terminar esta actividad deberías poder responder:

> **¿Cómo puedo utilizar JavaScript para conocer información del navegador y, al mismo tiempo, modificar dinámicamente lo que ve el usuario en la página?**

La respuesta está en combinar **BOM + DOM**. 🚀
