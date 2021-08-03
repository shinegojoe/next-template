import AppBar from '../layouts/appBar'

export default function Layout({ children }) {
  return (
    <div>
      <AppBar></AppBar>
      {children}
    </div>
  )
}