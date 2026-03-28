import React, { useState } from 'react';
import './FY27UPWP.css';
import curfcMapImg from './assets/curfc_map.png';
import equityImg from './assets/equity_analysis.png';

const FY27UPWP = () => {
  const [activeSection, setActiveSection] = useState('accomplishments');

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = {
    accomplishments: {
      title: 'Accomplishments',
      content: (
        <div className="upwp-section">
          <header className="upwp-section-header">
            <h2 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Accomplishments</h2>
          </header>
          
          <div className="upwp-card" style={{padding: 0}}>
            <div className="upwp-split-row" id="planning-documents">
              <div className="upwp-split-left">
                <h3>Planning Documents</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Update of the <strong>Metropolitan Transportation Plan (MTP/LRTP)</strong></li>
                  <li className="upwp-list-item">Update of the <strong>Metropolitan Transportation Improvement Program (TIP)</strong></li>
                  <li className="upwp-list-item"><strong>Air Quality Conformity</strong>: Ensuring regional plans comply with CAA</li>
                  <li className="upwp-list-item">Processed amendments (MTP & MTIP)</li>
                  <li className="upwp-list-item">Completion of the <strong>Unified Planning Work Program (UPWP)</strong></li>
                </ul>
              </div>
            </div>

            <div className="upwp-split-row" id="planning-studies">
              <div className="upwp-split-left">
                <h3>Planning Studies and Technical Work</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Freight planning initiatives = map – curfc corridors map</li>
                  <li className="upwp-list-item">Environmental justice or equity analysis = Consultant</li>
                  <li className="upwp-list-item">Participated in corridor studies (e.g. US 460 STARS Study)</li>
                </ul>
                <img src={curfcMapImg} alt="Freight Corridor Map" className="upwp-image" />
              </div>
            </div>

            <div className="upwp-split-row" id="data-collection-analysis">
              <div className="upwp-split-left">
                <h3>Data Collection and Analysis</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Travel demand forecasting model = kick-off for PLAN2055</li>
                  <li className="upwp-list-item">Performance measure monitoring (PM1, PM2, PM3, TAM & Transit Safety)</li>
                  <li className="upwp-list-item">Data Integration: Deployment of interactive dashboards for monitoring regional performance measures</li>
                </ul>
              </div>
            </div>

            <div className="upwp-split-row" id="public-involvement-outreach">
              <div className="upwp-split-left">
                <h3>Public Involvement and Outreach</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">MTIP and Conformity reports = public review and public meetings (date)</li>
                </ul>
              </div>
            </div>

            <div className="upwp-split-row" id="coordination-compliance">
              <div className="upwp-split-left">
                <h3>Coordination and Compliance</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Coordination with VDOT, transit agencies, and local governments</li>
                  <li className="upwp-list-item" style={{marginLeft: '2rem'}}>SSR7, STBG/CMAQ, & TAP</li>
                  <li className="upwp-list-item">Support for federal requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    priorities: {
      title: 'Priorities',
      content: (
        <div className="upwp-section">
          <header className="upwp-section-header">
            <h2 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Priorities</h2>
          </header>

          <div className="upwp-card" style={{padding: 0}}>
            <div className="upwp-split-row" id="long-range-planning">
              <div className="upwp-split-left">
                <h3>Long-Range Planning</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Begin or continue update of the <strong>MTP/LRTP</strong></li>
                  <li className="upwp-list-item">add schedule</li>
                </ul>
              </div>
            </div>

            <div className="upwp-split-row" id="short-range-programming">
              <div className="upwp-split-left">
                <h3>Short-Range Programming</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Development of the <strong>MTIP</strong></li>
                </ul>
              </div>
            </div>

            <div className="upwp-split-row" id="technical-data-improvements">
              <div className="upwp-split-left">
                <h3>Technical and Data Improvements</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Update regional travel demand model</li>
                  <li className="upwp-list-item">Expand GIS datasets and performance tracking</li>
                </ul>
              </div>
            </div>

            <div className="upwp-split-row" id="regional-coordination">
              <div className="upwp-split-left">
                <h3>Regional Coordination</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Collaboration with local governments, transit agencies, and VDOT</li>
                </ul>
              </div>
            </div>

            <div className="upwp-split-row" id="public-engagement">
              <div className="upwp-split-left">
                <h3>Public Engagement</h3>
              </div>
              <div className="upwp-split-right">
                <ul className="upwp-list">
                  <li className="upwp-list-item">Expanded outreach to underserved communities</li>
                  <li className="upwp-list-item">Online engagement tools and public workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    fund_management: {
      title: 'Fund Management',
      content: (
        <div className="upwp-section">
          <header className="upwp-section-header">
            <h2 className="upwp-section-title" style={{color: 'var(--primary-red)', textFillColor: 'initial', background: 'none', WebkitTextFillColor: 'initial'}}>Fund Management</h2>
          </header>

          <div className="upwp-card" style={{padding: 0}}>
            <div className="upwp-split-row" id="revenues">
              <div className="upwp-split-left">
                <h3>Revenues</h3>
              </div>
              <div className="upwp-split-right">
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

            <div className="upwp-split-row" id="expenditure">
              <div className="upwp-split-left">
                <h3>Expenditure</h3>
              </div>
              <div className="upwp-split-right">
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
          </div>
        </div>
      )
    },
    allocations: {
      title: 'STBG/CMAQ/CRP',
      content: (
        <div className="upwp-section">
          <header className="upwp-section-header">
             <h2 className="upwp-section-title" style={{marginBottom: '0.5rem', WebkitTextFillColor: 'initial'}}>STBG Allocation Plan</h2>
          </header>

          <div className="upwp-card" style={{padding: 0}}>
            <div className="upwp-split-row" id="stbg-info">
              <div className="upwp-split-left">
                <h3>STBG</h3>
              </div>
              <div className="upwp-split-right">
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

            <div className="upwp-split-row" id="cmaq-info">
              <div className="upwp-split-left">
                <h3>CMAQ</h3>
              </div>
              <div className="upwp-split-right">
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

            <div className="upwp-split-row" id="crp-info">
              <div className="upwp-split-left">
                <h3>CRP</h3>
              </div>
              <div className="upwp-split-right">
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

            <div className="upwp-split-row" id="scoring-info">
              <div className="upwp-split-left">
                <h3>STBG/CMAQ Scoring</h3>
              </div>
              <div className="upwp-split-right">
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
          </div>
        </div>
      )
    }
  };

  return (
    <div className="upwp-container">
      {/* TOP NAV - YELLOW */}
      <nav className="upwp-top-nav">
        <h1>FY27 UPWP Draft</h1>
        <div className="upwp-nav-info">
          <span>Metropolitan Planning Organization | Unified Planning Work Program</span>
        </div>
      </nav>

      <div className="upwp-layout-body">
        {/* SIDE NAV - RED */}
        <aside className="upwp-sidebar">
          <div className="upwp-sidebar-section-title">Overview</div>
          <div 
            className={`upwp-sidebar-item ${activeSection === 'accomplishments' ? 'active' : ''}`}
            onClick={() => setActiveSection('accomplishments')}
          >
            Accomplishments
          </div>
          {activeSection === 'accomplishments' && (
            <div className="upwp-sidebar-subnav">
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('planning-documents')}>Planning Documents</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('planning-studies')}>Studies & Tech Work</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('data-collection-analysis')}>Data & Analysis</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('public-involvement-outreach')}>Public Outreach</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('coordination-compliance')}>Coordination</div>
            </div>
          )}
          
          <div className="upwp-sidebar-section-title">Programming</div>
          <div 
            className={`upwp-sidebar-item ${activeSection === 'priorities' ? 'active' : ''}`}
            onClick={() => setActiveSection('priorities')}
          >
            Priorities
          </div>
          {activeSection === 'priorities' && (
            <div className="upwp-sidebar-subnav">
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('long-range-planning')}>Long-Range Planning</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('short-range-programming')}>Short-Range Programming</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('technical-data-improvements')}>Tech & Data Improvements</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('regional-coordination')}>Regional Coordination</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('public-engagement')}>Public Engagement</div>
            </div>
          )}

          <div className="upwp-sidebar-section-title">Financial</div>
          <div 
            className={`upwp-sidebar-item ${activeSection === 'fund_management' ? 'active' : ''}`}
            onClick={() => setActiveSection('fund_management')}
          >
            Fund Management
          </div>
          {activeSection === 'fund_management' && (
            <div className="upwp-sidebar-subnav">
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('revenues')}>Revenues</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('expenditure')}>Expenditure</div>
            </div>
          )}

          <div 
            className={`upwp-sidebar-item ${activeSection === 'allocations' ? 'active' : ''}`}
            onClick={() => setActiveSection('allocations')}
          >
            STBG/CMAQ/CRP
          </div>
          {activeSection === 'allocations' && (
            <div className="upwp-sidebar-subnav">
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('stbg-info')}>STBG</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('cmaq-info')}>CMAQ</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('crp-info')}>CRP</div>
              <div className="upwp-sidebar-subitem" onClick={() => scrollToId('scoring-info')}>Scoring</div>
            </div>
          )}

          <div className="mt-auto p-4 opacity-50 text-xs">
            v1.5.0-Draft FY27
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="upwp-main-content">
          {sections[activeSection]?.content}
        </main>
      </div>
    </div>
  );
};

export default FY27UPWP;
