import { AppStoreButton, GalaxyStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Navbar } from '@/components/base/navbar/Navbar';

const AboutUs = () => {
  return (
    <>
        <Navbar />
    <div>AboutUs</div>
     <div className="flex flex-col items-start gap-3 md:flex-row">
            <GooglePlayButton size="md" />
            <AppStoreButton size="md" />
            <GalaxyStoreButton size="md" />
        </div>
    </>
  )
}

export default AboutUs