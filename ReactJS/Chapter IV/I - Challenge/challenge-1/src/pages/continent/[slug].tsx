import { Box, Flex, Grid, GridItem, Image, Stack } from '@chakra-ui/react';
import CardsCountries from '../../components/CardsInfoCountries';
import CityCards from '../../components/CityCards';

export default function Continent() {
  return (
    <>
      <Stack h='500px'>
        <Image
          height='500px'
          position='absolute'
          zIndex='-99'
          minW='100%'
          src='https://user-images.githubusercontent.com/90292951/174315831-1c21fcf3-1271-4346-ad08-045f487e2f57.png'
          fit='cover'
        />
        <Stack>
          <Flex
            fontSize='48px'
            fontWeight='600'
            color='white'
            ml='140px'
            display='flex'
            alignItems='flex-end'
            height='500px'
            paddingBottom='59px'
          >
            Europa
          </Flex>
        </Stack>
      </Stack>

      <Flex pt='80px' pb='80px' pr='140px' pl='140px' gap='70px'>
        <Box w='50%' fontSize='24px' textAlign='justify'>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
          ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de
          águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Box>
        <Flex m='auto' alignItems='center' w='40%' justifyContent='space-between'>
          <CardsCountries num={50} desc='paises' />
          <CardsCountries num={60} desc='línguas' />
          <CardsCountries num={27} desc='cidades +100' />
        </Flex>
      </Flex>

      <Stack pl='140px' pr='140px' pb='80px'>
        <Flex fontSize='36px' fontWeight='500' color='gray.800' pb='44px'>
          Cidades +100
        </Flex>

        <Grid templateColumns='repeat(5, 1fr)' gap='6px' justifyItems='center'>
          <CityCards
            city='Londres'
            country='Reino Unido'
            img='https://d13k13wj6adfdf.cloudfront.net/urban_areas/london_web-e8502ca139.jpg'
            flag='https://flagcdn.com/gb.svg'
          />
          <CityCards
            city='Paris'
            country='França'
            img='https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris_web-0a3c7314a5.jpg'
            flag='https://flagcdn.com/fr.svg'
          />
          <CityCards
            city='Roma'
            country='Italia'
            img='https://d13k13wj6adfdf.cloudfront.net/urban_areas/rome_web-30e1610428.jpg'
            flag='https://flagcdn.com/it.svg'
          />
          <CityCards
            city='Praga'
            country='Republica Tcheca'
            img='https://d13k13wj6adfdf.cloudfront.net/urban_areas/prague_web-c800dc9a25.jpg'
            flag='https://flagcdn.com/cz.svg'
          />
          <CityCards
            city='Amsterdã'
            country='Holanda'
            img='https://d13k13wj6adfdf.cloudfront.net/urban_areas/amsterdam_web-1cd4b2bf75.jpg'
            flag='https://flagcdn.com/nl.svg'
          />
        </Grid>
      </Stack>
    </>
  );
}
