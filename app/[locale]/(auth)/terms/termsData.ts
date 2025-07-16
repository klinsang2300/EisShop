// app/terms/termsData.ts

// ไม่ต้อง import { headers } from "next/headers"; ที่นี่
// เพราะมันไม่ใช่ server component ที่ต้องการ headers ในการ render

export const termsAndConditionsData = {
    title: "Login Terms & Conditions",
    subtitle: "By logging into our system, you agree to the following terms and conditions",
    sections: [
        {
            heading: "Login Terms & Conditions",
            items: [ // ใช้ items สำหรับรายการย่อยที่เป็นข้อความ
                "Authentication: Users must provide accurate and truthful information. Unauthorized use of another person's credentials is strictly prohibited.",
                "Responsibility: Users are responsible for all activities under their account and must keep their login credentials confidential.",
                "Data Collection and Usage: By logging in, you consent to our collection and use of your personal data as outlined in our [Privacy Policy].",
                "Data Protection: We will safeguard your information in accordance with the Personal Data Protection Act B.E. 2562 (PDPA) and other applicable laws.",
                "Account Suspension or Termination: If any violation of these terms is detected, the service provider reserves the right to suspend or terminate the account without prior notice."
            ]
        },
        {
            heading: "Terms and Conditions (In-stock and Pre-order Items)",
            subsections: [ // เปลี่ยนจาก 'sections' เป็น 'subsections' ที่นี่
                {
                    heading: "In-stock Items",
                    subsections: [ // ใช้ subsections ที่นี่
                        {
                            heading: "1) Delivery Time", // แก้ไข sheading เป็น heading
                            items: [
                                "Orders will be shipped within 1-3 business days after payment confirmation",
                                "A tracking number will be provided on the shipping date"
                            ]
                        },
                        {
                            heading: "2) Payment",
                            items: [
                                "Full payment is required before shipping",
                                "Cash on Delivery (COD) is not supported",
                            ]
                        },
                        {
                            heading: "3) Returns and Exchanges",
                            items: [
                                "Returns are only accepted in case of defects or incorrect items",
                                "Customers must notify us within 2 days of receipt",
                            ]
                        }
                    ]
                },
                {
                    heading: "Pre-order Items",
                    subsections: [
                        {
                            heading: "1) Product Description & Delivery Time",
                            items: [
                                "Items are sourced from South Korea and are not in local stock",
                                "Estimated delivery: 15-30 business days, excluding holidays"
                            ]
                        },
                        {
                            heading: "2) Payment Options",
                            items: [
                                "Depending on the item, two payment types are available:",
                                "Full payment: 100% upfront",
                                "Deposit option: 50% deposit required upon order",
                                "Remaining balance must be paid before domestic shipping (you will be notified)"
                            ]
                        },
                        {
                            heading: "3) Order Cancellation & Refunds",
                            items: [
                                "Orders cannot be canceled or refunded once placed",
                                "A full refund (including deposit) will be issued if the item becomes unavailable",
                            ]
                        },
                        {
                            heading: "4) Out-of-stock Items",
                            items: [
                                "If the item is no longer available from the supplier, customers may:",
                                "Request a full refund, or",
                                "Replace the item with a product of similar value"
                            ]
                        },
                        {
                            heading: "5) Product Quality Disclaimer",
                            items: [
                                "Minor manufacturing marks (e.g., loose threads or print marks) are considered acceptable and not eligible for return"
                            ]
                        },
                        {
                            heading: "6) Pricing",
                            items: [
                                "All prices include international shipping and import duties"
                            ]
                        }
                    ]
                },
            ]
        },
        {
            heading: "General Conditions",
            items: [
                "Please verify your name and shipping address before completing payment",
                "Customers are responsible for reshipping costs due to incorrect information",
                "We are not liable for delays caused by customs clearance or third-party couriers"
            ]
        }
    ]
};