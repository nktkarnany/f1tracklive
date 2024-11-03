import type { PositionsRawResponseObj, GetLatestPositionApiRes } from './types';

export function toGetLatestPositionsResponse(data: PositionsRawResponseObj[]): GetLatestPositionApiRes {
  const latestPositions: { [driver_number: number]: PositionsRawResponseObj } = {};

  data.forEach((entry) => {
    const { driver_number, date, position } = entry;
    const currentDate = new Date(date);

    if (!latestPositions[driver_number] || new Date(latestPositions[driver_number].date) < currentDate) {
      latestPositions[driver_number] = { ...entry, date: currentDate };
    }
  });

  // Convert the object to an array, sort by position, and return driver_number and position
  return Object.values(latestPositions)
    .sort((a, b) => a.position - b.position)
    .map(({ driver_number, position }) => ({ driver_number, position, location: null }));
}
