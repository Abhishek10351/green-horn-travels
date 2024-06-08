import AssamPage from "../../../../sites/location/places/assam/AssamPage";
import ArunachalPage from "../../../../sites/location/places/arunachal/ArunachalPage";
import MeghalayaPage from "../../../../sites/location/places/meghalaya/MeghalayaPage";

export default async function LocationPage({ params }) {
    const supportedLocations = [
        "meghalaya",
        "assam",
        "arunachal pradesh",
        "arunachal",
    ];

    const place = decodeURIComponent(params.place).toLowerCase();

    const placeObject = {
        meghalaya: MeghalayaPage,
        assam: AssamPage,
        "arunachal pradesh": ArunachalPage,
        arunachal: ArunachalPage,
    };
    if (supportedLocations.includes(place)) {
        return <>{placeObject[place]()}</>;
    }
    else {
        return <h1>404 - Not Found</h1>;
    }
}
