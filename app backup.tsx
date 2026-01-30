import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SubjectPage from "./components/SubjectPage";
import Premium from "./components/Premium";
import AdminPanel from "./components/AdminPanel";
import QuizIntro from "./components/QuizIntro";
import QuizScreen from "./components/QuizScreen";
import About from "./components/About";
import Contact from "./components/Contact";
import { Page, Topic, User } from "./types";
import { SAMPLE_QUESTIONS } from "./data/questions";
import {
  getSessionEmail,
  loadPremiumState,
  isPremiumActiveForEmail,
} from "./components/premiumstore";

// ✅ Admin whitelist
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

// ✅ URL mapping (tanpa react-router)
const pageToPath = (page: Page) => {
  switch (page) {
    case Page.HOME:
      return "/";
    case Page.MATEMATIKA:
      return "/matematika";
    case Page.BAHASA_INDONESIA:
      return "/b-indonesia";
    case Page.PREMIUM:
      return "/premium";
    case Page.ABOUT:
      return "/about";
    case Page.CONTACT:
      return "/contact";
    case Page.ADMIN:
      return "/admin";
    case Page.QUIZ_INTRO:
      return "/quiz";
    case Page.QUIZ_PLAY:
      return "/play";
    default:
      return "/";
  }
};

const pathToPage = (path: string): Page => {
  const p = (path || "/").toLowerCase();

  if (p === "/matematika") return Page.MATEMATIKA;
  if (p === "/b-indonesia") return Page.BAHASA_INDONESIA;
  if (p === "/premium") return Page.PREMIUM;
  if (p === "/about") return Page.ABOUT;
  if (p === "/contact") return Page.CONTACT;
  if (p === "/admin") return Page.ADMIN;
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

  // ✅ Simpan user ke localStorage
  useEffect(() => {
    localStorage.setItem("tka_smp_current_user", JSON.stringify(currentUser));
  }, [currentUser]);

  // ✅ NAVIGATE helper (ubah page + ubah URL)
  const navigate = (page: Page) => {
    setCurrentPage(page);
    const newPath = pageToPath(page);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, "", newPath);
    }
  };

  // ✅ Saat pertama kali buka: set page dari URL + handle back/forward browser
  useEffect(() => {
    const initial = pathToPage(window.location.pathname);

    // Guard admin route
    if (initial === Page.ADMIN && currentUser?.role !== "admin") {
      setCurrentPage(Page.HOME);
      window.history.replaceState({}, "", "/");
    } else {
      setCurrentPage(initial);
    }

    const onPopState = () => {
      const next = pathToPage(window.location.pathname);

      if (next === Page.ADMIN && currentUser?.role !== "admin") {
        setCurrentPage(Page.HOME);
        window.history.replaceState({}, "", "/");
      } else {
        setCurrentPage(next);
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Legacy login WA+pass (biar aman kalau masih dipakai)
  const handleLogin = (_wa: string, _pass: string): boolean => false;

  // ✅ Admin login by email (dipanggil dari Premium.tsx)
  const handleAdminLoginByEmail = (email: string): boolean => {
    const ok = ADMIN_EMAILS.map((x) => x.toLowerCase()).includes(email.trim().toLowerCase());
    if (!ok) return false;

    setCurrentUser(ADMIN_USER);
    navigate(Page.ADMIN);
    return true;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate(Page.HOME);
  };

  const startQuizFlow = (topic: Topic, level: number) => {
    setSelectedQuiz({ topic, level });
    navigate(Page.QUIZ_INTRO);
  };

  const startGameplay = () => navigate(Page.QUIZ_PLAY);

  const handleNextLevel = () => {
    if (selectedQuiz && selectedQuiz.level < 3) {
      setSelectedQuiz({ ...selectedQuiz, level: selectedQuiz.level + 1 });
      navigate(Page.QUIZ_INTRO);
    }
  };

  // refresh state tiap pindah page (simple & aman)
  const premiumState = useMemo(() => loadPremiumState(), [currentPage]);

  // ✅ email user yang "login google" (simulasi)
  const sessionEmail = getSessionEmail();

  // ✅ akses premium:
  // - admin selalu premium
  // - user biasa: berdasarkan email yang login (sessionEmail) apakah aktif premium
  const isPremiumUser = currentUser?.role === "admin" ? true : isPremiumActiveForEmail(sessionEmail);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onStartFree={() => navigate(Page.MATEMATIKA)} onGoPremium={() => navigate(Page.PREMIUM)} />;

      case Page.MATEMATIKA:
        return (
          <SubjectPage
            title="Matematika"
            isPremiumUser={isPremiumUser}
            onUpgrade={() => navigate(Page.PREMIUM)}
            onStartQuiz={startQuizFlow}
          />
        );

      case Page.BAHASA_INDONESIA:
        return (
          <SubjectPage
            title="Bahasa Indonesia"
            isPremiumUser={isPremiumUser}
            onUpgrade={() => navigate(Page.PREMIUM)}
            onStartQuiz={startQuizFlow}
          />
        );

      case Page.PREMIUM:
        return (
          <Premium
            onLogin={handleLogin}
            currentUser={currentUser}
            onLogout={handleLogout}
            setCurrentPage={navigate}
            onAdminLogin={handleAdminLoginByEmail}
            adminEmails={ADMIN_EMAILS}
            premiumState={premiumState}
          />
        );

      case Page.ABOUT:
        return <About onBack={() => navigate(Page.HOME)} />;

      case Page.CONTACT:
        return <Contact onBack={() => navigate(Page.HOME)} />;

      case Page.ADMIN:
        if (currentUser?.role !== "admin") {
          return <Home onStartFree={() => navigate(Page.MATEMATIKA)} onGoPremium={() => navigate(Page.PREMIUM)} />;
        }
        return <AdminPanel onLogout={handleLogout} />;

      case Page.QUIZ_INTRO:
        if (!selectedQuiz) return null;
        return (
          <QuizIntro
            topic={selectedQuiz.topic}
            level={selectedQuiz.level}
            isPremiumUser={isPremiumUser}
            onStart={startGameplay}
            onUpgrade={() => navigate(Page.PREMIUM)}
            onBack={() => {
              const isMath = selectedQuiz.topic.id.startsWith("mtk");
              navigate(isMath ? Page.MATEMATIKA : Page.BAHASA_INDONESIA);
            }}
          />
        );

      case Page.QUIZ_PLAY: {
        if (!selectedQuiz) return null;

        const moduleId = selectedQuiz.topic?.levels?.[selectedQuiz.level]?.id || "";
        const raw = SAMPLE_QUESTIONS[moduleId] || [];

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
            onFinish={() => navigate(Page.HOME)}
            onQuit={() => {
              const isMath = selectedQuiz.topic.id.startsWith("mtk");
              navigate(isMath ? Page.MATEMATIKA : Page.BAHASA_INDONESIA);
            }}
            onNextLevel={handleNextLevel}
          />
        );
      }

      default:
        return <Home onStartFree={() => navigate(Page.MATEMATIKA)} onGoPremium={() => navigate(Page.PREMIUM)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-blue-500/30">
      {currentPage !== Page.QUIZ_PLAY && (
        <Navbar currentPage={currentPage} setCurrentPage={navigate} isAdmin={currentUser?.role === "admin"} />
      )}

      <main className={`flex-grow ${currentPage !== Page.QUIZ_PLAY ? "pt-20" : "pt-10"}`}>{renderPage()}</main>

      <footer className="py-12 border-t border-zinc-900 text-center">
        <div className="text-xl font-black mb-4 tracking-tighter opacity-20">
          TKA<span className="text-blue-500">SMP</span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={() => navigate(Page.ABOUT)}
            className="text-zinc-500 hover:text-white text-xs font-bold transition-colors"
          >
            Tentang Kami
          </button>
          <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
          <button
            onClick={() => navigate(Page.CONTACT)}
            className="text-zinc-500 hover:text-white text-xs font-bold transition-colors"
          >
            Kontak
          </button>
        </div>

        <div className="text-zinc-600 text-xs font-medium">
          &copy; Latihan TKA SMP Terstruktur. Dibuat untuk kesuksesan akademismu.
        </div>
      </footer>
    </div>
  );
};

export default App;
