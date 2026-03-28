import React, { useState } from 'react';
import './FY27UPWP.css';

const FY27UPWP = () => {
  const [activeSection, setActiveSection] = useState('accomplishments');
  const [activeSubSection, setActiveSubSection] = useState('planning-documents');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navTo = (section, sub) => {
    setActiveSection(section);
    // If we're just switching main section without specific sub,
    // we take the first sub-section of that new section.
    if (!sub) {
      const defaultSubs = {
        accomplishments: 'planning-documents',
        priorities: 'long-range-planning',
        fund_management: 'revenues',
        allocations: 'stbg-info'
      };
      setActiveSubSection(defaultSubs[section]);
    } else {
      setActiveSubSection(sub);
    }
    // Close mobile menu when selecting a category
    setIsMobileMenuOpen(false);
  };

  const sections = {
    accomplishments: {
      title: 'Accomplishments',
      subSections: {
        'planning-documents': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Planning Documents</h3>
            </header>
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
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Planning Studies and Tech Work</h3>
            </header>
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
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Data Collection and Analysis</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">Travel demand forecasting model = kick-off for PLAN2055</li>
                <li className="upwp-list-item">Performance measure monitoring (PM1, PM2, PM3, TAM & Transit Safety)</li>
                <li className="upwp-list-item">Data Integration: Deployment of interactive dashboards for monitoring regional performance measures</li>
              </ul>
            </div>
          </div>
        ),
        'public-involvement-outreach': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Public Involvement and Outreach</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">MTIP and Conformity reports = public review and public meetings (date)</li>
              </ul>
            </div>
          </div>
        ),
        'coordination-compliance': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Coordination and Compliance</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">Coordination with VDOT, transit agencies, and local governments</li>
                <li className="upwp-list-item" style={{marginLeft: '2rem'}}>SSR7, STBG/CMAQ, & TAP</li>
                <li className="upwp-list-item">Support for federal requirements</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    priorities: {
      title: 'Priorities',
      subSections: {
        'long-range-planning': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Long-Range Planning</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">Begin or continue update of the <strong>MTP/LRTP</strong></li>
                <li className="upwp-list-item">add schedule</li>
              </ul>
            </div>
          </div>
        ),
        'short-range-programming': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Short-Range Programming</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">Development of the <strong>MTIP</strong></li>
              </ul>
            </div>
          </div>
        ),
        'technical-data-improvements': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Technical and Data Improvements</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">Update regional travel demand model</li>
                <li className="upwp-list-item">Expand GIS datasets and performance tracking</li>
              </ul>
            </div>
          </div>
        ),
        'regional-coordination': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Regional Coordination</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">Collaboration with local governments, transit agencies, and VDOT</li>
              </ul>
            </div>
          </div>
        ),
        'public-engagement': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Public Engagement</h3>
            </header>
            <div className="upwp-card">
              <ul className="upwp-list">
                <li className="upwp-list-item">Expanded outreach to underserved communities</li>
                <li className="upwp-list-item">Online engagement tools and public workshops</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    fund_management: {
      title: 'Fund Management',
      subSections: {
        'revenues': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Revenues</h3>
            </header>
            <div className="upwp-card">
              <div className="upwp-table-container">
                <table className="upwp-table">
                  <thead>
                    <tr>
                      <th>Source</th>
                      <th>FY27 Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PL Funding</td>
                      <td>$XXX,XXX</td>
                      <td>Allocated</td>
                    </tr>
                    <tr>
                      <td>Local Match</td>
                      <td>$XX,XXX</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
        'expenditure': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Expenditure</h3>
            </header>
            <div className="upwp-card">
              <div className="upwp-table-container">
                <table className="upwp-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>FY27 Budget</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Personnel</td>
                      <td>$XXX,XXX</td>
                      <td>Staff hours and benefits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      }
    },
    allocations: {
      title: 'STBG/CMAQ/CRP',
      subSections: {
        'stbg-info': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>STBG</h3>
            </header>
            <div className="upwp-card">
              <div className="upwp-highlight-box" style={{background: 'rgba(220, 38, 38, 0.05)', color: 'var(--text-dim)', fontStyle: 'normal'}}>
                Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment or business opportunity.
              </div>
              <div className="upwp-table-container">
                <table className="upwp-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>[Insert Table Data]</td>
                      <td>$---</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
        'cmaq-info': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>CMAQ</h3>
            </header>
            <div className="upwp-card">
              <div className="upwp-highlight-box" style={{background: 'rgba(220, 38, 38, 0.05)', color: 'var(--text-dim)', fontStyle: 'normal'}}>
                Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment or business opportunity.
              </div>
              <div className="upwp-table-container">
                <table className="upwp-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>[Insert Table Data]</td>
                      <td>$---</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
        'crp-info': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>CRP</h3>
            </header>
            <div className="upwp-card">
              <div className="upwp-highlight-box" style={{background: 'rgba(220, 38, 38, 0.05)', color: 'var(--text-dim)', fontStyle: 'normal'}}>
                Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment or business opportunity.
              </div>
              <div className="upwp-table-container">
                <table className="upwp-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>[Insert Table Data]</td>
                      <td>$---</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ),
        'scoring-info': (
          <div className="upwp-section">
            <header className="upwp-section-header">
              <h3 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>STBG/CMAQ Scoring</h3>
            </header>
            <div className="upwp-card">
              <div className="upwp-highlight-box" style={{background: 'rgba(220, 38, 38, 0.05)', color: 'var(--text-dim)', fontStyle: 'normal'}}>
                Prohibits discrimination based upon race, color creed, national origin, sex, or age in employment or business opportunity.
              </div>
              <div className="upwp-table-container">
                <table className="upwp-table">
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>[Insert Table Data]</td><td>---</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      }
    }
  };

  return (
    <div className="upwp-container">
      {/* HEADER - LOGO AND TITLE */}
      <header className="upwp-top-header">
        <div className="upwp-logo">
          <span className="upwp-logo-small">Tri-Cities Area</span>
          <span className="upwp-logo-large">MPO</span>
        </div>
        <div className="upwp-cert-title">Draft FY27 UPWP</div>
        <button 
          className={`upwp-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* PILL NAVIGATION BAR */}
      <nav className="upwp-nav-bar">
        <button
          className={`upwp-nav-pill ${activeSection === 'accomplishments' ? 'active' : ''}`}
          onClick={() => navTo('accomplishments', null)}
        >
          1. Accomplishments
        </button>
        <button
          className={`upwp-nav-pill ${activeSection === 'priorities' ? 'active' : ''}`}
          onClick={() => navTo('priorities', null)}
        >
          2. Priorities
        </button>
        <button
          className={`upwp-nav-pill ${activeSection === 'fund_management' ? 'active' : ''}`}
          onClick={() => navTo('fund_management', null)}
        >
          3. Fund Management
        </button>
        <button
          className={`upwp-nav-pill ${activeSection === 'allocations' ? 'active' : ''}`}
          onClick={() => navTo('allocations', null)}
        >
          4. STBG/CMAQ/CRP
        </button>
      </nav>

      <div className="upwp-layout-body">
        {/* Sidebar overlay for mobile */}
        <div 
          className={`upwp-sidebar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* SIDE NAV - CATEGORIES */}
        <aside className={`upwp-sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="upwp-sidebar-section-title">CATEGORIES</div>
          
          {activeSection === 'accomplishments' && (
            <div className="upwp-sidebar-subnav">
              <div className={`upwp-sidebar-item ${activeSubSection === 'planning-documents' ? 'active' : ''}`} onClick={() => navTo('accomplishments', 'planning-documents')}>Planning Documents</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'planning-studies' ? 'active' : ''}`} onClick={() => navTo('accomplishments', 'planning-studies')}>Studies & Tech Work</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'data-collection-analysis' ? 'active' : ''}`} onClick={() => navTo('accomplishments', 'data-collection-analysis')}>Data & Analysis</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'public-involvement-outreach' ? 'active' : ''}`} onClick={() => navTo('accomplishments', 'public-involvement-outreach')}>Public Outreach</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'coordination-compliance' ? 'active' : ''}`} onClick={() => navTo('accomplishments', 'coordination-compliance')}>Coordination & Compliance</div>
            </div>
          )}

          {activeSection === 'priorities' && (
            <div className="upwp-sidebar-subnav">
              <div className={`upwp-sidebar-item ${activeSubSection === 'long-range-planning' ? 'active' : ''}`} onClick={() => navTo('priorities', 'long-range-planning')}>Long-Range Planning</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'short-range-programming' ? 'active' : ''}`} onClick={() => navTo('priorities', 'short-range-programming')}>Short-Range Programming</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'technical-data-improvements' ? 'active' : ''}`} onClick={() => navTo('priorities', 'technical-data-improvements')}>Tech & Data Improvements</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'regional-coordination' ? 'active' : ''}`} onClick={() => navTo('priorities', 'regional-coordination')}>Regional Coordination</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'public-engagement' ? 'active' : ''}`} onClick={() => navTo('priorities', 'public-engagement')}>Public Outreach</div>
            </div>
          )}

          {activeSection === 'fund_management' && (
            <div className="upwp-sidebar-subnav">
              <div className={`upwp-sidebar-item ${activeSubSection === 'revenues' ? 'active' : ''}`} onClick={() => navTo('fund_management', 'revenues')}>Revenues</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'expenditure' ? 'active' : ''}`} onClick={() => navTo('fund_management', 'expenditure')}>Expenditure</div>
            </div>
          )}

          {activeSection === 'allocations' && (
            <div className="upwp-sidebar-subnav">
              <div className={`upwp-sidebar-item ${activeSubSection === 'stbg-info' ? 'active' : ''}`} onClick={() => navTo('allocations', 'stbg-info')}>STBG</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'cmaq-info' ? 'active' : ''}`} onClick={() => navTo('allocations', 'cmaq-info')}>CMAQ</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'crp-info' ? 'active' : ''}`} onClick={() => navTo('allocations', 'crp-info')}>CRP</div>
              <div className={`upwp-sidebar-item ${activeSubSection === 'scoring-info' ? 'active' : ''}`} onClick={() => navTo('allocations', 'scoring-info')}>STBG/CMAQ Scoring</div>
            </div>
          )}

          <div className="mt-auto p-4 opacity-30 text-xs">
            Draft FY27 UPWP Dashboard
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="upwp-main-content">
          {sections[activeSection]?.subSections[activeSubSection]}
        </main>
      </div>
    </div>
  );
};

export default FY27UPWP;
