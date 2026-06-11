# Vercel Deployment Guide

## Quick Start

This project is ready to deploy on Vercel! Follow these steps:

### 1. **Install Vercel CLI (Optional but Recommended)**
```bash
npm install -g vercel
```

### 2. **Deploy to Vercel**

#### Option A: Using Vercel Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "New Project"
4. Select your GitHub repository (or import this project)
5. Click "Deploy"
6. Vercel will automatically detect your Vite configuration and deploy

#### Option B: Using Vercel CLI
```bash
vercel
```
Follow the prompts to connect your project and deploy.

### 3. **Production Build Locally (Before Deploying)**
```bash
npm run build
npm run preview
```

## Project Configuration

### Build Process
- **Build Command**: `vite build`
- **Output Directory**: `dist`
- **Framework**: Vite with Multi-Page Application (MPA) setup

### Files Configuration
- `vercel.json` - Vercel deployment settings
- `.vercelignore` - Files to exclude from deployment
- `vite.config.js` - Optimized for production builds

## Features Configured

✅ Optimized build for production  
✅ CSS code splitting enabled  
✅ Terser minification for smaller bundle size  
✅ Multi-page setup with 5 HTML entry points  
✅ Automatic routing to correct HTML files  

## Environment

- **Node Version**: 18 or higher (Vercel default)
- **Package Manager**: npm (or yarn)

## Troubleshooting

### Issue: Pages not loading after deployment
- **Solution**: Ensure all HTML files have correct links and paths are relative

### Issue: Assets loading incorrectly
- **Solution**: Check that image and CSS paths use relative paths, not absolute paths

### Issue: Build fails on Vercel
- **Solution**: 
  1. Run `npm run build` locally to check for errors
  2. Ensure all dependencies are in package.json
  3. Check Vercel build logs in the dashboard

## Next Steps After Deployment

1. Set up a custom domain in Vercel project settings
2. Enable automatic deployments from your Git repository
3. Configure environment variables if needed
4. Monitor performance in Vercel Analytics

## Support

For more information, visit:
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)
