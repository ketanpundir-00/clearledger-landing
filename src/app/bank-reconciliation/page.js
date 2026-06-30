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
      "name": "What is bank statement reconciliation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Bank statement reconciliation is the process of matching your company's books (purchase/sales register or accounting software) with the actual bank statement to ensure every transaction is accounted for. It must be done monthly by CAs, accountants, and finance teams." }
    },
    {
      "@type": "Question",
      "name": "Which bank statements does ClearLedger support?",
      "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger auto-detects HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, and BOB bank statements. It handles messy files with 5+ header rows, Indian comma-formatted amounts like 1,50,000, merged cells, and inconsistent column names — automatically." }
    },
    {
      "@type": "Question",
      "name": "How does ClearLedger handle Indian bank statement formats?",
      "acceptedAnswer": { "@type": "Answer", "text": "Indian bank statements are uniquely messy — junk header rows, amounts formatted as 1,50,000 that split into 3 CSV columns, inconsistent date formats, and blank rows. ClearLedger detects and cleans all of these automatically without any manual configuration." }
    },
    {
      "@type": "Question",
      "name": "Can I export cleaned bank data to Tally or Zoho Books?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After cleaning your bank statement, export directly in Tally XML format or Zoho Books CSV format — ready to import without any reformatting. This saves hours of manual data entry every month." }
    },
    {
      "@type": "Question",
      "name": "What is narration standardization in bank reconciliation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Bank narrations like NEFT/HDFC/RAHULTRD are cryptic and inconsistent. ClearLedger standardizes them into readable vendor names like Rahul Trading — UPI Transfer, making reconciliation and categorization much faster." }
    },
    {
      "@type": "Question",
      "name": "Is my bank data safe on ClearLedger?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Files are automatically deleted after 48 hours — you see the exact deletion date when you upload. ClearLedger does not share, sell, or train AI models on your financial data. All connections are HTTPS encrypted." }
    },
  ]
}

const schemaProduct = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ClearLedger Bank Statement Reconciliation",
  "applicationCategory": "BusinessApplication",
  "description": "Automated bank statement reconciliation tool for Indian CAs. Auto-detects HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, BOB formats. Cleans messy statements, standardizes narrations, exports to Tally XML and Zoho Books.",
  "url": "https://clearledger.co.in/bank-reconciliation",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
  "inLanguage": "en-IN",
  "audience": { "@type": "Audience", "audienceType": "Chartered Accountants, Accountants, Finance Teams, SME Owners" }
}

