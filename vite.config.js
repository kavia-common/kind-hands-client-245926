import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Vite host allow-list configuration.
 *
 * Kavia previews run under a dynamic host like:
 *   vscode-internal-<port>-qa.qa01.cloud.kavia.ai
 *
 * If not allow-listed, Vite blocks the request with:
 *   "Blocked request. This host (...) is not allowed."
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    /**
     * Allow the known Kavia preview domain and any dynamic subdomains.
     * - String entries match exact hosts
     * - Regex entries match host patterns (recommended here due to dynamic hostnames)
     */
    allowedHosts: [
      /^(?:.*\.)?qa01\.cloud\.kavia\.ai$/,
      // Common local dev hosts
      'localhost',
      '127.0.0.1',
    ],
  },
  preview: {
    /**
     * Apply the same host allow-list to `vite preview` as well.
     */
    allowedHosts: [
      /^(?:.*\.)?qa01\.cloud\.kavia\.ai$/,
      'localhost',
      '127.0.0.1',
    ],
  },
})
