'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ArrowLeft,
  ChevronRight,
  Loader2,
  Mail,
  Phone,
  User,
} from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 border-l-4 border-b-4 border-black transform rotate-45 origin-bottom-left"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {formData.wants_beta
              ? 'Welcome to LineUp Beta!'
              : 'Stay Connected with LineUp'}
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            {formData.wants_beta
              ? 'Tell us about yourself to get started with exclusive beta access.'
              : "We'll keep you informed about LineUp's progress and launch updates."}
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-white flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    First Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="surname"
                    className="text-white flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Last Name
                  </Label>
                  <Input
                    id="surname"
                    name="surname"
                    type="text"
                    value={formData.surname}
                    onChange={onChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-white flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-white flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={formData.country_code}
                    onValueChange={handleCountryCodeChange}
                  >
                    <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.code} {country.country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={onChange}
                    required
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      {formData.wants_beta ? 'Join Beta' : 'Keep Me Updated'}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Your information is secure and will only be used to contact you
            about LineUp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoStep;
