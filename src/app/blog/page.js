import styles from '../page.module.css'

export const metadata = {
  title: 'Blog — ClearLedger | GST, Bank Reconciliation & Payroll Guides',
  description: 'Practical guides for Indian CAs, accountants, and finance teams on GST reconciliation, bank statement matching, and payroll automation.',
}

const posts = [
  { tag: 'GST & Compliance', title: 'GSTR-2B vs Books Mismatch — Complete Guide for CAs', desc: 'Every type of mismatch explained — what causes it, what ITC is at risk, and how to fix it before the filing deadline.', href: '/blog/gstr2b-vs-books-mismatch', time: '9 min read' },
  { tag: 'GST & Compliance', title: 'GST Reconciliation Errors: Why They Happen and How to Fix Them', desc: 'GST reconciliation errors cost Indian businesses crores in ITC rejections every year. Here\'s exactly why they happen and how to fix them.', href: '/blog/gst-reconciliation-errors', time: '8 min read' },
  { tag: 'Banking', title: 'Bank Statement Reconciliation in Excel — What Nobody Tells You', desc: 'Indian bank statements break standard Excel workflows. Here\'s how to handle HDFC, SBI, ICICI formats and comma amounts correctly.', href: '/blog/bank-reconciliation-excel-problems', time: '7 min read' },
  { tag: 'Payroll', title: 'How to Generate 50 Payslips in 30 Seconds from Excel', desc: 'Stop copy-pasting payslip templates one by one. Here\'s how to generate all payslips at once with correct PF, ESI, and TDS.', href: '/blog/how-to-generate-payslips-in-bulk', time: '6 min read' },
]

export default function BlogIndex() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Clear<span>Ledger</span></a>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#usecases">Who It&apos;s For</a></li>
            <li><a href="/gst-2b-reconciliation">GST Recon</a></li>
            <li><a href="/bank-reconciliation">Bank Recon</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/#feedback">Feedback</a></li>
            <li><a href="https://app.clearledger.co.in" className={styles.navCta}>Start Free →</a></li>
          </ul>
        </div>
      </nav>

      <section className={styles.blogSection} style={{ paddingTop: '80px' }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>From the Blog</div>
          <h1 className={styles.sectionTitle}>Learn from the experts</h1>
          <p className={styles.sectionSub}>Practical guides for Indian CAs, accountants, and finance teams.</p>
          <div className={styles.blogGrid}>
            {posts.map((post, i) => (
              <a key={i} href={post.href} className={styles.blogCard}>
                <span className={styles.blogTag}>{post.tag}</span>
                <h2 className={styles.blogCardTitle}>{post.title}</h2>
                <p className={styles.blogCardDesc}>{post.desc}</p>
                <span className={styles.blogReadTime}>⏱ {post.time}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

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
