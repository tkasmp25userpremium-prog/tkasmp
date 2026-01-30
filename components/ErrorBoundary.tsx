import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; message: string; stack: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: "", stack: "" };

  static getDerivedStateFromError(err: any) {
    return {
      hasError: true,
      message: String(err?.message || err),
      stack: String(err?.stack || ""),
    };
  }

  componentDidCatch(error: any, info: any) {
    console.error("🔥 ErrorBoundary caught:", error);
    console.error("ℹ️ Component stack:", info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-3xl font-black mb-3">🚨 App Crash</div>
            <div className="text-zinc-300 mb-4">
              Ada error runtime yang bikin halaman gagal render.
            </div>

            <div className="text-xs text-zinc-400 mb-2">Message:</div>
            <pre className="text-xs whitespace-pre-wrap bg-black/40 border border-zinc-800 rounded-2xl p-4 mb-4">
              {this.state.message}
            </pre>

            <div className="text-xs text-zinc-400 mb-2">Stack:</div>
            <pre className="text-xs whitespace-pre-wrap bg-black/40 border border-zinc-800 rounded-2xl p-4">
              {this.state.stack}
            </pre>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 w-full py-4 rounded-2xl bg-blue-600 font-black hover:bg-blue-500 transition"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
