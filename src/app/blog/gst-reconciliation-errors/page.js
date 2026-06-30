export const metadata = {
  title: 'GST Reconciliation Errors: Why They Happen and How to Fix Them | ClearLedger',
  description: "GST reconciliation errors cost Indian businesses crores in ITC rejections every year. Here's exactly why they happen and how to fix them before filing.",
}

export default function GSTReconciliationErrors() {
  return (
    <main style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', fontFamily: 'DM Sans, sans-serif', color: '#1A1208' }}>
      <a href="/" style={{ color: '#0369A1', textDecoration: 'none', fontSize: '14px' }}>← Back to Home</a>

      <div style={{ display: 'inline-block', background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#075985', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '20px', marginBottom: '20px' }}>GST & Compliance</div>

      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>GST Reconciliation Errors: Why They Happen and How to Actually Fix Them</h1>

      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#6B6560', marginBottom: '36px', paddingBottom: '28px', borderBottom: '1px solid #E8E3D8', flexWrap: 'wrap' }}>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-calendar" style={{fontSize:'14px'}} aria-hidden="true"></i> May 25, 2026</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-clock" style={{fontSize:'14px'}} aria-hidden="true"></i> 8 min read</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-user" style={{fontSize:'14px'}} aria-hidden="true"></i> ClearLedger Team</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-tag" style={{fontSize:'14px'}} aria-hidden="true"></i> GST, Reconciliation, ITC</span>
      </div>

      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#6B6560', marginBottom: '40px', fontWeight: '300' }}>If you've ever stared at a GSTR-2B mismatch report wondering where it went wrong, you're not alone. GST reconciliation errors are one of the most common — and most expensive — problems facing Indian CAs and finance teams. Here's the full picture: what causes them, what actually goes wrong in practice, and how to fix it without spending half your life in Excel.</p>

      <div style={{ background: '#F5F3EE', border: '1px solid #E8E3D8', borderLeft: '3px solid #0369A1', borderRadius: '8px', padding: '24px 28px', marginBottom: '48px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#075985', marginBottom: '14px' }}>Table of Contents</div>
        <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['What is GST Reconciliation?', 'Why Mismatches Happen', 'The 6 Most Common GST Errors', 'What These Errors Actually Cost You', 'How to Fix Them — Step by Step', 'How to Prevent Them Going Forward'].map((item, i) => (
            <li key={i}><span style={{ fontSize: '14px', color: '#6B6560' }}>{item}</span></li>
          ))}
        </ol>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>What is GST Reconciliation, and Why Does It Matter?</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>Every month, your suppliers file their GSTR-1 with the details of invoices they've raised on you. The GST portal compiles this into your GSTR-2B — your auto-populated Input Tax Credit (ITC) statement.</p>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>Reconciliation is the process of matching your own purchase records against what's in GSTR-2B. If they match, you can claim ITC. If they don't, you can't — at least not without explanation and risk.</p>
      <div style={{ background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.2)', borderLeft: '4px solid #0369A1', borderRadius: '8px', padding: '20px 24px', margin: '32px 0' }}>
        <p style={{ margin: 0, fontSize: '15px', color: '#1A1208' }}><strong style={{ color: '#075985' }}>Quick stat:</strong> According to GSTN data, over 30% of ITC claims in India face scrutiny due to GSTR-2A/2B mismatches. Most of these originate from avoidable data entry errors in vendor masters.</p>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>Why Do GST Mismatches Actually Happen?</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>There are two broad categories: errors on your side and errors on your supplier's side. Both are fixable, but you need to catch them early.</p>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '8px' }}><strong style={{ color: '#1A1208' }}>Errors on your supplier's side:</strong></p>
      <ul style={{ paddingLeft: '22px', marginBottom: '20px' }}>
        {['Late GSTR-1 filing — invoice doesn\'t show in your 2B for that month', 'Wrong invoice number or date entered in their return', 'Wrong GSTIN — used your old GSTIN or mistyped it', 'Wrong tax rate applied (12% instead of 18%)'].map((item, i) => (
          <li key={i} style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '8px' }}><strong style={{ color: '#1A1208' }}>Errors on your side:</strong></p>
      <ul style={{ paddingLeft: '22px', marginBottom: '20px' }}>
        {['Invalid or cancelled GSTIN in your vendor master', 'Invoice booked with wrong amount or date', 'Duplicate invoice entries', 'Invoice number format mismatch (INV-001 vs INV/001)'].map((item, i) => (
          <li key={i} style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>The 6 Most Common GST Errors</h2>
      {[
        { title: '1. Invalid GSTIN in Vendor Master', desc: 'A GSTIN can become invalid if a supplier cancels their registration, migrates to composition scheme, or the registration lapses. If you continue purchasing from them and booking ITC, every invoice is a ticking bomb. Validate GSTINs monthly, not just at vendor onboarding.' },
        { title: '2. Invoice Number Format Differences', desc: 'You booked "INV/2025-26/0042". Your supplier filed "INV-2025-26-42". The GST portal sees these as different invoices. Auto-matching fails. This is the #1 cause of false positives in reconciliation reports.' },
        { title: '3. Supplier Filed Late', desc: 'GSTR-2B is generated on the 14th of each month based on supplier filings up to the 13th. If your supplier filed on the 15th, that invoice won\'t appear in your 2B. You\'ll see it next month. If you don\'t reconcile monthly, you might miss claiming it entirely.' },
        { title: '4. Amount Rounding Differences', desc: 'Your books show ₹18,000.00 tax. Supplier filed ₹18,000.50 (due to rounding on their software). The portal flags this as a mismatch. Small but common — especially with large invoice volumes.' },
        { title: '5. B2B Filed as B2C', desc: 'Some suppliers mistakenly file your invoice under B2C (consumer) instead of B2B (business). B2C invoices don\'t appear in GSTR-2B at all. The only fix is the supplier amending their return.' },
        { title: '6. Wrong Place of Supply', desc: 'If the place of supply is wrong, the tax type (IGST vs CGST+SGST) will be wrong. This affects not just ITC matching but also which state gets the tax revenue — a much more serious problem during audits.' },
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1A1208', marginBottom: '10px' }}>{item.title}</h3>
          <p style={{ lineHeight: '1.85', color: '#6B6560', margin: 0 }}>{item.desc}</p>
        </div>
      ))}

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>What These Errors Actually Cost You</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>It's not just the ITC you lose. The actual cost is layered:</p>
      <ul style={{ paddingLeft: '22px', marginBottom: '20px' }}>
        {['Direct ITC loss on unmatched invoices', '18% interest per annum if ITC is wrongly claimed and later reversed', 'Penalty up to 100% of tax if treated as fraudulent claim', 'CA / accountant time spent on manual reconciliation every month', 'Strained vendor relationships from constant amendment requests'].map((item, i) => (
          <li key={i} style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>How to Fix Them — Step by Step</h2>
      {[
        { step: '1', title: 'Validate your entire vendor master', desc: 'Run all GSTINs in your vendor master through the GSTN API validation. Remove or flag any invalid, suspended, or cancelled GSTINs. Do this at the start of every financial year and monthly for new vendors.' },
        { step: '2', title: 'Standardize invoice number format', desc: 'Agree with your top 20 suppliers on a consistent invoice numbering format before the financial year starts. This eliminates the most common source of false mismatches.' },
        { step: '3', title: 'Download GSTR-2B on the 14th', desc: 'The moment GSTR-2B is available, download it as Excel. Start reconciliation immediately — don\'t wait until the 19th. You need days, not hours, to chase supplier amendments.' },
        { step: '4', title: 'Run automated reconciliation', desc: 'Use a tool that handles fuzzy invoice number matching, Indian number formats, and provides a categorized mismatch report. Manual Excel VLOOKUP reconciliation misses format variations.' },
        { step: '5', title: 'Contact suppliers for corrections', desc: 'Sort your mismatch report by ITC value. Contact the top 10-15 suppliers by email and phone. Suppliers can amend their GSTR-1 until the filing deadline — but they need time.' },
        { step: '6', title: 'Document everything', desc: 'For invoices that can\'t be resolved before filing, keep a paper trail of your follow-up communications. This is your evidence if the claim is questioned during assessment.' },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
          <div style={{ minWidth: '32px', height: '32px', background: '#0369A1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', marginTop: '2px' }}>{item.step}</div>
          <div>
            <strong style={{ display: 'block', fontSize: '15px', color: '#1A1208', marginBottom: '4px' }}>{item.title}</strong>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.75', color: '#6B6560' }}>{item.desc}</p>
          </div>
        </div>
      ))}

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>How to Prevent Them Going Forward</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>Fixing errors is reactive. Prevention is what saves time every month:</p>
      <ul style={{ paddingLeft: '22px', marginBottom: '32px' }}>
        {['Validate GSTINs before booking any new vendor invoice', 'Set a vendor master audit as a monthly task — not annual', 'Send suppliers a reminder on the 10th of each month to file their GSTR-1', 'Use tools that auto-validate invoice formats on upload, before they enter your books', 'Track repeat offenders — suppliers who consistently file late or incorrectly — and factor this into your vendor evaluation'].map((item, i) => (
          <li key={i} style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>

      <div style={{ background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.25)', borderRadius: '12px', padding: '32px 36px', textAlign: 'center', margin: '48px 0' }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', marginBottom: '10px', color: '#1A1208' }}>Fix GST reconciliation errors in minutes</h3>
        <p style={{ fontSize: '14px', color: '#6B6560', marginBottom: '20px' }}>Upload your purchase register and GSTR-2B. ClearLedger validates GSTINs, matches invoices with fuzzy logic, and gives you a categorized mismatch report — ready to act on before the filing deadline.</p>
        <a href="https://clearledger.co.in" style={{ display: 'inline-block', background: '#0369A1', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>Try GST Reconciliation Free →</a>
      </div>

      <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid #E8E3D8' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#9B9590', marginBottom: '16px' }}>Related Articles</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { tag: 'GST', title: 'GSTR-2B vs Books Mismatch — Complete Guide for CAs', href: '/blog/gstr2b-vs-books-mismatch' },
            { tag: 'Banking', title: 'Bank Statement Reconciliation in Excel — What Nobody Tells You', href: '/blog/bank-reconciliation-excel-problems' },
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
