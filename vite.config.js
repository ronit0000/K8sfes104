import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Correct base path for K8s deployment
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/',   // ✅ must match your ingress or NodePort route
})
