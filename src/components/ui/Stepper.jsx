import React from 'react';

const Stepper = ({ currentStep, totalSteps, steps }) => {
  const count = steps && Array.isArray(steps) && steps.length > 0 ? steps.length : totalSteps;
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {Array.from({ length: count }, (_, i) => i + 1).map((step) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step < currentStep
                    ? 'bg-emerald-500 text-white'
                    : step === currentStep
                    ? 'bg-primary-color text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step < currentStep ? '✓' : step}
              </div>
              {steps && (
                <div
                  className={`mt-2 text-xs ${
                    step < currentStep
                      ? 'text-emerald-600 font-medium'
                      : step === currentStep
                      ? 'text-primary-color font-medium'
                      : 'text-gray-500'
                  }`}
                >
                  {steps[step - 1]}
                </div>
              )}
            </div>
            {step < count && <div className="w-16 h-1 bg-gray-200"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
