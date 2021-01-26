import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { mapClient } from '../client/client';

const Postcode = () => {
  const handleComplete = async data => {
    const fullAddress = data.address;
    console.log(fullAddress);
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
    const ex = await mapClient.getDriving({
      start: ['127.12345', '37.12345'],
      goal: ['127.0196641', '37.5223765'],
    });

    console.log(tester.x, tester.y);
    console.log(ex);
  };

  return <DaumPostcode onComplete={handleComplete} />;
};

export default Postcode;
