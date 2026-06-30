'use client'
import { useState, useEffect, useRef } from 'react'
import styles from '../page.module.css'

const APP_URL = 'https://app.clearledger.co.in'
const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is GSTR-2B reconciliation?",
      "acceptedAnswer": { "@type": "Answer", "text": "GSTR-2B reconciliation is the process of matching your purchase register (books) with the auto-populated GSTR-2B statement provided by GSTN. Any mismatch means your ITC claim may be rejected during GST filing." }
    },
    {
      "@type": "Question",
      "name": "How does ClearLedger GST 2B reconciliation work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your GSTR-2B CSV and Purchase Register CSV. ClearLedger automatically matches invoices by GSTIN and invoice number, flags mismatches, detects duplicates, identifies missing entries, and calculates ITC at risk — all in under a minute." }
    },
    {
      "@type": "Question",
      "name": "What types of mismatches does ClearLedger detect?",
      "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger detects: invoices in purchase register not in GSTR-2B, invoices in GSTR-2B not in books, taxable amount mismatches, GST amount mismatches, duplicate invoice entries, and possible OCR errors in GSTIN or invoice numbers." }
    },
    {
      "@type": "Question",
      "name": "What is ITC at risk in GST reconciliation?",
      "acceptedAnswer": { "@type": "Answer", "text": "ITC at risk is the Input Tax Credit amount that may be rejected because the corresponding invoice is either missing in GSTR-2B, has a mismatch, or has an invalid GSTIN. ClearLedger calculates this automatically." }
    },
    {
      "@type": "Question",
      "name": "Can I download the GST reconciliation report as PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After reconciliation, ClearLedger generates a professional PDF report showing matched invoices, mismatches, ITC at risk, duplicate entries, and recommended actions — ready to share with clients." }
    },
    {
      "@type": "Question",
      "name": "Is my GST data safe on ClearLedger?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your files are automatically deleted after 48 hours. ClearLedger does not share, sell, or train AI models on your financial data. All connections are HTTPS encrypted." }
    },
  ]
}

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ClearLedger GST 2B Reconciliation",
  "applicationCategory": "BusinessApplication",
  "description": "Automated GSTR-2B reconciliation tool for Indian CAs and accountants. Matches purchase register with GSTR-2B, detects ITC mismatches, duplicate invoices, and generates PDF reports.",
  "url": "https://clearledger.co.in/gst-2b-reconciliation",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
  "inLanguage": "en-IN",
  "audience": { "@type": "Audience", "audienceType": "Chartered Accountants, Accountants, GST Practitioners, CA Firms" }
}

