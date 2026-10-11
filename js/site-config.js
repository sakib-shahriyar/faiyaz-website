/* =====================================================================
   FAIYAZ COMMUNICATION — WEBSITE SETTINGS
   ---------------------------------------------------------------------
   EDIT ONLY THIS FILE to change almost everything on the website:
   phone number, address, package prices, FAQ questions, etc.

   HOW TO EDIT:
   1. Open this file in any text editor (Notepad works fine).
   2. Change the text between the quotation marks " " — keep the quotes.
   3. Save the file, then upload it to your hosting. Done.

   RULES (important):
   - Do NOT delete the quotation marks " " or the commas at line ends.
   - Keep the square brackets [ ] around the package and FAQ lists.
   - If the website looks broken after editing, you probably removed a
     quote or a comma — compare with the backup copy you kept.
   ===================================================================== */


const SITE = {

  // ---- Company basics ----
  name: "FAIYAZ COMMUNICATION",                 // company name
  tagline: "24x7 Fast, reliable internet for home & business",  // short slogan under the logo
  aboutShort: "Stay connected 24x7 with the area's fast, reliable internet. Watch live TV, videos and play games with low latency.",
  aboutShortBn: "এলাকার দ্রুত ও নির্ভরযোগ্য ইন্টারনেটে ২৪x৭ সংযুক্ত থাকুন। কম ল্যাটেন্সিতে লাইভ টিভি, ভিডিও দেখুন এবং গেম খেলুন।",

  // ---- Contact details (shown on Contact page + footer) ----
  phone: "+8801303989230",        // used for the tap-to-call link (no spaces)
  phoneDisplay: "+880 1303-989230", // how the number looks on screen
  whatsapp: "8801303989230",      // WhatsApp number, country code + number, NO + sign, NO spaces
  email: "faiyazcommunication0@gmail.com",
  address: "Sreepur Bazar, Sreepur, Gazipur",
  hours: "Open every day, 9:00 AM – 10:00 PM",

  // ---- Pay Bill ----
  // Your bill-payment portal is already live. Customers clicking
  // "Pay Bill" are sent to this address in a new tab.
  billPortalUrl: "https://user.fccloud.net",

  // ---- FTP server ----
  // The "FTP" button in the top menu opens this address in a new tab.
  ftpUrl: "http://172.16.200.200",
};


/* ---------------------------------------------------------------------
   INTERNET PACKAGES
   - Each { ... } block between the [ ] is ONE package card.
   - To ADD a package: copy one block, paste it below, change the values.
   - To REMOVE a package: delete its whole { ... } block.
   - To CHANGE a price: just change the number after price:.
   - speed = Mbps number (used by the speed filter). price = Taka/month.
   - "badge" is optional — delete the line if you don't want a label.
   --------------------------------------------------------------------- */

const PACKAGES = [
  {
    name: "Starter",
    speed: 20,                 // Mbps
    price: 500,                // Taka per month
    badge: "",            // e.g. "Most Popular" — or "" for none
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  },
  {
    name: "Lite",
    speed: 30,
    price: 550,
    badge: "",
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  },
  {
    name: "Standard",
    speed: 40,
    price: 650,
    badge: "Best Value",
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  },
  {
    name: "Plus",
    speed: 50,
    price: 750,
    badge: "Most Popular",
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  },
  {
    name: "Pro",
    speed: 60,
    price: 850,
    badge: "",
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  },
  {
    name: "Ultra",
    speed: 70,
    price: 1050,
    badge: "Best Value",
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  },
  {
    name: "Max",
    speed: 80,
    price: 1200,
    badge: "",
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  },
  {
    name: "Elite",
    speed: 100,
    price: 1500,
    badge: "Elite",
    features: [
      "Facebook Bufferless",
      "Youtube Bufferless",
      "BDIX 250Mbps",
      "Own FTP",
      "Low Latency"
    ]
  }
];


/* ---------------------------------------------------------------------
   FREQUENTLY ASKED QUESTIONS (shown on the Home page)
   - To ADD a question: copy one { ... } block and change the text.
   - To REMOVE: delete the whole { ... } block.
   --------------------------------------------------------------------- */

const FAQS = [
  {
    q: "How do I pay my monthly bill?",
    a: "Click the “Pay Bill” button at the top of this website. It takes you to our secure customer portal at user.fccloud.net where you can pay with bKash, Nagad, Rocket or cards.",
    q_bn: "আমি মাসিক বিল কীভাবে পে করব?",
    a_bn: "এই ওয়েবসাইটের উপরে “বিল পে করুন” বাটনে ক্লিক করুন। এটি আপনাকে আমাদের নিরাপদ কাস্টমার পোর্টাল user.fccloud.net-এ নিয়ে যাবে, যেখানে বিকাশ, নগদ, রকেট বা কার্ডে পেমেন্ট করতে পারবেন।"
  },
  {
    q: "Is there really no data limit?",
    a: "Correct. All our packages come with truly unlimited data — no fair-use slowdowns, no hidden caps.",
    q_bn: "সত্যিই কি কোনো ডেটা লিমিট নেই?",
    a_bn: "ঠিক। আমাদের সব প্যাকেজে সত্যিকারের আনলিমিটেড ডেটা — কোনো ফেয়ার-ইউজ স্লোডাউন বা লুকানো ক্যাপ নেই।"
  },
  {
    q: "How long does installation take?",
    a: "Usually 24–48 hours inside our coverage area. Call our hotline and we will schedule a visit at a time that suits you.",
    q_bn: "ইনস্টলেশন করতে কত সময় লাগে?",
    a_bn: "আমাদের কভারেজ এলাকায় সাধারণত ২৪–৪৮ ঘণ্টা। হটলাইনে কল করুন, আপনার সুবিধামতো সময়ে ভিজিটের শিডিউল করে দেব।"
  },
  {
    q: "What do I need for a new connection?",
    a: "Just your name, mobile number and address. Our team brings the necessary items and handles the full setup for you.",
    q_bn: "নতুন সংযোগের জন্য আমার কী কী লাগবে?",
    a_bn: "শুধু আপনার নাম, মোবাইল নম্বর ও ঠিকানা। আমাদের টিম প্রয়োজনীয় জিনিসপত্র নিয়ে আসবে এবং সম্পূর্ণ সেটআপ করে দেবে।"
  },
  {
    q: "Do you provide support if the internet goes down?",
    a: "Yes. Call our hotline any day between 9:00 AM and 10:00 PM and our local support team will help you right away.",
    q_bn: "ইন্টারনেট বন্ধ হয়ে গেলে কি সাপোর্ট পাব?",
    a_bn: "হ্যাঁ। প্রতিদিন সকাল ৯:০০ থেকে রাত ১০:০০ পর্যন্ত হটলাইনে কল করুন, আমাদের স্থানীয় সাপোর্ট টিম সাথে সাথে সাহায্য করবে।"
  }
];


/* ---------------------------------------------------------------------
   DO NOT EDIT BELOW THIS LINE (website code reads the settings above)
   --------------------------------------------------------------------- */
window.SITE = SITE;
window.PACKAGES = PACKAGES;
window.FAQS = FAQS;
