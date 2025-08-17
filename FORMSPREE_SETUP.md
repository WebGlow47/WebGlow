# 📧 Formspree Setup Guide

## 🚀 **How to Start Receiving Client Messages:**

### **Step 1: Activate Your Formspree Account**
1. Go to [formspree.io](https://formspree.io)
2. Click "Sign Up" and create an account
3. Verify your email address

### **Step 2: Create Your First Form**
1. In your Formspree dashboard, click "New Form"
2. Give it a name like "Web Glow Contact Form"
3. Copy the form endpoint URL (it will look like: `https://formspree.io/f/YOUR_FORM_ID`)

### **Step 3: Update Your Website**
1. Replace the current form action in `index.html`:
   ```html
   <!-- Change this line: -->
   <form class="contact-form" action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
   ```

### **Step 4: Test Your Form**
1. Fill out the contact form on your website
2. Submit it
3. Check your email - you should receive the message!

## ✨ **What You'll Receive:**

When someone submits the form, you'll get an email with:
- **Name** of the person
- **Email** address to reply to
- **Company** name (if provided)
- **Service** they're interested in
- **Message** with project details

## 💰 **Pricing:**
- **Free Tier**: 100 submissions/month
- **Paid Plans**: Start at $10/month for more submissions

## 🔧 **Customization Options:**
- **Email Templates**: Customize how emails look
- **Spam Protection**: Built-in spam filtering
- **File Uploads**: Can add file attachment support
- **Webhooks**: Connect to other services

## 📱 **Mobile Friendly:**
- Forms work perfectly on all devices
- Automatic mobile optimization
- Touch-friendly interface

## 🎯 **Next Steps:**
1. **Sign up** for Formspree
2. **Update** the form action URL
3. **Test** the form
4. **Start receiving** client messages!

---

**Need Help?** Formspree has excellent documentation and support at [docs.formspree.io](https://docs.formspree.io)
