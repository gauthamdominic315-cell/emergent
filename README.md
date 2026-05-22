# Kumar Enterprises Website — Self-Hosting Guide

This is your complete website code. You can host it for **FREE** on Vercel + Railway + MongoDB Atlas.

## 📁 What's Inside

```
kumar-enterprises-website/
├── frontend/          # React website (5 pages, 122 products)
├── backend/           # FastAPI server (quote requests, products API)
└── README.md          # This file
```

## 🚀 FREE Hosting Setup (Total Cost: ₹0/month)

### Prerequisites (Sign up — all FREE)
1. **GitHub** account: https://github.com/signup
2. **Vercel** account: https://vercel.com/signup (sign in with GitHub)
3. **Railway** account: https://railway.app (sign in with GitHub)
4. **MongoDB Atlas** account: https://mongodb.com/cloud/atlas/register

---

## STEP 1: Upload Code to GitHub (15 min)

### Easiest Method — Web Upload
1. Go to https://github.com/new
2. Repository name: `kumar-enterprises-website`
3. Choose **Public** (free) or Private (also free)
4. Click **"Create repository"**
5. On the new repo page, click **"uploading an existing file"** link
6. Drag-drop the `frontend` and `backend` folders
7. Scroll down → click **"Commit changes"**

✅ Code is now on GitHub!

---

## STEP 2: Set Up MongoDB Atlas Database (10 min)

1. Go to https://mongodb.com/cloud/atlas
2. Sign up with Google (free)
3. Choose **"M0 Free Tier"** (512MB free forever)
4. Cloud Provider: AWS, Region: Mumbai (closest to India)
5. Click **"Create Cluster"**
6. **Create Database User:**
   - Username: `kumaradmin`
   - Password: (use a strong password, save it!)
7. **Network Access:**
   - Click "Network Access" (left sidebar)
   - "Add IP Address" → "Allow Access from Anywhere" (0.0.0.0/0)
8. **Get Connection String:**
   - Click "Database" → "Connect" → "Drivers"
   - Copy connection string (looks like):
   ```
   mongodb+srv://kumaradmin:<password>@cluster0.xxxxx.mongodb.net/
   ```
   - Replace `<password>` with your actual password
   - **SAVE THIS STRING** — you'll need it in Step 3

---

## STEP 3: Deploy Backend on Railway (10 min)

1. Go to https://railway.app
2. Click **"Login"** → "Login with GitHub"
3. Click **"New Project"** → "Deploy from GitHub repo"
4. Select your `kumar-enterprises-website` repo
5. Choose **"Add variables"** → settings:
   - **Root Directory:** `backend`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. **Environment Variables** (click "Variables" tab):
   ```
   MONGO_URL = [paste MongoDB Atlas connection string from Step 2]
   DB_NAME = kumar_enterprises
   CORS_ORIGINS = *
   ```
7. Click **"Deploy"**
8. Wait 3-5 minutes for build
9. **Get public URL:**
   - Settings → Networking → "Generate Domain"
   - Copy the URL (like `https://kumar-enterprises-backend.up.railway.app`)
   - **SAVE THIS URL**

---

## STEP 4: Deploy Frontend on Vercel (10 min)

1. Go to https://vercel.com
2. Click **"Add New"** → "Project"
3. Import your `kumar-enterprises-website` repo
4. **Configure:**
   - Framework Preset: **Create React App**
   - Root Directory: `frontend`
   - Build Command: `yarn build` (or `npm run build`)
   - Output Directory: `build`
5. **Environment Variables** (expand "Environment Variables"):
   ```
   REACT_APP_BACKEND_URL = [paste Railway URL from Step 3]
   ```
6. Click **"Deploy"**
7. Wait 2-3 minutes
8. ✅ Your site is live at `https://kumar-enterprises-website.vercel.app`

---

## STEP 5: Connect kumarenterpises.com Domain (15 min)

### In Vercel:
1. Project Settings → **Domains**
2. Add `kumarenterpises.com`
3. Vercel shows DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### In GoDaddy:
1. My Products → Domains → kumarenterpises.com → **DNS**
2. **Delete any existing A or CNAME records** (except NS and SOA)
3. **Add the records from Vercel** above
4. Save

### Wait 15-30 minutes
- Test: https://kumarenterpises.com
- ✅ FREE SSL provisioned automatically

---

## STEP 6: Stop Emergent Hosting (Save ₹500-1000/month)

Once your site works on Vercel:
1. Go to Emergent → **Home tab**
2. Click **"Manage Deployments"**
3. Find your deployment
4. Click **"Shut Down"** or **"Stop"**
5. ✅ No more monthly credit charges

---

## 💰 Total Monthly Cost: ₹0

| Service | Tier | Cost |
|---------|------|------|
| Vercel (frontend) | Free | ₹0 |
| Railway (backend) | Free $5 credit/month | ₹0 |
| MongoDB Atlas | M0 Free (512MB) | ₹0 |
| GoDaddy domain | Already paid yearly | ₹0 extra |
| **TOTAL** | | **₹0/month** |

---

## 🆘 Troubleshooting

### Frontend deployed but shows blank page?
- Check Vercel build logs for errors
- Make sure `REACT_APP_BACKEND_URL` is set correctly

### Backend deployment fails?
- Check Railway logs
- Make sure `MONGO_URL` is correct
- Verify MongoDB Atlas allows access from 0.0.0.0/0

### Domain not loading?
- Wait 30 min for DNS propagation
- Check https://dnschecker.org
- Clear browser cache (Ctrl+Shift+R)

### Quote form not submitting?
- Open browser console (F12) → see errors
- Check CORS_ORIGINS in Railway includes your Vercel domain

---

## 📞 Need Help?

- **Vercel docs:** https://vercel.com/docs
- **Railway docs:** https://docs.railway.app
- **MongoDB Atlas docs:** https://www.mongodb.com/docs/atlas/
- **GoDaddy DNS help:** https://in.godaddy.com/help

---

## 🎉 Once Live, Don't Forget!

1. **Submit to Google Search Console:** https://search.google.com/search-console
2. **Create Google Business Profile** for all 3 offices
3. **List on IndiaMART, JustDial** for instant B2B leads
4. **Add to WhatsApp Business bio** + email signature

Good luck with Kumar Enterprises! 🚀