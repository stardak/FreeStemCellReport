import { useState } from "react";
import { User, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactCaptureProps {
  onSubmit: (contactData: { userName: string; userEmail: string; emailConsent: boolean }) => void;
  onBack: () => void;
}

export function ContactCapture({ onSubmit, onBack }: ContactCaptureProps) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; consent?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; consent?: string } = {};
    
    if (!userName.trim()) {
      newErrors.name = "Please enter your name";
    }
    
    if (!userEmail.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!emailConsent) {
      newErrors.consent = "Please confirm you'd like to receive your report";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ userName: userName.trim(), userEmail: userEmail.trim(), emailConsent });
    }
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <div 
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-6 cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => onSubmit({ userName: "Test User", userEmail: "test@example.com", emailConsent: true })}
          title="Skip for testing"
        >
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-title-medium text-gray-900 mb-4">
          Let's us know where you'd like us to send your free report
        </h2>
        <p className="text-lg text-neutral-600">
          Your personalized stem cell report is ready! We just need your contact information to deliver it to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="space-y-4">
          <div className="text-left">
            <label htmlFor="user-name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="user-name"
                data-testid="input-user-name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
                className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="text-left">
            <label htmlFor="user-email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="user-email"
                data-testid="input-user-email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="flex items-start space-x-3 text-left bg-blue-50 p-4 rounded-lg border border-blue-200">
            <Checkbox
              id="email-consent"
              data-testid="checkbox-email-consent"
              checked={emailConsent}
              onCheckedChange={(checked) => setEmailConsent(!!checked)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="email-consent" className="text-sm text-gray-700 cursor-pointer">
                <span className="font-semibold">Yes, I'd like to receive my free report</span> and occasional educational content about stem cell therapy.
                <span className="text-gray-500 block mt-1 text-xs">
                  We respect your privacy and will never share your information with third parties. You can unsubscribe at any time.
                </span>
              </label>
            </div>
          </div>
          {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            data-testid="button-back"
            className="px-8"
          >
            Back
          </Button>
          
          <Button
            type="submit"
            data-testid="button-get-report"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Get My Free Report
          </Button>
        </div>
      </form>
    </div>
  );
}