"use client"

const ProgressBar = ({statusProp} : any) => {

    console.log('statusProp', statusProp)
    if (statusProp == "backlog" || statusProp == "Back Log") {
        return <progress className="progress w-100" value="25" max="100"></progress>
    }
    if (statusProp == "todo" || statusProp == "To Do") {
        return <progress className="progress w-100" value="50" max="100"></progress>
    }
    if (statusProp == "inprogress" || statusProp == "In Progress") {
        return <progress className="progress w-100" value="75" max="100"></progress>
    }
    if (statusProp == "done" || statusProp == "Done") {
        return <progress className="progress w-100" value="100" max="100"></progress>
    }
}

export default ProgressBar