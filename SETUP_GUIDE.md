# 24/7 FREE WHATSAPP LEAD QUALIFICATION CHATBOT & GOOGLE SHEETS CRM
### Complete Zero-Cost Architecture Guide (Google Apps Script + Meta WhatsApp Cloud API + Google Sheets)

---

## 📌 Architecture Overview

```
[Prospect Clicks wa.me Link]
           │
           ▼
[Inbound WhatsApp Message Sent]
           │
           ▼
[Meta WhatsApp Cloud API (Free Tier: 1,000 convos/mo)]
           │
           ▼ (Webhook HTTP POST)
[Google Apps Script Web App (24/7 Cloud Host, Zero Cost)]
           │
     ┌─────┴────────────────────────┐
     ▼                              ▼
[Asks Step-by-Step           [Evaluates Qualification
 Qualification Questions]     Rules (Urgency, Scale, Budget)]
     │                              │
     ▼                              ▼
[Sends WhatsApp Reply]       [Logs to Google Sheet:
                              - 'Qualified Leads' (Priority)
                              - 'All Inbound Leads']
```

---

## 💰 Why This Is 100% Free & Runs 24/7
1. **Google Apps Script**: Hosted completely free by Google. Runs serverless in the cloud 24 hours a day, 7 days a week. Never sleeps, requires no VPS or computer to be left turned on.
2. **Meta WhatsApp Cloud API**: Meta provides **1,000 free service (inbound/user-initiated) conversations every single month** to every WhatsApp Business account. Since your leads message you first via `wa.me`, every conversation falls under the free tier!
3. **Google Sheets**: Free unlimited cloud spreadsheet acting as your real-time CRM.

---

## 🚀 Step 1: Set Up the Google Sheet & Apps Script (5 Minutes)

1. Open your browser and go to [sheets.new](https://sheets.new) to create a new Google Sheet.
2. Name your sheet: `AMS Client Acquisition & Lead CRM`.
3. In the top menu, click **Extensions** > **Apps Script**.
4. Delete any default code inside the editor (`function myFunction() { ... }`).
5. Open the file `Code.gs` from this folder (`C:\Users\viraj varnekar\Desktop\client system\Code.gs`).
6. Copy its entire contents and paste it into the Google Apps Script editor.
7. Click the **Save** icon (disk icon or `Ctrl + S`).

---

## 🔑 Step 2: Get Free Meta WhatsApp Cloud API Access (5 Minutes)

Meta gives developers and businesses official API access without third-party fees:

1. Visit [developers.facebook.com](https://developers.facebook.com/) and log in with your Facebook account.
2. Click **My Apps** > **Create App**.
3. Select **Other** > click **Next** > choose **Business** as the app type > click **Next**.
4. Enter an App Name (e.g. `AMS Lead Bot`) and your email > click **Create App**.
5. In the App Dashboard, scroll down to **WhatsApp** and click **Set Up**.
6. On the left sidebar under WhatsApp, click **API Setup**:
   - You will see a **Temporary Access Token** (or create a permanent System User Token under Business Settings).
   - You will see a **Phone Number ID** (e.g. `105938472910...`).
   - Meta automatically provides a **Test Phone Number** ready to receive & send messages immediately!

---

## 🌐 Step 3: Deploy Google Apps Script as a 24/7 Webhook

1. In your Google Apps Script editor, update the top config:
   ```javascript
   const CONFIG = {
     WHATSAPP_TOKEN: 'PASTE_YOUR_META_TOKEN_HERE',
     PHONE_NUMBER_ID: 'PASTE_YOUR_PHONE_NUMBER_ID_HERE',
     VERIFY_TOKEN: 'QUALIFY_LEAD_SECRET_TOKEN_2026', // Keep or customize this secret
     ...
   };
   ```
2. Click the blue **Deploy** button (top right) > **New deployment**.
3. Click the gear icon ⚙️ next to "Select type" and select **Web app**.
4. Configure settings:
   - **Description**: `WhatsApp Lead Bot Webhook v1`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial: Meta servers must be able to POST messages to it)*
5. Click **Deploy**.
6. Authorize the permissions when prompted (Select your Google account > Advanced > Go to Untitled project).
7. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 🔗 Step 4: Connect the Webhook in Meta Developer Portal

1. Go back to [developers.facebook.com](https://developers.facebook.com/).
2. In the left menu, click **WhatsApp** > **Configuration**.
3. Under **Webhook**, click **Edit**:
   - **Callback URL**: Paste your Google Apps Script Web App URL from Step 3.
   - **Verify Token**: Enter `QUALIFY_LEAD_SECRET_TOKEN_2026` (matching your `CONFIG.VERIFY_TOKEN`).
4. Click **Verify and Save**. (Google Apps Script will instantly respond and verify).
5. Under **Webhook fields**, click **Manage** > Find `messages` > Click **Subscribe** > Click **Done**.

🎉 **Your 24/7 WhatsApp Qualification Chatbot is now LIVE!**

---

## 📲 Step 5: Generate Your `wa.me` Inbound Links

Double-click to open `wa_me_generator.html` in your browser.

- Enter your WhatsApp Business Phone number (e.g., `9198XXXXXXXX`).
- Choose or customize your pre-filled inbound greeting (e.g., *"Hi Vikram, I would like to get a Labour Law & Compliance Audit quote for our company."*).
- Click **Copy wa.me Link**.
- Place this link on:
  - Your Instagram bio & Stories.
  - Your SuperProfile store header / Lead Magnets.
  - Your Website CTA buttons (`wa_me_generator.html` even generates the HTML button code!).
  - Your Google Ads & Facebook Ad campaigns.

When a prospect taps this link, WhatsApp automatically opens with the text ready to send. Once they hit Send, your Google Apps Script takes over instantly, qualifies them, and records their details in your Google Sheet!

---

## 🧪 Step 6: Test Locally Without Waiting

You have two instant testing options:

### Option A: Interactive Visual Simulator
- Double-click `lead_bot_simulator.html` to open it in Chrome/Edge.
- Chat with the simulated WhatsApp bot on the left.
- Watch the Google Sheet CRM table on the right populate with the lead in real-time!

### Option B: Apps Script Local Run
- In your Google Apps Script editor, select the function `testBotConversationFlow` from the dropdown.
- Click **Run**.
- Switch back to your Google Sheet tabs (`Qualified Leads`, `All Inbound Leads`, `Bot Sessions`) to inspect the formatted entries.

---

## ⚙️ How to Customize Questions & Qualification Rules

Inside `Code.gs`:
- To modify questions or add new steps, edit the `FLOW_STEPS` array:
  - `prompt`: The message sent by the bot.
  - `field`: The key stored in the lead entry.
  - `processAnswer`: Maps numeric choices (1, 2, 3) to readable text.
  - `validation`: Ensures the prospect gave a valid answer before moving to the next step.
- To modify qualification criteria, edit `finalizeLead()`:
  - Leads with commercial team sizes (>10, >50 employees) and urgent timelines are auto-tagged as `QUALIFIED` and highlighted in soft green.
  - Inquiries asking only for free advice or indefinite timelines are classified as `NURTURE / LOW PRIORITY`.
