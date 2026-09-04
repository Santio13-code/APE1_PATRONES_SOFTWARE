# Sistema de Gestión de Biblioteca - Refactorización

## 1. Descripción del proyecto

El **Sistema de Gestión de Biblioteca** es una aplicación desarrollada en **JavaScript con Node.js** que permite gestionar libros y realizar operaciones básicas de una biblioteca.

El proyecto inicialmente presentaba una estructura monolítica, con lógica de búsqueda, disponibilidad, préstamos, devoluciones y presentación concentrada en un mismo archivo. Como parte de la refactorización, se reorganizó el código aplicando principios de **Clean Code, KISS, DRY, YAGNI, modularidad y Single Responsibility Principle (SRP)**.

La refactorización busca mejorar la legibilidad, mantenibilidad, reutilización y organización del sistema, manteniendo su funcionalidad original.

---

## 2. Integrantes

* **Lagua Flores Henry Daniel**
* **Mora Beltran Santiago Sebastian**
* **Peñaloza Peñaloza Alan Justin**
* **Vinces Cueva Boris Yussef**

---

## 3. Requisitos

Para ejecutar el proyecto se requiere:

* **Node.js 18 o superior**
* **Git** (opcional, para clonar el repositorio)

No se requieren dependencias externas para ejecutar las pruebas, ya que se utilizan los módulos nativos de Node.js.

---

## 4. Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Santio13-code/APE1_PATRONES_SOFTWARE.git
```

Ingresar al directorio del proyecto:

```bash
cd APE1_PATRONES_SOFTWARE
```

El proyecto no requiere la instalación de paquetes adicionales.

---

## 5. Ejecución

### Ejecución de la aplicación

Para ejecutar el sistema desde la consola:

```bash
node biblioteca.js
```

El programa permite realizar operaciones relacionadas con los libros, como:

* Listar libros.
* Buscar libros.
* Consultar disponibilidad.
* Rentar libros.
* Devolver libros.

### Ejecución de las pruebas

Las pruebas automatizadas pueden ejecutarse mediante:

```bash
node --test
```

---

## 6. Estructura del proyecto

```text
APE1_PATRONES_SOFTWARE/
│
├── models/
│   └── Libro.js
│
├── repositories/
│   └── LibroRepository.js
│
├── services/
│   └── BibliotecaService.js
│
├── tests/
│   └── biblioteca.test.js
│
├── biblioteca.js
│
└── README.md
```

### Descripción de los componentes

* **models/Libro.js:** representa la entidad Libro y sus datos.
* **repositories/LibroRepository.js:** contiene las operaciones relacionadas con el acceso y búsqueda de los libros.
* **services/BibliotecaService.js:** contiene las reglas y lógica principal del negocio.
* **tests/biblioteca.test.js:** contiene las pruebas automatizadas del sistema.
* **biblioteca.js:** punto de entrada y presentación de las operaciones mediante consola.
* **README.md:** documentación del proyecto.

---

## 7. Funcionalidades

El sistema proporciona las siguientes funcionalidades:

| Funcionalidad            | Descripción                                                       |
| ------------------------ | ----------------------------------------------------------------- |
| Listar libros            | Muestra los libros registrados en el sistema.                     |
| Buscar libros            | Permite buscar libros mediante criterios como título o autor.     |
| Consultar disponibilidad | Permite verificar si un libro está disponible o rentado.          |
| Rentar libro             | Registra el préstamo de un libro a un usuario.                    |
| Devolver libro           | Registra la devolución de un libro y actualiza su disponibilidad. |

---

## 8. Principios aplicados

Durante la refactorización se aplicaron los siguientes principios:

### Clean Code

Se mejoraron los nombres de variables, funciones y métodos para hacer que el código sea más comprensible y fácil de mantener.

### KISS

Se simplificaron estructuras innecesariamente complejas y se utilizaron soluciones directas para las operaciones del sistema.

### DRY

Se redujo la duplicación de código mediante la reutilización de funciones y la centralización de operaciones repetitivas.

### YAGNI

Se eliminaron elementos y funcionalidades que no eran necesarios para los requerimientos actuales del sistema.

### Modularidad

La aplicación fue dividida en diferentes módulos con responsabilidades específicas, separando modelo, acceso a datos, lógica de negocio y presentación.

### SRP

Se aplicó el principio de responsabilidad única, procurando que cada componente tenga una responsabilidad claramente definida y un único motivo principal de cambio.

---

## 9. Pruebas realizadas

Se implementaron pruebas automatizadas utilizando los módulos nativos:

```javascript
node:test
node:assert
```

Las pruebas verifican diferentes comportamientos del sistema, incluyendo:

1. Búsqueda de un libro existente.
2. Búsqueda de un libro inexistente.
3. Consulta de disponibilidad.
4. Rentar un libro disponible.
5. Intentar rentar un libro que ya está rentado.
6. Devolver un libro rentado.

Las pruebas permiten comprobar tanto las consultas del sistema como las reglas de negocio relacionadas con los préstamos y devoluciones.

Para ejecutarlas:

```bash
node --test
```

---

## 10. Control de versiones

El desarrollo del proyecto se realizó utilizando **Git**, registrando los principales cambios realizados durante el proceso de refactorización.

Los commits permiten identificar la evolución del código desde su versión inicial hasta la versión refactorizada.

Ejemplo:

```bash
git log --oneline
```

---

## 11. Conclusiones

La refactorización permitió transformar una estructura inicialmente concentrada en un único archivo en una organización modular con responsabilidades mejor definidas.

La aplicación de **Clean Code, KISS, DRY, YAGNI y SRP** permitió mejorar la legibilidad, reducir la duplicación y facilitar el mantenimiento del sistema.

La separación entre modelo, repositorio, servicio y presentación también permite que el sistema pueda evolucionar posteriormente hacia nuevas interfaces, como una aplicación web o una API, sin tener que modificar completamente la lógica de negocio.

---

## 12. Ejecución rápida

```bash
# Clonar el proyecto
git clone https://github.com/Santio13-code/APE1_PATRONES_SOFTWARE.git

# Entrar al proyecto
cd APE1_PATRONES_SOFTWARE

# Ejecutar la aplicación
node biblioteca.js

# Ejecutar las pruebas
node --test
```
