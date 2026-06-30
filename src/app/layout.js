import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500', '600'],
})

export const metadata = {
  title: 'ClearLedger — Clean Messy Financial Data in Seconds | Made for Indian Businesses',
  icons: {
    icon: '/ClearLedger_logo.png',
  },
  description: 'ClearLedger cleans Excel, CSV & PDF data for Indian businesses. GST validation, PAN validation, bank statement auto-detect (HDFC, SBI, ICICI, Axis, Kotak), payslip generation, Tally XML & Zoho Books export.',
  keywords: 'GST validation tool, clean bank statement Excel, Indian accounting data cleaner, payslip generator India, Tally XML export, Zoho Books export, HDFC statement cleaner, PAN number validation',
  openGraph: {
    title: 'ClearLedger — Clean Messy Financial Data in Seconds',
    description: 'GST validation, bank statement auto-detect, payslip generation & Tally export — built for Indian CAs, HR teams and SMEs.',
    url: 'https://clearledger.co.in',
    siteName: 'ClearLedger',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClearLedger — Clean Messy Financial Data',
    description: 'GST validation, bank statement cleanup, payslip generation for Indian businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://clearledger.co.in',
  },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ClearLedger",
  "applicationCategory": "BusinessApplication",
  "description": "ClearLedger cleans messy Excel, CSV and PDF financial data for Indian businesses. Features include GST validation, PAN validation, bank statement auto-detection for HDFC, SBI, ICICI, Axis and Kotak, payslip PDF generation, and export to Tally XML and Zoho Books.",
  "url": "https://clearledger.co.in",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
  "inLanguage": "en-IN",
  "audience": { "@type": "Audience", "audienceType": "Accountants, CA firms, HR teams, SME owners, Freelancers" }
}

const schemaOrg2 = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClearLedger",
  "url": "https://clearledger.co.in",
  "contactPoint": { "@type": "ContactPoint", "email": "support@clearledger.co.in", "contactType": "customer support" },
  "sameAs": ["https://linkedin.com/company/clearledger", "https://twitter.com/clearledger"]
}

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is ClearLedger?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger is an Indian data cleaning tool for Excel, CSV, and PDF files. It automatically validates GST numbers, PAN numbers, IFSC codes, detects bank statement formats (HDFC, SBI, ICICI, Axis, Kotak), generates payslips in bulk, and exports data to Tally XML and Zoho Books format." } },
    { "@type": "Question", "name": "How does bank statement auto-detection work in ClearLedger?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger automatically identifies your bank from the file structure — even messy files with 5 header rows or Indian comma-formatted amounts like 1,50,000. It cleans columns automatically without any manual configuration." } },
    { "@type": "Question", "name": "Is my financial data safe on ClearLedger?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Files are automatically deleted after 5 days. ClearLedger does not share, sell, or train models on your data. All connections are encrypted via HTTPS." } },
    { "@type": "Question", "name": "Can ClearLedger export to Tally or Zoho Books?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. After cleaning your data, you can export in Tally XML format or Zoho Books CSV format, ready to import without any reformatting." } },
    { "@type": "Question", "name": "How many payslips can I generate at once?", "acceptedAnswer": { "@type": "Answer", "text": "You can generate payslips for all employees in your Excel file in one click. Upload your payroll sheet, map columns like Basic, HRA, DA, PF, TDS, and download a PDF with all payslips in under a minute." } }
  ]
}

const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ClearLedger",
  "url": "https://clearledger.co.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://clearledger.co.in/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg2) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