export default function BankReconciliationPage() {
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

  const banks = [
    { name: 'HDFC Bank', icon: 'ti-building-bank', color: '#185FA5', bg: '#E6F1FB', issues: '5 junk header rows, amounts as "1,50,000"' },
    { name: 'SBI', icon: 'ti-building-community', color: '#3B6D11', bg: '#EAF3DE', issues: 'Merged cells, inconsistent date formats' },
    { name: 'ICICI Bank', icon: 'ti-credit-card', color: '#854F0B', bg: '#FAEEDA', issues: 'Multiple sheets, blank rows between entries' },
    { name: 'Axis Bank', icon: 'ti-chart-bar', color: '#534AB7', bg: '#EEEDFE', issues: 'Column names change across months' },
    { name: 'Kotak Bank', icon: 'ti-building-skyscraper', color: '#993C1D', bg: '#FAECE7', issues: 'CR/DR instead of separate debit/credit columns' },
    { name: 'PNB', icon: 'ti-building-bank', color: '#7C3AED', bg: '#F1E9FE', issues: 'Value Dt vs Txn Date column confusion' },
    { name: 'Canara Bank', icon: 'ti-building-community', color: '#0E7490', bg: '#E0F4F7', issues: 'Cheque No column often blank or merged' },
    { name: 'Bank of Baroda', icon: 'ti-credit-card', color: '#B91C1C', bg: '#FBE7E7', issues: 'Narration format changes branch to branch' },
  ]

  const steps = [
    { num: '01', title: 'Upload Bank Statement', desc: 'Upload CSV, XLSX, XLS or PDF. ClearLedger auto-detects your bank — HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, BOB — no manual setup.' },
    { num: '02', title: 'Auto Clean & Structure', desc: 'Junk rows removed, Indian amounts parsed, columns standardized — date, description, debit, credit, balance — instantly.' },
    { num: '03', title: 'Standardize Narrations', desc: 'NEFT/HDFC/RAHULTRD → Rahul Trading — NEFT Transfer. Vendor names extracted and transactions auto-categorized.' },
    { num: '04', title: 'Export — Tally or Zoho', desc: 'Download cleaned CSV, or export directly to Tally XML or Zoho Books format. Import-ready, zero reformatting.' },
  ]

  const features = [
    { icon: 'ti-building-bank', color: '#185FA5', bg: '#E6F1FB', title: '8 Banks Auto-Detected', desc: 'HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, BOB — statement format identified automatically. No column mapping needed.', tag: 'Auto Detect' },
    { icon: 'ti-currency-rupee', color: '#3B6D11', bg: '#EAF3DE', title: 'Indian Amount Format', desc: '"1,50,000" parsed correctly every time — never splits into 3 columns. Handles lakh/crore formatting automatically.', tag: 'India Ready' },
    { icon: 'ti-replace', color: '#854F0B', bg: '#FAEEDA', title: 'Narration Standardization', desc: 'Cryptic bank codes converted to readable vendor names. Similar vendors grouped — RAHULTRD, RAHUL TRADING → Rahul Trading.', tag: 'AI Powered' },
    { icon: 'ti-file-export', color: '#534AB7', bg: '#EEEDFE', title: 'Tally XML Export', desc: 'Cleaned bank data exported as Tally-ready XML with proper double-entry format — Payment and Receipt vouchers.', tag: 'Zero Rework' },
    { icon: 'ti-brand-google', color: '#993C1D', bg: '#FAECE7', title: 'Zoho Books Export', desc: 'Export to Zoho Books CSV with Contact Name, Reference No., and correct date format — import in one click.', tag: 'Direct Import' },
    { icon: 'ti-tags', color: '#0F6E56', bg: '#E1F5EE', title: 'Transaction Categorization', desc: 'NEFT, UPI, RTGS, IMPS — automatically categorized. See your transaction breakdown by type instantly.', tag: 'Auto Category' },
    ]

  const faqs = [
    { q: 'What is bank statement reconciliation?', a: 'Bank statement reconciliation is the process of matching your company\'s books with the actual bank statement to ensure every transaction is accounted for. It must be done monthly by CAs, accountants, and finance teams to catch errors, frauds, and missing entries.' },
    { q: 'Which bank statements does ClearLedger support?', a: 'ClearLedger auto-detects HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, and BOB bank statements. It handles messy files with 5+ header rows, Indian comma-formatted amounts like 1,50,000, merged cells, and inconsistent column names — automatically, without any configuration.' },
    { q: 'How does ClearLedger handle Indian bank statement formats?', a: 'Indian bank statements are uniquely messy — junk header rows, amounts formatted as 1,50,000 that split into 3 CSV columns, inconsistent date formats, and blank rows. ClearLedger detects and cleans all of these automatically. No VLOOKUP, no manual formatting.' },
    { q: 'Can I export cleaned bank data to Tally or Zoho Books?', a: 'Yes. After cleaning, export directly to Tally XML (with proper double-entry Payment/Receipt vouchers) or Zoho Books CSV (with Contact Name and Reference No.). Both formats are import-ready — no reformatting needed.' },
    { q: 'What is narration standardization?', a: 'Bank narrations like NEFT/HDFC/RAHULTRD are cryptic. ClearLedger standardizes them to readable names like "Rahul Trading — NEFT Transfer" and groups similar vendor names together. This makes reconciliation and ledger matching significantly faster.' },
    { q: 'Is my bank data safe?', a: 'Yes. Files are automatically deleted after 48 hours — you see the exact deletion date on upload. ClearLedger does not share, sell, or train AI models on your financial data. All connections are HTTPS encrypted.' },
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
            <li><a href="/blog/bank-reconciliation-excel-problems">Blog</a></li>
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
            Bank Reconciliation Tool for Indian CAs & Accountants
          </div>
          <h1 className={styles.heroTitle}>
            Bank Statement Cleanup<br />
            in <span className={styles.gold}>Seconds, Not Hours.</span>
          </h1>
          <p className={styles.heroSub}>
            Upload any HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, or BOB statement.
            ClearLedger auto-detects the format, cleans messy data,
            standardizes narrations, and exports directly to Tally or Zoho Books.
          </p>
          <div className={styles.heroActions}>
            <a href={APP_URL} className={styles.btnPrimary}>Clean My Bank Statement →</a>
            <a href="#how-it-works" className={styles.btnSecondary}>See How It Works</a>
          </div>
          <div className={styles.heroStats}>
            {[
              { num: '5', label: 'Banks Auto-Detected' },
              { num: '< 60s', label: 'Avg. Clean Time' },
              { num: '0', label: 'Manual Mapping Needed' },
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
          {[...['HDFC Auto-Detect', 'SBI Statement Clean', 'ICICI Format Fix', 'Axis Bank Support', 'Kotak Statement', 'PNB Statement', 'Canara Bank Support', 'BOB Statement', 'Indian Amount Format', 'Narration Standardization', 'Tally XML Export', 'Zoho Books Export', 'Transaction Categorization'],
            ...['HDFC Auto-Detect', 'SBI Statement Clean', 'ICICI Format Fix', 'Axis Bank Support', 'Kotak Statement', 'PNB Statement', 'Canara Bank Support', 'BOB Statement', 'Indian Amount Format', 'Narration Standardization', 'Tally XML Export', 'Zoho Books Export', 'Transaction Categorization']
          ].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* BANKS SUPPORTED */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresHeader}>
          <div className={styles.sectionLabel}>Supported Banks</div>
          <h2 className={styles.sectionTitle}>Every major Indian bank,<br />auto-detected.</h2>
          <p className={styles.sectionSub} style={{ marginTop: '12px' }}>No manual column mapping. ClearLedger identifies your bank and cleans the file automatically.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', maxWidth: '1160px', margin: '0 auto' }}>
          {banks.map((b, i) => (
            <div key={i} className={`${styles.featureCard} ${styles.animate}`} style={{ textAlign: 'center' }}>
              <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:b.bg, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'12px' }}>
                <i className={`ti ${b.icon}`} style={{ fontSize:'24px', color:b.color }} aria-hidden="true"></i>
              </div>
              <div className={styles.featureTitle}>{b.name}</div>
              <div className={styles.featureDesc} style={{ fontSize: '12px' }}>{b.issues}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className={styles.problemSection}>
        <div className={styles.problemGrid}>
          <div className={`${styles.animate} ${styles.problemLeft}`}>
            <div className={styles.sectionLabel}>The Problem</div>
            <h2 className={styles.sectionTitle}>Indian bank statements<br />break every Excel workflow.</h2>
            <p className={styles.sectionSub}>Standard Excel tools assume clean, structured data. Indian bank statements are anything but — and every bank has its own messy format.</p>
            <ul className={styles.painList}>
              {[
                { icon: 'ti-clock-x', color: '#993C1D', bg: '#FAECE7', title: 'Hours spent on formatting before work begins', desc: 'CAs spend 3–4 hours per client removing junk rows, fixing amounts, and restructuring columns before reconciliation can start.' },
                { icon: 'ti-table-off', color: '#854F0B', bg: '#FAEEDA', title: '"1,50,000" splits into 3 columns in CSV', desc: 'Indian comma-formatted amounts break standard CSV parsing — causing wrong debit/credit figures and reconciliation errors.' },
                { icon: 'ti-file-unknown', color: '#534AB7', bg: '#EEEDFE', title: 'NEFT/HDFC/XYZ tells you nothing', desc: 'Bank narrations are cryptic abbreviations. Matching them to vendor ledgers manually takes hours every month.' },
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
              { bad: 'HDFC file — 5 junk header rows, columns named Col1, Col2...', good: 'Clean table: date, description, debit, credit, balance — auto-detected' },
              { bad: 'Amount "1,50,000" splits into 3 columns in CSV', good: '₹1,50,000 parsed correctly in one cell every time' },
              { bad: 'NEFT/HDFC/RAHULTRD — meaningless narration', good: 'Rahul Trading — NEFT Transfer — readable vendor name' },
              { bad: 'Manual Tally entry — 2 hours of data entry per statement', good: 'Tally XML exported in one click — import-ready instantly' },
              { bad: 'Bank statement vs books — matched row by row manually', good: '500 transactions reconciled in seconds, mismatches highlighted' },
              { bad: 'Duplicate UPI payments — discovered only during audit', good: 'Duplicate transactions flagged automatically before reconciliation' },
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
          <h2 className={styles.sectionTitle}>4 steps to a clean,<br />reconciled bank statement.</h2>
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

      {/* FEATURES */}
      <section className={styles.problemSection} id="features">
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className={styles.sectionLabel}>Features</div>
            <h2 className={styles.sectionTitle}>Everything bank reconciliation<br />requires — automated.</h2>
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
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} id="faq">
        <div className={styles.faqHeader}>
          <div className={styles.sectionLabel}>FAQ</div>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
          <p className={styles.sectionSub}>Everything about bank statement reconciliation with ClearLedger.</p>
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

      {/* INTERNAL LINKS */}
      <section className={styles.blogSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Learn More</div>
          <h2 className={styles.sectionTitle}>Bank Reconciliation Guides</h2>
          <div className={styles.blogGrid} style={{ marginTop: '32px' }}>
            {[
              { tag: 'Banking', title: 'Bank Statement Reconciliation in Excel — What Nobody Tells You', desc: 'Indian bank statements break standard Excel workflows. Here\'s how to handle HDFC, SBI, ICICI formats and comma amounts correctly.', href: '/blog/bank-reconciliation-excel-problems', time: '7 min read' },
              { tag: 'GST & Compliance', title: 'GSTR-2B vs Books Mismatch — Complete Guide for CAs', desc: 'Every type of GST mismatch explained — what causes it, what ITC is at risk, and how to fix it before the filing deadline.', href: '/blog/gstr2b-vs-books-mismatch', time: '9 min read' },
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
            Clean your first statement <span className={styles.gold}>free.</span>
          </h2>
          <p className={styles.ctaSub}>
            No credit card. No setup. Upload any Indian bank statement<br />
            and get a clean, structured file in under 60 seconds.
          </p>
          <a href={APP_URL} className={styles.btnPrimary} style={{ fontSize: '17px', padding: '18px 52px' }}>
            Clean My Bank Statement →
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
            <li><a href="/gst-2b-reconciliation">GST 2B Reconciliation</a></li>
            <li><a href="/blog/bank-reconciliation-excel-problems">Blog</a></li>
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