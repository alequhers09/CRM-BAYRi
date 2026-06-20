import React, { useState } from 'react';
import { UserPlus, User, Mail, Phone, Tag, CheckCircle } from 'lucide-react';

export const RegistroCliente = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipo, setTipo] = useState('PARTICULAR');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const correosExistentes = ['test@test.com', 'juan@gmail.com'];

  const handleRegistro = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (correosExistentes.includes(correo.toLowerCase())) {
      setError('Error de duplicidad (RN-02): El correo electrónico ya se encuentra registrado.');
      return;
    }

    setSuccess(true);
    setNombre('');
    setCorreo('');
    setTelefono('');
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
        <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
          <UserPlus className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-bold text-slate-800 text-lg">Registrar Cliente / Prospecto</h2>
          <p className="text-slate-500 text-xs">Aplica validación inmediata de datos generales de contacto</p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3.5 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs rounded font-medium">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3.5 bg-green-50 border-l-4 border-green-500 text-green-700 text-xs rounded font-medium flex items-center gap-2">
          <CheckCircle className="w-4 h-4" /> ¡Cliente registrado con éxito!
        </div>
      )}

      <form onSubmit={handleRegistro} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Juan Pérez"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Tipo de Cliente</label>
            <div className="relative">
              <Tag className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <select
                value={tipo} onChange={(e) => setTipo(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
              >
                <option value="PARTICULAR">Particular</option>
                <option value="EMPRESA">Empresa / Flotilla</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="email" required value={correo} onChange={(e) => setCorreo(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="juan@correo.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="tel" required value={telefono} onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="+52 55 1234 5678"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm text-sm transition-colors mt-2"
        >
          Guardar Prospecto
        </button>
      </form>
    </div>
  );
};