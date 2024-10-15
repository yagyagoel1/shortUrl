import Navbar from "../components/Navbar"
import Analytics from "../components/AnalyticsSection"

const analytics = ()=>{
    return(
        <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <Analytics></Analytics>
      </div>
      
    )
}

export default analytics