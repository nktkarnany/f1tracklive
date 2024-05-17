export function convertDateToOffsetAndFormat(dateString: string, offsetString: string): string {
  // Parse the input date string to a Date object
  const date = new Date(dateString);

  // Extract the sign, hours, and minutes from the offset string
  const offsetMatch = offsetString.match(/([+-])(\d{2}):(\d{2})/);
  if (!offsetMatch) {
    throw new Error('Invalid GMT offset format');
  }

  const offsetSign = offsetMatch[1];
  const offsetHours = parseInt(offsetMatch[2], 10);
  const offsetMinutes = parseInt(offsetMatch[3], 10);

  // Calculate the total offset in minutes
  const totalOffsetMinutes = offsetHours * 60 + offsetMinutes;

  // Get the offset in milliseconds
  const offsetMilliseconds = totalOffsetMinutes * 60 * 1000;

  // Adjust the date by the offset
  const adjustedDate = new Date(date.getTime() + (offsetSign === '+' ? -offsetMilliseconds : offsetMilliseconds));

  // Format the adjusted date as 'dd/MM/yyyy'
  const day = String(adjustedDate.getUTCDate()).padStart(2, '0');
  const month = String(adjustedDate.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = adjustedDate.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export function convertDateToFormat(dateString: string): string {
  // Parse the input date string to a Date object
  const date = new Date(dateString);

  // Format the date as 'dd/MM/yyyy'
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export function isLiveWithOffset(startDateString: string, offsetString: string, endDateString?: string): boolean {
  // Parse the input start date string to a Date object
  const startDate = new Date(startDateString);

  // Parse the end date if provided
  const endDate = endDateString ? new Date(endDateString) : null;

  // Extract the sign, hours, and minutes from the offset string
  const offsetMatch = offsetString.match(/([+-])(\d{2}):(\d{2})/);
  if (!offsetMatch) {
    throw new Error('Invalid GMT offset format');
  }

  const offsetSign = offsetMatch[1];
  const offsetHours = parseInt(offsetMatch[2], 10);
  const offsetMinutes = parseInt(offsetMatch[3], 10);

  // Calculate the total offset in minutes
  const totalOffsetMinutes = offsetHours * 60 + offsetMinutes;

  // Get the offset in milliseconds
  const offsetMilliseconds = totalOffsetMinutes * 60 * 1000;

  // Adjust the start and end dates to UTC by the offset
  const adjustedStartDate = new Date(
    startDate.getTime() - (offsetSign === '+' ? offsetMilliseconds : -offsetMilliseconds)
  );

  const adjustedEndDate = endDate
    ? new Date(endDate.getTime() - (offsetSign === '+' ? offsetMilliseconds : -offsetMilliseconds))
    : null;

  // Get the current date and time in the local timezone
  const currentDate = new Date();

  // Check if the current date falls between the adjusted start and end dates
  const isLive = currentDate >= adjustedStartDate && (!adjustedEndDate || currentDate <= adjustedEndDate);

  return isLive;
}
