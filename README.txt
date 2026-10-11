=====================================================================
  FAIYAZ COMMUNICATION — WEBSITE
  Hosting: fccloud.net   |   Bill portal: user.fccloud.net
=====================================================================

WHAT'S INSIDE
-------------
  index.html          Home page
  packages.html       Package list (with speed filter)
  contact.html        Contact page (info cards + message form)
  css/style.css       All styling (colors are at the top of the file)
  js/site-config.js   ★ EDIT THIS FILE for prices, phone, packages, FAQ
  js/main.js          Website behavior (you don't need to touch this)
  assets/logo.png     Your logo (replace this file to change the logo)
  assets/favicon.png  Small browser-tab icon (auto-made from your logo)

HOW TO EDIT THE WEBSITE (the easy way)
---------------------------------------
  Almost everything is controlled by ONE file:  js/site-config.js

  1. Open js/site-config.js in Notepad (or any text editor).
  2. Change the text between the "quotation marks" — phone number,
     address, package names/prices, FAQ questions, etc.
  3. To ADD a package: copy one { ... } block in the PACKAGES list,
     paste it below, and change the values.
  4. To REMOVE a package: delete its whole { ... } block.
  5. Save, then upload the file to your hosting (see below).

  Rules: keep the "quotes" and the commas at the end of lines.
  If the site looks broken after editing, a missing quote or comma
  is almost always the cause — restore from your backup copy.

  To change COLORS: open css/style.css and edit the values under
  ":root" at the very top (e.g. --green: #2fb457;).

  To change the LOGO: replace assets/logo.png with your new logo
  file, keeping the same file name.

NOTE — PLACEHOLDERS TO REPLACE BEFORE GOING LIVE
-------------------------------------------------
  • All company details are now LIVE: hotline +880 1303-989230,
    WhatsApp, faiyazcommunication0@gmail.com,
    Sreepur Bazar, Sreepur, Gazipur, hours 9 AM – 10 PM,
    and your 8 real packages (Starter 20 Mbps … Elite 100 Mbps).
  • To change anything later, edit js/site-config.js and re-upload
    just that one file.

=====================================================================
  HOW TO HOST ON fccloud.net
=====================================================================

  Your hosting account for fccloud.net gives you a control panel
  (usually cPanel). The website's home folder there is called
  "public_html". Uploading the files below into public_html makes
  the site live at https://fccloud.net.

  METHOD 1 — Upload the ZIP (easiest, recommended)
  ------------------------------------------------
  1. Log in to your hosting control panel
     (usually https://fccloud.net:2083 or the link your hosting
     provider gave you).
  2. Open "File Manager".
  3. Double-click the "public_html" folder.
     (If public_html already has files like default.html, you can
     delete them — but NEVER delete anything you don't recognize.)
  4. Click "Upload" and upload faiyaz-website.zip (attached).
  5. Right-click faiyaz-website.zip → "Extract".
     Extract it so the files land DIRECTLY inside public_html
     (not inside an extra subfolder).
  6. Delete the zip file from the server (keeps things tidy).
  7. Visit https://fccloud.net — your site should be live.
     If you see an old page, press Ctrl+Shift+R to hard-refresh.

  METHOD 2 — FTP upload (if you prefer FileZilla)
  ------------------------------------------------
  1. In your control panel, find "FTP Accounts" and create one
     (or use the main hosting username/password).
  2. Connect with FileZilla using:
       Host: fccloud.net (or the server IP from your provider)
       Port: 21
  3. On the right side (server), open the public_html folder.
  4. Drag ALL the website files/folders from your computer
     (index.html, packages.html, contact.html, css, js, assets)
     into public_html.
  5. Visit https://fccloud.net to confirm.

  IMPORTANT NOTES
  ---------------
  • "Pay Bill" buttons link to https://user.fccloud.net, which is
    your separate, already-active customer portal — nothing to
    install for that. It opens in a new tab automatically.
  • The site is 100% static (no database, no PHP) — it runs on ANY
    hosting, and it's fast and secure.
  • To update the live site later: edit files on your computer,
    then re-upload just the changed files (usually site-config.js).
  • Always keep a backup copy of the website folder on your computer.
  • If https:// shows a "not secure" warning, ask your hosting
    provider to enable the free SSL certificate (Let's Encrypt) —
    one click in cPanel under "SSL/TLS Status".

=====================================================================
  Made for Faiyaz Communication — October 2026
=====================================================================
