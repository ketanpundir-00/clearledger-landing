'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'

const APP_URL = 'https://app.clearledger.co.in'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible) }),
      { threshold: 0.1 }
    )
    document.querySelectorAll(`.${styles.animate}`).forEach(el => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const features = [
    { icon: 'ti-building-bank', color: '#534AB7', bg: '#EEEDFE', title: 'Bank Statement Auto-Detect', desc: 'HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, BOB — messy headers, Indian comma amounts — auto-cleaned instantly.', tag: '8 Banks', href: '/bank-reconciliation' },
    { icon: 'ti-shield-check', color: '#3B6D11', bg: '#EAF3DE', title: 'GST & PAN Validation', desc: 'Flag or remove invalid GSTINs and PANs before filing. Avoid ITC rejections at source.', tag: 'ITC Safe', href: '/gst-2b-reconciliation' },
    { icon: 'ti-file-invoice', color: '#185FA5', bg: '#E6F1FB', title: 'Payslip PDF Generator', desc: 'Upload payroll Excel → 50 professional payslips in 30 seconds. PF, ESI, TDS auto-calculated.', tag: 'Bulk PDF' },
    { icon: 'ti-replace', color: '#854F0B', bg: '#FAEEDA', title: 'Narration Standardization', desc: '"UPI/CR/PHONEPE/SALARY/INFOSYS" → "UPI Credit — Infosys Ltd". Auto-categorize transactions.', tag: 'AI Powered', href: '/bank-reconciliation' },
    { icon: 'ti-arrow-right-square', color: '#0F6E56', bg: '#E1F5EE', title: 'Tally & Zoho Export', desc: 'Export in Tally XML or Zoho Books format. No reformatting — import-ready instantly.', tag: 'Zero Rework' },
    { icon: 'ti-checklist', color: '#993C1D', bg: '#FAECE7', title: 'IFSC, Mobile & Email Validate', desc: 'Validate IFSC codes, mobile numbers, and emails in bulk across any Excel sheet.', tag: 'Bulk Validate' },
  ]

  const usecases = [
    { icon: 'ti-calculator', color: '#534AB7', bg: '#EEEDFE', title: 'CA & Accountants', desc: 'Validate GST/PAN, reconcile bank statements, export to Tally — in minutes not hours.', feats: ['GST validation before filing', 'Bank statement reconciliation', 'Tally XML direct export'] },
    { icon: 'ti-users', color: '#185FA5', bg: '#E6F1FB', title: 'HR Teams', desc: 'Generate bulk payslips, validate employee PAN and mobile numbers, clean payroll data.', feats: ['Bulk payslip PDF generation', 'PAN & mobile validation', 'Payroll data cleanup'] },
    { icon: 'ti-building-store', color: '#0F6E56', bg: '#E1F5EE', title: 'SME Owners', desc: 'Clean vendor master, purchase register, and GST data before filing season.', feats: ['Vendor GSTIN cleanup', 'Invoice number validation', 'Zoho Books export'] },
    { icon: 'ti-device-laptop', color: '#854F0B', bg: '#FAEEDA', title: 'Freelancers', desc: 'Clean client data fast, standardize formats, deliver professional exports.', feats: ['Any format → clean CSV', 'PDF data extraction', 'Quick export options'] },
  ]

  const faqs = [
    { q: 'What is ClearLedger and what does it do?', a: 'ClearLedger is an Indian data cleaning tool for Excel, CSV, and PDF files. It automatically validates GST numbers, PAN numbers, IFSC codes, detects bank statement formats (HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, BOB), generates payslips in bulk, and exports data to Tally XML and Zoho Books format — without any manual configuration.' },
    { q: 'How does bank statement auto-detection work?', a: 'ClearLedger scans the file structure to identify your bank — even messy files with 5 header rows or Indian comma-formatted amounts like "1,50,000". It cleans and standardizes columns automatically. No manual mapping needed.' },
    { q: 'How many payslips can I generate at once?', a: 'All of them — in one click. Upload your payroll Excel, map the columns (Basic, HRA, DA, PF, TDS etc.), enter your company name, and download a PDF with every payslip in under a minute.' },
    { q: 'Is my financial data safe?', a: 'Yes. Files are automatically deleted after 48 hours — you see the exact deletion date when you upload. We do not share, sell, or train models on your data. All connections are HTTPS encrypted.' },
    { q: 'What file formats does ClearLedger support?', a: 'CSV, XLSX, XLS, and PDF files up to 50MB. PDFs are processed with OCR to extract tabular data. Bank statements, vendor invoices, purchase registers, payroll sheets — all supported.' },
    { q: 'Can I export to Tally or Zoho Books directly?', a: 'Yes. After cleaning, export directly in Tally XML or Zoho Books CSV format — ready to import without any reformatting. Saves hours of manual data entry every month.' },
  ]

  const beforeAfter = [
    { bad: 'HDFC file with 5 junk header rows, columns named "Col1, Col2..."', good: 'Clean table — date, description, debit, credit, balance — auto-detected' },
    { bad: 'Amount "1,50,000" splits into 3 columns because of CSV commas', good: '₹1,50,000 parsed correctly in one cell every time' },
    { bad: 'GSTIN "27AAECS4023H1Z" — wrong — ITC rejected at filing', good: 'Invalid GSTIN flagged instantly, removed with one click' },
    { bad: '50 payslips made one-by-one in Word — 4 hours of work', good: '50 PDF payslips from Excel in 30 seconds' },
    { bad: 'Narration "UPI/CR/PHONEPE/9876543210/INFOSYS" — unreadable', good: '"UPI Credit — Infosys Ltd" — clean, categorized automatically' },
    { bad: 'Bank statement vs books — matched manually row by row', good: '450 transactions matched in seconds, mismatches highlighted instantly' },
  ]

  const marqueeItems = ['GST Number Validation', 'HDFC · SBI · ICICI · Axis · Kotak · PNB · Canara · BOB', 'PAN Validation', 'Tally XML Export', 'Zoho Books Export', 'Payslip PDF Generator', 'Narration Standardization', 'IFSC Validation', 'Invoice Validation', 'PDF Data Extraction']

  return (
  <div className={styles.page}>

    {/* Schema — SEO Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            "name": "ClearLedger",
            "url": "https://clearledger.co.in",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
            "description": "Indian Excel and PDF data cleaning tool — GST validation, bank statement reconciliation, payslip generation, Tally XML export.",
            "audience": { "@type": "Audience", "audienceType": "CA firms, accountants, HR teams, SME owners" }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is ClearLedger and what does it do?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger is an Indian data cleaning tool for Excel, CSV, and PDF files. It automatically validates GST numbers, PAN numbers, IFSC codes, detects bank statement formats (HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, BOB), generates payslips in bulk, and exports data to Tally XML and Zoho Books format." } },
              { "@type": "Question", "name": "How many payslips can I generate at once?", "acceptedAnswer": { "@type": "Answer", "text": "All of them in one click. Upload your payroll Excel, map the columns, enter your company name, and download a PDF with every payslip in under a minute." } },
              { "@type": "Question", "name": "Is my financial data safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Files are automatically deleted after 48 hours. We do not share, sell, or train models on your data. All connections are HTTPS encrypted." } },
              { "@type": "Question", "name": "What file formats does ClearLedger support?", "acceptedAnswer": { "@type": "Answer", "text": "CSV, XLSX, XLS, and PDF files up to 50MB. Bank statements, vendor invoices, purchase registers, payroll sheets — all supported." } },
              { "@type": "Question", "name": "Can I export to Tally or Zoho Books directly?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Export directly in Tally XML or Zoho Books CSV format — ready to import without any reformatting." } }
            ]
          },
          {
            "@type": "WebSite",
            "name": "ClearLedger",
            "url": "https://clearledger.co.in"
          }
        ]
      })}}
    />

      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            Clear<span>Ledger</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#features">Features</a></li>
            <li><a href="#usecases">Who It&apos;s For</a></li>
            <li><a href="/gst-2b-reconciliation">GST Recon</a></li>
            <li><a href="/bank-reconciliation">Bank Recon</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href={APP_URL} className={styles.navCta}>Start Free →</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            🇮🇳 Built for Indian Businesses
          </div>
          <h1 className={styles.heroTitle}>
            Stop Wasting Hours on<br />
	    <span className={styles.gold}>Bank Reconciliation & GST Filing.</span>
          </h1>
          <p className={styles.heroSub}>
            ClearLedger cleans your Excel, CSV & PDF files in seconds —
            GST validation, bank statement auto-detect, payslip generation,
            and direct export to Tally & Zoho Books.
          </p>
          <div className={styles.heroActions}>
            <a href={APP_URL} className={styles.btnPrimary}>Clean Your First File Free →</a>
            <a href="#features" className={styles.btnSecondary}>See What It Does</a>
          </div>
          <div className={styles.heroStats}>
            {[
              { num: '5', label: 'File Formats' },
              { num: '8', label: 'Banks Auto-Detected' },
              { num: '50MB', label: 'Max File Size' },
              { num: '48 hrs', label: 'Auto Delete' },
            ].map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className={styles.problemSection} id="problem">
        <div className={styles.problemGrid}>
          <div className={`${styles.animate} ${styles.problemLeft}`}>
            <div className={styles.sectionLabel}>The Problem</div>
            <h2 className={styles.sectionTitle}>Indian data is<br />uniquely messy.</h2>
            <p className={styles.sectionSub}>Bank statements with 5 header rows. GST numbers with typos. Amounts as &quot;1,50,000&quot; that split into 3 columns. Sound familiar?</p>
            <ul className={styles.painList}>
              {[
                { icon: 'ti-clock-x', color: '#993C1D', bg: '#FAECE7', title: 'Hours wasted every month', desc: 'CA firms spend 3–4 hours manually cleaning bank statements before reconciliation can even begin.' },
                { icon: 'ti-alert-triangle', color: '#854F0B', bg: '#FAEEDA', title: 'GST & PAN errors cost money', desc: 'Invalid GSTINs in vendor data cause ITC rejections at filing — often discovered too late.' },
                { icon: 'ti-file-x', color: '#534AB7', bg: '#EEEDFE', title: 'Payslips done manually in Word', desc: 'HR teams create 50+ payslips one by one every month — repetitive, error-prone work.' },
              ].map((p, i) => (
                <li key={i} className={styles.painItem}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${p.icon}`} style={{ fontSize: '20px', color: p.color }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.animate} ${styles.beforeAfter}`}>
            <div className={styles.baHeader}>
              <div className={`${styles.baCol} ${styles.baBefore}`}>Before ClearLedger</div>
              <div className={`${styles.baCol} ${styles.baAfter}`}>After ClearLedger</div>
            </div>
            {beforeAfter.map((row, i) => (
              <div key={i} className={styles.baRow}>
                <div className={`${styles.baCell} ${styles.baBad}`}>{row.bad}</div>
                <div className={`${styles.baCell} ${styles.baGood}`}>{row.good}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER SLIDER */}
      <section style={{ padding: '3.5rem 1.5rem', background: '#f7f7fb' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <div className={styles.sectionLabel}>See It In Action</div>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '8px' }}>From raw PDF to clean data</h2>
          <p style={{ fontSize: '14px', color: '#888', marginBottom: '28px' }}>Drag the slider — or watch it move on its own</p>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.featuresHeader}>
          <div className={styles.sectionLabel}>What We Do</div>
          <h2 className={styles.sectionTitle}>Everything your data needs,<br />nothing it doesn&apos;t.</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.featureCard} ${styles.animate}`}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <i className={`ti ${f.icon}`} style={{ fontSize: '22px', color: f.color }} aria-hidden="true"></i>
              </div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
              <span className={styles.featureTag}>{f.tag}</span>
              {f.href && <a href={f.href} style={{ display:'block', marginTop:'12px', fontSize:'12px', color:'var(--gold-dark)', fontWeight:600, textDecoration:'none' }}>Learn more →</a>}
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className={styles.usecasesSection} id="usecases">
        <div className={styles.usecasesHeader}>
          <div className={styles.sectionLabel}>Who It&apos;s For</div>
          <h2 className={styles.sectionTitle}>Built for Indian finance professionals.</h2>
        </div>
        <div className={styles.usecasesGrid}>
          {usecases.map((u, i) => (
            <div key={i} className={`${styles.usecaseCard} ${styles.animate}`}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: u.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <i className={`ti ${u.icon}`} style={{ fontSize: '22px', color: u.color }} aria-hidden="true"></i>
              </div>
              <div className={styles.usecaseTitle}>{u.title}</div>
              <div className={styles.usecaseDesc}>{u.desc}</div>
              <ul className={styles.usecaseFeats}>
                {u.feats.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} id="faq">
        <div className={styles.faqHeader}>
          <div className={styles.sectionLabel}>FAQ</div>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
          <p className={styles.sectionSub}>Everything you need to know before getting started.</p>
        </div>
        <div className={styles.faqWrap}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}
                <span>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className={styles.faqA}>{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className={styles.blogSection} id="blog">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>From the Blog</div>
          <h2 className={styles.sectionTitle}>Learn from the experts</h2>
          <p className={styles.sectionSub}>Practical guides for Indian CAs, accountants, and finance teams.</p>
          <div className={styles.blogGrid}>
            {[
              { tag: 'GST & Compliance', title: 'GSTR-2B vs Books Mismatch — Complete Guide for CAs', desc: 'Every type of mismatch explained — what causes it, what ITC is at risk, and how to fix it before the filing deadline.', href: '/blog/gstr2b-vs-books-mismatch', time: '9 min read' },
              { tag: 'GST & Compliance', title: 'GST Reconciliation Errors: Why They Happen and How to Fix Them', desc: 'GST reconciliation errors cost Indian businesses crores in ITC rejections every year. Here\'s exactly why they happen and how to fix them.', href: '/blog/gst-reconciliation-errors', time: '8 min read' },
              { tag: 'Banking', title: 'Bank Statement Reconciliation in Excel — What Nobody Tells You', desc: 'Indian bank statements break standard Excel workflows. Here\'s how to handle HDFC, SBI, ICICI formats and comma amounts correctly.', href: '/blog/bank-reconciliation-excel-problems', time: '7 min read' },
              { tag: 'Payroll', title: 'How to Generate 50 Payslips in 30 Seconds from Excel', desc: 'Stop copy-pasting payslip templates one by one. Here\'s how to generate all payslips at once with correct PF, ESI, and TDS.', href: '/blog/how-to-generate-payslips-in-bulk', time: '6 min read' },
            ].map((post, i) => (
              <a key={i} href={post.href} className={styles.blogCard}>
                <span className={styles.blogTag}>{post.tag}</span>
                <h3 className={styles.blogCardTitle}>{post.title}</h3>
                <p className={styles.blogCardDesc}>{post.desc}</p>
                <span className={styles.blogReadTime}>⏱ {post.time}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaDecor} />
          <h2 className={styles.ctaTitle}>
            Start cleaning your data <span className={styles.gold}>today.</span>
          </h2>
          <p className={styles.ctaSub}>
            No credit card required. Your first file is free.<br />
            GST validation, bank statements, payslips — all in one place.
          </p>
          <a href={APP_URL} className={styles.btnPrimary} style={{ fontSize: '17px', padding: '18px 52px' }}>
            Clean My First File →
          </a>
          <div className={styles.ctaTrust}>
            {['No credit card required', 'File deleted in 48 hours', 'Made in India 🇮🇳', 'Free to start'].map((t, i) => (
              <div key={i} className={styles.trustItem}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className={styles.feedbackSection} id="feedback">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Beta Feedback</div>
          <h2 className={styles.sectionTitle}>Help us build better</h2>
          <p className={styles.sectionSub}>We're in beta — your feedback directly shapes what we build next.</p>
          <form
            className={styles.feedbackForm}
            action="https://formsubmit.co/support@clearledger.co.in"
            method="POST"
          >
            <input type="hidden" name="_subject" value="ClearLedger Beta Feedback" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className={styles.feedbackRow}>
              <div className={styles.feedbackField}>
                <label className={styles.feedbackLabel}>Your Role *</label>
                <select name="role" className={styles.feedbackInput} required>
                  <option value="">Select your role</option>
                  <option value="CA / Chartered Accountant">CA / Chartered Accountant</option>
                  <option value="Accountant">Accountant</option>
                  <option value="HR / Payroll Manager">HR / Payroll Manager</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Finance Manager">Finance Manager</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.feedbackField}>
                <label className={styles.feedbackLabel}>Feature Used *</label>
                <select name="feature" className={styles.feedbackInput} required>
                  <option value="">Which feature did you try?</option>
                  <option value="GST Reconciliation">GST Reconciliation</option>
                  <option value="Bank Statement Cleaning">Bank Statement Cleaning</option>
                  <option value="Payslip Generator">Payslip Generator</option>
                  <option value="Tally XML Export">Tally XML Export</option>
                  <option value="Zoho Books Export">Zoho Books Export</option>
                  <option value="GSTIN Validation">GSTIN Validation</option>
                </select>
              </div>
            </div>

            <div className={styles.feedbackRow}>
              <div className={styles.feedbackField}>
                <label className={styles.feedbackLabel}>How was your experience? *</label>
                <select name="experience" className={styles.feedbackInput} required>
                  <option value="">Rate your experience</option>
                  <option value="⭐⭐⭐⭐⭐ Excellent">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="⭐⭐⭐⭐ Good">⭐⭐⭐⭐ Good</option>
                  <option value="⭐⭐⭐ Average">⭐⭐⭐ Average</option>
                  <option value="⭐⭐ Poor">⭐⭐ Poor</option>
                  <option value="⭐ Very Poor">⭐ Very Poor</option>
                </select>
              </div>
            </div>

            <div className={styles.feedbackField}>
              <label className={styles.feedbackLabel}>What worked well?</label>
              <textarea name="what_worked" className={styles.feedbackTextarea} rows={3} placeholder="Tell us what you liked..." />
            </div>

            <div className={styles.feedbackField}>
              <label className={styles.feedbackLabel}>What needs improvement?</label>
              <textarea name="improvement" className={styles.feedbackTextarea} rows={3} placeholder="What was confusing, slow, or missing?" />
            </div>

            <div className={styles.feedbackField}>
              <label className={styles.feedbackLabel}>Any feature you wish existed?</label>
              <textarea name="feature_request" className={styles.feedbackTextarea} rows={2} placeholder="e.g. WhatsApp payslip delivery, auto GST filing..." />
            </div>

            <div className={styles.feedbackField}>
              <label className={styles.feedbackLabel}>Email (optional — if you want us to follow up)</label>
              <input type="email" name="email" className={styles.feedbackInput} placeholder="you@example.com" />
            </div>

            <button type="submit" className={styles.feedbackSubmit}>
              Send Feedback →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>ClearLedger</div>
          <ul className={styles.footerLinks}>
            <li><a href="/gst-2b-reconciliation">GST Reconciliation</a></li>
            <li><a href="/bank-reconciliation">Bank Reconciliation</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="mailto:support@clearledger.co.in">support@clearledger.co.in</a></li>
          </ul>
          <div className={styles.footerCopy}>© 2026 ClearLedger. All rights reserved.</div>
        </div>
      </footer>

    </div>
  )
}

const SLIDER_PAIRS = [
  { before: '/before.png', after: '/after.png', label: 'Bank Statement PDF' },
  { before: '/before2.png', after: '/after2.png', label: 'Messy Pipe-separated Data' },
]

function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const wrapRef = useRef(null)
  const clipRef = useRef(null)
  const lineRef = useRef(null)
  const afterImgRef = useRef(null)
  const animRef = useRef(null)
  const pctRef = useRef(50)
  const dirRef = useRef(1)
  const dragging = useRef(false)
  const resumeTimer = useRef(null)
  const pairTimer = useRef(null)

  const pair = SLIDER_PAIRS[activeIndex]

  function startPairTimer() {
    clearTimeout(pairTimer.current)
    pairTimer.current = setTimeout(() => {
      setActiveIndex(i => (i + 1) % SLIDER_PAIRS.length)
    }, 6000)
  }

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    function setPos(p) {
      p = Math.min(Math.max(p, 5), 95)
      pctRef.current = p
      if (clipRef.current) clipRef.current.style.width = p + '%'
      if (lineRef.current) lineRef.current.style.left = p + '%'
      if (afterImgRef.current) afterImgRef.current.style.width = wrap.offsetWidth + 'px'
    }

    function animate() {
      pctRef.current += dirRef.current * 0.35
      if (pctRef.current >= 92) dirRef.current = -1
      if (pctRef.current <= 8) dirRef.current = 1
      setPos(pctRef.current)
      animRef.current = requestAnimationFrame(animate)
    }

    function stopAuto() { cancelAnimationFrame(animRef.current) }
    function startAuto() { cancelAnimationFrame(animRef.current); animRef.current = requestAnimationFrame(animate) }

    function onDown(e) {
      dragging.current = true
      stopAuto()
      clearTimeout(resumeTimer.current)
      clearTimeout(pairTimer.current)
      const x = e.touches ? e.touches[0].clientX : e.clientX
      setPos((x - wrap.getBoundingClientRect().left) / wrap.offsetWidth * 100)
    }
    function onUp() {
      if (!dragging.current) return
      dragging.current = false
      resumeTimer.current = setTimeout(() => { startAuto(); startPairTimer() }, 1500)
    }
    function onMove(e) {
      if (!dragging.current) return
      const x = e.touches ? e.touches[0].clientX : e.clientX
      setPos((x - wrap.getBoundingClientRect().left) / wrap.offsetWidth * 100)
    }

    wrap.addEventListener('mousedown', onDown)
    wrap.addEventListener('touchstart', onDown, { passive: true })
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchend', onUp)
    document.addEventListener('mousemove', onMove)
    document.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('resize', () => setPos(pctRef.current))

    pctRef.current = 50
    dirRef.current = 1
    const initTimer = setTimeout(() => {
      setPos(50)
      startAuto()
    }, 100)
    startPairTimer()
    return () => clearTimeout(initTimer)

    return () => {
      stopAuto()
      clearTimeout(resumeTimer.current)
      clearTimeout(pairTimer.current)
      wrap.removeEventListener('mousedown', onDown)
      wrap.removeEventListener('touchstart', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('touchend', onUp)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('touchmove', onMove)
    }
  }, [activeIndex])

  return (
    <div>
      <div
        ref={wrapRef}
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '0.5px solid #e0e0e0',
          cursor: 'ew-resize',
          userSelect: 'none',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        <img
          src={pair.before}
          alt="Before"
          style={{ width: '100%', display: 'block' }}
        />
        <div
          ref={clipRef}
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', overflow: 'hidden', width: '50%' }}
        >
          <img
            ref={afterImgRef}
            src={pair.after}
            alt="After"
            style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%' }}
          />
        </div>
        <div
          ref={lineRef}
          style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'white', zIndex: 10, pointerEvents: 'none' }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '36px', height: '36px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.22)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/>
            </svg>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '10px', left: '12px', zIndex: 5, fontSize: '11px', fontWeight: 600, background: 'rgba(0,0,0,0.55)', color: 'white', padding: '2px 10px', borderRadius: '4px', pointerEvents: 'none' }}>BEFORE</div>
        <div style={{ position: 'absolute', top: '10px', right: '12px', zIndex: 5, fontSize: '11px', fontWeight: 600, background: '#6B63E6', color: 'white', padding: '2px 10px', borderRadius: '4px', pointerEvents: 'none' }}>AFTER</div>
        <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 5, background: 'rgba(0,0,0,0.45)', color: 'white', fontSize: '11px', padding: '2px 10px', borderRadius: '4px', pointerEvents: 'none', whiteSpace: 'nowrap' }}>{pair.label}</div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '14px' }}>
        {SLIDER_PAIRS.map((_, i) => (
          <button
            key={i}
            onClick={() => { clearTimeout(pairTimer.current); setActiveIndex(i) }}
            style={{
              width: activeIndex === i ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: activeIndex === i ? '#6B63E6' : '#ccc',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}