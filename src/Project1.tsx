import React from 'react';

const Project1 = () => {
  return (
    <div style={{ padding: '4rem', backgroundColor: '#fffbe6', textAlign: 'left' }}>
      <h1>WORKING EXPERIENCE</h1>
      <p><strong>Import & Export data analyst part-time job:</strong><br/><br/>
        Golden Star Import & Export Corp. 12/2023-09/2024<br/>
• Supported international trade operations by analyzing import and export data with python and excel tools related to raw
materials and fresh produce from the Middle East and Southeast Asia.<br/>
• Provided data-driven insights to optimize logistics, improve supply chain efficiency, and ensure regulatory compliance.<br/>
<br/>
<strong>Data Analysis Internship:</strong><br/>
 Huairui Xinzhi Technology (Beijing) C0., Ltd. 03/2023-06/2023<br/><br/>
Huarui Xinzhi is actively using 3 technologies for its website, according to BuiltWith. These include Google, Google
Cloud, and Instra. The company is in the business of doing AI for image recognition.
Conducted targeted market research, analyzing user behaviors and competitor strategies in the AI sector, which helped
refine Huarui Xinzhi’s approach to market positioning and customer engagement.<br/>
• Streamlined data integration from multiple sources (such as Excel, Google Cloud,SharePoint), ensuring consistent and
high-quality data that reduced processing times and improved analytics accuracy by 3%.<br/>
• Leveraged statistical tools(R, Python) to produce actionable insights that supported strategy shifts, enhancing
competitive positioning within AI and digital technology markets.</p>


      {/* ✅ Correct return button that jumps to Experience section */}
      <a
        href="/#experience"
        className="btn-dark"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '0.8rem 1.5rem',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '2rem',
          textDecoration: 'none'
        }}
      >
        ← Return to Experience
      </a>
    </div>
  );
};

export default Project1;
