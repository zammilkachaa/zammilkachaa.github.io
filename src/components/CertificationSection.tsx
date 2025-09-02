import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Shield, CheckCircle, FileCheck, Award, Search, Database, Link, Lock, Layers, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const certificationFeatures = [
  {
    icon: Database,
    title: "Real-time Verification",
    description: "Instant verification of LPPOM MUI certificates through our integrated system"
  },
  {
    icon: Search,
    title: "Certificate Lookup",
    description: "Search and verify any halal certificate directly from LPPOM MUI database"
  },
  {
    icon: FileCheck,
    title: "Document Management",
    description: "Store and manage all certification documents in one secure platform"
  },
  {
    icon: Award,
    title: "Compliance Tracking",
    description: "Track certification expiry dates and renewal requirements automatically"
  }
];

const blockchainFeatures = [
  {
    icon: Link,
    title: "Immutable Certificate Records",
    description: "Halal certificates stored on blockchain ensuring tamper-proof verification and authenticity"
  },
  {
    icon: Lock,
    title: "Cryptographic Security",
    description: "End-to-end encryption and digital signatures for maximum certificate security"
  },
  {
    icon: Layers,
    title: "Supply Chain Traceability",
    description: "Track halal certification from raw materials to final products across the entire supply chain"
  },
  {
    icon: Globe,
    title: "Global Verification Network",
    description: "Access certificate verification from anywhere in the world through our blockchain network"
  }
];

const certificationProcess = [
  {
    step: "1",
    title: "Product Registration",
    description: "Register your products in our platform with basic information"
  },
  {
    step: "2", 
    title: "LPPOM MUI Application",
    description: "Apply for halal certification through our integrated LPPOM MUI portal"
  },
  {
    step: "3",
    title: "Document Submission",
    description: "Submit required documents digitally through our secure system"
  },
  {
    step: "4",
    title: "Audit & Inspection",
    description: "LPPOM MUI conducts facility audit and product inspection"
  },
  {
    step: "5",
    title: "Blockchain Registration",
    description: "Certificate data is encrypted and stored on blockchain for immutable verification"
  },
  {
    step: "6",
    title: "Certificate Issuance",
    description: "Receive blockchain-secured digital certificate with unique hash verification"
  }
];

const blockchainTechnologies = [
  {
    name: "Ethereum Blockchain",
    description: "Smart contracts for automated certificate validation",
    icon: "🔗",
    status: "Active"
  },
  {
    name: "IPFS Storage", 
    description: "Decentralized storage for certificate documents",
    icon: "🗄️",
    status: "Active"
  },
  {
    name: "Digital Signatures",
    description: "Cryptographic signatures from LPPOM MUI",
    icon: "✍️",
    status: "Active"
  },
  {
    name: "QR Code Verification",
    description: "Instant blockchain verification via QR codes",
    icon: "📱",
    status: "Active"
  }
];

export default function CertificationSection() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-emerald-600 text-white">
              <Shield className="w-3 h-3 mr-1" />
              LPPOM MUI Integration
            </Badge>
            <Badge className="bg-blue-600 text-white">
              <Link className="w-3 h-3 mr-1" />
              Blockchain Powered
            </Badge>
          </div>
          <h2 className="text-3xl font-medium text-gray-900">
            Blockchain-Secured Halal Certification
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionary integration with LPPOM MUI featuring blockchain technology for tamper-proof certificate verification, 
            complete supply chain traceability, and immutable halal compliance records
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content - Traditional Features */}
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-xl mb-6 text-gray-900">Traditional Certification Features</h3>
              <div className="space-y-6">
                {certificationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-lg">LPPOM MUI Official Partner</h4>
                    <p className="text-sm text-gray-600">Authorized integration partner since 2023</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-medium text-emerald-600">15,000+</p>
                    <p className="text-xs text-gray-600">Certificates Processed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-medium text-emerald-600">98%</p>
                    <p className="text-xs text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right content - Blockchain Features */}
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-xl mb-6 text-gray-900">Blockchain-Enhanced Security</h3>
              <div className="space-y-6">
                {blockchainFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-blue-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Link className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-lg text-blue-900">Blockchain Technology</h4>
                    <p className="text-sm text-blue-700">Powered by Ethereum & IPFS</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200">
                  <div className="text-center">
                    <p className="text-2xl font-medium text-blue-600">100%</p>
                    <p className="text-xs text-blue-700">Tamper-Proof Records</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-medium text-blue-600">24/7</p>
                    <p className="text-xs text-blue-700">Global Verification</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Blockchain Technology Showcase */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-8 rounded-2xl mb-16">
          <div className="text-center space-y-6 mb-8">
            <Badge className="bg-blue-100 text-blue-800">
              <Link className="w-3 h-3 mr-1" />
              Blockchain Infrastructure
            </Badge>
            <h3 className="text-2xl font-medium text-white">
              Cutting-Edge Technology Stack
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our blockchain-powered certification system ensures maximum security, transparency, and global accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blockchainTechnologies.map((tech, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h4 className="font-medium text-white mb-2">{tech.name}</h4>
                <p className="text-xs text-blue-100 mb-3">{tech.description}</p>
                <Badge className="bg-green-100 text-green-800 text-xs">
                  {tech.status}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Certification process */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Blockchain-Enhanced Certification Process
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our integrated platform combines traditional LPPOM MUI certification with blockchain technology 
              for unprecedented security and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certificationProcess.map((process, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < certificationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-blue-200 transform translate-x-3"></div>
                )}
                
                <Card className={`p-4 text-center bg-white hover:shadow-md transition-shadow ${
                  index === 4 || index === 5 ? 'border-blue-200 bg-blue-50' : ''
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-medium ${
                    index === 4 || index === 5 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {process.step}
                  </div>
                  <h4 className="font-medium text-sm mb-2">{process.title}</h4>
                  <p className="text-xs text-gray-600">{process.description}</p>
                  {(index === 4 || index === 5) && (
                    <Badge className="bg-blue-100 text-blue-800 text-xs mt-2">
                      Blockchain
                    </Badge>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center space-y-6 mt-16 pt-16 border-t">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-gray-900">
              Experience Next-Generation Halal Certification
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be among the first to leverage blockchain-secured LPPOM MUI certification. 
              Gain competitive advantage with tamper-proof certificates and global verification capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-medium text-emerald-900 mb-1">100% Authentic</h4>
              <p className="text-xs text-emerald-700">Blockchain-verified certificates</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-medium text-blue-900 mb-1">Global Recognition</h4>
              <p className="text-xs text-blue-700">Verifiable worldwide instantly</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <Lock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-medium text-purple-900 mb-1">Tamper-Proof</h4>
              <p className="text-xs text-purple-700">Immutable blockchain records</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link className="w-4 h-4 mr-2" />
              Start Blockchain Certification
            </Button>
            <Button variant="outline" size="lg">
              <FileCheck className="w-4 h-4 mr-2" />
              View Sample Certificate
            </Button>
            <Button variant="outline" size="lg">Download Requirements</Button>
          </div>
        </div>
      </div>
    </section>
  );
}