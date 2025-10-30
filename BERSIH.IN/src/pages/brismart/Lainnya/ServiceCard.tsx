import React from "react";
import { useNavigate } from "react-router-dom";

export function ServiceCard({ service }: { service: { id: number; name: string; icon: string } }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/brismart/lainnya/detail/${service.id}`)}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
    >
      <span className="text-3xl">{service.icon}</span>
      <p className="text-sm mt-2">{service.name}</p>
    </button>
  );
}
