import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export const Autenticacion = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      setLoading(false);
      if (email.includes('admin')) {
        onLoginSuccess({ email, rol: 'ADMINISTRADOR', token: 'jwt-mock-admin-token' });
      } else if (email.includes('vendedor')) {
        onLoginSuccess({ email, rol: 'VENDEDOR', token: 'jwt-mock-vendedor-token' });
      } else {
        setError('Acceso denegado. Las credenciales no coinciden con nuestros registros activos.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,78,216,0.15),rgba(255,255,255,0))] flex items-center justify-center p-4 antialiased selection:bg-blue-500/30">
      
      {/* Contenedor de la Tarjeta con Efecto Glassmorphism */}
      <div className="relative w-full max-w-md">
        
        {/* Efecto de brillo de fondo decorativo */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="bg-[#131b2e]/70 backdrop-blur-xl w-full p-8 rounded-2xl shadow-2xl border border-slate-800/80 relative overflow-hidden">
          
          {/* Encabezado */}
          <div className="flex flex-col items-center mb-8 relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl text-white mb-4 shadow-lg shadow-blue-500/20 ring-1 ring-white/10">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              CRM BAYRI
            </h2>
            <p className="text-slate-400 text-xs mt-1.5 font-medium text-center">
              Introduce tus credenciales para acceder al panel operativo
            </p>
          </div>

          {/* Mensaje de Error Premium */}
          {error && (
            <div className="mb-5 p-3.5 bg-red-950/40 border border-red-800/60 text-red-200 text-xs rounded-xl font-medium animate-shake flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 pl-1">
                Email Corporativo
              </label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#090d16]/90 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all font-medium"
                  placeholder="usuario@bayri.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 pl-1">
                Contraseña
              </label>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#090d16]/90 border border-slate-800 rounded-xl pl-11 pr-11 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all font-medium tracking-wide"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Botón de Acción con Animaciones */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 active:scale-[0.98] transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verificando Identidad...</span>
                </>
              ) : (
                <>
                  <span>Ingresar al Sistema</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Decorativo con pistas de acceso */}
          <div className="mt-8 pt-5 border-t border-slate-800/60 text-center">
            <p className="text-[10px] text-slate-500">
              Demo de roles: usa <code className="text-slate-400 bg-slate-900 px-1 py-0.5 rounded">admin</code> o <code className="text-slate-400 bg-slate-900 px-1 py-0.5 rounded">vendedor</code> en el correo.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};