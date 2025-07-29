# GitHub Pages Deployment Guide

This project is now configured for GitHub Pages deployment. Follow these steps to deploy your React app:

## Prerequisites

1. Push your code to a GitHub repository
2. Ensure your repository is public (or you have GitHub Pro for private repos)

## Setup Instructions

### 1. Update Homepage URL

In `package.json`, replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/sourceflow"
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 3. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your React app on every push to the `main` branch
- Deploy it to GitHub Pages
- Make it available at `https://YOUR_GITHUB_USERNAME.github.io/sourceflow`

### 4. Manual Deployment (Optional)

You can also deploy manually using:

```bash
npm run deploy
```

This will build and deploy your app to the `gh-pages` branch.

## Build Command

To test your build locally:

```bash
npm run build
```

The built files will be in the `build/` directory.

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the homepage URL in `package.json` matches your repository name
2. **Build Fails**: Check that all dependencies are installed with `npm install`
3. **Assets Not Loading**: Ensure all assets are in the `public/` folder and referenced correctly

### Checking Deployment Status:

1. Go to the **Actions** tab in your GitHub repository
2. Check the workflow runs to see if deployment was successful
3. Any errors will be shown in the workflow logs

## Files Added/Modified:

- `package.json` - Added homepage, deploy scripts, and gh-pages dependency
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
- This `DEPLOYMENT.md` file

Your site will be available at: `https://YOUR_GITHUB_USERNAME.github.io/sourceflow` 