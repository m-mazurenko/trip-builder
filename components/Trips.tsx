import {useEffect, useState} from 'react';
import { tripsApiUrl } from '../constants/api-urls';
import {TripModel} from '../models/Trip.model';
import TripListItem from './TripListItem';
import {Box} from '@chakra-ui/react';

const Trips = () => {
  const [trips, setTrips] = useState<TripModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function deleteTripFromArray(id: TripModel['id']) {
    const newArr = trips.filter(trip => trip.id !== id);
    setTrips(newArr);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(tripsApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setTrips(data);
      })
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!trips.length) {
    return <div>No trips to show</div>
  }

  return (
    <Box mt={5}>
      {trips.map((trip) => {
        return <TripListItem trip={trip} key={trip.id} onDeleteCb={deleteTripFromArray}/>
      })}
    </Box>
  )
};

export default Trips;
