import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  CreditCard,
  Clock,
  CheckCircle,
  Calculator,
  FileText,
  Banknote,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const financingOptions = [
  {
    name: "Murabaha Financing",
    duration: "7-30 days",
    rate: "2.5% margin",
    amount: "Up to Rp 500M",
    processing: "24 hours",
    features: ["No riba", "Digital process", "Quick approval"],
    icon: Clock,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Musharakah Business Financing",
    duration: "3-24 months",
    rate: "1.8% margin",
    amount: "Up to Rp 2B",
    processing: "3-5 days",
    features: [
      "Profit sharing",
      "Flexible terms",
      "Syariah advisor",
    ],
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Mudharabah Trade Financing",
    duration: "30-90 days",
    rate: "1.5% margin",
    amount: "Up to Rp 5B",
    processing: "5-7 days",
    features: [
      "Import/Export",
      "Wakala",
      "Supply chain finance",
    ],
    icon: Banknote,
    color: "bg-purple-100 text-purple-600",
  },
];

// Exclusive partnership with Maybank Syariah Indonesia

export default function FinancingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-purple-100 text-purple-800 border-purple-200">
              Exclusive Partnership
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
              Maybank Syariah Indonesia
            </Badge>
          </div>
          <h2 className="text-3xl font-medium text-gray-900">
            100% Shariah-Compliant Financing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exclusive partnership with Maybank Syariah Indonesia
            - Indonesia's leading Islamic bank providing halal
            financing for MSMEs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content - Financing options */}
          <div className="space-y-6">
            {financingOptions.map((option, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${option.color}`}
                    >
                      <option.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">
                        {option.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {option.duration} • {option.rate}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">
                        Loan Amount
                      </p>
                      <p className="font-medium">
                        {option.amount}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Processing Time
                      </p>
                      <p className="font-medium">
                        {option.processing}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right content - Application process */}
          <div className="space-y-8">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaWFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1Njc1MDIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business partnership handshake"
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="p-6">
              <h3 className="font-medium text-lg mb-4">
                Simple Application Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    1
                  </div>
                  <div>
                    <p className="font-medium">
                      Submit Application
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete our online form with business
                      details
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    2
                  </div>
                  <div>
                    <p className="font-medium">
                      Document Verification
                    </p>
                    <p className="text-sm text-gray-600">
                      Upload required business documents
                      digitally
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    3
                  </div>
                  <div>
                    <p className="font-medium">
                      Quick Approval
                    </p>
                    <p className="text-sm text-gray-600">
                      Get approved in 24-72 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    4
                  </div>
                  <div>
                    <p className="font-medium">
                      Fund Disbursement
                    </p>
                    <p className="text-sm text-gray-600">
                      Receive funds directly to your account
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tools and calculator section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium mb-2">
              Loan Calculator
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Calculate monthly payments and total interest
            </p>
            <Button variant="outline" size="sm">
              Calculate Now
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-medium mb-2">
              Pre-Qualification
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Check eligibility without credit impact
            </p>
            <Button variant="outline" size="sm">
              Check Now
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-medium mb-2">Apply Online</h3>
            <p className="text-sm text-gray-600 mb-4">
              Complete application in 10 minutes
            </p>
            <Button size="sm">Apply Now</Button>
          </Card>
        </div>

        {/* Exclusive Maybank Syariah Partnership */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl">
          <div className="text-center space-y-6">
            <h3 className="font-medium text-xl text-yellow-900">
              Exclusive Financing Partner
            </h3>

            {/* Maybank Syariah Logo and Branding */}
            <div className="flex flex-col items-center space-y-0">
              <div className="w-32 h-20 bg-yellow-400 rounded-lg p-0 shadow-sm border border-yellow-500">
                <ImageWithFallback
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1IWxcuMN9vBKlSIxZda80thbbJyeQ-S61eOKcTqm4sWCFAaPoXJhT_-N_ueAjI9lTu6FEbmdCpZr7y1bfd8wcUxDDMkoyKwdUBGVL2fMlgZhnLJK9iUevKE2MpRXoSM3ychEBF-id3irXmjVc0WsEhr4UzmS19ZKHeBL2hrACGU9U_YbWvx1xNgyg3dk/s947/logo%20maybank%20syariah.jpg"
                  alt="Maybank Syariah Indonesia Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg text-yellow-900">
                  Maybank Syariah Indonesia
                </h4>
                <p className="text-yellow-700">
                  Your Trusted Islamic Banking Partner
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="font-medium text-yellow-900">
                  100% Shariah Compliant
                </p>
                <p className="text-sm text-yellow-700">
                  Certified by Dewan Pengawas Syariah
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="font-medium text-yellow-900">
                  Trusted Since 2010
                </p>
                <p className="text-sm text-yellow-700">
                  Leading Islamic bank in Indonesia
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="font-medium text-yellow-900">
                  MSME Focused
                </p>
                <p className="text-sm text-yellow-700">
                  Specialized financing for small businesses
                </p>
              </div>
            </div>

            <p className="text-sm text-yellow-800 max-w-2xl mx-auto">
              All financing products are certified 100%
              Shariah-compliant by Maybank Syariah's Dewan
              Pengawas Syariah and approved by Bank Indonesia as
              halal financing solutions for Indonesian MSMEs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}