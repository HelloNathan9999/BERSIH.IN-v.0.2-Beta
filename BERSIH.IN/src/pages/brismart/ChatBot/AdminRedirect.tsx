import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = false; // ganti logic cek admin dari Supabase nanti
    if (!isAdmin) {
      alert("Anda bukan admin, dialihkan ke chatbot biasa.");
      navigate("/chatbot");
    } else {
      navigate("/admin-dashboard"); // misal halaman admin
    }
  }, [navigate]);

  return <p className="p-4">Memeriksa hak akses...</p>;
};

export default AdminRedirect;
