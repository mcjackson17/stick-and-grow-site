// Past-client logos. Add an entry and the marquee picks it up; the track
// renders the list four times so the loop has no visible seam (see the
// sg-marquee keyframes in globals.css for why four).
const CLIENTS = [
  { name: 'Vouris', src: '/logos/vouris.svg' },
  { name: 'Zen Healthcare IT', src: '/logos/zen.png' },
  { name: 'Clatter', src: '/logos/clatter.png' },
  { name: 'SecureCDP', src: '/logos/securecdp.png' },
  { name: 'MaxRecall Technologies', src: '/logos/maxrecall.svg' },
]

function LogoRow({ ariaHidden }) {
  return (
    <ul
      className="flex items-center shrink-0 list-none m-0 p-0"
      aria-hidden={ariaHidden || undefined}
    >
      {CLIENTS.map(c => (
        <li key={c.name} className="px-8 md:px-12 shrink-0">
          <img
            src={c.src}
            alt={ariaHidden ? '' : c.name}
            className="h-8 md:h-11 w-auto max-w-[180px] md:max-w-[220px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </li>
      ))}
    </ul>
  )
}

export default function LogoMarquee() {
  return (
    <section className="relative z-10 border-b-[3px] border-black bg-white py-8 md:py-10">
      <p className="text-center text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono mb-6 px-4">
        Built inside teams like these
      </p>

      <div className="sg-marquee relative overflow-hidden">
        <div className="sg-marquee-track flex w-max">
          <LogoRow />
          <LogoRow ariaHidden />
          <LogoRow ariaHidden />
          <LogoRow ariaHidden />
        </div>

        {/* Fade the cut edges so logos enter and leave instead of popping. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
