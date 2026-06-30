export const metadata = {
  title: 'How to Generate 50 Payslips in 30 Seconds from Excel | ClearLedger',
  description: 'Step-by-step guide to generating multiple payslips at once from an Excel payroll sheet, with PF, ESI, TDS calculations included.',
}

export default function PayslipsInBulk() {
  return (
    <main style={{ maxWidth: '740px', margin: '0 auto', padding: '60px 24px 80px', fontFamily: 'DM Sans, sans-serif', color: '#1A1208' }}>
      <a href="/" style={{ color: '#0369A1', textDecoration: 'none', fontSize: '14px' }}>← Back to Home</a>

      <div style={{ display: 'inline-block', background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.2)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#075985', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '20px', marginBottom: '20px' }}>Payroll & HR</div>

      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px' }}>How to Generate 50 Payslips in 30 Seconds from Excel</h1>

      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#6B6560', marginBottom: '36px', paddingBottom: '28px', borderBottom: '1px solid #E8E3D8', flexWrap: 'wrap' }}>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-calendar" style={{fontSize:'14px'}} aria-hidden="true"></i> May 25, 2026</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-clock" style={{fontSize:'14px'}} aria-hidden="true"></i> 6 min read</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-user" style={{fontSize:'14px'}} aria-hidden="true"></i> ClearLedger Team</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><i className="ti ti-tag" style={{fontSize:'14px'}} aria-hidden="true"></i> Payroll, HR, Payslip</span>
      </div>

      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#6B6560', marginBottom: '40px', fontWeight: '300' }}>Every month, thousands of HR professionals in India open Word, copy-paste a payslip template, change the employee name, update the numbers, save as PDF, repeat — 50 times. It takes 3-4 hours. It doesn't have to. Here's how to do the whole thing in under a minute.</p>

      <div style={{ background: '#F5F3EE', border: '1px solid #E8E3D8', borderLeft: '3px solid #0369A1', borderRadius: '8px', padding: '24px 28px', marginBottom: '48px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#075985', marginBottom: '14px' }}>Table of Contents</div>
        <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['What Should an Indian Payslip Include?', 'PF, ESI, TDS — What\'s Mandatory?', 'How to Structure Your Payroll Excel', 'How to Generate All Payslips at Once', 'Monthly Payslip Checklist'].map((item, i) => (
            <li key={i}><span style={{ fontSize: '14px', color: '#6B6560' }}>{item}</span></li>
          ))}
        </ol>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>What Should an Indian Payslip Include?</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>A payslip is more than a salary statement. It's a legal document employees need for loan applications, tax filings, and visa applications. Missing components cause real problems.</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '28px', fontSize: '14px' }}>
        <thead>
          <tr>
            <th style={{ background: '#1A1208', color: '#fff', padding: '12px 16px', textAlign: 'left', fontWeight: '600', fontSize: '13px' }}>Section</th>
            <th style={{ background: '#1A1208', color: '#fff', padding: '12px 16px', textAlign: 'left', fontWeight: '600', fontSize: '13px' }}>Required Fields</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Header', 'Company name, address, payslip month/year'],
            ['Employee Info', 'Name, employee ID, designation, department'],
            ['Earnings', 'Basic salary, HRA, DA, Special Allowance, Transport Allowance'],
            ['Deductions', 'PF (employee share), ESI (if applicable), TDS, Professional Tax'],
            ['Summary', 'Gross salary, total deductions, net pay (in words and numbers)'],
          ].map(([section, fields], i) => (
            <tr key={i}>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid #E8E3D8', color: '#1A1208', fontWeight: '500', background: i % 2 === 0 ? '#F5F3EE' : '#fff' }}>{section}</td>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid #E8E3D8', color: '#6B6560', background: i % 2 === 0 ? '#F5F3EE' : '#fff' }}>{fields}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>PF, ESI, TDS — What's Mandatory?</h2>

      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1A1208', margin: '28px 0 12px' }}>Provident Fund (PF)</h3>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '12px' }}>Mandatory for employees earning up to ₹15,000 basic salary per month. For employees above ₹15,000, PF is optional but many companies continue it.</p>
      <ul style={{ paddingLeft: '22px', marginBottom: '20px' }}>
        <li style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>Employee contribution: 12% of basic salary</li>
        <li style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>Employer contribution: 12% of basic salary (3.67% to EPF, 8.33% to EPS)</li>
        <li style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>Deduct employee share from gross pay; show both on payslip</li>
      </ul>

      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1A1208', margin: '28px 0 12px' }}>ESI (Employee State Insurance)</h3>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '12px' }}>Applicable only if gross salary is ₹21,000 or below per month AND the establishment has 10+ employees.</p>
      <ul style={{ paddingLeft: '22px', marginBottom: '20px' }}>
        <li style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>Employee contribution: 0.75% of gross salary</li>
        <li style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>Employer contribution: 3.25% of gross salary</li>
      </ul>

      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1A1208', margin: '28px 0 12px' }}>TDS on Salary</h3>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>Calculate projected annual salary → apply slab rates → divide by 12 = monthly TDS. Under the new tax regime (default from FY 2024-25), slabs are simpler. Always factor in the employee's declaration for Section 80C, HRA, and 80D if they've submitted Form 12BB.</p>

      <div style={{ background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.2)', borderLeft: '4px solid #0369A1', borderRadius: '8px', padding: '20px 24px', margin: '32px 0' }}>
        <p style={{ margin: 0, fontSize: '15px', color: '#1A1208' }}><strong style={{ color: '#075985' }}>Common mistake:</strong> Calculating TDS on monthly salary instead of projected annual salary. This leads to under-deduction for the first 10 months and a large deduction in February-March — causing employee complaints every year-end.</p>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>How to Structure Your Payroll Excel</h2>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '16px' }}>Your Excel needs one row per employee, with these columns at minimum:</p>
      <div style={{ background: '#1A1208', color: '#a8d8a8', fontFamily: 'monospace', fontSize: '12px', padding: '20px', borderRadius: '8px', marginBottom: '24px', overflowX: 'auto', lineHeight: '1.8' }}>
        <div>Employee ID | Name | Designation | Department | Basic | HRA | DA |</div>
        <div>Special Allowance | Transport | Gross Salary | PF Employee |</div>
        <div>ESI Employee | TDS | Prof Tax | Total Deductions | Net Pay</div>
      </div>
      <p style={{ lineHeight: '1.85', color: '#6B6560', marginBottom: '20px' }}>Keep formulas in the sheet for PF, ESI, and TDS — don't hardcode values. This way, if a salary changes, all downstream calculations update automatically.</p>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>How to Generate All Payslips at Once</h2>
      {[
        { step: '1', title: 'Prepare your payroll Excel', desc: 'Ensure all columns are present and formulas are correct. Check for missing values — any blank cell in a required column will cause errors in the generated payslip.' },
        { step: '2', title: 'Upload to ClearLedger', desc: 'Upload your payroll Excel to ClearLedger\'s Payslip Generator. Supported formats: .xlsx, .xls, .csv.' },
        { step: '3', title: 'Map your columns', desc: 'Select which column contains Basic Salary, HRA, PF deduction etc. ClearLedger auto-detects most standard column names — you just confirm.' },
        { step: '4', title: 'Enter company details', desc: 'Add your company name and address for the payslip header. This is stored for future months.' },
        { step: '5', title: 'Generate and download', desc: 'Click Generate — download a ZIP with individual PDFs per employee, or a single combined PDF with all payslips. Takes under 30 seconds for 50 employees.' },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
          <div style={{ minWidth: '32px', height: '32px', background: '#0369A1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', marginTop: '2px' }}>{item.step}</div>
          <div>
            <strong style={{ display: 'block', fontSize: '15px', color: '#1A1208', marginBottom: '4px' }}>{item.title}</strong>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.75', color: '#6B6560' }}>{item.desc}</p>
          </div>
        </div>
      ))}

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: '700', margin: '48px 0 16px' }}>Monthly Payslip Checklist</h2>
      <ul style={{ paddingLeft: '22px', marginBottom: '32px' }}>
        {['Update salary for any increments, promotions, or new joiners', 'Check for LOP (Loss of Pay) deductions and adjust basic accordingly', 'Verify PF applicability — did anyone cross the ₹15,000 basic threshold?', 'Check ESI — did anyone\'s gross cross ₹21,000 this month?', 'Update TDS if employee submitted revised Form 12BB', 'Cross-check net pay total against bank transfer amount before sending', 'Archive signed payslip acknowledgments for audit trail'].map((item, i) => (
          <li key={i} style={{ fontSize: '15px', lineHeight: '1.75', color: '#6B6560', marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>

      <div style={{ background: '#E0F2FE', border: '1px solid rgba(3,105,161,0.25)', borderRadius: '12px', padding: '32px 36px', textAlign: 'center', margin: '48px 0' }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', marginBottom: '10px', color: '#1A1208' }}>Generate all payslips in one click</h3>
        <p style={{ fontSize: '14px', color: '#6B6560', marginBottom: '20px' }}>Upload your payroll Excel. ClearLedger generates individual PDF payslips for all employees — with correct PF, ESI, and TDS — in under 30 seconds.</p>
        <a href="https://clearledger.co.in" style={{ display: 'inline-block', background: '#0369A1', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>Try Payslip Generator Free →</a>
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
