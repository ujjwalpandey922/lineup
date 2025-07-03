'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const BetaChoiceStep = ({ wantsBeta, onBetaChoice, onBack }) => {
  const [selectedValue, setSelectedValue] = useState(
    wantsBeta === true ? 'yes' : wantsBeta === false ? 'no' : ''
  );

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
    <div className="min-h-screen bg-black text-white flex">
      {/* Left section */}
      <div className="w-3/5 flex flex-col justify-center px-16">
        <div className="max-w-md mx-auto space-y-12">
          {/* Logo */}
          <div>
            <Image src="/logo.png" alt="LineUp Logo" width={64} height={64} />
          </div>

          {/* Question */}
          <h1 className="text-2xl font-semibold">
            Want to be part of our beta test?
          </h1>

          {/* Radio Buttons */}
          <RadioGroup
            value={selectedValue}
            onValueChange={handleValueChange}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 cursor-pointer">
              <RadioGroupItem
                value="yes"
                id="yes"
                className="border-white data-[state=checked]:bg-white data-[state=checked]:border-white"
              />
              <Label
                htmlFor="yes"
                className="text-base font-normal text-white cursor-pointer"
              >
                Yes
              </Label>
            </div>

            <div className="flex items-center space-x-3 cursor-pointer">
              <RadioGroupItem
                value="no"
                id="no"
                className="border-white data-[state=checked]:bg-white data-[state=checked]:border-white"
              />
              <Label
                htmlFor="no"
                className="text-base font-normal text-white cursor-pointer"
              >
                No
              </Label>
            </div>
          </RadioGroup>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center pt-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="px-6 py-2 border-white text-white rounded-md hover:bg-white/10"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!selectedValue}
              className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 font-semibold"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right side - Phone mockup */}
      <div className="w-2/5 relative">
        <Image
          src="/phone.png"
          alt="Phone mockup"
          className="h-full w-full object-cover"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default BetaChoiceStep;
