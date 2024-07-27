import React from "react";
import { FaCheck } from "react-icons/fa";

const SlideFour = () => {
    const pricingPlans = [
        {
            name: "Basic",
            price: "$19",
            period: "/month",
            features: [
                "100 AI-generated code snippets/month",
                "5 supported programming languages",
                "Basic code optimization",
                "Email support"
            ]
        },
        {
            name: "Pro",
            price: "$49",
            period: "/month",
            features: [
                "Unlimited AI-generated code snippets",
                "All supported programming languages",
                "Advanced code optimization",
                "Priority email support",
                "API access"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            features: [
                "Everything in Pro plan",
                "Custom AI model training",
                "Dedicated account manager",
                "24/7 phone support",
                "On-premise deployment option"
            ]
        }
    ];

    return (
        <div className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-black text-center mb-16 text-gray-800">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const PricingCard = ({ plan }) => (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h3>
        <div className="text-4xl font-bold mb-4 text-indigo-600">
            {plan.price}<span className="text-xl text-gray-600">{plan.period}</span>
        </div>
        <ul className="mb-8 flex-grow">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                </li>
            ))}
        </ul>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
            Choose Plan
        </button>
    </div>
);

export default SlideFour;
