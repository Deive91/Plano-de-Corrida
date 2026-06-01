/**
 * Indicador de etapas do onboarding (stepper).
 * Mostra 3 passos: Dados, Nível, Objetivo.
 */
export default function StepIndicator({ currentStep, steps }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`step-dot ${
                i < currentStep
                  ? 'completed'
                  : i === currentStep
                    ? 'active'
                    : 'pending'
              }`}
            >
              {i < currentStep ? '✓' : i + 1}
            </div>
            <span
              className={`text-xs font-medium hidden sm:block ${
                i <= currentStep ? 'text-emerald-400' : 'text-slate-500'
              }`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`step-line w-12 sm:w-20 ${
                i < currentStep ? 'completed' : ''
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
