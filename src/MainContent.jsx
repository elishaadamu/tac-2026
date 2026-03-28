import React, { useState } from "react";

const MainContent = ({ data }) => {
  const objectives = data.children;
  const [activeObjectiveName, setActiveObjectiveName] = useState(objectives[0]?.name);
  const [activeMeasureName, setActiveMeasureName] = useState(() => {
    const firstObjective = objectives[0];
    if (firstObjective?.name === "Review" && firstObjective.children?.[0]?.children?.[0]) {
      return firstObjective.children[0].children[0].name;
    }
    return firstObjective?.children?.[0]?.name;
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleObjectiveClick = (objectiveName) => {
    setActiveObjectiveName(objectiveName);
    const newActiveObjective = objectives.find((o) => o.name === objectiveName);
    const newMeasures = newActiveObjective?.children || [];
    
    if (newMeasures.length > 0 && newMeasures[0].children) {
      // If the first measure has children, pick the first child
      setActiveMeasureName(newMeasures[0].children[0]?.name || newMeasures[0].name);
    } else {
      setActiveMeasureName(newMeasures[0]?.name);
    }
    setIsSidebarOpen(false);
  };

  const activeObjective = objectives.find((o) => o.name === activeObjectiveName);
  const measures = activeObjective?.children || [];
  
  // Find active content item and its index
  let activeMeasure;
  let activeMeasureIndex = 0;
  
  // Check if we are dealing with a nested structure (like Review or Participation)
  const isNested = measures.length > 0 && measures.some(m => m.children);

  if (isNested) {
    let found = false;
    for (const measure of measures) {
      const foundIndex = measure.children?.findIndex((m) => m.name === activeMeasureName);
      if (foundIndex !== undefined && foundIndex !== -1) {
        activeMeasure = measure.children[foundIndex];
        activeMeasureIndex = foundIndex + 1;
        found = true;
        break;
      }
    }
    // Fallback if not found in children (might be a top-level parent)
    if (!found) {
      activeMeasure = measures.find((m) => m.name === activeMeasureName);
      activeMeasureIndex = measures.findIndex((m) => m.name === activeMeasureName) + 1;
    }
  } else {
    const foundIndex = measures.findIndex((m) => m.name === activeMeasureName);
    activeMeasure = measures[foundIndex];
    activeMeasureIndex = foundIndex + 1;
  }

  const goalColors = ["#46b96e", "#eec722", "#6273d1", "#3799dc", "#e33bba"];
  const activeObjectiveIndex = objectives.findIndex((o) => o.name === activeObjectiveName);
  const activeGoalColor = goalColors[activeObjectiveIndex % goalColors.length] || "#46b96e";

  return (
    <div
      className="h-full flex flex-col relative"
      style={{
        "--active-goal-color": activeGoalColor,
      }}
    >
      {/* Horizontal Goal Tabs - FIXED TOP */}
      <div className="border-b border-gray-700 bg-gray-900 w-full px-4 flex-none z-20">
        <nav className="-mb-px flex flex-wrap gap-2 justify-center py-2" aria-label="Tabs">
          {objectives.map((objective, index) => (
            <button
              key={objective.name}
              onClick={() => handleObjectiveClick(objective.name)}
              style={{ "--goal-color": goalColors[index % goalColors.length] }}
              className={`${
                activeObjectiveName === objective.name
                  ? "bg-[var(--goal-color)] text-white font-semibold shadow-md"
                  : "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-[var(--goal-color)] hover:text-white"
              } text-center py-2 px-4 rounded-t-lg font-medium text-sm sm:text-base transition-all duration-300 ease-in-out`}
            >
              {index + 1}. {objective.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden min-h-0">
        {/* Mobile sidebar toggle */}
        <div className="md:hidden p-4 border-b border-gray-800 flex-none bg-gray-900">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-gray-700 text-gray-200 font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-between"
          >
            <span>{isSidebarOpen ? "Hide" : "Show"} Measures</span>
            <span className="text-xs uppercase bg-gray-600 px-2 py-1 rounded">{activeMeasure?.name}</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row flex-grow w-full overflow-hidden relative min-h-0">
          {/* Backdrop for mobile */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar - 50% width */}
          <div
            className={`
            flex flex-col
            md:w-[50%] h-full border-r border-gray-800 bg-gray-800
            fixed md:static top-0 left-0 h-full w-4/5 max-w-sm p-6 shadow-xl z-50 transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
          >
            <h2 className="text-2xl font-bold text-gray-400 mb-6 px-2 tracking-widest mt-2 uppercase">
              {isNested ? "Categories" : "Measures"}
            </h2>
            <div className="space-y-3 px-1 pb-10 flex-grow overflow-y-auto">
              {isNested ? (
                measures.map((category) => (
                  <div key={category.name} className="mb-10">
                    <h3 className="text-base font-black text-gray-500 uppercase tracking-[0.2em] px-3 mb-5 flex items-center">
                      <span className="w-2.5 h-2.5 bg-gray-600 rounded-full mr-4"></span>
                      {category.name}
                    </h3>
                    <div className="space-y-3">
                      {category.children?.map((item, idx) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setActiveMeasureName(item.name);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border-l-8 ${
                            activeMeasureName === item.name
                              ? "bg-[var(--active-goal-color)] bg-opacity-20 text-white font-medium border-[var(--active-goal-color)] shadow-sm"
                              : "text-gray-400 border-transparent hover:bg-gray-700/50 hover:text-gray-100"
                          }`}
                        >
                          <div className="text-xl font-bold leading-tight">
                            {idx + 1}. {item.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                measures.map((measure, idx) => (
                  <button
                    key={measure.name}
                    onClick={() => {
                      setActiveMeasureName(measure.name);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border-l-8 ${
                      activeMeasureName === measure.name
                        ? "bg-[var(--active-goal-color)] bg-opacity-20 text-white font-medium border-[var(--active-goal-color)] shadow-sm"
                        : "text-gray-400 border-transparent hover:bg-gray-700/50 hover:text-gray-100"
                    }`}
                  >
                    <div className="text-xl font-bold leading-tight">{idx + 1}. {measure.name}</div>
                    <div className="text-base opacity-60 mt-2 line-clamp-2">{measure.description}</div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Report Content - 50% width */}
          <div className="w-full md:w-[50%] flex-grow flex flex-col h-full bg-gray-950/30 overflow-hidden">
            <div className="flex-grow p-6 md:p-12 flex flex-col overflow-y-auto scroll-smooth">
              <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-[var(--active-goal-color)] mb-10 flex items-center gap-4">
                  <span className="text-4xl font-black opacity-40">{activeMeasureIndex}.</span>
                  {activeMeasure?.name}
                </h2>
                <div className="space-y-10">
                  {activeMeasure?.iframeUrl ? (
                    <div className="w-full h-[70vh] bg-gray-900 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl relative group hover:border-[var(--active-goal-color)]/50 transition-colors duration-500">
                      <iframe 
                        src={activeMeasure.iframeUrl} 
                        className="w-full h-full border-0" 
                        title={activeMeasure.name}
                        loading="lazy"
                      />
                    </div>
                  ) : activeMeasure?.imageUrl ? (
                    <div className="w-full space-y-8 flex flex-col">
                      {activeMeasure.content && (
                        <div className="w-full order-1">
                          <div className={`grid grid-cols-1 ${activeMeasure.content.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-8`}>
                            {activeMeasure.content.map((c, i) => (
                              (c.label === "Status" || c.label === "Financial Planning" || c.label === "PBPP" || c.label === "Public Participation" || c.label === "Budgeting" || c.label === "Consistency" || c.label === "Monitoring" || c.label === "Agreements" || c.label === "Freight Planning" || c.label === "Participation Plan") ? (
                                <div key={i} className={`mb-6 ${c.label === "Status" ? "text-center" : "text-left"}`}>
                                  <div className={`text-gray-400 uppercase tracking-widest text-xs font-bold mb-2 ${c.label === "Status" ? "" : "border-b border-gray-800 pb-2 inline-block mb-4"}`}>{c.label}</div>
                                  <div className="text-xl font-bold text-gray-100 whitespace-pre-wrap leading-relaxed">{c.text}</div>
                                </div>
                              ) : (
                                <div 
                                  key={i} 
                                  className={`bg-gray-950/80 p-8 rounded-3xl border-l-[6px] border-[var(--active-goal-color)] shadow-2xl transform hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between ${
                                    activeMeasure.content.length === 1 ? "max-w-4xl mx-auto" : ""
                                  }`}
                                >
                                  <div>
                                    <h4 className="text-xs font-black text-[var(--active-goal-color)] uppercase tracking-[0.3em] mb-6">
                                      {c.label}
                                    </h4>
                                    <p className="text-gray-100 text-lg sm:text-xl italic leading-relaxed font-light whitespace-pre-wrap">
                                      "{c.text}"
                                    </p>
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="w-full bg-gray-900 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl group hover:border-[var(--active-goal-color)]/50 transition-all duration-500 order-2">
                        <img 
                          src={activeMeasure.imageUrl} 
                          alt={activeMeasure.name}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  ) : activeMeasure?.content ? (
                    <div className="w-full">
                      <div className={`grid grid-cols-1 ${activeMeasure.content.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-8`}>
                        {activeMeasure.content.map((c, i) => (
                          (c.label === "Status" || c.label === "Financial Planning" || c.label === "PBPP" || c.label === "Public Participation" || c.label === "Budgeting" || c.label === "Consistency" || c.label === "Monitoring" || c.label === "Agreements" || c.label === "Freight Planning" || c.label === "Participation Plan") ? (
                            <div key={i} className={`mb-10 ${c.label === "Status" ? "text-center" : "text-left"} border-b border-gray-800 pb-6`}>
                              <div className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-3">{c.label}</div>
                              <div className="text-2xl font-bold text-gray-100 whitespace-pre-wrap leading-relaxed">{c.text}</div>
                            </div>
                          ) : (
                            <div 
                              key={i} 
                              className={`bg-gray-950/80 p-8 rounded-3xl border-l-[6px] border-[var(--active-goal-color)] shadow-2xl transform hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between ${
                                activeMeasure.content.length === 1 ? "max-w-4xl mx-auto" : ""
                              }`}
                            >
                              <div>
                                <h4 className="text-xs font-black text-[var(--active-goal-color)] uppercase tracking-[0.3em] mb-6">
                                  {c.label}
                                </h4>
                                <p className="text-gray-100 text-lg sm:text-xl italic leading-relaxed font-light whitespace-pre-wrap">
                                  "{c.text}"
                                </p>
                              </div>
                              <div className="mt-8 flex justify-end">
                                <div className="w-12 h-1 bg-[var(--active-goal-color)]/30 rounded-full"></div>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  ) : activeMeasure?.children?.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/40 p-8 rounded-3xl border border-gray-700/50 hover:border-[var(--active-goal-color)] transition-all duration-700 group shadow-2xl backdrop-blur-sm"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="w-4 h-4 bg-[var(--active-goal-color)] rounded-full mr-5 shadow-[0_0_15px_var(--active-goal-color)] group-hover:scale-125 transition-transform duration-500"></span>
                        {item.name}
                      </h3>
                      {item.content ? (
                        <div className="mt-6 space-y-8">
                          {item.content.map((c, i) => (
                            <div key={i} className="bg-gray-950/80 p-8 rounded-2xl border-l-[6px] border-[var(--active-goal-color)] shadow-inner transform group-hover:translate-x-1 transition-transform duration-500">
                              <h4 className="text-xs font-black text-[var(--active-goal-color)] uppercase tracking-[0.3em] mb-4">
                                {c.label}
                              </h4>
                              <p className="text-gray-100 text-xl italic leading-relaxed font-light">
                                "{c.text}"
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  {(!activeMeasure?.children || activeMeasure.children.length === 0) && !activeMeasure?.content && !activeMeasure?.iframeUrl && (
                    <div className="text-center py-20">
                      <h3 className="text-2xl font-bold text-gray-500">Information for this section will be update soon.</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
