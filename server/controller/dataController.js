
const Product = require("../models/productModel")
const ApiFeatures = require("../utils/apifeatures")
const ErrorHandler = require("../utils/errorHandler")
const asyncHandler = require("express-async-handler")

//product should assign with ids

const data = [
    {
        title: "MOTOROLA e13 (Aurora Green, 64 GB)  (4 GB RAM)",
        rating: "4.1",
        act_price: "10,999",
        dis_price: "6,499",
        discount: "40",
        offers: [('Bank Offer', '10% Instant Discount on ICICI Bank Credit Card, up to ₹1000 on orders of ₹5,000 and above'), ('Bank Offer', '10% Instant Discount on Axis Bank Credit Card, up to ₹1000, on orders of ₹5,000 and above'), ('Bank Offer', '5% off on Flipkart Axis Bank Credit Card and EMI Txns, up to ₹500, on orders of ₹5,000 and above'), ('Special Price', 'Get extra ₹4500 off (price inclusive of cashback/coupon)')],
        description: "With the all-new moto e13, you can enjoy advanced capabilities with up to 4 GB of RAM and cruise through a hectic day with ease. Store everything you love and more with 64 GB of storage that’s expandable up to 1 TB. Equipped with a powerful UNISOC T606 Processor, you’ll get a performance like never before. Scroll, stream, search, and socialise with a 5000mAh battery that lets you watch videos for up to 23 hours, listen to music for up to 225 hours and browse your favourite social media platforms for up to 21 hours. Additionally, with a premium design and a sleek body, it’s sure to make some heads turn. Take your theatre to-go when you have a 16.5 cm (6.5) ultra-wide screen IPS LCD screen and Dolby Atmos that gives you unmatched entertainment.",
        heighlights: ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', '16.51 cm (6.5 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Battery', 'Unisoc T606 Processor'],
        images: ['https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/8/5/-original-imagmmmhmjpfvbry.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/8/5/-original-imagmmmhmjpfvbry.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/n/j/-original-imagmmmh7dz8zpzd.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/3/k/-original-imagmmmhhjnekuaj.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/k/0/-original-imagmmmhzqwyynha.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/d/o/-original-imagmmmhg5jcehnh.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/q/t/-original-imagmmmhzxfc3uzf.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/i/z/t/-original-imagmmmhgau2gmmc.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/b/w/-original-imagmmmha2hqfzbr.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/x/j/-original-imagmmmhu8p6267j.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/n/p/-original-imagmmmhrzrddyxf.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/v/m/x/-original-imagmmmhfscrhj3b.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/g/b/-original-imagmmmhzjuexezc.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/p/f/-original-imagmmmhgkd3d55z.jpeg?q=70'],
        category: 'mobile'
    },
    {
        title: 'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)',
        rating: '4.4',
        act_price: '19999',
        dis_price: '16979',
        discount: '15',
        offers: [('Bank Offer', '10% Instant Discount on Citibank Credit Card, up to ₹1000, on orders of ₹5,000 and above'), ('Bank Offer', '10% Instant Discount on Kotak Bank Credit Card, up to ₹1000 on orders of ₹5,000 and above'), ('Bank Offer', '10% Instant Discount on Citibank Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and above'), ('Special Price', 'Get extra ₹3019 off (price inclusive of cashback/coupon)')],
        description: 'NA',
        heighlights: ['6 GB RAM | 128 GB ROM', '16.74 cm (6.59 inch) Display', '64MP Rear Camera | 16MP Front Camera', '5000 mAh Battery'],
        images: ['https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/k/c/f/-original-imagg2abpjwyyvqg.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/c/i/e/-original-imagm27ghg9hz8zw.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/s/1/-original-imagg2abwxamn32y.jpeg?q=70'],
        category: 'mobile'
    },
    {
        title: 'APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY13HN/A  (13.6 Inch, Starlight, 1.24 kg)',
        rating: '4.7',
        act_price: '114900',
        dis_price: '94990',
        discount: '17',
        offers: [('Bank Offer', '10% Instant Discount on Axis Bank Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and above'), ('Bank Offer', 'Extra ₹5000 Off On HDFC Bank Trxn*'), ('Bank Offer', '5% Cashback on Flipkart Axis Bank Card'), ('Special Price', 'Get extra 17% off (price inclusive of cashback/coupon)')],
        description: 'Charged in a blazing-fast speed with the next-level M2 chip, this redesigned Apple’s notebook comes with mind blowing and has an excellent battery backup that can last up to 18 hours, which comes with an aluminium enclosure.',
        heighlights: ['Stylish & Portable Thin and Light Laptop', '13.6 Inch Liquid Retina Display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology', 'Light Laptop without Optical Disk Drive'],
        images: ['https://rukminim2.flixcart.com/image/128/128/xif0q/computer/v/c/a/-original-imagfdfpnjjpdhq2.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/j/d/-original-imagfdequ9yzecg6.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/h/o/-original-imagfdfppdgspafh.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/n/f/z/-original-imagfdfpawhjzdme.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/8/e/x/-original-imagfdfpx4jv5zqa.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/d/1/v/-original-imagfdfpvswxhfpm.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/v/t/-original-imagfdfp3vebzrge.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/r/k/g/-original-imagfdfp7cdy7k9x.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/k/n/v/-original-imagfdeqqwqtsfyr.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/l/g/v/-original-imagfdeqzggkghx6.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/w/x/2/-original-imagfdfpdarg6gae.jpeg?q=70']
        ,
        category: 'laptop'
    },
    {
        title: 'ASUS Vivobook 15 Core i5 11th Gen 1135G7 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ522WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)',
        rating: '4.3',
        act_price: '69990',
        dis_price: '43990',
        discount: '37',
        offers: [('Bank Offer', '10% Instant Discount on Axis Bank Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and above'), ('Bank Offer', '5% Cashback on Flipkart Axis Bank Card'), ('Special Price', 'Get extra 13% off (price inclusive of cashback/coupon)'), ('Extra 10% OFF on External HDD & SSD when bought with Laptop', 'T&C')]
        ,
        description: 'The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.',
        heighlights: ['Stylish & Portable Thin and Light Laptop', '15.6 Inch Full HD 16:9 Aspect ratio, LCD Backlit, 200nits, 45% NTSC Color Gamut, Anti-glare display', 'Finger Print Sensor for Faster System Access', 'Light Laptop without Optical Disk Drive'],
        images: ['https://rukminim2.flixcart.com/image/128/128/xif0q/computer/1/n/p/-original-imagfdfew8gszzhk.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/j/d/-original-imagfdequ9yzecg6.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/n/n/t/-original-imagfdfeddgvf5wb.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/v/0/z/-original-imagfdfeuyepb6ht.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/8/u/-original-imagfdfeb8sahaeh.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/1/u/m/-original-imagfdfemre2dy6z.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/h/a/u/-original-imagfdfeu8kxgasc.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/7/2/h/-original-imagfdfe7sgqdrzk.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/k/n/v/-original-imagfdeqqwqtsfyr.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/l/g/v/-original-imagfdeqzggkghx6.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/u/3/w/-original-imagfdfez9k9qumk.jpeg?q=70'],
        category: 'laptop'
    },
    {
        title: 'SONY Alpha Full Frame ILCE-7M2K/BQ IN5 Mirrorless Camera Body with 28 - 70 mm Lens  (Black)',
        rating: '4.4',
        act_price: '128990',
        dis_price: '81990',
        discount: '36',
        offers: [('Bank Offer', '10% Instant Discount on Axis Bank Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and above'), ('Bank Offer', 'Flat ₹100 Cashback on Paytm Wallet. Min Order Value ₹1,000. Valid once per Paytm account'), ('Bank Offer', 'Flat ₹25 Instant Discount on Paytm UPI. Min Order Value ₹300. Valid once per Flipkart account'), ('Special Price', 'Get extra 4% off (price inclusive of cashback/coupon)')],
        description: 'Click breathtaking photos and blur-free videos with this Sony α7 II DSLR camera - it provides you immense freedom to reinvent your photography skills. This high-quality camera features a 5-axis Image Stabilisation, a 35 mm Full-frame 24.3 MP Exmor CMOS Sensor, and a Sony BIONZ X Image Processing Engine to allow you to capture detailed, crisp, and blur-free images and movies. ',
        heighlights: ['4K/HD format, High-performance Fast Hybrid AF, Phase-detection AF, The Sony full-frame advantage, BIONZ X?speed and precision (High-speed processing faithfully reproduces textures and details in real time, as seen by the naked eye), Expressive moviemaking, Pro-quality XAVC S format, Meticulous craftsmanship, Multi Frame NR (Noise Reduction), Anti-dust system and coating, Meticulously crafted controls, Time code / Clean HDMI output, Convenient tiltable LCD screen, WiFi & NFC(One-touch remote and one-touch sharing)', 'Effective Pixels: 24.3 MP', 'Sensor Type: CMOS', 'WiFi Available', 'Full HD'],
        images: ['https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/p/p/s/-original-imagg7hswkgzmjue.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/u/x/n/-original-imagg7hsfneggryj.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/h/y/i/-original-imagg7hsaewynxfu.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/8/i/i/-original-imagg7hssyr2d3ph.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/v/z/m/-original-imagg7hsvrgprdym.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/6/v/m/-original-imagg7hs8a2mcgkq.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/w/5/3/-original-imagg7hs2dxnqf5g.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/h/l/v/-original-imagg7hsh5vtrhpe.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/9/v/o/-original-imagg7hsdrwzq47j.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/s/x/g/-original-imagg7hsf8hthfck.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5jxt3k0/dslr-camera/a/w/u/-original-imagg7hsnmgchzyu.jpeg?q=70'],
        category: 'camera'
    },
    {
        title: 'Canon EOS R10 Mirrorless Camera Body with RF-S 18 - 45 mm f/4.5 - 6.3 IS STM Lens  (Black)',
        rating: '4.8',
        act_price: '92995',
        dis_price: '83229',
        discount: '10',
        offers: [('Bank Offer', '10% Instant Discount on Axis Bank Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and above'), ('Bank Offer', 'Flat ₹100 Cashback on Paytm Wallet. Min Order Value ₹1,000. Valid once per Paytm account'), ('Bank Offer', 'Flat ₹25 Instant Discount on Paytm UPI. Min Order Value ₹300. Valid once per Flipkart account'), ('Extra 5% OFF on Memory Cards when bought with Camera', 'T&C')],
        description: 'Born Explorer.Explore infinite possibilities with the lightweight EOS R10. With a new APS-C sensor on the revolutionary RF mount, you get a telephoto effect of approximately 1.6x while maintaining high resolution.A camera so versatile it can tackle virtually anything. It s the ideal travel companion. A perfect hybrid content creation tool. Your means of creative self-expression.This mirrorless camera shoots up to 23 frames per second,suitable_for-Professional,processor-DIGIC X,sensor_type-APS-C CMOS sensor with 1.6x crop factor,continuous_shooting_speed-Hi+: 11fps, Hi: 8fps, Mid: 6fps, Lo: 3fps',
        heighlights: ['4K UHD (6K oversampling) and 4K 60p, Up to 23 fps continuous shooting with AF/AE tracking, -4EV low light focusing2, YouTube live streaming, 7.5cm 1.04-million dot Vari-Angle Touchscreen, Dual Pixel CMOS AF II, 4K/30p (High quality video oversampled from 6K), 4K/60p3 (For smoother motion in video), Tilt Screen', 'Effective Pixels: 24.2 MP', 'Sensor Type: CMOS', 'WiFi Available', '4K'],
        images: ['https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/g/t/7/eos-r10-24-2-r10-canon-original-imagg4y52cybasdr.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/g/t/7/eos-r10-24-2-r10-canon-original-imagg4y52cybasdr.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/h/6/3/eos-r10-24-2-r10-canon-original-imagg4y59rd7ct4c.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/z/e/p/eos-r10-24-2-r10-canon-original-imagg4y5ffu5fc4n.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/v/2/k/eos-r10-24-2-r10-canon-original-imagg4y52ueykkgs.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/j/v/q/eos-r10-24-2-r10-canon-original-imagg4y5g6dfufza.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/6/z/f/eos-r10-24-2-r10-canon-original-imagg4y5bex5yzqa.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/s/2/z/eos-r10-24-2-r10-canon-original-imagg4y5fawpurjt.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l5fnhjk0/dslr-camera/5/m/m/eos-r10-24-2-r10-canon-original-imagg4y5ykuxf2rh.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/dslr-camera/d/e/h/-original-imaggjusqbj7rgq9.jpeg?q=70'],
        category: 'camera'
    },
    {
        title: 'Ambrane Twistand Mobile Holder',
        rating: '4.3',
        act_price: '499',
        dis_price: '99',
        discount: '80',
        offers: [('Bank Offer', '10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above'), ('Bank Offer', '10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above'), ('Bank Offer', '5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above'), ('Special Price', 'Get extra 60% off (price inclusive of cashback/coupon)')],
        description: 'Twistand is a multipurpose Mobile Phone Stand with a foldable design. It is made up of premium quality metal and has water-repellant ceramic finish. The anti-skid design with anti-skid rubber pads prevents accidental slips and protection from scratches. Its sturdy yet lightweight design gives you the freedom to carry it anywhere easily. It has an adjustable design which you can reshape according to your smartphone on the desks to give you perfect viewing angle.',
        heighlights: [],
        images: ['https://rukminim2.flixcart.com/image/128/128/l2tcfbk0/mobile-holder/s/6/r/stand-twistand-ambrane-yes-original-image2nn4mcdesyj.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l2tcfbk0/mobile-holder/f/f/j/stand-twistand-ambrane-yes-original-image2nnzvhakfzw.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l2tcfbk0/mobile-holder/g/n/o/stand-twistand-ambrane-yes-original-image2nnxqhhebxg.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l2tcfbk0/mobile-holder/k/i/i/stand-twistand-ambrane-yes-original-image2nnuaft2t5w.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/l2tcfbk0/mobile-holder/w/w/s/stand-twistand-ambrane-yes-original-image2nmqvyntznz.jpeg?q=70'],
        category: 'mobile accessories'
    },
    {
        title: 'Expro Multi-Purpose Wall Mount Smartphone . AC TV Remote and Key Chain Hanging Mobile Holder',
        rating: '4.4',
        act_price: '499',
        dis_price: '149',
        discount: '70',
        offers: [('Bank Offer', '10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above'), ('Bank Offer', '10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above'), ('Bank Offer', '5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above'), ('Special Price', 'Get at flat ₹149')],
        description: 'Multi-Purpose Wall Mount Mobile Holder | Mobile Phone Charging Stand | Self Adhesive Universal Smartphone AC TV Remote Control Storage Organizer | Pen Pencils Holder| Key Chain Hanger. EXPRO elegant “Wall Mound Mobile Phone Holder” is all in one stand to escort your mobile while charging, guard your TV and AC remote and store your pen, pencils and Keys. Each Compartment of the holder is designed from the customer’s point of view. 4 inch Cell phone compartment is designed to hold any kind of cell phone while charging. The charging wires will get into the grip slot at the bottom of the “Mobile stand holder”. There are five grip slots provided to hold different wire sizes tightly in the “Mobile stand holder” which will hold the wire grip while charging.',
        heighlights: [['MultiPurpose', 'Fresh Plastic', 'Gumming Warranty', 'Easy to Install', 'Big Size']],
        images: ['https://rukminim2.flixcart.com/image/128/128/xif0q/mobile-holder/9/w/h/sticky-pad-multi-purpose-wall-mount-smartphone-holder-ac-tv-original-imagqef5rqrktmgq.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile-holder/1/f/d/sticky-pad-multi-purpose-wall-mount-smartphone-holder-ac-tv-original-imagqef5q5jjyqfp.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile-holder/y/k/1/sticky-pad-multi-purpose-wall-mount-smartphone-holder-ac-tv-original-imagqef5cneanksj.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile-holder/g/z/h/sticky-pad-multi-purpose-wall-mount-smartphone-holder-ac-tv-original-imagqef5ztwgcfns.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile-holder/y/w/y/sticky-pad-multi-purpose-wall-mount-smartphone-holder-ac-tv-original-imagqef5bd878br4.jpeg?q=70'],
        category: 'mobile accessories'
    },
    {
        title: 'ZEBRONICS 4 Port ZEB-90HB USB Hub  (Black)',
        rating: '3.7',
        act_price: '499',
        dis_price: '159',
        discount: '68',
        offers: [('Bank Offer', '10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above'), ('Bank Offer', '10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above'), ('Bank Offer', '5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above'), ('Special Price', 'Get extra 32% off (price inclusive of cashback/coupon)')],
        description: 'Zeb-90Hb Is A Compact Usb Hub. It Has 4 Ports And Comes With An Overall Glossy Finish. Cable Length 0.4 Meter Backward Compatible Available In Black Color Country Of Origin: China',
        heighlights: ['Material: Plastic', 'Color: Black'],
        images: ['https://rukminim2.flixcart.com/image/128/128/ksgehzk0/usb-gadget/q/c/q/usb-hub-zeb-90hb-zebronics-original-imag6ymzfeyuevmt.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/ksgehzk0/usb-gadget/x/e/s/usb-hub-zeb-90hb-zebronics-original-imag6ymz9x2zjy8w.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/ksgehzk0/usb-gadget/t/j/m/usb-hub-zeb-90hb-zebronics-original-imag6ymzk2bc63wg.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/ksgehzk0/usb-gadget/v/r/2/usb-hub-zeb-90hb-zebronics-original-imag6ymzdbzfzyxc.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/ksgehzk0/usb-gadget/r/l/o/usb-hub-zeb-90hb-zebronics-original-imag6ymzftj8fsmj.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/ksgehzk0/usb-gadget/g/n/s/usb-hub-zeb-90hb-zebronics-original-imag6ymzptvatdmd.jpeg?q=70'],
        category: 'laptop accessories'
    },
    {
        title: 'Bestor 3 Port USB Hub High Speed Splitter Plug ,Data USB Hub Transfer Adapter Expansion for PC Notebook Laptop Computer Mac Linux Windows HDMI Connector, USB Charger, USB Hub  (Black)',
        rating: '4.2',
        act_price: '799',
        dis_price: '199',
        discount: '75',
        offers: [('Bank Offer', '10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above'), ('Bank Offer', '10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above'), ('Bank Offer', '5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above'), ('Special Price', 'Get at flat ₹199')],
        description: "???Look over?Designed for data transfer, not for charging on the charger, don't have enough power to charge 3 devices at the same time. Can't charge apple devices if you plug it into a USB port of your computer instead of a charger???Upgrade Version?: 2 Port upgrade to USB 2.0, speed up to 5 Gbp/s. Two downstream USB 2.0 ports speed up to 480 Mb/s, easy to use, suitable for PC, laptop, Mac and any USB enabled computers???Portable Design?: With mini size, the feature of portable can let them be carried to anywhere you want. Split your single USB port into 3, a USB interface can be extended to multiple to work independently",
        heighlights: ['Material: Aluminum', 'Pack of: 1', 'Color: Black'],
        images: ['https://rukminim2.flixcart.com/image/128/128/xif0q/usb-gadget/q/b/r/adapter-expansion-for-pc-notebook-laptop-computer-mac-linux-original-imaghgwvxh8ynsze.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/usb-gadget/n/w/d/adapter-expansion-for-pc-notebook-laptop-computer-mac-linux-original-imagzewgjvwgmyjz.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/usb-gadget/4/8/a/adapter-expansion-for-pc-notebook-laptop-computer-mac-linux-original-imagzewgreewxrzx.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/usb-gadget/t/p/m/adapter-expansion-for-pc-notebook-laptop-computer-mac-linux-original-imagzewgeghvxvp7.jpeg?q=70', 'https://rukminim2.flixcart.com/image/128/128/xif0q/usb-gadget/q/2/l/adapter-expansion-for-pc-notebook-laptop-computer-mac-linux-original-imagzewghfkzd3z8.jpeg?q=70'],
        category: 'laptop accessories'
    },
]

const createProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
})

const getAllProducts = asyncHandler(async (req, res, next) => {
    const resultPerPage = 5
    const productCount = await Product.countDocuments();
    console.log(req.query)
    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length

    apiFeature.pagination(resultPerPage)

    products = await apiFeature.query

    res.status(200).json({
        success: true,
        productCount,
        resultPerPage,
        filteredProductsCount,
        products,
    })
})

//GET : get product details
const getProductDetails = asyncHandler(async (req, res, next) => {
    const product_id = req.params.id

    let product = await Product.findById(product_id)
    if (!product) {
        return next(new ErrorHandler(`Product not found!`, 404))
    }

    let filterp = [...new Set(product.images)]
    product.images = filterp

    res.status(200).json({ success: true, product })
})


//Get: Featured products
const getFeatured = asyncHandler(async (req, res, next) => {
    const featured = await Product.find({ "featured": true })
    const deals = await Product.find({ "discount": { $gt: 50 } })
    res.status(200).json({ success: true, featured, deals })
})

module.exports = { getAllProducts, createProduct, getProductDetails, getFeatured };