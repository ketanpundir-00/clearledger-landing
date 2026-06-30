export const metadata = {
  title: 'GSTR-2B vs Books Mismatch — Complete Guide for CAs | ClearLedger',
  description: 'GSTR-2B vs books mismatch is the #1 ITC problem for Indian CAs. Here\'s exactly what causes it, how to read the mismatch report, and how to fix it before the filing deadline.',
}

export default function GSTR2BMismatch() {
  return (
    <main style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', fontFamily: 'DM Sans, sans-serif', color: '#1A1208' }}>
      <a href="/" style={{ color: '#0369A1', textDecoration: 'none', fontSize: '14px' }}>← Back to Home</a>

      <div style={{ display: 'inline-block', background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#075985', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '20px', marginBottom: '20px' }}>GST & Compliance</div>

      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>GSTR-2B vs Books Mismatch — Complete Guide for CAs</h1>

      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#6B6560', marginBottom: '36px', paddingBottom: '28px', borderBottom: '1px solid #E8E3D8', flexWrap: 'wrap' }}>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-calendar" style={{fontSize:'14px'}} aria-hidden="true"></i> May 25, 2026</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-clock" style={{fontSize:'14px'}} aria-hidden="true"></i> 9 min read</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-user" style={{fontSize:'14px'}} aria-hidden="true"></i> ClearLedger Team</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-tag" style={{fontSize:'14px'}} aria-hidden="true"></i> GST, GSTR-2B, ITC, Reconciliation</span>
      </div>

      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#6B6560', marginBottom: '40px', fontWeight: '300' }}>Every CA in India has faced this situation: you open your client's GSTR-2B, compare it with the purchase register, and the numbers don't match. Some invoices are missing. Some amounts are off by a few rupees. Here's a complete, practical guide to understanding exactly what's happening — and fixing it before the deadline.</p>

      <div style={{ background: '#F5F3EE', border: '1px solid #E8E3D8', borderLeft: '3px solid #0369A1', borderRadius: '8px', padding: '24px 28px', marginBottom: '48px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#075985', marginBottom: '14px' }}>Table of Contents</div>
        <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['What is GSTR-2B and How is it Different from 2A?', '5 Types of GSTR-2B Mismatch', 'What\'s Actually at Risk — ITC Numbers', 'How to Read a GSTR-2B Mismatch Report', 'How to Fix Each Type of Mismatch', 'The Monthly GST Reconciliation Timeline'].map((item, i) => (
            <li key={i}><span style={{ fontSize: '14px', color: '#6B6560' }}>{item}</span></li>
          ))}
        </ol>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>What is GSTR-2B and How is it Different from 2A?</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>Both GSTR-2A and GSTR-2B show ITC available to you based on what your suppliers have filed. The difference is critical:</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '28px', fontSize: '14px' }}>
        <thead><tr>
          <th style={{ background: '#1A1208', color: '#fff', padding: '12px 16px', textAlign: 'left', fontSize: '13px' }}>Feature</th>
          <th style={{ background: '#1A1208', color: '#fff', padding: '12px 16px', textAlign: 'left', fontSize: '13px' }}>GSTR-2A</th>
          <th style={{ background: '#1A1208', color: '#fff', padding: '12px 16px', textAlign: 'left', fontSize: '13px' }}>GSTR-2B</th>
        </tr></thead>
        <tbody>
          {[
            ['Type', 'Dynamic — updates real time', 'Static — fixed snapshot per month'],
            ['Generated on', 'Continuous', '14th of every month'],
            ['Used for ITC claim', 'No — advisory only', 'Yes — official basis'],
            ['Late supplier filings', 'Appears immediately', 'Not included for that month'],
          ].map(([feature, twoA, twoB], i) => (
            <tr key={i}>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid #E8E3D8', color: '#1A1208', fontWeight: '500', background: i%2===0?'#F5F3EE':'#fff' }}>{feature}</td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid #E8E3D8', color: '#6B6560', background: i%2===0?'#F5F3EE':'#fff' }}>{twoA}</td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid #E8E3D8', color: '#6B6560', background: i%2===0?'#F5F3EE':'#fff' }}>{twoB}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.2)', borderLeft: '4px solid #0369A1', borderRadius: '8px', padding: '20px 24px', margin: '32px 0' }}>
        <p style={{ margin: 0, fontSize: '15px', color: '#1A1208' }}><strong style={{ color: '#075985' }}>Key rule:</strong> Under Section 16(2)(aa) of the CGST Act, ITC can only be claimed on invoices that appear in GSTR-2B. If it's not in 2B, you cannot claim it without risk — regardless of whether you have the physical invoice.</p>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>5 Types of GSTR-2B Mismatch</h2>
      {[
        { title: 'Type 1: Invoice in Books, Missing from GSTR-2B', desc: 'Most common and most damaging. Supplier filed GSTR-1 late (after 13th cutoff), filed with wrong GSTIN, or hasn\'t filed at all. ITC cannot be claimed this month — must wait for next month\'s 2B.' },
        { title: 'Type 2: Invoice in GSTR-2B, Missing from Books', desc: 'An opportunity — you may be missing ITC you\'re entitled to. Invoice not yet entered in books or received late. Investigate and book the invoice if valid.' },
        { title: 'Type 3: Amount Mismatch', desc: 'Invoice appears in both but amounts differ. Even ₹0.50 difference causes a flag. Only the 2B amount is claimable — difference needs supplier amendment or write-off.' },
        { title: 'Type 4: Invoice Number Format Mismatch', desc: '"INV/2025-26/0042" in books vs "INV-2025-26-42" in supplier filing. Auto-matching fails. Needs manual confirmation they\'re the same invoice.' },
        { title: 'Type 5: GSTIN Mismatch', desc: 'Supplier filed against wrong GSTIN — wrong state code, old registration, or typo. Complete ITC denial unless supplier amends with correct GSTIN.' },
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1A1208', marginBottom: '10px' }}>{item.title}</h3>
          <p style={{ lineHeight: '1.85', color: '#6B6560', margin: 0 }}>{item.desc}</p>
        </div>
      ))}

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>What's Actually at Risk — ITC Numbers</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>A typical mid-sized company with ₹80 lakh monthly B2B purchases at 18% GST has ₹14.4 lakh in potential ITC every month:</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '28px', fontSize: '14px' }}>
        <thead><tr>
          {['Mismatch Rate', 'Monthly ITC at Risk', 'Annual ITC at Risk'].map((h, i) => (
            <th key={i} style={{ background: '#1A1208', color: '#fff', padding: '12px 16px', textAlign: 'left', fontSize: '13px' }}>{h}</th>
          ))}
        </tr></thead>
        <tbody>
          {[['3%', '₹43,200', '₹5.18 lakh'], ['5%', '₹72,000', '₹8.64 lakh'], ['10%', '₹1,44,000', '₹17.28 lakh']].map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '12px 16px', borderBottom: '1px solid #E8E3D8', color: '#6B6560', background: i%2===0?'#F5F3EE':'#fff' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderLeft: '4px solid #DC2626', borderRadius: '8px', padding: '20px 24px', margin: '32px 0' }}>
        <p style={{ margin: 0, fontSize: '15px', color: '#7F1D1D' }}><strong>Additional risk:</strong> Wrongly claimed ITC faces 18% interest per annum on reversal, plus penalty up to 100% of tax evaded. The financial exposure is far higher than just the ITC amount.</p>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>How to Fix Each Type of Mismatch</h2>
      {[
        { step: '1', title: 'Download GSTR-2B by the 14th', desc: 'GSTR-2B is generated on the 14th after the supplier filing deadline. Download it as Excel immediately. You have 6 days before the 20th filing deadline.' },
        { step: '2', title: 'Run automated reconciliation first', desc: 'Upload both files to a reconciliation tool that handles fuzzy invoice number matching and Indian number formats. Don\'t start with manual VLOOKUP.' },
        { step: '3', title: 'Contact suppliers for "Missing from 2B" invoices', desc: 'Sort by ITC value. Email top 10–15 suppliers asking them to verify their GSTR-1 filing. Give 48-hour response window. Escalate to phone for large amounts.' },
        { step: '4', title: 'Handle amount mismatches', desc: 'Pull the original invoice. If books are wrong — correct the entry. If supplier filed incorrectly — ask them to amend. For under ₹10 difference, book the 2B amount and write off.' },
        { step: '5', title: 'Investigate "In 2B, Not in Books"', desc: 'Don\'t automatically book every 2B entry. Verify the invoice is valid, supplier is real, goods/services were received. Then book and claim.' },
        { step: '6', title: 'Document pending mismatches', desc: 'Keep email/WhatsApp follow-up trail for unresolved invoices before filing deadline. This is your evidence if the claim is questioned during assessment.' },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
          <div style={{ minWidth: '32px', height: '32px', background: '#0369A1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', marginTop: '2px' }}>{item.step}</div>
          <div>
            <strong style={{ display: 'block', fontSize: '15px', color: '#1A1208', marginBottom: '4px' }}>{item.title}</strong>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.75', color: '#6B6560' }}>{item.desc}</p>
          </div>
        </div>
      ))}

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>The Monthly GST Reconciliation Timeline</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '28px', fontSize: '14px' }}>
        <thead><tr>
          {['Date', 'Action', 'Why'].map((h, i) => (
            <th key={i} style={{ background: '#1A1208', color: '#fff', padding: '12px 16px', textAlign: 'left', fontSize: '13px' }}>{h}</th>
          ))}
        </tr></thead>
        <tbody>
          {[
            ['1st–10th', 'Book all purchase invoices', 'Clean register before 2B comparison'],
            ['11th–13th', 'Validate GSTINs in purchase register', 'Catch your own errors first'],
            ['14th', 'Download GSTR-2B immediately', 'Maximize time for follow-up'],
            ['14th–16th', 'Run reconciliation, get mismatch report', 'Categorize while there\'s time to fix'],
            ['16th–18th', 'Contact suppliers for top mismatches', 'Suppliers need time to amend GSTR-1'],
            ['19th', 'Final ITC review, decide what to claim', 'Buffer for last-minute responses'],
            ['20th', 'File GSTR-3B', 'Deadline'],
          ].map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '12px 16px', borderBottom: '1px solid #E8E3D8', color: j===0?'#1A1208':'#6B6560', fontWeight: j===0?'600':'400', background: i%2===0?'#F5F3EE':'#fff' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.25)', borderRadius: '12px', padding: '32px 36px', textAlign: 'center', margin: '48px 0' }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', marginBottom: '10px', color: '#1A1208' }}>Reconcile GSTR-2B vs Books in minutes</h3>
        <p style={{ fontSize: '14px', color: '#6B6560', marginBottom: '20px' }}>Upload your purchase register and GSTR-2B Excel. ClearLedger auto-matches invoices, handles format differences, flags ITC at risk, and generates an actionable report.</p>
        <a href="https://clearledger.co.in" style={{ display: 'inline-block', background: '#0369A1', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>Try GST 2B Reconciliation Free →</a>
      </div>

      <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid #E8E3D8' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#9B9590', marginBottom: '16px' }}>Related Articles</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { tag: 'GST', title: 'GST Reconciliation Errors: Why They Happen and How to Fix Them', href: '/blog/gst-reconciliation-errors' },
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
