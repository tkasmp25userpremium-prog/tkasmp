import React, { useMemo, useState } from "react";
import { Question, Topic } from "../types";

interface QuizScreenProps {
  topic: Topic;
  level: number;
  questions: Question[];
  isPremiumUser: boolean;
  onFinish: () => void;
  onQuit: () => void;
  onNextLevel?: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  topic,
  level,
  questions,
  isPremiumUser,
  onFinish,
  onQuit,
  onNextLevel,
}) => {
  const topicName = typeof (topic as any)?.name === "string" ? (topic as any).name : "Materi";

  // 🔒 GUARD PALING ATAS (WAJIB)
  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="max-w-xl w-full p-10 rounded-[2rem] bg-zinc-900 border border-zinc-800 text-center">
          <div className="text-4xl mb-4">🚧</div>
          <h2 className="text-2xl font-black mb-2">Soal Belum Tersedia</h2>
          <p className="text-zinc-400 mb-8">
            Konten untuk <strong>{topicName} Level {level}</strong> belum tersedia.
          </p>

          <button
            onClick={onQuit}
            className="px-6 py-4 rounded-2xl bg-blue-600 font-black hover:bg-blue-500 transition"
          >
            Kembali ke Menu
          </button>
        </div>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Stats tracking
  const [firstTryScore, setFirstTryScore] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [isFirstAttemptOfQuestion, setIsFirstAttemptOfQuestion] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const safeIndex = Math.min(Math.max(currentIndex, 0), questions.length - 1);
  const currentQuestion: any = questions[safeIndex];

  // ✅ Guard tambahan: kalau tiba-tiba currentQuestion invalid, jangan crash
  if (!currentQuestion || typeof currentQuestion.text !== "string") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="max-w-xl w-full p-10 rounded-[2rem] bg-zinc-900 border border-zinc-800 text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-2xl font-black mb-2">Format Soal Bermasalah</h2>
          <p className="text-zinc-400 mb-8">
            Ada soal yang formatnya tidak valid. Silakan kembali ke menu.
          </p>

          <button
            onClick={onQuit}
            className="px-6 py-4 rounded-2xl bg-blue-600 font-black hover:bg-blue-500 transition"
          >
            Kembali ke Menu
          </button>
        </div>
      </div>
    );
  }

  const progress = questions.length > 0 ? (currentIndex / questions.length) * 100 : 0;

  // ✅ options aman: harus array dan tiap item harus punya id & text string
  const safeOptions = useMemo(() => {
    const raw = Array.isArray(currentQuestion?.options) ? currentQuestion.options : [];
    return raw
      .filter(Boolean)
      .filter((o: any) => typeof o?.id === "string" && typeof o?.text === "string");
  }, [currentQuestion]);

  const correctId = typeof currentQuestion?.correctOptionId === "string" ? currentQuestion.correctOptionId : "";

  const handleOptionClick = (optionId: string) => {
    if (isCorrect) return;
    if (!correctId) return;

    setSelectedOptionId(optionId);
    setHasAnswered(true);

    if (optionId === correctId) {
      setIsCorrect(true);
      if (isFirstAttemptOfQuestion) {
        setFirstTryScore((prev) => prev + 1);
      }
    } else {
      setIsCorrect(false);
      if (isFirstAttemptOfQuestion) {
        setTotalWrong((prev) => prev + 1);
        setIsFirstAttemptOfQuestion(false);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOptionId(null);
      setHasAnswered(false);
      setIsCorrect(false);
      setIsFirstAttemptOfQuestion(true);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setHasAnswered(false);
    setIsCorrect(false);
    setFirstTryScore(0);
    setTotalWrong(0);
    setIsFirstAttemptOfQuestion(true);
    setIsFinished(false);
  };

  const scorePercentage = questions.length > 0 ? Math.round((firstTryScore / questions.length) * 100) : 0;

  const getMotivation = () => {
    if (scorePercentage === 100) return { title: "Luar Biasa!", msg: "Kamu menguasai materi ini dengan sempurna. Pertahankan!", color: "text-blue-400" };
    if (scorePercentage >= 75) return { title: "Bagus Sekali!", msg: "Pemahamanmu sudah sangat kuat. Sedikit lagi menuju sempurna!", color: "text-green-400" };
    if (scorePercentage >= 50) return { title: "Cukup Baik!", msg: "Kamu sudah paham dasarnya. Ayo tingkatkan lagi latihannya!", color: "text-yellow-400" };
    return { title: "Terus Semangat!", msg: "Jangan menyerah. Pelajari pembahasannya dan coba lagi ya!", color: "text-red-400" };
  };

  if (isFinished) {
    const motivation = getMotivation();
    const hasNextLevel = level < 3;
    const isNextLocked = hasNextLevel && (level + 1 > 1) && !isPremiumUser;

    return (
      <div className="max-w-3xl mx-auto px-6 py-12 animate-in zoom-in duration-500">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10"></div>

          <div className="mb-8">
            <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-2 block">Hasil Latihan</span>
            <h2 className={`text-6xl md:text-8xl font-black mb-4 ${motivation.color}`}>{scorePercentage}%</h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">{motivation.title}</h3>
            <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">{motivation.msg}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-black/40 border border-zinc-800 p-6 rounded-3xl">
              <div className="text-green-500 font-black text-2xl">{firstTryScore}</div>
              <div className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Tepat Sasaran</div>
            </div>
            <div className="bg-black/40 border border-zinc-800 p-6 rounded-3xl">
              <div className="text-red-500 font-black text-2xl">{totalWrong}</div>
              <div className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Perlu Perbaikan</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={handleRetry}
                className="py-5 bg-zinc-800 text-white font-black rounded-2xl hover:bg-zinc-700 transition-all flex items-center justify-center gap-3"
              >
                Ulangi Latihan
              </button>

              <button
                onClick={isNextLocked ? () => {} : onNextLevel}
                disabled={!hasNextLevel || isNextLocked || !onNextLevel}
                className={`py-5 font-black rounded-2xl transition-all flex items-center justify-center gap-3 ${
                  !hasNextLevel
                    ? "bg-zinc-900 text-zinc-700 cursor-not-allowed border border-zinc-800"
                    : isNextLocked
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-60"
                    : "bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/20"
                }`}
              >
                Next Level
              </button>
            </div>

            <button
              onClick={onFinish}
              className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 transition-all"
            >
              Kembali ke Menu Utama
            </button>
          </div>

          {isNextLocked && (
            <p className="mt-6 text-xs text-yellow-500/70 font-bold uppercase tracking-widest">
              Akses Premium diperlukan untuk Level {level + 1}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">
            {topicName} — LEVEL {level}
          </h3>
          <div className="text-sm font-bold text-zinc-300">
            Soal {currentIndex + 1} dari {questions.length}
          </div>
        </div>
        <button onClick={onQuit} className="p-2 text-zinc-500 hover:text-red-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="w-full h-1.5 bg-zinc-900 rounded-full mb-12 overflow-hidden">
        <div className="h-full bg-blue-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <div className="mb-10 animate-in fade-in slide-in-from-bottom duration-500">
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-10 whitespace-pre-line">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4">
          {safeOptions.map((option: any) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrectOption = option.id === correctId;

            let btnClass = "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600";
            if (isSelected) {
              btnClass = isCorrectOption
                ? "bg-green-500 border-green-400 text-white shadow-lg shadow-green-500/20"
                : "bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/20";
            } else if (hasAnswered && isCorrectOption && isCorrect) {
              btnClass = "bg-green-500/10 border-green-500/50 text-green-500";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                disabled={isCorrect}
                className={`w-full flex items-center p-5 rounded-2xl border transition-all duration-200 text-left group ${btnClass}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-black mr-4 uppercase border ${
                    isSelected ? "bg-white/20 border-white/20" : "bg-black/20 border-zinc-700 group-hover:border-zinc-500"
                  }`}
                >
                  {option.id}
                </div>
                <div className="text-lg font-bold">{option.text}</div>
              </button>
            );
          })}
        </div>
      </div>

      {hasAnswered && (
        <div className="animate-in slide-in-from-bottom duration-300">
          <div
            className={`p-6 rounded-3xl border mb-8 ${
              isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? "bg-green-500" : "bg-red-500"} text-white`}>
                {isCorrect ? "✓" : "✗"}
              </div>
              <h4 className={`text-lg font-black uppercase tracking-tight ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                {isCorrect ? "Jawaban Benar" : "Jawaban Salah"}
              </h4>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-black text-zinc-500 uppercase tracking-widest">Pembahasan</h5>
              <p className="text-zinc-300 leading-relaxed text-sm">
                {typeof currentQuestion.discussion === "string" ? currentQuestion.discussion : ""}
              </p>
            </div>
          </div>

          {!isCorrect && (
            <div className="text-center p-4 bg-zinc-900 rounded-2xl border border-zinc-800 animate-pulse mb-8">
              <p className="text-sm font-bold text-zinc-400 italic">Pilih jawaban yang benar untuk melanjutkan!</p>
            </div>
          )}

          {isCorrect && (
            <button
              onClick={handleNext}
              className="w-full py-5 bg-blue-600 text-white font-black text-xl rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
            >
              Lanjut Soal
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizScreen;
