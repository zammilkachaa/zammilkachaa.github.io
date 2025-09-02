import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Shield, Truck, CreditCard, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                LPPOM MUI Certified Marketplace
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                Halal B2B Marketplace for Indonesian
                <span className="text-emerald-600"> MSMEs</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Connect with certified halal suppliers, access bulk purchasing, and grow your business with integrated financing options. All backed by LPPOM MUI certification standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start Bulk Ordering
              </Button>
              <Button variant="outline" size="lg">
                Apply for Financing
              </Button>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <p className="text-2xl font-medium text-gray-900">5,000+</p>
                <p className="text-sm text-gray-600">Certified Products</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium text-gray-900">1,200+</p>
                <p className="text-sm text-gray-600">MSME Partners</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium text-gray-900">95%</p>
                <p className="text-sm text-gray-600">Financing Approval</p>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710610807010-3e8074767704?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating cards */}
            <Card className="absolute top-4 right-4 p-3 bg-white shadow-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium">LPPOM MUI</span>
              </div>
            </Card>

            <Card className="absolute bottom-4 left-4 p-3 bg-white shadow-lg">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Bulk Delivery</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Features row */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 pt-16 border-t">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-medium">Halal Certified</h3>
            <p className="text-sm text-gray-600">LPPOM MUI verified suppliers and products</p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium">Bulk Orders</h3>
            <p className="text-sm text-gray-600">Wholesale pricing for MSMEs</p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-medium">Financing Options</h3>
            <p className="text-sm text-gray-600">Flexible payment terms for businesses</p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-medium">MSME Support</h3>
            <p className="text-sm text-gray-600">Dedicated support for small businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
}