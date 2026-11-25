# Bijoya Roy Goonjon — artist portfolio
Static website, no build step. All 32 original JPEGs are preserved byte-for-byte in public/assets; WebP derivatives are for faster thumbnails. Labels are descriptive, not confirmed artist titles. No medium, price, CV, or client claims are invented. Contact form only prepares a brief until contact details are set; it does not collect or send data to any server.

## Preview
Open public/index.html in a browser or run `python -m http.server 8000 --directory public` from this folder.

## Firebase deployment
Use an authorized Google account at https://console.firebase.google.com/ to create a separate project on Spark. Install Firebase CLI (`npm install -g firebase-tools`), run `firebase login`, then `firebase deploy --only hosting --project YOUR_ACTUAL_PROJECT_ID` from this folder. Do not deploy to an unrelated existing site. The CLI prints the live URL. The project ID must be selected/verified; no project has been created or deployed from this environment.

## Contact and content
Set actual artist-approved email, WhatsApp with country code, and optional social URLs in public/config.js. Test links and send a test enquiry with artist's approval. Confirm artwork titles, rights to publish, bio, and preferred language; edit app.js and index.html as needed. Update social metadata with the actual live absolute URL after deployment. The website is static and has no database, admin portal, checkout, or server-side form submission. Future custom domain can be connected through Firebase Hosting or the public directory can be uploaded to Hostinger.
