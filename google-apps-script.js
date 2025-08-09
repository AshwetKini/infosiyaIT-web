// Google Apps Script for handling form submissions
// Instructions:
// 1. Go to script.google.com
// 2. Create a new project
// 3. Replace the default code with this script
// 4. Set up a trigger for doPost function
// 5. Deploy as a web app with "Anyone" access
// 6. Copy the web app URL and replace 'https://hooks.example.com/infosiya-forms' in LeadForm.tsx

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Replace 'YOUR_SHEET_ID' with your Google Sheet ID
    const sheetId = 'YOUR_SHEET_ID_HERE';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Ensure headers exist (run this once manually or check if headers exist)
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    if (headers.length === 0 || headers[0] !== 'Timestamp') {
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Timestamp', 'Service', 'Full Name', 'Email', 'Mobile', 'Company', 'Message', 'Source Page'
      ]]);
    }
    
    // Add the new row with form data
    sheet.appendRow([
      data.timestamp,
      data.service,
      data.fullName,
      data.email,
      data.mobile,
      data.company,
      data.message,
      data.sourcePage
    ]);
    
    // Optional: Send email notification
    // Uncomment and configure the following lines if you want email notifications
    /*
    const emailTo = 'your-email@infosiya.com';
    const subject = `New Lead: ${data.service} - ${data.fullName}`;
    const body = `
      New lead received from the website:
      
      Service: ${data.service}
      Name: ${data.fullName}
      Email: ${data.email}
      Mobile: ${data.mobile}
      Company: ${data.company}
      Message: ${data.message}
      Source Page: ${data.sourcePage}
      Timestamp: ${data.timestamp}
    `;
    
    MailApp.sendEmail(emailTo, subject, body);
    */
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight OPTIONS requests for CORS
function doGet(e) {
  return ContentService
    .createTextOutput('Infosiya Forms Handler is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Additional function to test the script
function testScript() {
  const testData = {
    timestamp: new Date().toISOString(),
    service: 'Website Development',
    fullName: 'Test User',
    email: 'test@example.com',
    mobile: '+1234567890',
    company: 'Test Company',
    message: 'This is a test message',
    sourcePage: '/test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log(result.getContent());
}