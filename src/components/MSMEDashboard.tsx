import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  ShoppingCart, 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Package, 
  FileText,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const dashboardStats = [
  {
    title: "Total Orders",
    value: "47",
    change: "+12%",
    icon: ShoppingCart,
    color: "text-blue-600"
  },
  {
    title: "Active Financing",
    value: "Rp 250M",
    change: "2 loans",
    icon: CreditCard,
    color: "text-green-600"
  },
  {
    title: "Certified Products",
    value: "23",
    change: "5 pending",
    icon: Shield,
    color: "text-emerald-600"
  },
  {
    title: "Monthly Revenue",
    value: "Rp 1.2B",
    change: "+18%",
    icon: TrendingUp,
    color: "text-purple-600"
  }
];

const recentOrders = [
  {
    id: "#ORD-2024-001",
    supplier: "PT Rempah Nusantara",
    product: "Premium Spice Mix",
    quantity: "500 kg",
    status: "Delivered",
    statusColor: "bg-green-100 text-green-800"
  },
  {
    id: "#ORD-2024-002",
    supplier: "CV Ayam Sejahtera",
    product: "Frozen Chicken",
    quantity: "1,000 kg",
    status: "In Transit",
    statusColor: "bg-blue-100 text-blue-800"
  },
  {
    id: "#ORD-2024-003",
    supplier: "PT Kelapa Berkah",
    product: "Coconut Oil",
    quantity: "200 L",
    status: "Processing",
    statusColor: "bg-yellow-100 text-yellow-800"
  }
];

const certificationStatus = [
  {
    product: "Instant Noodles",
    status: "Approved",
    certNumber: "LPPOM-001234",
    expiry: "Dec 2025",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    product: "Snack Products",
    status: "Under Review",
    certNumber: "Pending",
    expiry: "TBD",
    icon: Clock,
    color: "text-yellow-600"
  },
  {
    product: "Beverage Mix",
    status: "Action Required",
    certNumber: "Documents needed",
    expiry: "TBD",
    icon: AlertCircle,
    color: "text-red-600"
  }
];

export default function MSMEDashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-medium">MSME Dashboard</h1>
        <p className="text-gray-600">Manage your halal business operations and growth</p>
      </div>

      {/* Stats cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-medium">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent orders */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Recent Orders</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-sm">{order.product}</p>
                    <p className="text-xs text-gray-600">{order.supplier} • {order.quantity}</p>
                    <p className="text-xs text-gray-500">{order.id}</p>
                  </div>
                </div>
                <Badge className={order.statusColor}>
                  {order.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card>
          <CardHeader className="pb-4">
            <h3 className="font-medium">Quick Actions</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <ShoppingCart className="w-4 h-4 mr-2" />
              New Bulk Order
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <CreditCard className="w-4 h-4 mr-2" />
              Apply for Financing
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Shield className="w-4 h-4 mr-2" />
              Submit for Certification
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Certification status */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Halal Certification Status</h3>
            <Badge className="bg-emerald-100 text-emerald-800">
              <Shield className="w-3 h-3 mr-1" />
              LPPOM MUI
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {certificationStatus.map((cert, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <cert.icon className={`w-4 h-4 ${cert.color}`} />
                  <span className="font-medium text-sm">{cert.product}</span>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>Status: <span className={cert.color}>{cert.status}</span></p>
                  <p>Cert: {cert.certNumber}</p>
                  <p>Expiry: {cert.expiry}</p>
                </div>
                {cert.status === "Action Required" && (
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    Take Action
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financing overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-4">
            <h3 className="font-medium">Active Financing</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Business Growth Loan</span>
                <span>65% paid</span>
              </div>
              <Progress value={65} className="h-2" />
              <div className="flex justify-between text-xs text-gray-600">
                <span>Rp 150M / Rp 230M</span>
                <span>8 months remaining</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Trade Financing</span>
                <span>30% paid</span>
              </div>
              <Progress value={30} className="h-2" />
              <div className="flex justify-between text-xs text-gray-600">
                <span>Rp 6M / Rp 20M</span>
                <span>2 months remaining</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Apply for More Financing
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <h3 className="font-medium">Business Growth</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-lg font-medium text-blue-600">↗ 24%</p>
                <p className="text-xs text-gray-600">Revenue Growth</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-lg font-medium text-green-600">↗ 15%</p>
                <p className="text-xs text-gray-600">Order Volume</p>
              </div>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm font-medium mb-2">This Month Goals</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>New Products</span>
                  <span>3/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Certification</span>
                  <span>2/3</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue Target</span>
                  <span>85%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}