import { Activity, Droplets, AlertCircle, ShieldAlert } from 'lucide-react';

export default function WomensHealthTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero / Intro */}
      <div className="glass-card p-6 border-l-4 border-pink-500">
        <h2 className="font-display text-2xl font-bold text-slate-100 mb-2 flex items-center gap-2">
          <Activity className="text-pink-400" />
          Fisiologia da Corredora
        </h2>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          A ciência moderna do esporte mostra que mulheres não são "homens pequenos". O seu ciclo hormonal afeta drasticamente a forma como você absorve impacto, suporta intensidades e armazena energia. Use este guia para treinar de forma inteligente e segura.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ciclo Menstrual */}
        <div className="glass-card p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
              <Droplets className="text-rose-400" size={20} />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100">Ciclo e Treinamento</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold text-rose-400 text-sm uppercase tracking-wider mb-1">1. Fase Folicular (Dias 1-14)</h4>
              <p className="text-sm text-slate-300">
                O estrogênio sobe. Seu corpo absorve melhor os carboidratos e a tolerância à dor é maior. <strong>É a melhor fase para treinos pesados:</strong> Tiros intervalados (VO2 Max) e aumento de carga na musculação.
              </p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5">
              <h4 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-1">2. Fase Lútea (Dias 15-28)</h4>
              <p className="text-sm text-slate-300">
                A progesterona domina. A temperatura do corpo aumenta e você queima mais gordura. A percepção de esforço sobe. <strong>Ideal para:</strong> Corridas de rodagem leve, longões em ritmo lento e recuperação ativa se houver TPM forte.
              </p>
            </div>
          </div>
        </div>

        {/* Prevenção de Lesões */}
        <div className="glass-card p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <ShieldAlert className="text-emerald-400" size={20} />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100">Alerta de Lesões (Joelho)</h3>
          </div>
          <p className="text-sm text-slate-300">
            Devido ao formato da pelve (Ângulo Q mais largo) e flutuações de frouxidão ligamentar causadas pelo estrogênio próximo à ovulação, corredoras têm estatisticamente maior chance de lesão no Ligamento Cruzado Anterior (LCA) e Síndrome da Banda Iliotibial.
          </p>
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl mt-auto">
            <span className="block text-emerald-400 font-bold mb-1">O que fazer?</span>
            <p className="text-sm text-emerald-200/80">
              Nunca pule os dias de treino de Força do plano! Foque totalmente em exercícios unilaterais, ponte pélvica e fortalecimento de <strong>Glúteo Médio</strong> para estabilizar o joelho durante a aterrissagem da passada.
            </p>
          </div>
        </div>

        {/* RED-S */}
        <div className="glass-card p-6 md:col-span-2 border border-amber-500/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
              <AlertCircle className="text-amber-400" size={32} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-100 mb-2">A Tríade da Mulher Atleta (RED-S)</h3>
              <p className="text-sm text-slate-300 mb-3">
                A <em>Deficiência Relativa de Energia no Esporte</em> ocorre quando você gasta mais calorias correndo do que consome. Diferente dos homens, o primeiro sintoma na mulher é a <strong>perda da menstruação (Amenorreia)</strong>.
              </p>
              <p className="text-sm text-slate-400 bg-black/20 p-3 rounded-lg border border-white/5">
                Perder o ciclo menstrual por causa do treino <strong>NÃO é normal</strong> e não é sinal de foco. Isso reduz severamente a densidade óssea, levando quase sempre a <strong>fraturas por estresse</strong> na canela ou quadril. Se seu ciclo parar, aumente a comida e busque um médico do esporte!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
