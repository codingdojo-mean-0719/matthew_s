export interface Weather {
  weather: any[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number
  };
}
