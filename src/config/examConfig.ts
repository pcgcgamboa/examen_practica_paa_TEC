export type QuestionOrderMode = 'grouped' | 'mixed' | 'id-asc';

export interface ExamConfiguration {
  mathQuestions: number;      // Cantidad de preguntas matemáticasa
  verbalQuestions: number;    // Cantidad de preguntas verbales
  duration: number;           // Duración en segundos
  allowNavigation: boolean;   // Permitir navegar entre preguntas
  showTimer: boolean;         // Mostrar temporizador
  //groupByArea: boolean; // ← NUEVO: Agrupar por área
  questionOrder: QuestionOrderMode;
  randomizeQuestions: boolean; // ← NUEVO: Seleccionar preguntas aleatoriamente
}

// CONFIGURACIÓN DEL EXAMEN - MODIFICAR AQUÍ
export const EXAM_CONFIG: ExamConfiguration = {
  mathQuestions: 64,          // <- CAMBIAR ESTE NÚMERO //Antes:32
  verbalQuestions: 38,        // <- CAMBIAR ESTE NÚMERO //Antes:28
  duration: 2.5 * 60 * 60,    // 2 horas y 30 minutos
  allowNavigation: true,
  showTimer: true,
  //groupByArea: true, // ← NUEVO: true = agrupar, false = mezclar
  questionOrder: 'id-asc',  // grouped o 'mixed' o 'id-asc'
  randomizeQuestions: false // ← NUEVO: true = aleatorio, false = en orden
};

/**
 * Función para seleccionar preguntas aleatorias del banco de preguntas
 * @param allQuestions - Todas las preguntas disponibles
 * @param config - Configuración del examen
 * @returns Array de preguntas seleccionadas aleatoriamente
 */
export const getRandomQuestions = <T extends { area: number; id: number }>(
  allQuestions: T[],
  config: ExamConfiguration
): T[] => {
  // Paso 1: Separar preguntas por área
  const mathQuestions = allQuestions.filter(q => q.area === 1);
  const verbalQuestions = allQuestions.filter(q => q.area === 2);

  // Paso 2: Validar que hay suficientes preguntas
  if (mathQuestions.length < config.mathQuestions) {
    console.warn(
      `⚠️ Advertencia: No hay suficientes preguntas matemáticas.
      Disponibles: ${mathQuestions.length}
      Requeridas: ${config.mathQuestions}
      Se usarán todas las disponibles.`
    );
  }

  if (verbalQuestions.length < config.verbalQuestions) {
    console.warn(
      `⚠️ Advertencia: No hay suficientes preguntas verbales.
      Disponibles: ${verbalQuestions.length}
      Requeridas: ${config.verbalQuestions}
      Se usarán todas las disponibles.`
    );
  }

  // Paso 3: Función para mezclar array (algoritmo Fisher-Yates)
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array]; // Crear copia para no mutar el original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Paso 4: Seleccionar preguntas aleatorias
  //const selectedMath = shuffleArray(mathQuestions).slice(0, config.mathQuestions);
  //const selectedVerbal = shuffleArray(verbalQuestions).slice(0, config.verbalQuestions);
   // Paso 4: Seleccionar preguntas según configuración
  let selectedMath: T[];
  let selectedVerbal: T[];

  if (config.randomizeQuestions) {
    // ========== OPCIÓN A: SELECCIÓN ALEATORIA ==========
    // Mezclar cada área y seleccionar las primeras N preguntas
    selectedMath = shuffleArray(mathQuestions).slice(0, config.mathQuestions);
    selectedVerbal = shuffleArray(verbalQuestions).slice(0, config.verbalQuestions);
    
    console.log(`🎲 Preguntas seleccionadas ALEATORIAMENTE:
      - Matemáticas: ${selectedMath.length} preguntas (aleatorias)
      - Verbales: ${selectedVerbal.length} preguntas (aleatorias)`);
  } else {
    // ========== OPCIÓN B: SELECCIÓN EN ORDEN ==========
    // Tomar las primeras N preguntas en el orden que aparecen
    selectedMath = mathQuestions.slice(0, config.mathQuestions);
    selectedVerbal = verbalQuestions.slice(0, config.verbalQuestions);
    
    console.log(`📋 Preguntas seleccionadas EN ORDEN:
      - Matemáticas: ${selectedMath.length} preguntas (primeras ${config.mathQuestions})
      - Verbales: ${selectedVerbal.length} preguntas (primeras ${config.verbalQuestions})`);
  }

  // Paso 5: Combinar y mezclar todas las preguntas
  //const combined = [...selectedMath, ...selectedVerbal];
  //const finalQuestions = shuffleArray(combined);

  //console.log(`✅ Preguntas seleccionadas:
  //  - Matemáticas: ${selectedMath.length}
  //  - Verbales: ${selectedVerbal.length}
  //  - Total: ${finalQuestions.length}`);

  // Paso 5: Combinar según configuración
  let finalQuestions: T[];

  switch (config.questionOrder) {
  case 'grouped':
    finalQuestions = [...selectedMath, ...selectedVerbal];
    break;
  case 'mixed':
    finalQuestions = shuffleArray([...selectedMath, ...selectedVerbal]);
    break;
  case 'id-asc':
    finalQuestions = [...selectedMath, ...selectedVerbal]
      .sort((a, b) => a.id - b.id);
    break;
}
  /*
  if (config.groupByArea) {
    // ========== OPCIÓN 1: AGRUPAR POR ÁREA ==========
    // Primero todas las matemáticas, luego todas las verbales
    finalQuestions = [...selectedMath, ...selectedVerbal];
    
    console.log(`✅ Preguntas agrupadas por área:
      - Matemáticas (1-${selectedMath.length}): ${selectedMath.length} preguntas
      - Verbales (${selectedMath.length + 1}-${selectedMath.length + selectedVerbal.length}): ${selectedVerbal.length} preguntas
      - Total: ${finalQuestions.length} preguntas`);
  } else {
    // ========== OPCIÓN 2: MEZCLAR TODAS ==========
    const combined = [...selectedMath, ...selectedVerbal];
    finalQuestions = shuffleArray(combined);
    
    console.log(`✅ Preguntas mezcladas aleatoriamente:
      - Matemáticas: ${selectedMath.length}
      - Verbales: ${selectedVerbal.length}
      - Total: ${finalQuestions.length}`);
  }
*/
  return finalQuestions;
};