import React, { useState, useRef } from 'react';
import { UploadCloud, File, X, Check, AlertCircle } from 'lucide-react';

export const CargaDocumentos = ({ idCliente }) => {
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(null);
  const [subiendo, setSubiendo] = useState(false);
  const [completado, setCompletado] = useState(false);
  const fileInputRef = useRef(null);

  const validarArchivo = (file) => {
    const formatosPermitidos = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!formatosPermitidos.includes(file.type)) {
      setError('Formato inválido (RN-12). Solo se admite PDF, PNG o JPG.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const seleccionado = e.target.files[0];
      if (validarArchivo(seleccionado)) setArchivo(seleccionado);
    }
  };

  const ejecutarCarga = () => {
    if (!archivo) return;
    setSubiendo(true);

    setTimeout(() => {
      setSubiendo(false);
      setCompletado(true);
      setArchivo(null);
      setTimeout(() => setCompletado(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-800 text-sm mb-0.5">Expediente Digital</h3>
        <p className="text-[10px] text-slate-400 mb-4">Vincular archivos al ID Cliente: {idCliente}</p>

        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-200 hover:border-blue-500 rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50 hover:bg-blue-50/20 group"
        >
          <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
          <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors mb-1.5" />
          <p className="text-xs font-semibold text-slate-700">Subir Documentación</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Formatos PDF, PNG o JPG</p>
        </div>

        {error && (
          <div className="mt-2.5 p-2 bg-red-50 text-red-700 rounded-xl text-[10px] flex items-center gap-1.5 border border-red-100 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {archivo && (
          <div className="mt-3 p-2 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
              <File className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="text-[11px] font-medium text-slate-700 truncate">{archivo.name}</span>
            </div>
            <button onClick={() => setArchivo(null)} className="text-slate-400 hover:text-slate-600">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      <div className="pt-4">
        {archivo && !error && (
          <button
            onClick={ejecutarCarga} disabled={subiendo}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded-xl transition-colors shadow-sm"
          >
            {subiendo ? 'Almacenando metadatos...' : 'Subir al Repositorio'}
          </button>
        )}

        {completado && (
          <div className="p-2 bg-green-50 text-green-700 rounded-xl text-[11px] flex items-center justify-center gap-1.5 font-medium">
            <Check className="w-3.5 h-3.5" /> ¡Documento anexado correctamente!
          </div>
        )}
      </div>
    </div>
  );
};