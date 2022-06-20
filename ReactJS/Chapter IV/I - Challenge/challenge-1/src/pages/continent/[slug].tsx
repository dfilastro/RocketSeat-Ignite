import { Box, Flex, Grid, GridItem, Image, Stack } from '@chakra-ui/react';
import CardsCountries from '../../components/CardsInfoCountries';
import CityCards from '../../components/CityCards';
import { GetStaticPaths, GetStaticProps } from 'next';

import api from '../../services/api';
import city from '../../services/city-api';
import HeaderSlug from '../../components/HeaderSlug';

export default function Continent({ continent }) {
  console.log(continent);

  return (
    <>
      <HeaderSlug />
      <Stack h='500px'>
        <Image
          height='500px'
          position='absolute'
          zIndex='-99'
          minW='100%'
          // src='https://user-images.githubusercontent.com/90292951/174315831-1c21fcf3-1271-4346-ad08-045f487e2f57.png'
          src={continent.coverImg}
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
            {continent.name}
          </Flex>
        </Stack>
      </Stack>

      <Flex pt='80px' pb='80px' pr='140px' pl='140px' gap='70px'>
        <Box w='50%' fontSize='24px' textAlign='justify'>
          {continent.description}
        </Box>
        <Flex m='auto' alignItems='center' w='40%' justifyContent='space-between'>
          <CardsCountries num={continent.countries} desc='paises' />
          <CardsCountries num={continent.languages} desc='línguas' />
          <CardsCountries num={continent.cities} desc='cidades +100' />
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

export async function getStaticProps({ params }) {
  const { data } = await api.get(`${params.slug}`);
  const cityData = await city.get(`${params.slug}`);

  // console.log(cityData.data);

  const continent = {
    uid: data[0].continentId,
    name: data[0].name,
    description: data[0].description,
    countries: data[0].countries,
    languages: data[0].languages,
    cities: data[0].cities,
    coverImg: cityData.data[2].image,
  };
  // console.log(continent);

  return { props: { continent } };
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: '1' } },
      { params: { slug: '2' } },
      { params: { slug: '3' } },
      { params: { slug: '4' } },
      { params: { slug: '5' } },
    ],
    fallback: false,
  };
};
