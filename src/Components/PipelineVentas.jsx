import React, { useState } from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const ETAPAS = ['PROSPECTO', 'CONTACTO_INICIAL', 'COTIZACION', 'NEGOCIACION', 'CIERRE_GANADO', 'CIERRE_PERDIDO'];

export const PipelineVentas = () => {
  const [oportunidades, setOportunidades] = useState([
    { idOportunidad: '1', cliente: 'Carlos Mendoza', vehiculo: 'SUV Familiar X', precio: 32000, etapaActual: 'PROSPECTO' },
    { idOportunidad: '2', cliente: 'Ana Gómez', vehiculo: 'Sedán Ejecutivo', precio: 27500, etapaActual: 'COTIZACION' },
  ]);
  const [error, setError] = useState(null);

  const validarTransicion = (actual, nueva) => {
    if (nueva === 'CIERRE_PERDIDO') return true;
    const idxActual = ETAPAS.indexOf(actual);
    const idxNueva = ETAPAS.indexOf(nueva);
    return idxNueva === idxActual + 1 || (actual === 'NEGOCIACION' && nueva === 'CIERRE_GANADO');
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e, nuevaEtapa) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const op = oportunidades.find((o) => o.idOportunidad === id);

    if (!op) return;

    if (!validarTransicion(op.etapaActual, nuevaEtapa)) {
      setError(`Transición inválida de ${op.etapaActual} a ${nuevaEtapa} (Restricción RN-05)`);
      setTimeout(() => setError(null), 4000);
      return;
    }

    setOportunidades(prev =>
      prev.map((o) => (o.idOportunidad === id ? { ...o, etapaActual: nuevaEtapa } : o))
    );
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <header className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Pipeline de Oportunidades</h2>
        <p className="text-slate-500 text-xs">Arrastra y suelta las tarjetas para actualizar las etapas del cliente</p>
      </header>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-2 rounded text-xs font-medium">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
        {ETAPAS.map((etapa) => (
          <div
            key={etapa}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, etapa)}
            className="bg-slate-50 rounded-xl p-3 min-w-[160px] flex flex-col min-h-[350px] border border-slate-200/60"
          >
            <h3 className="text-[10px] font-bold tracking-wider text-slate-500 mb-3 uppercase flex items-center justify-between">
              {etapa.replace('_', ' ')}
              <span className="bg-slate-200 text-slate-700 text-[10px] px-1.5 py-0.5 rounded-full">
                {oportunidades.filter((o) => o.etapaActual === etapa).length}
              </span>
            </h3>

            <div className="space-y-3 flex-1">
              {oportunidades
                .filter((o) => o.etapaActual === etapa)
                .map((op) => (
                  <div
                    key={op.idOportunidad} draggable onDragStart={(e) => handleDragStart(e, op.idOportunidad)}
                    className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 cursor-grab active:cursor-grabbing hover:shadow-md transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    <p className="font-bold text-slate-800 text-xs">{op.cliente}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{op.vehiculo}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-700">
                        ${op.precio.toLocaleString()}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};