import { RecoilRoot } from 'recoil'
import { TrackersContainer } from './TrackersContainer'

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <RecoilRoot>
        <div className="container mx-auto px-4 sm:px-0">
          <TrackersContainer />
        </div>
      </RecoilRoot>
    </div>
  )
}

export default App
