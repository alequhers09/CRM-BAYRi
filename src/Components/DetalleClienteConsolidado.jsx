import React from 'react';
import { MessageSquare, FileText, History, Calendar } from 'lucide-react';

export const DetalleClienteConsolidado = () => {
  const cliente = { id: 'C-99', nombre: 'Ricardo Quevedo', correo: 'ricardo@mail.com', estadoVenta: 'COTIZACION' };
  const interacciones = [{ id: 'I1', fecha: '2026-06-15', tipo: 'CONTACTO_INICIAL', descripcion: 'Llamada inicial: interesado en el vehículo sedán.' }];
  const documentos = [{ id: 'D1', nombre: 'Identificacion_Oficial.pdf', formato: 'PDF', fecha: '2026-06-16' }];
  const historialEstados = [
    { id: 'H1', anterior: 'PROSPECTO', nuevo: 'CONTACTO_INICIAL', fecha: '2026-06-15' },
    { id: 'H2', anterior: 'CONTACTO_INICIAL', nuevo: 'COTIZACION', fecha: '2026-06-16' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 p-3 rounded-full text-slate-700 font-bold text-xl w-14 h-14 flex items-center justify-center">RQ</div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">{cliente.nombre}</h2>
            <p className="text-slate-500 text-xs">ID: {cliente.id} • {cliente.correo}</p>
          </div>
        </div>
        <span className="bg-amber-100 text-amber-800 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
          Etapa: {cliente.estadoVenta}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-800 flex items-center gap-2 border-b pb-2">
            <MessageSquare className="w-4 h-4 text-purple-500" /> Interacciones
          </h3>
          <div className="space-y-3">
            {interacciones.map(i => (
              <div key={i.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-purple-600 uppercase">{i.tipo}</span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> {i.fecha}</span>
                </div>
                <p className="text-xs text-slate-600">{i.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-800 flex items-center gap-2 border-b pb-2">
            <FileText className="w-4 h-4 text-pink-500" /> Gestión Documental
          </h3>
          <div className="space-y-2">
            {documentos.map(d => (
              <div key={d.id} className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl flex items-center justify-between border border-slate-100 transition-colors cursor-pointer">
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-xs text-slate-700 truncate font-medium">{d.nombre}</span>
                </div>
                <span className="bg-white border text-[10px] font-bold text-slate-500 px-1.5 py-0.5 rounded">{d.formato}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-800 flex items-center gap-2 border-b pb-2">
            <History className="w-4 h-4 text-emerald-500" /> Auditoría de Estados
          </h3>
          <div className="relative border-l-2 border-slate-100 ml-2 pl-4 space-y-4">
            {historialEstados.map(h => (
              <div key={h.id} className="relative text-xs">
                <div className="absolute -left-[21px] top-1 bg-emerald-500 w-2 h-2 rounded-full ring-4 ring-white" />
                <p className="text-slate-400 text-[10px]">{h.fecha}</p>
                <p className="text-slate-700 mt-0.5 font-medium">
                  Avanzó de <span className="text-slate-500 font-semibold">{h.anterior}</span> a <span className="text-emerald-600 font-semibold">{h.nuevo}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};