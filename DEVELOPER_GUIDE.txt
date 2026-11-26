MANYBEEZ KIOSK — MULTI-PAGE PROJECT
====================================

PROJECT STRUCTURE
-----------------
essemble_kiosk_app/
|
+-- index.html                 Home / welcome screen
|
+-- src/
|   +-- javascript/
|   |   +-- app.js             Shared kiosk interactions and state
|   |
|   +-- assets/
|       +-- css/
|       |   +-- style.css      Shared styling and 1080x1920 portrait rules
|       +-- food/              Food images
|       +-- drinks/            Beverage images
|       +-- audio/             Supplied MP3 recordings
|
+-- pages/
    +-- menu.html              Menu and category selection
    +-- item.html              Item details and customization
    +-- cart.html              Cart
    +-- checkout.html          Checkout
    +-- success.html           Order confirmation

RUN
---
Open the project folder in VS Code and use Live Server on index.html.
Navigation between pages uses relative URLs. For reliable browser audio and
session state, use a local web server rather than opening individual files
directly with file://.

STATE
-----
The current order, cart, selected item, language and audio toggles are kept in
sessionStorage while navigating between pages in the same browser tab.

AUDIO
-----
Audio files live in src/assets/audio/. The getScreenAudioPath(screenId)
function in src/javascript/app.js maps the current screen and selected language
to the supplied recordings.

CUSTOMISATION
-------------
Search src/javascript/app.js for comments containing HOOK:
- ORDER MODE HOOK
- LANGUAGE / VOICE HOOK
- AUDIO FILE HOOK
- MENU RENDER HOOK
- PRODUCT DETAIL HOOKS
- ADD-TO-CART HOOK
- CART INTERACTION HOOKS
- CHECKOUT HOOK
- PLACE ORDER HOOK

IMPORTANT
---------
Checkout is a front-end demo only. No live POS, payment gateway or database is
connected. Verify catalogue and prices before real deployment.

WIREFRAME ASSET / LAYOUT RESTORATION
------------------------------------
- Menu category navigation is a fixed orange vertical sidebar on the left.
- Product cards are a single vertical column with image, title, description and orange action button.
- The menu opens on Bento Set, matching the supplied menu wireframe.
- Item details use a large top image, centered title, three tabs, scrollable content,
  and a fixed quantity / Add to Cart action area.
- Cart items use thumbnail rows and a distinct remove control.
- Food photos are cropped from the supplied The Essemble Cafe individual meal catalogue cards.
- Beverage images use the supplied Wok/Rice/Drink banner image pack.

SUPPLIED WIREFRAME REFERENCES
-----------------------------
The seven original Quant UX screenshots are preserved in src/assets/wireframes/.
They are reference-only images; the live interface is built with HTML/CSS and
uses separate food and drink image assets for the product cards.

PRODUCT CARD IMAGE ASSETS
-------------------------
- Meal photos are cropped from the supplied The Essemble Cafe individual food catalogue images.
- All 25 supplied Wok/Rice/Drink banner images are installed in src/assets/drinks/.
- Food and beverage product cards use the supplied image assets.
- Demo prices and catalogue descriptions are sample data and should be checked
  against the final approved menu.

FOOD MENU CARDS
---------------
The Bento Set menu starts with the three family combo cards from the wireframe:
- Burger & Chicken Rice Family
- Nasi Lemak & Burger Family
- Asian Rice Feast

Their card images are composed from the supplied The Essemble Cafe food and drink imagery.
The wireframe shows $68.80 for the first two family cards; the sample catalogue
uses $68.80 for all three until final business pricing is confirmed.

CORRECTED PRODUCT CARD ASSETS (LATEST UPLOAD)
---------------------------------------------
The menu now uses the newly supplied 472x225 card-banner assets:
- src/assets/cards/              20 food and family-meal card banners
- src/assets/bubble_tea/          5 bubble-tea card banners
- src/assets/drinks/              6 drink card banners
- src/assets/drinks_extra/       14 additional, non-duplicate drink banners

The previous marketing-catalogue crops and composite family images are no longer
used by the menu product records. Card banners display at their 472:225 ratio.

Dessert has no supplied product card image in these asset packs, so it displays
a "Desserts coming soon" message instead of reusing an unrelated beverage image.

Prices shown for new product cards are demonstration values and must be confirmed
against the final The Essemble Cafe menu before deployment.

LATEST ASSET CORRECTION
----------------------
The correct menu-card artwork is the 472x225 banner format from the latest uploads.
The fixed card-banner pack is used for all 20 food cards, including the five family
sets. The dedicated bubble-tea and drink packs are used for beverage cards. The
all-drinks pack is retained in drinks_extra for the additional drink variants.
The earlier food-photo crops and generated family composites have been removed
from the active asset folders and are not used by the product catalogue.

ITEM CUSTOMIZATION INTERACTIONS
-------------------------------
The Customization tab now uses touch-friendly controls:
- REMOVE marks an included component as removed.
- UNDO restores a removed component.
- REPLACE opens a list of available products in the component's replacement category.
- ADD / ADDED toggles optional add-ons and updates the item price.
- The quantity and Add to Cart bar remains fixed at the bottom.

Code locations in src/javascript/app.js:
- defaultBundleComponents(product): define which included items belong to each family set.
- addonOptions inside renderDetail(): define add-ons and their prices.
- removeComponent(), restoreComponent(): remove/restore an included component.
- replaceComponent(): set a replacement product.
- toggleAddon(): add or remove an optional add-on.
- extraCost(): calculate add-on charges.

Prototype pricing note:
Removing or replacing included bundle items does not currently change the bundle
base price. Confirm the restaurant's substitution and removal pricing rules before
connecting this to a live POS.

LANGUAGE AND NATIVE AUDIO (UPDATED)
-----------------------------------
The home language buttons now change the selected language for all pages.
The selection is persisted in sessionStorage and remains active while the
customer moves between Home, Menu, Item, Cart, Checkout and Success.

Languages:
- English (en-SG)
- Bahasa Melayu (ms-MY)
- 中文 / Simplified Chinese (zh-CN)
- தமிழ் (ta-IN)

Translation:
- UI_TRANSLATIONS in src/javascript/app.js contains the local/offline UI dictionary.
- applyTranslations() translates static and dynamically rendered text nodes and
  placeholders, retaining the original English text so customers can switch
  between languages without refreshing.
- Add new UI/product translations to the relevant language dictionary.

Audio:
- AUDIO ON plays the supplied screen recording where one exists:
  Home: English, Chinese and Tamil recordings.
  Menu: English and Malay recordings.
- If a recording is unavailable for the selected language or page, the kiosk
  speaks the localized screen prompt using browser speech synthesis with the
  selected locale.
- SPEAK ON enables spoken guidance using the selected language voice.
- Selecting another language while AUDIO or SPEAK is enabled restarts guidance
  in that language.
- Native voice availability depends on installed voices in the browser/OS.
