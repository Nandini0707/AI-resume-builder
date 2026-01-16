import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react"

const ClassicTemplate = ({ data = {}, accentColor = "#000000" }) => {

  const {
    personal_info = {},
    professional_summary = "",
    experience = [],
    projects = [],
    education = [],
    skills = [],
  } = data

  const formatDate = (dateStr) => {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    if (isNaN(date)) return dateStr
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">

      {/* HEADER */}
      <header
        className="text-center mb-8 pb-6 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold mb-2" style={{ color: accentColor }}>
          {personal_info.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {personal_info.email && (
            <Info icon={<Mail className="size-4" />} text={personal_info.email} />
          )}
          {personal_info.phone && (
            <Info icon={<Phone className="size-4" />} text={personal_info.phone} />
          )}
          {personal_info.location && (
            <Info icon={<MapPin className="size-4" />} text={personal_info.location} />
          )}
          {personal_info.linkedIn && (
            <Info icon={<Linkedin className="size-4" />} text={personal_info.linkedIn} />
          )}
          {personal_info.website && (
            <Info icon={<Globe className="size-4" />} text={personal_info.website} />
          )}
        </div>
      </header>

      {/* SUMMARY */}
      {professional_summary && (
        <Section title="PROFESSIONAL SUMMARY" accentColor={accentColor}>
          <p>{professional_summary}</p>
        </Section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <Section title="PROFESSIONAL EXPERIENCE" accentColor={accentColor}>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 pl-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    {formatDate(exp.start_date)} –{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </div>
                </div>
                {exp.description && (
                  <p className="mt-2 whitespace-pre-line">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <Section title="PROJECTS" accentColor={accentColor}>
          <ul className="space-y-3">
            {projects.map((proj, index) => (
              <li
                key={index}
                className="border-l-4 pl-4"
                style={{ borderColor: accentColor }}
              >
                <h3 className="font-semibold">{proj.name}</h3>
                {proj.type && <p className="italic text-sm">{proj.type}</p>}
                {proj.description && <p>{proj.description}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <Section title="EDUCATION" accentColor={accentColor}>
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <h3 className="font-semibold">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                </h3>
                <p>{edu.institution}</p>
              </div>
              <div className="text-sm">
                {formatDate(edu.graduation_date)}
              </div>
            </div>
          ))}
        </Section>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <Section title="CORE SKILLS" accentColor={accentColor}>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span key={index}>• {skill}</span>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

const Section = ({ title, accentColor, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
      {title}
    </h2>
    {children}
  </section>
)

const Info = ({ icon, text }) => (
  <div className="flex items-center gap-1">
    {icon}
    <span className="break-all">{text}</span>
  </div>
)

export default ClassicTemplate
