import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

// Fungsi untuk melakukan proses preload data
function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      // Menampilkan indikator loading
      dispatch(showLoading());

      // Melakukan proses preload data
      const authUser = await api.getOwnProfile();

      // Mengatur state authUser dengan hasil dari preload data
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // Penanganan kesalahan (fallback process) jika preload data gagal
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // Menghentikan indikator loading setelah proses preload selesai, mengubah nilai isPreload menjadi false (awalnya true, diatur dalam reducer)
      dispatch(setIsPreloadActionCreator(false));

      // Menyembunyikan indikator loading
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
