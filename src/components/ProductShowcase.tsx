import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Shield, Star, Truck, MapPin, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Indonesian Spices Mix",
    supplier: "PT Rempah Nusantara",
    location: "Jakarta, Indonesia",
    rating: 4.8,
    reviews: 124,
    minOrder: "500 kg",
    price: "Rp 85,000",
    unit: "per kg",
    halalCert: "LPPOM MUI 12345678",
    certExpiry: "Dec 2025",
    image: "https://images.unsplash.com/photo-1663325265966-0d17de3e85c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwc3BpY2VzJTIwbWFya2V0fGVufDF8fHx8MTc1Njc4NjM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Organic", "Export Quality", "Bulk Available"]
  },
  {
    id: 2,
    name: "Halal Frozen Chicken Products",
    supplier: "CV Ayam Sejahtera",
    location: "Bogor, Indonesia",
    rating: 4.9,
    reviews: 89,
    minOrder: "1,000 kg",
    price: "Rp 32,000",
    unit: "per kg",
    halalCert: "LPPOM MUI 87654321",
    certExpiry: "Nov 2025",
    image: "https://images.unsplash.com/photo-1608698504320-308652618d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxhbCUyMGZvb2QlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY2OTkwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Fresh", "Grade A", "Fast Delivery"]
  },
  {
    id: 3,
    name: "Coconut Oil & Derivatives",
    supplier: "PT Kelapa Berkah",
    location: "Medan, Indonesia",
    rating: 4.7,
    reviews: 156,
    minOrder: "200 L",
    price: "Rp 15,000",
    unit: "per liter",
    halalCert: "LPPOM MUI 45678912",
    certExpiry: "Jan 2026",
    image: "https://images.unsplash.com/photo-1608698504320-308652618d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxhbCUyMGZvb2QlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTY2OTkwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Virgin", "Cold Pressed", "Sustainable"]
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
            Featured Products
          </Badge>
          <h2 className="text-3xl font-medium text-gray-900">
            Certified Halal Products for Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our curated selection of LPPOM MUI certified products from trusted Indonesian suppliers
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Halal certification badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-emerald-600 text-white">
                    <Shield className="w-3 h-3 mr-1" />
                    Halal
                  </Badge>
                </div>
                {/* Tags */}
                <div className="absolute top-3 right-3 space-y-1">
                  {product.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/90 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-4 space-y-4">
                {/* Product info */}
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{product.supplier}</span>
                    <span>•</span>
                    <span>{product.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Pricing and order info */}
                <div className="space-y-2 pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{product.price}</span>
                    <span className="text-sm text-gray-600">{product.unit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="w-4 h-4" />
                    <span>Min order: {product.minOrder}</span>
                  </div>
                </div>

                {/* Certification info */}
                <div className="bg-emerald-50 p-3 rounded-lg space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-800">LPPOM MUI Certified</span>
                  </div>
                  <p className="text-xs text-emerald-700">
                    Cert: {product.halalCert} • Valid until {product.certExpiry}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            Browse All Products
          </Button>
        </div>
      </div>
    </section>
  );
}