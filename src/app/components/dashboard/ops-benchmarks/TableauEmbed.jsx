"use client"

import React, { useEffect } from 'react'

const TableauEmbed = () => {
    useEffect(() => {
        var divElement = document.getElementById("viz1701617632527");
        var vizElement = divElement.getElementsByTagName("object")[0];
        if (divElement.offsetWidth > 800) {
          vizElement.style.width = "1020px";
          vizElement.style.height = "675px";
        } else if (divElement.offsetWidth > 500) {
          vizElement.style.width = "1020px";
          vizElement.style.height = "675px";
        } else {
          vizElement.style.width = "1020px";
          vizElement.style.height = "675px";
        }
        var scriptElement = document.createElement("script");
        scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      }, [])
      
  return (
    <>
        <div className="tableauPlaceholder w-max" id="viz1701617632527" style={{position: "relative"}}>
            <noscript>
              <a href="#"><img alt=" " src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Kr&#47;KrustyKrabCocktailBar&#47;SummaryPage&#47;1_rss.png" style={{border: "none"}} /></a>
            </noscript>
            <object className="tableauViz" style={{display: 'none'}}>
              <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" /> <param name="embed_code_version" value="3" /> <param name="site_root" value="" /><param name="name" value="KrustyKrabCocktailBar&#47;SummaryPage" />
              <param name="tabs" value="yes" /><param name="toolbar" value="yes" /><param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Kr&#47;KrustyKrabCocktailBar&#47;SummaryPage&#47;1.png" />
              <param name="animate_transition" value="yes" /><param name="display_static_image" value="yes" /><param name="display_spinner" value="yes" /><param name="display_overlay" value="yes" /><param name="display_count" value="yes" />
              <param name="language" value="en-US" />
            </object>
          </div>
    </>
  )
}

export default TableauEmbed