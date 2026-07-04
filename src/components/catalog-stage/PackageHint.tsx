import type { OmmiLine } from '../../data/ommiCatalog'

type PackageHintProps = {
  line: OmmiLine
}

export function PackageHint({ line }: PackageHintProps) {
  return (
    <div className="package-hint" aria-hidden="true">
      <div className="package-plane package-plane-front">
        <span>OMMI</span>
        <span>{line.name}</span>
      </div>
      <div className="package-plane package-plane-side" />
    </div>
  )
}
