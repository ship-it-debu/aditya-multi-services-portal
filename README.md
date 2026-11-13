# WhatsApp Lead Qualification System & Google Sheets CRM (24/7 Free)

This directory contains the complete source code, generators, simulators, and templates for an automated inbound client qualification system.

---

## 📁 Files Included in this System

| File | Purpose |
| :--- | :--- |
| **`Code.gs`** | **The Production Engine:** Complete Google Apps Script file with Meta WhatsApp Cloud API webhooks (`doGet`/`doPost`), 5-step conversational state machine, automated lead scoring, and instant Google Sheets CRM logger. |
| **`wa_me_generator.html`** | **Inbound Traffic Tool:** Standalone browser utility to generate high-converting `wa.me` links with pre-filled trigger messages, UTM campaign tags, and copy-paste website HTML buttons. |
| **`lead_bot_simulator.html`** | **Live Desktop Simulator:** Interactive UI mimicking WhatsApp mobile on the left and live Google Sheets writes on the right. Test questions, state transitions, and qualification logic instantly. |
| **`SETUP_GUIDE.md`** | **Step-by-Step Walkthrough:** Foolproof guide to setting up Google Apps Script, Meta Cloud API free tier (1,000 free convos/month), and webhook synchronization in under 10 minutes. |
| **`Qualified_Leads_Template.csv`** | CSV header and sample data schema for the primary high-priority leads tab. |
| **`All_Inbound_Leads_Template.csv`** | CSV header and sample data schema for all inquiries received. |
| **`appsscript.json`** | Apps Script project manifest with Asia/Kolkata timezone and webapp authorization settings. |

---

## 🚀 Quick Start in 3 Steps
1. **Test in Browser**: Open `lead_bot_simulator.html` to experience the qualification bot flow and sheet logging.
2. **Generate Links**: Open `wa_me_generator.html` to generate your custom `https://wa.me/...` link with pre-filled text.
3. **Deploy 24/7**: Follow `SETUP_GUIDE.md` to paste `Code.gs` into a Google Sheet and hook it up to Meta WhatsApp Cloud API.
