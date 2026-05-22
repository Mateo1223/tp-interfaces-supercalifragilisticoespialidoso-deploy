import { Trolley } from '@gravity-ui/icons'

interface Props {
  label: string
  currentStepDescription?: string
}

const DeliveryBanner = ({ label, currentStepDescription }: Props) => (
  <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-7 flex items-center gap-6">
    <div className="bg-white/10 rounded-[36px] size-18 flex items-center justify-center shrink-0">
      <Trolley width={32} height={32} className="text-white" />
    </div>
    <div className="flex-1">
      <p className="text-lg font-bold text-white leading-tight">{label}</p>
      <p className="text-sm text-white/70 mt-1.5">{currentStepDescription}</p>
    </div>
  </div>
)

export default DeliveryBanner
