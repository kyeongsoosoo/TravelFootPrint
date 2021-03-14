import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import { mapClient } from '../../../client/client';
import { LocationType } from '../../../lib/types';
import { arriveCord, departureCord } from '../../../redux/distance/action';

interface IPost {
  handleInput: (item: any) => void;
  type: LocationType;
}

const Postcode = (props: IPost) => {
  const dispatch = useDispatch();
  const handleComplete = async data => {
    const fullAddress = data.address;
    props.handleInput(fullAddress);

    // let extraAddress = '';

    // if (data.addressType === 'R') {
    //   if (data.bname !== '') {
    //     extraAddress += data.bname;
    //   }
    //   if (data.buildingName !== '') {
    //     extraAddress +=
    //       extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    //   }
    //   fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    // }

    const tester = await mapClient.getGeo(fullAddress);

    if (props.type == LocationType.departure) {
      dispatch(departureCord({ x: tester.x, y: tester.y }));
    } else {
      dispatch(arriveCord({ x: tester.x, y: tester.y }));
    }
  };

  return <DaumPostcode onComplete={handleComplete} width={400} height={400} />;
};

export default Postcode;
