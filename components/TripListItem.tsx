import {useEffect} from 'react';
import Image from 'next/image';
import { tripsApiUrl } from '../constants/api-urls';
import {TripModel} from '../models/Trip.model';
import {Flex, Box, Heading, Menu, MenuButton, Button, MenuList, MenuItem} from '@chakra-ui/react';
import { ChevronDownIcon, CalendarIcon } from '@chakra-ui/icons';

const TripListItem = ({ trip, onDeleteCb }: { trip: TripModel, onDeleteCb: (id: TripModel['id']) => void }) => {

  function deleteTrip() {
    fetch(`${tripsApiUrl}/${trip.id}`, {
      method: 'Delete',
    })
      .then((res) => res.json())
      .then((data) => {
        onDeleteCb(trip.id);
        console.log(data);
      })
  }

  return (
    <Flex mb={2}>
      <div>
        <Image
          height={120}
          width={175}
          src={trip.image}
          layout="fixed"
        />
      </div>
      <Box ml={2}>
        <Heading size="md">
          {trip.name}
          {' to '}
          {trip.destination}
        </Heading>
        <Flex align="center">
          <CalendarIcon mr={2} />
          {trip.startDate}
          {' - '}
          {trip.endDate}
        </Flex>
      </Box>
      <Box ml="auto">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem onClick={deleteTrip}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
};

export default TripListItem;
