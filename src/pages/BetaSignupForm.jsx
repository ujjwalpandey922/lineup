'use client';

import { useState } from 'react';
import axios from 'axios';
import BetaChoiceStep from '@/components/BetaSignup/BetaChoiceStep';
import UserInfoStep from '@/components/BetaSignup/UserInfoStep';
import ThankYouStep from '@/components/BetaSignup/ThankYouStep';

const BetaSignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    country_code: '+33',
    wants_beta: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBetaChoice = (choice) => {
    setFormData((prev) => ({
      ...prev,
      wants_beta: choice,
    }));
    setStep(2);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('https://api.lineup-events.com/api/leads', formData);
      setStep(3);
    } catch (error) {
      console.error('Submission error:', error);
      // TODO: Add proper error handling (toast, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <BetaChoiceStep
            wantsBeta={formData.wants_beta}
            onBetaChoice={handleBetaChoice}
          />
        );
      case 2:
        return (
          <UserInfoStep
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onBack={handleBack}
            isSubmitting={isSubmitting}
          />
        );
      case 3:
        return <ThankYouStep />;
      default:
        return null;
    }
  };

  return renderStep();
};

export default BetaSignupForm;
