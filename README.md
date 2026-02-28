# Examen de Practica PAA TEC

Aplicacion web para practicar el examen de admision del TEC. El proyecto esta construido con React, TypeScript y Vite, y fue reorganizado con una arquitectura `feature-first` para reducir acoplamiento y facilitar mantenimiento.

## Requisitos

- Node.js 20 o superior
- `pnpm` recomendado

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm test
```

## Arquitectura

La aplicacion se divide en capas y features:

```text
src/
  app/         # composition root, shell y resolucion de pantallas
  features/    # auth, consent y exam
  shared/      # componentes y utilidades compartidas
```

### `app/`

- `App.tsx`: composition root delgado
- `AppShell.tsx`: orquestacion de flujo de pantallas
- `flow/resolveAppScreen.ts`: resolucion centralizada del estado visual
- `providers/MathJaxProvider.tsx`: provider de MathJax

### `features/auth`

- `domain/`: tipos, validaciones y errores de autenticacion
- `application/`: casos de uso y puertos
- `infrastructure/`: gateways local y Web API
- `presentation/`: pantalla de login y hook del formulario

Patron principal: `Strategy` para intercambiar autenticacion local y remota sin condicionales dispersos.

### `features/consent`

- `domain/`: tipos de consentimiento
- `application/`: casos de uso y puerto `ConsentStore`
- `infrastructure/`: adaptador de `localStorage`
- `presentation/`: pantallas de aceptacion y rechazo

Patron principal: `Adapter` para aislar almacenamiento del navegador.

### `features/exam`

- `domain/`: entidades, value objects, configuracion y servicios puros
- `application/`: reducer, acciones, hooks y casos de uso
- `infrastructure/`: repositorio de preguntas, envio HTTP, device info e IP publica
- `question-bank/`: banco de preguntas dividido por area
- `presentation/`: pantallas y componentes del examen

Patrones principales:

- `Reducer` para la sesion del examen
- `Facade` mediante `useExamController`
- `Repository` para el banco de preguntas
- `Strategy` para seleccion y ordenamiento de preguntas
- `Builder/Mapper` para el payload de envio

### `shared/`

- `components/Modal`: modal reutilizable
- `ui/MathJaxHtml`: render seguro de HTML + MathJax
- `lib/browser/downloadJson.ts`: descarga local de respaldo
- `lib/logging/logger.ts`: logger simple

## Flujo funcional

1. Login
2. Consentimiento
3. Bienvenida
4. Instrucciones
5. Examen
6. Revision
7. Resultados

La pantalla actual se deriva desde `resolveAppScreen`, no desde condicionales distribuidos por toda la UI.

## Reglas de implementacion

- `presentation` no debe importar directamente desde `infrastructure`
- `domain` no debe depender de React ni de APIs del navegador
- Nuevas reglas de negocio deben entrar por `domain/` o `application/`
- Nuevas integraciones con navegador o red deben entrar por `infrastructure/`
- Si algo solo lo usa un feature, no debe ir a `shared/`

## Compatibilidad con codigo legado

Se dejaron wrappers en carpetas antiguas como `src/components`, `src/services`, `src/config` y `src/types` para evitar romper imports existentes mientras se completa la migracion interna.

## Calidad

Actualmente el proyecto valida con:

- `pnpm build`
- `pnpm lint`
- `pnpm test`

Incluye pruebas iniciales para:

- resolucion de pantallas
- reducer de sesion del examen
- servicios de scoring
