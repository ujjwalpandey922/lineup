'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, Smartphone } from 'lucide-react';

const ThankYouStep = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 border-l-4 border-b-4 border-black transform rotate-45 origin-bottom-left"></div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Thanks.
              </h1>

              <p className="text-xl text-gray-300 max-w-md">
                We'll keep you updated on the release date and key details about
                LineUp.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>You're on the list!</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Expect updates soon</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Be the first to know</span>
              </div>
            </div>

            <Button
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
              onClick={() => (window.location.href = '/')}
            >
              Finish
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-[520px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="relative w-full h-full">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                      <span className="font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-4 py-2 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 border-l-2 border-b-2 border-black transform rotate-45 origin-bottom-left"></div>
                        </div>
                        <span className="text-lg font-semibold">LineUp</span>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium">
                              Tech Conference 2024
                            </span>
                          </div>
                          <div className="text-xs text-gray-400">
                            Managing 500+ attendees
                          </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium">
                              Music Festival
                            </span>
                          </div>
                          <div className="text-xs text-gray-400">
                            3 days • 2000 participants
                          </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">
                              Workshop Series
                            </span>
                          </div>
                          <div className="text-xs text-gray-400">
                            Weekly sessions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouStep;
