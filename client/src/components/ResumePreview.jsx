import React from "react"
import ClassicTemplate from "./templates/ClassicTemplate"
import ModernTemplate from "./templates/ModernTemplate"
import MinimalTemplate from "./templates/MinimalTemplate"
import MinimalImageTemplate from "./templates/MinimalImageTemplate"

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />

      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />

      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />

      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />
    }
  }

  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={"border border-gray-200 print:border-none print:border-none" + classes}>
        {renderTemplate()}
      </div>

     <style>
{`
@page {
  size: A4;
  margin: 0;
}

@media print {
  html, body {
    width: 210mm;
    height: 297mm;
  }

  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    line-height: 1.2;
  }

 @media print {
  #resume-preview {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* or center */
  }
}


  svg {
    display: block;
  }

  * {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 0 !important;
  }
}


`}
</style>
    </div>
  )
}

export default ResumePreview
