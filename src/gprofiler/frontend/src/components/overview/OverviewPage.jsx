

import { Box, Skeleton } from '@mui/material';
import _ from 'lodash';
import { useMemo } from 'react';

import { useGetOverviewPageData } from '../../api/hooks/useGetOverviewPageData';
import SkewedButton from '../common/buttons/SkewedButton';
import StatsCard from '../common/dataDisplay/card/StatsCard';
import Flexbox from '../common/layout/Flexbox';
import PageHeader from '../common/layout/PageHeader';
import ServicesTable from './servicesTable/ServicesTable';
import { parseService } from './utils';

const ParagraphSkeleton = ({ rows = 5 }) => (
    <Box sx={{ width: '100%' }}>
        <Skeleton variant='text' width={200} animation='wave' />
        {Array.from(Array(rows - 2).keys()).map((key) => (
            <Skeleton variant='text' animation='wave' key={key} />
        ))}
        <Skeleton variant='text' width={250} animation='wave' />
    </Box>
);

const OverviewPage = () => {
    const { servicesData, servicesLoading } = useGetOverviewPageData();

    const calculatedServices = useMemo(() => {
        if (servicesLoading) {
            return [];
        }
        return _.map(servicesData, (service) => {
            return parseService(service);
        });
    }, [servicesData, servicesLoading]);

    const isLoading = !!servicesLoading;
    return (
        <>
            <PageHeader
                title='Overview'
                leftElement={
                    <SkewedButton href={'https://granulate.tourial.com/ProductTour'} target={'_blank'}>
                        Take our interactive tour
                    </SkewedButton>
                }
            />

            <Flexbox column sx={{ mt: 8, mx: 6, height: '120px' }} spacing={8}>
                {isLoading ? (
                    <Box sx={{ display: 'flex', height: '245px', maxWidth: '1050px' }}>
                        <ParagraphSkeleton rows={8} />
                        <Box sx={{ width: '40px' }} />
                        <ParagraphSkeleton rows={8} />
                    </Box>
                ) : (
                    <StatsCard />
                )}
                {isLoading ? (
                    <>
                        <Box sx={{ height: '15px' }} />
                        <ParagraphSkeleton rows={10} />
                    </>
                ) : (
                    <ServicesTable services={calculatedServices} />
                )}
            </Flexbox>
        </>
    );
};

export default OverviewPage;
