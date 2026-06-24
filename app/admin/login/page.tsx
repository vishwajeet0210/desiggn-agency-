export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="mb-2 text-3xl font-black text-white">
          DES!GGN CMS
        </h1>

        <p className="mb-8 text-slate-400">
          Sign in to manage your website
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}