import { useSelector , useDispatch , useStore } from "react-redux";

import { AppStore ,AppDispatch ,RootState } from "./redux/Store";


// Now use throughout the application instead of useSelector , useDispatch , useStore

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()