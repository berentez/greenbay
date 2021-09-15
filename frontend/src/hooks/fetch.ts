import { useEffect, useState } from 'react';
import config from '../config';
import { useDispatch } from 'react-redux';

import { RequestOptions } from '../interfaces';
// import useAsyncError from './asyncError';
// import {
//   hideLoadingSign,
//   showLoadingSign,
// } from '../store/actions/loadingAction';

const useFetch = <Type>(
  token: string,
  url: string,
  requestOptions: RequestOptions
) => {
  const [data, setData] = useState<Type>();
  const dispatch = useDispatch();
  // const throwError = useAsyncError();

  useEffect(() => {
    let active: boolean = true;

    // dispatch(showLoadingSign(url));

    if (token) {
      requestOptions.headers = {
        authorization: `${token}`,
      };
    } else {
      // throwError({ status: 403, message: 'forbidden' });
    }
    const fetchData = () => {
      fetch(`${config.url}/api/${url}`, requestOptions)
        .then(res => {
          if (active) {
            // if (!res.ok) {
            //   if ([401, 403].includes(res.status)) {
            //     throwError({
            //       status: res.status,
            //       message: res.status === 401 ? 'unauthorized' : 'forbidden',
            //     });
            //   } else {
            //     throwError({
            //       status: 500,
            //       message: 'could not fetch the data',
            //     });
            //   }
            // }
            return res.json();
          }
        })
        .then(resData => {
          if (active) {
            setData(resData);
          }
        })
        .catch(err => {
          // if (active) {
          //   throwError({ status: 500, message: err.message });
          // }
        })
        .finally(() => {
          // if (active) {
          //   dispatch(hideLoadingSign(url));
          // }
        });
    };

    fetchData();

    return () => {
      active = false;
      //   dispatch(hideLoadingSign(url));
    };
  }, [token, url, requestOptions, /*throwError,*/ dispatch]);

  return {
    data,
  };
};

export default useFetch;
