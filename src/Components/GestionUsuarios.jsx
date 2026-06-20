import React from 'react';
import { Users, Shield, Trash2, Key } from 'lucide-react';

export const GestionUsuarios = () => {
  const usuarios = [
    { id: 'U01', nombre: 'Alejandro Bayri', correo: 'admin@bayri.com', rol: 'ADMINISTRADOR' },
    { id: 'U02', nombre: 'Sofía Martínez', correo: 'sofia.vendedora@bayri.com', rol: 'VENDEDOR' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 mb-6">
        <div>
          <h2 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" /> Control de Acceso y Usuarios (CU-16)
          </h2>
          <p className="text-slate-500 text-xs">Mapeo de privilegios bajo la directiva de seguridad RN-16</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Correo</th>
              <th className="p-3">Rol Asignado</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y text-slate-700">
            {usuarios.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-3 font-semibold text-slate-500">{u.id}</td>
                <td className="p-3 font-medium">{u.nombre}</td>
                <td className="p-3 text-slate-500">{u.correo}</td>
                <td className="p-3">
                  <span className={`inline-flex items-center gap-1 font-bold px-2 py-1 rounded text-[10px] ${
                    u.rol === 'ADMINISTRADOR' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}>
                    <Shield className="w-3 h-3" /> {u.rol}
                  </span>
                </td>
                <td className="p-3 flex items-center justify-center gap-3">
                  <button className="text-slate-400 hover:text-blue-600"><Key className="w-4 h-4" /></button>
                  <button className="text-slate-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};