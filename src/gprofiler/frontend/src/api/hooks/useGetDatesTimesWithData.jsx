

import _ from 'lodash';
import { stringify } from 'query-string';
import { useContext, useEffect, useState } from 'react';

import { DATA_URLS } from '../../api/urls';
import { FilterTagsContext } from '../../states/filters/FiltersTagsContext';
import { SelectorsContext } from '../../states/selectors';
import { CUSTOM_TIME_KEY, LAST_SNAPSHOT_TIME_KEY } from '../../utils/fgUtils';
import useFetchWithRequest from '../useFetchWithRequest';

const useGetDatesTimesWithData = (primarySelectedTime) => {
    const { selectedService } = useContext(SelectorsContext);
    const { activeFilterTag } = useContext(FilterTagsContext);
    const [filterInit, setFilterInit] = useState(false);
    let {
        loading,
        data: datetimes,
        run,
    } = useFetchWithRequest(
        {
            url: `${DATA_URLS.GET_FLAMEGRAPH_DATETIME_WITH_DATA}?${stringify({
                serviceName: selectedService,
                filter: activeFilterTag?.filter ? JSON.stringify(activeFilterTag) : undefined,
            })}`,
        },
        { manual: true, ready: !_.isUndefined(selectedService) }
    );

    const isPrimarySelectedTimeRelative =
        primarySelectedTime !== CUSTOM_TIME_KEY && primarySelectedTime !== LAST_SNAPSHOT_TIME_KEY;

    useEffect(() => {
        if (!isPrimarySelectedTimeRelative) {
            run();
        }
    }, [isPrimarySelectedTimeRelative, run, primarySelectedTime]);

    useEffect(() => {
        if (filterInit) {
            run();
        } else {
            setFilterInit(true);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeFilterTag]);
    return { datetimes, loading };
};

export default useGetDatesTimesWithData;
