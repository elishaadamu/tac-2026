import React, { useState } from 'react';
import './FY27UPWP.css';

const FY27UPWP = () => {
  const [activeSection, setActiveSection] = useState('upwp');
  const [activeSubSection, setActiveSubSection] = useState('accomplishments');
  const [activeCategory, setActiveCategory] = useState('planning-documents');

  const navTo = (section, sub, category) => {
    setActiveSection(section);
    if (!sub) {
      const defaultSubs = {
        upwp: 'accomplishments',
        allocation: 'stbg',
        scoring: 'scores',
        info: 'general'
      };
      const newSub = defaultSubs[section];
      setActiveSubSection(newSub);
      // Also reset category to first available
      if (newSub === 'accomplishments') setActiveCategory('planning-documents');
      else if (newSub === 'priorities') setActiveCategory('long-range-planning');
      else if (newSub === 'fund_management') setActiveCategory('revenues');
      else setActiveCategory(Object.keys(sections[section].subSections[newSub].categories || {})[0] || 'STBG/CMAQ Scoring');
    } else {
      setActiveSubSection(sub);
      if (!category) {
        const defaultCats = {
          accomplishments: 'planning-documents',
          priorities: 'long-range-planning',
          fund_management: 'revenues',
          stbg: 'STBG',
          cmaq: 'CMAQ',
          crp: 'CRP',
          scores: 'STBG/CMAQ Scoring',
          general: 'Certification-Review'
        };
        setActiveCategory(defaultCats[sub]);
      } else {
        setActiveCategory(category);
      }
    }
  };

  const sections = {
    upwp: {
      title: 'Draft FY27 UPWP',
      subSections: {
        accomplishments: {
          title: 'Accomplishments',
          categories: {
            'planning-documents': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Planning Documents</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">Update of the <strong>Metropolitan Transportation Plan (MTP/LRTP)</strong></li>
                    <li className="upwp-list-item">Update of the <strong>Metropolitan Transportation Improvement Program (TIP)</strong></li>
                    <li className="upwp-list-item"><strong>Air Quality Conformity</strong>: Ensuring regional plans comply with CAA</li>
                    <li className="upwp-list-item">Processed amendments (MTP & MTIP)</li>
                    <li className="upwp-list-item">Completion of the <strong>Unified Planning Work Program (UPWP)</strong></li>
                  </ul>
                </div>
              </div>
            ),
            'planning-studies': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Planning Studies and Tech Work</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">Freight planning initiatives = map – curfc corridors map</li>
                    <li className="upwp-list-item">Environmental justice or equity analysis = Consultant</li>
                    <li className="upwp-list-item">Participated in corridor studies (e.g. US 460 STARS Study)</li>
                  </ul>
                </div>
              </div>
            ),
            'data-collection-analysis': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Data Collection and Analysis</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">Travel demand forecasting model = kick-off for PLAN2055</li>
                    <li className="upwp-list-item">Performance measure monitoring (PM1, PM2, PM3, TAM & Transit Safety)</li>
                    <li className="upwp-list-item">Data Integration: Deployment of interactive dashboards for monitoring regional performance measures</li>
                  </ul>
                </div>
              </div>
            ),
            'public-outreach': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Public Outreach</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">MTIP and Conformity reports = public review and public meetings (date)</li>
                  </ul>
                </div>
              </div>
            ),
            'coordination-compliance': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Coordination and Compliance</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">Coordination with VDOT, transit agencies, and local governments</li>
                    <li className="upwp-list-item">SSR7, STBG/CMAQ, & TAP Support</li>
                  </ul>
                </div>
              </div>
            )
          }
        },
        priorities: {
          title: 'Priorities',
          categories: {
            'long-range-planning': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Long-Range Planning</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">Begin or continue update of the <strong>MTP/LRTP</strong></li>
                    <li className="upwp-list-item">Draft schedule implementation</li>
                  </ul>
                </div>
              </div>
            ),
            'short-range-programming': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Short-Range Programming</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">Development of the <strong>MTIP</strong></li>
                  </ul>
                </div>
              </div>
            ),
            'tech-data-improvements': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Tech & Data Improvements</h3></header>
                <div className="upwp-card">
                  <ul className="upwp-list">
                    <li className="upwp-list-item">Update regional travel demand model</li>
                    <li className="upwp-list-item">Expand GIS datasets</li>
                  </ul>
                </div>
              </div>
            )
          }
        },
        fund_management: {
          title: 'Fund Management',
          categories: {
            'revenues': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Revenues</h3></header>
                <div className="upwp-card">
                  <div className="upwp-table-container">
                    <table className="upwp-table">
                      <thead><tr><th>Source</th><th>FY27 Amount</th><th>Status</th></tr></thead>
                      <tbody>
                        <tr><td>PL Funding</td><td>$XXX,XXX</td><td>Allocated</td></tr>
                        <tr><td>Local Match</td><td>$XX,XXX</td><td>Pending</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ),
            'expenditure': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Expenditure</h3></header>
                <div className="upwp-card">
                  <div className="upwp-table-container">
                    <table className="upwp-table">
                      <thead><tr><th>Category</th><th>FY27 Budget</th></tr></thead>
                      <tbody><tr><td>Personnel</td><td>$XXX,XXX</td></tr></tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }
        }
      }
    },
    allocation: {
      title: 'STBG Allocation Plan',
      subSections: {
        stbg: {
          title: 'STBG',
          categories: {
            'STBG': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">STBG (Surface Transportation Block Grant Program)</h3></header>
                <div className="upwp-card">
                  <p style={{marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-main)'}}>
                    Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment 
                    or business opportunity. Prohibits discrimination based upon race, color creed, national origin, 
                    sex, or age in employment or business opportunity.
                  </p>
                  <div className="upwp-table-container">
                    <table className="upwp-table">
                      <thead><tr><th>Project</th><th>Allocation</th></tr></thead>
                      <tbody><tr><td>[Insert Data]</td><td>$---</td></tr></tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }
        },
        cmaq: {
          title: 'CMAQ',
          categories: {
            'CMAQ': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">CMAQ (Congestion Mitigation and Air Quality Improvement Program)</h3></header>
                <div className="upwp-card">
                  <p style={{marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-main)'}}>
                    Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment 
                    or business opportunity. Prohibits discrimination based upon race, color creed, national origin, 
                    sex, or age in employment or business opportunity.
                  </p>
                  <div className="upwp-table-container">
                    <table className="upwp-table">
                      <thead><tr><th>Project</th><th>Allocation</th></tr></thead>
                      <tbody><tr><td>[Insert Data]</td><td>$---</td></tr></tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }
        },
        crp: {
          title: 'CRP',
          categories: {
            'CRP': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">CRP (Carbon Reduction Program)</h3></header>
                <div className="upwp-card">
                  <p style={{marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-main)'}}>
                    Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment 
                    or business opportunity. Prohibits discrimination based upon race, color creed, national origin, 
                    sex, or age in employment or business opportunity.
                  </p>
                  <div className="upwp-table-container">
                    <table className="upwp-table">
                      <thead><tr><th>Project</th><th>Allocation</th></tr></thead>
                      <tbody><tr><td>[Insert Data]</td><td>$---</td></tr></tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }
        }
      }
    },
    scoring: {
      title: 'STBG/CMAQ Scoring',
      subSections: {
        scores: {
          title: 'Scoring',
          categories: {
            'STBG/CMAQ Scoring': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">STBG/CMAQ Scoring</h3></header>
                <div className="upwp-card">
                  <p style={{marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-main)'}}>
                    Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment 
                    or business opportunity. Prohibits discrimination based upon race, color creed, national origin, 
                    sex, or age in employment or business opportunity.
                  </p>
                  <div className="upwp-table-container">
                    <table className="upwp-table">
                      <thead>
                        <tr>
                          <th>Criteria</th>
                          <th>Weight</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Safety</td><td>25%</td><td>Reduction in crash frequency and severity</td></tr>
                        <tr><td>Congestion Mitigation</td><td>25%</td><td>Travel time savings and LOS improvement</td></tr>
                        <tr><td>Accessibility</td><td>20%</td><td>Multi-modal connectivity and job access</td></tr>
                        <tr><td>Environmental Quality</td><td>15%</td><td>Emissions reduction and sustainablity</td></tr>
                        <tr><td>Economic Development</td><td>15%</td><td>Support for regional growth and freight</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }
        }
      }
    },
    info: {
      title: 'INFORMATION ITEMS',
      subSections: {
        general: {
          title: 'Items',
          categories: {
            'Certification-Review': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Certification Review Update</h3></header>
                <div className="upwp-card">
                  <h4 style={{color: 'var(--primary-yellow)', marginBottom: '1rem'}}>10) Certification Review Update Information</h4>
                  <p style={{color: 'var(--text-dim)', lineHeight: '1.6'}}>Program evaluation and compliance tracking for regional planning processes.</p>
                </div>
              </div>
            ),
            'Public-Comment-Period': (
              <div className="upwp-section">
                <header className="upwp-section-header"><h3 className="upwp-section-title">Public Comment Period</h3></header>
                <div className="upwp-card">
                  <h4 style={{color: 'var(--primary-yellow)', marginBottom: '1.5rem'}}>11) Draft MTIP & Regional Conformity Report – Att. 5 Information</h4>
                  <ul className="upwp-list">
                    <li className="upwp-list-item">The Public Comment Period started <strong>March 13, 2026</strong>, and ends <strong>April 12, 2026</strong></li>
                    <li className="upwp-list-item">TCAMPO staff will host a <strong>Public Meeting</strong> at the <strong>Petersburg Library</strong> on April 6, 2026, from 5:00 – 6:30 pm.</li>
                    <li className="upwp-list-item">See <strong>Attachment 5</strong> for the Public Comment Period Fact Sheet.</li>
                  </ul>
                </div>
              </div>
            )
          }
        }
      }
    }
  };

  return (
    <div className="upwp-container">
      <header className="upwp-top-header">
        <div className="upwp-logo">
          <span className="upwp-logo-small">Tri-Cities Area</span>
          <span className="upwp-logo-large">MPO</span>
        </div>
        <div className="upwp-cert-title">Draft FY27 UPWP Dashboard</div>
      </header>

      {/* LEVEL 1: MAIN TABS */}
      <nav className="upwp-nav-bar">
        {Object.keys(sections).map(sec => (
          <button key={sec} className={`upwp-nav-pill ${activeSection === sec ? 'active' : ''}`} onClick={() => navTo(sec)}>{sections[sec].title}</button>
        ))}
      </nav>

      {/* LEVEL 2: SUB TABS */}
      <nav className="upwp-sub-nav-bar" style={{
        display: 'flex', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem', backgroundColor: '#111', borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {Object.keys(sections[activeSection].subSections).map(sub => (
          <button 
            key={sub}
            onClick={() => navTo(activeSection, sub)}
            style={{
              padding: '0.4rem 1.25rem', borderRadius: '0.25rem', border: 'none',
              backgroundColor: activeSubSection === sub ? 'var(--primary-red)' : 'transparent',
              color: activeSubSection === sub ? 'white' : 'rgba(255,255,255,0.6)',
              fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            {sections[activeSection].subSections[sub].title}
          </button>
        ))}
      </nav>

      <div className="upwp-layout-body">
        {/* LEVEL 3: SIDEBAR (CATEGORIES) */}
        <aside className="upwp-sidebar" style={{
          width: '300px', backgroundColor: 'var(--primary-red)', color: 'white', display: 'flex', flexDirection: 'column', paddingTop: '1.5rem', boxShadow: '4px 0 15px rgba(0,0,0,0.2)'
        }}>
          <div className="upwp-sidebar-section-title">CATEGORIES</div>
          <div className="upwp-sidebar-subnav">
            {Object.keys(sections[activeSection].subSections[activeSubSection].categories).map(cat => (
              <div 
                key={cat}
                className={`upwp-sidebar-item ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => navTo(activeSection, activeSubSection, cat)}
              >
                {cat.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="upwp-main-content">
          {sections[activeSection]?.subSections[activeSubSection].categories[activeCategory]}
        </main>
      </div>
    </div>
  );
};

export default FY27UPWP;
