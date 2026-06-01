import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, KeyRound, ArrowLeft, Mail, Lock, User } from 'lucide-react';
import { getAllUsers } from '../lib/auth';

export default function LoginPage() {
  const [viewMode, setViewMode] = useState('login'); // 'login' | 'register' | 'forgot'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const resetMessages = () => {
    setError('');
    setSuccessMsg('');
  };

  const handleSwitchView = (mode) => {
    setViewMode(mode);
    resetMessages();
  };

  const handlePhoneMask = (value) => {
    // Remove tudo que não é número
    let v = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    if (v.length > 11) v = v.slice(0, 11);
    
    // Aplica a máscara: (99) 99999-9999
    if (v.length > 2) {
      v = `(${v.substring(0, 2)}) ${v.substring(2)}`;
    }
    if (v.length > 10) {
      v = `${v.substring(0, 10)}-${v.substring(10)}`;
    }
    
    setWhatsapp(v);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetMessages();
    
    if (viewMode === 'forgot') {
      if (!email) {
        setError('Preencha o seu e-mail para recuperar a senha.');
        return;
      }
      setLoading(true);
      setTimeout(() => {
        const users = getAllUsers();
        const foundUser = users.find(u => u.email === email);
        if (foundUser) {
          setSuccessMsg(`Simulação (Mock DB): A senha desta conta é "${foundUser.password}". Use-a para fazer o login.`);
        } else {
          setError('Nenhuma conta encontrada com este e-mail.');
        }
        setLoading(false);
      }, 800);
      return;
    }

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    if (viewMode === 'register' && (!name.trim() || !gender || !whatsapp.trim())) {
      setError('Preencha seu nome, whatsapp e selecione o sexo.');
      return;
    }

    if (viewMode === 'register') {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
      if (!passwordRegex.test(password)) {
        setError('A senha deve conter ao menos 1 letra maiúscula, 1 número e 1 caractere especial (@$!%*?&).');
        return;
      }
    }

    setLoading(true);

    try {
      if (viewMode === 'register') {
        await register(name, email, password, gender, whatsapp);
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'Ocorreu um erro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-surface-900 selection:bg-emerald-500/30">
      
      {/* 
        ========================================================================
        LADO ESQUERDO: PAINEL VISUAL (Inspirador, exibido apenas em telas médias+) 
        ========================================================================
      */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden flex-col justify-between p-12 shadow-2xl">
        {/* Background Image de uma pessoa correndo (Alta Qualidade) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2070')" }}
        />
        
        {/* Camadas de Gradiente Overlay mais leves para destacar a imagem */}
        <div className="absolute inset-0 z-10 bg-slate-900/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80" />
        <div className="absolute inset-0 z-10 mix-blend-overlay bg-emerald-500/20" />
        
        {/* Conteúdo Topo (Logo) */}
        <div className="relative z-20 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 ring-1 ring-white/20">
            <Activity size={24} className="text-white" />
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-md">
            Plano<span className="text-emerald-400">DeCorrida</span>
          </h1>
        </div>

        {/* Conteúdo Rodapé (Citação/Motivação) */}
        <div className="relative z-20 max-w-md animate-slide-up">
          <div className="w-12 h-1 bg-emerald-500 mb-6 rounded-full" />
          <h2 className="font-display text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Transforme suor em resultados.
          </h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            Gere cronogramas de treinamento adaptativos e inteligentes para alcançar o seu recorde pessoal. Dos 5K à Maratona, nós guiamos cada passo.
          </p>
        </div>
      </div>

      {/* 
        ========================================================================
        LADO DIREITO: FORMULÁRIO DE LOGIN
        ========================================================================
      */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24 relative overflow-hidden">
        {/* Efeito de luz sutil no fundo */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10 animate-fade-in">
          
          {/* Header Mobile (exibido apenas quando o painel visual está escondido) */}
          <div className="lg:hidden flex flex-col items-center gap-3 mb-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Activity size={32} className="text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-slate-100">
                Plano<span className="text-emerald-400">DeCorrida</span>
              </h1>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-slate-100 mb-2">
              {viewMode === 'register' ? 'Criar Conta' : viewMode === 'forgot' ? 'Recuperar Senha' : 'Bem-vindo de volta'}
            </h2>
            <p className="text-slate-400 text-sm">
              {viewMode === 'forgot' ? 'Enviaremos instruções para o seu e-mail.' : 'Insira seus dados para continuar.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Campo Nome (Apenas Registro) */}
            {viewMode === 'register' && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800/40 border border-white/5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-800/80 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-inner"
                />
              </div>
            )}

            {/* Sexo (Apenas Registro) */}
            {viewMode === 'register' && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <label className={`cursor-pointer rounded-xl border flex items-center justify-center py-3 font-semibold transition-all ${gender === 'M' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-white/5 bg-slate-800/40 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'}`}>
                  <input type="radio" name="gender" value="M" className="hidden" onChange={(e) => setGender(e.target.value)} />
                  👨 Masculino
                </label>
                <label className={`cursor-pointer rounded-xl border flex items-center justify-center py-3 font-semibold transition-all ${gender === 'F' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-white/5 bg-slate-800/40 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'}`}>
                  <input type="radio" name="gender" value="F" className="hidden" onChange={(e) => setGender(e.target.value)} />
                  👩 Feminino
                </label>
              </div>
            )}
            
            {/* Campo WhatsApp (Apenas Registro) */}
            {viewMode === 'register' && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-slate-500 group-focus-within:text-emerald-400 transition-colors">📱</span>
                </div>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => handlePhoneMask(e.target.value)}
                  placeholder="WhatsApp (ex: (11) 99999-9999)"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800/40 border border-white/5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-800/80 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-inner"
                />
              </div>
            )}
            
            {/* Campo E-mail */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                list="email-options"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800/40 border border-white/5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-800/80 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-inner"
              />
              {email.includes('@') && (
                <datalist id="email-options">
                  <option value={`${email.split('@')[0]}@gmail.com`} />
                  <option value={`${email.split('@')[0]}@outlook.com`} />
                  <option value={`${email.split('@')[0]}@hotmail.com`} />
                  <option value={`${email.split('@')[0]}@icloud.com`} />
                  <option value={`${email.split('@')[0]}@yahoo.com`} />
                </datalist>
              )}
            </div>

            {/* Campo Senha */}
            {viewMode !== 'forgot' && (
              <div>
                <div className="relative group mb-2">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800/40 border border-white/5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-800/80 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-inner"
                  />
                </div>
                
                {viewMode === 'login' && (
                  <div className="flex justify-end">
                    <button 
                      type="button"
                      onClick={() => handleSwitchView('forgot')}
                      className="text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:underline underline-offset-4 transition-all"
                    >
                      Esqueceu a senha?
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mensagens de Erro/Sucesso */}
            {error && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-start gap-3 animate-scale-in">
                <span className="text-rose-500 mt-0.5">⚠️</span>
                <span className="text-rose-400 text-sm font-medium">{error}</span>
              </div>
            )}
            
            {successMsg && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3 animate-scale-in">
                <span className="text-emerald-500 mt-0.5">✅</span>
                <span className="text-emerald-400 text-sm font-medium">{successMsg}</span>
              </div>
            )}

            {/* Botão de Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 mt-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : viewMode === 'register' ? (
                <>
                  Criar Conta
                  <ArrowLeft size={20} className="rotate-180" />
                </>
              ) : viewMode === 'forgot' ? (
                <>
                  Recuperar Senha
                  <KeyRound size={20} />
                </>
              ) : (
                <>
                  Entrar na Conta
                  <ArrowLeft size={20} className="rotate-180" />
                </>
              )}
            </button>
          </form>

          {/* Troca de Modos (Rodapé do formulário) */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            {viewMode === 'forgot' ? (
              <button
                onClick={() => handleSwitchView('login')}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft size={16} />
                Voltar para o Login
              </button>
            ) : (
              <p className="text-slate-400 text-sm">
                {viewMode === 'register' ? 'Já possui uma conta?' : 'Ainda não tem uma conta?'}
                <button
                  onClick={() => handleSwitchView(viewMode === 'register' ? 'login' : 'register')}
                  className="ml-2 font-bold text-emerald-400 hover:text-emerald-300 hover:underline underline-offset-4 transition-all"
                >
                  {viewMode === 'register' ? 'Fazer login' : 'Criar conta agora'}
                </button>
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
