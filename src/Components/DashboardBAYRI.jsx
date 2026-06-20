import React from 'react';
import { Users, Hourglass, CheckCircle, TrendingUp, Bell } from 'lucide-react';

export const DashboardBAYRI = () => {
  const metrics = { numProspectos: 48, ventasEnProceso: 19, ventasCerradas: 32, efectividadCierre: '62.7%' };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Panel de Control General</h1>
        <p className="text-slate-500 text-sm">Indicadores operativos calculados en tiempo real</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Prospectos Activos</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">{metrics.numProspectos}</h3>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-xl"><Users className="w-6 h-6" /></div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">En Negociación</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">{metrics.ventasEnProceso}</h3>
          </div>
          <div className="bg-amber-50 text-amber-600 p-3 rounded-xl"><Hourglass className="w-6 h-6" /></div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Cierres Ganados</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">{metrics.ventasCerradas}</h3>
          </div>
          <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl"><CheckCircle className="w-6 h-6" /></div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Tasa de Conversión</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">{metrics.efectividadCierre}</h3>
          </div>
          <div className="bg-purple-50 text-purple-600 p-3 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <h3 className="font-bold text-sm text-slate-700 flex items-center gap-2 mb-3">
          <Bell className="w-4 h-4 text-amber-500 animate-pulse" /> Actividades Recientes (Automatizaciones)
        </h3>
        <div className="bg-white border border-slate-150 rounded-xl divide-y text-xs">
          <div className="p-3 flex justify-between text-slate-600">
            <span>Se generó un recordatorio automático para el cliente "Carlos Mendoza"</span>
            <span className="text-slate-400">Hace 5 min</span>
          </div>
        </div>
      </div>
    </div>
  );
};