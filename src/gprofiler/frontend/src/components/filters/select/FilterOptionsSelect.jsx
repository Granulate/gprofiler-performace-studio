{/*
 * INTEL CONFIDENTIAL
 * Copyright (C) 2023 Intel Corporation
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by the express license under which they were provided to you ("License"). Unless the License provides otherwise, you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents without Intel's prior written permission.
 * This software and the related documents are provided as is, with no express or implied warranties, other than those that are expressly stated in the License.
*/}

import { CircularProgress, Popper, Typography } from '@mui/material';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import _ from 'lodash';
import { createContext, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { VariableSizeList } from 'react-window';

import { COLORS } from '../../../theme/colors';
import Tooltip from '../../common/dataDisplay/muiToolTip/Tooltip';

const LISTBOX_PADDING = 4;

function renderRow(props) {
    const { data, index, style } = props;
    const dataSet = data[index];
    const inlineStyle = {
        ...style,
        top: style.top + LISTBOX_PADDING,
        fontSize: '12px',
        paddingLeft: 15,
    };

    const withSamples = !_.isEmpty(dataSet[1].samples);
    const label = withSamples ? `${dataSet[1].name} (${dataSet[1].samples} Samples)` : dataSet[1].name;

    return (
        <Tooltip content={label.length > 30 ? label : ''} placement='right'>
            <Typography component='li' {...dataSet[0]} noWrap style={inlineStyle}>
                {label}
            </Typography>
        </Tooltip>
    );
}

const StyledInput = styled(InputBase)(() => ({
    width: '300px',
    padding: 0,
    height: 36,
    color: COLORS.BLACK,
    backgroundColor: COLORS.FIELD_BLUE_B,
    borderRadius: 4,
    '& input': {
        padding: '0px 8px',
        fontSize: 14,
        backgroundColor: 'fieldBlueB.main',
        fontFamily: 'Lato',
    },
}));

const OuterElementContext = createContext({});

const OuterElementType = forwardRef((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});
OuterElementType.displayName = 'OuterElementType';

function useResetCache(data) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}

// Adapter for react-window
const ListboxComponent = forwardRef(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = [];
    children.forEach((item) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
    });

    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });

    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = () => {
        return itemSize;
    };

    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={getHeight() + 2 * LISTBOX_PADDING}
                    width='100%'
                    ref={gridRef}
                    outerElementType={OuterElementType}
                    innerElementType='ul'
                    itemSize={(index) => getChildSize(itemData[index])}
                    overscanCount={5}
                    itemCount={itemCount}>
                    {renderRow}
                </VariableSizeList>
            </OuterElementContext.Provider>
        </div>
    );
});

const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        backgroundColor: COLORS.FIELD_BLUE_B,
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
    [`& .${autocompleteClasses.noOptions}`]: {
        backgroundColor: COLORS.FIELD_BLUE_B,
        fontSize: 13,
        fontFamily: 'Lato',
    },
});

const FilterOptionsSelect = ({ disabled = false, loading, value, onChange, options }) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <Autocomplete
            disabled={disabled}
            PopperComponent={StyledPopper}
            ListboxComponent={ListboxComponent}
            value={value}
            inputValue={inputValue}
            getOptionLabel={(option) => option?.name || ''}
            isOptionEqualToValue={(option, value) => option.name === value}
            filterOptions={(options, { inputValue }) => options.filter((item) => item.name.includes(inputValue))}
            onInputChange={(event, value, reason) => {
                if (event && event.type === 'blur') {
                    setInputValue('');
                } else if (reason !== 'reset') {
                    setInputValue(value);
                }
            }}
            onChange={(event, newValue) => {
                if (!newValue || (event.type === 'keydown' && event.key === 'Backspace')) {
                    return;
                }
                setInputValue(newValue.name);
                onChange(newValue.name);
            }}
            renderTags={() => null}
            noOptionsText={'no options'}
            renderOption={(props, option, { selected }) => [{ ...props, selected }, option]}
            options={options}
            renderInput={(params) => (
                <StyledInput
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    endAdornment={loading ? <CircularProgress size={20} sx={{ mr: 4 }} /> : null}
                    placeholder={loading ? 'loading' : value ? value : _.isEmpty(options) ? 'no options' : 'Value'}
                />
            )}
        />
    );
};

export default FilterOptionsSelect;
