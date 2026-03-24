"use client";

export function NewsletterForm() {
  return (
    <form
      action="#"
      onSubmit={(e) => e.preventDefault()}
      className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
    >
      <label htmlFor="email-input" className="sr-only">
        Email address
      </label>
      <input
        id="email-input"
        type="email"
        required
        placeholder="you@company.com"
        className="w-full flex-1 rounded-lg border border-border-bright bg-surface px-4 py-3 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
      />
      <button
        type="submit"
        className="w-full sm:w-auto rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-400 transition-colors whitespace-nowrap cursor-pointer"
      >
        Notify me
      </button>
    </form>
  );
}
