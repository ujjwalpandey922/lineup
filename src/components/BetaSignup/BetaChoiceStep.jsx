'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './BetaChoiceStep.module.css';
import { useRouter } from 'next/navigation';

const BetaChoiceStep = ({ wantsBeta, onBetaChoice }) => {
  const [selectedValue, setSelectedValue] = useState(
    wantsBeta === true ? 'yes' : wantsBeta === false ? 'no' : ''
  );

  const navTo = useRouter();
  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleNext = () => {
    if (selectedValue === 'yes') {
      onBetaChoice(true);
    } else if (selectedValue === 'no') {
      onBetaChoice(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Left section */}
      <div className={styles.leftSection}>
        <div className={styles.contentWrapper}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="LineUp Logo"
              width={64}
              height={64}
              className={styles.logo}
            />
          </div>

          {/* Question */}
          <h1 className={styles.title}>Want to be part of our beta test?</h1>

          {/* Radio Buttons */}
          <div className={styles.radioGroup}>
            <div className={styles.radioItem}>
              <input
                type="radio"
                id="yes"
                name="betaChoice"
                value="yes"
                checked={selectedValue === 'yes'}
                onChange={(e) => handleValueChange(e.target.value)}
                className={styles.radioInput}
              />
              <label htmlFor="yes" className={styles.radioLabel}>
                Yes
              </label>
            </div>

            <div className={styles.radioItem}>
              <input
                type="radio"
                id="no"
                name="betaChoice"
                value="no"
                checked={selectedValue === 'no'}
                onChange={(e) => handleValueChange(e.target.value)}
                className={styles.radioInput}
              />
              <label htmlFor="no" className={styles.radioLabel}>
                No
              </label>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className={styles.navigationContainer}>
            <button
              onClick={() => {
                navTo.push('/');
              }}
              className={styles.backButton}
            >
              {/* <ChevronLeft className={styles.buttonIcon} /> */}
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedValue}
              className={`${styles.nextButton} ${
                !selectedValue ? styles.nextButtonDisabled : ''
              }`}
            >
              Next
              {/* <ChevronRight className={styles.buttonIcon} /> */}
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Phone mockup */}
      <div className={styles.rightSection}>
        <Image
          src="/phone.png"
          alt="Phone mockup"
          className={styles.phoneImage}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default BetaChoiceStep;
