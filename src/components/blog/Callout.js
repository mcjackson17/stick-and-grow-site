export default function Callout({ type = 'info', children }) {
  const styles = {
    info: 'bg-[#e0fcf9] border-l-[#00ead9]',
    warning: 'bg-yellow-100 border-l-yellow-400',
    tip: 'bg-[#fdf4ff] border-l-[#cc01ff]',
  }
  const labels = { info: 'INFO', warning: 'HEADS UP', tip: 'PRO TIP' }

  return (
    <div className={`border-l-[6px] border-2 border-black ${styles[type]} p-6 my-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
      <div className="text-xs font-black uppercase tracking-widest mb-2 font-mono">{labels[type]}</div>
      <div className="font-bold text-gray-700">{children}</div>
    </div>
  )
}
