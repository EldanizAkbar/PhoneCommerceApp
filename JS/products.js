let ProductModel = function (id, name, count, price) {
    this.id = id;
    this.name = name;
    this.count = count;
    this.price = price;
};
let xiaomi = [{
        id: 1,
        name: "Xiaomi Mi 9T",
        photo: "Xiaomi Mi 9T.jpg",
        photo_1: "Xiaomi Mi 9T_1.jpg",
        photo_2: "Xiaomi Mi 9T_2.jpg",
        price: 449,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 2,
        name: "Xiaomi Mi 10",
        photo: "Xiaomi Mi 10.jpg",
        photo_1: "Xiaomi Mi 10_1.jpg",
        photo_2: "Xiaomi Mi 10_2.jpg",
        price: 999,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 3,
        name: "Xiaomi Mi Note 10",
        photo: "Xiaomi Mi Note 10 lite.jpg",
        photo_1: "Xiaomi Mi Note 10 lite_1.jpg",
        photo_2: "Xiaomi Mi Note 10 lite_2.jpg",
        price: 499,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 4,
        name: "Xiaomi Note 9 Pro",
        photo:"Xiaomi Note 9 Pro.jpg",
        photo_1: "Xiaomi Note 9 Pro_1.jpg",
        photo_2: "Xiaomi Note 9 Pro_2.jpg",
        price: 339,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 5,
        name: "Xiaomi POCO F2 Pro",
        photo: "Xiaomi POCO F2 Pro.jpeg",
        photo_1: "Xiaomi POCO F2 Pro_1.jpeg",
        photo_2: "Xiaomi POCO F2 Pro_2.jpeg",
        price: 989,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 6,
        name: "Xiaomi Redmi Note 9S",
        photo: "Xiaomi Redmi Note 9S.jpg",
        photo_1: "Xiaomi Redmi Note 9S_1.jpg",
        photo_2: "Xiaomi Redmi Note 9S_2.jpg",
        price: 329,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
    {
        id: 7,
        name: "Xiaomi Redmi 9",
        photo: "Xiaomi Redmi 9.jpg",
        photo_1: "Xiaomi Redmi 9_1.jpg",
        photo_2: "Xiaomi Redmi 9_2.jpg",
        price: 329,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
    {
        id: 1,
        name: "Xiaomi Mi 9T",
        photo: "Xiaomi Mi 9T.jpg",
        photo_1: "Xiaomi Mi 9T_1.jpg",
        photo_2: "Xiaomi Mi 9T_2.jpg",
        price: 449,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 2,
        name: "Xiaomi Mi 10",
        photo: "Xiaomi Mi 10.jpg",
        photo_1: "Xiaomi Mi 10_1.jpg",
        photo_2: "Xiaomi Mi 10_2.jpg",
        price: 999,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 3,
        name: "Xiaomi Mi Note 10",
        photo: "Xiaomi Mi Note 10 lite.jpg",
        photo_1: "Xiaomi Mi Note 10 lite_1.jpg",
        photo_2: "Xiaomi Mi Note 10 lite_2.jpg",
        price: 499,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 4,
        name: "Xiaomi Note 9 Pro",
        photo: "Xiaomi Note 9 Pro.jpg",
        photo_1: "Xiaomi Note 9 Pro_1.jpg",
        photo_2: "Xiaomi Note 9 Pro_2.jpg",

        price: 339,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 5,
        name: "Xiaomi POCO F2 Pro",
        photo: "Xiaomi POCO F2 Pro.jpeg",
        photo_1: "Xiaomi POCO F2 Pro_1.jpeg",
        photo_2: "Xiaomi POCO F2 Pro_2.jpeg",
        
        price: 989,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 6,
        name: "Xiaomi Redmi Note 9S",
        photo: "Xiaomi Redmi Note 9S.jpg",
        photo_1: "Xiaomi Redmi Note 9S_1.jpg",
        photo_2: "Xiaomi Redmi Note 9S_2.jpg",
        price: 329,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
    {
        id: 7,
        name: "Xiaomi Redmi 9",
        photo: "Xiaomi Redmi 9.jpg",
        photo_1: "Xiaomi Redmi 9_1.jpg",
        photo_2: "Xiaomi Redmi 9_2.jpg",
        price: 329,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
    {
        id: 8,
        name: "Xiaomi Mi Mix 3 5G",
        photo: "Xiaomi Mi Mix 3 5G.jpg",
        photo_1: "Xiaomi Mi Mix 3 5G_1.jpg",
        photo_2: "Xiaomi Mi Mix 3 5G_2.jpg",
        price: 789,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
    {
        id: 9,
        name: "Xiaomi Redmi 8",
        photo: "Xiaomi Redmi 8.jpg",
        photo_1: "Xiaomi Redmi 8_1.jpg",
        photo_2: "Xiaomi Redmi 8_2.jpg",
        price: 299,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
    {
        id: 10,
        name: "Xiaomi Redmi 8A",
        photo: "Xiaomi Redmi 8A.jpg",
        photo_1: "Xiaomi Redmi 8A_1.jpg",
        photo_2: "Xiaomi Redmi 8A_2.jpg",

        price: 329,
        spesifications: `    <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
    {
        id: 7,
        name: "Xiaomi Redmi 9",
        photo: "Xiaomi Redmi 9.jpg",
        photo_1: "Xiaomi Redmi 9_1.jpg",
        photo_2: "Xiaomi Redmi 9_2.jpg",
        price: 329,
        spesifications: `   <li>Brand Name: Xiaomi</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"

    },
];


let samsung = [{
        id: 11,
        name: "Samsung Galaxy A11",
        photo: "Samsung Galaxy A11.jpg",
        photo_1: "Samsung Galaxy A11_1.jpg",
        photo_2: "Samsung Galaxy A11_2.jpg",
        price: 449,
        spesifications: `   <li>Brand Name: Samsung</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                             <li>Rear Camera Quantity: 2</li>
                             <li>RAM: 3G</li>
                             <li>Cellular: WCDMA</li>
                             <li>CPU Core Quantity: Octa Core</li>
                             <li>Screen Material: LCD</li>
                             <li>Display Resolution: 2340x1080</li>

                             `,
        currency: "$"
    },
    {
        id: 12,
        name: "Samsung Galaxy A21s",
        photo: "Samsung Galaxy A21s.jpg",
        photo_1: "Samsung Galaxy A21s_1.jpg",
        photo_2: "Samsung Galaxy A21s_2.jpg",
        price: 999,
        spesifications: `   <li>Brand Name: Samsung</li>
         <li>Battery Type: Not Detachable</li>
         <li>ROM: 128G</li>
         <li>Operation System: Android</li>
         <li>Item Condition: New</li>
         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
         <li>Standby Time: Up To 150 Hours</li>
         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
         <li>Rear Camera Quantity: 2</li>
         <li>RAM: 3G</li>
         <li>Cellular: WCDMA</li>
         <li>CPU Core Quantity: Octa Core</li>
         <li>Screen Material: LCD</li>
         <li>Display Resolution: 2340x1080</li>

         `,
        currency: "$"
    },
    {
        id: 13,
        name: "Samsung Galaxy A31",
        photo: "Samsung Galaxy A31.jpg",
        photo_1: "Samsung Galaxy A31_1.jpg",
        photo_2: "Samsung Galaxy A31_2.jpg",
        price: 999,
        spesifications: `   <li>Brand Name: Samsung</li>
         <li>Battery Type: Not Detachable</li>
         <li>ROM: 128G</li>
         <li>Operation System: Android</li>
         <li>Item Condition: New</li>
         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
         <li>Standby Time: Up To 150 Hours</li>
         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
         <li>Rear Camera Quantity: 2</li>
         <li>RAM: 3G</li>
         <li>Cellular: WCDMA</li>
         <li>CPU Core Quantity: Octa Core</li>
         <li>Screen Material: LCD</li>
         <li>Display Resolution: 2340x1080</li>

         `,
        currency: "$"
    },
    {
        id: 14,
        name: "Samsung Galaxy A41",
        photo: "Samsung Galaxy A41.jpg",
        photo_1: "Samsung Galaxy A41_1.jpg",
        photo_2: "Samsung Galaxy A41_2.jpg",
        price: 769,
        spesifications: `   <li>Brand Name: Samsung</li>
         <li>Battery Type: Not Detachable</li>
         <li>ROM: 128G</li>
         <li>Operation System: Android</li>
         <li>Item Condition: New</li>
         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
         <li>Standby Time: Up To 150 Hours</li>
         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
         <li>Rear Camera Quantity: 2</li>
         <li>RAM: 3G</li>
         <li>Cellular: WCDMA</li>
         <li>CPU Core Quantity: Octa Core</li>
         <li>Screen Material: LCD</li>
         <li>Display Resolution: 2340x1080</li>

         `,
        currency: "$"
    },
    {
        id: 15,
        name: "Samsung Galaxy A71",
        photo: "Samsung Galaxy A71.jpg",
        photo_1: "Samsung Galaxy A71_1.jpg",
        photo_2: "Samsung Galaxy A71_2.jpg",
        price: 1000,
        spesifications: `   <li>Brand Name: Samsung</li>
         <li>Battery Type: Not Detachable</li>
         <li>ROM: 128G</li>
         <li>Operation System: Android</li>
         <li>Item Condition: New</li>
         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
         <li>Standby Time: Up To 150 Hours</li>
         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
         <li>Rear Camera Quantity: 2</li>
         <li>RAM: 3G</li>
         <li>Cellular: WCDMA</li>
         <li>CPU Core Quantity: Octa Core</li>
         <li>Screen Material: LCD</li>
         <li>Display Resolution: 2340x1080</li>

         `,
        currency: "$"
    },
    {
        id: 16,
        name: "Samsung Galaxy J2 Core",
        photo: "Samsung Galaxy J2 Core 2020.png",
        photo_1: "Samsung Galaxy J2 Core 2020_1.png",
        photo_2: "Samsung Galaxy J2 Core 2020_2.png",
        price: 449,
        spesifications: `    <li>Brand Name: Samsung</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: Android</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>`,
        currency: "$"

    },
    {
        id: 17,
        name: "Samsung Galaxy Note 10",
        photo: "Samsung Galaxy Note 10 Lite.jpg",
        photo_1: "Samsung Galaxy Note 10 Lite_1.jpg",
        photo_2: "Samsung Galaxy Note 10 Lite_2.jpg",
        price: 449,
        spesifications: `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"

    },
    {
        id: 18,
        name: "Samsung Galaxy S10",
        photo: "Samsung Galaxy S10 Lite.jpg",
        photo_1: "Samsung Galaxy S10 Lite_1.jpg",
        photo_2: "Samsung Galaxy S10 Lite_2.jpg",
        price: 449,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 19,
        name: "Samsung Galaxy S20",
        photo: "Samsung Galaxy S20.png",
        photo_1: "Samsung Galaxy S20_1.png",
        photo_2: "Samsung Galaxy S20_2.png",
        price: 999,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 20,
        name: "Samsung Galaxy S20 ",
        photo: "Samsung Galaxy S20 Ultra.jpg",
        photo_1: "Samsung Galaxy S20 Ultra_1.jpg",
        photo_2: "Samsung Galaxy S20 Ultra_2.jpg",
        price: 499,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 21,
        name: "Samsung Galaxy S20+",
        photo: "Samsung Galaxy S20+.png",
        photo_1: "Samsung Galaxy S20+_1.png",
        photo_2: "Samsung Galaxy S20+_2.png",
        price: 339,
        spesifications: `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 22,
        name: "Samsung Galaxy Z Flip",
        photo: "Samsung Galaxy Z Flip.jpg",
        photo_1: "Samsung Galaxy Z Flip_1.jpg",
        photo_2: "Samsung Galaxy Z Flip_2.jpg",
        price: 989,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 11,
        name: "Samsung Galaxy A11",
        photo: "Samsung Galaxy A11.jpg",
        photo_1: "Samsung Galaxy A11_1.jpg",
        photo_2: "Samsung Galaxy A11_2.jpg",
        price: 449,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 12,
        name: "Samsung Galaxy A21s",
        photo: "Samsung Galaxy A21s.jpg",
        photo_1: "Samsung Galaxy A21s_1.jpg",
        photo_2: "Samsung Galaxy A21s_2.jpg",
        price: 999,
        spesifications: `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 13,
        name: "Samsung Galaxy A31",
        photo: "Samsung Galaxy A31.jpg",
        photo_1: "Samsung Galaxy A31_1.jpg",
        photo_2: "Samsung Galaxy A31_2.jpg",
        price: 999,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 14,
        name: "Samsung Galaxy A41",
        photo: "Samsung Galaxy A41.jpg",
        photo_1: "Samsung Galaxy A41_1.jpg",
        photo_2: "Samsung Galaxy A41_2.jpg",
        price: 769,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 15,
        name: "Samsung Galaxy A71",
        photo: "Samsung Galaxy A71.jpg",
        photo_1: "Samsung Galaxy A71_1.jpg",
        photo_2: "Samsung Galaxy A71_2.jpg",
        price: 1000,
        spesifications: `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"
    },
    {
        id: 16,
        name: "Samsung Galaxy J2 Core",
        photo: "Samsung Galaxy J2 Core 2020.png",
        photo_1: "Samsung Galaxy J2 Core 2020_1.png",
        photo_2: "Samsung Galaxy J2 Core 2020_2.png",
        price: 449,
        spesifications:  `   <li>Brand Name: Samsung</li>
        <li>Battery Type: Not Detachable</li>
        <li>ROM: 128G</li>
        <li>Operation System: Android</li>
        <li>Item Condition: New</li>
        <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
        <li>Standby Time: Up To 150 Hours</li>
        <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
        <li>Rear Camera Quantity: 2</li>
        <li>RAM: 3G</li>
        <li>Cellular: WCDMA</li>
        <li>CPU Core Quantity: Octa Core</li>
        <li>Screen Material: LCD</li>
        <li>Display Resolution: 2340x1080</li>

        `,
        currency: "$"

    },
];

let iPhone = [{
    
        id: 23,
        name: "iPhone 11 Pro Max",
        photo: "iPhone 11 Pro Max.jpg",
        photo_1: "iPhone 11 Pro Max_1.jpg",
        photo_2: "iPhone 11 Pro Max_2.jpg",
        price: 769,
        spesifications: `   <li>Brand Name: iPhone</li>
         <li>Battery Type: Not Detachable</li>
         <li>ROM: 128G</li>
         <li>Operation System: IOS</li>
         <li>Item Condition: New</li>
         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
         <li>Standby Time: Up To 150 Hours</li>
         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
         <li>Rear Camera Quantity: 2</li>
         <li>RAM: 3G</li>
         <li>Cellular: WCDMA</li>
         <li>CPU Core Quantity: Octa Core</li>
         <li>Screen Material: LCD</li>
         <li>Display Resolution: 2340x1080</li>
    
         `,
        currency: "$"
    },
    {
        id: 24,
        name: "iPhone XR",
        photo: "XR.jpg",
        photo_1: "iPhone XR_1.png",
        photo_2: "iPhone XR_2.jpg",
        price: 1000,
        spesifications: `   <li>Brand Name: iPhone</li>
         <li>Battery Type: Not Detachable</li>
         <li>ROM: 128G</li>
         <li>Operation System: IOS</li>
         <li>Item Condition: New</li>
         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
         <li>Standby Time: Up To 150 Hours</li>
         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
         <li>Rear Camera Quantity: 2</li>
         <li>RAM: 3G</li>
         <li>Cellular: WCDMA</li>
         <li>CPU Core Quantity: Octa Core</li>
         <li>Screen Material: LCD</li>
         <li>Display Resolution: 2340x1080</li>
    
         `,
        currency: "$"
    },
    {
        id: 25,
        name: "iPhone SE",
        photo: "iPhone SE.png",
        photo_1: "iPhone SE_1.jpg",
        photo_2: "iPhone SE_2.jpg",
        price: 449,
        spesifications: `    <li>Brand Name: iPhone</li>
                             <li>Battery Type: Not Detachable</li>
                             <li>ROM: 128G</li>
                             <li>Operation System: IOS</li>
                             <li>Item Condition: New</li>
                             <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                             <li>Standby Time: Up To 150 Hours</li>
                             <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>`,
        currency: "$"
    
    },
    {
    id: 26,
    name: "iPhone 8 plus",
    photo: "iPhone 8 plus.jpg",
    photo_1: "iPhone 8 plus_1.jpg",
    photo_2: "iPhone 8 plus_2.jpg",
    price: 449,
    spesifications: `   <li>Brand Name: iPhone</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: IOS</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                         <li>Rear Camera Quantity: 2</li>
                         <li>RAM: 3G</li>
                         <li>Cellular: WCDMA</li>
                         <li>CPU Core Quantity: Octa Core</li>
                         <li>Screen Material: LCD</li>
                         <li>Display Resolution: 2340x1080</li>

                         `,
    currency: "$"
},
{
    id: 27,
    name: "iPhone 11",
    photo: "iPhone 11.jpg",
    photo_1: "iPhone 11_1.jpg",
    photo_2: "iPhone 11_2.jpg",
    price: 999,
    spesifications: `   <li>Brand Name: iPhone</li>
     <li>Battery Type: Not Detachable</li>
     <li>ROM: 128G</li>
     <li>Operation System: IOS</li>
     <li>Item Condition: New</li>
     <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
     <li>Standby Time: Up To 150 Hours</li>
     <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
     <li>Rear Camera Quantity: 2</li>
     <li>RAM: 3G</li>
     <li>Cellular: WCDMA</li>
     <li>CPU Core Quantity: Octa Core</li>
     <li>Screen Material: LCD</li>
     <li>Display Resolution: 2340x1080</li>

     `,
    currency: "$"
},
{
    id: 28,
    name: "iPhone 11 Pro",
    photo: "iPhone 11 Pro.jpg",
    photo_1: "iPhone 11 Pro_1.jpg",
    photo_2: "iPhone 11 Pro_2.jpg",
    price: 999,
    spesifications: `   <li>Brand Name: iPhone</li>
     <li>Battery Type: Not Detachable</li>
     <li>ROM: 128G</li>
     <li>Operation System: IOS</li>
     <li>Item Condition: New</li>
     <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
     <li>Standby Time: Up To 150 Hours</li>
     <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
     <li>Rear Camera Quantity: 2</li>
     <li>RAM: 3G</li>
     <li>Cellular: WCDMA</li>
     <li>CPU Core Quantity: Octa Core</li>
     <li>Screen Material: LCD</li>
     <li>Display Resolution: 2340x1080</li>

     `,
    currency: "$"
},

{
    id: 29,
    name: "iPhone Xs",
    photo: "iPhone Xs.jpg",
    photo_1: "iPhone Xs_1.jpg",
    photo_2: "iPhone Xs_2.jpg",
    price: 449,
    spesifications: `   <li>Brand Name: iPhone</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: IOS</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"

},
{
    id: 30,
    name: "iPhone 11 green",
    photo: "iPhone 11 green.jpg",
    photo_1: "iPhone 11 green_1.jpg",
    photo_2: "iPhone 11 green_2.jpg",
    price: 449,
    spesifications:  `   <li>Brand Name: iPhone</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: IOS</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"
},
{
    id: 26,
    name: "iPhone 8 plus",
    photo: "iPhone 8 plus.jpg",
    photo_1: "iPhone 8 plus_1.jpg",
    photo_2: "iPhone 8 plus_2.jpg",
    price: 449,
    spesifications: `   <li>Brand Name: iPhone</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: IOS</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                         <li>Rear Camera Quantity: 2</li>
                         <li>RAM: 3G</li>
                         <li>Cellular: WCDMA</li>
                         <li>CPU Core Quantity: Octa Core</li>
                         <li>Screen Material: LCD</li>
                         <li>Display Resolution: 2340x1080</li>

                         `,
    currency: "$"
},
{
    id: 27,
    name: "iPhone 11",
    photo: "iPhone 11.jpg",
    photo_1: "iPhone 11_1.jpg",
    photo_2: "iPhone 11_2.jpg",
    price: 999,
    spesifications: `   <li>Brand Name: iPhone</li>
     <li>Battery Type: Not Detachable</li>
     <li>ROM: 128G</li>
     <li>Operation System: IOS</li>
     <li>Item Condition: New</li>
     <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
     <li>Standby Time: Up To 150 Hours</li>
     <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
     <li>Rear Camera Quantity: 2</li>
     <li>RAM: 3G</li>
     <li>Cellular: WCDMA</li>
     <li>CPU Core Quantity: Octa Core</li>
     <li>Screen Material: LCD</li>
     <li>Display Resolution: 2340x1080</li>

     `,
    currency: "$"
},
{
    id: 28,
    name: "iPhone 11 Pro",
    photo: "iPhone 11 Pro.jpg",
    photo_1: "iPhone 11 Pro_1.jpg",
    photo_2: "iPhone 11 Pro_2.jpg",
    price: 999,
    spesifications: `   <li>Brand Name: iPhone</li>
     <li>Battery Type: Not Detachable</li>
     <li>ROM: 128G</li>
     <li>Operation System: IOS</li>
     <li>Item Condition: New</li>
     <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
     <li>Standby Time: Up To 150 Hours</li>
     <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
     <li>Rear Camera Quantity: 2</li>
     <li>RAM: 3G</li>
     <li>Cellular: WCDMA</li>
     <li>CPU Core Quantity: Octa Core</li>
     <li>Screen Material: LCD</li>
     <li>Display Resolution: 2340x1080</li>

     `,
    currency: "$"
},
{
    id: 23,
    name: "iPhone 11 Pro Max",
    photo: "iPhone 11 Pro Max.jpg",
    photo_1: "iPhone 11 Pro Max_1.jpg",
    photo_2: "iPhone 11 Pro Max_2.jpg",
    price: 769,
    spesifications: `   <li>Brand Name: iPhone</li>
     <li>Battery Type: Not Detachable</li>
     <li>ROM: 128G</li>
     <li>Operation System: IOS</li>
     <li>Item Condition: New</li>
     <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
     <li>Standby Time: Up To 150 Hours</li>
     <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
     <li>Rear Camera Quantity: 2</li>
     <li>RAM: 3G</li>
     <li>Cellular: WCDMA</li>
     <li>CPU Core Quantity: Octa Core</li>
     <li>Screen Material: LCD</li>
     <li>Display Resolution: 2340x1080</li>

     `,
    currency: "$"
},
{
    id: 24,
    name: "iPhone XR",
    photo: "XR.jpg",
    photo_1: "iPhone XR_1.png",
    photo_2: "iPhone XR_2.jpg",
    price: 1000,
    spesifications: `   <li>Brand Name: iPhone</li>
     <li>Battery Type: Not Detachable</li>
     <li>ROM: 128G</li>
     <li>Operation System: IOS</li>
     <li>Item Condition: New</li>
     <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
     <li>Standby Time: Up To 150 Hours</li>
     <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
     <li>Rear Camera Quantity: 2</li>
     <li>RAM: 3G</li>
     <li>Cellular: WCDMA</li>
     <li>CPU Core Quantity: Octa Core</li>
     <li>Screen Material: LCD</li>
     <li>Display Resolution: 2340x1080</li>

     `,
    currency: "$"
},
{
    id: 25,
    name: "iPhone SE",
    photo: "iPhone SE.png",
    photo_1: "iPhone SE_1.jpg",
    photo_2: "iPhone SE_2.jpg",
    price: 449,
    spesifications: `    <li>Brand Name: iPhone</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: IOS</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>`,
    currency: "$"

},
{
    id: 29,
    name: "iPhone Xs",
    photo: "iPhone Xs.jpg",
    photo_1: "iPhone Xs_1.jpg",
    photo_2: "iPhone Xs_2.jpg",
    price: 449,
    spesifications: `   <li>Brand Name: iPhone</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: IOS</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"

},
{
    id: 30,
    name: "iPhone 11 green",
    photo: "iPhone 11 green.jpg",
    photo_1: "iPhone 11 green_1.jpg",
    photo_2: "iPhone 11 green_2.jpg",
    price: 449,
    spesifications:  `   <li>Brand Name: iPhone</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: IOS</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"
},
{
    id: 26,
    name: "iPhone 8 plus",
    photo: "iPhone 8 plus.jpg",
    photo_1: "iPhone 8 plus_1.jpg",
    photo_2: "iPhone 8 plus_2.jpg",
    price: 449,
    spesifications: `   <li>Brand Name: iPhone</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: IOS</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                         <li>Rear Camera Quantity: 2</li>
                         <li>RAM: 3G</li>
                         <li>Cellular: WCDMA</li>
                         <li>CPU Core Quantity: Octa Core</li>
                         <li>Screen Material: LCD</li>
                         <li>Display Resolution: 2340x1080</li>

                         `,
    currency: "$"
},
{
    id: 27,
    name: "iPhone 11",
    photo: "iPhone 11.jpg",
    photo_1: "iPhone 11_1.jpg",
    photo_2: "iPhone 11_2.jpg",
    price: 999,
    spesifications: `   <li>Brand Name: iPhone</li>
     <li>Battery Type: Not Detachable</li>
     <li>ROM: 128G</li>
     <li>Operation System: IOS</li>
     <li>Item Condition: New</li>
     <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
     <li>Standby Time: Up To 150 Hours</li>
     <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
     <li>Rear Camera Quantity: 2</li>
     <li>RAM: 3G</li>
     <li>Cellular: WCDMA</li>
     <li>CPU Core Quantity: Octa Core</li>
     <li>Screen Material: LCD</li>
     <li>Display Resolution: 2340x1080</li>

     `,
    currency: "$"
},
];




let mixed =[{
    id: 4,
    name: "Xiaomi Note 9 Pro",
    photo:"Xiaomi Note 9 Pro.jpg",
    photo_1: "Xiaomi Note 9 Pro_1.jpg",
    photo_2: "Xiaomi Note 9 Pro_2.jpg",
    price: 339,
    spesifications: `    <li>Brand Name: Xiaomi</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: Android</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                         <li>Rear Camera Quantity: 2</li>
                         <li>RAM: 3G</li>
                         <li>Cellular: WCDMA</li>
                         <li>CPU Core Quantity: Octa Core</li>
                         <li>Screen Material: LCD</li>
                         <li>Display Resolution: 2340x1080</li>

                         `,
    currency: "$"
},
{
    id: 5,
    name: "Xiaomi POCO F2 Pro",
    photo: "Xiaomi POCO F2 Pro.jpeg",
    photo_1: "Xiaomi POCO F2 Pro_1.jpeg",
    photo_2: "Xiaomi POCO F2 Pro_2.jpeg",
    price: 989,
    spesifications: `    <li>Brand Name: Xiaomi</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: Android</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                         <li>Rear Camera Quantity: 2</li>
                         <li>RAM: 3G</li>
                         <li>Cellular: WCDMA</li>
                         <li>CPU Core Quantity: Octa Core</li>
                         <li>Screen Material: LCD</li>
                         <li>Display Resolution: 2340x1080</li>

                         `,
    currency: "$"
},
{
    id: 13,
    name: "Samsung Galaxy A31",
    photo: "Samsung Galaxy A31.jpg",
    photo_1: "Samsung Galaxy A31_1.jpg",
    photo_2: "Samsung Galaxy A31_2.jpg",
    price: 999,
    spesifications:  `   <li>Brand Name: Samsung</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: Android</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"
},
{
    id: 14,
    name: "Samsung Galaxy A41",
    photo: "Samsung Galaxy A41.jpg",
    photo_1: "Samsung Galaxy A41_1.jpg",
    photo_2: "Samsung Galaxy A41_2.jpg",
    price: 769,
    spesifications:  `   <li>Brand Name: Samsung</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: Android</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"
},
{
    id: 15,
    name: "Samsung Galaxy A71",
    photo: "Samsung Galaxy A71.jpg",
    photo_1: "Samsung Galaxy A71_1.jpg",
    photo_2: "Samsung Galaxy A71_2.jpg",
    price: 1000,
    spesifications: `   <li>Brand Name: Samsung</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: Android</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"
},
{
    id: 16,
    name: "Samsung Galaxy J2 Core",
    photo: "Samsung Galaxy J2 Core 2020.png",
    photo_1: "Samsung Galaxy J2 Core 2020_1.png",
    photo_2: "Samsung Galaxy J2 Core 2020_2.png",
    price: 449,
    spesifications:  `   <li>Brand Name: Samsung</li>
    <li>Battery Type: Not Detachable</li>
    <li>ROM: 128G</li>
    <li>Operation System: Android</li>
    <li>Item Condition: New</li>
    <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
    <li>Standby Time: Up To 150 Hours</li>
    <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
    <li>Rear Camera Quantity: 2</li>
    <li>RAM: 3G</li>
    <li>Cellular: WCDMA</li>
    <li>CPU Core Quantity: Octa Core</li>
    <li>Screen Material: LCD</li>
    <li>Display Resolution: 2340x1080</li>

    `,
    currency: "$"
},
{
    id: 6,
    name: "Xiaomi Redmi Note 9S",
    photo: "Xiaomi Redmi Note 9S.jpg",
    photo_1: "Xiaomi Redmi Note 9S_1.jpg",
    photo_2: "Xiaomi Redmi Note 9S_2.jpg",
    price: 329,
    spesifications: `    <li>Brand Name: Xiaomi</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: Android</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                         <li>Rear Camera Quantity: 2</li>
                         <li>RAM: 3G</li>
                         <li>Cellular: WCDMA</li>
                         <li>CPU Core Quantity: Octa Core</li>
                         <li>Screen Material: LCD</li>
                         <li>Display Resolution: 2340x1080</li>

                         `,
    currency: "$"

},
{
    id: 7,
    name: "Xiaomi Redmi 9",
    photo: "Xiaomi Redmi 9.jpg",
    photo_1: "Xiaomi Redmi 9_1.jpg",
    photo_2: "Xiaomi Redmi 9_2.jpg",
    price: 329,
    spesifications: `    <li>Brand Name: Xiaomi</li>
                         <li>Battery Type: Not Detachable</li>
                         <li>ROM: 128G</li>
                         <li>Operation System: Android</li>
                         <li>Item Condition: New</li>
                         <li>Biometrics Technology: In-Screen Fingerprint Recognition</li>
                         <li>Standby Time: Up To 150 Hours</li>
                         <li>Camera Pixel: 12MPRear Camera Pixel: ≈64MP</li>
                         <li>Rear Camera Quantity: 2</li>
                         <li>RAM: 3G</li>
                         <li>Cellular: WCDMA</li>
                         <li>CPU Core Quantity: Octa Core</li>
                         <li>Screen Material: LCD</li>
                         <li>Display Resolution: 2340x1080</li>

                         `,
    currency: "$"

}]

function change_xiaomi(){
    products = xiaomi;
     T = products;
}
function change_samsung(){
    products = samsung;
     T = products;
}
function change_iPhone(){
    products = iPhone;
     T = products;
}

