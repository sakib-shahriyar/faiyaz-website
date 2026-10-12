/* =====================================================================
   FAIYAZ COMMUNICATION — TRANSLATIONS (Bangla + English)
   ---------------------------------------------------------------------
   Default language is Bangla ("bn"). Visitors can switch to English
   with the বাং / EN buttons in the menu. Their choice is remembered.

   HOW TO EDIT TEXT:
   - Find the "key" on the left (e.g. nav.home) and change the text
     on the right for "bn" (Bangla) and/or "en" (English).
   - Lines marked (html) may contain simple HTML like <a> or <span> —
     keep the tags, change only the words around them.
   - {{phone}} becomes the phone number, {{phoneRaw}} the tap-to-call
     version. Do not remove the {{ }} markers.
   ===================================================================== */

const I18N = {

bn: {
  /* ---- navigation ---- */
  "nav.home": "হোম",
  "nav.packages": "প্যাকেজ",
  "nav.ftp": "FTP",
  "nav.contact": "যোগাযোগ",
  "nav.paybill": "💳 বিল পে",
  "nav.label": "প্রধান নেভিগেশন",
  "misc.menu": "মেনু খুলুন",
  "alt.logo": "ফাইয়াজ কমিউনিকেশন লোগো",

  /* ---- page titles ---- */
  "title.home": "ফাইয়াজ কমিউনিকেশন — দ্রুত, নির্ভরযোগ্য ইন্টারনেট",
  "title.packages": "প্যাকেজ — ফাইয়াজ কমিউনিকেশন",
  "title.contact": "যোগাযোগ — ফাইয়াজ কমিউনিকেশন",

  /* ---- hero (home) ---- */
  "hero.badge": "নতুন এলাকায় সংযোগ চলছে",
  "hero.title": 'দ্রুতগতির ফাইবার ইন্টারনেট, <span class="accent">এখন হাতের মুঠোয়।</span>', // (html)
  "hero.packages": "প্যাকেজ দেখুন",
  "hero.paybill": "💳 অনলাইন বিল পে",
  "stat.uptime": "নেটওয়ার্ক আপটাইম",
  "stat.install": "ইনস্টলেশনের সময়",
  "stat.support": "সাপোর্ট",

  /* ---- rotating package card (home) ---- */
  "rot.getPlan": "এই প্ল্যানটি নিন",
  "rot.compare": "সব প্যাকেজ তুলনা করুন →",

  /* ---- why us ---- */
  "feat.kicker": "কেন ফাইয়াজ কমিউনিকেশন",
  "feat.title": "ঝামেলাহীন ইন্টারনেট",
  "feat.sub": "কোনো লুকানো চার্জ নেই, কোনো জটিল শর্ত নেই — শুধু দ্রুত ইন্টারনেট।",
  "feat.1t": "ফাইবার গতি",
  "feat.1d": "আধুনিক ফাইবার-অপটিক লাইনে দিনে ও সন্ধ্যার ব্যস্ত সময়েও আপনি যে গতির জন্য পেমেন্ট করছেন, সেই গতিই পাবেন।",
  "feat.2t": "আনলিমিটেড ডাটা",
  "feat.2d": "প্রতিটি প্যাকেজে আনলিমিটেড ডেটা। যত খুশি স্ট্রিম করুন, গেম খেলুন, কাজ করুন — কোনো ক্যাপ বা স্লোডাউন নেই।",
  "feat.3t": "আন্তরিক সাপোর্ট",
  "feat.3d": 'আমাদের নিজস্ব সাপোর্ট টিমের সাথে কথা বলুন — কোনো কল সেন্টার নয়। প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত <a href="tel:{{phoneRaw}}" style="font-weight:700;color:var(--green-dark)">{{phone}}</a> নম্বরে কল করুন।', // (html)

  /* ---- package previews (home) ---- */
  "pkg.kicker": "প্যাকেজ",
  "pkg.title": "সহজ প্ল্যান, কম দাম",
  "pkg.sub": "আপনার বাসার জন্য মানানসই গতি বেছে নিন। যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করুন।",
  "pkg.seeAll": "প্যাকেজসমূহ দেখুন",
  "pkg.perMonth": "/মাস",
  "pkg.get": "এই প্যাকেজটি নিন",

  /* ---- steps ---- */
  "step.kicker": "সংযোগ নিন",
  "step.title": "৩টি সহজ ধাপে সংযোগ নিন",
  "step.1t": "প্যাকেজ বেছে নিন",
  "step.1d": "প্যাকেজগুলো দেখুন এবং আপনার পরিবার বা ব্যবসার জন্য উপযুক্ত গতি বেছে নিন।",
  "step.2t": "কল বা মেসেজ করুন",
  "step.2d": '<a href="tel:{{phoneRaw}}" style="font-weight:700;color:var(--green-dark)">{{phone}}</a> নম্বরে কল করুন অথবা হোয়াটসঅ্যাপে আপনার ঠিকানা পাঠান।', // (html)
  "step.3t": "আমরা ইনস্টল করব, আপনি নিশ্চিন্ত থাকুন",
  "step.3d": "দ্রুত সময়ের মধ্যে আমাদের টেকনিশিয়ান সম্পূর্ণ সেটআপ করে দেবে। যেকোনো সময় অনলাইনে বিল পে করুন।",

  /* ---- faq ---- */
  "faq.kicker": "সাধারণ জিজ্ঞাসা",
  "faq.title": "প্রশ্ন ও উত্তর",

  /* ---- call to action ---- */
  "cta.title": "আপনার বিল মাত্র এক ক্লিক দূরে",
  "cta.sub": "আমাদের নিরাপদ কাস্টমার পোর্টাল থেকে বিকাশ, নগদ, রকেট বা কার্ড দিয়ে পেমেন্ট করুন।",
  "cta.btn": "💳 এখনই বিল পে করুন",
  "cta2.title": "ইতিমধ্যে আমাদের গ্রাহক?",
  "cta2.sub": "আমাদের নিরাপদ কাস্টমার পোর্টাল থেকে এক মিনিটেরও কম সময়ে মাসিক বিল পে করুন।",

  /* ---- footer ---- */
  "foot.links": "দ্রুত লিংক",
  "foot.contact": "যোগাযোগ",
  "foot.rights": "সর্বস্বত্ব সংরক্ষিত।",
  "foot.ftp": "FTP সার্ভার",

  /* ---- packages page ---- */
  "ph.title": "আমাদের প্যাকেজ",
  "ph.sub": "সব প্ল্যানে আনলিমিটেড ডেটা, ফ্রি ইনস্টলেশন সাপোর্ট ও বন্ধুসুলভ সেবা রয়েছে।",
  "chip.all": "সকল প্যাকেজ",
  "chip.basic": "30 Mbps পর্যন্ত",
  "chip.mid": "40 – 60 Mbps",
  "chip.fast": "70+ Mbps",
  "ph.note": 'আপনার অফিস, দোকান বা অ্যাপার্টমেন্টের জন্য কাস্টম প্ল্যান দরকার? <a href="contact.html" style="font-weight:700; color: var(--green-dark);">আমাদের সাথে কথা বলুন</a> — আপনার প্রয়োজন অনুযায়ী প্ল্যান বানিয়ে দেব।', // (html)

  /* ---- contact page ---- */
  "ct.title": "যোগাযোগ করুন",
  "ct.sub": "নতুন সংযোগ, বিলিং প্রশ্ন বা সাপোর্ট — যেকোনোভাবে আমাদের সাথে যোগাযোগ করুন।",
  "ct.hotline": "হটলাইন",
  "ct.hotlineSub": "প্রতিদিন কল করুন, সকাল ৯:০০ – রাত ১০:০০",
  "ct.wa": "হোয়াটসঅ্যাপ",
  "ct.waSub": "আমাদের সাথে সরাসরি চ্যাট করুন",
  "ct.waBtn": "হোয়াটসঅ্যাপে মেসেজ করুন",
  "ct.email": "ইমেইল",
  "ct.office": "অফিস",
  "ct.formTitle": "মেসেজ পাঠান",
  "ct.formSub": "ফর্মটি পূরণ করুন — আপনার ইমেইল অ্যাপে সবকিছু লেখা অবস্থায় খুলবে, শুধু সেন্ড চাপুন।",
  "ct.name": "আপনার নাম",
  "ct.namePh": "যেমন: রহিম উদ্দিন",
  "ct.phone": "ফোন নম্বর",
  "ct.phonePh": "01XXXXXXXXX",
  "ct.phoneHint": "যাতে আপনার অনুরোধ সম্পর্কে আমরা কল করে জানাতে পারি।",
  "ct.topic": "কী বিষয়?",
  "ct.t1": "নতুন সংযোগ",
  "ct.t2": "বিলিং সংক্রান্ত প্রশ্ন",
  "ct.t3": "টেকনিক্যাল সাপোর্ট",
  "ct.t4": "প্যাকেজ আপগ্রেড",
  "ct.t5": "অন্যান্য",
  "ct.msg": "মেসেজ",
  "ct.msgPh": "আপনার কী প্রয়োজন লিখুন…",
  "ct.submit": "মেসেজ পাঠান",
  "ct.note": 'সরাসরি কথা বলতে চান? <a data-site="phone" href="#" style="font-weight:700;color:var(--green-dark)"></a> নম্বরে কল করুন — অথবা উপরের <a data-paybill href="#" style="font-weight:700;color:var(--green-dark)">বিল পে করুন</a> বাটনে বিদ্যমান বিল সাথে সাথে পে করুন।', // (html)

  /* ---- misc ---- */
  "misc.top": "উপরে যান",

  /* ---- contact form messages (used by code) ---- */
  "form.alert": "আপনার নাম, ফোন নম্বর ও মেসেজ পূরণ করুন।",
  "form.subPre": "অনুসন্ধান — ",
  "form.lName": "নাম",
  "form.lPhone": "ফোন",
  "form.lTopic": "বিষয়",
  "form.lMsg": "মেসেজ"
},

en: {
  /* ---- navigation ---- */
  "nav.home": "Home",
  "nav.packages": "Packages",
  "nav.ftp": "FTP",
  "nav.contact": "Contact",
  "nav.paybill": "💳 Pay Bill",
  "nav.label": "Main navigation",
  "misc.menu": "Open menu",
  "alt.logo": "Faiyaz Communication logo",

  /* ---- page titles ---- */
  "title.home": "Faiyaz Communication — Fast, Reliable Internet",
  "title.packages": "Packages — Faiyaz Communication",
  "title.contact": "Contact — Faiyaz Communication",

  /* ---- hero (home) ---- */
  "hero.badge": "Now connecting new areas",
  "hero.title": 'Blazing-fast fiber internet, <span class="accent">made simple.</span>', // (html)
  "hero.packages": "View Packages",
  "hero.paybill": "💳 Pay Bill Online",
  "stat.uptime": "Network uptime",
  "stat.install": "Installation time",
  "stat.support": "Support, every week",

  /* ---- rotating package card (home) ---- */
  "rot.getPlan": "Get this plan",
  "rot.compare": "Compare all packages →",

  /* ---- why us ---- */
  "feat.kicker": "Why Faiyaz Communication",
  "feat.title": "Internet without the headaches",
  "feat.sub": "No hidden charges, no confusing fine print — just fast internet and people who pick up the phone.",
  "feat.1t": "Pure fiber speed",
  "feat.1d": "Modern fiber-optic lines deliver the speed you pay for — steady during the day and at peak evening hours.",
  "feat.2t": "Truly unlimited",
  "feat.2d": "Every package comes with unlimited data. Stream, game and work as much as you like — no caps, no slowdowns.",
  "feat.3t": "Local human support",
  "feat.3d": 'Talk to our own support team, not a call center. Call <a href="tel:{{phoneRaw}}" style="font-weight:700;color:var(--green-dark)">{{phone}}</a> any day, 9 AM – 10 PM.', // (html)

  /* ---- package previews (home) ---- */
  "pkg.kicker": "Packages",
  "pkg.title": "Simple plans, honest prices",
  "pkg.sub": "Pick the speed that fits your home. Upgrade or downgrade anytime.",
  "pkg.seeAll": "See All Packages",
  "pkg.perMonth": "/month",
  "pkg.get": "Get this package",

  /* ---- steps ---- */
  "step.kicker": "Get connected",
  "step.title": "Online in 3 easy steps",
  "step.1t": "Choose your package",
  "step.1d": "Browse the packages and pick the speed that suits your family or business.",
  "step.2t": "Call or message us",
  "step.2d": 'Reach us on <a href="tel:{{phoneRaw}}" style="font-weight:700;color:var(--green-dark)">{{phone}}</a> or WhatsApp and share your address.', // (html)
  "step.3t": "We install, you relax",
  "step.3d": "Our technician sets everything up pretty quick. Pay your bill online anytime.",

  /* ---- faq ---- */
  "faq.kicker": "FAQ",
  "faq.title": "Questions, answered",

  /* ---- call to action ---- */
  "cta.title": "Your bill is one click away",
  "cta.sub": "Pay securely with bKash, Nagad, Rocket or cards through our customer portal.",
  "cta.btn": "💳 Bill Pay",
  "cta2.title": "Already a customer?",
  "cta2.sub": "Pay your monthly bill in under a minute through our secure customer portal.",

  /* ---- footer ---- */
  "foot.links": "Quick Links",
  "foot.contact": "Contact",
  "foot.rights": "All rights reserved.",
  "foot.ftp": "FTP Server",

  /* ---- packages page ---- */
  "ph.title": "Our Packages",
  "ph.sub": "All plans include unlimited data, free installation support and friendly local service. Prices in Taka per month.",
  "chip.all": "All speeds",
  "chip.basic": "Up to 30 Mbps",
  "chip.mid": "40 – 60 Mbps",
  "chip.fast": "70+ Mbps",
  "ph.note": 'Need a custom plan for your office, shop or apartment building? <a href="contact.html" style="font-weight:700; color: var(--green-dark);">Talk to us</a> — we will build one around your needs.', // (html)

  /* ---- contact page ---- */
  "ct.title": "Get in Touch",
  "ct.sub": "New connection, billing question or support — reach us any way you like. We reply fast.",
  "ct.hotline": "Hotline",
  "ct.hotlineSub": "Call any day, 9:00 AM – 10:00 PM",
  "ct.wa": "WhatsApp",
  "ct.waSub": "Chat with us instantly",
  "ct.waBtn": "Message on WhatsApp",
  "ct.email": "Email",
  "ct.office": "Office",
  "ct.formTitle": "Send us a message",
  "ct.formSub": "Fill this in and it will open your email app with everything pre-written — just press send.",
  "ct.name": "Your name",
  "ct.namePh": "e.g. Rahim Uddin",
  "ct.phone": "Phone number",
  "ct.phonePh": "01XXXXXXXXX",
  "ct.phoneHint": "So we can call you back about your request.",
  "ct.topic": "What is this about?",
  "ct.t1": "New connection",
  "ct.t2": "Billing question",
  "ct.t3": "Technical support",
  "ct.t4": "Package upgrade",
  "ct.t5": "Other",
  "ct.msg": "Message",
  "ct.msgPh": "Tell us what you need…",
  "ct.submit": "Send Message",
  "ct.note": 'Prefer talking? Call <a data-site="phone" href="#" style="font-weight:700;color:var(--green-dark)"></a> — or pay an existing bill instantly with the <a data-paybill href="#" style="font-weight:700;color:var(--green-dark)">Pay Bill</a> button above.', // (html)

  /* ---- misc ---- */
  "misc.top": "Back to top",

  /* ---- contact form messages (used by code) ---- */
  "form.alert": "Please fill in your name, phone number and message.",
  "form.subPre": "New connection enquiry — ",
  "form.lName": "Name",
  "form.lPhone": "Phone",
  "form.lTopic": "Topic",
  "form.lMsg": "Message"
}

};

window.I18N = I18N;
