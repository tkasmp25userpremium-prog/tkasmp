import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SubjectPage from "./components/SubjectPage";
import Premium from "./components/Premium";
import AdminPanel from "./components/AdminPanel";
import AdminLoginScreen from "./components/AdminLoginScreen";
import QuizIntro from "./components/QuizIntro";
import QuizScreen from "./components/QuizScreen";
import About from "./components/About";
import Contact from "./components/Contact";
import Join from "./components/Join";
import { Page, Topic, User } from "./types";
import { SAMPLE_QUESTIONS } from "./data/questions";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

// ✅ Admin whitelist (SATU EMAIL)
const ADMIN_EMAILS = ["tkasmp25.monitoringpremium@gmail.com"];

// ✅ Data admin untuk currentUser (guard admin panel)
const ADMIN_USER: User = {
  id: "admin-001",
  whatsapp: "08981091600",
  password: "$Adliokto31$",
  statusPembayaran: "paid",
  statusAktif: true,
  isAdmin: true,
  role: "admin",
};

// ✅ Hanya untuk sync URL saat load (tidak dipakai di navigate)
const pathToPage = (path: string): Page => {
  const p = (path || "/").toLowerCase();
  if (p === "/matematika") return Page.MATEMATIKA;
  if (p === "/b-indonesia") return Page.BAHASA_INDONESIA;
  if (p === "/premium") return Page.PREMIUM;
  if (p === "/about") return Page.ABOUT;
  if (p === "/contact") return Page.CONTACT;
  if (p === "/admin") return Page.ADMIN;
  if (p === "/join") return Page.JOIN;
  if (p === "/quiz") return Page.QUIZ_INTRO;
  if (p === "/play") return Page.QUIZ_PLAY;
  return Page.HOME;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("tka_smp_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [selectedQuiz, setSelectedQuiz] = useState<{ topic: Topic; level: number } | null>(null);

  const [authEmail, setAuthEmail] = useState<string>("");
  const [authReady, setAuthReady] = useState<boolean>(false);

  const isAdminEmail = useMemo(() => {
    const e = (authEmail || "").trim().toLowerCase();
    return ADMIN_EMAILS.map((x) => x.toLowerCase()).includes(e);
  }, [authEmail]);

  useEffect(() => {
    localStorage.setItem("tka_smp_current_user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setAuthEmail((u?.email || "").toLowerCase());
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  // ✅ SYNC URL SAAT LOAD / REFRESH
  useEffect(() => {
    const pageFromUrl = pathToPage(window.location.pathname);
    setCurrentPage(pageFromUrl);
  }, []);

  // Legacy login WA+pass
  const handleLogin = (_wa: string, _pass: string): boolean => false;

  const handleAdminLoginByEmail = (email: string): boolean => {
    const ok = ADMIN_EMAILS.map((x) => x.toLowerCase()).includes(email.trim().toLowerCase());
    if (!ok) return false;
    setCurrentUser(ADMIN_USER);
    setCurrentPage(Page.ADMIN);
    return true;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedQuiz(null);
    setCurrentPage(Page.HOME);
  };

  const startQuizFlow = (topic: Topic, level: number) => {
    setSelectedQuiz({ topic, level });
    setCurrentPage(Page.QUIZ_INTRO);
  };

  const startGameplay = () => setCurrentPage(Page.QUIZ_PLAY);

  const handleNextLevel = () => {
    if (selectedQuiz && selectedQuiz.level < 3) {
      setSelectedQuiz({ ...selectedQuiz, level: selectedQuiz.level + 1 });
      setCurrentPage(Page.QUIZ_INTRO);
    }
  };

  const isPremiumUser = currentUser?.role === "admin";

  useEffect(() => {
    if ((currentPage === Page.QUIZ_INTRO || currentPage === Page.QUIZ_PLAY) && !selectedQuiz) {
      setCurrentPage(Page.HOME);
    }
  }, [currentPage, selectedQuiz]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onStartFree={() => setCurrentPage(Page.MATEMATIKA)} onGoPremium={() => setCurrentPage(Page.PREMIUM)} />;

      case Page.MATEMATIKA:
        return (
          <SubjectPage
            title="Matematika"
            isPremiumUser={isPremiumUser}
            onUpgrade={() => setCurrentPage(Page.PREMIUM)}
            onStartQuiz={startQuizFlow}
          />
        );

      case Page.BAHASA_INDONESIA:
        return (
          <SubjectPage
            title="Bahasa Indonesia"
            isPremiumUser={isPremiumUser}
            onUpgrade={() => setCurrentPage(Page.PREMIUM)}
            onStartQuiz={startQuizFlow}
          />
        );

      case Page.PREMIUM:
        return (
          <Premium
            onLogin={handleLogin}
            currentUser={currentUser}
            onLogout={handleLogout}
            setCurrentPage={setCurrentPage}
            onAdminLogin={handleAdminLoginByEmail}
            adminEmails={ADMIN_EMAILS}
          />
        );

      case Page.JOIN:
        return <Join />;

      case Page.ABOUT:
        return <About onBack={() => setCurrentPage(Page.HOME)} />;

      case Page.CONTACT:
        return <Contact onBack={() => setCurrentPage(Page.HOME)} />;

      case Page.ADMIN: {
        if (!authReady) return null;
        if (!authEmail) {
          return <AdminLoginScreen message="Silakan login Google admin untuk akses halaman ini." />;
        }
        if (!isAdminEmail) {
          setCurrentPage(Page.HOME);
          return null;
        }
        if (currentUser?.role !== "admin") {
          setCurrentUser(ADMIN_USER);
        }
        return <AdminPanel onLogout={handleLogout} />;
      }

      case Page.QUIZ_INTRO:
        if (!selectedQuiz) return null;
        return (
          <QuizIntro
            topic={selectedQuiz.topic}
            level={selectedQuiz.level}
            isPremiumUser={isPremiumUser}
            onStart={startGameplay}
            onUpgrade={() => setCurrentPage(Page.PREMIUM)}
            onBack={() => {
              const isMath = selectedQuiz.topic.id.startsWith("mtk");
              setCurrentPage(isMath ? Page.MATEMATIKA : Page.BAHASA_INDONESIA);
            }}
          />
        );

      case Page.QUIZ_PLAY: {
        if (!selectedQuiz) return null;
        const moduleId = (selectedQuiz.topic as any)?.levels?.[selectedQuiz.level]?.id || "";
        const raw = (SAMPLE_QUESTIONS as any)[moduleId] || [];
        const safeQuestions = Array.isArray(raw)
          ? raw
              .filter((q: any) => q && typeof q.text === "string" && Array.isArray(q.options))
              .map((q: any) => ({
                ...q,
                options: Array.isArray(q.options)
                  ? q.options.filter((o: any) => o && typeof o.text === "string" && typeof o.id === "string")
                  : [],
              }))
              .filter((q: any) => q.options.length > 0)
          : [];
        return (
          <QuizScreen
            topic={selectedQuiz.topic}
            level={selectedQuiz.level}
            questions={safeQuestions}
            isPremiumUser={isPremiumUser}
            onFinish={() => {
              setSelectedQuiz(null);
              setCurrentPage(Page.HOME);
            }}
            onQuit={() => {
              const isMath = selectedQuiz.topic.id.startsWith("mtk");
              setSelectedQuiz(null);
              setCurrentPage(isMath ? Page.MATEMATIKA : Page.BAHASA_INDONESIA);
            }}
            onNextLevel={handleNextLevel}
          />
        );
      }

      default:
        return <Home onStartFree={() => setCurrentPage(Page.MATEMATIKA)} onGoPremium={() => setCurrentPage(Page.PREMIUM)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-blue-500/30">
      {currentPage !== Page.QUIZ_PLAY && (
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} isAdmin={isAdminEmail} />
      )}
      <main className={`flex-grow ${currentPage !== Page.QUIZ_PLAY ? "pt-20" : "pt-10"}`}>{renderPage()}</main>
      <footer className="py-12 border-t border-zinc-900 text-center">
        <div className="text-xl font-black mb-4 tracking-tighter opacity-20">
          TKA<span className="text-blue-500">SMP</span>
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={() => setCurrentPage(Page.ABOUT)} className="text-zinc-500 hover:text-white text-xs font-bold transition-colors">
            Tentang Kami
          </button>
          <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
          <button onClick={() => setCurrentPage(Page.CONTACT)} className="text-zinc-500 hover:text-white text-xs font-bold transition-colors">
            Kontak
          </button>
        </div>
        <div className="text-zinc-600 text-xs font-medium">&copy; Latihan TKA SMP Terstruktur. Dibuat untuk kesuksesan akademismu.</div>
      </footer>
    </div>
  );
};

export default App;