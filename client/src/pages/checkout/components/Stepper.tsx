import { Check } from '@gravity-ui/icons'

const Stepper = () => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded-full bg-success flex items-center justify-center shrink-0">
        <Check width={14} height={14} className="text-white" />
      </div>
      <span className="text-sm font-medium">Carrito</span>
    </div>
    <div className="w-6 h-px bg-border" />
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded-full bg-(--accent) flex items-center justify-center text-sm font-bold text-white shrink-0">
        2
      </div>
      <span className="text-sm font-bold">Pago</span>
    </div>
    <div className="w-6 h-px bg-border" />
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold text-muted shrink-0">
        3
      </div>
      <span className="text-sm font-medium text-muted">Confirmación</span>
    </div>
  </div>
)

export default Stepper
