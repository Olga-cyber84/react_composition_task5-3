import React from 'react';

export default function Collapse({collapsedLabel, expandedLabel, isExpanded, onExpandedChange, children}) {
    const handleToggle = () => {
        onExpandedChange(isExpanded);
    }
    return (
            <div className={`collapsed-block${isExpanded ? "" : " collapsed-content"}`} >
                {children}
                <a href="/#" className="collapse-btn" onClick={handleToggle}>{isExpanded ? expandedLabel : collapsedLabel}</a>     
            </div>
    )
}

Collapse.defaultProps = {
    collapsedLabel: "Развернуть",
    expandedLabel: "Свернуть"
}
