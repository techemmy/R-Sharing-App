export default function ButtonLoader({ color = 'text-white' }) {
  return (
    <div className={`lds-ellipsis ${color}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
