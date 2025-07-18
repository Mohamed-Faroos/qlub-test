export type NearbySearchRequestProps = {
    location: string; // format: "lat,lng"
    radius: number; // in meters
    type?: string;
    apiKey: string;
};