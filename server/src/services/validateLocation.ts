import locations from "./locations";

export const isValidLocation = (lat: number, lon: number): boolean => {
    return locations.some(location => location[0] === lat && location[1] === lon);
}
