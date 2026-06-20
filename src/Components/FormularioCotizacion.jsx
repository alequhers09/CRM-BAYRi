import React, { useState } from 'react';
import { FileText, CheckCircle, Ban } from 'lucide-react';

export const FormularioCotizacion = ({ idOportunidad, ventaCerrada }) => {
  const [form, setForm] = useState({ vehiculo: '', precio: '', condiciones: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ventaCerrada) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ vehiculo: '', precio: '', condiciones: '' });
      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-white flex items-center gap-3">
        <FileText className="w-5 h-5" />
        <div>
          <h2 className="font-bold text-sm">Generar Cotización</h2>
          <p className="text-amber-100 text-[10px]">Oportunidad: {idOportunidad}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
        {ventaCerrada && (
          <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl flex items-start gap-2 text-[11px]">
            <Ban className="w-4 h-4 shrink-0 mt-0.5" />
            <span><strong>Bloqueado (RN-10):</strong> Oportunidad cerrada. No se permiten más cotizaciones.</span>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Vehículo</label>
            <input
              type="text" required disabled={ventaCerrada} value={form.vehiculo}
              onChange={(e) => setForm({ ...form, vehiculo: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none disabled:bg-slate-100"
              placeholder="Ej. Sedan Confort 2026"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Precio ($)</label>
            <input
              type="number" required disabled={ventaCerrada} value={form.precio}
              onChange={(e) => setForm({ ...form, precio: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none disabled:bg-slate-100"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Condiciones (RN-09)</label>
            <textarea
              rows={2} disabled={ventaCerrada} value={form.condiciones}
              onChange={(e) => setForm({ ...form, condiciones: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none disabled:bg-slate-100 resize-none"
              placeholder="Detalles comerciales..."
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit" disabled={loading || ventaCerrada}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors text-xs disabled:bg-slate-200 disabled:text-slate-400"
          >
            {loading ? 'Procesando...' : 'Generar Cotización'}
          </button>

          {success && (
            <div className="mt-2 p-2 bg-green-50 text-green-700 rounded-xl text-[11px] flex items-center gap-1.5 justify-center font-medium">
              <CheckCircle className="w-3.5 h-3.5" /> ¡Cotización guardada!
            </div>
          )}
        </div>
      </form>
    </div>
  );
};