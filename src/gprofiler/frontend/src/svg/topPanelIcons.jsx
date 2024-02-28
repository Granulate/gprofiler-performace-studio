{/*
 * Copyright (C) 2023 Intel Corporation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/}



import SvgIcon from '@mui/material/SvgIcon';

export const ExpandIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M3 3H9V5H5V9H3V3Z' fill={props.color || '#151833'} />
            <path d='M3 21H9V19H5V15H3V21Z' fill={props.color || '#151833'} />
            <path d='M15 21H21V15H19V19H15V21Z' fill={props.color || '#151833'} />
            <path d='M21 3H15V5H19V9H21V3Z' fill={props.color || '#583FFD'} />
        </SvgIcon>
    );
};

export const FilterIcon = ({ customFill, ...props }) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M2.95239 4V4C2.95239 4.03586 2.96576 4.07043 2.98989 4.09695L9.07873 10.7913C9.24617 10.9754 9.33896 11.2153 9.33896 11.4642V20.0464C9.33896 20.8716 10.282 21.3416 10.941 20.8449L14.2631 18.3403C14.5137 18.1514 14.6611 17.8557 14.6611 17.5418V11.4642C14.6611 11.2153 14.7539 10.9754 14.9213 10.7913L21.0101 4.09695C21.0343 4.07043 21.0476 4.03586 21.0476 4V4'
                stroke={customFill || '#151832'}
                strokeWidth='1.2'
                strokeLinecap='square'
                fill='none'
            />
            <rect
                x='2'
                y='4.40002'
                width='1.4'
                height='20'
                rx='0.7'
                transform='rotate(-90 2 4.40002)'
                fill={customFill || '#583FFD'}
            />
        </SvgIcon>
    );
};

export const MinimizeIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M9 9H3V7H7V3H9V9Z' fill='#141731' />
            <path d='M9 15H3V17H7V21H9V15Z' fill='#141731' />
            <path d='M21 15H15V21H17V17H21V15Z' fill='#141731' />
            <path d='M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z' fill='#583FFD' />
        </SvgIcon>
    );
};

export const ProcessIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.4662 3.78423C10.153 4.06134 9.97195 4.45052 9.88524 4.90677C9.82461 5.22581 9.63424 5.48516 9.4565 5.66895C9.26928 5.86255 9.0396 6.03076 8.80466 6.1632C8.56962 6.2957 8.30706 6.40494 8.04513 6.46545C7.79645 6.52289 7.47822 6.5526 7.1755 6.44433C6.76248 6.29661 6.3634 6.2616 5.99188 6.38706C5.62572 6.51071 5.19249 6.82189 4.76719 7.54898C4.26368 8.40978 4.22595 9.00804 4.33182 9.4167C4.44069 9.83697 4.7341 10.1838 5.1348 10.4693C5.38252 10.6458 5.5351 10.898 5.62716 11.1251C5.72184 11.3587 5.77286 11.6146 5.78734 11.8606C5.80182 12.1066 5.78125 12.3673 5.71322 12.6111C5.64701 12.8483 5.5216 13.1185 5.28868 13.3211C4.91918 13.6427 4.63354 14.0189 4.51344 14.4479C4.39939 14.8554 4.41354 15.384 4.77107 16.0735C5.19743 16.7562 5.64401 17.0303 6.03545 17.1279C6.44821 17.2307 6.89877 17.1617 7.35295 16.9831C7.64475 16.8683 7.94794 16.8843 8.19153 16.9367C8.44283 16.9907 8.68825 17.0952 8.90405 17.2243C9.11984 17.3533 9.32805 17.5201 9.49451 17.7161C9.65588 17.9061 9.81342 18.1659 9.84987 18.4777C9.90975 18.9898 10.0743 19.4394 10.3888 19.759C10.6907 20.066 11.2101 20.3333 12.1519 20.3333C13.0936 20.3333 13.613 20.066 13.915 19.759C14.2295 19.4394 14.394 18.9898 14.4539 18.4777C14.4904 18.1659 14.6479 17.9061 14.8093 17.7161C14.9757 17.5201 15.1839 17.3533 15.3997 17.2243C15.6155 17.0952 15.861 16.9907 16.1123 16.9367C16.3558 16.8843 16.659 16.8683 16.9508 16.9831C17.405 17.1617 17.8556 17.2307 18.2683 17.1279C18.6598 17.0303 19.1063 16.7562 19.5327 16.0735C19.9333 15.3009 19.906 14.7253 19.7371 14.2878C19.5551 13.8166 19.1733 13.4164 18.7297 13.095C18.2839 12.772 18.1435 12.2234 18.1435 11.8083C18.1435 11.3932 18.2839 10.8447 18.7297 10.5217C19.1733 10.2003 19.5551 9.8001 19.7371 9.32889C19.906 8.89134 19.9333 8.31573 19.5327 7.54316C19.1063 6.86049 18.6598 6.58636 18.2683 6.48881C17.8556 6.38594 17.405 6.45496 16.9508 6.6336C16.659 6.74837 16.3558 6.73232 16.1123 6.67996C15.861 6.62595 15.6155 6.52146 15.3997 6.3924C15.1839 6.26334 14.9757 6.09653 14.8093 5.90057C14.6479 5.7106 14.4904 5.45076 14.4539 5.13895C14.394 4.62683 14.2295 4.17722 13.915 3.85763C13.613 3.55069 13.0936 3.28333 12.1519 3.28333C11.2812 3.28333 10.7734 3.51235 10.4662 3.78423ZM9.61571 2.82314C10.2113 2.29612 11.0479 2 12.1519 2C13.3513 2 14.2322 2.35011 14.8298 2.9576C15.4151 3.55244 15.6496 4.31422 15.7286 4.98992C15.7278 4.98301 15.7269 4.9796 15.727 4.97956C15.7274 4.97944 15.7373 5.01081 15.7874 5.06973C15.8487 5.14192 15.9428 5.22185 16.0584 5.29101C16.1741 5.36015 16.2891 5.40534 16.382 5.42529C16.451 5.44013 16.4842 5.4364 16.4898 5.43591C17.0901 5.20114 17.8224 5.05508 18.5787 5.24356C19.3564 5.43739 20.0644 5.96109 20.6365 6.88798L20.6481 6.90683L20.6584 6.92644C21.2228 8.00011 21.2522 8.96778 20.9342 9.79123C20.6286 10.5825 20.033 11.1613 19.4874 11.5575C19.4842 11.5613 19.4738 11.5751 19.4615 11.6059C19.4417 11.6556 19.4269 11.7266 19.4269 11.8083C19.4269 11.89 19.4417 11.9611 19.4615 12.0107C19.4738 12.0416 19.4842 12.0554 19.4873 12.0592C20.033 12.4553 20.6286 13.0342 20.9342 13.8254C21.2522 14.6489 21.2228 15.6166 20.6584 16.6902L20.6481 16.7098L20.6365 16.7287C20.0644 17.6556 19.3564 18.1793 18.5787 18.3731C17.8224 18.5616 17.0901 18.4155 16.4898 18.1808C16.4842 18.1803 16.451 18.1765 16.382 18.1914C16.2891 18.2113 16.1741 18.2565 16.0584 18.3257C15.9428 18.3948 15.8487 18.4748 15.7874 18.5469C15.7373 18.6059 15.7274 18.6372 15.727 18.6371C15.7269 18.6371 15.7278 18.6337 15.7286 18.6267C15.6496 19.3025 15.4151 20.0642 14.8298 20.6591C14.2322 21.2666 13.3513 21.6167 12.1519 21.6167C10.9524 21.6167 10.0716 21.2666 9.47394 20.6591C8.88871 20.0642 8.65423 19.3025 8.57522 18.6267C8.57603 18.6337 8.5769 18.6371 8.57676 18.6371C8.57634 18.6372 8.56647 18.6059 8.51642 18.5469C8.45511 18.4748 8.36098 18.3948 8.24535 18.3257C8.12974 18.2565 8.01466 18.2113 7.92183 18.1914C7.85282 18.1765 7.81962 18.1803 7.81397 18.1808C7.21366 18.4155 6.4814 18.5616 5.7251 18.3731C4.9474 18.1793 4.23938 17.6556 3.66729 16.7287L3.65565 16.7098L3.64534 16.6902C3.1467 15.7416 3.06252 14.8704 3.27761 14.102C3.48676 13.3549 3.95782 12.7796 4.43951 12.3589C4.44273 12.354 4.45981 12.3281 4.47712 12.2661C4.50106 12.1803 4.51377 12.0643 4.50623 11.9361C4.49869 11.808 4.47239 11.6925 4.43783 11.6072C4.40977 11.538 4.38663 11.5131 4.3847 11.5106C3.84085 11.1218 3.29946 10.5491 3.08949 9.73853C2.87581 8.91369 3.0367 7.96566 3.65945 6.90102C4.19875 5.97904 4.8512 5.41772 5.58129 5.17118C6.30296 4.92748 7.00777 5.02273 7.60011 5.23326C7.6001 5.23325 7.6001 5.23324 7.6001 5.23323C7.60027 5.23232 7.64693 5.2403 7.75629 5.21504C7.87845 5.18682 8.02655 5.12864 8.17446 5.04526C8.32246 4.96183 8.44801 4.86572 8.53398 4.77682C8.60745 4.70085 8.62486 4.65886 8.62634 4.6574C8.74874 4.02144 9.02905 3.34226 9.61571 2.82314Z'
                fill='#151832'
            />
            <circle cx='12' cy='12' r='3.4' stroke='#583FFD' strokeWidth='1.2' fill='none' />
        </SvgIcon>
    );
};

export const SearchIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.8342 15.834C16.2489 15.4194 16.9211 15.4194 17.3357 15.834L21.1965 19.6948C21.6111 20.1094 21.6111 20.7816 21.1965 21.1962C20.7819 21.6109 20.1097 21.6109 19.6951 21.1962L15.8342 17.3354C15.4196 16.9208 15.4196 16.2486 15.8342 15.834Z'
                fill='#583FFD'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.5146 2.40833H10.5523C10.9043 2.40832 11.1002 2.40832 11.2688 2.41568C15.2713 2.59043 18.4763 5.79548 18.6511 9.798C18.6584 9.96653 18.6584 10.1625 18.6584 10.5145V10.5521C18.6584 10.9042 18.6584 11.1001 18.6511 11.2686C18.4763 15.2712 15.2713 18.4762 11.2688 18.651C11.1002 18.6583 10.9043 18.6583 10.5523 18.6583H10.5146C10.1626 18.6583 9.96665 18.6583 9.79813 18.651C5.7956 18.4762 2.59056 15.2712 2.4158 11.2686C2.40844 11.1001 2.40845 10.9042 2.40845 10.5522V10.5145C2.40845 10.1625 2.40844 9.96652 2.4158 9.798C2.59056 5.79548 5.7956 2.59043 9.79813 2.41568C9.96665 2.40832 10.1626 2.40832 10.5146 2.40833ZM10.5334 3.52352C10.1577 3.52352 9.98783 3.52365 9.84677 3.52981C6.42193 3.67935 3.67947 6.42181 3.52994 9.84665C3.52378 9.98771 3.52364 10.1576 3.52364 10.5333C3.52364 10.909 3.52378 11.0789 3.52994 11.22C3.67947 14.6448 6.42193 17.3873 9.84677 17.5368C9.98783 17.543 10.1577 17.5431 10.5334 17.5431C10.9091 17.5431 11.0791 17.543 11.2201 17.5368C14.645 17.3873 17.3874 14.6448 17.537 11.22C17.5431 11.0789 17.5432 10.909 17.5432 10.5333C17.5432 10.1576 17.5431 9.98771 17.537 9.84665C17.3874 6.42181 14.645 3.67935 11.2201 3.52981C11.0791 3.52365 10.9091 3.52352 10.5334 3.52352Z'
                fill='#151832'
            />
        </SvgIcon>
    );
};

export const ServiceIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M12.6 19.8H16.4C16.7314 19.8 17 20.0686 17 20.4C17 20.7314 16.7314 21 16.4 21L7.6 21C7.26863 21 7 20.7314 7 20.4C7 20.0686 7.26863 19.8 7.6 19.8H11.4V15.5H12.6V19.8Z'
                fill='#583FFD'
            />
            <mask id='path-2-inside-1_5249_16904' fill='white'>
                <rect x='3' y='4' width='18' height='12' rx='1' />
            </mask>
            <rect
                x='3'
                y='4'
                width='18'
                height='12'
                rx='1'
                stroke='black'
                strokeWidth='2.4'
                fill='none'
                mask='url(#path-2-inside-1_5249_16904)'
            />
        </SvgIcon>
    );
};

export const TimeIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.30005 12C2.30005 6.64289 6.64289 2.30005 12 2.30005C17.3572 2.30005 21.7001 6.64289 21.7001 12C21.7001 17.3572 17.3572 21.7001 12 21.7001C6.64289 21.7001 2.30005 17.3572 2.30005 12ZM12 3.70005C7.41609 3.70005 3.70005 7.41609 3.70005 12C3.70005 16.584 7.41609 20.3 12 20.3C16.584 20.3 20.3 16.584 20.3 12C20.3 7.41609 16.584 3.70005 12 3.70005Z'
                fill='#151832'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 7.30005C12.3866 7.30005 12.7 7.61345 12.7 8.00005V12.5938L15.8473 14.3923C16.183 14.5841 16.2996 15.0117 16.1078 15.3473C15.916 15.683 15.4884 15.7996 15.1528 15.6078L11.6528 13.6078C11.4346 13.4832 11.3 13.2512 11.3 13V8.00005C11.3 7.61345 11.6134 7.30005 12 7.30005Z'
                fill='#583FFD'
            />
        </SvgIcon>
    );
};

export const WeightIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M11.4 4.20001L7.6 4.20001C7.26863 4.20001 7 3.93138 7 3.60001C7 3.26864 7.26863 3.00001 7.6 3.00001L16.4 3.00001C16.7314 3.00001 17 3.26864 17 3.60001C17 3.93138 16.7314 4.20001 16.4 4.20001L12.6 4.20001L12.6 7.5L11.4 7.5L11.4 4.20001Z'
                fill='black'
            />
            <path
                d='M6.41729 7.91619C6.45682 7.73176 6.6198 7.6 6.80842 7.6H17.1916C17.3802 7.6 17.5432 7.73176 17.5827 7.91619L20.1541 19.9162C20.2075 20.1652 20.0177 20.4 19.763 20.4H4.23699C3.98233 20.4 3.79251 20.1652 3.84587 19.9162L6.41729 7.91619Z'
                stroke='black'
                strokeWidth='1.2'
                fill='none'
            />
            <circle cx='12' cy='14' r='3.4' stroke='#583FFD' strokeWidth='1.2' fill='none' />
        </SvgIcon>
    );
};
