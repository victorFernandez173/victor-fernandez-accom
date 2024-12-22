import React, { useState } from "react";

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            <div className="flex justify-end border-b border-gray-300">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 ${
                            activeTab === index
                                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-4">
                {tabs[activeTab] && <div>{tabs[activeTab].content}</div>}
            </div>
        </div>
    );
};
