import { AllPassenger } from '@/types/data';
import{ create} from 'zustand';

interface PaginationState {
  passengers: AllPassenger | null;
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  setPaginationData: (data: AllPassenger) => void;
}

const usePaginationStore = create<PaginationState>((set) => ({
  passengers: null,
  currentPage: 1,
  totalPages: 4,
  setPage: (page) => set({ currentPage: page }),
  setPaginationData: (data) =>
    set({ passengers: data, totalPages: data.pagination.meta.totalPage }),
}));

export default usePaginationStore;
