export default function MaskedPath() {
  return (
    <div
      className="relative w-[600px]  h-[600px] overflow-hidden rounded-[40px] "
      style={{
        clipPath: "polygon(50% 0%, 82% -0.6%, 81.8% 20.2%, 98.2% 20.2%, 98% 65%, 97.8% 92.6%, 55.6% 92.6%, 27.6% 92.4%, 27.4% 78%, 2.2% 78.2%, 1.6% 12.6%, 18.8% 12.8%, 18.8% 0.2%)",
      }}
    >
      {/* Example content */}
      <div className="w-full h-full bg-red-400 p-8 rounded-[40px]">
      </div>
    </div>
  )
}
