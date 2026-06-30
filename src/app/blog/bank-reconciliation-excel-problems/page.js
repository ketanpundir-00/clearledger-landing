export const metadata = {
  title: 'Bank Statement Reconciliation in Excel: What Nobody Tells You | ClearLedger',
  description: 'HDFC statements with 5 header rows, comma amounts splitting into 3 columns — here\'s how to fix Indian bank statement reconciliation properly.',
}

export default function BankReconciliation() {
  return (
    <main style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', fontFamily: 'DM Sans, sans-serif', color: '#1A1208' }}>
      <a href="/" style={{ color: '#0369A1', textDecoration: 'none', fontSize: '14px' }}>← Back to Home</a>

      <div style={{ display: 'inline-block', background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#075985', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '20px', marginBottom: '20px' }}>Banking</div>

      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>Bank Statement Reconciliation in Excel: What Nobody Actually Tells You</h1>

      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#6B6560', marginBottom: '36px', paddingBottom: '28px', borderBottom: '1px solid #E8E3D8', flexWrap: 'wrap' }}>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-calendar" style={{fontSize:'14px'}} aria-hidden="true"></i> May 25, 2026</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-clock" style={{fontSize:'14px'}} aria-hidden="true"></i> 7 min read</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-user" style={{fontSize:'14px'}} aria-hidden="true"></i> ClearLedger Team</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-tag" style={{fontSize:'14px'}} aria-hidden="true"></i> Banking, Excel, Reconciliation</span>
      </div>

      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#6B6560', marginBottom: '40px', fontWeight: '300' }}>Ask any accountant in India what takes the most time every month, and bank reconciliation will be in the top three answers. Not because the concept is complex — matching debits and credits is straightforward. The real problem is Indian bank statements are formatted in ways that break standard Excel workflows. Here's everything you need to know.</p>

      <div style={{ background: '#F5F3EE', border: '1px solid #E8E3D8', borderLeft: '3px solid #0369A1', borderRadius: '8px', padding: '24px 28px', marginBottom: '48px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#075985', marginBottom: '14px' }}>Table of Contents</div>
        <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Why Indian Bank Statements Break in Excel', 'The HDFC Statement Problem', 'The Comma Amount Problem', 'Decoding Indian Bank Narrations', 'Step-by-Step Reconciliation Process', 'How to Automate This'].map((item, i) => (
            <li key={i}><span style={{ fontSize: '14px', color: '#6B6560' }}>{item}</span></li>
          ))}
        </ol>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>Why Indian Bank Statements Break in Excel</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>Open a bank statement from almost any Indian bank in Excel, and you'll hit at least two or three of these problems immediately:</p>
      <ul style={{ paddingLeft: '22px', marginBottom: '24px' }}>
        {['The first 4–6 rows are bank header information — not data', 'Amounts formatted as "1,50,000.00" — CSV readers split this into 3 columns', 'Dates in DD/MM/YY format — Excel often reads these as text, not dates', 'Narrations are raw transaction codes, not human-readable', 'Some rows have no date or are completely empty'].map((item, i) => (
          <li key={i} style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>None of these are mistakes. They're just how Indian bank statement formats evolved over years of different software and regulatory requirements. The problem is they require manual cleanup every single time.</p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>The HDFC Statement Problem</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>HDFC is India's largest private bank. Their statement format is the most common one Indian accountants work with. Here's what a typical download looks like:</p>
      <div style={{ background: '#1A1208', color: '#a8d8a8', fontFamily: 'monospace', fontSize: '12px', padding: '20px', borderRadius: '8px', marginBottom: '20px', overflowX: 'auto', lineHeight: '1.8' }}>
        <div>Row 1: HDFC Bank Account Statement</div>
        <div>Row 2: Account No: XXXX1234  |  Branch: Andheri West</div>
        <div>Row 3: Period: 01/04/2024 to 31/03/2025</div>
        <div>Row 4: (empty)</div>
        <div>Row 5: Date | Narration | Chq./Ref.No. | Value Dt | Withdrawal | Deposit | Closing Balance</div>
        <div>Row 6: 01/04/24 | UPI/CR/PHONEPE/SALARY | REF123 | 01/04/24 | (blank) | 50,000.00 | 1,50,000.00</div>
      </div>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>When you try to import this CSV, Excel reads all 7 rows as data. Your VLOOKUP references break because the data starts at row 6, not row 1. Every formula needs manual adjustment.</p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>The Comma Amount Problem</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>Indian number formatting uses commas in amounts: <strong style={{ color: '#1A1208' }}>₹1,50,000</strong>. When a CSV file contains this, Excel's CSV parser reads the comma as a column delimiter. Your single "Amount" column becomes three columns:</p>
      <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '16px 20px', marginBottom: '20px', fontFamily: 'monospace', fontSize: '13px' }}>
        <div style={{ color: '#DC2626', marginBottom: '8px', display:'flex', alignItems:'center', gap:'6px' }}><i className="ti ti-circle-x" style={{fontSize:'15px'}} aria-hidden="true"></i> What Excel sees: | 1 | 50 | 000.00 |</div>
        <div style={{ color: '#16A34A', display:'flex', alignItems:'center', gap:'6px' }}><i className="ti ti-circle-check" style={{fontSize:'15px'}} aria-hidden="true"></i> What it should be: | 1,50,000.00 |</div>
      </div>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>The fix: open the CSV using Data → From Text/CSV → use "Text" data type for amount columns. Or use a tool that handles Indian number formats automatically.</p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>Decoding Indian Bank Narrations</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>Bank narrations in India follow no standard. Here are common formats you'll encounter:</p>
      {[
        { bank: 'HDFC', example: 'UPI/DR/416789012345/FLIPKART/OKAXIS/Pay', meaning: 'UPI debit to Flipkart via Axis Bank' },
        { bank: 'SBI', example: 'NEFT/INWARD/HDFC0001234/SALARY/ACME CORP', meaning: 'Incoming NEFT salary from Acme Corp' },
        { bank: 'ICICI', example: 'ACH DR NACH/ECS LOAN EMI/HDFC HOME', meaning: 'Auto-debit for HDFC home loan EMI' },
        { bank: 'Kotak', example: 'INB/RTGS/KTBL12345/VENDOR PAYMENT', meaning: 'Outward RTGS to vendor' },
      ].map((row, i) => (
        <div key={i} style={{ background: i % 2 === 0 ? '#F5F3EE' : '#fff', padding: '12px 16px', borderBottom: '1px solid #E8E3D8', fontSize: '13px' }}>
          <strong style={{ color: '#1A1208' }}>{row.bank}:</strong> <code style={{ color: '#0369A1', fontSize: '12px' }}>{row.example}</code>
          <div style={{ color: '#6B6560', marginTop: '4px' }}>→ {row.meaning}</div>
        </div>
      ))}
      <p style={{ lineHeight: '1.85', color: '#6B6560', margin: '20px 0' }}>Manually categorizing 300 transactions per month using this logic takes 2-3 hours. Pattern-based auto-categorization reduces this to minutes.</p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>Step-by-Step Reconciliation Process</h2>
      {[
        { step: '1', title: 'Clean the bank statement', desc: 'Delete header rows, fix column headers, convert amounts from text to numbers, standardize dates to DD/MM/YYYY. For each bank format, this takes 15-30 minutes manually.' },
        { step: '2', title: 'Clean your books export', desc: 'Export your ledger from Tally, Zoho, or QuickBooks. Ensure date format matches, amounts are numbers (not text), and the narration field is populated.' },
        { step: '3', title: 'Match by amount and date', desc: 'Start with exact matches — same amount, same date. These are easy. Then handle near-matches: same amount, ±1 day date difference (value date vs transaction date).' },
        { step: '4', title: 'Handle unmatched items', desc: 'For bank transactions not in books: determine if it\'s a missing entry or a timing difference. For book entries not in bank: check if the cheque has cleared or the payment is still in transit.' },
        { step: '5', title: 'Document exceptions', desc: 'Any unreconciled item needs a note explaining why. Auditors look at unexplained exceptions first.' },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
          <div style={{ minWidth: '32px', height: '32px', background: '#0369A1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', marginTop: '2px' }}>{item.step}</div>
          <div>
            <strong style={{ display: 'block', fontSize: '15px', color: '#1A1208', marginBottom: '4px' }}>{item.title}</strong>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.75', color: '#6B6560' }}>{item.desc}</p>
          </div>
        </div>
      ))}

      <div style={{ background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.25)', borderRadius: '12px', padding: '32px 36px', textAlign: 'center', margin: '48px 0' }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', marginBottom: '10px', color: '#1A1208' }}>Reconcile bank statements in minutes — not hours</h3>
        <p style={{ fontSize: '14px', color: '#6B6560', marginBottom: '20px' }}>Upload your bank statement (HDFC, SBI, ICICI, Axis, Kotak, PNB, Canara, BOB) and books export. ClearLedger handles the formatting, matches transactions automatically, and gives you a clean exception report.</p>
        <a href="https://clearledger.co.in" style={{ display: 'inline-block', background: '#0369A1', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>Try Bank Reconciliation Free →</a>
      </div>

      <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid #E8E3D8' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#9B9590', marginBottom: '16px' }}>Related Articles</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { tag: 'GST', title: 'GSTR-2B vs Books Mismatch — Complete Guide for CAs', href: '/blog/gstr2b-vs-books-mismatch' },
            { tag: 'Payroll', title: 'How to Generate 50 Payslips in 30 Seconds from Excel', href: '/blog/how-to-generate-payslips-in-bulk' },
          ].map((post, i) => (
            <a key={i} href={post.href} style={{ background: '#F5F3EE', border: '1px solid #E8E3D8', borderRadius: '8px', padding: '20px', textDecoration: 'none' }}>
              <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: '#075985', background: '#E0F2FE', padding: '2px 8px', borderRadius: '100px', display: 'inline-block', marginBottom: '10px' }}>{post.tag}</span>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1A1208', lineHeight: '1.4', margin: 0 }}>{post.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
