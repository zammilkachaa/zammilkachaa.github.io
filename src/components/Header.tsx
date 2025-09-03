import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Search, Menu, ShoppingCart, User, Bell } from "lucide-react";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Top bar with LPPOM MUI certification notice */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              LPPOM MUI
            </Badge>
            <span className="text-sm">Certified Halal Products - Trusted by Indonesian MSMEs</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-medium text-sm">H</span>
              </div>
              <div>
                <h1 className="font-medium text-lg">HalalMarket</h1>
                <p className="text-xs text-muted-foreground">B2B Marketplace</p>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search halal products, suppliers, or certifications..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Bulk Quote
            </Button>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-red-500">
                3
              </Badge>
            </Button>
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                5
              </Badge>
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button className="md:hidden" variant="outline" size="sm">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="border-t py-3">
          <nav className="flex gap-6">
            <a href="#" className="text-sm font-medium text-emerald-600 border-b-2 border-emerald-600 pb-2">
              Products
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Halal-Blockchain
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Financing
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Innovation Hub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}