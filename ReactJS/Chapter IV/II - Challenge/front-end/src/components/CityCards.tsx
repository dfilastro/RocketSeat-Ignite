import { Flex, GridItem, Stack, Image } from '@chakra-ui/react';

interface CityCardProps {
  city: string;
  country: string;
  img: string;
  flag: string;
}

export default function CityCards({ city, country, img, flag }: CityCardProps) {
  return (
    <>
      <GridItem
        bgColor='white'
        height={['168px', '279px']}
        width={['156px', '256px']}
        border='1px'
        borderColor='highlight'
        borderRadius={['3px', '4px']}
        mb={['27px', '44px']}
      >
        <Image src={img} height={['105px', '173px']} fit='cover' />
        <Flex>
          <Stack height={['63px', '106px']} justifyContent='center' pl={['15px', '24px']}>
            <Flex fontSize={['12px', '20px']} fontWeight='600' color='gray.800'>
              {city}
            </Flex>
            <Flex fontSize={['9px', '16px']} fontWeight='500' color='gray.500'>
              {country}
            </Flex>
          </Stack>
          <Flex h={['18px', '30px']} w={['18px', '30px']} ml='auto' mr={['12px', '24px']} my='auto'>
            <Image borderRadius='50%' objectFit='cover' src={flag} />
          </Flex>
        </Flex>
      </GridItem>
    </>
  );
}
