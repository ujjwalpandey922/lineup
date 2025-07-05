'use client';

import { Loader2 } from 'lucide-react';
import styles from './UserInfoStep.module.css';
import Image from 'next/image';

const UserInfoStep = ({
  formData,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
}) => {
  const handleCountryCodeChange = (value) => {
    const syntheticEvent = {
      target: {
        name: 'country_code',
        value: value,
        type: 'text',
        checked: false,
      },
    };
    onChange(syntheticEvent);
  };

  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+91', country: 'IN' },
    { code: '+33', country: 'FR' },
    { code: '+44', country: 'UK' },
    { code: '+49', country: 'DE' },
    { code: '+34', country: 'ES' },
    { code: '+39', country: 'IT' },
    { code: '+31', country: 'NL' },
    { code: '+32', country: 'BE' },
    { code: '+41', country: 'CH' },
    { code: '+43', country: 'AT' },
  ];

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.wrapper}>
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

          {/* Title */}
          <h1 className={styles.title}>Share a few info with us</h1>

          {/* Form */}
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name || ''}
                  onChange={onChange}
                  required
                  className={styles.input}
                  placeholder="Name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email || ''}
                  onChange={onChange}
                  required
                  className={styles.input}
                  placeholder="Email address"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="surname" className={styles.label}>
                  Surname*
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={formData.surname || ''}
                  onChange={onChange}
                  required
                  className={styles.input}
                  placeholder="Surname"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone*
                </label>
                <div className={styles.phoneInputGroup}>
                  <select
                    value={formData.country_code || '+1'}
                    onChange={(e) => handleCountryCodeChange(e.target.value)}
                    className={styles.countrySelect}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone || ''}
                    onChange={onChange}
                    required
                    className={styles.phoneInput}
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>
            {/* Navigation buttons */}
            <div className={styles.navigationContainer}>
              <button
                type="button"
                onClick={onBack}
                className={styles.backButton}
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.nextButton} ${
                  isSubmitting ? styles.nextButtonDisabled : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className={styles.spinnerIcon} />
                    Submitting...
                  </>
                ) : (
                  'Next'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Right Section - Phone mockup */}
      <div className={styles.rightSection}>
        <Image
          src="/phone-2.png"
          alt="Phone Mockup"
          className={styles.phoneImage}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default UserInfoStep;
