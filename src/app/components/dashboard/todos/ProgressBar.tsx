"use client"

import { useState } from "react";

const ProgressBar = ({statusProp} : any) => {

    console.log('statusProp', statusProp)
    if (statusProp == "backlog") {
        return <progress className="progress w-100" value="25" max="100"></progress>
    }
    if (statusProp == "todo") {
        return <progress className="progress w-100" value="50" max="100"></progress>
    }
    if (statusProp == "inprogress") {
        return <progress className="progress w-100" value="75" max="100"></progress>
    }
    if (statusProp == "done") {
        return <progress className="progress w-100" value="100" max="100"></progress>
    }
}

export default ProgressBar