import type { ReactNode } from 'react'

interface ShowcaseSectionProps {
  children: ReactNode
}

interface ShowcaseSectionTitleProps {
  eyebrow: string
  title: string
}

const Root = ({ children }: ShowcaseSectionProps) => {
  return <section className="flex-col flex py-14 gap-8">{children}</section>
}

const Header = ({ children }: ShowcaseSectionProps) => {
  return <div className="flex items-center justify-between gap-3">{children}</div>
}

const Title = ({ eyebrow, title }: ShowcaseSectionTitleProps) => {
  return (
    <div>
      <p className="text-accent font-bold text-xs tracking-wide">{eyebrow}</p>

      <h2 className="font-bold text-3xl text-foreground">{title}</h2>
    </div>
  )
}

const Action = ({ children }: ShowcaseSectionProps) => {
  return <div>{children}</div>
}

const Content = ({ children }: ShowcaseSectionProps) => {
  return <div className="">{children}</div>
}

type ShowcaseSectionComponent = typeof Root & {
  Header: typeof Header
  Title: typeof Title
  Action: typeof Action
  Content: typeof Content
}

const ShowcaseSection = Root as ShowcaseSectionComponent

ShowcaseSection.Header = Header
ShowcaseSection.Title = Title
ShowcaseSection.Action = Action
ShowcaseSection.Content = Content

export default ShowcaseSection
