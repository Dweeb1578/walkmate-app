import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      {children}
    </div>
  );
}
