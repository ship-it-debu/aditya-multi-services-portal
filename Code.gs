/**
 * ============================================================================
 * ADITYA MULTI SERVICES - DUAL INBOUND CLIENT QUALIFICATION & CRM
 * ============================================================================
 * 
 * Captures BOTH high-paying client streams (Employer & Employee)
 * Includes the mandatory 25+ Word Client Case Description!
 * ============================================================================
 */

const CONFIG = {
  SHEET_NAME: 'Qualified Inbound Leads',
  FIRM_NAME: 'Aditya Multi Services',
  ADVISOR_NAME: 'Adv. Vikram Varnekar'
};

function doGet(e) {
  return ContentService.createTextOutput("Aditya Multi Services Lead Engine Active 24x7.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ status: 'error', message: 'No payload' });
    }

    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const headers = [
      "Timestamp",
      "Status",
      "Client Category",
      "Full Name",
      "Company / Employer",
      "WhatsApp Phone",
      "Email Address",
      "Legal Matter",
      "Scale / Disputed Amount",
      "Case Description (25+ Words)",
      "Fee Agreement",
      "Action Stage"
    ];

    const sheet = getOrCreateSheet(CONFIG.SHEET_NAME, headers);

    const clientTypeFormatted = (data.clientType === 'employer') 
      ? '🏢 Corporate Employer' 
      : '⚖️ Individual Employee / Claimant';

    const newRow = [
      new Date(),
      "QUALIFIED",
      clientTypeFormatted,
      data.name || '',
      data.company || '',
      "'" + (data.phone || ''),
      data.email || '',
      data.service || '',
      data.scaleOrClaim || '',
      data.description || '',
      data.budget || 'Agreed Paid Consultation',
      "New Inbound (Pending WhatsApp Chat)"
    ];

    sheet.appendRow(newRow);

    // Apply color: soft green for employer, soft blue for employee
    const lastRow = sheet.getLastRow();
    const rowColor = (data.clientType === 'employer') ? "#E8F8F5" : "#EBF5FB";
    sheet.getRange(lastRow, 1, 1, headers.length).setBackground(rowColor);

    return createJsonResponse({ status: 'success', message: 'Lead logged successfully' });
  } catch (err) {
    Logger.log("Error logging lead: " + err.toString());
    return createJsonResponse({ status: 'error', message: err.toString() });
  }
}

function getOrCreateSheet(sheetName, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    if (headers && headers.length > 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length)
           .setFontWeight("bold")
           .setBackground("#5c1228") // Aditya Multi Services Royal Maroon
           .setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }
  }
  return sheet;
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
