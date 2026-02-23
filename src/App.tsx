import React, { useState, useEffect, useMemo } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import Login from './components/Login';
import Timer from './components/Timer';
import Question from './components/Question';
import Results from './components/Results';
import Header from './components/Header';
import Modal from './components/Modal'; // NUEVO: Importar Modal
import MathJaxText from './components/MathJaxText'; // ← AGREGAR ESTA LÍNEA
import type { User, ExamState } from './types';
//import { questions } from './data/questions';
import { questions as allQuestions } from './data/questions'; // ← CAMBIAR nombre a allQuestions
import { EXAM_CONFIG, getRandomQuestions } from './config/examConfig'; // ← NUEVO import
import './App.css';
import { submitExamToAPI } from './services/examSubmissionService';

const EXAM_DURATION = 2.5 * 60 * 60;

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showCredits, setShowCredits] = useState(false); // MOVER AQUÍ - nivel superior

    // ========== NUEVO: Generar preguntas aleatorias ==========
  // useMemo asegura que solo se ejecute una vez al montar el componente
  const examQuestions = useMemo(() => {
    console.log('🎲 Generando preguntas aleatorias...');
    const selected = getRandomQuestions(allQuestions, EXAM_CONFIG);
    console.log(`✅ ${selected.length} preguntas seleccionadas`);
    return selected;
  }, []); // Array vacío = solo se ejecuta una vez
  // ========================================================
  
    const [examState, setExamState] = useState<ExamState>({
    isAuthenticated: false,
    isExamStarted: false,
    isExamFinished: false,
    currentQuestion: 0,
    userAnswers: Array(examQuestions.length).fill(null),        // ← USAR examQuestions
    checkedQuestions: Array(examQuestions.length).fill(false),  // ← USAR examQuestions
    timeRemaining: EXAM_CONFIG.duration,                        // ← USAR EXAM_CONFIG
    questionTimes: [],
    currentQuestionStartTime: null,
    showWelcome: true,
    selectedQuestions: examQuestions,                            // ← NUEVO campo
    isReviewMode: false, // ← NUEVO campo
    reviewQuestion: null // ← NUEVO campo
  });

    // NUEVO: Estados para el modal
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'confirm' as 'confirm' | 'alert' | 'warning',
    onConfirm: () => {}
  });
  
  // NUEVO: Función para abrir modal
  const openModal = (
    title: string,
    message: string,
    onConfirm: () => void,
    type: 'confirm' | 'alert' | 'warning' = 'confirm'
  ) => {
    setModalConfig({
      isOpen: true,
      title,
      message,
      type,
      onConfirm
    });
  };

  // NUEVO: Función para cerrar modal
  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  const mathJaxConfig = {
    loader: { load: ['[tex]/html'] },
    tex: {
      packages: { '[+]': ['html'] },
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
    },
    startup: {
      typeset: false
    }
  };

  useEffect(() => {
    if (examState.isExamStarted && !examState.isExamFinished) {
      setExamState(prev => ({
        ...prev,
        currentQuestionStartTime: Date.now()
      }));
    }
  }, [examState.currentQuestion, examState.isExamStarted, examState.isExamFinished]);

  const recordQuestionTime = () => {
    if (examState.currentQuestionStartTime !== null) {
      const timeSpent = Math.floor((Date.now() - examState.currentQuestionStartTime) / 1000);
      const questionId = examQuestions[examState.currentQuestion].id; // ← CAMBIAR a examQuestions
      
      const existingIndex = examState.questionTimes.findIndex(qt => qt.questionId === questionId);
      
      const newQuestionTimes = [...examState.questionTimes];
      
      if (existingIndex >= 0) {
        newQuestionTimes[existingIndex] = {
          questionId,
          timeSpent: newQuestionTimes[existingIndex].timeSpent + timeSpent,
          timestamp: examState.currentQuestionStartTime
        };
      } else {
        newQuestionTimes.push({
          questionId,
          timeSpent,
          timestamp: examState.currentQuestionStartTime
        });
      }
      
      setExamState(prev => ({
        ...prev,
        questionTimes: newQuestionTimes,
        currentQuestionStartTime: null
      }));
    }
  };

  const downloadExamData = async () => {
    const examData = {
      user: user,
      completionDate: new Date().toISOString(),
// ========== NUEVO: Información de configuración ==========
    examConfiguration: {
      mathQuestions: EXAM_CONFIG.mathQuestions,
      verbalQuestions: EXAM_CONFIG.verbalQuestions,
      totalQuestions: examQuestions.length,
      duration: EXAM_CONFIG.duration
    },
    // =========================================================      
      answers: examState.userAnswers.map((answer, index) => ({
      questionId: examQuestions[index].id,              // ← CAMBIAR a examQuestions
      questionTitle: examQuestions[index].title,        // ← CAMBIAR a examQuestions
      questionArea: examQuestions[index].area,          // ← NUEVO: incluir área
        selectedAnswer: answer,
      correctAnswer: examQuestions[index].correctAnswer,// ← CAMBIAR a examQuestions
      isCorrect: answer === examQuestions[index].correctAnswer // ← CAMBIAR
      })),
      questionTimes: examState.questionTimes,
      totalScore: examState.userAnswers.filter((answer, index) => 
        answer === examQuestions[index].correctAnswer     // ← CAMBIAR a examQuestions
      ).length,
    // ========== NUEVO: Puntuación por área ==========
    scoreByArea: {
      math: examState.userAnswers.filter((answer, index) => 
        examQuestions[index].area === 1 && answer === examQuestions[index].correctAnswer
      ).length,
      verbal: examState.userAnswers.filter((answer, index) => 
        examQuestions[index].area === 2 && answer === examQuestions[index].correctAnswer
      ).length
    }
    // ================================================
    };

      // ========== NUEVO: Enviar a la API ==========
  if (user?.solicitante) {
    try {
      const result = await submitExamToAPI(
        examData,
        user.solicitante.IdPersona,
        user.solicitante.CorreoElectronico,
        user.solicitante.IdCarnet,
        user.solicitante.Carnet
      );

      if (result.success) {
        alert(`✅ ${result.message}\n\nSe descargará también una copia local.`);
      } else {
        alert(`⚠️ ${result.message}\n\nSe descargará una copia local.`);
      }
    } catch (error) {
      alert('⚠️ No se pudo enviar el examen al servidor.\n\nSe descargará una copia local.');
    }
  }
  // ============================================

    const dataStr = JSON.stringify(examData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `exam_results_${user?.code}_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleContinueFromWelcome = () => {
    setExamState(prev => ({
      ...prev,
      showWelcome: false
    }));
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setExamState(prev => ({
      ...prev,
      isAuthenticated: true
    }));
  };

  const handleLogout = () => {
    setUser(null);
    setShowCredits(false); // Reset credits también
  // ========== NUEVO: Regenerar preguntas aleatorias ==========
  console.log('🔄 Regenerando preguntas para nuevo intento...');
  const newQuestions = getRandomQuestions(allQuestions, EXAM_CONFIG);
  console.log(`✅ ${newQuestions.length} nuevas preguntas generadas`);
  // ===========================================================    
    setExamState({
      isAuthenticated: false,
      isExamStarted: false,
      isExamFinished: false,
      currentQuestion: 0,
      userAnswers: Array(newQuestions.length).fill(null),        // ← USAR newQuestions
      checkedQuestions: Array(newQuestions.length).fill(false),  // ← USAR newQuestions 
      timeRemaining: EXAM_DURATION,
      questionTimes: [],
      currentQuestionStartTime: null,
      showWelcome: true,
      selectedQuestions: newQuestions,
      isReviewMode: false,      // ← AGREGAR
      reviewQuestion: null      // ← AGREGAR
    });
  };

  const startExam = () => {
    setExamState(prev => ({
      ...prev,
      isExamStarted: true,
      timeRemaining: EXAM_DURATION,
      currentQuestionStartTime: Date.now()
    }));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (examState.checkedQuestions[examState.currentQuestion]) return;
    
    const newAnswers = [...examState.userAnswers];
    newAnswers[examState.currentQuestion] = answerIndex;
    
    setExamState(prev => ({
      ...prev,
      userAnswers: newAnswers
    }));
  };

  const handleCheckAnswer = () => {
    if (examState.userAnswers[examState.currentQuestion] === null) return;
    
    const newCheckedQuestions = [...examState.checkedQuestions];
    newCheckedQuestions[examState.currentQuestion] = true;
    
    setExamState(prev => ({
      ...prev,
      checkedQuestions: newCheckedQuestions
    }));
  };

  const nextQuestion = () => {
    recordQuestionTime();

    if (examState.currentQuestion < examQuestions.length - 1) {
      setExamState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const prevQuestion = () => {
    recordQuestionTime();
    if (examState.currentQuestion > 0) {
      setExamState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const finishExam = () => {
    const allAnswered = examState.userAnswers.every(answer => answer !== null);
    const allChecked = examState.checkedQuestions.every(checked => checked);
    
    if (!allAnswered || !allChecked) {
      // NUEVO: Usar modal en lugar de window.confirm
      openModal(
        'Finalizar Examen',
        'No has respondido o verificado todas las preguntas. ¿Estás seguro de que deseas finalizar el examen?',
        () => {
          recordQuestionTime();
          setExamState(prev => ({
            ...prev,
            isExamFinished: true,
            isExamStarted: false
          }));
          setTimeout(() => {
            downloadExamData();
          }, 500);
        },
        'warning'
      );
      return;
    }
    
    recordQuestionTime();

    setExamState(prev => ({
      ...prev,
      isExamFinished: true,
      isExamStarted: false
    }));

    setTimeout(() => {
      downloadExamData();
    }, 500);
  };

  const handleTimeUp = () => {
    // NUEVO: Usar modal para notificar que el tiempo se acabó
    openModal(
      'Tiempo Agotado',
      'El tiempo del examen ha finalizado. Tus respuestas serán procesadas automáticamente.',
      () => {
        recordQuestionTime();
        setExamState(prev => ({
          ...prev,
          isExamFinished: true,
          isExamStarted: false
        }));
        setTimeout(() => {
          downloadExamData();
        }, 500);
      },
      'alert'
    );
  };

  const restartExam = () => {
  // ========== NUEVO: Regenerar preguntas aleatorias ==========
  console.log('🔄 Regenerando preguntas para reinicio...');
  const newQuestions = getRandomQuestions(allQuestions, EXAM_CONFIG);
  console.log(`✅ ${newQuestions.length} nuevas preguntas generadas`);
  // ===========================================================

    setExamState({
      isAuthenticated: true,
      isExamStarted: false,
      isExamFinished: false,
      currentQuestion: 0,
      userAnswers: Array(newQuestions.length).fill(null),        // ← USAR newQuestions
      checkedQuestions: Array(newQuestions.length).fill(false),  // ← USAR newQuestions
      timeRemaining: EXAM_DURATION,
      questionTimes: [],
      currentQuestionStartTime: null,
      showWelcome: false,
      selectedQuestions: newQuestions,
      isReviewMode: false,      // ← AGREGAR
      reviewQuestion: null      // ← AGREGAR
    });
  };

  const navigateToQuestion = (questionIndex: number) => {
    recordQuestionTime();
    
    setExamState(prev => ({
      ...prev,
      currentQuestion: questionIndex
    }));
  };

  /**
 * Navegar a una pregunta específica para revisión desde resultados
 * @param questionIndex - Índice de la pregunta (0-based)
 */
const goToReviewQuestion = (questionIndex: number) => {
  setExamState(prev => ({
    ...prev,
    isReviewMode: true,
    reviewQuestion: questionIndex,
    currentQuestion: questionIndex
  }));
};

/**
 * Volver de la revisión a la pantalla de resultados
 */
const exitReviewMode = () => {
  setExamState(prev => ({
    ...prev,
    isReviewMode: false,
    reviewQuestion: null
  }));
};

/**
 * Navegar a siguiente pregunta en modo revisión
 */
const nextReviewQuestion = () => {
  if (examState.reviewQuestion !== null && examState.reviewQuestion < examQuestions.length - 1) {
    setExamState(prev => ({
      ...prev,
      reviewQuestion: prev.reviewQuestion! + 1,
      currentQuestion: prev.reviewQuestion! + 1
    }));
  }
};

/**
 * Navegar a pregunta anterior en modo revisión
 */
const prevReviewQuestion = () => {
  if (examState.reviewQuestion !== null && examState.reviewQuestion > 0) {
    setExamState(prev => ({
      ...prev,
      reviewQuestion: prev.reviewQuestion! - 1,
      currentQuestion: prev.reviewQuestion! - 1
    }));
  }
};

  // Renderizar contenido basado en el estado
  const renderContent = () => {
    if (!examState.isAuthenticated) {
      return <Login onLogin={handleLogin} />;
    }

    // Mostrar página de bienvenida después del login
    if (examState.showWelcome) {
      return (
        <div className="welcome-page-wrapper">
          <div className="welcome-page-scroll">
            <div className="welcome-header-bar">
              <div className="welcome-header-content">
                <div className="tec-logo-header">
                  <img 
                    src="https://aplics.tec.ac.cr/SistemaCEA/Content/img/logotec_blanco.png" 
                    alt="TEC Logo" 
                    className="logo-header-image"
                  />
                </div>
                <div className="header-user-info">
                  <span className="user-email">{user?.email}</span>
                  <button className="logout-header-btn" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>

            <div className="welcome-main-content">
              <div className="welcome-hero">
                <h1 className="welcome-main-title">
                  Cuaderno Digital de Ejercicios
                </h1>
                <h2 className="welcome-main-subtitle">
                  Prueba de Aptitud Académica (PAA)
                </h2>
                <p className="welcome-institution">
                  Instituto Tecnológico de Costa Rica
                </p>
              </div>

              <div className="welcome-presentation-section">
                <h3 className="section-title">
                  <span className="title-icon">📋</span>
                  Presentación
                </h3>
                
                <div className="presentation-content">
                  <p>
                    Las personas interesadas en iniciar sus estudios superiores en el <strong>Instituto Tecnológico 
                    de Costa Rica (TEC)</strong> deben realizar la prueba de aptitud académica (PAA). El resultado 
                    de este examen se combina con el promedio de la educación diversificada para calcular el puntaje 
                    de admisión.
                  </p>

                  <p>
                    La prueba está compuesta por <strong>44 ítems de matemática</strong> y <strong>26 de verbal</strong>, 
                    los cuales miden diferentes habilidades de razonamiento matemático y verbal con el propósito de 
                    seleccionar a las personas solicitantes con mayores probabilidades de éxito académico en el TEC.
                  </p>

                  <div className="highlight-box math-highlight">
                    <h4>
                      <span className="box-icon">📐</span>
                      Habilidades de Razonamiento Matemático
                    </h4>
                    <p>
                      En general, las habilidades de razonamiento matemático involucran la resolución de problemas 
                      con el uso de diversas estrategias cognitivas, específicamente, se miden tres categorías:
                    </p>
                    <ul>
                      <li>
                        <strong>Resolución de problemas:</strong> implica el uso de conocimientos básicos, definir 
                        y ejecutar una estrategia de solución, aplicar reglas básicas de conteo y definiciones o 
                        teoremas en la resolución de problemas.
                      </li>
                      <li>
                        <strong>Razonamiento deductivo e inductivo:</strong> realizar inferencias o deducciones a 
                        partir de cierta información dada, identificar premisas para llegar a una conclusión y crear 
                        nuevos conceptos por medio del análisis de semejanzas o diferencias para luego aplicarlos.
                      </li>
                      <li>
                        <strong>Razonamiento con figuras:</strong> se enfoca en identificar patrones geométricos, 
                        analizar secuencias de figuras y reconocer las partes de un todo.
                      </li>
                    </ul>
                  </div>

                  <div className="highlight-box verbal-highlight">
                    <h4>
                      <span className="box-icon">📖</span>
                      Habilidades de Razonamiento Verbal
                    </h4>
                    <p>
                      En las habilidades de razonamiento verbal se mide la capacidad para utilizar el lenguaje 
                      verbal a través del análisis semántico e inferencial en la lectura de diversos textos, 
                      en particular, en dos categorías:
                    </p>
                    <ul>
                      <li>
                        <strong>Semántico:</strong> implica determinar las relaciones entre las distintas partes 
                        de una oración y reconocer el significado de las palabras en contexto.
                      </li>
                      <li>
                        <strong>Inferencial:</strong> se requiere realizar comparaciones de ideas entre distintos 
                        textos, sintetizar información, extraer conclusiones y comprender instrucciones.
                      </li>
                    </ul>
                  </div>

                  <p className="presentation-conclusion">
                    En este cuaderno encontrará ejercicios resueltos de las diferentes categorías de razonamiento, 
                    con la finalidad de ejemplificar posibles estrategias de resolución. <strong>Esperamos que este 
                    cuaderno sea útil para su preparación al examen de admisión.</strong>
                  </p>
                </div>
              </div>

              <div className="welcome-stats-section">
                <h3 className="section-title">
                  <span className="title-icon">📊</span>
                  Información de la Práctica
                </h3>
                
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon-large">📝</div>
                    <div className="stat-number">{examQuestions.length}</div>
                    <div className="stat-label">Total de Preguntas</div>
                    <div className="stat-breakdown">
                      <span>{examQuestions.filter(q => q.area === 1).length} Matemática</span>
                      <span className="divider">•</span>
                      <span>{examQuestions.filter(q => q.area === 2).length} Verbal</span>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon-large">⏱️</div>
                    <div className="stat-number">2.5</div>
                    <div className="stat-label">Horas de Práctica</div>
                    <div className="stat-breakdown">
                      <span>Tiempo cronometrado</span>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon-large">📈</div>
                    <div className="stat-number">3</div>
                    <div className="stat-label">Niveles de Dificultad</div>
                    <div className="stat-breakdown">
                      <span>Fácil • Intermedio • Difícil</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="welcome-features-section">
                <h3 className="section-title">
                  <span className="title-icon">✨</span>
                  Características del Cuaderno
                </h3>
                
                <div className="features-list">
                  <div className="feature-card">
                    <div className="feature-icon-box">✓</div>
                    <div className="feature-text">
                      <strong>Ejercicios con Estrategias de Resolución</strong>
                      <p>Cada ejercicio incluye explicaciones detalladas y posibles estrategias de resolución.</p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-box">✓</div>
                    <div className="feature-text">
                      <strong>Representatividad de Habilidades</strong>
                      <p>Incluye ítems de cada una de las habilidades medidas en la PAA oficial.</p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-box">✓</div>
                    <div className="feature-text">
                      <strong>Criterios de Calidad</strong>
                      <p>Los ejercicios fueron seleccionados con los mismos criterios de calidad de la PAA.</p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-box">✓</div>
                    <div className="feature-text">
                      <strong>Retroalimentación Inmediata</strong>
                      <p>Valida tus respuestas y obtén explicaciones al instante durante la práctica.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="welcome-about-section">
                <div className="about-box">
                  <p>
                    El <strong>Comité Examen de Admisión (CEA)</strong> es el responsable de construir y aplicar 
                    la prueba de aptitud académica (PAA) del TEC. Con la finalidad de apoyar a las personas 
                    solicitantes que desean ingresar a esta universidad, ha elaborado este cuaderno de ejercicios 
                    con posibles estrategias de resolución que pueden ser útiles para la preparación del examen.
                  </p>
                </div>
              </div>

              <div className="welcome-actions">
                <button className="main-action-btn" onClick={handleContinueFromWelcome}>
                  <span>Continuar a las Instrucciones</span>
                  <span className="btn-arrow">→</span>
                </button>
                
                <button 
                  className="secondary-action-btn" 
                  onClick={() => setShowCredits(!showCredits)}
                >
                  {showCredits ? '← Ocultar Créditos' : 'Ver Créditos'}
                </button>
              </div>

              {showCredits && (
                <div className="credits-section">
                  <div className="credits-card">
                    <h3 className="credits-title">
                      <span className="title-icon">👥</span>
                      Créditos
                    </h3>
                    
                    <div className="credits-content">
                      <div className="credits-group">
                        <h4>Comité Examen de Admisión (CEA)</h4>
                        <p className="credits-description">
                          Responsable de la construcción y aplicación de la Prueba de Aptitud Académica del TEC.
                        </p>
                      </div>

                      <div className="credits-group">
                        <h4>Elaboración del Cuaderno</h4>
                        <p className="credits-description">
                          Este cuaderno digital ha sido desarrollado por el CEA con el objetivo de proporcionar 
                          material de apoyo a las personas solicitantes para su preparación al examen de admisión.
                        </p>
                      </div>

                      <div className="credits-group">
                        <h4>Instituto Tecnológico de Costa Rica</h4>
                        <p className="credits-description">
                          Institución de educación superior pública costarricense comprometida con la excelencia 
                          académica y el desarrollo tecnológico del país.
                        </p>
                      </div>

                      <div className="credits-edition">
                        <strong>Cuarta Edición - {new Date().getFullYear()}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <footer className="welcome-footer">
              <p>Instituto Tecnológico de Costa Rica - Comité Examen de Admisión</p>
              <p>Cuaderno Digital de Ejercicios</p>
            </footer>
          </div>
        </div>
      );
    }

    if (!examState.isExamStarted && !examState.isExamFinished) {
      return (
        <div className="exam-start-page">
          <Header 
            examTitle="Práctica de Examen de Admisión"
            onLogout={handleLogout}
            showFinishButton={false}
            showLogoutButton={true}
          />
          <div className="exam-start-container">
            <div className="exam-instructions">
              <h2>Práctica de Examen de Admisión</h2>
              <p>Bienvenido, {user?.email}</p>
              
              <div className="instructions-list">
                <h3>Instrucciones:</h3>
                <ul>
                  <li>El examen tiene una duración de 2 horas y 30 minutos</li>
              {/* ========== ACTUALIZAR ESTA LÍNEA ========== */}
              <li>
                Consta de {examQuestions.length} preguntas (
                {examQuestions.filter(q => q.area === 1).length} matemáticas y {' '}
                {examQuestions.filter(q => q.area === 2).length} verbales)
              </li>
              {/* =========================================== */}
                  <li>Selecciona una respuesta y presiona "Revisar Respuesta" para validar</li>
                  <li>Una vez chequeada una pregunta, no podrás cambiar tu respuesta</li>
                  <li>Puedes navegar entre preguntas usando los botones anterior/siguiente</li>
                  <li>Al finalizar, podrás ver tus resultados y las explicaciones</li>
                </ul>
              </div>
              
              <div className="timer-info">
                  <h3>Tiempo disponible: 2 horas y 30 minutos</h3>
              </div>
              
              <button className="start-exam-btn" onClick={startExam}>
                Iniciar Examen
              </button>
            </div>
          </div>
        </div>
      );
    }

      // ========== NUEVO: Modo Revisión ==========
  if (examState.isExamFinished && examState.isReviewMode && examState.reviewQuestion !== null) {
    const reviewQuestionData = examQuestions[examState.reviewQuestion];
    const isCorrect = examState.userAnswers[examState.reviewQuestion] === reviewQuestionData.correctAnswer;
    
    return (
      <div className="review-page">
        <Header 
          examTitle="Revisión de Examen"
          onLogout={handleLogout}
          showFinishButton={false}
          showLogoutButton={true}
        />
        
        <div className="review-content">
          {/* Encabezado de revisión */}
          <div className="review-header">
            <button className="back-to-results-btn" onClick={exitReviewMode}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Volver a Resultados
            </button>
            
            <div className="review-info">
              <h2>Pregunta {examState.reviewQuestion + 1} de {examQuestions.length}</h2>
              <span className={`review-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect ? '✓ Respuesta Correcta' : '✗ Respuesta Incorrecta'}
              </span>
            </div>
          </div>

          {/* Contenido de la pregunta */}
          <div className="review-question-container">
            <div className="question-title">{reviewQuestionData.title}</div>
            
            <div className="question-content">
              <MathJaxText text={reviewQuestionData.content} />
            </div>
            
            <div className="options">
              {reviewQuestionData.options.map((option, index) => {
                const isUserAnswer = examState.userAnswers[examState.reviewQuestion!] === index;
                const isCorrectAnswer = index === reviewQuestionData.correctAnswer;
                
                let optionClass = 'option review-option';
                if (isCorrectAnswer) {
                  optionClass += ' correct';
                }
                if (isUserAnswer && !isCorrectAnswer) {
                  optionClass += ' incorrect';
                }
                if (isUserAnswer) {
                  optionClass += ' user-selected';
                }
                
                return (
                  <div key={index} className={optionClass}>
                    <span className="option-number">{index + 1}</span>
                    <MathJaxText text={option} />
                    {isUserAnswer && (
                      <span className="user-answer-badge">Tu respuesta</span>
                    )}
                    {isCorrectAnswer && (
                      <span className="correct-answer-badge">Respuesta correcta</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Explicación siempre visible en revisión */}
            <div className="explanation-box">
              <div className="explanation-title">Explicación</div>
              <MathJaxText text={reviewQuestionData.explanation} />
            </div>
          </div>

          {/* Navegación de revisión */}
          <div className="review-navigation">
            <button 
              className="review-nav-btn"
              onClick={prevReviewQuestion}
              disabled={examState.reviewQuestion === 0}
            >
              ← Pregunta Anterior
            </button>
            
            <button className="back-to-results-btn-bottom" onClick={exitReviewMode}>
              Ver Todos los Resultados
            </button>
            
            <button 
              className="review-nav-btn"
              onClick={nextReviewQuestion}
              disabled={examState.reviewQuestion === examQuestions.length - 1}
            >
              Pregunta Siguiente →
            </button>
          </div>
        </div>
      </div>
    );
  }
  // ==========================================

    if (examState.isExamFinished) {
      return (
        <Results 
          questions={examQuestions}
          userAnswers={examState.userAnswers}
          onRestart={restartExam}
          onLogout={handleLogout}
          onReviewQuestion={goToReviewQuestion} // ← NUEVO: pasar función
        />
      );
    }

    const currentQuestionData = examQuestions[examState.currentQuestion];
    const showExplanation = examState.checkedQuestions[examState.currentQuestion];

    return (
      <div className="exam-page">
        <Header 
          examTitle="Práctica de Examen de Admisión - Matemáticas"
          onFinishExam={finishExam}
          onLogout={handleLogout}
          showFinishButton={true}
          showLogoutButton={true}
        />
        
        <div className="exam-content">
          <div className="timer-section">
            <Timer 
              initialTime={EXAM_CONFIG.duration}
              onTimeUp={handleTimeUp}
              isRunning={examState.isExamStarted}
            />
          </div>
          
          <Question 
            question={currentQuestionData}
            questionNumber={examState.currentQuestion + 1}
            totalQuestions={examQuestions.length}
            selectedAnswer={examState.userAnswers[examState.currentQuestion]}
            checked={examState.checkedQuestions[examState.currentQuestion]}
            correctAnswer={currentQuestionData.correctAnswer}
            onAnswerSelect={handleAnswerSelect}
            onCheckAnswer={handleCheckAnswer}
            showExplanation={showExplanation}
            userAnswers={examState.userAnswers}
            checkedQuestions={examState.checkedQuestions}
            onNavigateToQuestion={navigateToQuestion}
            allQuestions={examQuestions} 
          />
          
          <div className="navigation-buttons">
            <button 
              onClick={prevQuestion}
              disabled={examState.currentQuestion === 0}
            >
              Anterior
            </button>
            
            {examState.currentQuestion < examQuestions.length - 1 ? (
              <button onClick={nextQuestion}>
                Siguiente
              </button>
            ) : (
              <button onClick={finishExam} className="finish-btn">
                Finalizar Examen
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <MathJaxContext version={3} config={mathJaxConfig}>
      <div className="app">
        {renderContent()}
        
        {/* NUEVO: Modal Component */}
        <Modal
          isOpen={modalConfig.isOpen}
          onClose={closeModal}
          onConfirm={modalConfig.onConfirm}
          title={modalConfig.title}
          message={modalConfig.message}
          type={modalConfig.type}
          confirmText={modalConfig.type === 'warning' ? 'Sí, finalizar' : 'Aceptar'}
          cancelText="Cancelar"
        />
      </div>
    </MathJaxContext>
  );
};

export default App;