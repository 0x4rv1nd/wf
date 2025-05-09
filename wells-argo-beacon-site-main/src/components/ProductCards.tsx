import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, PiggyBank, BarChartBig } from "lucide-react";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      title: "Checking Accounts",
      description: "Everyday banking with features that fit your needs.",
      icon: <Wallet className="h-10 w-10 text-wells-red" />,
      link: "#",
    },
    {
      id: 2,
      title: "Credit Cards",
      description: "Earn rewards and cash back on everyday purchases.",
      icon: <CreditCard className="h-10 w-10 text-wells-red" />,
      link: "#",
    },
    {
      id: 3,
      title: "Savings Accounts",
      description: "Build your savings with competitive interest rates.",
      icon: <PiggyBank className="h-10 w-10 text-wells-red" />,
      link: "#",
    },
    {
      id: 4,
      title: "Investments",
      description: "Plan for the future with our investment services.",
      icon: <BarChartBig className="h-10 w-10 text-wells-red" />,
      link: "#",
    },
  ];

  return (
    <div className="bg-wells-gray py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Products and Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-t-4 border-t-wells-red hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{product.icon}</div>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" className="text-wells-navy hover:text-wells-red p-0">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
