import { Center, Flex } from '@chakra-ui/react';

interface CarouselImgProps {
  title: string;
  subtitle: string;
  backgroundImg: string;
}

export function CarouselImg({ title, subtitle, backgroundImg }: CarouselImgProps) {
  return (
    <Center
      h={['180px', '270px', '360px', '450px']}
      bgImage={backgroundImg}
      bgSize='cover'
      bgPosition='center'
      mx='auto'
      // w='95vw'
      flexDir='column'
      gap='16px'
      fontWeight='700'
    >
      <Flex color='white' fontSize={['20px', '25px', '30px', '48px']}>
        {title}
      </Flex>
      <Flex color='white' fontSize={['10px', '14px', '18px', '24px']}>
        {subtitle}
      </Flex>
    </Center>
  );
}
