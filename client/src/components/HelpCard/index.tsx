import { Card } from '@heroui/react'
import { ArrowRight, Comment } from '@gravity-ui/icons'

const HelpCard = () => (
  <Card className="px-5 py-4.5">
    <Card.Content className="flex-row items-center gap-3.5">
      <div className="bg-(--accent)/10 rounded-[20px] size-10 flex items-center justify-center shrink-0">
        <Comment width={18} height={18} className="text-(--accent)" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold">Necesito ayuda</p>
        <p className="text-xs text-muted">Hablá con nuestro equipo</p>
      </div>
      <ArrowRight width={16} height={16} className="text-muted shrink-0" />
    </Card.Content>
  </Card>
)

export default HelpCard
