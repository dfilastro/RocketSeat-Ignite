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
        height='279px'
        width='256px'
        border='1px'
        borderColor='highlight'
        borderRadius='4px'
        mb='44px'
      >
        <Image src={img} height='173px' fit='cover' />
        <Flex>
          <Stack height='106px' justifyContent='center' pl='24px'>
            <Flex fontSize='20px' fontWeight='600' color='gray.800'>
              {city}
            </Flex>
            <Flex fontSize='16px' fontWeight='500' color='gray.500'>
              {country}
            </Flex>
          </Stack>
          <Flex h='30px' w='30px' ml='auto' mr='24px' my='auto'>
            <Image borderRadius='50%' objectFit='cover' src={flag} />
          </Flex>
        </Flex>
      </GridItem>
    </>
  );
}
