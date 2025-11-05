import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// ✅ Correct configuration for deployment under http://<IP>:30082/ecommerce/
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/', // Must exactly match your route or subpath
})
