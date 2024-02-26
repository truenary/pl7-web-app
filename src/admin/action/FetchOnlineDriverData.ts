import { useEffect, useState } from 'react';
import { OnlineDriver } from '@/types/data';
import _ from 'lodash';
import { Repository } from '@/repositories/Repository';

export function useOnlineDrivers(repo: Repository): OnlineDriver[] | null {
  const [onlineDrivers, setOnlineDrivers] = useState<OnlineDriver[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await repo.getAllOnlineDriver();
        if (_.isArray(data)) {
          setOnlineDrivers(data);
        } else {
          console.error('Data is not in the expected format:', data);
          setOnlineDrivers(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setOnlineDrivers(null);
      }
    };

    fetchData();
  }, [repo]);

  return onlineDrivers;
}
