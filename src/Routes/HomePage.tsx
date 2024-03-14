import Carousell from "../Components/Carousels";
import CardsGallery from "../Components/CardsGallery";
<link rel="stylesheet" href="../styles/Homepage.css" type="text/css" />

export default function HomePage() {
    return (
        <>
            <Carousell />
            <h2 className="text-center display-1">Some vehicles of our storage</h2>
            <CardsGallery/>
        </>
        
    )
}