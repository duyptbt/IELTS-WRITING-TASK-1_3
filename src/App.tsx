import { useState, useEffect, useRef } from "react";
import { STRATEGY, USEFUL_PHRASES, TASKS } from "./constants";
import { renderVisual } from "./components/Charts";

// ─── STRATEGY GUIDE COMPONENT ─────────────────────────────────────────────────

function StrategyGuide({ setPage }: { setPage: (p: string) => void }) {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [phraseTab, setPhraseTab] = useState("introduction");

  const phraseTabs = [
    { id: "introduction", label: "Introduction" },
    { id: "overview", label: "Overview" },
    { id: "crossVisual", label: "Linking Charts" },
    { id: "upward", label: "↑ Upward" },
    { id: "downward", label: "↓ Downward" },
    { id: "adverbs", label: "Adverbs" },
    { id: "shapes", label: "Shapes" },
  ];

  return (
    <div>
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Strategy Guide</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          A step-by-step approach to tackling IELTS Writing Task 1 with combined charts. Click each step to expand it.
        </p>
      </div>

      {/* Steps */}
      {STRATEGY.map((step, i) => (
        <div key={i} className={`bg-white border rounded-xl mb-3 overflow-hidden transition-colors duration-200 ${openStep === i ? 'border-blue-500/30' : 'border-slate-200'}`}>
          <button
            onClick={() => setOpenStep(openStep === i ? null : i)}
            className="w-full bg-transparent border-none cursor-pointer p-4 px-5 flex items-center gap-3.5 text-left">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0" style={{ background: step.color + "11", border: `1px solid ${step.color}22` }}>
              {step.icon}
            </div>
            <div className="flex-1">
              <div className="text-[10px] tracking-widest mb-0.5" style={{ color: step.color }}>STEP {step.step}</div>
              <div className="text-[15px] text-slate-900 font-serif">{step.title}</div>
            </div>
            <div className="text-slate-400 text-lg shrink-0">{openStep === i ? "▲" : "▼"}</div>
          </button>

          {openStep === i && (
            <div className="px-5 pb-5 border-t border-slate-100">
              <ul className="mt-4 p-0 list-none">
                {step.points.map((pt, pi) => (
                  <li key={pi} className="flex gap-2.5 items-start mb-2.5">
                    <span className="text-lg shrink-0 mt-0.5" style={{ color: step.color }}>•</span>
                    <span className="text-slate-600 text-sm leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              {step.warning && (
                <div className="mt-3.5 p-2.5 px-3.5 bg-red-50 rounded-lg border-l-2 border-red-500 flex gap-2.5">
                  <span className="shrink-0">⚠️</span>
                  <p className="text-red-700 text-[13px] m-0 leading-relaxed">{step.warning}</p>
                </div>
              )}

              {step.example && (
                <div className="mt-3.5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div className="bg-red-50 rounded-lg p-2.5 px-3.5 border-t-2 border-red-500">
                    <div className="text-[10px] text-red-500 tracking-wider mb-1.5">❌ AVOID</div>
                    <p className="text-red-700 text-[13px] m-0 italic">"{step.example.avoid}"</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-2.5 px-3.5 border-t-2 border-emerald-500">
                    <div className="text-[10px] text-emerald-500 tracking-wider mb-1.5">✅ BETTER</div>
                    <p className="text-emerald-700 text-[13px] m-0 italic">"{step.example.better}"</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Useful Phrases */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mt-2">
        <div className="text-[11px] text-slate-400 tracking-wider mb-1">QUICK REFERENCE</div>
        <h3 className="text-[17px] text-slate-900 m-0 mb-4 font-serif">Useful Phrases Bank</h3>
        <div className="flex gap-1.5 flex-wrap mb-4">
          {phraseTabs.map((t) => (
            <button key={t.id} onClick={() => setPhraseTab(t.id)} className={`px-3 py-1 rounded-md border-none cursor-pointer text-xs font-serif transition-all duration-200 ${phraseTab === t.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{t.label}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {(USEFUL_PHRASES as any)[phraseTab]?.map((phrase: string, i: number) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-2 px-3.5 text-[13px] text-slate-600 italic">
              {phrase}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

const TIMER_TOTAL = 20 * 60;

export default function App() {
  const [page, setPage] = useState("home"); // home | guide | write | sample
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [essay, setEssay] = useState("");
  const [activeTab, setActiveTab] = useState("band65");
  const [timeLeft, setTimeLeft] = useState(TIMER_TOTAL);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<any>(null);
  const wordCount = essay.trim() === "" ? 0 : essay.trim().split(/\s+/).length;

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) setTimerActive(false);
    return () => clearInterval(timerRef.current);
  }, [timerActive, timeLeft]);

  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const startTask = (task: any) => {
    setSelectedTask(task);
    setEssay("");
    setTimeLeft(TIMER_TOTAL);
    setTimerActive(true);
    setPage("write");
  };

  const viewSample = () => {
    setTimerActive(false);
    setActiveTab("band65");
    setPage("sample");
  };

  const NavBtn = ({ id, label }: { id: string, label: string }) => {
    const active = page === id || (id === "home" && (page === "home"));
    return (
      <button onClick={() => { if (id === "home") setPage("home"); else if (id === "guide") setPage("guide"); }}
        className={`px-4 py-1.5 rounded-lg border-none cursor-pointer text-[13px] font-serif transition-all duration-200 ${active ? 'bg-indigo-50 text-indigo-600' : 'bg-transparent text-slate-500'}`}>
        {label}
      </button>
    );
  };

  const TabBtn = ({ id, label, color }: { id: string, label: string, color?: string }) => (
    <button onClick={() => setActiveTab(id)} className={`px-4 py-2 rounded-lg border-none cursor-pointer text-[13px] font-serif transition-all duration-200 ${activeTab === id ? 'text-white' : 'bg-slate-100 text-slate-500'}`} style={{ background: activeTab === id ? (color || "#4f46e5") : undefined }}>{label}</button>
  );

  const sa = selectedTask?.sampleAnswer;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-serif">
      <div className="bg-white border-b border-slate-200 p-4 px-6 flex items-center justify-between flex-wrap gap-2.5">
        <div>
          <div className="text-xl font-bold tracking-wider text-slate-900">IELTS Writing Task 1</div>
          <div className="text-xs text-slate-400 mt-0.5">Combined Chart Practice</div>
        </div>
        <div className="flex gap-1">
          <NavBtn id="home" label="📋 Practice Tasks" />
          <NavBtn id="guide" label="💡 Strategy Guide" />
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto p-8 px-5">

        {/* HOME — Task Selection */}
        {page === "home" && (
          <>
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Choose Your Task</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Each task combines <strong className="text-slate-800">two different visual types</strong> — just like the real IELTS exam. New to this task type? Read the <button onClick={() => setPage("guide")} className="bg-transparent border-none text-indigo-600 cursor-pointer text-sm font-serif p-0 underline">Strategy Guide</button> first.
              </p>
            </div>
            {TASKS.map((task) => (
              <div key={task.id} className="bg-white border border-slate-200 rounded-xl p-5 mb-4 cursor-pointer transition-all duration-200 hover:border-indigo-600 hover:-translate-y-0.5"
                onClick={() => startTask(task)}>
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {task.types.map((t, i) => (
                        <span key={i} className="bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-md px-2.5 py-0.5 text-[11px] tracking-wider">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-[17px] text-slate-900 m-0 mb-1.5">{task.title}</h3>
                    <p className="text-slate-500 text-[13px] leading-normal m-0">{task.description}</p>
                  </div>
                  <button className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white border-none rounded-lg px-5 py-2.5 text-sm cursor-pointer font-serif" onClick={(e) => { e.stopPropagation(); startTask(task); }}>Start Task →</button>
                </div>
              </div>
            ))}
          </>
        )}

        {/* STRATEGY GUIDE */}
        {page === "guide" && <StrategyGuide setPage={setPage} />}

        {/* WRITE */}
        {page === "write" && selectedTask && (
          <>
            <div className="flex justify-between items-center mb-5 flex-wrap gap-3">
              <div>
                <div className="flex gap-1.5 mb-1">
                  {selectedTask.types.map((t: string, i: number) => (
                    <span key={i} className="bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-md px-2 py-0.5 text-[10px] tracking-wider">{t}</span>
                  ))}
                </div>
                <h2 className="text-xl text-slate-900 m-0">{selectedTask.title}</h2>
              </div>
              <div className="text-right">
                <div className={`font-mono text-[22px] tracking-widest ${timeLeft < 120 ? 'text-red-600' : timeLeft < 300 ? 'text-amber-600' : 'text-emerald-600'}`}>{formatTime(timeLeft)}</div>
                <div className="text-[11px] text-slate-400">remaining</div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 mb-5">
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{selectedTask.description}</p>
              <div className="flex gap-4 flex-wrap">
                {selectedTask.visuals.map((v: any, i: number) => renderVisual(v, i))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-0 overflow-hidden mb-5">
              <div className="p-3 px-4 border-b border-slate-100 flex justify-between items-center">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">YOUR RESPONSE <span className="text-slate-300">(optional)</span></span>
                <span className={`text-[13px] ${wordCount >= 150 ? 'text-emerald-600' : 'text-slate-500'}`}>{wordCount} / 150+ words</span>
              </div>
              <textarea className="w-full min-h-[240px] bg-white border-none text-slate-900 text-[15px] leading-relaxed p-4 resize-y font-serif outline-none box-border" placeholder="Try writing your own response first. Remember to describe both visuals and link them together..." value={essay} onChange={(e) => setEssay(e.target.value)} />
              <div className="p-3 px-4 border-t border-slate-100 flex justify-between items-center flex-wrap gap-2.5">
                <button onClick={() => setPage("home")} className="bg-transparent border border-slate-200 text-slate-500 rounded-lg px-4 py-2 cursor-pointer text-[13px]">← Back</button>
                <button className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-none rounded-lg px-7 py-3 text-[15px] cursor-pointer font-serif" onClick={viewSample}>View Model Answer →</button>
              </div>
            </div>
          </>
        )}

        {/* SAMPLE */}
        {page === "sample" && selectedTask && sa && (
          <>
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <div>
                <div className="flex gap-1.5 mb-1">
                  {selectedTask.types.map((t: string, i: number) => (
                    <span key={i} className="bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-md px-2 py-0.5 text-[10px]">{t}</span>
                  ))}
                </div>
                <h2 className="text-xl text-slate-900 m-0">{selectedTask.title}</h2>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setPage("write")} className="bg-transparent border border-slate-200 text-slate-500 rounded-lg px-4 py-2 cursor-pointer text-[13px]">← Back</button>
                <button onClick={() => setPage("home")} className="bg-indigo-600 text-white border-none rounded-lg px-5 py-2.5 text-sm cursor-pointer font-serif">Try Another Task</button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 mb-5">
              <div className="text-[11px] text-slate-400 tracking-widest mb-3 uppercase">THE TASK</div>
              <p className="text-slate-600 text-[13px] leading-relaxed mb-3.5">{selectedTask.description}</p>
              <div className="flex gap-4 flex-wrap">
                {selectedTask.visuals.map((v: any, i: number) => renderVisual(v, i))}
              </div>
            </div>

            {essay.trim().length > 20 && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-5">
                <div className="text-[11px] text-slate-400 tracking-widest mb-2 uppercase">YOUR RESPONSE — {wordCount} words</div>
                <p className="text-slate-600 text-[14px] leading-relaxed whitespace-pre-wrap">{essay}</p>
              </div>
            )}

            <div className="flex gap-2 mb-4 flex-wrap">
              <TabBtn id="band50" label="📄 Band 5.0 Answer" color="#64748b" />
              <TabBtn id="band65" label="📄 Band 6.5 Answer" color="#1d4ed8" />
              <TabBtn id="band75" label="⭐ Band 7.5 Upgrade" color="#059669" />
              <TabBtn id="sentences" label="🔍 Key Sentences" color="#b45309" />
              <TabBtn id="tips" label="🚀 How to Upgrade" color="#7c3aed" />
            </div>

            {activeTab === "band50" && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="bg-slate-100 text-slate-600 border border-slate-200 rounded-md px-3 py-0.5 text-xs">BAND 5.0</span>
                  <span className="text-slate-500 text-[13px]">Limited — repetitive, basic, and lists data without much analysis</span>
                </div>
                <p className="text-slate-700 text-[15px] leading-[1.9] whitespace-pre-wrap">{sa.band50}</p>
                <div className="mt-4 p-3 px-4 bg-slate-50 rounded-lg border-l-[3px] border-slate-400">
                  <p className="text-slate-600 text-[13px] m-0">⚠️ <strong className="text-slate-700">What makes this Band 5.0?</strong> It repeats words from the prompt, uses very simple sentence structures, and lists data points one by one without making comparisons. The overview is also very basic and lacks detail.</p>
                </div>
              </div>
            )}

            {activeTab === "band65" && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="bg-blue-50 text-blue-600 border border-blue-100 rounded-md px-3 py-0.5 text-xs">BAND 6.5</span>
                  <span className="text-slate-500 text-[13px]">Competent — clear, accurate, and well-organised</span>
                </div>
                <p className="text-slate-700 text-[15px] leading-[1.9] whitespace-pre-wrap">{sa.band65}</p>
                <div className="mt-4 p-3 px-4 bg-slate-50 rounded-lg border-l-[3px] border-blue-500">
                  <p className="text-slate-600 text-[13px] m-0">💡 <strong className="text-slate-700">What makes this Band 6.5?</strong> It addresses both visuals, provides a clear overview, uses relevant data, and links the two charts — though vocabulary, sentence variety, and depth of cross-visual analysis could be stronger.</p>
                </div>
              </div>
            )}

            {activeTab === "band75" && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-md px-3 py-0.5 text-xs">BAND 7.5</span>
                  <span className="text-slate-500 text-[13px]">Impressive — precise, fluent, analytically strong</span>
                </div>
                <p className="text-slate-700 text-[15px] leading-[1.9] whitespace-pre-wrap">{sa.band75}</p>
                <div className="mt-4 p-3 px-4 bg-slate-50 rounded-lg border-l-[3px] border-emerald-500">
                  <p className="text-slate-600 text-[13px] m-0">⭐ <strong className="text-slate-700">What makes this Band 7.5?</strong> It synthesises both visuals into a coherent narrative, uses precise vocabulary, makes analytical inferences, and integrates data seamlessly rather than describing each chart separately.</p>
                </div>
              </div>
            )}

            {activeTab === "sentences" && (
              <div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 px-5 mb-3">
                  <p className="text-slate-500 text-[13px] m-0">These sentences from the Band 6.5 answer demonstrate key skills for combination tasks — particularly how to link and compare two different visuals.</p>
                </div>
                {sa.keySentences.map((item: any, i: number) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 mb-3.5">
                    <div className="bg-slate-50 rounded-lg p-3 px-4 border-l-[3px] border-amber-500 mb-3">
                      <p className="text-slate-800 text-[14px] leading-relaxed m-0 italic">"{item.sentence}"</p>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <span className="text-lg shrink-0">✅</span>
                      <p className="text-slate-600 text-[14px] leading-relaxed m-0">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "tips" && (
              <div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 px-5 mb-3">
                  <p className="text-slate-500 text-[13px] m-0">Side-by-side comparisons showing exactly how the Band 6.5 answer was upgraded to Band 7.5 across four key areas.</p>
                </div>
                {sa.upgradeTips.map((tip: any, i: number) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 mb-3.5">
                    <div className="mb-3.5">
                      <span className="bg-violet-50 text-violet-600 border border-violet-100 rounded-md px-2.5 py-0.5 text-[11px]">{tip.label}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <div className="bg-slate-50 rounded-lg p-2.5 px-3.5 border-t-2 border-blue-500">
                        <div className="text-[10px] text-blue-500 tracking-widest mb-1.5">BAND 6.5</div>
                        <p className="text-slate-600 text-[13px] m-0 italic">"{tip.band65example}"</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2.5 px-3.5 border-t-2 border-emerald-500">
                        <div className="text-[10px] text-emerald-500 tracking-widest mb-1.5">BAND 7.5</div>
                        <p className="text-slate-800 text-[13px] m-0 italic">"{tip.band75example}"</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start p-2.5 px-3.5 bg-slate-50 rounded-lg">
                      <span className="text-lg shrink-0">🚀</span>
                      <p className="text-slate-600 text-[13px] leading-relaxed m-0">{tip.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

