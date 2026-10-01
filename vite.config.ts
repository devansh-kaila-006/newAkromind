import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function serveDynamicVideo(): Plugin {
  return {
    name: 'serve-dynamic-video',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const cleanUrl = req.url ? req.url.split('?')[0] : '';
        if (cleanUrl === '/assets/video.mp4' || cleanUrl === '/video.mp4') {
          const candidates = [
            path.resolve(__dirname, 'assets/video.mp4'),
            path.resolve(__dirname, 'public/assets/video.mp4'),
            path.resolve(__dirname, 'public/video.mp4'),
            path.resolve(__dirname, 'src/assets/video.mp4'),
            path.resolve(__dirname, 'src/pages/video.mp4'),
          ];
          for (const cand of candidates) {
            if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
              const stat = fs.statSync(cand);
              const fileSize = stat.size;
              const range = req.headers.range;

              res.setHeader('Content-Type', 'video/mp4');
              res.setHeader('Accept-Ranges', 'bytes');
              res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

              if (range) {
                const parts = range.replace(/bytes=/, '').split('-');
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                const chunksize = (end - start) + 1;
                const file = fs.createReadStream(cand, { start, end });
                res.writeHead(206, {
                  'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                  'Content-Length': chunksize,
                  'Content-Type': 'video/mp4',
                });
                return file.pipe(res);
              } else {
                res.writeHead(200, {
                  'Content-Length': fileSize,
                  'Content-Type': 'video/mp4',
                });
                return fs.createReadStream(cand).pipe(res);
              }
            }
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), serveDynamicVideo()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