export default function GstReconciliationPage() {
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

  const steps = [
    { num: '01', title: 'Upload Both Files', desc: 'Upload your GSTR-2B CSV and Purchase Register CSV. ClearLedger auto-detects columns — no manual mapping needed.' },
    { num: '02', title: 'Auto Reconciliation', desc: 'Our engine matches invoices by GSTIN + invoice number, detects amount differences, duplicates, and missing entries.' },
    { num: '03', title: 'Review Results', desc: 'See matched invoices, mismatches, ITC at risk, and duplicate alerts — all in one clean dashboard.' },
    { num: '04', title: 'Download PDF Report', desc: 'Get a professional CA-ready PDF report with all findings. Share with clients or use for filing corrections.' },
  ]

  const features = [
    { icon: 'ti-git-merge', color: '#3B6D11', bg: '#EAF3DE', title: 'Exact & Fuzzy Invoice Matching', desc: 'Matches INV001 with INV-001 automatically. Handles invoice number format differences that would otherwise cause false mismatches.', tag: 'Smart Match' },
    { icon: 'ti-copy', color: '#534AB7', bg: '#EEEDFE', title: 'Duplicate Invoice Detection', desc: 'Flags duplicate invoice entries in your purchase register before filing — preventing erroneous double ITC claims.', tag: 'ITC Safe' },
    { icon: 'ti-alert-triangle', color: '#854F0B', bg: '#FAEEDA', title: 'GST Amount Mismatch', desc: 'Detects taxable amount and IGST/CGST/SGST differences between your books and GSTR-2B — per invoice.', tag: 'Amount Level' },
    { icon: 'ti-file-invoice', color: '#185FA5', bg: '#E6F1FB', title: 'PDF Report Generation', desc: 'Professional reconciliation report with matched invoices, mismatches, ITC at risk summary, and recommended actions.', tag: 'CA Ready' },
    { icon: 'ti-scan', color: '#993C1D', bg: '#FAECE7', title: 'OCR Error Detection', desc: 'Flags invoices where GSTIN appears blank or malformed — likely OCR/scan errors from physical invoice digitization.', tag: 'Auto Flag' },
    { icon: 'ti-currency-rupee', color: '#0F6E56', bg: '#E1F5EE', title: 'ITC at Risk Calculation', desc: 'Automatically calculates total ITC at risk from unmatched invoices — so you know exactly what needs to be corrected.', tag: 'Instant' },
  ]
  const mismatches = [
    { type: 'In Purchase, Not in 2B', icon: 'ti-circle-x', color: '#A32D2D', bg: '#FCEBEB', desc: 'Invoice is in your books but vendor has not filed GSTR-1. ITC cannot be claimed.', action: 'Contact vendor to file GSTR-1' },
    { type: 'In 2B, Not in Books', icon: 'ti-circle-plus', color: '#854F0B', bg: '#FAEEDA', desc: 'Invoice is in GSTR-2B but missing from your purchase register. Possible missed entry.', action: 'Verify and add to purchase register' },
    { type: 'Amount Mismatch', icon: 'ti-alert-triangle', color: '#185FA5', bg: '#E6F1FB', desc: 'Invoice found in both but taxable amount or GST differs. Partial ITC at risk.', action: 'Match with original invoice and correct' },
    { type: 'Duplicate Invoice', icon: 'ti-copy', color: '#534AB7', bg: '#EEEDFE', desc: 'Same invoice entered twice in purchase register. Double ITC claim risk.', action: 'Remove duplicate before filing' },
    { type: 'OCR / GSTIN Error', icon: 'ti-scan', color: '#993C1D', bg: '#FAECE7', desc: 'GSTIN is blank or invalid — likely a scan error. Invoice cannot be matched.', action: 'Check original invoice for correct GSTIN' },
  ]
  const faqs = [
    { q: 'What is GSTR-2B reconciliation?', a: 'GSTR-2B reconciliation is the process of matching your purchase register (books) with the auto-populated GSTR-2B statement from GSTN. Any mismatch means your ITC claim may be rejected during GST filing. It must be done every month before filing GSTR-3B.' },
    { q: 'How does ClearLedger GST 2B reconciliation work?', a: 'Upload your GSTR-2B CSV and Purchase Register CSV. ClearLedger automatically matches invoices by GSTIN and invoice number, flags mismatches, detects duplicates, identifies missing entries, and calculates total ITC at risk — in under a minute.' },
    { q: 'What types of mismatches does ClearLedger detect?', a: 'ClearLedger detects: invoices in purchase register not in GSTR-2B, invoices in GSTR-2B not in books, taxable amount mismatches, GST amount mismatches (IGST/CGST/SGST), duplicate invoice entries, and possible OCR errors in GSTIN or invoice numbers.' },
    { q: 'What is ITC at risk in GST reconciliation?', a: 'ITC at risk is the Input Tax Credit amount that may be rejected because the corresponding invoice is missing in GSTR-2B, has a mismatch, or has an invalid GSTIN. ClearLedger calculates this automatically so you know the exact impact before filing.' },
    { q: 'Can I download the reconciliation report as PDF?', a: 'Yes. After reconciliation, ClearLedger generates a professional PDF report showing matched invoices, mismatches, ITC at risk, duplicate entries, and recommended actions — ready to share with clients or keep for records.' },
    { q: 'Is my GST data safe?', a: 'Yes. Files are automatically deleted after 48 hours — you see the exact deletion date when you upload. We do not share, sell, or train models on your data. All connections are HTTPS encrypted.' },
  ]

  return (
    <div className={styles.page}>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }} />

      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navInner}>
          <a href="/" className={styles.logo}>Clear<span>Ledger</span></a>
          <ul className={styles.navLinks}>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#usecases">Who It&apos;s For</a></li>
            <li><a href="/blog/gstr2b-vs-books-mismatch">Blog</a></li>
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
            GST Reconciliation Tool for Indian CAs
          </div>
          <h1 className={styles.heroTitle}>
            GSTR-2B Reconciliation<br />
            in <span className={styles.gold}>Minutes, Not Hours.</span>
          </h1>
          <p className={styles.heroSub}>
            Upload your GSTR-2B and Purchase Register. ClearLedger automatically matches invoices,
            flags ITC mismatches, detects duplicates, and generates a PDF report — ready before your filing deadline.
          </p>
          <div className={styles.heroActions}>
            <a href={APP_URL} className={styles.btnPrimary}>Reconcile Free →</a>
            <a href="#how-it-works" className={styles.btnSecondary}>See How It Works</a>
          </div>
          <div className={styles.heroStats}>
            {[
              { num: '5 min', label: 'Avg. Reconciliation Time' },
              { num: '6', label: 'Mismatch Types Detected' },
              { num: '100%', label: 'Automated Matching' },
              { num: '48 hrs', label: 'Auto File Delete' },
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
          {[...['GSTIN Matching', 'Invoice Number Fuzzy Match', 'ITC at Risk Calculation', 'Duplicate Detection', 'Amount Mismatch', 'OCR Error Flagging', 'PDF Report', 'Missing Invoice Detection', 'IGST CGST SGST Split', 'CA Ready Output'],
            ...['GSTIN Matching', 'Invoice Number Fuzzy Match', 'ITC at Risk Calculation', 'Duplicate Detection', 'Amount Mismatch', 'OCR Error Flagging', 'PDF Report', 'Missing Invoice Detection', 'IGST CGST SGST Split', 'CA Ready Output']
          ].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className={styles.problemSection}>
        <div className={styles.problemGrid}>
          <div className={`${styles.animate} ${styles.problemLeft}`}>
            <div className={styles.sectionLabel}>The Problem</div>
            <h2 className={styles.sectionTitle}>GST reconciliation is<br />tedious and error-prone.</h2>
            <p className={styles.sectionSub}>Every month, CAs manually compare GSTR-2B with purchase registers in Excel — row by row — looking for mismatches that could cost their clients crores in ITC rejections.</p>
            <ul className={styles.painList}>
              {[
                { icon: 'ti-clock-x', color: '#993C1D', bg: '#FAECE7', title: '3–4 hours per client every month', desc: 'Manual VLOOKUP matching in Excel across hundreds of invoices — before reconciliation can even begin.' },
                { icon: 'ti-alert-triangle', color: '#854F0B', bg: '#FAEEDA', title: 'Missed mismatches = ITC rejection', desc: 'A single unmatched invoice or amount difference can trigger ITC rejection during GSTR-3B scrutiny.' },
                { icon: 'ti-copy', color: '#534AB7', bg: '#EEEDFE', title: 'Duplicate invoices go unnoticed', desc: 'Duplicate entries in purchase registers lead to double ITC claims — a serious compliance risk.' },
              ].map((p, i) => (
                <li key={i} className={styles.painItem}>
                  <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:p.bg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className={`ti ${p.icon}`} style={{ fontSize:'20px', color:p.color }} aria-hidden="true"></i>
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
            {[
              { bad: 'VLOOKUP across 500 rows in Excel — 3 hours of manual work', good: 'Upload 2 files → matched in under 60 seconds' },
              { bad: 'INV001 vs INV-001 — different format, VLOOKUP fails', good: 'Fuzzy match detects both as same invoice automatically' },
              { bad: 'Duplicate INV005 entered twice — double ITC claim unnoticed', good: 'Duplicate flagged instantly with ITC risk warning' },
              { bad: 'ITC rejection discovered after filing — too late to fix', good: 'ITC at risk calculated before filing — fix in advance' },
              { bad: 'GSTIN mismatch — vendor filed under wrong GSTIN', good: 'GSTIN mismatch flagged per invoice, vendor contacted in time' },
              { bad: 'Amount difference in 50 invoices — found manually after 2 days', good: 'All amount mismatches detected instantly with exact difference shown' },
            ].map((row, i) => (
              <div key={i} className={styles.baRow}>
                <div className={`${styles.baCell} ${styles.baBad}`}>{row.bad}</div>
                <div className={`${styles.baCell} ${styles.baGood}`}>{row.good}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.featuresSection} id="how-it-works">
        <div className={styles.featuresHeader}>
          <div className={styles.sectionLabel}>How It Works</div>
          <h2 className={styles.sectionTitle}>4 steps to complete<br />GST reconciliation.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1160px', margin: '0 auto' }}>
          {steps.map((s, i) => (
            <div key={i} className={`${styles.featureCard} ${styles.animate}`}>
              <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: '900', color: 'var(--gold)', opacity: '0.3', display: 'block', marginBottom: '12px', lineHeight: 1 }}>{s.num}</span>
              <div className={styles.featureTitle}>{s.title}</div>
              <div className={styles.featureDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISMATCH TYPES */}
      <section className={styles.problemSection}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className={styles.sectionLabel}>What We Detect</div>
            <h2 className={styles.sectionTitle}>Every type of GST mismatch,<br />automatically identified.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
            {mismatches.map((m, i) => (
              <div key={i} className={`${styles.featureCard} ${styles.animate}`}>
                <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:m.bg, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'12px' }}>
                  <i className={`ti ${m.icon}`} style={{ fontSize:'20px', color:m.color }} aria-hidden="true"></i>
                </div>
                <div className={styles.featureTitle}>{m.type}</div>
                <div className={styles.featureDesc}>{m.desc}</div>
                <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: '600', color: 'var(--gold-dark)', background: 'var(--gold-pale)', padding: '6px 10px', borderRadius: '6px' }}>
                  → {m.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.featuresHeader}>
          <div className={styles.sectionLabel}>Features</div>
          <h2 className={styles.sectionTitle}>Built for real CA workflows.</h2>
          <p className={styles.sectionSub} style={{ marginTop: '12px' }}>Every feature designed around what Indian accountants actually need every month.</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.featureCard} ${styles.animate}`}>
              <div style={{ width:'44px', height:'44px', borderRadius:'10px', background:f.bg, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'14px' }}>
                <i className={`ti ${f.icon}`} style={{ fontSize:'22px', color:f.color }} aria-hidden="true"></i>
              </div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
              <span className={styles.featureTag}>{f.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} id="faq">
        <div className={styles.faqHeader}>
          <div className={styles.sectionLabel}>FAQ</div>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
          <p className={styles.sectionSub}>Everything about GSTR-2B reconciliation with ClearLedger.</p>
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

      {/* INTERNAL LINKS — Related Blog */}
      <section className={styles.blogSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Learn More</div>
          <h2 className={styles.sectionTitle}>GST Reconciliation Guides</h2>
          <div className={styles.blogGrid} style={{ marginTop: '32px' }}>
            {[
              { tag: 'GST & Compliance', title: 'GSTR-2B vs Books Mismatch — Complete Guide for CAs', desc: 'Every type of mismatch explained — what causes it, what ITC is at risk, and how to fix it before the filing deadline.', href: '/blog/gstr2b-vs-books-mismatch', time: '9 min read' },
              { tag: 'GST & Compliance', title: 'GST Reconciliation Errors: Why They Happen and How to Fix Them', desc: 'GST reconciliation errors cost Indian businesses crores in ITC rejections every year. Here\'s exactly why they happen.', href: '/blog/gst-reconciliation-errors', time: '8 min read' },
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
            Reconcile your first file <span className={styles.gold}>free.</span>
          </h2>
          <p className={styles.ctaSub}>
            No credit card. No setup. Upload GSTR-2B + Purchase Register<br />
            and get your reconciliation report in under 60 seconds.
          </p>
          <a href={APP_URL} className={styles.btnPrimary} style={{ fontSize: '17px', padding: '18px 52px' }}>
            Start GST Reconciliation →
          </a>
          <div className={styles.ctaTrust}>
            {['No credit card required', 'File deleted in 48 hours', 'Made for Indian CAs 🇮🇳', 'Free to start'].map((t, i) => (
              <div key={i} className={styles.trustItem}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>ClearLedger</div>
          <ul className={styles.footerLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/bank-reconciliation">Bank Reconciliation</a></li>
            <li><a href="/blog/gstr2b-vs-books-mismatch">Blog</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="mailto:support@clearledger.co.in">support@clearledger.co.in</a></li>
          </ul>
          <div className={styles.footerCopy}>© 2026 ClearLedger. All rights reserved.</div>
        </div>
      </footer>

    </div>
  )
}