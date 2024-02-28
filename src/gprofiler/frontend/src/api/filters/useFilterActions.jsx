

import { useContext, useState } from 'react';

import { SelectorsContext } from '../../states';
import { DATA_URLS } from '../urls';
import useFetchWithRequest from '../useFetchWithRequest';

const useFiltersActions = ({ filter }) => {
    const { selectedService } = useContext(SelectorsContext);

    const {
        loading: savingFilter,
        error: saveFilterError,
        run: saveFilter,
    } = useFetchWithRequest(
        {
            url: DATA_URLS.GET_FILTERS_FOR_SERVICE(selectedService),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(filter),
        },
        { refreshDeps: [selectedService, filter], manual: true }
    );

    const {
        loading: editingFilter,
        error: editFilterError,
        run: editFilter,
    } = useFetchWithRequest(
        {
            url: DATA_URLS.FILTERS,
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(filter),
        },
        { refreshDeps: [selectedService, filter], manual: true }
    );

    return {
        savingFilter,
        saveFilterError,
        saveFilter,
        editingFilter,
        editFilterError,
        editFilter,
    };
};

export default useFiltersActions;

export const useFilterDelete = ({ onRemoveExistingFilter }) => {
    const { selectedService } = useContext(SelectorsContext);

    const [idToDelete, setIdToDelete] = useState('');
    const { loading: deletingFilter, error: deleteFilterError } = useFetchWithRequest(
        {
            url: `${DATA_URLS.FILTERS}/${idToDelete}`,
            method: 'DELETE',
        },
        {
            refreshDeps: [selectedService, idToDelete],
            ready: idToDelete,
            onSuccess: () => {
                setIdToDelete('');
                onRemoveExistingFilter();
            },
        }
    );

    return {
        deletingFilter,
        deleteFilterError,
        setIdToDelete,
    };
};
