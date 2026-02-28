import React from 'react';
import type { useAppShellController } from '../hooks/useAppShellController';
import LoginScreen from '../../features/auth/presentation/LoginScreen';
import ConsentScreen from '../../features/consent/presentation/ConsentScreen';
import ConsentRejectedScreen from '../../features/consent/presentation/ConsentRejectedScreen';
import WelcomeScreen from '../../features/exam/presentation/screens/WelcomeScreen';
import InstructionsScreen from '../../features/exam/presentation/screens/InstructionsScreen';
import ExamScreen from '../../features/exam/presentation/screens/ExamScreen';
import ReviewScreen from '../../features/exam/presentation/screens/ReviewScreen';
import ResultsScreen from '../../features/exam/presentation/screens/ResultsScreen';
import { appShellDependencies } from '../config/appShell.dependencies';

type AppScreenContentProps = ReturnType<typeof useAppShellController>;

const AppScreenContent: React.FC<AppScreenContentProps> = ({
  user,
  examController,
  currentScreen,
  consentPdfUrl,
  handleLogin,
  handleAcceptConsent,
  handleRejectConsent,
  handleBackFromRejection,
  handleLogout,
  handleFinishExam,
  handleExpireExam,
  openDialog,
}) => {
  if (currentScreen === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (currentScreen === 'consent') {
    return <ConsentScreen onAccept={handleAcceptConsent} onReject={handleRejectConsent} userName={user?.email} />;
  }

  if (currentScreen === 'consentRejected') {
    return <ConsentRejectedScreen onGoBack={handleBackFromRejection} pdfUrl={consentPdfUrl} />;
  }

  if (currentScreen === 'welcome') {
    return (
      <WelcomeScreen
        userEmail={user?.email}
        questions={examController.state.questions}
        onContinue={examController.continueFromWelcome}
        onLogout={handleLogout}
      />
    );
  }

  if (currentScreen === 'instructions') {
    return (
      <InstructionsScreen
        userEmail={user?.email}
        questions={examController.state.questions}
        onStartExam={examController.handleStartExam}
        onLogout={handleLogout}
      />
    );
  }

  if (currentScreen === 'exam') {
    return (
      <ExamScreen
        questions={examController.state.questions}
        currentQuestionIndex={examController.state.currentQuestion}
        timerKey={examController.state.sessionVersion}
        isRunning={examController.state.isExamStarted}
        duration={appShellDependencies.examConfig.duration}
        userAnswers={examController.state.userAnswers}
        checkedQuestions={examController.state.checkedQuestions}
        onLogout={handleLogout}
        onAnswerSelect={examController.handleAnswerSelect}
        onCheckAnswer={examController.handleCheckAnswer}
        onNavigateToQuestion={examController.goToQuestion}
        onPreviousQuestion={examController.goToPreviousQuestion}
        onNextQuestion={examController.goToNextQuestion}
        onFinishExam={handleFinishExam}
        onHintViewed={() => examController.markHintViewed(examController.state.currentQuestion)}
        onFormulasViewed={() => examController.markFormulasViewed(examController.state.currentQuestion)}
        onOpenDialog={openDialog}
        onTimeUp={handleExpireExam}
      />
    );
  }

  if (currentScreen === 'review' && examController.state.reviewQuestion !== null) {
    return (
      <ReviewScreen
        questions={examController.state.questions}
        reviewQuestionIndex={examController.state.reviewQuestion}
        userAnswers={examController.state.userAnswers}
        onLogout={handleLogout}
        onBackToResults={examController.exitReview}
        onPrevious={examController.goToPreviousReviewQuestion}
        onNext={examController.goToNextReviewQuestion}
      />
    );
  }

  return (
    <ResultsScreen
      questions={examController.state.questions}
      userAnswers={examController.state.userAnswers}
      onRestart={examController.restartCurrentSession}
      onLogout={handleLogout}
      onReviewQuestion={examController.enterReview}
    />
  );
};

export default AppScreenContent;
