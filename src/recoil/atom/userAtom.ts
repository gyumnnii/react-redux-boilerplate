import { atom } from 'recoil';

const userAtom = atom({
  key: 'userAtom',
  default: {
    id: 0,
    name: '',
  },
});
export default userAtom;
