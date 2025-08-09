# Infosiya Website Setup Instructions

## 📋 Overview
This is a professional marketing website for Infosiya IT solutions company. The website includes:
- Responsive design with modern corporate aesthetics
- Service-specific landing pages
- Lead capture forms with validation
- Google Sheets integration for form submissions
- SEO optimization and analytics ready

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

## 📧 Form Submission Setup

### Google Apps Script Configuration

1. **Create a Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it "Infosiya Leads" or similar
   - Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)

2. **Set up Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Create a new project
   - Delete the default code and paste the contents of `google-apps-script.js`
   - Replace `YOUR_SHEET_ID_HERE` with your actual Google Sheet ID
   - Save the project

3. **Deploy the Script**
   - Click "Deploy" > "New deployment"
   - Choose "Web app" as the type
   - Set execute as: "Me"
   - Set access: "Anyone"
   - Click "Deploy"
   - Copy the Web App URL

4. **Update Form Handler URL**
   - Open `src/components/LeadForm.tsx`
   - Replace `https://hooks.example.com/infosiya-forms` with your Web App URL

### Testing Form Submissions

1. Fill out and submit a form on the website
2. Check your Google Sheet for the new row
3. Verify all data is captured correctly

## 🎨 Customization

### Brand Colors
The website uses a purple theme by default. To change colors:

1. **Update CSS Variables** in `src/App.css`:
   ```css
   :root {
     --primary-color: #5E3CFF;
     --secondary-color: #8B5CF6;
   }
   ```

2. **Update Tailwind Colors** in components as needed

### Logo and Branding
- Replace the hexagon icon in the navbar with your actual logo
- Update the favicon in `public/favicon.svg`
- Modify company information in the footer

### Content Updates
- Edit service descriptions in `src/pages/ServicePage.tsx`
- Update testimonials in `src/pages/HomePage.tsx`
- Modify contact information in `src/components/Footer.tsx` and `src/pages/ContactPage.tsx`

## 📊 Analytics Setup

### Google Analytics 4
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (starts with G-)
3. Replace `GA_MEASUREMENT_ID` in `index.html` with your actual ID

### Form Conversion Tracking
The form already triggers a GA4 event `infosiya_form_submit` on successful submissions.

## 🔧 SEO Optimization

### Meta Tags
Update the following in `index.html`:
- Title tags
- Description
- Open Graph tags
- Company-specific information

### Page Titles
Each service page automatically generates appropriate titles. Update the service data in `ServicePage.tsx` to customize.

## 📱 Responsive Design
The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚦 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Traditional Hosting**: Upload the `dist` folder contents

## 📞 Support

For technical support or customization requests:
- Review the code comments for guidance
- Check the browser console for any errors
- Ensure all environment variables are properly set

## 🔒 Security Notes

- The form includes honeypot spam protection
- Input validation is handled client-side and should be complemented with server-side validation
- Consider adding CAPTCHA for additional protection in high-traffic environments

## 📝 Additional Features

### Email Notifications
Uncomment the email notification section in the Google Apps Script to receive emails when forms are submitted.

### Database Integration
The current setup uses Google Sheets, but can be easily modified to work with:
- Airtable
- Firebase
- Traditional databases
- CRM systems

---

**Happy coding! 🚀**

For questions about this setup, refer to the documentation or create an issue in your project repository.